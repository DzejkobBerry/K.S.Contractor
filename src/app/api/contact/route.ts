import { NextResponse } from 'next/server';

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type FieldErrorCode = 'required' | 'invalid_email';

const isEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const normalizeEnvValue = (v: string | undefined) => {
  const trimmed = (v ?? '').toString().trim();
  if (!trimmed) return '';
  const first = trimmed[0];
  const last = trimmed[trimmed.length - 1];
  if (
    trimmed.length >= 2 &&
    ((first === last && (first === '"' || first === "'" || first === '`')))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
};

const parseHttpsUrl = (raw: string) => {
  const u = new URL(raw);
  if (u.protocol !== 'https:') throw new Error('Invalid protocol');
  return u;
};

const seemsApiUrl = (u: URL) => {
  const p = u.pathname.toLowerCase();
  if (p.includes('/api/')) return true;
  if (p.endsWith('/api')) return true;
  if (p.endsWith('/send') || p.endsWith('/submit')) return true;
  if (p.endsWith('/contact')) return false;
  return false;
};

type ForwardFailure = {
  status: number;
  contentType: string;
  bodySnippet: string;
};

const readSnippet = async (res: Response, limit: number) => {
  const txt = await res.text().catch(() => '');
  return txt.length > limit ? txt.slice(0, limit) : txt;
};

const isHtmlLike = (contentType: string, bodySnippet: string) => {
  if (contentType.toLowerCase().includes('text/html')) return true;
  const s = bodySnippet.trimStart().toLowerCase();
  if (s.startsWith('<!doctype') || s.startsWith('<html') || s.startsWith('<head')) return true;
  return false;
};

const forwardToBloompixel = async (args: {
  url: string;
  apiKey: string;
  payload: { name: string; email: string; message: string; subject: string; phone: string };
}) => {
  const commonHeaders = {
    Authorization: `Bearer ${args.apiKey}`,
    'X-API-Key': args.apiKey,
  } as const;

  const tryJson = async () => {
    const res = await fetch(args.url, {
      method: 'POST',
      headers: {
        ...commonHeaders,
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
      },
      body: JSON.stringify(args.payload),
    });
    const contentType = res.headers.get('content-type') ?? '';
    const bodySnippet = await readSnippet(res, 800);
    return { res, contentType, bodySnippet };
  };

  const tryForm = async () => {
    const mergedMessage = [
      args.payload.subject ? `Subject: ${args.payload.subject}` : '',
      args.payload.phone ? `Phone: ${args.payload.phone}` : '',
      '',
      args.payload.message,
    ]
      .filter(Boolean)
      .join('\n');

    const formBody = new URLSearchParams({
      name: args.payload.name,
      email: args.payload.email,
      message: mergedMessage,
    });

    const res = await fetch(args.url, {
      method: 'POST',
      headers: {
        ...commonHeaders,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Accept: 'application/json, text/plain, */*',
      },
      body: formBody.toString(),
    });
    const contentType = res.headers.get('content-type') ?? '';
    const bodySnippet = await readSnippet(res, 800);
    return { res, contentType, bodySnippet };
  };

  const first = await tryJson();
  if (first.res.ok) return { ok: true as const, forwarded: true as const, urlUsed: args.url };

  if ([400, 415, 422].includes(first.res.status)) {
    const second = await tryForm();
    if (second.res.ok) return { ok: true as const, forwarded: true as const, urlUsed: args.url };
    return {
      ok: false as const,
      failure: {
        status: second.res.status,
        contentType: second.contentType,
        bodySnippet: second.bodySnippet,
      } satisfies ForwardFailure,
    };
  }

  return {
    ok: false as const,
    failure: {
      status: first.res.status,
      contentType: first.contentType,
      bodySnippet: first.bodySnippet,
    } satisfies ForwardFailure,
  };
};

export async function POST(req: Request) {
  const apiKey = normalizeEnvValue(process.env.BLOOMPIXEL_API_KEY);
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, success: false, error: 'Brak BLOOMPIXEL_API_KEY w konfiguracji serwera.' },
      { status: 500 }
    );
  }

  const envAny = process.env as Record<string, string | undefined>;
  const sendUrlEnv = normalizeEnvValue(process.env.BLOOMPIXEL_API_SEND_URL);
  const fallbackUrlEnv = normalizeEnvValue(envAny.bloompixel_api_url);

  if (!sendUrlEnv && !fallbackUrlEnv) {
    return NextResponse.json(
      {
        ok: false,
        success: false,
        error: 'Brak BLOOMPIXEL_API_SEND_URL (lub fallback: bloompixel_api_url) w konfiguracji serwera.',
      },
      { status: 500 }
    );
  }

  let sendUrlParsed: URL | null = null;
  let fallbackUrlParsed: URL | null = null;
  try {
    if (sendUrlEnv) sendUrlParsed = parseHttpsUrl(sendUrlEnv);
    if (fallbackUrlEnv) fallbackUrlParsed = parseHttpsUrl(fallbackUrlEnv);
  } catch {
    return NextResponse.json(
      { ok: false, success: false, error: 'Niepoprawny URL Bloompixel (musi być poprawny i zaczynać się od https://).' },
      { status: 500 }
    );
  }

  const candidates = [sendUrlParsed?.toString(), fallbackUrlParsed?.toString()].filter(
    (v, i, arr): v is string => Boolean(v) && arr.indexOf(v) === i
  );

  const orderedCandidates = [...candidates].sort((a, b) => {
    const aApi = seemsApiUrl(new URL(a));
    const bApi = seemsApiUrl(new URL(b));
    if (aApi === bApi) return 0;
    return aApi ? -1 : 1;
  });

  let data: Partial<ContactPayload> | null = null;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Nieprawidłowy format danych.' },
      { status: 400 }
    );
  }

  const name = (data?.name || '').toString().trim();
  const phone = (data?.phone || '').toString().trim();
  const email = (data?.email || '').toString().trim();
  const subject = (data?.subject || '').toString().trim();
  const message = (data?.message || '').toString().trim();

  const errors: Record<string, FieldErrorCode> = {};
  if (!name) errors.name = 'required';
  if (!phone) errors.phone = 'required';
  if (!email) errors.email = 'required';
  else if (!isEmail(email)) errors.email = 'invalid_email';
  if (!subject) errors.subject = 'required';
  if (!message) errors.message = 'required';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, success: false, errors }, { status: 400 });
  }

  try {
    const payload = { name, email, message, subject, phone };

    let lastFailure: ForwardFailure | null = null;
    let lastUrlUsed: string | null = null;
    let firstWasWww: boolean = false;

    for (let i = 0; i < orderedCandidates.length; i++) {
      const url = orderedCandidates[i];
      lastUrlUsed = url;
      console.info(`[contact] forwarding -> ${url}`);

      const result = await forwardToBloompixel({ url, apiKey, payload });
      if (result.ok) {
        console.info(`[contact] forwarded ok`);
        return NextResponse.json({ ok: true, success: true, forwarded: true });
      }

      const ct = result.failure.contentType;
      const isHtml = isHtmlLike(ct, result.failure.bodySnippet);
      console.info(`[contact] forward failed status=${result.failure.status} content-type=${ct || '(none)'}`);
      if (result.failure.bodySnippet) console.info(`[contact] forward body (snippet): ${result.failure.bodySnippet}`);

      lastFailure = result.failure;

      const isLikelyWwwFormIssue =
        isHtml || [403, 405].includes(result.failure.status);

      if (i === 0 && sendUrlParsed && url === sendUrlParsed.toString() && isLikelyWwwFormIssue) {
        firstWasWww = true;
      }

      if (!isLikelyWwwFormIssue) break;
    }

    if (!lastFailure) {
      return NextResponse.json(
        { ok: false, success: false, error: 'Nie udało się wysłać wiadomości.' },
        { status: 502 }
      );
    }

    if (firstWasWww) {
      return NextResponse.json(
        {
          ok: false,
          success: false,
          forwarded: false,
          error:
            'BLOOMPIXEL_API_SEND_URL wskazuje na stronę WWW, a nie API – ustaw prawidłowy endpoint.',
          details: { status: lastFailure.status, contentType: lastFailure.contentType, urlUsed: lastUrlUsed },
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        success: false,
        forwarded: false,
        error: 'Forwarding do Bloompixel nie powiódł się.',
        details: { status: lastFailure.status, contentType: lastFailure.contentType, urlUsed: lastUrlUsed },
      },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, success: false, error: 'Błąd połączenia z serwisem.' },
      { status: 500 }
    );
  }
}
