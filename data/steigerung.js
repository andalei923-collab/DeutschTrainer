// ============================================================
//  data/steigerung.js – Steigerungsformendatenbank
//  Deutsch Trainer | Alle Klassen
//  30+ Adjektive mit allen drei Steigerungsformen
// ============================================================

const STEIGERUNG = {

  // ──────────────────────────────────────────────────────────
  //  REGELMÄSSIGE Steigerungsformen
  //  Muster: Grundform + -er | am Grundform + -sten/-esten
  // ──────────────────────────────────────────────────────────
  regelmaessig: [
    // Klasse 1–2
    {
      grundform:  'klein',
      komparativ: 'kleiner',
      superlativ: 'am kleinsten',
      klasse:     1,
      beispiel:   'Das kleinste Tier im Zoo ist die Zwergmaus.',
    },
    {
      grundform:  'groß',
      komparativ: 'größer',
      superlativ: 'am größten',
      klasse:     1,
      beispiel:   'Der größte Berg der Welt ist der Mount Everest.',
      hinweis:    'Umlaut: a → ä',
    },
    {
      grundform:  'alt',
      komparativ: 'älter',
      superlativ: 'am ältesten',
      klasse:     1,
      beispiel:   'Meine Oma ist die älteste Person in unserer Familie.',
      hinweis:    'Umlaut: a → ä + Endung -esten (nach t)',
    },
    {
      grundform:  'jung',
      komparativ: 'jünger',
      superlativ: 'am jüngsten',
      klasse:     1,
      beispiel:   'Mein jüngster Bruder ist erst drei Jahre alt.',
      hinweis:    'Umlaut: u → ü',
    },
    {
      grundform:  'schnell',
      komparativ: 'schneller',
      superlativ: 'am schnellsten',
      klasse:     1,
      beispiel:   'Der schnellste Läufer gewann die Goldmedaille.',
    },
    {
      grundform:  'langsam',
      komparativ: 'langsamer',
      superlativ: 'am langsamsten',
      klasse:     1,
      beispiel:   'Die Schildkröte ist das langsamste Tier im Rennen.',
    },
    {
      grundform:  'schön',
      komparativ: 'schöner',
      superlativ: 'am schönsten',
      klasse:     1,
      beispiel:   'Dieser Sonnenuntergang ist der schönste, den ich je gesehen habe.',
    },
    {
      grundform:  'warm',
      komparativ: 'wärmer',
      superlativ: 'am wärmsten',
      klasse:     2,
      beispiel:   'Der wärmste Tag des Jahres war am 15. Juli.',
      hinweis:    'Umlaut: a → ä',
    },
    {
      grundform:  'kalt',
      komparativ: 'kälter',
      superlativ: 'am kältesten',
      klasse:     2,
      beispiel:   'Der kälteste Winter seit Jahrzehnten war 1963.',
      hinweis:    'Umlaut: a → ä + Endung -esten (nach t)',
    },
    {
      grundform:  'lang',
      komparativ: 'länger',
      superlativ: 'am längsten',
      klasse:     2,
      beispiel:   'Der längste Fluss Europas ist die Wolga.',
      hinweis:    'Umlaut: a → ä',
    },
    {
      grundform:  'kurz',
      komparativ: 'kürzer',
      superlativ: 'am kürzesten',
      klasse:     2,
      beispiel:   'Der kürzeste Weg führt durch den Park.',
      hinweis:    'Umlaut: u → ü + Endung -esten (nach z)',
    },
    // Klasse 3–4
    {
      grundform:  'breit',
      komparativ: 'breiter',
      superlativ: 'am breitesten',
      klasse:     3,
      beispiel:   'Die breiteste Straße der Stadt ist die Ringstraße.',
      hinweis:    'Endung -esten (nach t)',
    },
    {
      grundform:  'stark',
      komparativ: 'stärker',
      superlativ: 'am stärksten',
      klasse:     3,
      beispiel:   'Das stärkste Argument in der Debatte überzeugte alle.',
      hinweis:    'Umlaut: a → ä',
    },
    {
      grundform:  'schwach',
      komparativ: 'schwächer',
      superlativ: 'am schwächsten',
      klasse:     3,
      beispiel:   'Der schwächste Punkt des Plans wurde sofort kritisiert.',
      hinweis:    'Umlaut: a → ä',
    },
    {
      grundform:  'reich',
      komparativ: 'reicher',
      superlativ: 'am reichsten',
      klasse:     3,
      beispiel:   'Das reichste Land Europas hat ein hohes BIP.',
    },
    {
      grundform:  'arm',
      komparativ: 'ärmer',
      superlativ: 'am ärmsten',
      klasse:     3,
      beispiel:   'Die ärmsten Regionen der Welt brauchen internationale Hilfe.',
      hinweis:    'Umlaut: a → ä',
    },
    {
      grundform:  'klug',
      komparativ: 'klüger',
      superlativ: 'am klügsten',
      klasse:     3,
      beispiel:   'Die klügste Entscheidung war, Hilfe zu holen.',
      hinweis:    'Umlaut: u → ü',
    },
    {
      grundform:  'laut',
      komparativ: 'lauter',
      superlativ: 'am lautesten',
      klasse:     3,
      beispiel:   'Das lauteste Konzert des Jahres fand im Stadion statt.',
      hinweis:    'Endung -esten (nach t)',
    },
    {
      grundform:  'leise',
      komparativ: 'leiser',
      superlativ: 'am leisesten',
      klasse:     3,
      beispiel:   'Das leiseste Geräusch war noch zu hören.',
      hinweis:    'Endung -esten (Vokal vor s)',
    },
    {
      grundform:  'teuer',
      komparativ: 'teurer',
      superlativ: 'am teuersten',
      klasse:     4,
      beispiel:   'Das teuerste Gemälde der Welt wurde für Millionen verkauft.',
      hinweis:    'Komparativ: teuer → teurer (kein doppeltes e)',
    },
    {
      grundform:  'billig',
      komparativ: 'billiger',
      superlativ: 'am billigsten',
      klasse:     4,
      beispiel:   'Das billigste Angebot war leider von schlechter Qualität.',
    },
    {
      grundform:  'wichtig',
      komparativ: 'wichtiger',
      superlativ: 'am wichtigsten',
      klasse:     4,
      beispiel:   'Das wichtigste Argument steht am Anfang der Erörterung.',
    },
    {
      grundform:  'interessant',
      komparativ: 'interessanter',
      superlativ: 'am interessantesten',
      klasse:     4,
      beispiel:   'Das interessanteste Kapitel des Buches handelt von der Zukunft.',
      hinweis:    'Endung -esten (nach t)',
    },
    {
      grundform:  'überzeugend',
      komparativ: 'überzeugender',
      superlativ: 'am überzeugendsten',
      klasse:     5,
      beispiel:   'Das überzeugendste Argument in der Diskussion war das letzte.',
    },
    {
      grundform:  'komplex',
      komparativ: 'komplexer',
      superlativ: 'am komplexesten',
      klasse:     5,
      beispiel:   'Der komplexeste Aspekt des Problems wurde zuletzt besprochen.',
      hinweis:    'Endung -esten (nach x)',
    },
  ],

  // ──────────────────────────────────────────────────────────
  //  UNREGELMÄSSIGE Steigerungsformen
  //  Diese Formen müssen auswendig gelernt werden!
  // ──────────────────────────────────────────────────────────
  unregelmaessig: [
    {
      grundform:  'gut',
      komparativ: 'besser',
      superlativ: 'am besten',
      klasse:     1,
      beispiel:   'Diese Lösung ist besser als alle anderen – sie ist die beste!',
      hinweis:    'NICHT: „guter" oder „am gutesten"! Komplett andere Wortstämme.',
    },
    {
      grundform:  'viel',
      komparativ: 'mehr',
      superlativ: 'am meisten',
      klasse:     1,
      beispiel:   'Er hat am meisten Punkte gesammelt und damit mehr als alle anderen.',
      hinweis:    'NICHT: „vieler" oder „am vielsten"! Superlativ: am meisten (nicht: am meistens).',
    },
    {
      grundform:  'gern',
      komparativ: 'lieber',
      superlativ: 'am liebsten',
      klasse:     2,
      beispiel:   'Ich esse gern Pizza, aber am liebsten esse ich Pasta.',
      hinweis:    'NICHT: „gerner" oder „am gernsten"!',
    },
    {
      grundform:  'hoch',
      komparativ: 'höher',
      superlativ: 'am höchsten',
      klasse:     2,
      beispiel:   'Der höchste Berg Österreichs ist der Großglockner.',
      hinweis:    'Umlaut + Stammveränderung: hoch → höher (ch fällt weg).',
    },
    {
      grundform:  'nah',
      komparativ: 'näher',
      superlativ: 'am nächsten',
      klasse:     3,
      beispiel:   'Die nächste Haltestelle ist nur zwei Minuten entfernt.',
      hinweis:    'Superlativ: am nächsten (NICHT: am nähsten). Große Stammveränderung!',
    },
    {
      grundform:  'wenig',
      komparativ: 'weniger',
      superlativ: 'am wenigsten',
      klasse:     3,
      beispiel:   'Er hat am wenigsten Fehler gemacht.',
      hinweis:    'Regulär ODER: minder/am mindesten (gehoben).',
    },
    {
      grundform:  'bald',
      komparativ: 'eher',
      superlativ: 'am ehesten',
      klasse:     4,
      beispiel:   'Das ist am ehesten das, was ich mir vorgestellt habe.',
      hinweis:    'Zeitform-Adverb mit Steigerung. NICHT: „balder" oder „am baldesten"!',
    },
  ],

  // ──────────────────────────────────────────────────────────
  //  ABSOLUTE Adjektive (nicht steigerbar)
  //  Zur Vollständigkeit – für den PSA-Bereich
  // ──────────────────────────────────────────────────────────
  absolut: [
    {
      grundform:   'optimal',
      komparativ:  null,
      superlativ:  null,
      klasse:      4,
      erklaerung:  'optimal = das Bestmögliche → eine Steigerung ist logisch nicht sinnvoll.',
      falschform:  'optimaler / am optimalsten',
    },
    {
      grundform:   'perfekt',
      komparativ:  null,
      superlativ:  null,
      klasse:      4,
      erklaerung:  'perfekt = ohne jeden Fehler → etwas kann nicht "perfekter" sein.',
      falschform:  'perfekter / am perfektesten',
    },
    {
      grundform:   'maximal',
      komparativ:  null,
      superlativ:  null,
      klasse:      5,
      erklaerung:  'maximal = der höchstmögliche Wert → es gibt nichts Höheres.',
      falschform:  'maximaler / am maximalsten',
    },
    {
      grundform:   'einzigartig',
      komparativ:  null,
      superlativ:  null,
      klasse:      5,
      erklaerung:  'einzigartig = es gibt kein zweites davon → nicht vergleichbar.',
      falschform:  'einzigartiger / am einzigartigsten',
    },
    {
      grundform:   'absolut',
      komparativ:  null,
      superlativ:  null,
      klasse:      5,
      erklaerung:  'absolut = uneingeschränkt, vollständig → kann nicht gesteigert werden.',
      falschform:  'absoluter / am absolutsten',
    },
  ],
};


// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STEIGERUNG;
}
