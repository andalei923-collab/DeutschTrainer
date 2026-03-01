// ============================================================
//  data/klasse1.js – Welt 1: Grundlagen der deutschen Sprache
//  Deutsch Trainer | Zielgruppe: 1. Klasse Mittelschule, 10–11 Jahre
//  Österreichischer Lehrplan
// ============================================================

const KLASSE1 = {
  welt:  1,
  titel: 'Welt 1 – Grundlagen der deutschen Sprache',

  kategorien: [

    // ╔══════════════════════════════════════════════════════╗
    // ║  1. Wortarten – Nomen, Verb, Adjektiv               ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'wortarten',
      titel: 'Wortarten',
      farbe: '#a855f7',

      theorie: {
        titel: 'Wortarten – Nomen, Verb, Adjektiv',
        erklaerung:
          'Im Deutschen gibt es verschiedene Wortarten. Die drei wichtigsten sind:\n\n' +
          '• Nomen (Namenwörter): bezeichnen Dinge, Personen oder Lebewesen. ' +
          'Sie werden immer GROSSGESCHRIEBEN. Man kann „der", „die" oder „das" davorstellen.\n\n' +
          '• Verben (Tätigkeitswörter): beschreiben, was jemand tut oder was passiert. ' +
          'Sie antworten auf die Frage: „Was tut die Person?" – Sie werden kleingeschrieben.\n\n' +
          '• Adjektive (Eigenschaftswörter): beschreiben, wie etwas ist. ' +
          'Sie antworten auf „Wie ist es?" – Sie werden kleingeschrieben.',
        beispiel:
          'Nomen:    der Hund,  die Blume,  das Haus\n' +
          'Verben:   rennen,    schlafen,   lesen\n' +
          'Adjektive: groß,     schön,      schnell\n\n' +
          'Satz: „Die kleine Katze schläft." → Katze = Nomen, klein = Adjektiv, schläft = Verb',
        merkhilfe:
          'Nomen: Kann ich „der/die/das" davor stellen? → Großschreiben!\n' +
          'Verb: Frage „Was tut sie/er?" → Das ist das Verb.\n' +
          'Adjektiv: Frage „Wie ist es?" → Das ist das Adjektiv.',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort ist ein Nomen (Namenwort)?',
          optionen:  ['rennen', 'schön', 'Schule', 'laufen'],
          richtig:   2,
          erklaerung: '"Schule" ist ein Nomen – man schreibt es groß und kann "die" davor setzen. "rennen" und "laufen" sind Verben, "schön" ist ein Adjektiv.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort ist ein Verb (Tätigkeitswort)?',
          optionen:  ['Hund', 'blau', 'Baum', 'schlafen'],
          richtig:   3,
          erklaerung: '"schlafen" ist ein Verb – es beschreibt eine Tätigkeit. "Hund" und "Baum" sind Nomen, "blau" ist ein Adjektiv.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort ist ein Adjektiv (Eigenschaftswort)?',
          optionen:  ['Katze', 'schnell', 'essen', 'Tisch'],
          richtig:   1,
          erklaerung: '"schnell" ist ein Adjektiv – es beschreibt eine Eigenschaft. "Katze" und "Tisch" sind Nomen, "essen" ist ein Verb.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „spielen" ist ein Verb.',
          richtig:   true,
          erklaerung: 'Richtig! „spielen" beschreibt eine Tätigkeit – das ist ein Verb (Tätigkeitswort).',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „Blume" ist ein Adjektiv.',
          richtig:   false,
          erklaerung: 'Falsch! „Blume" ist ein Nomen – man erkennt es daran, dass man „die" davor setzen kann: „die Blume". Nomen werden großgeschrieben.',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche Wörter sind Nomen? (Mehrere Antworten möglich)',
          optionen:  ['Hund', 'schön', 'Tisch', 'rennen'],
          richtig:   [0, 2],
          erklaerung: '"Hund" und "Tisch" sind Nomen – beide werden großgeschrieben. "schön" ist ein Adjektiv, "rennen" ist ein Verb.',
        },
        {
          typ:       'reihenfolge',
          frage:     'Bringe die Wörter in die richtige Reihenfolge, um einen sinnvollen Satz zu bilden:',
          woerter:   ['läuft', 'Hund', 'Der', 'schnell'],
          richtig:   ['Der', 'Hund', 'läuft', 'schnell'],
          erklaerung: '„Der Hund läuft schnell." – Artikel + Nomen + Verb + Adjektiv. Der Satz beginnt mit dem Artikel „Der".',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  2. Rechtschreibung – Groß/Klein & ie/i-Regel       ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'rechtschreibung',
      titel: 'Rechtschreibung',
      farbe: '#0fd4c8',

      theorie: {
        titel: 'Rechtschreibung – Groß-/Kleinschreibung & ie/i-Regel',
        erklaerung:
          '1. GROSSSCHREIBUNG von Nomen:\n' +
          '• Alle Nomen werden großgeschrieben: der Hund, die Katze, das Haus\n' +
          '• Am Satzanfang schreibt man IMMER groß\n\n' +
          '2. ie / i – Regel:\n' +
          '• Langer i-Laut → schreibt man meist „ie": Brief, Tier, lieben, fliegen\n' +
          '• Kurzer i-Laut → schreibt man „i": mit, in, bis, still\n\n' +
          'Ausnahmen beim langen i-Laut (kein ie!): mir, dir, wir, ihr, stier (lernt man auswendig)',
        beispiel:
          '✓ Das Kind spielt.        (Nomen „Kind" → groß)\n' +
          '✓ Der Brief liegt hier.   (langer i → „ie")\n' +
          '✓ Das Tier frisst Gras.   (langer i → „ie")\n' +
          '✗ das kind spielt.        (Nomen „Kind" → FEHLER!)',
        merkhilfe:
          'Tipp 1: Kannst du „der/die/das" davor setzen? → Dann groß!\n' +
          'Tipp 2: Sprich das Wort laut – ist das „i" lang und gedehnt? → Meist „ie"!',
      },

      fragen: [
        {
          typ:        'satz_korrigieren',
          frage:      'Finde das falsch geschriebene Wort und klicke darauf:',
          satz:       'Das buch liegt auf dem Tisch.',
          fehlerWort: 'buch',
          erklaerung: '"buch" muss großgeschrieben werden: „Buch" – Nomen werden immer großgeschrieben!',
        },
        {
          typ:        'satz_korrigieren',
          frage:      'Finde das falsch geschriebene Wort und klicke darauf:',
          satz:       'Mein hund bellt sehr laut.',
          fehlerWort: 'hund',
          erklaerung: '"hund" muss großgeschrieben werden: „Hund" – alle Nomen werden im Deutschen groß geschrieben!',
        },
        {
          typ:        'satz_korrigieren',
          frage:      'Finde das falsch geschriebene Wort und klicke darauf:',
          satz:       'Ich lese ein interessantes buch.',
          fehlerWort: 'buch',
          erklaerung: '"buch" ist ein Nomen und wird großgeschrieben: „Buch".',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „Brief" wird mit „ie" geschrieben.',
          richtig:   true,
          erklaerung: 'Richtig! „Brief" – das „ie" zeigt den langen i-Laut an. Auch: Tier, lieben, fliegen.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Man schreibt „das kind" mit einem kleinen k.',
          richtig:   false,
          erklaerung: 'Falsch! „Kind" ist ein Nomen und wird immer großgeschrieben: „das Kind".',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welche Schreibweise ist richtig?',
          optionen:  ['Tier', 'Tir', 'Teer', 'Tihr'],
          richtig:   0,
          erklaerung: '"Tier" ist richtig – langer i-Laut wird als „ie" geschrieben: T-ie-r.',
        },
        {
          typ:       'lueckentext',
          frage:     'Welche Schreibweise passt in den Satz?',
          satz:      'Ich schreibe meiner Oma einen ___.',
          optionen:  ['Brief', 'Brif', 'Brieff', 'Briev'],
          richtig:   'Brief',
          erklaerung: '"Brief" – langer i-Laut → „ie". Auch: Nomen → großgeschrieben.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  3. Satzzeichen – Punkt, ?, !, Beistrich            ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'satzzeichen',
      titel: 'Satzzeichen',
      farbe: '#f5a623',

      theorie: {
        titel: 'Satzzeichen – Punkt, Fragezeichen, Ausrufezeichen, Beistrich',
        erklaerung:
          'Satzzeichen helfen beim Lesen – sie zeigen, wie ein Satz endet oder wie er gemeint ist:\n\n' +
          '• Punkt (.)\n' +
          '  Steht am Ende eines Aussagesatzes.\n' +
          '  „Das Wetter ist schön."\n\n' +
          '• Fragezeichen (?)\n' +
          '  Steht am Ende eines Fragesatzes.\n' +
          '  „Wie heißt du?"\n\n' +
          '• Ausrufezeichen (!)\n' +
          '  Steht am Ende eines Ausrufe- oder Aufforderungssatzes.\n' +
          '  „Komm sofort her!" / „Hurra!"\n\n' +
          '• Beistrich (,)\n' +
          '  Trennt Teile einer Aufzählung oder steht vor manchen Wörtern.\n' +
          '  „Ich mag Äpfel, Birnen und Bananen."',
        beispiel:
          'Aussage   → .  „Die Sonne scheint."\n' +
          'Frage     → ?  „Scheint die Sonne?"\n' +
          'Ausruf    → !  „Was für ein schöner Tag!"\n' +
          'Aufzählung→ ,  „Ich sehe Wolken, Sonne und Regen."',
        merkhilfe:
          'Trick – wandle den Satz um:\n' +
          '„Ich sage, dass …" → Punkt\n' +
          '„Ich frage, ob …"  → Fragezeichen\n' +
          '„Ich rufe aus: …"  → Ausrufezeichen',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Welches Satzzeichen steht am Ende eines Fragesatzes?',
          optionen:  ['.', '?', '!', ','],
          richtig:   1,
          erklaerung: 'Fragesätze enden mit einem Fragezeichen (?). Beispiel: „Wie heißt du?"',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Satzzeichen gehört ans Ende? „Komm sofort her___"',
          optionen:  ['.', '?', '!', ','],
          richtig:   2,
          erklaerung: 'Aufforderungen und Ausrufe enden mit einem Ausrufezeichen (!). „Komm sofort her!"',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Am Ende von „Das Wetter ist schön" steht ein Punkt.',
          richtig:   true,
          erklaerung: 'Richtig! Aussagesätze enden mit einem Punkt (.): „Das Wetter ist schön."',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Fragesätze enden mit einem Ausrufezeichen.',
          richtig:   false,
          erklaerung: 'Falsch! Fragesätze enden mit einem Fragezeichen (?), nicht mit einem Ausrufezeichen (!). Beispiel: „Wie alt bist du?"',
        },
        {
          typ:       'lueckentext',
          frage:     'Welches Zeichen gehört in die Aufzählung?',
          satz:      'Ich mag Äpfel___ Birnen und Bananen.',
          optionen:  [',', '.', '?', '!'],
          richtig:   ',',
          erklaerung: 'Bei Aufzählungen steht ein Beistrich (,) zwischen den Teilen: „Ich mag Äpfel, Birnen und Bananen."',
        },
        {
          typ:       'lueckentext',
          frage:     'Welches Satzzeichen gehört ans Ende?',
          satz:      'Wie alt bist du ___',
          optionen:  ['?', '.', '!', ','],
          richtig:   '?',
          erklaerung: '„Wie alt bist du?" ist eine Frage → Fragezeichen am Ende.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Wann verwendet man einen Beistrich (,)?',
          optionen:  ['Am Ende jedes Satzes', 'Bei Aufzählungen', 'Vor dem Subjekt', 'Vor einem Verb'],
          richtig:   1,
          erklaerung: 'Der Beistrich (,) trennt Teile einer Aufzählung: „Ich sehe Hunde, Katzen und Vögel."',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  4. Grammatik – Singular / Plural                   ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'singular_plural',
      titel: 'Singular & Plural',
      farbe: '#e94560',

      theorie: {
        titel: 'Singular und Plural – Einzahl und Mehrzahl',
        erklaerung:
          'Nomen gibt es in der Einzahl (Singular) und der Mehrzahl (Plural):\n\n' +
          'Singular = ein einziger Gegenstand / eine Person\n' +
          '  → ein Hund, ein Kind, ein Haus\n\n' +
          'Plural = mehr als einer\n' +
          '  → viele Hunde, drei Kinder, zwei Häuser\n\n' +
          'Häufige Plural-Endungen:\n' +
          '  -e:       der Hund  → die Hunde\n' +
          '  -er:      das Kind  → die Kinder\n' +
          '  -en / -n: die Katze → die Katzen\n' +
          '  -s:       das Auto  → die Autos\n' +
          '  Umlaut:   der Baum  → die Bäume',
        beispiel:
          'ein Hund    → viele Hunde\n' +
          'ein Kind    → drei Kinder\n' +
          'eine Katze  → viele Katzen\n' +
          'ein Auto    → zwei Autos\n' +
          'ein Baum    → viele Bäume',
        merkhilfe:
          'Tipp: Sprich verschiedene Plural-Formen laut aus – klingt es richtig? ' +
          'Du kannst auch im Wörterbuch nachschlagen. Bei Unsicherheit hilft üben!',
      },

      fragen: [
        {
          typ:       'lueckentext',
          frage:     'Bilde den Plural:',
          satz:      'ein Hund – zwei ___',
          optionen:  ['Hunden', 'Hunds', 'Hunde', 'Hund'],
          richtig:   'Hunde',
          erklaerung: 'Der Plural von „Hund" lautet „Hunde" (Endung -e).',
        },
        {
          typ:       'lueckentext',
          frage:     'Bilde den Plural:',
          satz:      'ein Kind – drei ___',
          optionen:  ['Kinden', 'Kinder', 'Kinds', 'Kinde'],
          richtig:   'Kinder',
          erklaerung: 'Der Plural von „Kind" lautet „Kinder" (Endung -er).',
        },
        {
          typ:       'lueckentext',
          frage:     'Bilde den Plural:',
          satz:      'eine Katze – viele ___',
          optionen:  ['Katzs', 'Katzen', 'Katze', 'Kätzin'],
          richtig:   'Katzen',
          erklaerung: 'Der Plural von „Katze" lautet „Katzen" (Endung -n). Das „e" am Ende fällt weg.',
        },
        {
          typ:       'lueckentext',
          frage:     'Bilde den Plural:',
          satz:      'ein Baum – viele ___',
          optionen:  ['Baums', 'Bäume', 'Baume', 'Bäumen'],
          richtig:   'Bäume',
          erklaerung: 'Der Plural von „Baum" lautet „Bäume" – mit Umlaut (a → ä) und Endung -e.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was ist der Plural von „Haus"?',
          optionen:  ['Hauser', 'Häuser', 'Hauses', 'Hauser'],
          richtig:   1,
          erklaerung: '„Häuser" – Umlaut (a → ä) und Endung -er. Ein typisches Muster für viele Nomen auf -us und -aus.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Der Plural von „Buch" ist „Bücher".',
          richtig:   true,
          erklaerung: 'Richtig! „Buch" → „Bücher": Umlaut (u → ü) und Endung -er.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Der Plural von „Auto" ist „Autoen".',
          richtig:   false,
          erklaerung: 'Falsch! Der richtige Plural ist „Autos" (Endung -s). Viele Fremdwörter bilden den Plural mit -s.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  5. Synonyme – einfache Wortpaare                   ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'synonyme',
      titel: 'Synonyme',
      farbe: '#4ade80',

      theorie: {
        titel: 'Synonyme – Wörter mit ähnlicher Bedeutung',
        erklaerung:
          'Synonyme sind Wörter, die gleich oder sehr ähnlich bedeuten.\n\n' +
          'Warum brauchen wir Synonyme?\n' +
          '• Damit wir nicht immer dasselbe Wort wiederholen müssen.\n' +
          '• Damit unsere Texte abwechslungsreicher und lebendiger klingen.\n\n' +
          'Beispiele:\n' +
          '• froh  = glücklich = fröhlich = heiter\n' +
          '• groß  = riesig = gewaltig = gigantisch\n' +
          '• traurig = betrübt = niedergeschlagen = unglücklich',
        beispiel:
          'Der Hund ist froh.\n' +
          'Der Hund ist glücklich.   (Synonym!)\n\n' +
          'Das Haus ist groß.\n' +
          'Das Haus ist riesig.      (Synonym!)',
        merkhilfe:
          'Test: Kannst du ein Wort durch ein anderes ersetzen, ' +
          'ohne dass sich die Bedeutung des Satzes ändert? → Dann sind es Synonyme!',
      },

      fragen: [
        {
          typ:       'synonym_finden',
          frage:     'Was ist ein Synonym für „froh"?',
          optionen:  ['traurig', 'glücklich', 'müde', 'laut'],
          richtig:   1,
          erklaerung: '"glücklich" bedeutet dasselbe wie "froh" – beide beschreiben ein positives Gefühl.',
        },
        {
          typ:       'synonym_finden',
          frage:     'Was ist ein Synonym für „schnell"?',
          optionen:  ['langsam', 'leise', 'flink', 'groß'],
          richtig:   2,
          erklaerung: '"flink" ist ein Synonym für "schnell" – beide bedeuten, dass etwas rasch passiert.',
        },
        {
          typ:       'synonym_finden',
          frage:     'Was ist ein Synonym für „schön"?',
          optionen:  ['hässlich', 'klein', 'hübsch', 'laut'],
          richtig:   2,
          erklaerung: '"hübsch" ist ein Synonym für "schön" – beide drücken ein positives Aussehen aus.',
        },
        {
          typ:       'synonym_finden',
          frage:     'Was ist ein Synonym für „alt"?',
          optionen:  ['jung', 'neu', 'betagt', 'modern'],
          richtig:   2,
          erklaerung: '"betagt" ist ein Synonym für "alt" – ein etwas gehobenes Wort für dasselbe.',
        },
        {
          typ:       'synonym_finden',
          frage:     'Was bedeutet „erschöpft" am besten?',
          optionen:  ['wütend', 'müde', 'fröhlich', 'hungrig'],
          richtig:   1,
          erklaerung: '"erschöpft" bedeutet „sehr müde" – wenn man nach Anstrengung keine Kraft mehr hat.',
        },
        {
          typ:       'synonym_verbinden',
          frage:     'Verbinde die Synonyme: Klicke zuerst links, dann auf das passende Wort rechts.',
          paare: [
            ['groß',    'riesig'  ],
            ['schnell', 'flink'   ],
            ['traurig', 'betrübt' ],
            ['kalt',    'eisig'   ],
          ],
          erklaerung: 'Die richtigen Paare: groß ↔ riesig | schnell ↔ flink | traurig ↔ betrübt | kalt ↔ eisig',
        },
        {
          typ:       'synonym_verbinden',
          frage:     'Verbinde die Synonyme: Klicke zuerst links, dann auf das passende Wort rechts.',
          paare: [
            ['Haus',    'Gebäude' ],
            ['Freund',  'Kamerad' ],
            ['sprechen','reden'   ],
            ['Fehler',  'Irrtum'  ],
          ],
          erklaerung: 'Die richtigen Paare: Haus ↔ Gebäude | Freund ↔ Kamerad | sprechen ↔ reden | Fehler ↔ Irrtum',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  6. Homonyme – Bank, Schloss, Flügel                ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'homonyme',
      titel: 'Homonyme',
      farbe: '#f5a623',

      theorie: {
        titel: 'Homonyme – gleich klingende Wörter, verschiedene Bedeutungen',
        erklaerung:
          'Homonyme sind Wörter, die gleich geschrieben oder gleich klingen, ' +
          'aber verschiedene Bedeutungen haben.\n\n' +
          'Bekannte Homonyme:\n\n' +
          '• Bank:\n' +
          '  1. Sitzmöbel (im Park, im Garten)\n' +
          '  2. Geldinstitut (Geld einzahlen, Kredit)\n\n' +
          '• Schloss:\n' +
          '  1. Gebäude / Burg (das Schloss auf dem Berg)\n' +
          '  2. Türverschluss (das Schloss an der Tür)\n\n' +
          '• Flügel:\n' +
          '  1. Körperteil eines Vogels (zum Fliegen)\n' +
          '  2. Großes Klavier (in der Musik)',
        beispiel:
          '„Ich sitze auf der Bank."  → Sitzbank (im Park)\n' +
          '„Ich gehe zur Bank."       → Geldinstitut\n\n' +
          '„Das Schloss ist wunderschön." → Gebäude/Burg\n' +
          '„Das Schloss klemmt."          → Türverschluss',
        merkhilfe:
          'Wichtigster Tipp: Lies den ganzen Satz!\n' +
          'Der Zusammenhang (Kontext) zeigt dir immer, welche Bedeutung gemeint ist.',
      },

      fragen: [
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Bank" in diesem Satz?',
          satz:      'Ich sitze auf der Bank im Park.',
          optionen:  ['Geldinstitut', 'Sitzbank', 'Schrank', 'Schreibtisch'],
          richtig:   1,
          erklaerung: 'Im Park steht eine Sitzbank. Das Wort „Park" gibt den Hinweis – hier ist eine Sitzgelegenheit gemeint.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Bank" in diesem Satz?',
          satz:      'Mein Vater hebt Geld bei der Bank ab.',
          optionen:  ['Sitzbank', 'Geldinstitut', 'Schule', 'Fabrik'],
          richtig:   1,
          erklaerung: '„Geld abheben" macht man bei einem Geldinstitut. Das Verb „abheben" gibt den Hinweis.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Schloss" in diesem Satz?',
          satz:      'Das Schloss an meiner Tür ist kaputt.',
          optionen:  ['Königspalast', 'Museum', 'Türverschluss', 'Tresor'],
          richtig:   2,
          erklaerung: '„An der Tür" – das zeigt, dass ein Türverschluss gemeint ist, kein Gebäude.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Schloss" in diesem Satz?',
          satz:      'Das alte Schloss auf dem Berg zieht viele Touristen an.',
          optionen:  ['Türverschluss', 'Burg oder Palast', 'Sicherheitsschloss', 'Garage'],
          richtig:   1,
          erklaerung: '„Auf dem Berg" und „Touristen" – hier ist eindeutig eine Burg oder ein Palast gemeint.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Flügel" in diesem Satz?',
          satz:      'Der Adler breitet seine Flügel aus und fliegt los.',
          optionen:  ['Klavier', 'Körperteil zum Fliegen', 'Gebäudeteil', 'Ruder'],
          richtig:   1,
          erklaerung: 'Ein Adler ist ein Vogel – „Flügel" meint hier die Körperteile, mit denen er fliegt.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was versteht man unter einem „Flügel" in der Musik?',
          optionen:  ['Eine Geige', 'Ein Schlagzeug', 'Ein großes Klavier', 'Eine Flöte'],
          richtig:   2,
          erklaerung: 'Ein „Flügel" ist ein besonders großes Klavier. Es heißt so, weil es seitlich ausladend wie ein Flügel aussieht.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „Bank" hat nur eine einzige Bedeutung im Deutschen.',
          richtig:   false,
          erklaerung: 'Falsch! „Bank" ist ein Homonym: Es kann eine Sitzbank ODER ein Geldinstitut bedeuten – je nach Kontext.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  7. Steigerungsformen – groß / größer / am größten  ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'steigerung',
      titel: 'Steigerungsformen',
      farbe: '#a855f7',

      theorie: {
        titel: 'Steigerungsformen von Adjektiven',
        erklaerung:
          'Adjektive lassen sich steigern – das bedeutet, wir vergleichen:\n\n' +
          '1. Grundform (Positiv):\n' +
          '   Wir beschreiben, wie etwas ist: „groß"\n\n' +
          '2. Komparativ (Vergleichsform):\n' +
          '   Wir vergleichen zwei Dinge: „größer"\n' +
          '   Bildung: Grundform + -er (oft mit Umlaut)\n\n' +
          '3. Superlativ (Höchstform):\n' +
          '   Eine Sache übertrifft alle anderen: „am größten"\n' +
          '   Bildung: am + Grundform + -sten / -esten\n\n' +
          'Unregelmäßige Formen (auswendig lernen!):\n' +
          '   gut   → besser   → am besten\n' +
          '   viel  → mehr     → am meisten\n' +
          '   gern  → lieber   → am liebsten',
        beispiel:
          'groß   → größer   → am größten\n' +
          'schnell→ schneller → am schnellsten\n' +
          'alt    → älter    → am ältesten\n' +
          'schön  → schöner  → am schönsten\n' +
          'gut    → besser   → am besten   (unregelmäßig!)',
        merkhilfe:
          'Komparativ  = Grundform + \"-er\"  (+ manchmal Umlaut)\n' +
          'Superlativ  = \"am\" + Grundform + \"-sten\"\n' +
          'Bei a, o, u wird oft ein Umlaut gebildet: alt → älter, groß → größer',
      },

      fragen: [
        {
          typ:       'steigerung_ordnen',
          frage:     'Bringe die Steigerungsformen in die richtige Reihenfolge (Grundform → Komparativ → Superlativ):',
          woerter:   ['am größten', 'groß', 'größer'],
          richtig:   ['groß', 'größer', 'am größten'],
          erklaerung: 'groß (Grundform) → größer (Komparativ) → am größten (Superlativ). Mit Umlaut a → ä!',
        },
        {
          typ:       'steigerung_ordnen',
          frage:     'Bringe die Steigerungsformen in die richtige Reihenfolge:',
          woerter:   ['am schnellsten', 'schneller', 'schnell'],
          richtig:   ['schnell', 'schneller', 'am schnellsten'],
          erklaerung: 'schnell → schneller → am schnellsten. Regelmäßige Steigerung, kein Umlaut nötig.',
        },
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Komparativ:',
          wort:      'schön',
          form:      'komparativ',
          richtig:   'schöner',
          erklaerung: '"schön" + -er = "schöner". Beispiel: „Heute ist es schön, morgen wird es noch schöner."',
        },
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Komparativ:',
          wort:      'alt',
          form:      'komparativ',
          richtig:   'älter',
          erklaerung: '"alt" → "älter" – mit Umlaut (a → ä). Beispiel: „Mein Bruder ist älter als ich."',
        },
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Superlativ:',
          wort:      'klein',
          form:      'superlativ',
          richtig:   'am kleinsten',
          erklaerung: '"klein" → "am kleinsten". Beispiel: „Das ist das kleinste Tier im Zoo."',
        },
        {
          typ:       'multiple_choice',
          frage:     'Wie lautet der Komparativ von „gut"?',
          optionen:  ['guter', 'am besten', 'besser', 'mehr gut'],
          richtig:   2,
          erklaerung: '"gut" ist unregelmäßig: gut → besser → am besten. Diese Form muss man auswendig lernen!',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Der Superlativ von „groß" lautet „am größten".',
          richtig:   true,
          erklaerung: 'Richtig! groß → größer → am größten. Der Superlativ beginnt mit „am" und endet auf „-sten".',
        },
      ],
    },

  ], // end kategorien
};


// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KLASSE1;
}
