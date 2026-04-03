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
      subtitle: 'Meesterlijke precisie, luxueuze afwerkingen en betrouwbaarheid bevestigd door VCA & GPI-certificeringen. Uw partner in Rotterdam.',
      ctaContact: 'Gratis offerte aanvragen',
      ctaServices: 'Ons aanbod',
    },
    about: {
      title: 'K.S. Contractor',
      p1: 'Wij zijn toonaangevend in de renovatiesector in Nederland. Onze aanpak rust op drie pijlers: compromisloze kwaliteit, innovatieve bouwtechnieken en volledige transparantie in de kosten.',
      p2: 'Sinds 2023 zetten we de visie van onze klanten om in werkelijkheid, met aandacht voor elk detail. We zijn gespecialiseerd in complete renovaties van appartementen en commerciële ruimtes.',
      p3: 'Gevestigd in het hart van Rotterdam leveren we diensten op het hoogste Europese niveau, waarbij we Poolse inzet combineren met Nederlands vakmanschap.',
      location: 'Vestiging: Rotterdam',
      since: 'In bedrijf sinds: 2023',
    },
    stats: {
      projects: 'Realisaties',
      clients: 'Tevreden Opdrachtgevers',
      experience: 'Jaar Ervaring',
      team: 'Vakmensen',
    },
    process: {
      title: 'Realisatietraject',
      subtitle: 'Van eerste schets tot de finale sleuteloverdracht. Een proces ontworpen voor uw gemoedsrust.',
      step1: { title: 'Analyse & Visie', desc: 'Grondige technische en esthetische consultatie van uw project.' },
      step2: { title: 'Nauwkeurige Offerte', desc: 'Transparante offerte zonder verborgen kosten of verrassingen.' },
      step3: { title: 'Meesterlijk Vakwerk', desc: 'Uitvoering met modern gereedschap en materialen van topkwaliteit.' },
      step4: { title: 'Kwaliteitsgarantie', desc: 'Eindcontrole, oplevering en overdracht van de documentatie.' },
    },
    faq: {
      label: 'Betrouwbaarheid',
      title: 'Veelgestelde Vragen',
      q1: 'Werken jullie ook buiten Rotterdam?',
      a1: 'Ja, bij grotere projecten werken we door heel Nederland. Kleinere opdrachten realiseren we binnen een straal van 50 km rond Rotterdam.',
      q2: 'Welke certificaten hebben jullie?',
      a2: 'Wij beschikken over volledige VCA-certificering (arbeidsveiligheid) en GPI (toegang tot bouwplaatsen in Nederland).',
      q3: 'Bieden jullie garantie op het werk?',
      a3: 'Zeker. Op al ons werk geven wij een schriftelijke kwaliteitsgarantie, zodat u volledige zekerheid heeft over uw investering.',
    },
    services: {
      title: 'Ons Aanbod',
      items: {
        tiles: 'Tegelwerk',
        flooring: 'Vloersystemen',
        wallpaper: 'Wanddecoratie & Behang',
        painting: 'Schilderwerk (Spuiten & Traditioneel)',
        drywall: 'Gipswanden & Verlaagde Plafonds',
        garden: 'Tuinonderhoud',
        demolition: 'Gecontroleerde Sloopwerken',
        concrete: 'Betonengineering',
        concreteFloor: 'Renovatie van Industriële Vloeren',
      },
      descriptions: {
        tiles: 'Professioneel tegelwerk met premium materialen en erkende technieken. Perfecte afwerking voor elke ruimte.',
        flooring: 'Duurzame vloersystemen van topkwaliteit. Ideaal voor woonruimten en commerciële toepassingen.',
        wallpaper: 'Vakkundige wanddecoratie en behang. We transformeren ruimtes met de grootste aandacht voor detail.',
        painting: 'Professioneel schilderwerk, traditioneel en spuitwerk, binnen en buiten. Kwaliteit en precisie op elk oppervlak.',
        drywall: 'Gipswanden en verlaagde plafonds. Moderne architectonische oplossingen voor uw ruimte.',
        garden: 'Maaien, snoeien, planten en opruimwerk.',
        demolition: 'Professionele sloopwerken en gecontroleerde afbraak (kleine en middelgrote projecten). Altijd volgens de hoogste veiligheidsnormen.',
        concrete: 'Betonwerkzaamheden en betonreparaties, uitgevoerd met maximale zorg om de vorm van het beschadigde element nauwkeurig te herstellen.',
        concreteFloor: 'Renovatie van vloeren tot 50 m². Gespecialiseerd in terrassen, balkons, garages en bijruimtes.',
      },
    },
    whyUs: {
      title: 'Waarom K.S. Contractor?',
      flexibility: '24/7 beschikbaarheid voor vaste klanten',
      speed: 'Snelle projectrealisatie',
      quality: 'Materialen van topkwaliteit',
      clients: 'Vertrouwd door bedrijven en particulieren',
      noDifficulty: 'We gaan elke uitdaging aan',
      certifications: 'VCA & GPI-gecertificeerd',
      label: 'Voordelen',
      certificationsDesc: 'Wij hanteren de strengste veiligheidsprotocollen in Nederland. VCA- en GPI-certificering is bij ons de standaard, niet de optie.',
      flexibilityDesc: 'Loyaliteit kun je niet afdwingen, je moet het verdienen.',
      speedDesc: 'Snelle uitvoering zonder concessies aan kwaliteit.',
      qualityDesc: 'Uitsluitend materialen van topklasse en gecertificeerde bouwtechnieken.',
      clientsDesc: 'Vertrouwd door bedrijven en particuliere opdrachtgevers in heel Nederland.',
    },
    gallery: {
      title: 'Projectportfolio',
      subtitle: 'Een selectie projecten die modern bouwen in Nederland definiëren.',
    },
    contact: {
      title: 'Laten we uw project starten',
      subtitle: 'Vul het formulier hieronder in en onze vakspecialist neemt binnen 24 uur contact met u op.',
      form: {
        name: 'Naam en achternaam / Bedrijfsnaam',
        phone: 'Telefoonnummer',
        email: 'E-mailadres',
        subject: 'Onderwerp',
        message: 'Beschrijving van uw project / werkzaamheden',
        send: 'Aanvraag versturen',
        success: 'Bedankt! Uw aanvraag is doorgestuurd naar onze technische afdeling.',
        successTitle: 'Bericht verzonden!',
        successSubtitle: 'Onze vakspecialist neemt binnenkort contact met u op.',
        close: 'Sluiten',
      },
      details: {
        location: 'Kantoor: Rotterdam, Nederland',
        area: 'Werkgebied:',
        largeProjects: 'Grote Projecten: Heel Nederland',
        smallProjects: 'Lokale Werken: tot 50 km afstand',
        hours: 'Bereikbaarheid:',
        weekdays: 'Ma–vr: 07:00 – 19:00',
        saturday: 'Zaterdag: 07:00 - 17:00',
        sunday: 'Zondag: Op aanvraag',
        quote: 'Gratis technische consultatie',
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
      description: 'We combineren traditioneel vakmanschap met moderne engineering om resultaten te leveren die uw verwachtingen overtreffen.',
      itemDescription: 'Professionele uitvoering met materialen van topkwaliteit en gecertificeerde technieken. Afgestemd op projecten in Nederland.',
      learnMore: 'Meer informatie',
    },
    common: {
      closeMenu: 'Menu sluiten',
      openMenu: 'Menu openen',
      menu: 'Menu',
    },
  },
};
