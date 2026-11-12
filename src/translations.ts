export type Language = 'pl' | 'en';

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
      concreteFloor: string;
    };
    descriptions: {
      tiles: string;
      flooring: string;
      wallpaper: string;
      painting: string;
      drywall: string;
      garden: string;
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
    language: string;
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
      subtitle: 'Mistrzowska precyzja, wysokiej klasy wykończenia i niezawodność na każdym etapie realizacji. Twój partner w Radomiu i województwie mazowieckim.',
      ctaContact: 'Bezpłatna wycena',
      ctaServices: 'Nasze specjalizacje',
    },
    about: {
      title: 'K.S. Contractor',
      p1: 'Jesteśmy liderem w sektorze usług remontowych w województwie mazowieckim. Nasza filozofia opiera się na trzech filarach: bezkompromisowej jakości, innowacyjnych technikach budowlanych oraz pełnej transparentności kosztów.',
      p2: 'Od 2023 roku przekształcamy wizje naszych klientów w rzeczywistość, dbając o każdy milimetr powierzchni. Specjalizujemy się w kompleksowych renowacjach apartamentów i obiektów komercyjnych.',
      p3: 'Zlokalizowani w sercu Radomia, realizujemy usługi na najwyższym poziomie, łącząc rzetelne rzemiosło z nowoczesnymi technikami wykonania.',
      location: 'Siedziba: Radom',
      since: 'Na rynku od: 2023',
    },
    stats: {
      projects: 'Realizacji',
      clients: 'Zadowolonych Inwestorów',
      experience: 'Lat w Branży',
      team: 'Bezpośredni Kontakt z Wykonawcą',
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
      q1: 'Czy realizujecie projekty poza Radomiem?',
      a1: 'Tak. Duże i długoterminowe projekty realizujemy na terenie całej Polski. Mniejsze i krótkoterminowe zlecenia wykonujemy w promieniu do 100 km od Radomia.',
      q2: 'Jak dbacie o jakość i bezpieczeństwo prac?',
      a2: 'Każdą realizację prowadzimy zgodnie ze sprawdzonymi zasadami bezpieczeństwa, dbając o porządek, staranne wykonanie i ochronę miejsca pracy.',
      q3: 'Czy oferujecie gwarancję na wykonane prace?',
      a3: 'Oczywiście. Każda nasza usługa objęta jest pisemną gwarancją jakości, co daje Ci pełne bezpieczeństwo inwestycji.',
    },
    services: {
      title: 'Fachowy Zakres',
      items: {
        tiles: 'Usługi glazurnicze',
        flooring: 'Systemy Podłogowe',
        wallpaper: 'Dekoracje Ścienne & Tapety',
        painting: 'Malowanie Natryskowe & Tradycyjne',
        drywall: 'Konstrukcje G-K & Sufity Podwieszane',
        garden: 'Podstawowe Prace Ogrodnicze',
        concreteFloor: 'Posadzki żywiczne',
      },
      descriptions: {
        tiles: 'Profesjonalne wykonanie prac glazurniczych z użyciem materiałów najwyższej klasy i certyfikowanych technik.',
        flooring: 'Profesjonalne systemy podłogowe z materiałów najwyższej klasy. Doskonałe wykończenia dla mieszkań i obiektów komercyjnych.',
        wallpaper: 'Fachowe prace dekoracyjne i instalacja tapety. Transformacja pomieszczeń z najwyższą dbałością o detale.',
        painting: 'Profesjonalne malowanie tradycyjne i natryskowe, wewnątrz i na zewnątrz. Jakość i precyzja na każdej powierzchni.',
        drywall: 'Konstrukcje gipsowe i sufity podwieszane. Nowoczesne rozwiązania architektoniczne dla Twojej przestrzeni.',
        garden: 'Koszenie, przycinanie, sadzenie i prace porządkowe.',
        concreteFloor: 'Wykonujemy posadzki na bazie żywicy epoksydowej oraz poliuretanowej do 100 m². Trwałe, estetyczne i łatwe w utrzymaniu rozwiązanie do garaży, pomieszczeń użytkowych, wnętrz mieszkalnych i obiektów komercyjnych.',
      },
    },
    whyUs: {
      title: 'Dlaczego K.S. Contractor?',
      flexibility: 'Dostępność 24/7 dla stałych klientów',
      speed: 'Ekspresowe Terminy Realizacji',
      quality: 'Materiały Najwyższej Klasy',
      clients: 'Zaufanie Firm i Osób Prywatnych',
      noDifficulty: 'Rozwiązujemy Najtrudniejsze Wyzwania',
      certifications: 'Bezpieczna i Staranna Realizacja',
      label: 'Zalety',
      certificationsDesc: 'Dbamy o bezpieczeństwo, porządek i wysoką jakość wykonania na każdym etapie realizacji.',
      flexibilityDesc: 'Lojalności nie można nakazać, trzeba na nią zasłużyć.',
      speedDesc: 'Szybka realizacja bez kompromisów na jakości, którą się wyróżniamy.',
      qualityDesc: 'Wyłącznie materiały najwyższej klasy i certyfikowane techniki budowlane.',
      clientsDesc: 'Zaufanie udzielane nam przez firmy i inwestorów prywatnych w całej Polsce.',
    },
    gallery: {
      title: 'Portfolio Realizacji',
      subtitle: 'Galeria projektów, które pokazują jakość nowoczesnych prac remontowo-budowlanych.',
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
        location: 'Siedziba: Radom, Polska',
        area: 'Zasięg działania:',
        largeProjects: 'Duże i długoterminowe projekty: cała Polska',
        smallProjects: 'Mniejsze i krótkoterminowe zlecenia: do 100 km od Radomia',
        hours: 'Dostępność:',
        weekdays: 'Poniedziałek – Piątek: 07:00 – 17:00',
        saturday: 'Sobota: 07:00 – 15:00',
        sunday: 'Niedziela: Na zapytanie',
        quote: 'Darmowa Konsultacja Techniczna',
      },
    },
    modal: {
      title: 'Witaj w K.S. Contractor',
      choose: 'Wybierz język komunikacji / Choose your language',
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
      itemDescription: 'Profesjonalne wykonanie z użyciem materiałów najwyższej klasy i sprawdzonych technik.',
      learnMore: 'Dowiedz się więcej',
    },
    common: {
      closeMenu: 'Zamknij menu',
      openMenu: 'Otwórz menu',
      menu: 'Menu',
      language: 'Język',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About us',
      services: 'Services',
      testimonials: 'Reviews',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Professional renovation and construction services',
      subtitle: 'Masterful precision, premium finishes, and reliability at every stage of the project. Your contractor in Radom and the Mazovian Voivodeship.',
      ctaContact: 'Free quote',
      ctaServices: 'Our services',
    },
    about: {
      title: 'K.S. Contractor',
      p1: 'We are a leader in renovation services in the Mazovian Voivodeship. Our philosophy rests on three pillars: uncompromising quality, innovative construction techniques, and complete cost transparency.',
      p2: 'Since 2023, we have been turning our clients’ visions into reality, paying attention to every millimetre of space. We specialise in complete renovations of apartments and commercial properties.',
      p3: 'Based in the heart of Radom, we provide services to the highest standard by combining reliable craftsmanship with modern construction techniques.',
      location: 'Office: Radom',
      since: 'Operating since: 2023',
    },
    stats: {
      projects: 'Projects completed',
      clients: 'Satisfied clients',
      experience: 'Years in the industry',
      team: 'Direct contact with your contractor',
    },
    process: {
      title: 'Project Process',
      subtitle: 'From the first concept to the final handover. A process designed for your peace of mind.',
      step1: { title: 'Analysis & Vision', desc: 'A detailed technical and aesthetic consultation for your project.' },
      step2: { title: 'Precise Quote', desc: 'A transparent estimate with no hidden fees or surprises.' },
      step3: { title: 'Expert Workmanship', desc: 'Work completed using modern tools and high-quality materials.' },
      step4: { title: 'Quality Guarantee', desc: 'Final technical inspection and handover of the documentation.' },
    },
    faq: {
      label: 'Trust',
      title: 'Knowledge Centre',
      q1: 'Do you take on projects outside Radom?',
      a1: 'Yes. We deliver large and long-term projects throughout Poland. We complete smaller and short-term jobs within 100 km of Radom.',
      q2: 'How do you ensure quality and safety?',
      a2: 'We complete every project according to proven safety practices, with careful workmanship, a tidy worksite, and proper protection of the property.',
      q3: 'Do you provide a warranty for completed work?',
      a3: 'Yes. Every service comes with a written quality guarantee, giving you complete confidence in your investment.',
    },
    services: {
      title: 'Professional Services',
      items: {
        tiles: 'Tiling Services',
        flooring: 'Flooring Systems',
        wallpaper: 'Wall Decoration & Wallpapering',
        painting: 'Spray & Traditional Painting',
        drywall: 'Drywall & Suspended Ceilings',
        garden: 'Basic Garden Services',
        concreteFloor: 'Resin Flooring',
      },
      descriptions: {
        tiles: 'Professional tiling using high-quality materials and proven techniques.',
        flooring: 'Professional flooring systems made with high-quality materials. Excellent finishes for homes and commercial properties.',
        wallpaper: 'Professional wall decoration and wallpaper installation. Transforming interiors with meticulous attention to detail.',
        painting: 'Professional traditional and spray painting for interiors and exteriors. Quality and precision on every surface.',
        drywall: 'Drywall structures and suspended ceilings. Modern architectural solutions for your space.',
        garden: 'Mowing, pruning, planting, and general garden maintenance.',
        concreteFloor: 'We install epoxy and polyurethane resin floors up to 100 m². A durable, stylish, and low-maintenance solution for garages, utility rooms, homes, and commercial properties.',
      },
    },
    whyUs: {
      title: 'Why K.S. Contractor?',
      flexibility: '24/7 availability for regular clients',
      speed: 'Fast Project Completion',
      quality: 'Highest-Quality Materials',
      clients: 'Trusted by Businesses and Homeowners',
      noDifficulty: 'We Solve the Toughest Challenges',
      certifications: 'Safe and Careful Project Delivery',
      label: 'Benefits',
      certificationsDesc: 'We maintain safety, order, and high-quality workmanship at every stage of the project.',
      flexibilityDesc: 'Loyalty cannot be demanded; it must be earned.',
      speedDesc: 'Fast completion without compromising the quality that sets us apart.',
      qualityDesc: 'We use only high-quality materials and proven construction techniques.',
      clientsDesc: 'Trusted by businesses and private investors throughout Poland.',
    },
    gallery: {
      title: 'Project Portfolio',
      subtitle: 'A gallery of projects showcasing the quality of modern renovation and construction work.',
    },
    contact: {
      title: 'Let’s Start Your Project',
      subtitle: 'Complete the form below and our contractor will contact you within 24 hours.',
      form: {
        name: 'Full Name / Company Name',
        phone: 'Phone Number',
        email: 'Email Address',
        subject: 'Enquiry Subject',
        message: 'Project Description / Scope of Work',
        send: 'Send Enquiry',
        success: 'Thank you! Your enquiry has been forwarded to our technical team.',
        successTitle: 'Message Sent!',
        successSubtitle: 'Our contractor will contact you shortly.',
        close: 'Close',
      },
      details: {
        location: 'Office: Radom, Poland',
        area: 'Service area:',
        largeProjects: 'Large and long-term projects: throughout Poland',
        smallProjects: 'Smaller and short-term jobs: within 100 km of Radom',
        hours: 'Availability:',
        weekdays: 'Monday–Friday: 07:00–17:00',
        saturday: 'Saturday: 07:00–15:00',
        sunday: 'Sunday: By appointment',
        quote: 'Free Technical Consultation',
      },
    },
    modal: {
      title: 'Welcome to K.S. Contractor',
      choose: 'Choose your language',
    },
    testimonials: {
      label: 'Reviews',
      heading: 'What Our',
      headingHighlight: 'Clients Say',
      quote: 'Trust is the foundation of everything we build. Read what our clients have to say.',
    },
    servicesSection: {
      label: 'Professional Services',
      description: 'We combine traditional craftsmanship with modern engineering to deliver results that exceed your expectations.',
      itemDescription: 'Professional work using high-quality materials and proven techniques.',
      learnMore: 'Learn more',
    },
    common: {
      closeMenu: 'Close menu',
      openMenu: 'Open menu',
      menu: 'Menu',
      language: 'Language',
    },
  },
};
