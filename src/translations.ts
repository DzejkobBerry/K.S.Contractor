export type Language = 'pl' | 'nl';

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    testimonials: string;
    gallery: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaContact: string;
    ctaServices: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    location: string;
    since: string;
  };
  stats: {
    projects: string;
    clients: string;
    experience: string;
    team: string;
  };
  process: {
    title: string;
    subtitle: string;
    step1: { title: string; desc: string };
    step2: { title: string; desc: string };
    step3: { title: string; desc: string };
    step4: { title: string; desc: string };
  };
  faq: {
    label: string;
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
  };
  services: {
    title: string;
    items: {
      tiles: string;
      flooring: string;
      wallpaper: string;
      painting: string;
      drywall: string;
      garden: string;
      demolition: string;
      concrete: string;
      concreteFloor: string;
    };
    descriptions: {
      tiles: string;
      flooring: string;
      wallpaper: string;
      painting: string;
      drywall: string;
      garden: string;
      demolition: string;
      concrete: string;
      concreteFloor: string;
    };
  };
  whyUs: {
    title: string;
    flexibility: string;
    flexibilityDesc: string;
    speed: string;
    quality: string;
    clients: string;
    noDifficulty: string;
    certifications: string;
    label: string;
    certificationsDesc: string;
    speedDesc: string;
    qualityDesc: string;
    clientsDesc: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      phone: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      success: string;
      successTitle: string;
      successSubtitle: string;
      close: string;
    };
    details: {
      location: string;
      area: string;
      largeProjects: string;
      smallProjects: string;
      hours: string;
      weekdays: string;
      saturday: string;
      sunday: string;
      quote: string;
    };
  };
  modal: {
    title: string;
    choose: string;
  };
  testimonials: {
    label: string;
    heading: string;
    headingHighlight: string;
    quote: string;
  };
  servicesSection: {
    label: string;
    description: string;
    itemDescription: string;
    learnMore: string;
  };
  common: {
    closeMenu: string;
    openMenu: string;
    menu: string;
  };
}

