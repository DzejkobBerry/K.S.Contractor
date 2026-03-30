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
      p1: 'Jesteśmy liderem w sektorze premium usług remontowych w Holandii. Nasza filozofia opiera się na trzech filarach: bezkompromisowej jakości, innowacyjnych technikach budowlanych oraz pełnej transparentności kosztów.',
      p2: 'Od 2023 roku przekształcamy wizje naszych klientów w rzeczywistość, dbając o każdy milimetr powierzchni. Specjalizujemy się w kompleksowych renowacjach apartamentów i obiektów komercyjnych.',
      p3: 'Zlokalizowani w sercu Rotterdamu, dostarczamy usługi na najwyższym europejskim poziomie, łącząc polską pracowitość z holenderskim profesjonalizmem.',
      location: 'Siedziba: Rotterdam',
      since: 'Na rynku od: 2023',
    },
    stats: {
      projects: 'Realizacji Premium',
      clients: 'Zadowolonych Inwestorów',
      experience: 'Lat w Branży',
      team: 'Ekspertów Budowlanych',
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
      title: 'Strefa Wiedzy',
      q1: 'Czy działacie poza Rotterdamem?',
      a1: 'Tak, przy dużych projektach operujemy na terenie całej Holandii. Małe zlecenia realizujemy w promieniu 50 km od Rotterdamu.',
      q2: 'Jakie certyfikaty posiada firma?',
      a2: 'Posiadamy pełne certyfikacje VCA (bezpieczeństwo pracy) oraz GPI (dostęp do placów budowy w NL).',
      q3: 'Czy oferujecie gwarancję na wykonane prace?',
      a3: 'Oczywiście. Każda nasza usługa objęta jest pisemną gwarancją jakości, co daje Ci pełne bezpieczeństwo inwestycji.',
    },
    services: {
      title: 'Zakres Ekspercki',
      items: {
        tiles: 'Glazurnictwo',
        flooring: 'Systemy Podłogowe Premium',
        wallpaper: 'Dekoracje Ścienne & Tapety',
        painting: 'Malowanie Natryskowe & Tradycyjne',
        drywall: 'Konstrukcje G-K & Sufity Podwieszane',
        garden: 'Podstawowe Prace Ogrodnicze',
        demolition: 'Wyburzenia Kontrolowane',
        concrete: 'Inżynieria Betonowa',
        concreteFloor: 'Renowacja Posadzek Przemysłowych',
      },
      descriptions: {
        tiles: 'Profesjonalne wykonanie prac glazurniczych z użyciem materiałów premium i certyfikowanych technik. Dostosowane do projektów premium w Holandii.',
        flooring: 'Profesjonalne systemy podłogowe z materiałów najwyższej klasy. Doskonałe wykończenia dla mieszkań i obiektów komercyjnych.',
        wallpaper: 'Ekspertne prace dekoracyjne i instalacja tapety. Transformacja pomieszczeń z najwyższą dbałością o detale.',
        painting: 'Profesjonalne malowanie tradycyjne i natryskowe. Jakość i precyzja na każdej powierzchni.',
        drywall: 'Konstrukcje gipsowe i sufity podwieszane. Nowoczesne rozwiązania architektoniczne dla Twojej przestrzeni.',
        garden: 'Koszenie, przycinanie, sadzenie i prace porządkowe. Specjalizujemy się w pracach ogrodowych o małych i średnich gabarytach.',
        demolition: 'Profesjonalne prace rozbiórkowe i wyburzenia kontrolowane o małych i średnich gabarytach. Zawsze z najwyższymi standardami bezpieczeństwa.',
        concrete: 'Prace betonowe i inżynieria betonowa. Solidne fundamenty i powierzchnie wytrzymałe na lata.',
        concreteFloor: 'Renowacja posadzek do 50m2. Specjalizujemy się w tarasach, balkonach, garażach i pomieszczeniach gospodarczych.',
      },
    },
    whyUs: {
      title: 'Dlaczego K.S. Contractor?',
      flexibility: 'Dostępność 24/7 dla Klientów VIP',
      speed: 'Ekspresowe Terminy Realizacji',
      quality: 'Materiały Klasy Premium',
      clients: 'Zaufanie Firm i Osób Prywatnych',
      noDifficulty: 'Rozwiązujemy Najtrudniejsze Wyzwania',
      certifications: 'Standardy Bezpieczeństwa VCA & GPI',
      label: 'Zalety',
      certificationsDesc: 'Stosujemy najsurowsze protokoły bezpieczeństwa w Holandii. Certyfikacje VCA i GPI to dla nas standard, nie opcja.',
      speedDesc: 'Szybkie i elastyczne terminy realizacji dla Twoich projektów.',
      qualityDesc: 'Wyłącznie materiały najwyższej klasy i certyfikowane techniki budowlane.',
      clientsDesc: 'Zaufanie udzielane nam przez firmy i inwestorów prywatnych w całej Holandii.',
    },
    gallery: {
      title: 'Portfolio Realizacji',
      subtitle: 'Galeria projektów, które definiują nowoczesne budownictwo w Holandii.',
    },
    contact: {
      title: 'Rozpocznijmy Projekt',
      subtitle: 'Wypełnij formularz poniżej, a nasz ekspert skontaktuje się z Tobą w ciągu 24 godzin.',
      form: {
        name: 'Imię i Nazwisko / Nazwa Firmy',
        phone: 'Numer Telefonu',
        email: 'Adres E-mail',
        subject: 'Temat Zapytania',
        message: 'Opis Projektu / Zakres Prac',
        send: 'Wyślij Zapytanie',
        success: 'Dziękujemy! Twoje zapytanie zostało przekazane do działu technicznego.',
        successTitle: 'Wiadomość Wysłana!',
        successSubtitle: 'Nasz ekspert skontaktuje się z Tobą wkrótce.',
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
      label: 'Ekspercki Zakres',
      description: 'Łączymy tradycyjne rzemiosło z nowoczesną inżynierią, aby dostarczyć rezultaty, które przebiją oczekiwania.',
      itemDescription: 'Profesjonalne wykonanie z użyciem materiałów premium i certyfikowanych technik. Dostosowane do projektów premium w Holandii.',
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
      testimonials: 'Reviews',
      gallery: 'Galerij',
      contact: 'Contact',
    },
    hero: {
      title: 'Professionele renovatie- en bouwdiensten',
      subtitle: 'Meesterlijke precisie, luxe afwerkingen en betrouwbaarheid bevestigd door VCA & GPI certificaten. Uw partner in Rotterdam.',
      ctaContact: 'Gratis offerte',
      ctaServices: 'Onze specialisaties',
    },
    about: {
      title: 'K.S. Contractor',
      p1: 'Wij zijn leider in de premium renovatiesector in Nederland. Onze filosofie is gebaseerd op drie pijlers: compromisloze kwaliteit, innovatieve bouwtechnieken en volledige kostentransparantie.',
      p2: 'Sinds 2023 transformeren wij de visies van onze klanten in realiteit, met oog voor elke millimeter oppervlak. Wij zijn gespecialiseerd in complete renovaties van appartementen en commerciële objecten.',
      p3: 'Gevestigd in het hart van Rotterdam, leveren wij diensten op het hoogste Europese niveau, waarbij Poolse werklust wordt gecombineerd met Nederlands professionalisme.',
      location: 'Locatie: Rotterdam',
      since: 'Actief sinds: 2023',
    },
    stats: {
      projects: 'Premium Projecten',
      clients: 'Tevreden Investeerders',
      experience: 'Jaar Ervaring',
      team: 'Bouwexperts',
    },
    process: {
      title: 'Realisatiepad',
      subtitle: 'Van de eerste schets tot de uiteindelijke sleuteloverdracht. Een proces ontworpen voor uw gemoedsrust.',
      step1: { title: 'Analyse & Visie', desc: 'Gedetailleerde technische en esthetische consultatie van uw project.' },
      step2: { title: 'Precieze Offerte', desc: 'Transparante begroting zonder verborgen kosten of verrassingen.' },
      step3: { title: 'Meesterlijk Werk', desc: 'Uitvoering met de modernste gereedschappen en materialen.' },
      step4: { title: 'Kwaliteitsgarantie', desc: 'Eindinspectie en overdracht van documentatie.' },
    },
    faq: {
      title: 'Kenniscentrum',
      q1: 'Werkt u ook buiten Rotterdam?',
      a1: 'Ja, voor grote projecten werken wij door heel Nederland. Kleine opdrachten voeren wij uit binnen een straal van 50 km rond Rotterdam.',
      q2: 'Welke certificaten heeft het bedrijf?',
      a2: 'Wij beschikken over volledige VCA-certificering (veiligheid) en GPI (toegang tot bouwplaatsen in NL).',
      q3: 'Biedt u garantie op het uitgevoerde werk?',
      a3: 'Natuurlijk. Al onze diensten vallen onder een schriftelijke kwaliteitsgarantie, wat u volledige zekerheid biedt.',
    },
    services: {
      title: 'Expertisegebied',
      items: {
        tiles: 'Tegelwerk',
        flooring: 'Premium Vloersystemen',
        wallpaper: 'Wanddecoratie & Behang',
        painting: 'Spuitwerk & Traditioneel Schilderen',
        drywall: 'Gipsconstructies & Plafonds',
        garden: 'Basis Tuinwerkzaamheden',
        demolition: 'Gecontroleerde Sloop',
        concrete: 'Betontechniek',
        concreteFloor: 'Renovatie van Vloeren',
      },
      descriptions: {
        tiles: 'Professionele tegelwerk met premium materialen en gecertificeerde technieken. Geschikt voor premium projecten in Nederland.',
        flooring: 'Professionele vloersystemen van premium materialen. Uitstekende betimmering voor appartementen en commerciële objecten.',
        wallpaper: 'Deskundige decoratieve werkzaamheden en behanginstallatie. Transformatie van ruimten met de grootste aandacht voor detail.',
        painting: 'Professioneel traditioneel en spuitwerk schilderen. Kwaliteit en precisie op elk oppervlak.',
        drywall: 'Gipsconstructies en verlaagde plafonds. Moderne architectonische oplossingen voor uw ruimte.',
        garden: 'Maaien, snoeien, planten en onderhoudswerkzaamheden. We specialiseren ons in tuinwerkzaamheden met klein tot gemiddeld formaat.',
        demolition: 'Professionele sloopwerkzaamheden en gecontroleerde sloop met klein tot gemiddeld formaat. Altijd met de hoogste veiligheidsnormen.',
        concrete: 'Betonwerk en betontechniek. Sterke fundamenten en duurzame oppervlakken voor jaren.',
        concreteFloor: 'Vloeren renovatie tot 50m2. We specialiseren ons in terassen, balkons, garages en bedrijfsruimten.',
      },
    },
    whyUs: {
      title: 'Waarom K.S. Contractor?',
      flexibility: '24/7 Beschikbaarheid voor VIP-klanten',
      speed: 'Express Realisatietermijnen',
      quality: 'Premium Klasse Materialen',
      clients: 'Vertrouwen van Bedrijven en Particulieren',
      noDifficulty: 'Wij lossen de moeilijkste uitdagingen op',
      certifications: 'VCA & GPI Veiligheidsnormen',
      label: 'Advantages',
      certificationsDesc: 'We adhere to the strictest safety protocols in the Netherlands. VCA and GPI certifications are our baseline, not just an option.',
      speedDesc: 'Tailored schedules for high-profile clients and complex commercial projects.',
      qualityDesc: 'Premium materials and certified techniques that set industry standards.',
      clientsDesc: 'Trust from leading companies and individual investors across the Netherlands.',
    },
    gallery: {
      title: 'Portfolio van Projecten',
      subtitle: 'Galerij van projecten die de moderne bouw in Nederland definiëren.',
    },
    contact: {
      title: 'Start uw Project',
      subtitle: 'Vul het onderstaande formulier in en onze expert neemt binnen 24 uur contact met u op.',
      form: {
        name: 'Naam / Bedrijfsnaam',
        phone: 'Telefoonnummer',
        email: 'E-mailadres',
        subject: 'Onderwerp van aanvraag',
        message: 'Projectbeschrijving / Werkzaamheden',
        send: 'Aanvraag Verzenden',
        success: 'Bedankt! Uw aanvraag is doorgegeven aan de technische afdeling.',
        successTitle: 'Bericht Verzonden!',
        successSubtitle: 'Onze expert neemt binnenkort contact met u op.',
        close: 'Sluiten',
      },
      details: {
        location: 'Kantoor: Rotterdam, Nederland',
        area: 'Operationeel Bereik:',
        largeProjects: 'Grootschalige Projecten: Heel Nederland',
        smallProjects: 'Lokale Opdrachten: tot 50 km',
        hours: 'Beschikbaarheid:',
        weekdays: 'Maandag – Vrijdag: 07:00 – 19:00',
        saturday: 'Zaterdag: 07:00 – 17:00',
        sunday: 'Zondag: Op aanvraag',
        quote: 'Gratis Technische Consultatie',
      },
    },
    modal: {
      title: 'Welkom bij K.S. Contractor',
      choose: 'Kies uw taal / Wybierz język komunikacji',
    },
    testimonials: {
      label: 'Testimonials',
      heading: 'Stemmen',
      headingHighlight: 'van Cliënten',
      quote: 'Vertrouwen is het fundament van elke structuur die we bouwen. Dit is wat onze partners zeggen.',
    },
    servicesSection: {
      label: 'Expertise',
      description: 'We combine traditional craftsmanship with modern engineering to deliver results that exceed expectations.',
      itemDescription: 'Professional execution using premium materials and certified techniques. Tailored for high-end residential and commercial projects in the Rotterdam area.',
      learnMore: 'Learn More',
    },
    common: {
      closeMenu: 'Close menu',
      openMenu: 'Open menu',
      menu: 'Menu',
    },
  },
};
