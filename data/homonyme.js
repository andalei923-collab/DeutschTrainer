// ============================================================
//  data/homonyme.js – Homonymdatenbank
//  Deutsch Trainer | Alle Klassen
//  20+ Homonyme mit Bedeutungen und Beispielsätzen
// ============================================================

const HOMONYME = [

  // ────────────────────────────────────────────────────────
  //  Klasse 1–2 (bekannte Homonyme)
  // ────────────────────────────────────────────────────────
  {
    wort:        'Bank',
    klasse:      1,
    artikel:     ['die', 'die'],
    bedeutungen: ['Sitzgelegenheit (Möbel)', 'Geldinstitut'],
    beispiele:   [
      'Ich sitze auf der Bank im Park.',
      'Ich hebe Geld von der Bank ab.',
    ],
    hinweis: 'Der Kontext verrät die Bedeutung: Park/Sitzen → Möbel | Geld/Abheben → Institut.',
  },
  {
    wort:        'Schloss',
    klasse:      1,
    artikel:     ['das', 'das'],
    bedeutungen: ['Großes Gebäude / Burg / Palast', 'Türverschluss / Sicherheitsschloss'],
    beispiele:   [
      'Das Schloss auf dem Hügel zieht viele Touristen an.',
      'Das Schloss an der Tür ist kaputt.',
    ],
    hinweis: 'Auf dem Berg / Touristen → Gebäude | an der Tür / kaputt → Verschluss.',
  },
  {
    wort:        'Flügel',
    klasse:      1,
    artikel:     ['der', 'der'],
    bedeutungen: ['Körperteil eines Vogels zum Fliegen', 'Großes Klavier (Musikinstrument)'],
    beispiele:   [
      'Der Adler breitet seine Flügel aus und fliegt hoch.',
      'Der Pianist spielte am Flügel des Konzertsaals.',
    ],
    hinweis: 'Vogel / fliegen → Körperteil | Pianist / Konzertsaal → Musikinstrument.',
  },
  {
    wort:        'Tor',
    klasse:      2,
    artikel:     ['das', 'das'],
    bedeutungen: ['Eingang / großes Eingangstor', 'Treffer beim Sport (Fußball, Hockey)'],
    beispiele:   [
      'Das schwere Tor des alten Schlosses knarrte laut.',
      'Der Stürmer schoss in der letzten Minute ein Tor.',
    ],
    hinweis: 'Schloss / knarren → Eingangstor | Stürmer / schießen → Sporttreffer.',
  },
  {
    wort:        'Mutter',
    klasse:      2,
    artikel:     ['die', 'die'],
    bedeutungen: ['Weiblicher Elternteil', 'Schraubenmutter (Metallring zum Befestigen)'],
    beispiele:   [
      'Meine Mutter backt jeden Sonntag einen Kuchen.',
      'Der Mechaniker dreht die Mutter mit dem Schraubenschlüssel fest.',
    ],
    hinweis: 'Backen / Familie → Elternteil | Mechaniker / Schraubenschlüssel → Metallring.',
  },
  {
    wort:        'Kiefer',
    klasse:      2,
    artikel:     ['der/die', 'die'],
    bedeutungen: ['Kieferknochen (Teil des Gesichts)', 'Kiefer-Baum (Nadelbaum)'],
    beispiele:   [
      'Der Zahnarzt untersuchte meinen Kiefer.',
      'Im Wald stehen viele alte Kiefern.',
    ],
    hinweis: 'Zahnarzt / Gesicht → Knochen | Wald / Baum → Nadelbaum.',
  },
  {
    wort:        'Leiter',
    klasse:      2,
    artikel:     ['die', 'der'],
    bedeutungen: ['Steigleiter (Gerät zum Klettern)', 'Anführer / Chef / Direktor'],
    beispiele:   [
      'Der Feuerwehrmann stieg die Leiter hinauf.',
      'Der Leiter der Schule begrüßte alle Schülerinnen.',
    ],
    hinweis: 'Feuerwehr / klettern → Gerät (die Leiter) | Schule / begrüßen → Chef (der Leiter).',
  },

  // ────────────────────────────────────────────────────────
  //  Klasse 3–4 (neue Homonyme)
  // ────────────────────────────────────────────────────────
  {
    wort:        'Zug',
    klasse:      3,
    artikel:     ['der', 'der'],
    bedeutungen: ['Schienenfahrzeug (Eisenbahn)', 'Luftzug / Zugluft', 'Spielzug beim Schach'],
    beispiele:   [
      'Wir fahren mit dem Zug nach Salzburg.',
      'Mach das Fenster zu, hier ist ein unangenehmer Zug.',
      'Mit diesem Zug setzt er den Gegner schachmatt.',
    ],
    hinweis: 'Fahren / Bahnhof → Eisenbahn | Fenster / kalt → Luftzug | Schach / spielen → Spielzug.',
  },
  {
    wort:        'Band',
    klasse:      3,
    artikel:     ['das/der/die', 'das/der/die'],
    bedeutungen: ['Buchband (der Band)', 'Musikgruppe (die Band)', 'Gewebe- oder Tonband (das Band)'],
    beispiele:   [
      'Ich habe den dritten Band der Romanreihe gelesen.',
      'Die Band spielte bis Mitternacht auf der Bühne.',
      'Das schmale Band hielt das Paket zusammen.',
    ],
    hinweis: 'Artikel beachten: der Band (Buch) | die Band (Musik) | das Band (Gewebe).',
  },
  {
    wort:        'Strauß',
    klasse:      3,
    artikel:     ['der', 'der'],
    bedeutungen: ['Blumenstrauß (gebundene Blumen)', 'Vogel Strauß (großer Laufvogel)'],
    beispiele:   [
      'Er schenkte ihr einen Strauß roter Rosen.',
      'Der Strauß im Zoo kann trotz seiner Flügel nicht fliegen.',
    ],
    hinweis: 'Rosen / schenken → Blumen | Zoo / fliegen kann nicht → Vogel.',
  },
  {
    wort:        'Läufer',
    klasse:      3,
    artikel:     ['der', 'der'],
    bedeutungen: ['Sportler, der läuft', 'Langer Teppich (Treppenläufer)', 'Schachfigur'],
    beispiele:   [
      'Der Läufer gewann das 100-Meter-Rennen.',
      'Im Treppenhaus liegt ein langer Läufer aus Wolle.',
      'Der Schachspieler setzte den Läufer strategisch ein.',
    ],
    hinweis: 'Rennen / Sport → Sportler | Treppenhaus / Wolle → Teppich | Schach → Spielfigur.',
  },
  {
    wort:        'Gericht',
    klasse:      4,
    artikel:     ['das', 'das'],
    bedeutungen: ['Zubereitete Speise / Mahlzeit', 'Justizbehörde / Tribunal'],
    beispiele:   [
      'Das Gericht schmeckte ausgezeichnet.',
      'Der Angeklagte wurde vor Gericht gestellt.',
    ],
    hinweis: 'Schmecken / essen → Speise | Angeklagter / Urteil → Justiz.',
  },
  {
    wort:        'Steuer',
    klasse:      4,
    artikel:     ['das/die', 'das/die'],
    bedeutungen: ['Lenkrad / Lenkvorrichtung (das Steuer)', 'Staatliche Abgabe (die Steuer)'],
    beispiele:   [
      'Der Fahrer hielt das Steuer ruhig in der Kurve.',
      'Arbeitnehmer zahlen jeden Monat Steuern.',
    ],
    hinweis: 'Artikel beachten: das Steuer (Lenkrad) | die Steuer / Steuern (Abgabe).',
  },
  {
    wort:        'Gehalt',
    klasse:      4,
    artikel:     ['das/der', 'das/der'],
    bedeutungen: ['Monatlicher Lohn / Bezahlung (das Gehalt)', 'Inhalt / Anteil von etwas (der Gehalt)'],
    beispiele:   [
      'Sein Gehalt wurde um zehn Prozent erhöht.',
      'Orangen haben einen hohen Vitamin-C-Gehalt.',
    ],
    hinweis: 'Artikel beachten: das Gehalt (Lohn) | der Gehalt (Anteil, z. B. Nährstoffgehalt).',
  },
  {
    wort:        'Recht',
    klasse:      4,
    artikel:     ['das', '–'],
    bedeutungen: ['Gesamtheit der Gesetze (Substantiv)', 'Richtig / korrekt (Adjektiv/Adverb)'],
    beispiele:   [
      'Das österreichische Recht regelt viele Lebensbereiche.',
      'Du hast recht – das war mein Fehler.',
    ],
    hinweis: 'das Recht (Substantiv, Gesetze) | recht haben (Adjektiv: korrekt sein).',
  },

  // ────────────────────────────────────────────────────────
  //  Klasse 5 / PSA (schwierige Homonyme)
  // ────────────────────────────────────────────────────────
  {
    wort:        'Hahn',
    klasse:      5,
    artikel:     ['der', 'der'],
    bedeutungen: ['Männliches Huhn', 'Wasserabsperrhahn / Armatur'],
    beispiele:   [
      'Der Hahn kräht jeden Morgen um fünf Uhr.',
      'Dreh den Hahn zu, das Wasser tropft.',
    ],
    hinweis: 'Krähen / Tier → Vogel | Wasser / drehen / tropfen → Armatur.',
  },
  {
    wort:        'Mark',
    klasse:      5,
    artikel:     ['die/das/die', 'die/das/die'],
    bedeutungen: ['Ehemalige Währung (die Mark)', 'Knochenmark (das Mark)', 'Grenzland, historisch (die Mark)'],
    beispiele:   [
      'Das hat zehn Mark gekostet.',
      'Das geht mir durch Mark und Bein!',
      'Die Steiermark ist ein Bundesland in Österreich.',
    ],
    hinweis: 'Währung → die Mark | Knochen/Bein → das Mark | Ortsname/Land → die Mark.',
  },
  {
    wort:        'Weise',
    klasse:      5,
    artikel:     ['die/der', 'die/der'],
    bedeutungen: ['Art und Weise / Methode (die Weise)', 'Melodie / Liedweise (die Weise)', 'Kluge, erfahrene Person (der/die Weise)'],
    beispiele:   [
      'Sie löste das Problem auf clevere Weise.',
      'Er pfiff eine fröhliche Weise vor sich hin.',
      'Die drei Weisen brachten dem Kind Geschenke.',
    ],
    hinweis: 'auf … Weise → Methode | pfeifen/singen → Melodie | klug/alt → Person.',
  },
  {
    wort:        'Bund',
    klasse:      5,
    artikel:     ['der/der/der', 'der'],
    bedeutungen: ['Bündnis / Vereinigung', 'Hosenbund (Kleidung)', 'Staat / Staatenbund'],
    beispiele:   [
      'Die beiden Nationen schlossen einen Bund des Friedens.',
      'Der Bund der Hose ist zu eng.',
      'Der Bund finanziert dieses Projekt.',
    ],
    hinweis: 'Nationen / Frieden → Bündnis | Hose / eng → Kleidung | Staat / finanzieren → politisch.',
  },
  {
    wort:        'Licht',
    klasse:      5,
    artikel:     ['das', 'das'],
    bedeutungen: ['Helligkeit / Beleuchtung', 'Kerze (einzelne Lichtquelle)'],
    beispiele:   [
      'Das Licht im Zimmer ist zu dunkel zum Lesen.',
      'Auf dem Weihnachtsbaum brennen viele Lichter.',
    ],
    hinweis: 'Zimmer / dunkel → Beleuchtung/Helligkeit | Weihnachtsbaum / brennen → Kerze (Plural: Lichter).',
  },
  {
    wort:        'Kapital',
    klasse:      5,
    artikel:     ['das', 'das'],
    bedeutungen: ['Geldvermögen / Kapital (Wirtschaft)', 'Hauptstadt (veraltet)'],
    beispiele:   [
      'Das Unternehmen investierte sein Kapital in neue Maschinen.',
      'Wien ist das Kapital Oesterreichs. (heute: Hauptstadt)',
    ],
    hinweis: 'Wirtschaft / investieren → Geldvermögen | veraltet: Hauptstadt eines Landes.',
  },
];


// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = HOMONYME;
}