export const translations: Record<Language, Translation> = {
  pl: {
    nav: {
      home: 'Start',
      about: 'O nas',
      services: 'Usługi',
      testimonials: 'Opinie',
      gallery: 'Galeria',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Profesjonalne usługi remontowo-budowlane',
      subtitle: 'Mistrzowska precyzja, luksusowe wykończenia i niezawodność potwierdzona certyfikatami VCA & GPI. Twój partner w Rotterdamie.',
      ctaContact: 'Bezpłatna wycena',
      ctaServices: 'Nasze specjalizacje',
    },
    about: {
      title: 'K.S. Contractor',
      p1: 'Jesteśmy liderem w sektorze usług remontowych w Holandii. Nasza filozofia opiera się na trzech filarach: bezkompromisowej jakości, innowacyjnych technikach budowlanych oraz pełnej transparentności kosztów.',
      p2: 'Od 2023 roku przekształcamy wizje naszych klientów w rzeczywistość, dbając o każdy milimetr powierzchni. Specjalizujemy się w kompleksowych renowacjach apartamentów i obiektów komercyjnych.',
      p3: 'Zlokalizowani w sercu Rotterdamu, dostarczamy usługi na najwyższym europejskim poziomie, łącząc polską pracowitość z holenderskim profesjonalizmem.',
      location: 'Siedziba: Rotterdam',
      since: 'Na rynku od: 2023',
    },
    stats: {
      projects: 'Realizacji',
      clients: 'Zadowolonych Inwestorów',
      experience: 'Lat w Branży',
      team: 'Fachowców Budowlanych',
    },
    process: {
      title: 'Ścieżka Realizacji',
      subtitle: 'Od pierwszego szkicu do finalnego przekazania kluczy. Proces zaprojektowany dla Twojego spokoju.',
      step1: { title: 'Analiza & Wizja', desc: 'Szczegółowa konsultacja techniczna i estetyczna Twojego projektu.' },
      step2: { title: 'Precyzyjna Wycena', desc: 'Transparentny kosztorys bez ukrytych opłat i niespodzianek.' },
      step3: { title: 'Mistrzowska Praca', desc: 'Realizacja z użyciem najnowocześniejszych narzędzi i materiałów.' },
      step4: { title: 'Gwarancja Jakości', desc: 'Finalny odbiór techniczny i przekazanie dokumentacji.' },
    },
    faq: {
      label: 'Zaufanie',
      title: 'Strefa Wiedzy',
      q1: 'Czy działacie poza Rotterdamem?',
      a1: 'Tak, przy dużych projektach operujemy na terenie całej Holandii. Małe zlecenia realizujemy w promieniu 50 km od Rotterdamu.',
      q2: 'Jakie certyfikaty posiada firma?',
      a2: 'Posiadamy pełne certyfikacje VCA (bezpieczeństwo pracy) oraz GPI (dostęp do placów budowy w NL).',
      q3: 'Czy oferujecie gwarancję na wykonane prace?',
      a3: 'Oczywiście. Każda nasza usługa objęta jest pisemną gwarancją jakości, co daje Ci pełne bezpieczeństwo inwestycji.',
    },
    services: {
      title: 'Fachowy Zakres',
      items: {
        tiles: 'Glazurnictwo',
        flooring: 'Systemy Podłogowe',
        wallpaper: 'Dekoracje Ścienne & Tapety',
        painting: 'Malowanie Natryskowe & Tradycyjne',
        drywall: 'Konstrukcje G-K & Sufity Podwieszane',
        garden: 'Podstawowe Prace Ogrodnicze',
        demolition: 'Wyburzenia Kontrolowane',
        concrete: 'Inżynieria Betonowa',
        concreteFloor: 'Renowacja Posadzek Przemysłowych',
      },
      descriptions: {
        tiles: 'Profesjonalne wykonanie prac glazurniczych z użyciem materiałów najwyższej klasy i certyfikowanych technik. Dostosowane do projektów w Holandii.',
        flooring: 'Profesjonalne systemy podłogowe z materiałów najwyższej klasy. Doskonałe wykończenia dla mieszkań i obiektów komercyjnych.',
        wallpaper: 'Fachowe prace dekoracyjne i instalacja tapety. Transformacja pomieszczeń z najwyższą dbałością o detale.',
        painting: 'Profesjonalne malowanie tradycyjne i natryskowe, wewnątrz i na zewnątrz. Jakość i precyzja na każdej powierzchni.',
        drywall: 'Konstrukcje gipsowe i sufity podwieszane. Nowoczesne rozwiązania architektoniczne dla Twojej przestrzeni.',
        garden: 'Koszenie, przycinanie, sadzenie i prace porządkowe.',
        demolition: 'Profesjonalne prace rozbiórkowe i wyburzenia kontrolowane o małych i średnich gabarytach. Zawsze z najwyższymi standardami bezpieczeństwa.',
        concrete: 'Prace betonowe oraz reperacje betonowe wykonywane z największą dbałością o odwzorowanie kształtu uszkodzonego elementu.',
        concreteFloor: 'Renowacja posadzek do 50m2. Specjalizujemy się w tarasach, balkonach, garażach i pomieszczeniach gospodarczych.',
      },
    },
    whyUs: {
      title: 'Dlaczego K.S. Contractor?',
      flexibility: 'Dostępność 24/7 dla stałych klientów',
      speed: 'Ekspresowe Terminy Realizacji',
      quality: 'Materiały Najwyższej Klasy',
      clients: 'Zaufanie Firm i Osób Prywatnych',
      noDifficulty: 'Rozwiązujemy Najtrudniejsze Wyzwania',
      certifications: 'Standardy Bezpieczeństwa VCA & GPI',
      label: 'Zalety',
      certificationsDesc: 'Stosujemy najsurowsze protokoły bezpieczeństwa w Holandii. Certyfikacje VCA i GPI to dla nas standard, nie opcja.',
      flexibilityDesc: 'Lojalności nie można nakazać, trzeba na nią zasłużyć.',
      speedDesc: 'Szybka realizacja bez kompromisów na jakości, którą się wyróżniamy.',
      qualityDesc: 'Wyłącznie materiały najwyższej klasy i certyfikowane techniki budowlane.',
      clientsDesc: 'Zaufanie udzielane nam przez firmy i inwestorów prywatnych w całej Holandii.',
    },
    gallery: {
      title: 'Portfolio Realizacji',
      subtitle: 'Galeria projektów, które definiują nowoczesne budownictwo w Holandii.',
    },
    contact: {
      title: 'Rozpocznijmy Projekt',
      subtitle: 'Wypełnij formularz poniżej, a nasz fachowiec skontaktuje się z Tobą w ciągu 24 godzin.',
      form: {
        name: 'Imię i Nazwisko / Nazwa Firmy',
        phone: 'Numer Telefonu',
        email: 'Adres E-mail',
        subject: 'Temat Zapytania',
        message: 'Opis Projektu / Zakres Prac',
        send: 'Wyślij Zapytanie',
        success: 'Dziękujemy! Twoje zapytanie zostało przekazane do działu technicznego.',
        successTitle: 'Wiadomość Wysłana!',
        successSubtitle: 'Nasz fachowiec skontaktuje się z Tobą wkrótce.',
        close: 'Zamknij',
      },
      details: {
        location: 'Biuro: Rotterdam, Holandia',
        area: 'Zasięg Operacyjny:',
        largeProjects: 'Projekty Skalowe: Cała Holandia',
        smallProjects: 'Zlecenia Lokalne: do 50 km',
        hours: 'Dostępność:',
        weekdays: 'Poniedziałek – Piątek: 07:00 – 19:00',
        saturday: 'Sobota: 07:00 – 17:00',
        sunday: 'Niedziela: Na zapytanie',
        quote: 'Darmowa Konsultacja Techniczna',
      },
    },
    modal: {
      title: 'Witaj w K.S. Contractor',
      choose: 'Wybierz język komunikacji / Kies uw taal',
    },
    testimonials: {
      label: 'Opinie',
      heading: 'Głosy',
      headingHighlight: 'Klientów',
      quote: 'Zaufanie jest fundamentem każdej budowanej przez nas struktury. Oto co mówią nasi partnerzy.',
    },
    servicesSection: {
      label: 'Fachowy Zakres',
      description: 'Łączymy tradycyjne rzemiosło z nowoczesną inżynierią, aby dostarczyć rezultaty, które przebiją oczekiwania.',
      itemDescription: 'Profesjonalne wykonanie z użyciem materiałów najwyższej klasy i certyfikowanych technik. Dostosowane do projektów w Holandii.',
      learnMore: 'Dowiedz się więcej',
    },
    common: {
      closeMenu: 'Zamknij menu',
      openMenu: 'Otwórz menu',
      menu: 'Menu',
    },
  },
  nl: {
    nav: {
      home: 'Home',
      about: 'Over ons',
      services: 'Diensten',
      testimonials: 'Beoordelingen',
      gallery: 'Galerij',
      contact: 'Contact',
    },
    hero: {
      title: 'Professionele renovatie- en bouwdiensten',
      subtitle: 'Vakbekwaam, luxe afwerkingen en volledig betrouwbaar dankzij VCA & GPI certificering. Uw partner in Rotterdam.',
      ctaContact: 'Gratis offerte aanvragen',
      ctaServices: 'Ons aanbod',
    },
    about: {
      title: 'K.S. Contractor',
      p1: 'Wij zijn toonaangevend op het gebied van renovaties in Nederland. Onze aanpak rust op drie sterke pijlers: oncompromisbare kwaliteit, innovatieve bouwtechnieken en volledige transparantie in prijsstelling.',
      p2: 'Sinds 2023 vormen wij de ambities van onze klanten met precisie om in werkelijkheid. Wij specialiseren ons in integrale renovaties van appartementen en commerciële panden.',
      p3: 'Vanuit Rotterdam bieden wij diensten op Europees topniveau. Wij combineren Poolse toewijding met Nederlands vakmanschap.',
      location: 'Vestiging: Rotterdam',
      since: 'In bedrijf sinds: 2023',
    },
    stats: {
      projects: 'Projecten Afgerond',
      clients: 'Tevreden Klanten',
      experience: 'Jaar Vakervaring',
      team: 'Bouwprofessionals',
    },
    process: {
      title: 'Ons Werkproces',
      subtitle: 'Van eerste schets tot sleuteloverdracht. Een doordacht proces dat uw gemak garandeert.',
      step1: { title: 'Evaluatie & Plan', desc: 'Grondige technische en esthethische beoordeling van uw project.' },
      step2: { title: 'Transparante Offerte', desc: 'Gedetailleerde begrotting zonder verborgen kosten.' },
      step3: { title: 'Vakkundig Uitvoerd', desc: 'Realisatie met geavanceerde gereedschappen en premiummateriaal.' },
      step4: { title: 'Kwaliteitgarantie', desc: 'Inspectie, oplevering en documentatie van uw project.' },
    },
    faq: {
      label: 'Betrouwbaarheid',
      title: 'Veelgestelde Vragen',
      q1: 'Werken jullie ook buiten Rotterdam?',
      a1: 'Ja, we werken bij grotere projecten door heel Nederland. Voor lokale werken: tot 50 km rond Rotterdam.',
      q2: 'Welke certificaten hebben jullie?',
      a2: 'We beschikken over volledige VCA-certificering (veiligheid) en GPI (toegang tot bouwplaatsen in Nederland).',
      q3: 'Bieden jullie garantie op het werk?',
      a3: 'Absoluut. Alle werkzaamheden zijn voorzien van schriftelijke kwaliteitsgarantie. Uw zekerheid is ons prioriteit.',
    },
    services: {
      title: 'Ons Aanbod',
      items: {
        tiles: 'Tegelwerk',
        flooring: 'Vloersystemen',
        wallpaper: 'Wandafwerking & Behangwerk',
        painting: 'Schilderwerk (Spuiten & Traditioneel)',
        drywall: 'Gipswerkzaamheden & Plafonds',
        garden: 'Tuinonderhoud & Groenwerken',
        demolition: 'Sloopwerk',
        concrete: 'Betonwerk & Grondwerk',
        concreteFloor: 'Betonvloeren & Taraswerken',
      },
      descriptions: {
        tiles: 'Professioneel tegelwerk met premium materialen en erkende technieken. Perfecte afwerking voor elke ruimte.',
        flooring: 'Duurzame vloersystemen van topkwaliteit. Ideaal voor woonruimten en commerciële toepassingen.',
        wallpaper: 'Vakkundige afwerking en behangering. Wij transformeren uw ruimten met oog voor detail.',
        painting: 'Professioneel schilderwerk met machine en kwasten. Effen afwerking op alle oppervlakken.',
        drywall: 'Gipsconstructies en verlaagde plafonds. Moderne architectonische oplossingen voor uw huis.',
        garden: 'Professioneel tuinonderhoud, aanleg en inrichting. Wij zorgen voor groene ruimten waar u van geniet.',
        demolition: 'Veilig en vakkundig sloopwerk. Altijd in overeenstemming met Duitse en Europese normen.',
        concrete: 'Betonwerk, vloeiestricht en grondwerk. Duurzame, sterke basis voor elk project.',
        concreteFloor: 'Renovatie van betonvloeren tot 50m². Terrassen, balkons, garages en nutsruimten.',
      },
    },
    whyUs: {
      title: 'Waarom K.S. Contractor?',
      flexibility: '24/7 bereikbaarheid voor vaste klanten',
      speed: 'Snelle Projectrealisatie',
      quality: 'Premium Materialen',
      clients: 'Vertrouwen van Professionals',
      noDifficulty: 'Geen Project Te Lastig',
      certifications: 'VCA & GPI Gecertificeerd',
      label: 'Voordelen',
      certificationsDesc: 'Wij volgen de strengste veiligheidsnormen van Nederland. VCA- en GPI-certificering zijn niet zomaar bijzaken—het is ons standaard.',
      flexibilityDesc: 'Loyaliteit kun je niet afdwingen, je moet het verdienen.',
      speedDesc: 'Snelle afronding zonder concessies op kwaliteit.',
      qualityDesc: 'Alleen premiummateriaal en erkende bouwmethodieken.',
      clientsDesc: 'Vertrouwd door leidende bedrijven en particulieren in heel Nederland.',
    },
    gallery: {
      title: 'Projectportfolio',
      subtitle: 'Kijk mee naar projecten die modern bouwen in Nederland definiëren.',
    },
    contact: {
      title: 'Laten we beginnen',
      subtitle: 'Vul het formulier in en onze vakspecialist neemt binnen 24 uur contact met u op.',
      form: {
        name: 'Uw naam / Bedrijfsnaam',
        phone: 'Telefoonnummer',
        email: 'E-mailadres',
        subject: 'Onderwerp',
        message: 'Beschrijving van uw project',
        send: 'Aanvraag Versturen',
        success: 'Dank u! Uw aanvraag is goed ontvangen.',
        successTitle: 'Aanvraag Ingediend!',
        successSubtitle: 'Onze specialist neemt binnenkort contact op.',
        close: 'Sluiten',
      },
      details: {
        location: 'Kantoor: Rotterdam, Nederland',
        area: 'Werkgebied:',
        largeProjects: 'Grote Projecten: Heel Nederland',
        smallProjects: 'Lokale Werken: tot 50 km afstand',
        hours: 'Ons bereik:',
        weekdays: 'Ma-vr: 07:00 - 19:00',
        saturday: 'Zaterdag: 07:00 - 17:00',
        sunday: 'Zondag: Op afspraak',
        quote: 'Gratis Schatting',
      },
    },
    modal: {
      title: 'Welkom bij K.S. Contractor',
      choose: 'Kies uw taal / Wybierz język komunikacji',
    },
    testimonials: {
      label: 'Beoordelingen',
      heading: 'Wat Zeggen',
      headingHighlight: 'Onze Klanten',
      quote: 'Vertrouwen is het fundament van alles wat we bouwen. Hieronder lees je wat onze partners ervan vinden.',
    },
    servicesSection: {
      label: 'Ons Aanbod',
      description: 'Wij bundelen klassiek nieuwbouwvakwerk met hedendaagse techniek. Het resultaat: werk dat uw verwachtingen overtreft.',
      itemDescription: 'Vakkundig uitgevoerde werkzaamheden met premium materialen en erkende technieken. Perfect voor woningbouw en commerciële projecten.',
      learnMore: 'Meer Informatie',
    },
    common: {
      closeMenu: 'Menu sluiten',
      openMenu: 'Menu openen',
      menu: 'Menu',
    },
  },
};
