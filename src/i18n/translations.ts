export type Language = 'de' | 'en';

export interface TranslationDictionary {
  nav: {
    services: string;
    calculator: string;
    beforeAfter: string;
    area: string;
    reviews: string;
    faq: string;
    contact: string;
    emergencyCall: string;
    getQuote: string;
  };
  emergency: {
    badge: string;
    title: string;
    subtitle: string;
    callNow: string;
    available247: string;
  };
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    badgeEmergency: string;
    trust1: string;
    trust2: string;
    trust3: string;
    ctaCalculate: string;
    ctaCall: string;
    experienceBadge: string;
    experienceText: string;
  };
  beforeAfter: {
    badge: string;
    title: string;
    subtitle: string;
    labelBefore: string;
    labelAfter: string;
    caseTitle: string;
    caseDescription: string;
    dragHint: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    ctaCard: string;
    perkTitle: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      image: string;
      perks: string[];
      tag: string;
    }[];
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    serviceOptions: {
      id: string;
      label: string;
      desc: string;
      basePrice: number;
    }[];
    treeHeightLabel: string;
    heightOptions: {
      id: string;
      label: string;
      factor: number;
    }[];
    accessibilityLabel: string;
    accessEasy: string;
    accessEasyDesc: string;
    accessHard: string;
    accessHardDesc: string;
    photoUploadTitle: string;
    photoUploadHint: string;
    photoUploadBadge: string;
    photoUploaded: string;
    removePhoto: string;
    estimatedRangeTitle: string;
    estimatedRangeSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    locationLabel: string;
    locationPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    btnNext: string;
    btnPrev: string;
    btnSubmitWhatsApp: string;
    btnSubmitEmail: string;
    successMessage: string;
    resetCalculator: string;
    disclaimer: string;
  };
  coverage: {
    badge: string;
    title: string;
    subtitle: string;
    radiusTag: string;
    noTravelFee: string;
    districtsTitle: string;
    surroundingsTitle: string;
    callToBook: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    averageRating: string;
    basedOn: string;
    items: {
      name: string;
      location: string;
      date: string;
      service: string;
      comment: string;
      stars: number;
    }[];
  };
  about: {
    badge: string;
    title: string;
    description1: string;
    description2: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    safetyFirstTitle: string;
    safetyFirstDesc: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    phoneCardTitle: string;
    phoneCardSub: string;
    whatsappCardTitle: string;
    whatsappCardSub: string;
    emailCardTitle: string;
    emailCardSub: string;
    addressCardTitle: string;
    addressCardSub: string;
    businessHoursTitle: string;
    businessHoursText: string;
  };
  footer: {
    brandBio: string;
    quickLinks: string;
    servicesTitle: string;
    legalTitle: string;
    impressum: string;
    datenschutz: string;
    rights: string;
    cookieSettings: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  legal: {
    impressumTitle: string;
    datenschutzTitle: string;
    close: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  de: {
    nav: {
      services: 'Leistungen',
      calculator: 'Kostenrechner',
      beforeAfter: 'Vorher / Nachher',
      area: 'Einsatzgebiet',
      reviews: 'Kundenstimmen',
      faq: 'FAQ',
      contact: 'Kontakt',
      emergencyCall: '0170 892 4110',
      getQuote: 'Angebot berechnen',
    },
    emergency: {
      badge: '24/7 NOTFALLDIENST',
      title: 'Sturmschaden in Passau & Umgebung?',
      subtitle: 'Gefallene Bäume, instabile Kronen oder Äste auf Dächern? Wir sichern Ihr Grundstück sofort.',
      callNow: 'Notfall-Hotline anrufen',
      available247: 'Rund um die Uhr einsatzbereit',
    },
    hero: {
      title: 'Professionelle Baumfällung & Gartenpflege in',
      highlight: 'Passau & Umgebung',
      subtitle: 'Spezialisiert auf anspruchsvolle Problembaumfällungen mit Seilklettertechnik (SKT), präzise Baumpflege nach ZTV und nachhaltige Grünflächenpflege – auch an steilen Passauer Flussufern und eng bebauten Grundstücken.',
      badgeEmergency: '24/7 Notdienst bei Sturmschäden',
      trust1: 'Betriebshaftpflicht bis 5 Mio. €',
      trust2: 'Kostenlose Vor-Ort-Besichtigung',
      trust3: 'Faire & transparente Festpreise',
      ctaCalculate: 'Kostenloses Angebot berechnen',
      ctaCall: 'Direkt anrufen',
      experienceBadge: '15+ Jahre',
      experienceText: 'Erfahrung & zertifizierte Seilkletterer in Niederbayern',
    },
    beforeAfter: {
      badge: 'ERGEBNISSE & QUALITÄT',
      title: 'Vorher & Nachher im direkten Vergleich',
      subtitle: 'Überzeugen Sie sich selbst: Ziehen Sie den Regler nach links und rechts, um die Verwandlung vor und nach unserem Einsatz zu sehen.',
      labelBefore: 'Vorher (Gefahr / Wildwuchs)',
      labelAfter: 'Nachher (Sicher & Gepflegt)',
      caseTitle: 'Problemfällung & Formschnitt in Passau-Haidenhof',
      caseDescription: 'Abtragung einer morsch gewordenen 18-Meter-Tanne direkt über einer Garage mittels Seilklettertechnik (SKT) sowie anschließende Grünflächenbereinigung und Kaminholzaufbereitung.',
      dragHint: 'Schieberegler anfassen & ziehen',
    },
    services: {
      badge: 'UNSERE LEISTUNGEN',
      title: 'Fachgerechtes Baum- & Gartenhandwerk',
      subtitle: 'Vom einzelnen Kronenschnitt bis zur Großrodung – modernes Equipment, zertifizierte Baumpfleger und absolute Sorgfalt für Ihr Eigentum.',
      ctaCard: 'Preis anfragen',
      perkTitle: 'Immer inklusive:',
      items: [
        {
          id: 'faellung',
          title: 'Baumfällung & Problembaumfällung',
          subtitle: 'Seilklettertechnik (SKT) & Kranunterstützung',
          description: 'Sicheres Fällen selbst auf engstem Raum, Hanglagen an Donau, Inn und Ilz sowie Gefahrenbäume über Dächern und Stromleitungen.',
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
          perks: ['Zertifizierte Kletterer (SKT-A/B)', 'Erschütterungsfreies Abseilen (Rigging)', 'Vollkasko- & Haftpflichtschutz'],
          tag: 'Häufig gebucht',
        },
        {
          id: 'pflege',
          title: 'Baumpflege & Kronenschnitt',
          subtitle: 'Erhalt, Verkehrssicherheit & Totholzentfernung',
          description: 'Kronenauslichtung, Totholzbeseitigung, Kronensicherungsschnitte und Lichtraumprofilschnitt gemäß aktuellen ZTV-Baumpflege-Richtlinien.',
          image: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1000&q=80',
          perks: ['Fachgerechter Schnitt nach ZTV', 'Vitalitätserhalt des Baumes', 'Rechtssichere Verkehrssicherheit'],
          tag: 'Für Baumerhalt',
        },
        {
          id: 'hecke',
          title: 'Heckenschnitt & Gartenpflege',
          subtitle: 'Präziser Formschnitt & Saisonpflege',
          description: 'Fachgerechter Rückschnitt von Thuja-, Buchen- und Kirschlorbeerhecken sowie Rasenmähen, Gestrüpprodung und Beetpflege im Raum Passau.',
          image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=1000&q=80',
          perks: ['Sauberer Formschnitt', 'Inkl. Säuberung aller Gehwege', 'Flexible Pflegeverträge'],
          tag: 'Saisonal',
        },
        {
          id: 'wurzel',
          title: 'Wurzelstockfräsen & Rodung',
          subtitle: 'Stubbenentfernung bis 40 cm Tiefe',
          description: 'Vollständiges Ausfräsen von Baumstümpfen und Wurzelanläufen. Der entstandene Holzmulch kann direkt zur Bodenverbesserung verbleiben.',
          image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
          perks: ['Gartenschonende Kompaktfräsen', 'Tiefenfräsung bis 40 cm', 'Sofortige Neupflanzung möglich'],
          tag: 'Effizient',
        },
        {
          id: 'entsorgung',
          title: 'Grünschnittentsorgung & Häckseldienst',
          subtitle: 'Aufbereitung & umweltgerechte Entsorgung',
          description: 'Mobiles Häckseln von Ästen vor Ort bis 20 cm Stammdurchmesser. Grünschnittabtransport mit eigenem LKW und fachgerechte Kompostierung.',
          image: 'https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=1000&q=80',
          perks: ['Hackschnitzel verbleiben auf Wunsch', 'Besenreine Baustellenübergabe', 'Zertifizierter Wertstofftransport'],
          tag: 'Komplettservice',
        },
        {
          id: 'sturm',
          title: '24/7 Sturmschaden-Notdienst',
          subtitle: 'Sofortige Gefahrenabwehr rund um die Uhr',
          description: 'Schnelle Notfallhilfe bei umgestürzten Bäumen, abgebrochenen Großästen und drohendem Sachschaden an Gebäuden oder Zufahrten in Passau.',
          image: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1000&q=80',
          perks: ['Notfallausfahrt innerhalb von 60 Min.', 'Direkte Dokumentation für Versicherung', '24/7 Telefonbereitschaft'],
          tag: '24/7 Notfall',
        },
      ],
    },
    calculator: {
      badge: 'INTERAKTIVER PREISRECHNER',
      title: 'In 4 Schritten zum unverbindlichen Kostenvoranschlag',
      subtitle: 'Wählen Sie Ihre gewünschten Leistungen aus und erhalten Sie sofort eine realistische Preisspanne für Ihr Vorhaben in Passau.',
      step1Title: '1. Welche Leistungen benötigen Sie?',
      step1Desc: 'Mehrfachauswahl möglich – wählen Sie alle zutreffenden Arbeiten aus:',
      step2Title: '2. Baumhöhe & Zugänglichkeit',
      step2Desc: 'Geben Sie uns Details über die Dimensionen und das Gelände:',
      step3Title: '3. Foto-Upload (Optional)',
      step3Desc: 'Ein Foto ermöglicht uns eine 100% verbindliche Einschätzung innerhalb von 24h:',
      step4Title: '4. Ihre Kostenschätzung & Kontaktdaten',
      step4Desc: 'Hier ist Ihre unverbindliche Orientierungsspanne:',
      serviceOptions: [
        { id: 'faellung', label: 'Baumfällung', desc: 'Fällung am Stück oder stückweises Abtragen per Seilklettertechnik', basePrice: 420 },
        { id: 'pflege', label: 'Baumpflege / Kronenschnitt', desc: 'Totholzbeseitigung, Kronenpflege oder Lichtraumprofil', basePrice: 280 },
        { id: 'hecke', label: 'Heckenschnitt', desc: 'Formschnitt oder radikaler Rückschnitt inkl. Formsäuberung', basePrice: 190 },
        { id: 'wurzel', label: 'Wurzelstockfräsen', desc: 'Ausfräsen von Baumstümpfen bis tief unter die Grasnarbe', basePrice: 170 },
        { id: 'entsorgung', label: 'Grünschnittentsorgung', desc: 'Kompletter Abtransport und umweltgerechtes Recycling', basePrice: 120 },
      ],
      treeHeightLabel: 'Geschätzte Baum- oder Heckenhöhe:',
      heightOptions: [
        { id: 'h1', label: 'Bis 5 Meter (Klein)', factor: 1.0 },
        { id: 'h2', label: '5 – 10 Meter (Mittel)', factor: 1.35 },
        { id: 'h3', label: '10 – 20 Meter (Groß)', factor: 1.85 },
        { id: 'h4', label: 'Über 20 Meter (Sehr groß)', factor: 2.5 },
      ],
      accessibilityLabel: 'Gelände- & Zugänglichkeitssituation vor Ort:',
      accessEasy: 'Frei zugänglich (Garten/Einfahrt gut erreichbar)',
      accessEasyDesc: 'Geräte & Häcksler können direkt bis an den Arbeitsort gefahren werden.',
      accessHard: 'Erschwerter Zugang (Hanglage / enge Bebauung)',
      accessHardDesc: 'Zufahrt nur zu Fuß, Hinterhof oder Passauer Hanglagenlage (Donauleiten/Innauen).',
      photoUploadTitle: 'Foto hochladen oder mit der Kamera aufnehmen',
      photoUploadHint: 'Klicken Sie hier oder ziehen Sie ein Foto hinein (JPG, PNG bis 10MB)',
      photoUploadBadge: 'Fotos helfen uns, ein 100% verbindliches Angebot innerhalb von 24h zu erstellen!',
      photoUploaded: 'Foto erfolgreich hinzugefügt:',
      removePhoto: 'Foto entfernen',
      estimatedRangeTitle: 'Voraussichtliche Kostenspanne:',
      estimatedRangeSubtitle: 'Inkl. gesetzlicher MwSt., Personal & Ausrüstung für Passau und 35km Umkreis',
      nameLabel: 'Ihr vollständiger Name *',
      namePlaceholder: 'z.B. Markus Huber',
      phoneLabel: 'Telefon- oder Handynummer *',
      phonePlaceholder: 'z.B. 0170 1234567',
      locationLabel: 'PLZ & Ort / Passauer Stadtteil *',
      locationPlaceholder: 'z.B. 94034 Passau-Grubweg',
      notesLabel: 'Besondere Wünsche oder Details (Optional)',
      notesPlaceholder: 'z.B. Baum steht nah am Gewächshaus, Schnittgut bitte vor Ort häckseln...',
      btnNext: 'Weiter zum nächsten Schritt',
      btnPrev: 'Zurück',
      btnSubmitWhatsApp: 'Per WhatsApp anfragen (Empfohlen)',
      btnSubmitEmail: 'Per E-Mail Angebot anfordern',
      successMessage: 'Vielen Dank! Ihre Anfrage wurde zusammengestellt.',
      resetCalculator: 'Neue Berechnung starten',
      disclaimer: 'Hinweis: Diese Richtpreisspanne dient der ersten Orientierung. Das finale Festpreis-Angebot erhalten Sie nach Fotoprüfung oder kurzer kostenloser Vor-Ort-Besichtigung.',
    },
    coverage: {
      badge: 'REGIONAL VERANKERT',
      title: 'Einsatzgebiet Passau & 35 km Umkreis',
      subtitle: 'Wir sind schnell bei Ihnen vor Ort – in allen Passauer Stadtteilen und umliegenden Gemeinden im bayerisch-österreichischen Grenzraum.',
      radiusTag: '35 km Einsatzradius',
      noTravelFee: 'Keine Anfahrtskosten bei Auftragserteilung',
      districtsTitle: 'Passauer Stadtbezirke:',
      surroundingsTitle: 'Umliegende Städte & Gemeinden:',
      callToBook: 'Ihr Ort nicht aufgeführt? Rufen Sie uns an – wir finden immer eine Lösung!',
    },
    reviews: {
      badge: 'ECHTE BEWERTUNGEN',
      title: 'Das sagen Kunden aus Passau über uns',
      subtitle: 'Zuverlässigkeit, saubere Baustellen und handwerkliche Spitzenleistung sprechen sich herum.',
      averageRating: '4.9 von 5 Sternen',
      basedOn: 'Basierend auf über 70 Google & regionalen Kundenbewertungen',
      items: [
        {
          name: 'Dr. Michael Stadler',
          location: 'Passau-Innstadt',
          date: 'Vor 2 Wochen',
          service: 'Problembaumfällung (Seilklettertechnik)',
          comment: 'Hervorragende Arbeit! Eine 22 Meter hohe alte Fichte stand bedrohlich nah an unserem Wohnhaus und Nachbargrundstück. Das Team hat den Baum stückweise per Kletterseil abgetragen – kein einziger Zweig fiel auf das Dach. Sauber, pünktlich, absolut empfehlenswert!',
          stars: 5,
        },
        {
          name: 'Sabine Weidinger',
          location: 'Passau-Grubweg',
          date: 'Vor 1 Monat',
          service: 'Kronenschnitt & Totholzbeseitigung',
          comment: 'Sehr sympathisches und kompetentes Team. Unsere alten Eichen wurden fachmännisch geschnitten und verkehrssicher gemacht. Alle Äste wurden sofort vor Ort gehäckselt und der Hof besenrein hinterlassen.',
          stars: 5,
        },
        {
          name: 'Florian Binder',
          location: 'Salzweg',
          date: 'Vor 3 Wochen',
          service: 'Wurzelstockfräsen & Heckenschnitt',
          comment: 'Von der Online-Anfrage bis zur Ausführung vergingen keine 3 Tage. Die Baumstümpfe wurden 35cm tief weggefräst, sodass wir sofort neuen Rasen ansäen konnten. Der Festpreis wurde exakt eingehalten.',
          stars: 5,
        },
        {
          name: 'Anna Maierhofer',
          location: 'Vilshofen an der Donau',
          date: 'Vor 2 Monaten',
          service: 'Sturmschaden-Notdienst',
          comment: 'Nach dem schweren Sommersturm lag ein großer Buchenast quer über unserer Garage. Der Notdienst war innerhalb von 45 Minuten vor Ort und hat die Gefahr beseitigt. Absolut professionell!',
          stars: 5,
        },
      ],
    },
    about: {
      badge: 'ÜBER UNS & AUSSTATTUNG',
      title: 'Leidenschaft für Bäume & modernste Forstsicherheitstechnik',
      description1: 'Als regionaler Fachbetrieb verbinden wir traditionelles forstwirtschaftliches Handwerk mit modernster Seilklettertechnik (SKT). Durch regelmäßige Fortbildungen nach ZTV-Baumpflege und moderne Spezialausrüstung lösen wir auch kniffligste Problemfälle ohne schweres Hebegerät im Garten.',
      description2: 'Besonders in Passaus Hanglagen entlang der Donau und des Inns bedarf es fundierter Erfahrung im Rigging (kontrolliertes Abseilen schwerer Astlasten). Bei uns ist Ihr Grundstück in den Händen geprüfter Baumpfleger mit voller Betriebshaftpflichtdeckung.',
      stat1Number: '850+',
      stat1Label: 'Erfolgreich gefällte & gepflegte Bäume',
      stat2Number: '100%',
      stat2Label: 'Besenreine Arbeitsplatzübergabe',
      stat3Number: '5 Mio. €',
      stat3Label: 'Betriebshaftpflicht-Deckungssumme',
      safetyFirstTitle: 'Sicherheit steht an erster Stelle',
      safetyFirstDesc: 'Zertifizierte persönliche Schutzausrüstung (PSA), jährliche Klettergurtprüfungen und modernste Stihl- & Husqvarna-Akkumaschinen für lärmsensible Wohngebiete.',
    },
    contact: {
      badge: 'KONTAKT & BERATUNG',
      title: 'Lassen Sie uns über Ihr Vorhaben sprechen',
      subtitle: 'Gerne kommen wir für eine unverbindliche Vor-Ort-Besichtigung in Passau und Umgebung bei Ihnen vorbei.',
      phoneCardTitle: 'Telefon & Notruf',
      phoneCardSub: 'Mo – Sa: 07:00 – 19:00 Uhr | Notfall 24/7',
      whatsappCardTitle: 'WhatsApp Schnellanfrage',
      whatsappCardSub: 'Schicken Sie uns Fotos für ein Sofortangebot',
      emailCardTitle: 'E-Mail & Angebotsanfrage',
      emailCardSub: 'Antwort garantiert innerhalb von 24 Stunden',
      addressCardTitle: 'Standort & Betriebshof',
      addressCardSub: 'Innstraße 42, 94032 Passau (Büro & Fuhrpark)',
      businessHoursTitle: 'Geschäftszeiten:',
      businessHoursText: 'Montag – Samstag: 07:00 – 19:00 Uhr | Notdienst: 24 Stunden / 7 Tage',
    },
    faq: {
      badge: 'FRAGEN & ANTWORTEN',
      title: 'Häufig gestellte Fragen (FAQ)',
      subtitle: 'Alles Wichtige rund um Fällgenehmigungen in Passau, Seilklettertechnik und unsere Arbeitsweise.',
      items: [
        {
          question: 'Brauche ich in Passau eine Genehmigung für eine Baumfällung?',
          answer: 'Das hängt vom Standort und Baumschutz ab. Im Stadtgebiet Passau sowie in Landschaftsschutzgebieten an Donau, Inn und Ilz gelten bestimmte Schutzsatzungen und Vogelschutzfristen (1. März bis 30. September gemäß § 39 BNatSchG). Form- und Pflegeschnitte sowie Fällungen zur unmittelbaren Gefahrenabwehr sind ganzjährig zulässig. Wir beraten Sie hierzu umfassend und unterstützen bei behördlichen Anträgen.'
        },
        {
          question: 'Warum ist Seilklettertechnik (SKT) oft besser als ein Hubsteiger?',
          answer: 'Gerade in Passaus historischen Gassen, Steillagen oder eingewachsenen Gärten passt kein schweres Fahrzeug hinein. Mit Seilklettertechnik (SKT-A/B) klettern unsere geprüften Baumpfleger seilunterstützt in jeden Kronenbereich, ohne Ihren Rasen, Zufahrten oder Beete zu beschädigen.'
        },
        {
          question: 'Was passiert mit dem anfallenden Schnittgut und Holz?',
          answer: 'Sie entscheiden: Wir können Äste bis 20 cm direkt vor Ort mit unserem Großhacker zu wertvollem Mulch verarbeiten, Stammholz auf ofenfertige Kaminlänge sägen oder das gesamte Material vollständig und besenrein abtransportieren.'
        },
        {
          question: 'Wie schnell sind Sie bei Sturmschäden vor Ort?',
          answer: 'Unser 24/7 Notdienst ist im Stadtgebiet Passau und 35 km Umkreis bei akuter Gefahr (z.B. umgestürzter Baum auf Dach, Garage oder Zufahrt) in der Regel innerhalb von 45 bis 60 Minuten einsatzbereit.'
        },
        {
          question: 'Sind Sie gegen eventuelle Schäden versichert?',
          answer: 'Selbstverständlich. Wir verfügen über eine betriebliche Haftpflichtversicherung mit einer pauschalen Deckungssumme von 5.000.000 € für Personen- und Sachschäden bei der Versicherungskammer Bayern.'
        }
      ]
    },
    footer: {
      brandBio: 'Ihr erfahrener Meister- und Fachbetrieb für Problembaumfällung, Seilklettertechnik, Baumpflege und Grünanlagenpflege in Passau und ganz Niederbayern.',
      quickLinks: 'Navigation',
      servicesTitle: 'Leistungen',
      legalTitle: 'Rechtliches',
      impressum: 'Impressum (§ 5 DDG)',
      datenschutz: 'Datenschutz (DSGVO)',
      rights: 'Alle Rechte vorbehalten.',
      cookieSettings: 'Cookie-Einstellungen',
    },
    legal: {
      impressumTitle: 'Impressum (Angaben gemäß § 5 DDG)',
      datenschutzTitle: 'Datenschutzerklärung (DSGVO)',
      close: 'Schließen',
    },
  },
  en: {
    nav: {
      services: 'Services',
      calculator: 'Cost Calculator',
      beforeAfter: 'Before / After',
      area: 'Service Area',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
      emergencyCall: '+49 170 892 4110',
      getQuote: 'Estimate Cost',
    },
    emergency: {
      badge: '24/7 EMERGENCY RESPONSE',
      title: 'Storm Damage in Passau & Surrounding Area?',
      subtitle: 'Fallen trees, hazardous leaning branches or rooftop obstructions? We secure your property immediately.',
      callNow: 'Call Emergency Hotline',
      available247: 'Available 24/7 ready for dispatch',
    },
    hero: {
      title: 'Professional Tree Care & Landscape Maintenance in',
      highlight: 'Passau & Surroundings',
      subtitle: 'Specialized in challenging tree removals using advanced Rope Access Climbing (SRT/DRT), precision arboricultural crown care, and complete property upkeep across Passau’s steep river valleys and tight residential lots.',
      badgeEmergency: '24/7 Emergency Storm Service',
      trust1: 'Fully Insured (Liability up to €5M)',
      trust2: 'Free On-Site Inspection',
      trust3: 'Transparent Fixed-Price Quotes',
      ctaCalculate: 'Calculate Free Quote',
      ctaCall: 'Call Us Directly',
      experienceBadge: '15+ Years',
      experienceText: 'Arboricultural experience in Lower Bavaria',
    },
    beforeAfter: {
      badge: 'PROVEN RESULTS & CRAFT',
      title: 'Before & After Direct Comparison',
      subtitle: 'Experience the transformation yourself: Drag the slider left and right to inspect the quality and cleanliness of our work.',
      labelBefore: 'Before (Hazard / Overgrowth)',
      labelAfter: 'After (Safe & Manicured)',
      caseTitle: 'Complex Sectional Dismantling in Passau-Haidenhof',
      caseDescription: 'Controlled dismantling of a decayed 18-meter fir tree leaning directly over a residential garage using rope rigging, followed by wood stacking and yard grooming.',
      dragHint: 'Click & drag the slider handle',
    },
    services: {
      badge: 'OUR SERVICES',
      title: 'Certified Tree & Garden Craftsmanship',
      subtitle: 'From delicate crown thinning to full-scale land clearing – state-of-the-art forestry tools, certified arborists, and complete respect for your property.',
      ctaCard: 'Request Quote',
      perkTitle: 'Always included:',
      items: [
        {
          id: 'faellung',
          title: 'Tree Removal & Sectional Felling',
          subtitle: 'Rope Access Technique (SKT) & Crane Support',
          description: 'Safe sectional dismantling in tight residential spaces, riverbank slopes along the Danube and Inn, and hazardous trees over powerlines or buildings.',
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
          perks: ['Certified Tree Climbers (SKT-A/B)', 'Shock-free controlled rigging', 'Full commercial liability coverage'],
          tag: 'Most Popular',
        },
        {
          id: 'pflege',
          title: 'Tree Pruning & Crown Care',
          subtitle: 'Health Preservation & Deadwood Removal',
          description: 'Crown thinning, deadwood sanitation, crown reduction, and clearance pruning conforming to European Arboricultural Standards.',
          image: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1000&q=80',
          perks: ['Expert pruning techniques', 'Long-term tree vitality preservation', 'Legal traffic clearance certification'],
          tag: 'Tree Health',
        },
        {
          id: 'hecke',
          title: 'Hedge Trimming & Garden Care',
          subtitle: 'Precision Topiary & Seasonal Maintenance',
          description: 'Regular and restorative trimming of thuja, beech, and laurel hedges, lawn mowing, brush clearing, and seasonal property upkeep.',
          image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=1000&q=80',
          perks: ['Clean geometric cuts', 'Pavement sweeping included', 'Custom seasonal maintenance plans'],
          tag: 'Seasonal',
        },
        {
          id: 'wurzel',
          title: 'Stump Grinding & Land Clearing',
          subtitle: 'Complete removal up to 40 cm deep',
          description: 'Thorough removal of tree stumps and major surface roots. Wood chips can be removed or left as high-grade natural ground mulch.',
          image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
          perks: ['Lawn-friendly compact grinders', 'Grinding down to 40cm depth', 'Immediate replanting possible'],
          tag: 'Efficient',
        },
        {
          id: 'entsorgung',
          title: 'Green Waste Chipping & Removal',
          subtitle: 'Eco-friendly recycling & cleanup',
          description: 'Mobile on-site wood chipping for branches up to 20 cm diameter. Green waste transport with our tipper trucks and certified recycling.',
          image: 'https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=1000&q=80',
          perks: ['Free mulch retention if desired', 'Broom-clean property guarantee', 'Certified recycling centers'],
          tag: 'Full Cleanup',
        },
        {
          id: 'sturm',
          title: '24/7 Storm Damage Emergency',
          subtitle: 'Rapid hazard control day and night',
          description: 'Emergency response for fallen trees, split limbs, and dangerous branches blocking driveways or endangering structures in Passau.',
          image: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1000&q=80',
          perks: ['On-site arrival within 60 mins', 'Direct insurance documentation', '24/7 dispatch phone line'],
          tag: '24/7 Emergency',
        },
      ],
    },
    calculator: {
      badge: 'INTERACTIVE COST ESTIMATOR',
      title: 'Get an Instant Estimate in 4 Easy Steps',
      subtitle: 'Select the required services and get an immediate, realistic price range for your property in the Passau region.',
      step1Title: '1. Which services do you need?',
      step1Desc: 'Multi-selection possible – choose all tasks that apply:',
      step2Title: '2. Dimensions & Accessibility',
      step2Desc: 'Provide specifics about the height and terrain conditions:',
      step3Title: '3. Photo Upload (Optional)',
      step3Desc: 'A photo allows us to give you a 100% binding quote within 24 hours:',
      step4Title: '4. Your Price Estimate & Contact',
      step4Desc: 'Here is your preliminary cost guidance:',
      serviceOptions: [
        { id: 'faellung', label: 'Tree Removal', desc: 'Standard felling or rope climbing sectional dismantling', basePrice: 420 },
        { id: 'pflege', label: 'Tree Care / Pruning', desc: 'Deadwood removal, crown thinning or clearance cuts', basePrice: 280 },
        { id: 'hecke', label: 'Hedge Trimming', desc: 'Maintenance shaping or heavy restorative reduction', basePrice: 190 },
        { id: 'wurzel', label: 'Stump Grinding', desc: 'Deep grinding of root stumps below lawn grade', basePrice: 170 },
        { id: 'entsorgung', label: 'Green Waste Disposal', desc: 'Full pickup, chipping, and environmentally sound disposal', basePrice: 120 },
      ],
      treeHeightLabel: 'Estimated tree or hedge height:',
      heightOptions: [
        { id: 'h1', label: 'Up to 5 meters (Small)', factor: 1.0 },
        { id: 'h2', label: '5 – 10 meters (Medium)', factor: 1.35 },
        { id: 'h3', label: '10 – 20 meters (Large)', factor: 1.85 },
        { id: 'h4', label: 'Over 20 meters (Extra large)', factor: 2.5 },
      ],
      accessibilityLabel: 'Site access & terrain condition:',
      accessEasy: 'Easy access (Direct driveway / spacious garden)',
      accessEasyDesc: 'Machinery and wood chippers can drive directly to the workspace.',
      accessHard: 'Challenging access (Steep slope / narrow backyard)',
      accessHardDesc: 'Access only on foot, enclosed courtyard or steep Passau riverbank slopes.',
      photoUploadTitle: 'Upload photo or take picture with camera',
      photoUploadHint: 'Click here or drag a photo (JPG, PNG up to 10MB)',
      photoUploadBadge: 'Photos help us provide a 100% binding fixed price within 24 hours!',
      photoUploaded: 'Photo uploaded successfully:',
      removePhoto: 'Remove photo',
      estimatedRangeTitle: 'Estimated Cost Range:',
      estimatedRangeSubtitle: 'Incl. VAT, certified crew & equipment for Passau and 35km radius',
      nameLabel: 'Your full name *',
      namePlaceholder: 'e.g. Thomas Bauer',
      phoneLabel: 'Phone or Mobile Number *',
      phonePlaceholder: 'e.g. +49 170 1234567',
      locationLabel: 'Postal Code & Town / District *',
      locationPlaceholder: 'e.g. 94034 Passau-Grubweg',
      notesLabel: 'Special notes or details (Optional)',
      notesPlaceholder: 'e.g. Tree stands close to glass greenhouse, please chip branches on site...',
      btnNext: 'Next Step',
      btnPrev: 'Back',
      btnSubmitWhatsApp: 'Send via WhatsApp (Fastest)',
      btnSubmitEmail: 'Request Email Quote',
      successMessage: 'Thank you! Your estimate request has been compiled.',
      resetCalculator: 'Start New Calculation',
      disclaimer: 'Note: This estimate range serves as preliminary orientation. The final binding fixed price is provided following photo inspection or a brief free on-site survey.',
    },
    coverage: {
      badge: 'LOCALLY BASED',
      title: 'Service Coverage: Passau & 35 km Radius',
      subtitle: 'We provide prompt service across all Passau urban districts and neighboring communities in the Bavarian-Austrian borderland.',
      radiusTag: '35 km Service Radius',
      noTravelFee: 'No travel surcharge upon order placement',
      districtsTitle: 'Passau City Districts:',
      surroundingsTitle: 'Neighboring Towns & Communities:',
      callToBook: 'Location not listed? Call us – we always find a solution for you!',
    },
    reviews: {
      badge: 'VERIFIED REVIEWS',
      title: 'What Passau Property Owners Say About Us',
      subtitle: 'Reliability, clean worksites, and masterful tree care speak for themselves.',
      averageRating: '4.9 out of 5 Stars',
      basedOn: 'Based on over 70 Google & regional customer reviews',
      items: [
        {
          name: 'Dr. Michael Stadler',
          location: 'Passau-Innstadt',
          date: '2 weeks ago',
          service: 'Tree Removal (Rope Rigging)',
          comment: 'Outstanding performance! A 22-meter tall spruce stood dangerously close to our house and garage. The crew dismantled the tree piece by piece using climbing ropes – not a single twig fell on the roof. Punctual, clean, top recommendation!',
          stars: 5,
        },
        {
          name: 'Sabine Weidinger',
          location: 'Passau-Grubweg',
          date: '1 month ago',
          service: 'Crown Pruning & Deadwood Removal',
          comment: 'Very friendly and skilled arborists. Our mature oak trees were professionally pruned and secured for traffic safety. All branches were chipped on site and the driveway left spotless.',
          stars: 5,
        },
        {
          name: 'Florian Binder',
          location: 'Salzweg',
          date: '3 weeks ago',
          service: 'Stump Grinding & Hedge Trimming',
          comment: 'Only 3 days passed between my online inquiry and execution. The stumps were ground 35cm below ground level, letting us seed new grass immediately. The quote matched the final invoice to the cent.',
          stars: 5,
        },
        {
          name: 'Anna Maierhofer',
          location: 'Vilshofen an der Donau',
          date: '2 months ago',
          service: 'Storm Emergency Service',
          comment: 'Following a severe summer storm, a huge beech limb fell across our carport. The emergency crew arrived within 45 minutes and removed the hazard safely. Truly professional!',
          stars: 5,
        },
      ],
    },
    about: {
      badge: 'ABOUT US & GEAR',
      title: 'Passion for Trees & Advanced Forestry Safety',
      description1: 'As a local craft enterprise, we blend traditional Bavarian forestry know-how with cutting-edge Rope Access Techniques (SKT). Through ongoing training according to European Arboricultural Standards, we solve the most intricate hazard tree challenges without needing destructive heavy machinery on your lawn.',
      description2: 'Passau’s steep topography along the Danube, Inn, and Ilz requires extensive rigging expertise (controlled lowering of heavy wood loads). Your property is in the safe hands of certified tree climbers backed by full liability insurance.',
      stat1Number: '850+',
      stat1Label: 'Successfully pruned & felled trees',
      stat2Number: '100%',
      stat2Label: 'Broom-clean worksite handover',
      stat3Number: '€5M',
      stat3Label: 'Commercial liability coverage',
      safetyFirstTitle: 'Safety always comes first',
      safetyFirstDesc: 'Certified PPE gear, annual climbing equipment recertification, and silent high-torque cordless Stihl equipment for residential quiet zones.',
    },
    contact: {
      badge: 'CONTACT & CONSULTATION',
      title: 'Let’s Discuss Your Tree & Garden Project',
      subtitle: 'We are pleased to offer a free, no-obligation on-site consultation anywhere in Passau and surrounding regions.',
      phoneCardTitle: 'Phone & Emergency',
      phoneCardSub: 'Mon – Sat: 07:00 – 19:00 | Emergency 24/7',
      whatsappCardTitle: 'WhatsApp Instant Chat',
      whatsappCardSub: 'Send us photos for an immediate quote',
      emailCardTitle: 'Email & Inquiries',
      emailCardSub: 'Guaranteed reply within 24 hours',
      addressCardTitle: 'Yard & Base Location',
      addressCardSub: 'Innstraße 42, 94032 Passau (Office & Depot)',
      businessHoursTitle: 'Working Hours:',
      businessHoursText: 'Monday – Saturday: 07:00 – 19:00 | Emergency: 24/7 around the clock',
    },
    faq: {
      badge: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Helpful Answers to Common Questions',
      subtitle: 'Everything you need to know about tree protection laws in Passau, rope access climbing, and our workflow.',
      items: [
        {
          question: 'Do I need a permit to fell a tree in Passau?',
          answer: 'This depends on the tree size, species, and location. In Passau urban areas and designated landscape reserves along the Danube, Inn, and Ilz rivers, tree preservation statutes apply. Section 39 of the Federal Nature Conservation Act protects bird nesting between March 1 and September 30, but pruning, health cuts, and immediate storm hazard removals are permitted year-round. We gladly assist you with municipal paperwork.'
        },
        {
          question: 'Why is Rope Access Technique (SKT) preferred over heavy cranes?',
          answer: 'Passau’s historic alleys, river slopes, and enclosed residential courtyards often cannot accommodate heavy crane trucks. Certified rope climbers (SKT-A/B) maneuver safely into any crown without damaging your lawn, pavement, or garden structures.'
        },
        {
          question: 'What happens to the felled timber and green waste?',
          answer: 'You choose: We can chip all limbs on-site into valuable garden mulch, cut firewood logs to your preferred stove length, or remove everything completely with a spotless broom-clean guarantee.'
        },
        {
          question: 'How quickly can your emergency storm crew arrive?',
          answer: 'Our 24/7 emergency hotline responds across Passau and a 35 km radius typically within 45 to 60 minutes when fallen limbs threaten buildings or block essential driveways.'
        },
        {
          question: 'Are you insured in case of accidental property damage?',
          answer: 'Yes, fully. We carry a comprehensive commercial liability insurance policy with €5,000,000 coverage per incident through Versicherungskammer Bayern.'
        }
      ]
    },
    footer: {
      brandBio: 'Your certified local specialist for hazardous tree dismantling, rope climbing arborism, tree care, and landscape maintenance across Passau and Lower Bavaria.',
      quickLinks: 'Navigation',
      servicesTitle: 'Services',
      legalTitle: 'Legal',
      impressum: 'Imprint (§ 5 DDG)',
      datenschutz: 'Privacy Policy (GDPR)',
      rights: 'All rights reserved.',
      cookieSettings: 'Cookie Settings',
    },
    legal: {
      impressumTitle: 'Imprint (Details pursuant to § 5 DDG)',
      datenschutzTitle: 'Privacy Policy (GDPR / DSGVO)',
      close: 'Close',
    },
  },
};

export const passauDistricts = [
  { name: 'Altstadt', zip: '94032' },
  { name: 'Innstadt', zip: '94032' },
  { name: 'Haidenhof', zip: '94036' },
  { name: 'Grubweg', zip: '94034' },
  { name: 'Heining', zip: '94036' },
  { name: 'Ilzstadt', zip: '94034' },
  { name: 'Kohlbruck', zip: '94036' },
  { name: 'Hals', zip: '94034' },
];

export const passauSurroundings = [
  'Salzweg',
  'Fürstenzell',
  'Vilshofen an der Donau',
  'Tiefenbach',
  'Hauzenberg',
  'Pocking',
  'Neuburg am Inn',
  'Thyrnau',
  'Hutthurm',
  'Windorf',
  'Passauer Land',
  'Schärding (Grenzgebiet)',
];
