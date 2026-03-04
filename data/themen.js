// ============================================================
//  data/themen.js – Fragen + Theorie für den Themen-Quiz-Modus
//  Deutsch Trainer | Alle Klassen
// ============================================================

const THEMEN = {

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WORTARTEN                                               ║
  // ╚══════════════════════════════════════════════════════════╝

  nomen: {
    theorie: {
      titel: "Nomen (Namenwörter)",
      erklaerung: "Nomen sind Wörter für Menschen, Tiere, Pflanzen, Dinge und Gefühle. Sie werden im Deutschen immer großgeschrieben. Vor jedes Nomen kann man einen Artikel setzen: der, die oder das. Auch abstrakte Begriffe wie „Liebe“ oder „Freiheit“ sind Nomen.",
      beispiel: "Der <span class=\"highlight\">Hund</span> spielt im <span class=\"highlight\">Garten</span>.",
      merkhilfe: "💡 Kannst du „der“, „die“ oder „das“ davor setzen? Dann ist es ein Nomen!",
      wie_erkennen: "Nomen werden immer großgeschrieben. Teste mit einem Artikel: „Ich sehe den/die/das ___.“ Funktioniert es? Dann ist es ein Nomen.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist ein Nomen (Namenwort)?",
        "optionen": [
          "rennen",
          "schön",
          "Schule",
          "laufen"
        ],
        "richtig": 2,
        "erklaerung": "„Schule\" ist ein Nomen – man schreibt es groß und kann „die\" davor setzen.",
        "thema": [
          "nomen",
          "wortarten-mix"
        ]
      },
      {
        "typ": "mehrfachauswahl",
        "frage": "Welche Wörter sind Nomen? (Mehrere Antworten möglich)",
        "optionen": [
          "Hund",
          "schön",
          "Tisch",
          "rennen"
        ],
        "richtig": [
          0,
          2
        ],
        "erklaerung": "„Hund\" und „Tisch\" sind Nomen – beide werden großgeschrieben.",
        "thema": [
          "nomen",
          "wortarten-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Wort „Blume\" ist ein Adjektiv.",
        "richtig": false,
        "erklaerung": "„Blume\" ist ein Nomen – man kann „die\" davor setzen: „die Blume\".",
        "thema": [
          "nomen",
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Woran erkennt man ein Nomen im Deutschen?",
        "optionen": [
          "Es beschreibt eine Tätigkeit",
          "Man kann der/die/das davor setzen",
          "Es wird immer kleingeschrieben",
          "Es steht immer am Satzende"
        ],
        "richtig": 1,
        "erklaerung": "Nomen erkennt man daran, dass man einen Artikel (der/die/das) davor setzen kann. Sie werden großgeschrieben.",
        "thema": [
          "nomen"
        ]
      },
      {
        "typ": "mehrfachauswahl",
        "frage": "Welche Wörter sind Nomen?",
        "optionen": [
          "Freiheit",
          "tanzen",
          "Garten",
          "leise"
        ],
        "richtig": [
          0,
          2
        ],
        "erklaerung": "„Freiheit\" und „Garten\" sind Nomen. Auch abstrakte Begriffe wie „Freiheit\" sind Nomen!",
        "thema": [
          "nomen"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Nomen werden im Deutschen immer großgeschrieben.",
        "richtig": true,
        "erklaerung": "Richtig! Alle Nomen werden im Deutschen großgeschrieben: der Hund, die Schule, das Buch.",
        "thema": [
          "nomen"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist ein abstraktes Nomen?",
        "optionen": [
          "Tisch",
          "Freude",
          "laufen",
          "blau"
        ],
        "richtig": 1,
        "erklaerung": "„Freude\" ist ein abstraktes Nomen – man kann es nicht anfassen, aber „die\" davor setzen.",
        "thema": [
          "nomen"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Setze das passende Nomen ein:",
        "satz": "Der ___ bellt laut im Garten.",
        "optionen": [
          "bellen",
          "Hund",
          "laut",
          "schnell"
        ],
        "richtig": "Hund",
        "erklaerung": "„Hund\" ist das Nomen, das als Subjekt in den Satz passt.",
        "thema": [
          "nomen"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist KEIN Nomen?",
        "optionen": [
          "Lehrer",
          "Musik",
          "spielen",
          "Fenster"
        ],
        "richtig": 2,
        "erklaerung": "„spielen\" ist ein Verb (Tätigkeitswort), kein Nomen.",
        "thema": [
          "nomen",
          "wortarten-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„Liebe\" ist kein Nomen, weil man es nicht sehen kann.",
        "richtig": false,
        "erklaerung": "Falsch! „Liebe\" ist ein abstraktes Nomen. Auch unsichtbare Dinge können Nomen sein: die Liebe, die Angst, das Glück.",
        "thema": [
          "nomen"
        ]
      },
    ],
  },

  verben: {
    theorie: {
      titel: "Verben (Tätigkeitswörter)",
      erklaerung: "Verben drücken aus, was jemand tut oder was geschieht. In der Grundform enden sie meist auf „-en“ (laufen, spielen, lernen). Im Satz werden Verben konjugiert – sie passen sich dem Subjekt an. Verben sind das Herzstück jedes Satzes.",
      beispiel: "Die Kinder <span class=\"highlight\">spielen</span> im Park und <span class=\"highlight\">lachen</span> laut.",
      merkhilfe: "💡 Frage: „Was tut jemand?“ – Die Antwort ist ein Verb!",
      wie_erkennen: "Verben kann man konjugieren: ich laufe, du läufst, er läuft. In der Grundform enden sie auf „-en“ oder „-n“.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist ein Verb (Tätigkeitswort)?",
        "optionen": [
          "Hund",
          "blau",
          "Baum",
          "schlafen"
        ],
        "richtig": 3,
        "erklaerung": "„schlafen\" ist ein Verb – es beschreibt eine Tätigkeit.",
        "thema": [
          "verben",
          "wortarten-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Wort „spielen\" ist ein Verb.",
        "richtig": true,
        "erklaerung": "Richtig! „spielen\" beschreibt eine Tätigkeit – das ist ein Verb.",
        "thema": [
          "verben",
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wie erkennt man ein Verb?",
        "optionen": [
          "Es wird großgeschrieben",
          "Man kann es konjugieren (ich spiele, du spielst)",
          "Es hat einen Artikel",
          "Es beschreibt eine Eigenschaft"
        ],
        "richtig": 1,
        "erklaerung": "Verben kann man konjugieren: ich spiele, du spielst, er spielt. Das ist das wichtigste Erkennungsmerkmal.",
        "thema": [
          "verben"
        ]
      },
      {
        "typ": "mehrfachauswahl",
        "frage": "Welche Wörter sind Verben?",
        "optionen": [
          "lesen",
          "Schule",
          "kochen",
          "schnell"
        ],
        "richtig": [
          0,
          2
        ],
        "erklaerung": "„lesen\" und „kochen\" sind Verben – sie beschreiben Tätigkeiten.",
        "thema": [
          "verben",
          "wortarten-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Welches Verb passt in den Satz?",
        "satz": "Die Kinder ___ im Garten Fußball.",
        "optionen": [
          "spielen",
          "Spiel",
          "spielerisch",
          "Spieler"
        ],
        "richtig": "spielen",
        "erklaerung": "„spielen\" ist das Verb – es beschreibt, was die Kinder tun.",
        "thema": [
          "verben"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was ist die Grundform (Infinitiv) von „er schwimmt\"?",
        "optionen": [
          "schwimmen",
          "geschwommen",
          "schwamm",
          "schwimmend"
        ],
        "richtig": 0,
        "erklaerung": "Die Grundform (Infinitiv) von „er schwimmt\" ist „schwimmen\" – sie endet auf „-en\".",
        "thema": [
          "verben"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Verben stehen in deutschen Aussagesätzen immer an zweiter Stelle.",
        "richtig": true,
        "erklaerung": "Richtig! Im deutschen Aussagesatz steht das konjugierte Verb an zweiter Position (V2-Stellung).",
        "thema": [
          "verben"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist KEIN Verb?",
        "optionen": [
          "laufen",
          "schreiben",
          "Tanz",
          "singen"
        ],
        "richtig": 2,
        "erklaerung": "„Tanz\" ist ein Nomen (der Tanz). Das Verb dazu wäre „tanzen\".",
        "thema": [
          "verben",
          "wortarten-mix"
        ]
      },
      {
        "typ": "reihenfolge",
        "frage": "Bringe die Wörter in die richtige Reihenfolge:",
        "woerter": [
          "läuft",
          "Hund",
          "Der",
          "schnell"
        ],
        "richtig": [
          "Der",
          "Hund",
          "läuft",
          "schnell"
        ],
        "erklaerung": "„Der Hund läuft schnell.\" – Das Verb „läuft\" steht an zweiter Stelle.",
        "thema": [
          "verben",
          "wortarten-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Welches Verb passt?",
        "satz": "Mama ___ jeden Abend eine Geschichte vor.",
        "optionen": [
          "liest",
          "Buch",
          "leise",
          "Lesen"
        ],
        "richtig": "liest",
        "erklaerung": "„liest … vor\" (vorlesen) ist das Verb im Satz.",
        "thema": [
          "verben"
        ]
      },
    ],
  },

  adjektive: {
    theorie: {
      titel: "Adjektive (Wiewörter)",
      erklaerung: "Adjektive beschreiben, wie etwas ist: groß, klein, schön, schnell. Sie stehen oft vor einem Nomen oder nach „sein“. Man kann sie steigern: schnell – schneller – am schnellsten. Adjektive werden im Deutschen kleingeschrieben.",
      beispiel: "Das <span class=\"highlight\">kleine</span> Mädchen trägt einen <span class=\"highlight\">roten</span> Hut.",
      merkhilfe: "💡 Frage: „Wie ist es?“ – Die Antwort ist ein Adjektiv!",
      wie_erkennen: "Adjektive kann man steigern (schön – schöner – am schönsten) und sie passen zwischen Artikel und Nomen: „der ___ Baum“.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist ein Adjektiv (Eigenschaftswort)?",
        "optionen": [
          "Katze",
          "schnell",
          "essen",
          "Tisch"
        ],
        "richtig": 1,
        "erklaerung": "„schnell\" ist ein Adjektiv – es beschreibt eine Eigenschaft.",
        "thema": [
          "adjektive",
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Mit welcher Frage findet man Adjektive?",
        "optionen": [
          "Wer oder was?",
          "Was tut er?",
          "Wie ist es?",
          "Wann passiert es?"
        ],
        "richtig": 2,
        "erklaerung": "Adjektive antworten auf die Frage „Wie ist es?\" – z. B. groß, klein, schön.",
        "thema": [
          "adjektive"
        ]
      },
      {
        "typ": "mehrfachauswahl",
        "frage": "Welche Wörter sind Adjektive?",
        "optionen": [
          "mutig",
          "Haus",
          "bunt",
          "laufen"
        ],
        "richtig": [
          0,
          2
        ],
        "erklaerung": "„mutig\" und „bunt\" sind Adjektive – sie beschreiben Eigenschaften.",
        "thema": [
          "adjektive",
          "wortarten-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Adjektive werden im Deutschen normalerweise kleingeschrieben.",
        "richtig": true,
        "erklaerung": "Richtig! Adjektive werden kleingeschrieben, außer am Satzanfang.",
        "thema": [
          "adjektive"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Welches Adjektiv passt in den Satz?",
        "satz": "Der ___ Turm ist das Wahrzeichen der Stadt.",
        "optionen": [
          "hohe",
          "Turm",
          "stehen",
          "Stadt"
        ],
        "richtig": "hohe",
        "erklaerung": "„hohe\" ist das Adjektiv, das den Turm beschreibt.",
        "thema": [
          "adjektive"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was ist das Gegenteil (Antonym) von „warm\"?",
        "optionen": [
          "heiß",
          "kalt",
          "nass",
          "trocken"
        ],
        "richtig": 1,
        "erklaerung": "„kalt\" ist das Gegenteil von „warm\" – beide sind Adjektive.",
        "thema": [
          "adjektive"
        ]
      },
      {
        "typ": "mehrfachauswahl",
        "frage": "Welche Wörter sind KEINE Adjektive?",
        "optionen": [
          "lustig",
          "Freund",
          "gehen",
          "traurig"
        ],
        "richtig": [
          1,
          2
        ],
        "erklaerung": "„Freund\" ist ein Nomen, „gehen\" ist ein Verb. „lustig\" und „traurig\" sind Adjektive.",
        "thema": [
          "adjektive",
          "wortarten-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„hungrig\" ist ein Adjektiv.",
        "richtig": true,
        "erklaerung": "Richtig! „hungrig\" beschreibt einen Zustand/eine Eigenschaft → Adjektiv.",
        "thema": [
          "adjektive"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Adjektiv beschreibt eine Farbe?",
        "optionen": [
          "schnell",
          "grün",
          "Wiese",
          "laufen"
        ],
        "richtig": 1,
        "erklaerung": "„grün\" ist ein Farbadjektiv.",
        "thema": [
          "adjektive"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Welches Adjektiv passt am besten?",
        "satz": "Die Suppe ist noch zu ___.",
        "optionen": [
          "heiß",
          "Teller",
          "essen",
          "Küche"
        ],
        "richtig": "heiß",
        "erklaerung": "„heiß\" ist das Adjektiv, das die Temperatur der Suppe beschreibt.",
        "thema": [
          "adjektive"
        ]
      },
    ],
  },

  pronomen: {
    theorie: {
      titel: "Pronomen (Fürwörter)",
      erklaerung: "Pronomen ersetzen Nomen, damit man sie nicht wiederholen muss. Es gibt verschiedene Arten: Personalpronomen (ich, du, er), Possessivpronomen (mein, dein, sein) und Demonstrativpronomen (dieser, jener). Sie helfen, Texte flüssiger zu machen.",
      beispiel: "<span class=\"highlight\">Er</span> gibt <span class=\"highlight\">ihr</span> das Buch, weil <span class=\"highlight\">sie</span> es lesen möchte.",
      merkhilfe: "💡 Pronomen stehen FÜR ein Nomen – deshalb heißen sie auch „Fürwörter“.",
      wie_erkennen: "Pronomen stehen an der Stelle eines Nomens. Du kannst sie durch das Nomen ersetzen: „Er spielt“ → „Tom spielt“.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist ein Pronomen (Fürwort)?",
        "optionen": [
          "Hund",
          "er",
          "laufen",
          "schön"
        ],
        "richtig": 1,
        "erklaerung": "„er\" ist ein Personalpronomen – es ersetzt ein Nomen.",
        "thema": [
          "pronomen",
          "wortarten-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Wort „wir\" ist ein Pronomen.",
        "richtig": true,
        "erklaerung": "„wir\" ist ein Personalpronomen – es steht für eine Gruppe von Personen.",
        "thema": [
          "pronomen",
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist ein Possessivpronomen (besitzanzeigendes Fürwort)?",
        "optionen": [
          "ich",
          "mein",
          "aber",
          "auf"
        ],
        "richtig": 1,
        "erklaerung": "„mein\" zeigt Besitz an (mein Buch) – es ist ein Possessivpronomen.",
        "thema": [
          "pronomen"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Welches Pronomen passt in den Satz?",
        "satz": "Maria ist krank. ___ bleibt heute zu Hause.",
        "optionen": [
          "Er",
          "Sie",
          "Es",
          "Wir"
        ],
        "richtig": "Sie",
        "erklaerung": "„Sie\" ersetzt „Maria\" – Personalpronomen 3. Person Singular feminin.",
        "thema": [
          "pronomen"
        ]
      },
      {
        "typ": "mehrfachauswahl",
        "frage": "Welche Wörter sind Personalpronomen?",
        "optionen": [
          "du",
          "Tisch",
          "sie",
          "schnell"
        ],
        "richtig": [
          0,
          2
        ],
        "erklaerung": "„du\" und „sie\" sind Personalpronomen. „Tisch\" ist ein Nomen, „schnell\" ein Adjektiv.",
        "thema": [
          "pronomen",
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Pronomen ersetzt „die Kinder\" im Satz?",
        "optionen": [
          "er",
          "sie (Plural)",
          "es",
          "wir"
        ],
        "richtig": 1,
        "erklaerung": "„die Kinder\" ist Plural → „sie\" (Mehrzahl). „Die Kinder spielen. Sie spielen gern.\"",
        "thema": [
          "pronomen"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„euer\" ist ein Possessivpronomen.",
        "richtig": true,
        "erklaerung": "Richtig! „euer\" zeigt Besitz an (euer Haus) – 2. Person Plural.",
        "thema": [
          "pronomen"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Welches Possessivpronomen passt?",
        "satz": "Tom sucht ___ Schlüssel.",
        "optionen": [
          "seinen",
          "ihren",
          "meinen",
          "unseren"
        ],
        "richtig": "seinen",
        "erklaerung": "Tom ist männlich, 3. Person → „seinen Schlüssel\".",
        "thema": [
          "pronomen"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist KEIN Pronomen?",
        "optionen": [
          "ich",
          "du",
          "Hund",
          "wir"
        ],
        "richtig": 2,
        "erklaerung": "„Hund\" ist ein Nomen, kein Pronomen.",
        "thema": [
          "pronomen",
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wofür steht ein Pronomen?",
        "optionen": [
          "Es beschreibt eine Eigenschaft",
          "Es ersetzt ein Nomen",
          "Es verbindet zwei Sätze",
          "Es zeigt einen Ort an"
        ],
        "richtig": 1,
        "erklaerung": "Pronomen (Fürwörter) ersetzen ein Nomen, damit man es nicht wiederholen muss.",
        "thema": [
          "pronomen"
        ]
      },
    ],
  },

  'wortarten-mix': {
    theorie: {
      titel: "Wortarten-Mix",
      erklaerung: "Im Deutschen gibt es verschiedene Wortarten: Nomen (Tisch), Verben (laufen), Adjektive (schön), Pronomen (er), Artikel (der) und mehr. Jede Wortart hat eine bestimmte Aufgabe im Satz. Wer die Wortarten kennt, versteht die deutsche Grammatik viel besser.",
      beispiel: "<span class=\"highlight\">Der</span> <span class=\"highlight\">kleine</span> <span class=\"highlight\">Hund</span> <span class=\"highlight\">läuft</span> schnell.",
      merkhilfe: "💡 Artikel + Adjektiv + Nomen + Verb = ein typischer deutscher Satz!",
      wie_erkennen: "Frage dich: Ist es ein Ding (Nomen)? Eine Tätigkeit (Verb)? Eine Eigenschaft (Adjektiv)? Ein Ersatz für ein Nomen (Pronomen)?",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Welche Wortart ist „schnell\"?",
        "optionen": [
          "Nomen",
          "Verb",
          "Adjektiv",
          "Pronomen"
        ],
        "richtig": 2,
        "erklaerung": "„schnell\" beschreibt eine Eigenschaft → Adjektiv.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Wortart ist „weil\"?",
        "optionen": [
          "Präposition",
          "Pronomen",
          "Konjunktion",
          "Adjektiv"
        ],
        "richtig": 2,
        "erklaerung": "„weil\" verbindet zwei Sätze → Konjunktion (Bindewort).",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Wortart ist „auf\"?",
        "optionen": [
          "Konjunktion",
          "Pronomen",
          "Präposition",
          "Verb"
        ],
        "richtig": 2,
        "erklaerung": "„auf\" zeigt eine Beziehung (Ort) → Präposition.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Welche Wortart ist das unterstrichene Wort? „Die Katze schläft.\"",
        "satz": "„schläft\" ist ein ___.",
        "optionen": [
          "Nomen",
          "Verb",
          "Adjektiv",
          "Pronomen"
        ],
        "richtig": "Verb",
        "erklaerung": "„schläft\" beschreibt eine Tätigkeit → Verb.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "mehrfachauswahl",
        "frage": "Welche Wörter sind Konjunktionen?",
        "optionen": [
          "und",
          "auf",
          "weil",
          "oder"
        ],
        "richtig": [
          0,
          2,
          3
        ],
        "erklaerung": "„und\", „weil\", „oder\" verbinden Sätze → Konjunktionen. „auf\" ist eine Präposition.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„aber\" ist eine Präposition.",
        "richtig": false,
        "erklaerung": "„aber\" ist eine Konjunktion – es verbindet gegensätzliche Satzteile.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Wortart ist „unter\"?",
        "optionen": [
          "Adjektiv",
          "Verb",
          "Präposition",
          "Nomen"
        ],
        "richtig": 2,
        "erklaerung": "„unter\" zeigt eine örtliche Beziehung → Präposition.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "reihenfolge",
        "frage": "Ordne: Nomen – Verb – Adjektiv – Pronomen",
        "woerter": [
          "sie",
          "Haus",
          "groß",
          "laufen"
        ],
        "richtig": [
          "Haus",
          "laufen",
          "groß",
          "sie"
        ],
        "erklaerung": "Haus = Nomen | laufen = Verb | groß = Adjektiv | sie = Pronomen.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Wortart hat KEINEN Artikel?",
        "optionen": [
          "Nomen",
          "Verb",
          "Adjektiv mit Nomen",
          "Pronomen"
        ],
        "richtig": 1,
        "erklaerung": "Verben haben keinen Artikel. Nomen haben Artikel (der/die/das).",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Präpositionen zeigen Beziehungen zwischen Wörtern (Ort, Zeit, Richtung).",
        "richtig": true,
        "erklaerung": "Richtig! Präpositionen wie in, auf, unter, vor, nach zeigen Ort, Zeit oder Richtung.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Welches Wort ist eine Konjunktion?",
        "satz": "Ich lerne, ___ morgen eine Prüfung ist.",
        "optionen": [
          "auf",
          "weil",
          "er",
          "groß"
        ],
        "richtig": "weil",
        "erklaerung": "„weil\" leitet einen Nebensatz ein → Konjunktion.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Im Satz „Er gibt dem Freund das Buch\" – was ist „Er\"?",
        "optionen": [
          "Nomen",
          "Verb",
          "Adjektiv",
          "Pronomen"
        ],
        "richtig": 3,
        "erklaerung": "„Er\" ersetzt ein Nomen (z. B. „Tom\") → Personalpronomen.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "mehrfachauswahl",
        "frage": "Welche Wörter sind Präpositionen?",
        "optionen": [
          "in",
          "und",
          "neben",
          "sie"
        ],
        "richtig": [
          0,
          2
        ],
        "erklaerung": "„in\" und „neben\" zeigen örtliche Beziehungen → Präpositionen.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Wortart ist „obwohl\"?",
        "optionen": [
          "Präposition",
          "Konjunktion",
          "Adverb",
          "Pronomen"
        ],
        "richtig": 1,
        "erklaerung": "„obwohl\" verbindet einen Haupt- und Nebensatz → unterordnende Konjunktion.",
        "thema": [
          "wortarten-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "In dem Satz „Mein Hund schläft.\" ist „Mein\" ein Possessivpronomen.",
        "richtig": true,
        "erklaerung": "Richtig! „Mein\" zeigt Besitz an → Possessivpronomen.",
        "thema": [
          "wortarten-mix"
        ]
      },
    ],
  },


  // ╔══════════════════════════════════════════════════════════╗
  // ║  ZEITFORMEN                                              ║
  // ╚══════════════════════════════════════════════════════════╝

  praesens: {
    theorie: {
      titel: "Präsens (Gegenwart)",
      erklaerung: "Das Präsens beschreibt, was gerade passiert oder was regelmäßig geschieht. Es ist die häufigste Zeitform im Deutschen. Das Verb wird dabei konjugiert: ich gehe, du gehst, er geht. Auch für die nahe Zukunft wird oft Präsens verwendet.",
      beispiel: "Anna <span class=\"highlight\">liest</span> ein Buch und <span class=\"highlight\">trinkt</span> Tee.",
      merkhilfe: "💡 Präsens = was JETZT passiert. Frage: „Was passiert gerade?“",
      wie_erkennen: "Das Verb steht in der Grundform (konjugiert): ich spiele, du spielst, er spielt. Keine Hilfsverben wie „haben“ oder „werden“ nötig.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "In welcher Zeitform steht „Ich esse gerade eine Pizza\"?",
        "optionen": [
          "Präteritum",
          "Präsens",
          "Perfekt",
          "Futur"
        ],
        "richtig": 1,
        "erklaerung": "„Ich esse\" beschreibt etwas, das jetzt passiert → Präsens.",
        "thema": [
          "praesens",
          "zeitformen-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Setze das Verb im Präsens ein:",
        "satz": "Er ___ jeden Tag zur Schule.",
        "optionen": [
          "ging",
          "geht",
          "gegangen",
          "gehen"
        ],
        "richtig": "geht",
        "erklaerung": "„geht\" ist die Präsens-Form von „gehen\" für die 3. Person Singular.",
        "thema": [
          "praesens",
          "zeitformen-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Präsens beschreibt Dinge, die gerade passieren oder immer wahr sind.",
        "richtig": true,
        "erklaerung": "Richtig! Präsens = Gegenwart. „Die Sonne geht im Osten auf\" ist auch Präsens.",
        "thema": [
          "praesens"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz steht im Präsens?",
        "optionen": [
          "Er las ein Buch.",
          "Sie hat gespielt.",
          "Wir lernen Deutsch.",
          "Ich werde kommen."
        ],
        "richtig": 2,
        "erklaerung": "„Wir lernen\" – das Verb ist in der Gegenwartsform → Präsens.",
        "thema": [
          "praesens",
          "zeitformen-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Konjugiere im Präsens:",
        "satz": "Du ___ sehr gut Klavier.",
        "optionen": [
          "spielst",
          "spielte",
          "gespielt",
          "spielen"
        ],
        "richtig": "spielst",
        "erklaerung": "„du spielst\" – Präsens, 2. Person Singular.",
        "thema": [
          "praesens"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wie lautet die Präsens-Form von „lesen\" für „er\"?",
        "optionen": [
          "er lest",
          "er liest",
          "er las",
          "er gelesen"
        ],
        "richtig": 1,
        "erklaerung": "„er liest\" – bei starken Verben ändert sich der Vokal (e → ie).",
        "thema": [
          "praesens"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„Morgen fahre ich nach Wien.\" steht im Futur.",
        "richtig": false,
        "erklaerung": "Falsch! Das Verb „fahre\" steht im Präsens. Im Deutschen kann man das Präsens auch für die Zukunft verwenden.",
        "thema": [
          "praesens",
          "zeitformen-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Konjugiere im Präsens:",
        "satz": "Ihr ___ heute einen Ausflug.",
        "optionen": [
          "machtet",
          "macht",
          "gemacht",
          "machen"
        ],
        "richtig": "macht",
        "erklaerung": "„ihr macht\" – Präsens, 2. Person Plural.",
        "thema": [
          "praesens"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Endung hat das Verb im Präsens bei „wir\"?",
        "optionen": [
          "-st",
          "-t",
          "-en",
          "-e"
        ],
        "richtig": 2,
        "erklaerung": "„wir\" hat die Endung „-en\": wir spielen, wir laufen, wir lernen.",
        "thema": [
          "praesens"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„er schläft\" ist eine Präsens-Form.",
        "richtig": true,
        "erklaerung": "Richtig! „schläft\" ist die 3. Person Singular Präsens von „schlafen\".",
        "thema": [
          "praesens"
        ]
      },
    ],
  },

  praeteritum: {
    theorie: {
      titel: "Präteritum (Vergangenheit)",
      erklaerung: "Das Präteritum beschreibt, was früher geschah. Es wird oft in Erzählungen und Märchen verwendet. Regelmäßige Verben bekommen die Endung „-te“ (spielte), unregelmäßige Verben ändern ihren Stammvokal (lief, ging, sang).",
      beispiel: "Die Prinzessin <span class=\"highlight\">schlief</span> hundert Jahre und <span class=\"highlight\">erwachte</span> durch einen Kuss.",
      merkhilfe: "💡 Präteritum = Erzählvergangenheit. „Es war einmal...“ – das ist Präteritum!",
      wie_erkennen: "Regelmäßig: Stamm + „-te“ (spielte, lernte). Unregelmäßig: veränderter Vokal (ging, sang, lief). Kein Hilfsverb!",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Wie lautet das Präteritum von „gehen\"?",
        "optionen": [
          "gegehte",
          "gehte",
          "ging",
          "gegangen"
        ],
        "richtig": 2,
        "erklaerung": "„gehen\" ist unregelmäßig: gehe → ging → gegangen.",
        "thema": [
          "praeteritum",
          "zeitformen-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Setze das Präteritum ein:",
        "satz": "Gestern ___ ich ins Kino.",
        "optionen": [
          "gehe",
          "ging",
          "gegangen",
          "gehen"
        ],
        "richtig": "ging",
        "erklaerung": "„ging\" ist das Präteritum von „gehen\".",
        "thema": [
          "praeteritum",
          "zeitformen-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Präteritum wird vor allem beim Schreiben von Erzählungen verwendet.",
        "richtig": true,
        "erklaerung": "Richtig! Das Präteritum ist die typische Erzähl-Zeitform.",
        "thema": [
          "praeteritum"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz steht im Präteritum?",
        "optionen": [
          "Er spielt Fußball.",
          "Er spielte Fußball.",
          "Er hat Fußball gespielt.",
          "Er wird Fußball spielen."
        ],
        "richtig": 1,
        "erklaerung": "„spielte\" ist die Präteritum-Form von „spielen\" (regelmäßig: Stamm + -te).",
        "thema": [
          "praeteritum",
          "zeitformen-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Setze das Präteritum ein:",
        "satz": "Die Kinder ___ den ganzen Tag im Garten.",
        "optionen": [
          "spielen",
          "spielten",
          "gespielt",
          "spielend"
        ],
        "richtig": "spielten",
        "erklaerung": "„spielten\" – regelmäßiges Präteritum: spiel + ten (3. Person Plural).",
        "thema": [
          "praeteritum"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wie lautet das Präteritum von „sein\" (ich)?",
        "optionen": [
          "ich seid",
          "ich war",
          "ich bin gewesen",
          "ich wäre"
        ],
        "richtig": 1,
        "erklaerung": "„ich war\" – „sein\" ist unregelmäßig. Nicht verwechseln mit dem Konjunktiv „wäre\"!",
        "thema": [
          "praeteritum"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Regelmäßige Verben bilden das Präteritum mit der Endung -te.",
        "richtig": true,
        "erklaerung": "Richtig! Regelmäßig: spielen → spielte, lernen → lernte, kochen → kochte.",
        "thema": [
          "praeteritum"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Setze das Präteritum ein:",
        "satz": "Er ___ das ganze Buch an einem Tag.",
        "optionen": [
          "liest",
          "las",
          "gelesen",
          "lesen"
        ],
        "richtig": "las",
        "erklaerung": "„las\" ist das Präteritum von „lesen\" (unregelmäßig).",
        "thema": [
          "praeteritum"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wie lautet das Präteritum von „haben\" (er)?",
        "optionen": [
          "er habte",
          "er hat",
          "er hatte",
          "er gehabt"
        ],
        "richtig": 2,
        "erklaerung": "„er hatte\" – „haben\" ist unregelmäßig im Präteritum.",
        "thema": [
          "praeteritum"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Verb ist NICHT im Präteritum?",
        "optionen": [
          "schrieb",
          "lachte",
          "hat gelesen",
          "sang"
        ],
        "richtig": 2,
        "erklaerung": "„hat gelesen\" ist Perfekt (haben + Partizip II). Die anderen sind Präteritum.",
        "thema": [
          "praeteritum",
          "zeitformen-mix"
        ]
      },
    ],
  },

  futur: {
    theorie: {
      titel: "Futur (Zukunft)",
      erklaerung: "Das Futur I drückt aus, was in der Zukunft geschehen wird. Es wird mit „werden“ + Infinitiv gebildet: Ich werde lernen. Oft nutzt man im Deutschen auch das Präsens mit einer Zeitangabe für die Zukunft: „Morgen gehe ich ins Kino.“",
      beispiel: "Wir <span class=\"highlight\">werden</span> morgen ins Museum <span class=\"highlight\">gehen</span>.",
      merkhilfe: "💡 Futur = „werden“ + Infinitiv. Beispiel: Ich WERDE lernen.",
      wie_erkennen: "Achte auf „werden“ als Hilfsverb + Infinitiv am Satzende: „Er wird kommen.“, „Sie werden spielen.“",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Wie wird das Futur I im Deutschen gebildet?",
        "optionen": [
          "haben + Partizip II",
          "sein + Partizip II",
          "werden + Infinitiv",
          "würde + Partizip II"
        ],
        "richtig": 2,
        "erklaerung": "Futur I = „werden\" (konjugiert) + Infinitiv: „Ich werde lernen.\"",
        "thema": [
          "futur",
          "zeitformen-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Bilde das Futur I:",
        "satz": "Morgen ___ ich eine Prüfung schreiben.",
        "optionen": [
          "bin",
          "habe",
          "werde",
          "soll"
        ],
        "richtig": "werde",
        "erklaerung": "Futur I: „ich werde … schreiben\" (werden + Infinitiv).",
        "thema": [
          "futur",
          "zeitformen-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Futur I drückt etwas aus, das in der Zukunft passieren wird.",
        "richtig": true,
        "erklaerung": "Richtig! Futur I = Zukunft. „Ich werde morgen kommen.\"",
        "thema": [
          "futur"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz steht im Futur I?",
        "optionen": [
          "Er geht nach Hause.",
          "Er ging nach Hause.",
          "Er ist nach Hause gegangen.",
          "Er wird nach Hause gehen."
        ],
        "richtig": 3,
        "erklaerung": "„wird … gehen\" = werden + Infinitiv → Futur I.",
        "thema": [
          "futur",
          "zeitformen-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Bilde das Futur I:",
        "satz": "Die Schüler ___ nächste Woche einen Ausflug machen.",
        "optionen": [
          "haben",
          "sind",
          "werden",
          "waren"
        ],
        "richtig": "werden",
        "erklaerung": "„werden … machen\" → Futur I, 3. Person Plural.",
        "thema": [
          "futur"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Futur I kann auch eine Vermutung ausdrücken.",
        "richtig": true,
        "erklaerung": "Richtig! „Er wird wohl krank sein.\" – Futur I als Vermutung.",
        "thema": [
          "futur"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wie lautet „du lernst\" im Futur I?",
        "optionen": [
          "du wirst lernen",
          "du hast gelernt",
          "du wurdest lernen",
          "du bist gelernt"
        ],
        "richtig": 0,
        "erklaerung": "„du wirst lernen\" – werden (wirst) + Infinitiv (lernen) = Futur I.",
        "thema": [
          "futur"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Bilde das Futur I:",
        "satz": "Es ___ morgen regnen.",
        "optionen": [
          "hat",
          "ist",
          "wird",
          "war"
        ],
        "richtig": "wird",
        "erklaerung": "„Es wird regnen\" – Futur I für eine Vorhersage.",
        "thema": [
          "futur"
        ]
      },
      {
        "typ": "reihenfolge",
        "frage": "Bringe den Futur-I-Satz in die richtige Reihenfolge:",
        "woerter": [
          "lernen",
          "wir",
          "werden",
          "Deutsch"
        ],
        "richtig": [
          "wir",
          "werden",
          "Deutsch",
          "lernen"
        ],
        "erklaerung": "„Wir werden Deutsch lernen.\" – Hilfsverb an 2. Stelle, Infinitiv am Ende.",
        "thema": [
          "futur"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Hilfsverb braucht man für das Futur I?",
        "optionen": [
          "haben",
          "sein",
          "werden",
          "können"
        ],
        "richtig": 2,
        "erklaerung": "Futur I wird immer mit „werden\" gebildet: werden + Infinitiv.",
        "thema": [
          "futur"
        ]
      },
    ],
  },

  'zeitformen-mix': {
    theorie: {
      titel: "Zeitformen-Mix",
      erklaerung: "Im Deutschen gibt es verschiedene Zeitformen: Präsens (jetzt), Präteritum (früher), Perfekt (abgeschlossen), und Futur (Zukunft). Jede Zeitform wird anders gebildet. Die richtige Zeitform macht Texte klar und verständlich.",
      beispiel: "Gestern <span class=\"highlight\">spielte</span> ich Fußball, heute <span class=\"highlight\">lerne</span> ich und morgen <span class=\"highlight\">werde</span> ich schwimmen.",
      merkhilfe: "💡 Wann passiert es? Jetzt = Präsens, früher = Präteritum/Perfekt, später = Futur.",
      wie_erkennen: "Schau auf das Verb: Grundform = Präsens, „-te“/Vokalwechsel = Präteritum, „haben/sein“ + Partizip = Perfekt, „werden“ + Infinitiv = Futur.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "In welcher Zeitform steht „Er hat gespielt\"?",
        "optionen": [
          "Präsens",
          "Präteritum",
          "Perfekt",
          "Futur"
        ],
        "richtig": 2,
        "erklaerung": "„hat gespielt\" = Hilfsverb (hat) + Partizip II (gespielt) → Perfekt.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Perfekt wird immer mit dem Hilfsverb „haben\" gebildet.",
        "richtig": false,
        "erklaerung": "Falsch! Perfekt wird mit „haben\" ODER „sein\" gebildet. Bewegungsverben → sein.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Wähle das richtige Hilfsverb für das Perfekt:",
        "satz": "Ich ___ heute schon zu Mittag gegessen.",
        "optionen": [
          "hatte",
          "habe",
          "war",
          "bin"
        ],
        "richtig": "habe",
        "erklaerung": "„essen\" bildet das Perfekt mit „haben\": ich habe gegessen.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Zeitform passt? „Nächstes Jahr ___ wir nach Italien.\"",
        "optionen": [
          "fuhren",
          "fahren",
          "sind gefahren",
          "werden fahren"
        ],
        "richtig": 3,
        "erklaerung": "„werden fahren\" = Futur I. Nächstes Jahr → Zukunft.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "reihenfolge",
        "frage": "Ordne die Zeitformen chronologisch (Vergangenheit → Zukunft):",
        "woerter": [
          "Futur",
          "Präteritum",
          "Präsens",
          "Perfekt"
        ],
        "richtig": [
          "Präteritum",
          "Perfekt",
          "Präsens",
          "Futur"
        ],
        "erklaerung": "Präteritum/Perfekt = Vergangenheit → Präsens = Gegenwart → Futur = Zukunft.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Zeitform verwendet man beim Erzählen (schriftlich)?",
        "optionen": [
          "Präsens",
          "Präteritum",
          "Perfekt",
          "Futur"
        ],
        "richtig": 1,
        "erklaerung": "Das Präteritum ist die typische Erzähl-Zeitform beim Schreiben.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Welches Hilfsverb passt? (Perfekt)",
        "satz": "Sie ___ gestern nach Wien gefahren.",
        "optionen": [
          "hat",
          "ist",
          "wird",
          "war"
        ],
        "richtig": "ist",
        "erklaerung": "„fahren\" = Bewegungsverb → Perfekt mit „sein\": sie ist gefahren.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„Ich bin gelaufen\" steht im Perfekt.",
        "richtig": true,
        "erklaerung": "Richtig! „bin\" (sein) + „gelaufen\" (Partizip II) = Perfekt. Laufen = Bewegung → sein.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "In welcher Zeitform steht „Die Sonne scheint\"?",
        "optionen": [
          "Perfekt",
          "Präteritum",
          "Futur",
          "Präsens"
        ],
        "richtig": 3,
        "erklaerung": "„scheint\" – das Verb steht in der Gegenwartsform → Präsens.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Zeitform ist „ich werde reisen\"?",
        "optionen": [
          "Präsens",
          "Präteritum",
          "Perfekt",
          "Futur I"
        ],
        "richtig": 3,
        "erklaerung": "„werde reisen\" = werden + Infinitiv → Futur I.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Setze die richtige Zeitform ein (Präteritum):",
        "satz": "Letztes Jahr ___ wir in den Bergen.",
        "optionen": [
          "sind",
          "waren",
          "werden sein",
          "gewesen"
        ],
        "richtig": "waren",
        "erklaerung": "„waren\" = Präteritum von „sein\" (wir). Letztes Jahr → Vergangenheit.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Im gesprochenen Deutsch verwendet man häufiger das Perfekt als das Präteritum.",
        "richtig": true,
        "erklaerung": "Richtig! Im Gespräch sagt man eher „Ich habe gespielt\" (Perfekt) als „Ich spielte\" (Präteritum).",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was ist das Partizip II von „schreiben\"?",
        "optionen": [
          "geschreibt",
          "geschrieben",
          "schrieben",
          "schreibend"
        ],
        "richtig": 1,
        "erklaerung": "„geschrieben\" – unregelmäßiges Partizip II. Für Perfekt: „Ich habe geschrieben.\"",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "reihenfolge",
        "frage": "Bringe in die richtige Reihenfolge (Perfekt-Satz):",
        "woerter": [
          "gegessen",
          "habe",
          "Pizza",
          "ich"
        ],
        "richtig": [
          "ich",
          "habe",
          "Pizza",
          "gegessen"
        ],
        "erklaerung": "„Ich habe Pizza gegessen.\" – Perfekt: Subjekt + haben/sein + … + Partizip II.",
        "thema": [
          "zeitformen-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz steht NICHT in der Vergangenheit?",
        "optionen": [
          "Er spielte Tennis.",
          "Sie hat gelacht.",
          "Wir werden kommen.",
          "Ich war müde."
        ],
        "richtig": 2,
        "erklaerung": "„Wir werden kommen\" = Futur I → Zukunft, nicht Vergangenheit.",
        "thema": [
          "zeitformen-mix"
        ]
      },
    ],
  },


  // ╔══════════════════════════════════════════════════════════╗
  // ║  FÄLLE                                                   ║
  // ╚══════════════════════════════════════════════════════════╝

  nominativ: {
    theorie: {
      titel: "Nominativ (Wer/Was-Fall)",
      erklaerung: "Der Nominativ ist der 1. Fall und die Grundform des Nomens. Das Subjekt eines Satzes steht immer im Nominativ. Man fragt danach mit „Wer?“ oder „Was?“. Die Artikel lauten: der, die, das (bestimmt) und ein, eine, ein (unbestimmt).",
      beispiel: "<span class=\"highlight\">Der Hund</span> spielt im Garten. – Wer spielt? <span class=\"highlight\">Der Hund</span>.",
      merkhilfe: "💡 Frage: „WER oder WAS tut etwas?“ – Die Antwort steht im Nominativ!",
      wie_erkennen: "Finde das Subjekt: „Wer/Was + Verb?“ Die Antwort ist Nominativ. Tipp: Der Nominativ steht oft am Satzanfang.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Welcher Fall antwortet auf die Frage „Wer oder was?\"",
        "optionen": [
          "Genitiv",
          "Dativ",
          "Nominativ",
          "Akkusativ"
        ],
        "richtig": 2,
        "erklaerung": "Der Nominativ antwortet auf „Wer oder was?\" – er zeigt das Subjekt.",
        "thema": [
          "nominativ",
          "faelle-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Nominativ – ergänze den richtigen Artikel:",
        "satz": "___ Hund bellt laut.",
        "optionen": [
          "Den",
          "Dem",
          "Des",
          "Der"
        ],
        "richtig": "Der",
        "erklaerung": "„Der Hund\" steht im Nominativ (Wer bellt?). Nom. maskulin → der.",
        "thema": [
          "nominativ",
          "faelle-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Im Satz „Das Kind spielt\" steht „Das Kind\" im Nominativ.",
        "richtig": true,
        "erklaerung": "„Das Kind\" ist das Subjekt (Wer spielt?) → Nominativ.",
        "thema": [
          "nominativ",
          "faelle-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was ist das Subjekt im Satz „Die Katze schläft auf dem Sofa\"?",
        "optionen": [
          "schläft",
          "auf dem Sofa",
          "Die Katze",
          "dem Sofa"
        ],
        "richtig": 2,
        "erklaerung": "„Die Katze\" ist das Subjekt – Wer schläft? → Nominativ.",
        "thema": [
          "nominativ"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den Artikel im Nominativ:",
        "satz": "___ Lehrerin erklärt die Aufgabe.",
        "optionen": [
          "Der",
          "Die",
          "Den",
          "Dem"
        ],
        "richtig": "Die",
        "erklaerung": "„Die Lehrerin\" steht im Nominativ (Wer erklärt?). Nom. feminin → die.",
        "thema": [
          "nominativ"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz enthält ein Subjekt im Nominativ?",
        "optionen": [
          "dem Kind",
          "des Vaters",
          "Die Sonne scheint.",
          "den Ball"
        ],
        "richtig": 2,
        "erklaerung": "„Die Sonne\" = Subjekt im Nominativ (Wer scheint?).",
        "thema": [
          "nominativ"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Der Nominativ ist immer das Subjekt des Satzes.",
        "richtig": true,
        "erklaerung": "Richtig! Das Subjekt steht immer im Nominativ.",
        "thema": [
          "nominativ"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den Artikel im Nominativ:",
        "satz": "___ Buch liegt auf dem Tisch.",
        "optionen": [
          "Den",
          "Dem",
          "Des",
          "Das"
        ],
        "richtig": "Das",
        "erklaerung": "„Das Buch\" steht im Nominativ (Was liegt?). Nom. neutrum → das.",
        "thema": [
          "nominativ"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wer oder was ist im Nominativ? „Mein Bruder spielt Fußball.\"",
        "optionen": [
          "Fußball",
          "spielt",
          "Mein Bruder",
          "Mein"
        ],
        "richtig": 2,
        "erklaerung": "„Mein Bruder\" = Subjekt → Nominativ. Frage: Wer spielt?",
        "thema": [
          "nominativ"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Im Nominativ heißt der Artikel für maskuline Nomen „den\".",
        "richtig": false,
        "erklaerung": "Falsch! Im Nominativ maskulin heißt der Artikel „der\". „den\" ist Akkusativ.",
        "thema": [
          "nominativ",
          "faelle-mix"
        ]
      },
    ],
  },

  genitiv: {
    theorie: {
      titel: "Genitiv (Wessen-Fall)",
      erklaerung: "Der Genitiv ist der 2. Fall und zeigt Zugehörigkeit oder Besitz an. Man fragt mit „Wessen?“. Die Artikel ändern sich: des Hundes, der Katze. Bei männlichen und sächlichen Nomen bekommt das Nomen oft die Endung „-s“ oder „-es“.",
      beispiel: "Das ist das Spielzeug <span class=\"highlight\">des Kindes</span>. – Wessen Spielzeug? <span class=\"highlight\">Des Kindes</span>.",
      merkhilfe: "💡 Frage: „WESSEN?“ – Die Antwort steht im Genitiv!",
      wie_erkennen: "Achte auf „des/der“ + Nomen mit „-s/-es“. Typische Signalwörter: „wegen“, „während“, „trotz“, „anstatt“.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Welcher Fall antwortet auf die Frage „Wessen?\"",
        "optionen": [
          "Nominativ",
          "Genitiv",
          "Dativ",
          "Akkusativ"
        ],
        "richtig": 1,
        "erklaerung": "Der Genitiv antwortet auf „Wessen?\" – er zeigt Besitz an.",
        "thema": [
          "genitiv",
          "faelle-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Genitiv – ergänze den richtigen Artikel:",
        "satz": "Das Spielzeug ___ Kindes liegt im Garten.",
        "optionen": [
          "dem",
          "das",
          "des",
          "den"
        ],
        "richtig": "des",
        "erklaerung": "„des Kindes\" steht im Genitiv (Wessen Spielzeug?). Gen. neutrum → des.",
        "thema": [
          "genitiv",
          "faelle-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Der Genitiv drückt Besitz oder Zugehörigkeit aus.",
        "richtig": true,
        "erklaerung": "Richtig! „Das Auto des Vaters\" – Wessen Auto? → Genitiv.",
        "thema": [
          "genitiv"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Ausdruck steht im Genitiv?",
        "optionen": [
          "der Mann",
          "dem Mann",
          "des Mannes",
          "den Mann"
        ],
        "richtig": 2,
        "erklaerung": "„des Mannes\" = Genitiv maskulin. Bei maskulinen Nomen wird oft -es angehängt.",
        "thema": [
          "genitiv",
          "faelle-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den Genitiv:",
        "satz": "Die Farbe ___ Blume ist rot.",
        "optionen": [
          "die",
          "der",
          "den",
          "dem"
        ],
        "richtig": "der",
        "erklaerung": "„der Blume\" = Genitiv feminin. Wessen Farbe? → der Blume.",
        "thema": [
          "genitiv"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wie heißt der Genitiv-Artikel bei „das Haus\"?",
        "optionen": [
          "dem Haus",
          "des Hauses",
          "das Haus",
          "den Haus"
        ],
        "richtig": 1,
        "erklaerung": "„des Hauses\" – Genitiv neutrum: des + Nomen + -(e)s.",
        "thema": [
          "genitiv"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Bei maskulinen und neutralen Nomen wird im Genitiv oft -s oder -es angehängt.",
        "richtig": true,
        "erklaerung": "Richtig! des Hundes, des Buches, des Vaters – Genitivendung -s/-es.",
        "thema": [
          "genitiv"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den Genitiv:",
        "satz": "Der Titel ___ Buches ist spannend.",
        "optionen": [
          "dem",
          "das",
          "des",
          "den"
        ],
        "richtig": "des",
        "erklaerung": "„des Buches\" = Genitiv neutrum (Wessen Titel?).",
        "thema": [
          "genitiv"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz enthält einen Genitiv?",
        "optionen": [
          "Ich sehe den Hund.",
          "Das Fell des Hundes ist weich.",
          "Ich gebe dem Hund Futter.",
          "Der Hund bellt."
        ],
        "richtig": 1,
        "erklaerung": "„des Hundes\" = Genitiv. Wessen Fell? → des Hundes.",
        "thema": [
          "genitiv",
          "faelle-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Im Genitiv feminin lautet der Artikel „der\" (z. B. „der Frau\").",
        "richtig": true,
        "erklaerung": "Richtig! Genitiv feminin: der Frau, der Blume, der Schule.",
        "thema": [
          "genitiv"
        ]
      },
    ],
  },

  dativ: {
    theorie: {
      titel: "Dativ (Wem-Fall)",
      erklaerung: "Der Dativ ist der 3. Fall. Er zeigt an, wem etwas gegeben oder gesagt wird. Man fragt mit „Wem?“. Die Artikel ändern sich: dem Hund, der Katze, den Kindern. Viele Verben verlangen den Dativ: helfen, danken, gehören, gefallen.",
      beispiel: "Ich gebe <span class=\"highlight\">dem Lehrer</span> das Heft. – Wem gebe ich es? <span class=\"highlight\">Dem Lehrer</span>.",
      merkhilfe: "💡 Frage: „WEM?“ – Die Antwort steht im Dativ!",
      wie_erkennen: "Artikel „dem/der/den“ + Nomen. Typische Dativ-Verben: helfen, danken, gehören, gefallen, folgen.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Welcher Fall antwortet auf die Frage „Wem?\"",
        "optionen": [
          "Nominativ",
          "Genitiv",
          "Dativ",
          "Akkusativ"
        ],
        "richtig": 2,
        "erklaerung": "Der Dativ antwortet auf „Wem?\" – er zeigt das indirekte Objekt.",
        "thema": [
          "dativ",
          "faelle-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Dativ – ergänze den richtigen Artikel:",
        "satz": "Ich gebe ___ Hund einen Knochen.",
        "optionen": [
          "der",
          "dem",
          "den",
          "des"
        ],
        "richtig": "dem",
        "erklaerung": "„dem Hund\" steht im Dativ (Wem gebe ich?). Dat. maskulin → dem.",
        "thema": [
          "dativ",
          "faelle-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "In welchem Fall steht „dem Hund\"?",
        "optionen": [
          "Nominativ",
          "Genitiv",
          "Dativ",
          "Akkusativ"
        ],
        "richtig": 2,
        "erklaerung": "„dem Hund\" = Dativ maskulin. Frage: Wem?",
        "thema": [
          "dativ",
          "faelle-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den Dativ-Artikel:",
        "satz": "Er hilft ___ Lehrerin.",
        "optionen": [
          "die",
          "der",
          "den",
          "das"
        ],
        "richtig": "der",
        "erklaerung": "„der Lehrerin\" = Dativ feminin. „helfen\" verlangt den Dativ!",
        "thema": [
          "dativ"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Nach „mit\", „von\", „zu\", „bei\" steht immer der Dativ.",
        "richtig": true,
        "erklaerung": "Richtig! Diese Präpositionen verlangen den Dativ: mit dem Bus, von der Schule, zu dem Arzt.",
        "thema": [
          "dativ"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz enthält einen Dativ?",
        "optionen": [
          "Ich sehe den Ball.",
          "Der Ball ist rot.",
          "Ich gebe dem Kind den Ball.",
          "Das Spielzeug des Kindes."
        ],
        "richtig": 2,
        "erklaerung": "„dem Kind\" = Dativ. Wem gebe ich den Ball? → dem Kind.",
        "thema": [
          "dativ",
          "faelle-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den Dativ-Artikel:",
        "satz": "Sie fährt mit ___ Bus zur Schule.",
        "optionen": [
          "der",
          "den",
          "dem",
          "des"
        ],
        "richtig": "dem",
        "erklaerung": "„mit dem Bus\" – „mit\" verlangt den Dativ. Dat. maskulin → dem.",
        "thema": [
          "dativ"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Im Dativ Plural bekommen die Nomen oft die Endung -n.",
        "richtig": true,
        "erklaerung": "Richtig! Dativ Plural: den Kindern, den Hunden, den Schülern.",
        "thema": [
          "dativ"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Verb verlangt den Dativ?",
        "optionen": [
          "sehen",
          "helfen",
          "lesen",
          "kaufen"
        ],
        "richtig": 1,
        "erklaerung": "„helfen\" verlangt den Dativ: Ich helfe dem Freund (Wem helfe ich?).",
        "thema": [
          "dativ"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den Dativ-Artikel:",
        "satz": "Das Geschenk gehört ___ Kind.",
        "optionen": [
          "das",
          "des",
          "dem",
          "den"
        ],
        "richtig": "dem",
        "erklaerung": "„dem Kind\" = Dativ neutrum. „gehören\" verlangt den Dativ.",
        "thema": [
          "dativ"
        ]
      },
    ],
  },

  akkusativ: {
    theorie: {
      titel: "Akkusativ (Wen/Was-Fall)",
      erklaerung: "Der Akkusativ ist der 4. Fall. Er zeigt das direkte Objekt an – also das, worauf die Handlung gerichtet ist. Man fragt mit „Wen?“ oder „Was?“. Nur der männliche Artikel ändert sich: den (statt der). Die/das bleiben gleich.",
      beispiel: "Ich sehe <span class=\"highlight\">den Hund</span>. – Wen sehe ich? <span class=\"highlight\">Den Hund</span>.",
      merkhilfe: "💡 Frage: „WEN oder WAS?“ – Die Antwort steht im Akkusativ!",
      wie_erkennen: "Nur männlich ändert sich: „der“ → „den“, „ein“ → „einen“. Präpositionen: für, durch, gegen, ohne, um.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Welcher Fall antwortet auf „Wen oder was?\"",
        "optionen": [
          "Nominativ",
          "Akkusativ",
          "Dativ",
          "Genitiv"
        ],
        "richtig": 1,
        "erklaerung": "Der Akkusativ antwortet auf „Wen oder was?\" – er zeigt das direkte Objekt.",
        "thema": [
          "akkusativ",
          "faelle-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Akkusativ – ergänze den richtigen Artikel:",
        "satz": "Ich sehe ___ Hund.",
        "optionen": [
          "der",
          "dem",
          "des",
          "den"
        ],
        "richtig": "den",
        "erklaerung": "„den Hund\" steht im Akkusativ (Wen sehe ich?). Akk. maskulin → den.",
        "thema": [
          "akkusativ",
          "faelle-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„Den\" ist immer Akkusativ maskulin.",
        "richtig": true,
        "erklaerung": "Richtig! „den\" = Akkusativ maskulin. „der\" = Nominativ maskulin.",
        "thema": [
          "akkusativ",
          "faelle-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was ist das Akkusativobjekt im Satz „Das Kind liest ein Buch\"?",
        "optionen": [
          "Das Kind",
          "liest",
          "ein Buch",
          "Kind"
        ],
        "richtig": 2,
        "erklaerung": "„ein Buch\" = Akkusativobjekt (Was liest das Kind?).",
        "thema": [
          "akkusativ"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den Akkusativ-Artikel:",
        "satz": "Sie kauft ___ Jacke.",
        "optionen": [
          "der",
          "die",
          "dem",
          "des"
        ],
        "richtig": "die",
        "erklaerung": "„die Jacke\" = Akkusativ feminin. Bei femininen Nomen bleibt der Artikel gleich (die).",
        "thema": [
          "akkusativ"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Bei femininen und neutralen Nomen sieht der Akkusativ gleich aus wie der Nominativ.",
        "richtig": true,
        "erklaerung": "Richtig! Nur bei maskulinen Nomen ändert sich der Artikel: der → den.",
        "thema": [
          "akkusativ"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den Akkusativ-Artikel:",
        "satz": "Ich lese ___ Buch.",
        "optionen": [
          "der",
          "dem",
          "das",
          "des"
        ],
        "richtig": "das",
        "erklaerung": "„das Buch\" = Akkusativ neutrum (Was lese ich?). Gleiche Form wie Nominativ.",
        "thema": [
          "akkusativ"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Präposition verlangt den Akkusativ?",
        "optionen": [
          "mit",
          "von",
          "für",
          "bei"
        ],
        "richtig": 2,
        "erklaerung": "„für\" verlangt den Akkusativ: für den Freund, für die Schule.",
        "thema": [
          "akkusativ"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den Akkusativ:",
        "satz": "Ich brauche ___ Stift.",
        "optionen": [
          "der",
          "dem",
          "einen",
          "einem"
        ],
        "richtig": "einen",
        "erklaerung": "„einen Stift\" = Akkusativ maskulin mit unbestimmtem Artikel.",
        "thema": [
          "akkusativ"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz enthält ein Akkusativobjekt?",
        "optionen": [
          "Der Hund schläft.",
          "Ich helfe dem Freund.",
          "Er trinkt einen Saft.",
          "Das Buch des Lehrers."
        ],
        "richtig": 2,
        "erklaerung": "„einen Saft\" = Akkusativobjekt (Was trinkt er?).",
        "thema": [
          "akkusativ",
          "faelle-mix"
        ]
      },
    ],
  },

  'faelle-mix': {
    theorie: {
      titel: "Fälle-Mix (Alle vier Fälle)",
      erklaerung: "Im Deutschen gibt es vier Fälle: Nominativ (Wer?), Genitiv (Wessen?), Dativ (Wem?) und Akkusativ (Wen/Was?). Die Fälle bestimmen die Form von Artikeln, Adjektiven und Pronomen. Mit der richtigen Frage findest du immer den richtigen Fall.",
      beispiel: "<span class=\"highlight\">Der</span> Lehrer gibt <span class=\"highlight\">dem</span> Schüler <span class=\"highlight\">den</span> Stift <span class=\"highlight\">des</span> Direktors.",
      merkhilfe: "💡 Wer? → Nominativ, Wessen? → Genitiv, Wem? → Dativ, Wen/Was? → Akkusativ.",
      wie_erkennen: "Stelle die Frage: Wer/Was tut? (Nom.) – Wessen? (Gen.) – Wem? (Dat.) – Wen/Was? (Akk.). Der Artikel verrät den Fall!",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "In welchem Fall steht „des Lehrers\"?",
        "optionen": [
          "Nominativ",
          "Genitiv",
          "Dativ",
          "Akkusativ"
        ],
        "richtig": 1,
        "erklaerung": "„des Lehrers\" = Genitiv maskulin. Fragewort: Wessen?",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "In welchem Fall steht „dem Kind\"?",
        "optionen": [
          "Nominativ",
          "Genitiv",
          "Dativ",
          "Akkusativ"
        ],
        "richtig": 2,
        "erklaerung": "„dem Kind\" = Dativ neutrum. Fragewort: Wem?",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den richtigen Artikel:",
        "satz": "Ich gebe ___ Freund ein Geschenk.",
        "optionen": [
          "der",
          "den",
          "dem",
          "des"
        ],
        "richtig": "dem",
        "erklaerung": "„dem Freund\" = Dativ (Wem gebe ich?). Dat. maskulin → dem.",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "reihenfolge",
        "frage": "Ordne die Fälle: Nominativ – Genitiv – Dativ – Akkusativ",
        "woerter": [
          "Wen/Was?",
          "Wer/Was?",
          "Wem?",
          "Wessen?"
        ],
        "richtig": [
          "Wer/Was?",
          "Wessen?",
          "Wem?",
          "Wen/Was?"
        ],
        "erklaerung": "Nominativ=Wer? | Genitiv=Wessen? | Dativ=Wem? | Akkusativ=Wen/Was?",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Der Nominativ ist der 1. Fall und zeigt das Subjekt.",
        "richtig": true,
        "erklaerung": "Richtig! Nominativ = 1. Fall = Subjekt (Wer oder was?).",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welchen Fall verlangt die Präposition „mit\"?",
        "optionen": [
          "Nominativ",
          "Genitiv",
          "Dativ",
          "Akkusativ"
        ],
        "richtig": 2,
        "erklaerung": "„mit\" verlangt immer den Dativ: mit dem Auto, mit der Freundin.",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den richtigen Artikel:",
        "satz": "Das Auto ___ Nachbarn ist neu.",
        "optionen": [
          "dem",
          "den",
          "der",
          "des"
        ],
        "richtig": "des",
        "erklaerung": "„des Nachbarn\" = Genitiv maskulin (Wessen Auto?).",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "In welchem Fall steht „den Apfel\" im Satz „Ich esse den Apfel\"?",
        "optionen": [
          "Nominativ",
          "Genitiv",
          "Dativ",
          "Akkusativ"
        ],
        "richtig": 3,
        "erklaerung": "„den Apfel\" = Akkusativ maskulin. Wen/Was esse ich? → den Apfel.",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Wechselpräpositionen wie „in\", „auf\", „an\" können Dativ ODER Akkusativ verlangen.",
        "richtig": true,
        "erklaerung": "Richtig! Wo? → Dativ (in dem Haus). Wohin? → Akkusativ (in das Haus).",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "„Ich lege das Buch auf den Tisch.\" – Welcher Fall nach „auf\"?",
        "optionen": [
          "Nominativ",
          "Genitiv",
          "Dativ",
          "Akkusativ"
        ],
        "richtig": 3,
        "erklaerung": "Wohin? → Akkusativ. „auf den Tisch\" = Richtung → Akkusativ.",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "„Das Buch liegt auf dem Tisch.\" – Welcher Fall nach „auf\"?",
        "optionen": [
          "Nominativ",
          "Genitiv",
          "Dativ",
          "Akkusativ"
        ],
        "richtig": 2,
        "erklaerung": "Wo? → Dativ. „auf dem Tisch\" = Ort → Dativ.",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Ergänze den richtigen Artikel:",
        "satz": "Sie wartet auf ___ Bus.",
        "optionen": [
          "der",
          "dem",
          "den",
          "des"
        ],
        "richtig": "den",
        "erklaerung": "„warten auf\" + Akkusativ: auf den Bus.",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "reihenfolge",
        "frage": "Ordne die Artikel für maskulin: Nom → Gen → Dat → Akk",
        "woerter": [
          "den",
          "der",
          "dem",
          "des"
        ],
        "richtig": [
          "der",
          "des",
          "dem",
          "den"
        ],
        "erklaerung": "Maskulin: der (Nom) → des (Gen) → dem (Dat) → den (Akk).",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Der Akkusativ ist der 4. Fall.",
        "richtig": true,
        "erklaerung": "Richtig! 1.Nom, 2.Gen, 3.Dat, 4.Akk.",
        "thema": [
          "faelle-mix"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz hat Dativ UND Akkusativ?",
        "optionen": [
          "Der Hund bellt.",
          "Ich gebe dem Kind den Ball.",
          "Sie liest ein Buch.",
          "Das Auto des Vaters."
        ],
        "richtig": 1,
        "erklaerung": "„dem Kind\" = Dativ (Wem?) + „den Ball\" = Akkusativ (Was?).",
        "thema": [
          "faelle-mix"
        ]
      },
    ],
  },


  // ╔══════════════════════════════════════════════════════════╗
  // ║  RECHTSCHREIBUNG                                         ║
  // ╚══════════════════════════════════════════════════════════╝

  'gross-klein': {
    theorie: {
      titel: "Groß- und Kleinschreibung",
      erklaerung: "Im Deutschen werden Nomen immer großgeschrieben: Schule, Hund, Freude. Auch Satzanfänge und höfliche Anrede (Sie) sind groß. Verben und Adjektive schreibt man klein, außer sie werden als Nomen verwendet: „das Lesen“, „das Schöne“.",
      beispiel: "<span class=\"highlight\">D</span>er kleine <span class=\"highlight\">H</span>und spielt im <span class=\"highlight\">G</span>arten.",
      merkhilfe: "💡 Artikel-Probe: Passt „der/die/das“ davor? Dann groß! Satzanfang? Immer groß!",
      wie_erkennen: "Nomen = groß (Artikel-Probe). Satzanfang = groß. Nominalisierung = groß („das Laufen“). Alles andere = klein.",
    },
    fragen: [
      {
        "typ": "satz_korrigieren",
        "frage": "Finde das falsch geschriebene Wort:",
        "satz": "Das buch liegt auf dem Tisch.",
        "fehlerWort": "buch",
        "erklaerung": "„buch\" muss großgeschrieben werden: „Buch\" – Nomen werden immer großgeschrieben!",
        "thema": [
          "gross-klein"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Finde das falsch geschriebene Wort:",
        "satz": "Mein hund bellt sehr laut.",
        "fehlerWort": "hund",
        "erklaerung": "„hund\" muss großgeschrieben werden: „Hund\" – alle Nomen werden großgeschrieben!",
        "thema": [
          "gross-klein"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Man schreibt „das kind\" mit einem kleinen k.",
        "richtig": false,
        "erklaerung": "„Kind\" ist ein Nomen und wird immer großgeschrieben: „das Kind\".",
        "thema": [
          "gross-klein"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Finde das falsch geschriebene Wort:",
        "satz": "Die sonne scheint heute besonders hell.",
        "fehlerWort": "sonne",
        "erklaerung": "„Sonne\" ist ein Nomen und wird großgeschrieben.",
        "thema": [
          "gross-klein"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort muss großgeschrieben werden?",
        "optionen": [
          "schnell",
          "laufen",
          "freundschaft",
          "leise"
        ],
        "richtig": 2,
        "erklaerung": "„Freundschaft\" ist ein Nomen (die Freundschaft) → großschreiben.",
        "thema": [
          "gross-klein"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Nach einem Doppelpunkt schreibt man groß, wenn ein ganzer Satz folgt.",
        "richtig": true,
        "erklaerung": "Richtig! Folgt ein vollständiger Satz, schreibt man groß. Bei Aufzählungen klein.",
        "thema": [
          "gross-klein"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Finde das falsch geschriebene Wort:",
        "satz": "Im Frühling blühen die blumen im Garten.",
        "fehlerWort": "blumen",
        "erklaerung": "„Blumen\" ist ein Nomen → großschreiben.",
        "thema": [
          "gross-klein"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz ist richtig geschrieben?",
        "optionen": [
          "das Schöne wetter freut mich.",
          "Das schöne Wetter freut mich.",
          "das schöne wetter freut mich.",
          "Das Schöne wetter Freut Mich."
        ],
        "richtig": 1,
        "erklaerung": "Satzanfang groß, Nomen „Wetter\" groß, Adjektiv „schöne\" und Verb „freut\" klein.",
        "thema": [
          "gross-klein"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Nominalisierte Verben werden großgeschrieben: „das Lesen macht Spaß\".",
        "richtig": true,
        "erklaerung": "Richtig! Wenn ein Verb als Nomen verwendet wird (das Lesen, das Spielen), wird es großgeschrieben.",
        "thema": [
          "gross-klein"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Finde das falsch geschriebene Wort:",
        "satz": "Beim schwimmen habe ich viel Spaß.",
        "fehlerWort": "schwimmen",
        "erklaerung": "„Beim Schwimmen\" – nach „beim\" wird das Verb zum Nomen → großschreiben.",
        "thema": [
          "gross-klein"
        ]
      },
    ],
  },

  'das-dass': {
    theorie: {
      titel: "das oder dass?",
      erklaerung: "„das“ mit einem s ist ein Artikel oder Pronomen – es kann durch „dieses“, „welches“ oder „jenes“ ersetzt werden. „dass“ mit doppel-s ist eine Konjunktion, die einen Nebensatz einleitet. Es kann NICHT durch „dieses“ ersetzt werden.",
      beispiel: "Ich weiß, <span class=\"highlight\">dass</span> <span class=\"highlight\">das</span> Buch gut ist.",
      merkhilfe: "💡 Ersatzprobe: Passt „dieses“ oder „welches“? → „das“. Passt es nicht? → „dass“!",
      wie_erkennen: "Ersetze durch „dieses/welches“: „Das Buch“ → „Dieses Buch“ ✓ → „das“. „Ich glaube, dass ...“ → „dieses“ geht nicht → „dass“.",
    },
    fragen: [
      {
        "typ": "lueckentext",
        "frage": "das oder dass?",
        "satz": "Ich weiß, ___ du recht hast.",
        "optionen": [
          "das",
          "dass"
        ],
        "richtig": "dass",
        "erklaerung": "„dass\" leitet hier einen Nebensatz ein (Konjunktion). Test: „welches\" passt nicht.",
        "thema": [
          "das-dass"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "das oder dass?",
        "satz": "Siehst du ___ Haus dort drüben?",
        "optionen": [
          "dass",
          "das"
        ],
        "richtig": "das",
        "erklaerung": "„das\" ist hier ein Artikel vor dem Nomen „Haus\". Test: „welches Haus\" funktioniert.",
        "thema": [
          "das-dass"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Finde das falsch geschriebene Wort:",
        "satz": "Ich glaube, das du heute kommst.",
        "fehlerWort": "das",
        "erklaerung": "„das\" muss hier „dass\" sein – es leitet einen Nebensatz ein.",
        "thema": [
          "das-dass"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "das oder dass?",
        "satz": "___ Buch, ___ ich gelesen habe, war spannend.",
        "optionen": [
          "Das … das",
          "Das … dass",
          "Dass … das",
          "Dass … dass"
        ],
        "richtig": "Das … das",
        "erklaerung": "1. „Das\" = Artikel vor Buch. 2. „das\" = Relativpronomen (= welches ich gelesen habe).",
        "thema": [
          "das-dass"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Wenn man „das\" durch „welches\" ersetzen kann, schreibt man „das\".",
        "richtig": true,
        "erklaerung": "Richtig! Das ist die wichtigste Regel: „das\" = durch „welches\" ersetzbar. Sonst → „dass\".",
        "thema": [
          "das-dass"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "das oder dass?",
        "satz": "Er sagte, ___ er morgen kommt.",
        "optionen": [
          "das",
          "dass"
        ],
        "richtig": "dass",
        "erklaerung": "„dass\" = Konjunktion, leitet den Nebensatz ein. „welches\" passt hier nicht.",
        "thema": [
          "das-dass"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "das oder dass?",
        "satz": "___ Auto, ___ dort steht, gehört meinem Vater.",
        "optionen": [
          "Das … das",
          "Das … dass",
          "Dass … das",
          "Dass … dass"
        ],
        "richtig": "Das … das",
        "erklaerung": "1. „Das\" = Artikel. 2. „das\" = Relativpronomen (= welches dort steht).",
        "thema": [
          "das-dass"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Finde das falsch geschriebene Wort:",
        "satz": "Es ist schade, das du nicht kommen kannst.",
        "fehlerWort": "das",
        "erklaerung": "Hier muss „dass\" stehen – es leitet den Nebensatz ein. „welches\" passt nicht.",
        "thema": [
          "das-dass"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„dass\" ist immer eine Konjunktion.",
        "richtig": true,
        "erklaerung": "Richtig! „dass\" (mit Doppel-s) ist immer eine Konjunktion und leitet einen Nebensatz ein.",
        "thema": [
          "das-dass"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "das oder dass?",
        "satz": "Ich hoffe, ___ es dir gut geht.",
        "optionen": [
          "das",
          "dass"
        ],
        "richtig": "dass",
        "erklaerung": "„dass\" = Konjunktion. „welches\" passt nicht → „dass\".",
        "thema": [
          "das-dass"
        ]
      },
    ],
  },

  komma: {
    theorie: {
      titel: "Kommasetzung",
      erklaerung: "Kommas gliedern Sätze und machen sie verständlich. Wichtige Kommaregeln: vor „und“/„oder“ bei Hauptsätzen, vor Nebensatz-Konjunktionen (weil, dass, wenn, obwohl), bei Aufzählungen und vor Infinitivgruppen mit „zu“.",
      beispiel: "Ich esse Äpfel<span class=\"highlight\">,</span> Birnen<span class=\"highlight\">,</span> Bananen und Trauben.",
      merkhilfe: "💡 Nebensatz erkennen: Steht das Verb am Ende? Dann Komma davor!",
      wie_erkennen: "Komma vor Konjunktionen wie „weil“, „dass“, „wenn“, „obwohl“. Bei Aufzählungen zwischen den Gliedern (außer vor „und“/„oder“).",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Wann setzt man einen Beistrich?",
        "optionen": [
          "Vor jedem Nomen",
          "Bei Aufzählungen",
          "Nach jedem Verb",
          "Vor jedem Adjektiv"
        ],
        "richtig": 1,
        "erklaerung": "Bei Aufzählungen steht ein Beistrich: „Äpfel, Birnen und Bananen.\"",
        "thema": [
          "komma"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Wo fehlt der Beistrich?",
        "satz": "Ich lerne weil morgen eine Prüfung ist.",
        "fehlerWort": "weil",
        "erklaerung": "Vor „weil\" muss ein Beistrich stehen: „Ich lerne, weil morgen eine Prüfung ist.\"",
        "thema": [
          "komma"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Vor „und\" in einer Aufzählung steht kein Beistrich.",
        "richtig": true,
        "erklaerung": "Richtig! In der deutschen Rechtschreibung steht vor „und\" kein Beistrich: „A, B und C.\"",
        "thema": [
          "komma"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welcher Satz hat den Beistrich richtig gesetzt?",
        "optionen": [
          "Wenn es regnet bleiben, wir zu Hause.",
          "Wenn es regnet, bleiben wir zu Hause.",
          "Wenn, es regnet bleiben wir zu Hause.",
          "Wenn es, regnet bleiben wir zu Hause."
        ],
        "richtig": 1,
        "erklaerung": "Nach dem Nebensatz („Wenn es regnet\") kommt ein Beistrich, dann der Hauptsatz.",
        "thema": [
          "komma"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Wo fehlt der Beistrich?",
        "satz": "Obwohl es kalt ist gehe ich spazieren.",
        "fehlerWort": "ist",
        "erklaerung": "Nach dem Nebensatz: „Obwohl es kalt ist, gehe ich spazieren.\"",
        "thema": [
          "komma"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Vor Konjunktionen wie „weil\", „dass\", „obwohl\" steht immer ein Beistrich.",
        "richtig": true,
        "erklaerung": "Richtig! Unterordnende Konjunktionen leiten Nebensätze ein → Beistrich davor.",
        "thema": [
          "komma"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wo steht der Beistrich richtig?",
        "optionen": [
          "Ich kaufe Brot, Butter und Milch.",
          "Ich kaufe, Brot Butter und Milch.",
          "Ich kaufe Brot Butter, und Milch.",
          "Ich, kaufe Brot Butter und Milch."
        ],
        "richtig": 0,
        "erklaerung": "Aufzählung: Beistrich zwischen den Gliedern, vor „und\" keiner.",
        "thema": [
          "komma"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Wo fehlt der Beistrich?",
        "satz": "Er sagte dass er morgen kommt.",
        "fehlerWort": "dass",
        "erklaerung": "Vor „dass\" muss ein Beistrich: „Er sagte, dass er morgen kommt.\"",
        "thema": [
          "komma"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Bei Relativsätzen steht immer ein Beistrich.",
        "richtig": true,
        "erklaerung": "Richtig! „Das Buch, das ich lese, ist spannend.\" – Beistrich vor und nach dem Relativsatz.",
        "thema": [
          "komma"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Vor welchem Wort steht KEIN Beistrich?",
        "optionen": [
          "weil",
          "und (in Aufzählung)",
          "dass",
          "obwohl"
        ],
        "richtig": 1,
        "erklaerung": "Vor „und\" in einer Aufzählung steht im Deutschen kein Beistrich.",
        "thema": [
          "komma"
        ]
      },
    ],
  },

  'schwierige-woerter': {
    theorie: {
      titel: "Schwierige Wörter",
      erklaerung: "Manche Wörter im Deutschen sind besonders schwer zu schreiben. Häufige Fehlerquellen: Doppelkonsonanten (Bett, Sonne), Dehnungs-h (fahren, Lehrer), stummes h (gehen, sehen) und ähnlich klingende Buchstaben (f/v, d/t, g/k am Wortende).",
      beispiel: "Der <span class=\"highlight\">Rhythmus</span> des Liedes ist <span class=\"highlight\">fantastisch</span>.",
      merkhilfe: "💡 Verlängerungsprobe: „Hund“ → „Hunde“ (also mit d!). „lieb“ → „liebe“ (also mit b!).",
      wie_erkennen: "Höre genau hin und nutze Proben: Verlängerungsprobe (Hund → Hunde), Ableitungsprobe (Häuser → Haus). Im Zweifel: Nachschlagen!",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Welche Schreibweise ist richtig?",
        "optionen": [
          "Tier",
          "Tir",
          "Teer",
          "Tihr"
        ],
        "richtig": 0,
        "erklaerung": "„Tier\" – langer i-Laut wird als „ie\" geschrieben.",
        "thema": [
          "schwierige-woerter"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Finde das falsch geschriebene Wort:",
        "satz": "Der Fogel singt ein schönes Lied.",
        "fehlerWort": "Fogel",
        "erklaerung": "„Vogel\" schreibt man mit „V\". In deutschen Wörtern klingt „v\" wie „f\".",
        "thema": [
          "schwierige-woerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Schreibweise ist korrekt?",
        "optionen": [
          "Fater",
          "Vater",
          "Wather",
          "Vaater"
        ],
        "richtig": 1,
        "erklaerung": "„Vater\" – mit „V\" am Anfang (deutsches Wort, v klingt wie f).",
        "thema": [
          "schwierige-woerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "In welchem Wort steckt ein Dehnungs-h?",
        "optionen": [
          "laufen",
          "Tisch",
          "Fahrt",
          "Hund"
        ],
        "richtig": 2,
        "erklaerung": "„Fahrt\" hat ein Dehnungs-h: F-a-h-r-t. Das „h\" macht das „a\" lang.",
        "thema": [
          "schwierige-woerter"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Wort „nehmen\" enthält ein Dehnungs-h.",
        "richtig": true,
        "erklaerung": "Richtig! n-e-h-m-e-n – das „h\" dehnt das „e\".",
        "thema": [
          "schwierige-woerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist richtig geschrieben?",
        "optionen": [
          "Rythmus",
          "Rhytmus",
          "Rhythmus",
          "Rithmus"
        ],
        "richtig": 2,
        "erklaerung": "„Rhythmus\" – ein schwieriges Fremdwort aus dem Griechischen.",
        "thema": [
          "schwierige-woerter"
        ]
      },
      {
        "typ": "satz_korrigieren",
        "frage": "Finde das falsch geschriebene Wort:",
        "satz": "Die Messer und die Gabeln ligen auf dem Tisch.",
        "fehlerWort": "ligen",
        "erklaerung": "„liegen\" schreibt man mit „ie\" – langer i-Laut.",
        "thema": [
          "schwierige-woerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort schreibt man mit „ß\"?",
        "optionen": [
          "Strasse",
          "Straße",
          "Strase",
          "Straaße"
        ],
        "richtig": 1,
        "erklaerung": "„Straße\" – nach langem Vokal steht „ß\" (nicht „ss\").",
        "thema": [
          "schwierige-woerter"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„dass\" schreibt man mit Doppel-s, weil der Vokal davor kurz ist.",
        "richtig": true,
        "erklaerung": "Richtig! Nach kurzem Vokal: ss (dass, Fluss). Nach langem Vokal: ß (Straße, groß).",
        "thema": [
          "schwierige-woerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Wort ist richtig geschrieben?",
        "optionen": [
          "villeicht",
          "vieleicht",
          "vielleicht",
          "fieleicht"
        ],
        "richtig": 2,
        "erklaerung": "„vielleicht\" – zusammengesetzt aus „viel\" und „leicht\".",
        "thema": [
          "schwierige-woerter"
        ]
      },
    ],
  },


  // ╔══════════════════════════════════════════════════════════╗
  // ║  WORTSCHATZ                                              ║
  // ╚══════════════════════════════════════════════════════════╝

  synonyme: {
    theorie: {
      titel: "Synonyme (Bedeutungsgleiche Wörter)",
      erklaerung: "Synonyme sind Wörter mit gleicher oder ähnlicher Bedeutung: groß – riesig, klein – winzig, schnell – flink. Sie machen Texte abwechslungsreicher und vermeiden Wiederholungen. Oft haben Synonyme leichte Bedeutungsunterschiede.",
      beispiel: "Das Haus ist <span class=\"highlight\">groß</span>. – Das Haus ist <span class=\"highlight\">riesig</span>.",
      merkhilfe: "💡 Synonyme = Zwillingswörter. Sie bedeuten (fast) das Gleiche, klingen aber anders!",
      wie_erkennen: "Frage: „Kann ich das Wort durch ein anderes ersetzen, ohne den Sinn zu ändern?“ Wenn ja, hast du ein Synonym gefunden!",
    },
    fragen: [
      {
        "typ": "synonym_finden",
        "frage": "Was ist ein Synonym für „froh\"?",
        "optionen": [
          "traurig",
          "glücklich",
          "müde",
          "laut"
        ],
        "richtig": 1,
        "erklaerung": "„glücklich\" bedeutet dasselbe wie „froh\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_finden",
        "frage": "Was ist ein Synonym für „schnell\"?",
        "optionen": [
          "langsam",
          "leise",
          "flink",
          "groß"
        ],
        "richtig": 2,
        "erklaerung": "„flink\" ist ein Synonym für „schnell\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_finden",
        "frage": "Was ist ein Synonym für „schön\"?",
        "optionen": [
          "hässlich",
          "klein",
          "hübsch",
          "laut"
        ],
        "richtig": 2,
        "erklaerung": "„hübsch\" ist ein Synonym für „schön\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_verbinden",
        "frage": "Verbinde die Synonyme:",
        "paare": [
          [
            "groß",
            "riesig"
          ],
          [
            "schnell",
            "flink"
          ],
          [
            "traurig",
            "betrübt"
          ],
          [
            "kalt",
            "eisig"
          ]
        ],
        "erklaerung": "groß ↔ riesig | schnell ↔ flink | traurig ↔ betrübt | kalt ↔ eisig",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_finden",
        "frage": "Was ist ein Synonym für „gefährlich\"?",
        "optionen": [
          "sicher",
          "riskant",
          "langweilig",
          "leicht"
        ],
        "richtig": 1,
        "erklaerung": "„riskant\" ist ein Synonym für „gefährlich\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_finden",
        "frage": "Was ist ein Synonym für „mutig\"?",
        "optionen": [
          "ängstlich",
          "tapfer",
          "leise",
          "langsam"
        ],
        "richtig": 1,
        "erklaerung": "„tapfer\" ist ein Synonym für „mutig\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_verbinden",
        "frage": "Verbinde die Synonyme:",
        "paare": [
          [
            "mutig",
            "tapfer"
          ],
          [
            "einfach",
            "leicht"
          ],
          [
            "sprechen",
            "reden"
          ],
          [
            "kaufen",
            "erwerben"
          ]
        ],
        "erklaerung": "mutig ↔ tapfer | einfach ↔ leicht | sprechen ↔ reden | kaufen ↔ erwerben",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_finden",
        "frage": "Was ist ein Synonym für „bemerken\"?",
        "optionen": [
          "vergessen",
          "wahrnehmen",
          "schlafen",
          "verlieren"
        ],
        "richtig": 1,
        "erklaerung": "„wahrnehmen\" ist ein Synonym für „bemerken\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "lueckentext",
        "frage": "Wähle das passende Synonym für „müde\":",
        "satz": "Nach dem langen Wandertag war das Kind völlig ___.",
        "optionen": [
          "erschöpft",
          "fröhlich",
          "wütend",
          "hungrig"
        ],
        "richtig": "erschöpft",
        "erklaerung": "„erschöpft\" ist ein stärkeres Synonym für „müde\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_finden",
        "frage": "Was ist ein Synonym für „klug\"?",
        "optionen": [
          "dumm",
          "intelligent",
          "langsam",
          "klein"
        ],
        "richtig": 1,
        "erklaerung": "„intelligent\" ist ein Synonym für „klug\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_verbinden",
        "frage": "Verbinde die Synonyme:",
        "paare": [
          [
            "Haus",
            "Gebäude"
          ],
          [
            "Freund",
            "Kamerad"
          ],
          [
            "Fehler",
            "Irrtum"
          ],
          [
            "alt",
            "betagt"
          ]
        ],
        "erklaerung": "Haus ↔ Gebäude | Freund ↔ Kamerad | Fehler ↔ Irrtum | alt ↔ betagt",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_finden",
        "frage": "Was ist ein Synonym für „wichtig\"?",
        "optionen": [
          "unwichtig",
          "bedeutsam",
          "klein",
          "langsam"
        ],
        "richtig": 1,
        "erklaerung": "„bedeutsam\" ist ein Synonym für „wichtig\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_finden",
        "frage": "Was ist ein Synonym für „wütend\"?",
        "optionen": [
          "fröhlich",
          "zornig",
          "müde",
          "ruhig"
        ],
        "richtig": 1,
        "erklaerung": "„zornig\" ist ein Synonym für „wütend\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_finden",
        "frage": "Was bedeutet „außerordentlich\"?",
        "optionen": [
          "gewöhnlich",
          "normal",
          "besonders",
          "alltäglich"
        ],
        "richtig": 2,
        "erklaerung": "„besonders\" ist ein Synonym für „außerordentlich\".",
        "thema": [
          "synonyme"
        ]
      },
      {
        "typ": "synonym_verbinden",
        "frage": "Verbinde die Synonyme:",
        "paare": [
          [
            "Arbeit",
            "Tätigkeit"
          ],
          [
            "helfen",
            "unterstützen"
          ],
          [
            "antworten",
            "erwidern"
          ],
          [
            "sehen",
            "blicken"
          ]
        ],
        "erklaerung": "Arbeit ↔ Tätigkeit | helfen ↔ unterstützen | antworten ↔ erwidern | sehen ↔ blicken",
        "thema": [
          "synonyme"
        ]
      },
    ],
  },

  homonyme: {
    theorie: {
      titel: "Homonyme (Gleich klingende Wörter)",
      erklaerung: "Homonyme sind Wörter, die gleich klingen oder gleich geschrieben werden, aber unterschiedliche Bedeutungen haben. Zum Beispiel: „Bank“ (Sitzbank oder Geldinstitut), „Schloss“ (Gebäude oder Türschloss). Der Kontext entscheidet!",
      beispiel: "Sie sitzt auf der <span class=\"highlight\">Bank</span> vor der <span class=\"highlight\">Bank</span>.",
      merkhilfe: "💡 Gleicher Klang, anderer Sinn! Der Satz drumherum verrät die Bedeutung.",
      wie_erkennen: "Achte auf den Kontext: Was passt besser? „Bank zum Sitzen“ oder „Bank für Geld“? Der Satz gibt dir die Antwort.",
    },
    fragen: [
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Bank\" in diesem Satz?",
        "satz": "Ich sitze auf der Bank im Park.",
        "optionen": [
          "Geldinstitut",
          "Sitzbank",
          "Schrank",
          "Schreibtisch"
        ],
        "richtig": 1,
        "erklaerung": "Im Park → Sitzbank. Der Kontext gibt den Hinweis.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Bank\" in diesem Satz?",
        "satz": "Mein Vater hebt Geld bei der Bank ab.",
        "optionen": [
          "Sitzbank",
          "Geldinstitut",
          "Schule",
          "Fabrik"
        ],
        "richtig": 1,
        "erklaerung": "„Geld abheben\" → Geldinstitut.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Schloss\" in diesem Satz?",
        "satz": "Das Schloss an meiner Tür ist kaputt.",
        "optionen": [
          "Königspalast",
          "Museum",
          "Türverschluss",
          "Tresor"
        ],
        "richtig": 2,
        "erklaerung": "„An der Tür\" → Türverschluss.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Schloss\" in diesem Satz?",
        "satz": "Das alte Schloss auf dem Berg zieht viele Touristen an.",
        "optionen": [
          "Türverschluss",
          "Burg oder Palast",
          "Sicherheitsschloss",
          "Garage"
        ],
        "richtig": 1,
        "erklaerung": "„Auf dem Berg\" und „Touristen\" → Burg/Palast.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Tor\" in diesem Satz?",
        "satz": "Der Stürmer schoss in der letzten Minute ein Tor.",
        "optionen": [
          "Eingangstor",
          "Treffer beim Sport",
          "Stadtmauer",
          "Fenster"
        ],
        "richtig": 1,
        "erklaerung": "„Stürmer\" + „schießen\" → Sporttreffer.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Mutter\" in diesem Satz?",
        "satz": "Der Mechaniker dreht die Mutter mit dem Schraubenschlüssel fest.",
        "optionen": [
          "Weiblicher Elternteil",
          "Schraubenmutter",
          "Werkzeug",
          "Schraube"
        ],
        "richtig": 1,
        "erklaerung": "„Schraubenschlüssel\" + „drehen\" → Schraubenmutter.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Leiter\" in diesem Satz?",
        "satz": "Der Leiter der Schule begrüßte alle Schülerinnen und Schüler.",
        "optionen": [
          "Klettergerät",
          "Anführer / Chef",
          "Metall",
          "Werkzeug"
        ],
        "richtig": 1,
        "erklaerung": "„Der Leiter der Schule\" = Direktor (Chef).",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Zug\" in diesem Satz?",
        "satz": "Wir fahren mit dem Zug nach Salzburg.",
        "optionen": [
          "Luftzug",
          "Spielzug",
          "Schienenfahrzeug",
          "Zugvogel"
        ],
        "richtig": 2,
        "erklaerung": "„Fahren\" + „nach Salzburg\" → Schienenfahrzeug/Eisenbahn.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Wort „Bank\" hat nur eine einzige Bedeutung im Deutschen.",
        "richtig": false,
        "erklaerung": "„Bank\" ist ein Homonym: Sitzbank ODER Geldinstitut.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Wort „Kiefer\" kann sowohl einen Körperteil als auch einen Baum bezeichnen.",
        "richtig": true,
        "erklaerung": "„Kiefer\" = Kieferknochen (Körperteil) ODER Kiefer-Baum (Nadelbaum).",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was versteht man unter einem „Flügel\" in der Musik?",
        "optionen": [
          "Eine Geige",
          "Ein Schlagzeug",
          "Ein großes Klavier",
          "Eine Flöte"
        ],
        "richtig": 2,
        "erklaerung": "Ein „Flügel\" ist ein besonders großes Klavier.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Gericht\" in diesem Satz?",
        "satz": "Das Gericht schmeckte ausgezeichnet.",
        "optionen": [
          "Justizbehörde",
          "Zubereitete Speise",
          "Schule",
          "Theater"
        ],
        "richtig": 1,
        "erklaerung": "„Schmecken\" → zubereitete Speise/Mahlzeit.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Gericht\" in diesem Satz?",
        "satz": "Der Angeklagte wurde vor Gericht gestellt.",
        "optionen": [
          "Speise",
          "Justizbehörde",
          "Restaurant",
          "Schule"
        ],
        "richtig": 1,
        "erklaerung": "„Angeklagter\" → Justizbehörde/Tribunal.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was sind Homonyme?",
        "optionen": [
          "Wörter mit ähnlicher Bedeutung",
          "Wörter mit mehreren Bedeutungen",
          "Wörter mit vielen Silben",
          "Eigenschaftswörter"
        ],
        "richtig": 1,
        "erklaerung": "Homonyme sind Wörter, die gleich geschrieben werden, aber verschiedene Bedeutungen haben.",
        "thema": [
          "homonyme"
        ]
      },
      {
        "typ": "homonym_bedeutung",
        "frage": "Welche Bedeutung hat „Steuer\" in diesem Satz?",
        "satz": "Der Fahrer hielt das Steuer ruhig in der Kurve.",
        "optionen": [
          "Staatliche Abgabe",
          "Lenkrad",
          "Motor",
          "Bremse"
        ],
        "richtig": 1,
        "erklaerung": "„Fahrer\" + „Kurve\" → Lenkrad (das Steuer).",
        "thema": [
          "homonyme"
        ]
      },
    ],
  },

  steigerung: {
    theorie: {
      titel: "Steigerung von Adjektiven",
      erklaerung: "Adjektive kann man steigern: Grundform (schnell), Komparativ (schneller), Superlativ (am schnellsten). Regelmäßige Adjektive bekommen „-er“ und „-sten“. Einige sind unregelmäßig: gut – besser – am besten. Einsilbige bekommen oft einen Umlaut.",
      beispiel: "Anna ist <span class=\"highlight\">schnell</span>, Tom ist <span class=\"highlight\">schneller</span>, Mia ist <span class=\"highlight\">am schnellsten</span>.",
      merkhilfe: "💡 Grundform → +er (Komparativ) → am ...sten (Superlativ). Achtung bei Umlauten!",
      wie_erkennen: "Komparativ: Adjektiv + „-er“ (größer, kleiner). Superlativ: „am“ + Adjektiv + „-sten“ (am größten) oder „der/die/das“ + Adjektiv + „-ste“.",
    },
    fragen: [
      {
        "typ": "steigerung_ordnen",
        "frage": "Bringe in die richtige Reihenfolge (Grundform → Komparativ → Superlativ):",
        "woerter": [
          "am größten",
          "groß",
          "größer"
        ],
        "richtig": [
          "groß",
          "größer",
          "am größten"
        ],
        "erklaerung": "groß → größer → am größten. Mit Umlaut!",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "steigerung_bilden",
        "frage": "Bilde den Komparativ:",
        "wort": "schön",
        "form": "komparativ",
        "richtig": "schöner",
        "erklaerung": "„schön\" + -er = „schöner\".",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "steigerung_bilden",
        "frage": "Bilde den Komparativ:",
        "wort": "alt",
        "form": "komparativ",
        "richtig": "älter",
        "erklaerung": "„alt\" → „älter\" – mit Umlaut (a → ä).",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "steigerung_bilden",
        "frage": "Bilde den Superlativ:",
        "wort": "klein",
        "form": "superlativ",
        "richtig": "am kleinsten",
        "erklaerung": "„klein\" → „am kleinsten\".",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wie lautet der Komparativ von „gut\"?",
        "optionen": [
          "guter",
          "am besten",
          "besser",
          "mehr gut"
        ],
        "richtig": 2,
        "erklaerung": "„gut\" ist unregelmäßig: gut → besser → am besten.",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "steigerung_bilden",
        "frage": "Bilde den Komparativ (unregelmäßig!):",
        "wort": "viel",
        "form": "komparativ",
        "richtig": "mehr",
        "erklaerung": "„viel\" → „mehr\" – unregelmäßig!",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "steigerung_bilden",
        "frage": "Bilde den Komparativ (unregelmäßig!):",
        "wort": "gern",
        "form": "komparativ",
        "richtig": "lieber",
        "erklaerung": "„gern\" → „lieber\" – unregelmäßig!",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "steigerung_ordnen",
        "frage": "Bringe in die richtige Reihenfolge:",
        "woerter": [
          "am liebsten",
          "lieber",
          "gern"
        ],
        "richtig": [
          "gern",
          "lieber",
          "am liebsten"
        ],
        "erklaerung": "gern → lieber → am liebsten. Alle unregelmäßig!",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Wie lautet der Superlativ von „viel\"?",
        "optionen": [
          "am vielsten",
          "am vielen",
          "am meisten",
          "am mehrsten"
        ],
        "richtig": 2,
        "erklaerung": "„am meisten\" – unregelmäßiger Superlativ von „viel\".",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Der Superlativ von „groß\" lautet „am größten\".",
        "richtig": true,
        "erklaerung": "Richtig! groß → größer → am größten.",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Der Komparativ von „gern\" lautet „gerner\".",
        "richtig": false,
        "erklaerung": "„gern\" ist unregelmäßig: gern → lieber → am liebsten. „gerner\" gibt es nicht!",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "steigerung_ordnen",
        "frage": "Bringe in die richtige Reihenfolge:",
        "woerter": [
          "am schnellsten",
          "schneller",
          "schnell"
        ],
        "richtig": [
          "schnell",
          "schneller",
          "am schnellsten"
        ],
        "erklaerung": "schnell → schneller → am schnellsten. Regelmäßig.",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„optimal\" kann man nicht steigern, weil es schon das Bestmögliche bedeutet.",
        "richtig": true,
        "erklaerung": "Richtig! „optimal\" ist ein absolutes Adjektiv – eine Steigerung ist nicht sinnvoll.",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "steigerung_bilden",
        "frage": "Bilde den Superlativ:",
        "wort": "gut",
        "form": "superlativ",
        "richtig": "am besten",
        "erklaerung": "„gut\" → „besser\" → „am besten\". Unregelmäßig!",
        "thema": [
          "steigerung"
        ]
      },
      {
        "typ": "steigerung_ordnen",
        "frage": "Bringe in die richtige Reihenfolge:",
        "woerter": [
          "am meisten",
          "mehr",
          "viel"
        ],
        "richtig": [
          "viel",
          "mehr",
          "am meisten"
        ],
        "erklaerung": "viel → mehr → am meisten. Unregelmäßig!",
        "thema": [
          "steigerung"
        ]
      },
    ],
  },


  // ╔══════════════════════════════════════════════════════════╗
  // ║  TEXTVERSTÄNDNIS                                         ║
  // ╚══════════════════════════════════════════════════════════╝

  textsorten: {
    theorie: {
      titel: "Textsorten",
      erklaerung: "Es gibt verschiedene Textsorten mit unterschiedlichen Merkmalen: Erzählung (spannend, Präteritum), Bericht (sachlich, W-Fragen), Brief (Anrede, Gruß), Beschreibung (genau, Präsens) und Argumentation (These, Begründung). Jede Textsorte hat eigene Regeln.",
      beispiel: "<span class=\"highlight\">Bericht:</span> Am Montag fand in der Schule ein Sportfest statt.",
      merkhilfe: "💡 Wer schreibt an wen und warum? Das entscheidet die Textsorte!",
      wie_erkennen: "Erzählung = Präteritum, Spannung. Bericht = sachlich, W-Fragen. Brief = Anrede + Gruß. Beschreibung = Präsens, genau. Argumentation = These + Begründung.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Was ist eine Erörterung?",
        "optionen": [
          "Ein Gedicht",
          "Eine sachliche Auseinandersetzung mit einem Thema",
          "Eine kurze Geschichte",
          "Ein Tagebucheintrag"
        ],
        "richtig": 1,
        "erklaerung": "Eine Erörterung setzt sich sachlich mit einem Thema auseinander (Pro- und Kontra-Argumente).",
        "thema": [
          "textsorten"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Textsorte erzählt eine fiktive Geschichte?",
        "optionen": [
          "Bericht",
          "Erzählung",
          "Zusammenfassung",
          "Lebenslauf"
        ],
        "richtig": 1,
        "erklaerung": "Eine Erzählung ist eine fiktive (erfundene) Geschichte mit Einleitung, Hauptteil und Schluss.",
        "thema": [
          "textsorten"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Ein Bericht ist sachlich und beantwortet die W-Fragen (Wer? Was? Wann? Wo? Wie? Warum?).",
        "richtig": true,
        "erklaerung": "Richtig! Berichte sind sachlich und beantworten die W-Fragen.",
        "thema": [
          "textsorten"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "In welcher Textsorte darf man seine eigene Meinung äußern?",
        "optionen": [
          "Bericht",
          "Zusammenfassung",
          "Kommentar",
          "Inhaltsangabe"
        ],
        "richtig": 2,
        "erklaerung": "Im Kommentar darf und soll man die eigene Meinung äußern.",
        "thema": [
          "textsorten"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Eine Inhaltsangabe wird im Präsens geschrieben.",
        "richtig": true,
        "erklaerung": "Richtig! Inhaltsangaben werden immer im Präsens verfasst.",
        "thema": [
          "textsorten"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Textsorte hat die Struktur: Einleitung – Hauptteil – Schluss?",
        "optionen": [
          "Nur Erzählungen",
          "Nur Erörterungen",
          "Fast alle Textsorten",
          "Nur Berichte"
        ],
        "richtig": 2,
        "erklaerung": "Fast alle Textsorten folgen dieser Grundstruktur.",
        "thema": [
          "textsorten"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was ist ein Leserbrief?",
        "optionen": [
          "Ein privater Brief",
          "Eine Reaktion auf einen Zeitungsartikel",
          "Ein Bewerbungsschreiben",
          "Ein Tagebucheintrag"
        ],
        "richtig": 1,
        "erklaerung": "Ein Leserbrief reagiert auf einen Zeitungsartikel und enthält die eigene Meinung.",
        "thema": [
          "textsorten"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "In einer Zusammenfassung darf man seine eigene Meinung hinzufügen.",
        "richtig": false,
        "erklaerung": "Falsch! Eine Zusammenfassung gibt nur den Inhalt wieder – sachlich und ohne eigene Meinung.",
        "thema": [
          "textsorten"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welche Textsorte wird in der Ich-Form geschrieben?",
        "optionen": [
          "Bericht",
          "Inhaltsangabe",
          "Tagebucheintrag",
          "Zusammenfassung"
        ],
        "richtig": 2,
        "erklaerung": "Ein Tagebucheintrag wird immer in der Ich-Form geschrieben.",
        "thema": [
          "textsorten"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "In welcher Zeitform schreibt man einen Bericht?",
        "optionen": [
          "Präsens",
          "Futur",
          "Präteritum",
          "Konjunktiv"
        ],
        "richtig": 2,
        "erklaerung": "Berichte werden im Präteritum (Vergangenheit) geschrieben.",
        "thema": [
          "textsorten"
        ]
      },
    ],
  },

  stilmittel: {
    theorie: {
      titel: "Stilmittel (Sprachliche Mittel)",
      erklaerung: "Stilmittel machen Texte lebendiger und wirkungsvoller. Häufige Stilmittel: Vergleich („schnell wie der Wind“), Metapher („Wüstenschiff“ für Kamel), Übertreibung („todmüde“), Personifikation („der Wind singt“) und Alliteration („Milch macht müde Männer munter“).",
      beispiel: "Er ist <span class=\"highlight\">schnell wie der Wind</span>. – Das ist ein Vergleich!",
      merkhilfe: "💡 Stilmittel = Sprach-Tricks, die Texte interessanter machen!",
      wie_erkennen: "Vergleich: „wie“-Wort. Metapher: bildlicher Ausdruck. Personifikation: Dinge handeln wie Menschen. Alliteration: gleicher Anfangsbuchstabe.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Was ist eine Metapher?",
        "optionen": [
          "Eine Übertreibung",
          "Ein bildhafter Vergleich ohne „wie\"",
          "Eine Wiederholung",
          "Ein Gegensatz"
        ],
        "richtig": 1,
        "erklaerung": "Eine Metapher ist ein bildhafter Ausdruck: „Das Leben ist eine Reise.\"",
        "thema": [
          "stilmittel"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was ist eine Alliteration?",
        "optionen": [
          "Gleicher Endreim",
          "Gleicher Anfangsbuchstabe in aufeinanderfolgenden Wörtern",
          "Übertreibung",
          "Verniedlichung"
        ],
        "richtig": 1,
        "erklaerung": "Alliteration: Gleicher Anlaut bei benachbarten Wörtern: „Milch macht müde Männer munter.\"",
        "thema": [
          "stilmittel"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„Er ist so stark wie ein Löwe\" ist ein Vergleich.",
        "richtig": true,
        "erklaerung": "Richtig! Ein Vergleich enthält das Wort „wie\": stark wie ein Löwe.",
        "thema": [
          "stilmittel"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was ist eine Hyperbel?",
        "optionen": [
          "Eine Untertreibung",
          "Eine Übertreibung",
          "Ein Vergleich",
          "Eine Wiederholung"
        ],
        "richtig": 1,
        "erklaerung": "Hyperbel = Übertreibung: „Ich habe dir das schon tausendmal gesagt!\"",
        "thema": [
          "stilmittel"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Stilmittel liegt vor? „Sein Herz aus Stein\"",
        "optionen": [
          "Vergleich",
          "Metapher",
          "Alliteration",
          "Personifikation"
        ],
        "richtig": 1,
        "erklaerung": "„Herz aus Stein\" = Metapher (bildhafter Ausdruck ohne „wie\").",
        "thema": [
          "stilmittel"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Bei einer Personifikation werden Tieren oder Dingen menschliche Eigenschaften zugeschrieben.",
        "richtig": true,
        "erklaerung": "Richtig! Personifikation: „Die Sonne lacht.\" – Die Sonne kann nicht wirklich lachen.",
        "thema": [
          "stilmittel"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Stilmittel ist „Fischers Fritz fischt frische Fische\"?",
        "optionen": [
          "Metapher",
          "Hyperbel",
          "Alliteration",
          "Personifikation"
        ],
        "richtig": 2,
        "erklaerung": "Alliteration: Viele Wörter beginnen mit dem gleichen Laut „F\".",
        "thema": [
          "stilmittel"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was ist eine rhetorische Frage?",
        "optionen": [
          "Eine Frage, die eine Antwort erwartet",
          "Eine Frage, auf die keine Antwort erwartet wird",
          "Eine Frage an den Lehrer",
          "Eine Frage im Konjunktiv"
        ],
        "richtig": 1,
        "erklaerung": "Rhetorische Frage: Die Antwort ist offensichtlich. „Wer will das schon?\"",
        "thema": [
          "stilmittel"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Welches Stilmittel ist „Der Wind heulte durch die Straßen\"?",
        "optionen": [
          "Metapher",
          "Alliteration",
          "Personifikation",
          "Hyperbel"
        ],
        "richtig": 2,
        "erklaerung": "Personifikation: Der Wind „heult\" – eine menschliche Handlung wird zugeschrieben.",
        "thema": [
          "stilmittel"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Ein Vergleich verwendet das Wort „wie\", eine Metapher nicht.",
        "richtig": true,
        "erklaerung": "Richtig! Vergleich: „stark wie ein Löwe\" | Metapher: „ein Löwe im Kampf\" (ohne „wie\").",
        "thema": [
          "stilmittel"
        ]
      },
    ],
  },

  fremdwoerter: {
    theorie: {
      titel: "Fremdwörter",
      erklaerung: "Fremdwörter stammen aus anderen Sprachen und wurden ins Deutsche übernommen. Viele kommen aus dem Lateinischen (Fenster ← fenestra), Griechischen (Telefon ← tele + phonein) oder Englischen (Computer, cool). Ihre Schreibung folgt oft den Regeln der Herkunftssprache.",
      beispiel: "Das <span class=\"highlight\">Telefon</span> klingelt im <span class=\"highlight\">Büro</span>.",
      merkhilfe: "💡 Viele Fremdwörter klingen „anders“ als deutsche Wörter – das hilft beim Erkennen!",
      wie_erkennen: "Typische Endungen: „-tion“ (Nation), „-ieren“ (telefonieren), „-ismus“ (Optimismus), „-tät“ (Qualität). Ungewöhnliche Buchstabenkombinationen: ph, th, rh.",
    },
    fragen: [
      {
        "typ": "multiple_choice",
        "frage": "Was bedeutet das Fremdwort „Telefon\"?",
        "optionen": [
          "Nahstimme",
          "Fernstimme / Fern-Sprecher",
          "Lautspiel",
          "Bildschirm"
        ],
        "richtig": 1,
        "erklaerung": "„Telefon\" – griechisch: tele (fern) + phone (Stimme).",
        "thema": [
          "fremdwoerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Aus welcher Sprache stammt das Wort „Computer\"?",
        "optionen": [
          "Französisch",
          "Griechisch",
          "Englisch",
          "Lateinisch"
        ],
        "richtig": 2,
        "erklaerung": "„Computer\" – englisch: to compute (berechnen).",
        "thema": [
          "fremdwoerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was bedeutet „Demokratie\"?",
        "optionen": [
          "Alleinherrschaft",
          "Volksherrschaft",
          "Militärherrschaft",
          "Kirchenherrschaft"
        ],
        "richtig": 1,
        "erklaerung": "„Demokratie\" – griechisch: demos (Volk) + kratos (Herrschaft).",
        "thema": [
          "fremdwoerter"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "Das Wort „Philosophie\" kommt aus dem Griechischen und bedeutet „Liebe zur Weisheit\".",
        "richtig": true,
        "erklaerung": "Richtig! philos (Freund/Liebe) + sophia (Weisheit).",
        "thema": [
          "fremdwoerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was bedeutet „Mikroskop\" wörtlich übersetzt?",
        "optionen": [
          "Großseher",
          "Fernseher",
          "Kleinseher",
          "Nahseher"
        ],
        "richtig": 2,
        "erklaerung": "„Mikroskop\" – griechisch: mikros (klein) + skopein (schauen).",
        "thema": [
          "fremdwoerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was ist der Unterschied zwischen „importieren\" und „exportieren\"?",
        "optionen": [
          "Kein Unterschied",
          "Import = einführen, Export = ausführen",
          "Import = ausführen, Export = einführen",
          "Beides bedeutet „kaufen\""
        ],
        "richtig": 1,
        "erklaerung": "Importieren = Waren einführen (in = hinein). Exportieren = Waren ausführen (ex = heraus).",
        "thema": [
          "fremdwoerter"
        ]
      },
      {
        "typ": "richtig_falsch",
        "frage": "Ist die Aussage richtig oder falsch?",
        "aussage": "„Toleranz\" kommt vom lateinischen Wort für „dulden\" (tolerare).",
        "richtig": true,
        "erklaerung": "Richtig! Toleranz = Duldsamkeit gegenüber anderen Meinungen.",
        "thema": [
          "fremdwoerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was bedeutet „Analyse\"?",
        "optionen": [
          "Zusammenfassung",
          "Genaue Untersuchung und Zerlegung",
          "Übersetzung",
          "Zusammenfügung"
        ],
        "richtig": 1,
        "erklaerung": "„Analyse\" – griechisch: analyein (auflösen, zerlegen).",
        "thema": [
          "fremdwoerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Was bedeutet „explizit\"?",
        "optionen": [
          "Versteckt, indirekt",
          "Ausdrücklich, direkt",
          "Unsicher",
          "Langsam"
        ],
        "richtig": 1,
        "erklaerung": "„explizit\" = ausdrücklich, klar formuliert. Gegenteil: „implizit\" (unausgesprochen).",
        "thema": [
          "fremdwoerter"
        ]
      },
      {
        "typ": "multiple_choice",
        "frage": "Aus welcher Sprache stammt „Restaurant\"?",
        "optionen": [
          "Englisch",
          "Griechisch",
          "Französisch",
          "Italienisch"
        ],
        "richtig": 2,
        "erklaerung": "„Restaurant\" – französisch: restaurer (wiederherstellen, stärken).",
        "thema": [
          "fremdwoerter"
        ]
      },
    ],
  },

};
