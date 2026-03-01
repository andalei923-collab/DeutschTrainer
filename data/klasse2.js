// ============================================================
//  data/klasse2.js – Welt 2: Aufbau der deutschen Sprache
//  Deutsch Trainer | Zielgruppe: 2. Klasse Mittelschule, 11–12 Jahre
//  Österreichischer Lehrplan
// ============================================================

const KLASSE2 = {
  welt:  2,
  titel: 'Welt 2 – Aufbau der deutschen Sprache',

  kategorien: [

    // ╔══════════════════════════════════════════════════════╗
    // ║  1. Wortarten – Pronomen, Präpositionen,            ║
    // ║     Konjunktionen                                   ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'wortarten2',
      titel: 'Wortarten II',
      farbe: '#a855f7',

      theorie: {
        titel: 'Pronomen, Präpositionen und Konjunktionen',
        erklaerung:
          '• Pronomen (Fürwörter):\n' +
          '  Ersetzen ein Nomen im Satz, damit man es nicht wiederholen muss.\n' +
          '  Personalpronomen: ich, du, er, sie, es, wir, ihr, sie/Sie\n' +
          '  Possessivpronomen: mein, dein, sein, ihr, unser, euer\n\n' +
          '• Präpositionen (Verhältniswörter):\n' +
          '  Zeigen Beziehungen zwischen Dingen (Ort, Zeit, Richtung).\n' +
          '  Beispiele: in, auf, unter, neben, mit, ohne, für, durch, vor, nach\n\n' +
          '• Konjunktionen (Bindewörter):\n' +
          '  Verbinden Sätze oder Satzteile miteinander.\n' +
          '  Nebenordnend: und, oder, aber, denn, doch\n' +
          '  Unterordnend: weil, dass, wenn, obwohl, damit, als',
        beispiel:
          'Pronomen:    „Maria spielt. Sie spielt gern." (sie ersetzt Maria)\n' +
          'Präposition: „Das Buch liegt auf dem Tisch." (auf = Präposition)\n' +
          'Konjunktion: „Ich lerne, weil morgen Prüfung ist." (weil = Konjunktion)',
        merkhilfe:
          'Pronomen: Kann ich es durch einen Namen ersetzen? → Pronomen!\n' +
          'Präposition: Zeigt es einen Ort, eine Richtung oder Zeit? → Präposition!\n' +
          'Konjunktion: Verbindet es zwei Sätze? → Konjunktion!',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort ist ein Pronomen (Fürwort)?',
          optionen:  ['Hund', 'er', 'laufen', 'schön'],
          richtig:   1,
          erklaerung: '"er" ist ein Personalpronomen – es ersetzt ein Nomen (z. B. „der Hund"). "Hund" ist ein Nomen, "laufen" ein Verb, "schön" ein Adjektiv.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort ist eine Präposition (Verhältniswort)?',
          optionen:  ['weil', 'sie', 'auf', 'schreiben'],
          richtig:   2,
          erklaerung: '"auf" ist eine Präposition – es zeigt eine Beziehung (Ort). "weil" ist eine Konjunktion, "sie" ein Pronomen, "schreiben" ein Verb.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort ist eine Konjunktion (Bindewort)?',
          optionen:  ['auf', 'ich', 'obwohl', 'Tisch'],
          richtig:   2,
          erklaerung: '"obwohl" ist eine Konjunktion – es verbindet zwei Sätze. "auf" ist eine Präposition, "ich" ein Pronomen, "Tisch" ein Nomen.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „wir" ist ein Pronomen.',
          richtig:   true,
          erklaerung: 'Richtig! „wir" ist ein Personalpronomen – es steht für eine Gruppe von Personen.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „aber" ist eine Präposition.',
          richtig:   false,
          erklaerung: 'Falsch! „aber" ist eine Konjunktion (Bindewort) – es verbindet gegensätzliche Satzteile. Präpositionen zeigen Beziehungen (in, auf, unter …).',
        },
        {
          typ:       'lueckentext',
          frage:     'Welches Wort ist eine Präposition und passt in den Satz?',
          satz:      'Das Buch liegt ___ dem Tisch.',
          optionen:  ['weil', 'auf', 'und', 'ich'],
          richtig:   'auf',
          erklaerung: '"auf" ist eine Präposition und zeigt den Ort: „Das Buch liegt auf dem Tisch."',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche der folgenden Wörter sind Konjunktionen? (Mehrere Antworten möglich)',
          optionen:  ['und', 'auf', 'weil', 'oder'],
          richtig:   [0, 2, 3],
          erklaerung: '"und", "weil" und "oder" sind Konjunktionen – sie verbinden Sätze oder Satzteile. "auf" ist eine Präposition.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  2. Grammatik – Die 4 Fälle (Kasus)                ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'vier_faelle',
      titel: 'Die 4 Fälle',
      farbe: '#e94560',

      theorie: {
        titel: 'Die 4 Fälle – Nominativ, Genitiv, Dativ, Akkusativ',
        erklaerung:
          'Im Deutschen gibt es vier Fälle (Kasus). Die Frage verrät dir, welcher Fall gemeint ist:\n\n' +
          '1. Nominativ → Wer oder was?\n' +
          '   Der Hund bellt.  (Wer bellt? → der Hund)\n\n' +
          '2. Genitiv → Wessen?\n' +
          '   Das Spielzeug des Hundes.  (Wessen Spielzeug? → des Hundes)\n\n' +
          '3. Dativ → Wem?\n' +
          '   Ich gebe dem Hund Futter.  (Wem gebe ich? → dem Hund)\n\n' +
          '4. Akkusativ → Wen oder was?\n' +
          '   Ich sehe den Hund.  (Wen sehe ich? → den Hund)',
        beispiel:
          'Artikel maskulin (der Hund):\n' +
          '  Nom.: der Hund     Gen.: des Hundes\n' +
          '  Dat.: dem Hund     Akk.: den Hund\n\n' +
          'Eselsbrücke: „Der Hund beißt den Mann." (Nom. → Akk.)',
        merkhilfe:
          'Merkhilfe Fragewörter:\n' +
          '  Nom. = Wer/Was?      → Subjekt im Satz\n' +
          '  Gen. = Wessen?       → Besitz\n' +
          '  Dat. = Wem?          → indirektes Objekt\n' +
          '  Akk. = Wen/Was?      → direktes Objekt\n\n' +
          'Trick: „Den" ist immer Akkusativ maskulin!',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Welcher Fall antwortet auf die Frage „Wer oder was?"',
          optionen:  ['Genitiv', 'Dativ', 'Nominativ', 'Akkusativ'],
          richtig:   2,
          erklaerung: 'Der Nominativ antwortet auf „Wer oder was?" – er zeigt das Subjekt des Satzes.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Fall antwortet auf die Frage „Wen oder was?"',
          optionen:  ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
          richtig:   1,
          erklaerung: 'Der Akkusativ antwortet auf „Wen oder was?" – er zeigt das direkte Objekt.',
        },
        {
          typ:       'multiple_choice',
          frage:     'In welchem Fall steht „dem Hund"?',
          optionen:  ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'],
          richtig:   2,
          erklaerung: '„dem Hund" steht im Dativ – Frage: Wem? „Ich gebe dem Hund Futter."',
        },
        {
          typ:       'lueckentext',
          frage:     'Nominativ – ergänze den richtigen Artikel:',
          satz:      '___ Hund bellt laut.',
          optionen:  ['Den', 'Dem', 'Des', 'Der'],
          richtig:   'Der',
          erklaerung: '"Der Hund" steht im Nominativ (Wer bellt?). Nom. maskulin → der.',
        },
        {
          typ:       'lueckentext',
          frage:     'Akkusativ – ergänze den richtigen Artikel:',
          satz:      'Ich sehe ___ Hund.',
          optionen:  ['der', 'dem', 'des', 'den'],
          richtig:   'den',
          erklaerung: '"den Hund" steht im Akkusativ (Wen sehe ich?). Akk. maskulin → den.',
        },
        {
          typ:       'lueckentext',
          frage:     'Dativ – ergänze den richtigen Artikel:',
          satz:      'Ich gebe ___ Hund einen Knochen.',
          optionen:  ['der', 'dem', 'den', 'des'],
          richtig:   'dem',
          erklaerung: '"dem Hund" steht im Dativ (Wem gebe ich?). Dat. maskulin → dem.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Das Kind spielt" steht „Das Kind" im Nominativ.',
          richtig:   true,
          erklaerung: 'Richtig! „Das Kind" ist das Subjekt (Wer spielt?) → Nominativ.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  3. Satzbau – Subjekt, Prädikat, Objekt             ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'satzbau',
      titel: 'Satzbau',
      farbe: '#0fd4c8',

      theorie: {
        titel: 'Satzbau – Subjekt, Prädikat, Objekt',
        erklaerung:
          'Jeder vollständige Satz besteht mindestens aus Subjekt und Prädikat:\n\n' +
          '• Subjekt:\n' +
          '  Wer oder was tut etwas? → steht immer im Nominativ\n' +
          '  Beispiel: „Die Katze schläft." → Die Katze = Subjekt\n\n' +
          '• Prädikat:\n' +
          '  Was wird getan? Was geschieht? → das Verb (oder die Verben) im Satz\n' +
          '  Beispiel: „Die Katze schläft." → schläft = Prädikat\n\n' +
          '• Objekt:\n' +
          '  Wen oder was? (Akkusativobjekt) / Wem? (Dativobjekt)\n' +
          '  Beispiel: „Ich lese das Buch." → das Buch = Akkusativobjekt\n\n' +
          'Wichtig: Nicht jeder Satz braucht ein Objekt!\n' +
          '  „Die Sonne scheint." → nur Subjekt + Prädikat, kein Objekt',
        beispiel:
          '       Subj.   Präd.   Obj.\n' +
          '„Mein Vater  liest   die Zeitung."\n' +
          '     ↑         ↑          ↑\n' +
          '  Wer?    Was tut er?  Wen/Was?',
        merkhilfe:
          'Fragemethode:\n' +
          '  Subjekt  → Wer oder was … [Verb]?\n' +
          '  Prädikat → Was tut das Subjekt? (= Verb)\n' +
          '  Objekt   → Wen/Was … [Verb] das Subjekt?',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Was ist das Subjekt im Satz „Die Katze schläft auf dem Sofa"?',
          optionen:  ['schläft', 'auf dem Sofa', 'Die Katze', 'dem Sofa'],
          richtig:   2,
          erklaerung: '"Die Katze" ist das Subjekt – Frage: Wer schläft? → Die Katze.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was ist das Prädikat im Satz „Mein Vater liest die Zeitung"?',
          optionen:  ['Mein Vater', 'die Zeitung', 'Mein', 'liest'],
          richtig:   3,
          erklaerung: '"liest" ist das Prädikat – es ist das Verb, das beschreibt, was das Subjekt tut.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was ist das Akkusativobjekt im Satz „Das Kind liest ein Buch"?',
          optionen:  ['Das Kind', 'liest', 'ein Buch', 'Kind'],
          richtig:   2,
          erklaerung: '"ein Buch" ist das Akkusativobjekt – Frage: Was liest das Kind? → ein Buch.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Der Hund bellt" ist „Der Hund" das Subjekt.',
          richtig:   true,
          erklaerung: 'Richtig! „Der Hund" beantwortet die Frage „Wer bellt?" → Subjekt.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Jeder Satz muss ein Objekt haben.',
          richtig:   false,
          erklaerung: 'Falsch! Ein Satz braucht nur Subjekt und Prädikat. Beispiel: „Die Sonne scheint." hat kein Objekt.',
        },
        {
          typ:       'lueckentext',
          frage:     'Das ___ eines Satzes antwortet auf die Frage „Wer oder was tut etwas?"',
          satz:      'Das ___ eines Satzes antwortet auf „Wer oder was tut etwas?"',
          optionen:  ['Prädikat', 'Objekt', 'Subjekt', 'Artikel'],
          richtig:   'Subjekt',
          erklaerung: 'Das Subjekt beantwortet „Wer oder was?" und steht immer im Nominativ.',
        },
        {
          typ:       'reihenfolge',
          frage:     'Bringe die Wörter in die richtige Reihenfolge (Subjekt – Prädikat – Objekt):',
          woerter:   ['liest', 'Buch', 'Mein', 'das', 'Vater'],
          richtig:   ['Mein', 'Vater', 'liest', 'das', 'Buch'],
          erklaerung: '„Mein Vater liest das Buch." – Subjekt: Mein Vater | Prädikat: liest | Objekt: das Buch',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  4. Zeitformen – Präsens, Präteritum, Perfekt       ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'zeitformen',
      titel: 'Zeitformen',
      farbe: '#f5a623',

      theorie: {
        titel: 'Zeitformen – Präsens, Präteritum und Perfekt',
        erklaerung:
          '• Präsens (Gegenwart):\n' +
          '  Etwas passiert jetzt oder ist immer wahr.\n' +
          '  Bildung: Stammform des Verbs + Endung\n' +
          '  „Ich lese ein Buch." / „Die Sonne geht im Osten auf."\n\n' +
          '• Präteritum (einfache Vergangenheit):\n' +
          '  Wird vor allem beim Schreiben (Erzählungen, Berichte) verwendet.\n' +
          '  Regelmäßig: Stamm + -(e)te  → spielte, redete\n' +
          '  Unregelmäßig: anderer Stamm → ging, war, hatte, sah\n\n' +
          '• Perfekt (zusammengesetzte Vergangenheit):\n' +
          '  Wird vor allem beim Sprechen verwendet.\n' +
          '  Bildung: haben ODER sein + Partizip II\n' +
          '  haben: ich habe gespielt, ich habe gelesen\n' +
          '  sein:  ich bin gegangen, ich bin gefahren',
        beispiel:
          'Präsens:    „Ich gehe in die Schule."\n' +
          'Präteritum: „Ich ging in die Schule."     (Vergangenheit, schriftlich)\n' +
          'Perfekt:    „Ich bin in die Schule gegangen." (Vergangenheit, mündlich)',
        merkhilfe:
          'Eselsbrücke:\n' +
          '  Präsens  = jetzt   (ich SPiele)\n' +
          '  Perfekt  = habe/bin + Partizip II  → Gespräch\n' +
          '  Präteritum = ging, war, hatte    → Schreiben\n\n' +
          'Hilfsverb bei Perfekt:\n' +
          '  Bewegung/Zustandswechsel → sein (gegangen, gefahren)\n' +
          '  Alles andere → haben (gespielt, gelesen)',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'In welcher Zeitform steht der Satz „Ich esse gerade eine Pizza"?',
          optionen:  ['Präteritum', 'Präsens', 'Perfekt', 'Futur'],
          richtig:   1,
          erklaerung: '"Ich esse" beschreibt etwas, das gerade jetzt passiert → Präsens.',
        },
        {
          typ:       'multiple_choice',
          frage:     'In welcher Zeitform steht „Er hat gespielt"?',
          optionen:  ['Präsens', 'Präteritum', 'Perfekt', 'Futur'],
          richtig:   2,
          erklaerung: '"hat gespielt" = Hilfsverb (hat) + Partizip II (gespielt) → Perfekt.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Wie lautet das Präteritum von „gehen"?',
          optionen:  ['gegehte', 'gehte', 'ging', 'gegangen'],
          richtig:   2,
          erklaerung: '"gehen" ist unregelmäßig: gehe → ging → gegangen. „Ich ging" ist das Präteritum.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle die richtige Präteritum-Form:',
          satz:      'Gestern ___ ich ins Kino.',
          optionen:  ['gehe', 'ging', 'gegangen', 'gehen'],
          richtig:   'ging',
          erklaerung: '„ging" ist das Präteritum von „gehen". „Gestern" zeigt, dass die Vergangenheit gemeint ist.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle das richtige Hilfsverb für das Perfekt:',
          satz:      'Ich ___ heute schon zu Mittag gegessen.',
          optionen:  ['hatte', 'habe', 'war', 'bin'],
          richtig:   'habe',
          erklaerung: '"essen" bildet das Perfekt mit „haben": ich habe gegessen. (Keine Bewegung → haben!)',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Perfekt wird immer mit dem Hilfsverb „haben" gebildet.',
          richtig:   false,
          erklaerung: 'Falsch! Das Perfekt wird mit „haben" ODER „sein" gebildet. Bewegungsverben nehmen „sein": ich bin gegangen, ich bin gefahren.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Präteritum wird vor allem beim Schreiben von Erzählungen verwendet.',
          richtig:   true,
          erklaerung: 'Richtig! Das Präteritum ist die typische Zeitform beim Erzählen und Schreiben. Im Gespräch bevorzugt man das Perfekt.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  5. Rechtschreibung – das/dass, v/f, Dehnungs-h     ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'rechtschreibung2',
      titel: 'Rechtschreibung II',
      farbe: '#4ade80',

      theorie: {
        titel: 'das/dass · v/f-Regel · Dehnungs-h',
        erklaerung:
          '1. das / dass:\n' +
          '  „das" = Artikel oder Pronomen (zeigt auf ein Nomen)\n' +
          '     → Man kann „welches" dafür einsetzen: „das Buch" → „welches Buch"\n' +
          '  „dass" = Konjunktion (leitet einen Nebensatz ein)\n' +
          '     → Man kann „weil" oder „ob" einsetzen zum Testen\n\n' +
          '2. v / f – Regel:\n' +
          '  In deutschen Wörtern klingt „v" wie „f\": Vogel, Vater, vor, von\n' +
          '  In Fremdwörtern klingt „v" wie „w\": Vase, Violine, Virus\n' +
          '  Bei Unsicherheit: deutsche Wörter → v; Fisch, fahren, fragen → f\n\n' +
          '3. Dehnungs-h:\n' +
          '  Ein stilles „h" nach einem Vokal macht diesen lang: Fahrt, nehmen, Mehl\n' +
          '  Das h hört man NICHT, es dehnt nur den Vokal!',
        beispiel:
          'das/dass:   „Ich sehe das Buch." (Artikel)\n' +
          '            „Ich glaube, dass es regnet." (Konjunktion)\n\n' +
          'v/f:        Vogel, Vater, viel → klingt wie f\n' +
          '            Fisch, fahren → schreibt man mit f\n\n' +
          'Dehnungs-h: Fahrt, Mehl, Stahl, nehmen, Wahl, Zahl',
        merkhilfe:
          'das / dass: Ersetze durch „welches" → „das"! Geht nicht? → „dass"!\n' +
          'v/f:        Deutsches Wort + klingt wie f? → meist v (Vogel, Vater)\n' +
          'Dehnungs-h: Klingt der Vokal lang und kommt ein h? → Dehnungs-h!',
      },

      fragen: [
        {
          typ:       'lueckentext',
          frage:     'das oder dass? Wähle die richtige Form:',
          satz:      'Ich weiß, ___ du recht hast.',
          optionen:  ['das', 'dass', 'daß', 'denn'],
          richtig:   'dass',
          erklaerung: '„dass" leitet hier einen Nebensatz ein (Konjunktion). Test: „Ich weiß, weil du recht hast" → klingt ähnlich → „dass"!',
        },
        {
          typ:       'lueckentext',
          frage:     'das oder dass? Wähle die richtige Form:',
          satz:      'Siehst du ___ Haus dort drüben?',
          optionen:  ['dass', 'das', 'daß', 'denn'],
          richtig:   'das',
          erklaerung: '„das" ist hier ein Artikel vor dem Nomen „Haus". Test: „welches Haus" → funktioniert → „das"!',
        },
        {
          typ:        'satz_korrigieren',
          frage:      'Finde das falsch geschriebene Wort und klicke darauf:',
          satz:       'Ich glaube, das du heute kommst.',
          fehlerWort: 'das',
          erklaerung: '„das" muss hier „dass" sein – es leitet einen Nebensatz ein (Konjunktion). Test: „dass" kann man nicht durch „welches" ersetzen.',
        },
        {
          typ:        'satz_korrigieren',
          frage:      'Finde das falsch geschriebene Wort und klicke darauf:',
          satz:       'Der Fogel singt ein schönes Lied.',
          fehlerWort: 'Fogel',
          erklaerung: '"Vogel" schreibt man mit „V", nicht mit „F". In deutschen Wörtern klingt „v" wie „f": Vogel, Vater, vor, von.',
        },
        {
          typ:       'multiple_choice',
          frage:     'In welchem Wort steckt ein Dehnungs-h?',
          optionen:  ['laufen', 'Tisch', 'Fahrt', 'Hund'],
          richtig:   2,
          erklaerung: '„Fahrt" hat ein Dehnungs-h: F-a-h-r-t. Das „h" macht das „a" lang, wird aber selbst nicht gesprochen.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „nehmen" enthält ein Dehnungs-h.',
          richtig:   true,
          erklaerung: 'Richtig! „nehmen" → n-e-h-m-e-n. Das „h" nach dem „e" macht das „e" lang (gedehnt), wird aber nicht gesprochen.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welche Schreibweise ist korrekt?',
          optionen:  ['Fater', 'Vater', 'Wather', 'Vaater'],
          richtig:   1,
          erklaerung: '"Vater" ist richtig – „v" wird am Anfang deutscher Wörter wie „f" gesprochen: Vater, Vogel, vor, von.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  6. Synonyme – im Kontext erkennen                  ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'synonyme2',
      titel: 'Synonyme im Kontext',
      farbe: '#a855f7',

      theorie: {
        titel: 'Synonyme im Kontext – das passende Synonym wählen',
        erklaerung:
          'Synonyme sind Wörter mit ähnlicher Bedeutung. Aber Vorsicht:\n' +
          'Nicht jedes Synonym passt in jedem Satz gleich gut!\n\n' +
          'Beim Wählen eines Synonyms muss man auf den Kontext (Zusammenhang) achten:\n\n' +
          '• Bedeutungsunterschied: „sehen" und „starren" sind Synonyme,\n' +
          '  aber „starren" bedeutet „intensiv und lange schauen".\n\n' +
          '• Stilebene: „gehen" und „schreiten" sind Synonyme,\n' +
          '  aber „schreiten" klingt feierlicher und gehobener.\n\n' +
          '• Bedeutungsfeld: „mutig" und „tapfer" sind fast gleich,\n' +
          '  aber „tapfer" klingt eher in schwierigen Situationen passend.',
        beispiel:
          'Das Kind war nach dem Schultag völlig erschöpft.\n' +
          'Synonym: müde – aber erschöpft ist stärker!\n\n' +
          'Der Zeuge bemerkte das Auto.\n' +
          'Synonym: wahrnahm / sah – passt besser als „beobachtete"',
        merkhilfe:
          'Tipp: Lies den ganzen Satz! Welches Synonym passt am besten zum Kontext?\n' +
          'Überlege: Ist das Synonym zu stark, zu schwach oder genau richtig?',
      },

      fragen: [
        {
          typ:       'synonym_finden',
          frage:     'Was ist ein passendes Synonym für „bemerken"?',
          optionen:  ['vergessen', 'wahrnehmen', 'schlafen', 'verlieren'],
          richtig:   1,
          erklaerung: '"wahrnehmen" ist ein Synonym für "bemerken" – beide bedeuten, dass man etwas mit den Sinnen erfasst.',
        },
        {
          typ:       'synonym_finden',
          frage:     'Was ist ein Synonym für „gefährlich"?',
          optionen:  ['sicher', 'riskant', 'langweilig', 'leicht'],
          richtig:   1,
          erklaerung: '"riskant" ist ein Synonym für "gefährlich" – beide beschreiben etwas, das Schaden bringen kann.',
        },
        {
          typ:       'synonym_finden',
          frage:     'Was ist ein Synonym für „außerordentlich"?',
          optionen:  ['gewöhnlich', 'normal', 'besonders', 'alltäglich'],
          richtig:   2,
          erklaerung: '"besonders" ist ein Synonym für "außerordentlich" – beide bedeuten, dass etwas über das Normale hinausgeht.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle das passende Synonym für „müde" im Kontext:',
          satz:      'Nach dem langen Wandertag war das Kind völlig ___.',
          optionen:  ['erschöpft', 'fröhlich', 'wütend', 'hungrig'],
          richtig:   'erschöpft',
          erklaerung: '"erschöpft" ist ein stärkeres Synonym für "müde" – es passt, wenn man wirklich keine Kraft mehr hat.',
        },
        {
          typ:       'synonym_verbinden',
          frage:     'Verbinde die Synonyme: Klicke zuerst links, dann auf das passende Wort rechts.',
          paare: [
            ['mutig',    'tapfer'     ],
            ['einfach',  'leicht'     ],
            ['sprechen', 'reden'      ],
            ['kaufen',   'erwerben'   ],
          ],
          erklaerung: 'Richtige Paare: mutig ↔ tapfer | einfach ↔ leicht | sprechen ↔ reden | kaufen ↔ erwerben',
        },
        {
          typ:       'synonym_verbinden',
          frage:     'Verbinde die Synonyme: Klicke zuerst links, dann auf das passende Wort rechts.',
          paare: [
            ['Arbeit',   'Tätigkeit'  ],
            ['bemerken', 'wahrnehmen' ],
            ['Fehler',   'Irrtum'     ],
            ['alt',      'betagt'     ],
          ],
          erklaerung: 'Richtige Paare: Arbeit ↔ Tätigkeit | bemerken ↔ wahrnehmen | Fehler ↔ Irrtum | alt ↔ betagt',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  7. Homonyme – im Satz zuordnen                     ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'homonyme2',
      titel: 'Homonyme im Satz',
      farbe: '#0fd4c8',

      theorie: {
        titel: 'Homonyme – Kontext bestimmt die Bedeutung',
        erklaerung:
          'Homonyme sind Wörter, die gleich geschrieben werden, aber verschiedene Bedeutungen haben.\n\n' +
          'Neue Homonyme für Klasse 2:\n\n' +
          '• Tor:\n' +
          '  1. Durchgang (das Stadttor, das Gartentor)\n' +
          '  2. Treffer beim Sport (ein Tor schießen)\n\n' +
          '• Mutter:\n' +
          '  1. Weiblicher Elternteil\n' +
          '  2. Schraubenmutter (Metallring zum Befestigen)\n\n' +
          '• Kiefer:\n' +
          '  1. Kieferknochen (Teil des Gesichts)\n' +
          '  2. Koniferenbaum (der Kiefer-Baum)\n\n' +
          '• Leiter:\n' +
          '  1. Steigleiter (Gerät zum Klettern)\n' +
          '  2. Anführer/Chef (der Leiter einer Gruppe)',
        beispiel:
          '„Der Stürmer schoss ein Tor." → Sporttreffer\n' +
          '„Das Tor zum Schloss ist geschlossen." → Durchgang\n\n' +
          '„Meine Mutter kocht Suppe." → Elternteil\n' +
          '„Die Mutter am Fahrrad ist locker." → Schraubenmutter',
        merkhilfe:
          'Schlüsselregel: Lies immer den gesamten Satz!\n' +
          'Die Wörter rund um das Homonym (= der Kontext) verraten dir, welche Bedeutung gemeint ist.',
      },

      fragen: [
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Tor" in diesem Satz?',
          satz:      'Der Stürmer schoss in der letzten Minute ein Tor.',
          optionen:  ['Eingangstor', 'Treffer beim Sport', 'Stadtmauer', 'Fenster'],
          richtig:   1,
          erklaerung: '„Schießen" und der sportliche Kontext zeigen: Hier ist ein Treffer beim Fußball gemeint.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Tor" in diesem Satz?',
          satz:      'Das schwere Tor des alten Schlosses knarrte laut.',
          optionen:  ['Sporttreffer', 'Durchgang / Eingang', 'Fenster', 'Brücke'],
          richtig:   1,
          erklaerung: '„Schloss" und „knarren" zeigen: Hier ist ein großes Eingangstor (Durchgang) gemeint.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Mutter" in diesem Satz?',
          satz:      'Meine Mutter backt jeden Sonntag einen Kuchen.',
          optionen:  ['Schraubenmutter', 'Weiblicher Elternteil', 'Schwester', 'Lehrerin'],
          richtig:   1,
          erklaerung: 'Die Handlung „backen" und der familiäre Kontext zeigen: Hier ist der weibliche Elternteil gemeint.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Mutter" in diesem Satz?',
          satz:      'Der Mechaniker dreht die Mutter mit dem Schraubenschlüssel fest.',
          optionen:  ['Weiblicher Elternteil', 'Schraubenmutter', 'Werkzeug', 'Schraube'],
          richtig:   1,
          erklaerung: '"Schraubenschlüssel" und "drehen" zeigen: Hier ist der Metallring (Schraubenmutter) gemeint.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Leiter" in diesem Satz?',
          satz:      'Der Leiter der Schule begrüßte alle Schülerinnen und Schüler.',
          optionen:  ['Klettergerät', 'Anführer / Chef', 'Metall', 'Werkzeug'],
          richtig:   1,
          erklaerung: '„Der Leiter der Schule" = der Direktor (Anführer/Chef). Kletterleiter würde nicht in diesen Satz passen.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „Kiefer" kann sowohl einen Körperteil als auch einen Baum bezeichnen.',
          richtig:   true,
          erklaerung: 'Richtig! „Kiefer" ist ein Homonym: 1. Kieferknochen (Körperteil) und 2. Kiefer-Baum (Nadelbaum).',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was sind Homonyme?',
          optionen:  ['Wörter mit ähnlicher Bedeutung', 'Wörter mit mehreren Bedeutungen', 'Wörter mit vielen Silben', 'Eigenschaftswörter'],
          richtig:   1,
          erklaerung: 'Homonyme sind Wörter, die gleich geschrieben oder gesprochen werden, aber verschiedene Bedeutungen haben.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  8. Steigerungsformen – unregelmäßige Formen        ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'steigerung2',
      titel: 'Steigerungsformen II',
      farbe: '#f5a623',

      theorie: {
        titel: 'Unregelmäßige Steigerungsformen',
        erklaerung:
          'Die meisten Adjektive werden regelmäßig gesteigert (+er / am …-sten).\n' +
          'Einige wichtige Adjektive sind aber UNREGELMÄSSIG – diese muss man auswendig lernen!\n\n' +
          'Unregelmäßige Formen:\n\n' +
          '  gut    → besser    → am besten\n' +
          '  viel   → mehr      → am meisten\n' +
          '  gern   → lieber    → am liebsten\n' +
          '  hoch   → höher     → am höchsten\n' +
          '  nah    → näher     → am nächsten\n\n' +
          'Regelmäßige Formen zur Wiederholung:\n' +
          '  groß   → größer    → am größten\n' +
          '  alt    → älter     → am ältesten\n' +
          '  schnell→ schneller  → am schnellsten',
        beispiel:
          '„Dieser Kuchen ist gut."\n' +
          '„Der andere Kuchen ist noch besser."\n' +
          '„Das ist der beste Kuchen!"\n\n' +
          '„Ich spiele gern Fußball."\n' +
          '„Tennis spiele ich lieber."\n' +
          '„Am liebsten spiele ich Schach."',
        merkhilfe:
          'Die 3 wichtigsten unregelmäßigen Steigerungen:\n' +
          '  gut → besser → am besten   (häufigste Ausnahme!)\n' +
          '  viel → mehr → am meisten\n' +
          '  gern → lieber → am liebsten\n\n' +
          'Tipp: Diese Formen lernt man am besten durch viel Lesen und Üben!',
      },

      fragen: [
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Komparativ (unregelmäßig!):',
          wort:      'gut',
          form:      'komparativ',
          richtig:   'besser',
          erklaerung: '"gut" → "besser" – unregelmäßige Form! Nicht "guter"! Beispiel: „Dieser Plan ist besser als der alte."',
        },
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Superlativ (unregelmäßig!):',
          wort:      'gut',
          form:      'superlativ',
          richtig:   'am besten',
          erklaerung: '"gut" → "besser" → "am besten". Unregelmäßig! Nicht "am gutesten"!',
        },
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Komparativ (unregelmäßig!):',
          wort:      'viel',
          form:      'komparativ',
          richtig:   'mehr',
          erklaerung: '"viel" → "mehr" – unregelmäßige Form! Nicht "vieler". Beispiel: „Er hat mehr Zeit als ich."',
        },
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Komparativ (unregelmäßig!):',
          wort:      'gern',
          form:      'komparativ',
          richtig:   'lieber',
          erklaerung: '"gern" → "lieber" – unregelmäßige Form! Nicht "gerner". Beispiel: „Ich esse lieber Pizza als Salat."',
        },
        {
          typ:       'steigerung_ordnen',
          frage:     'Bringe die Steigerungsformen in die richtige Reihenfolge (Grundform → Komparativ → Superlativ):',
          woerter:   ['am liebsten', 'lieber', 'gern'],
          richtig:   ['gern', 'lieber', 'am liebsten'],
          erklaerung: 'gern (Grundform) → lieber (Komparativ) → am liebsten (Superlativ). Alle drei Formen sind unregelmäßig!',
        },
        {
          typ:       'steigerung_ordnen',
          frage:     'Bringe die Steigerungsformen in die richtige Reihenfolge:',
          woerter:   ['am meisten', 'mehr', 'viel'],
          richtig:   ['viel', 'mehr', 'am meisten'],
          erklaerung: 'viel → mehr → am meisten. Unregelmäßige Steigerung!',
        },
        {
          typ:       'multiple_choice',
          frage:     'Wie lautet der Superlativ von „viel"?',
          optionen:  ['am vielsten', 'am vielen', 'am meisten', 'am mehrsten'],
          richtig:   2,
          erklaerung: '"am meisten" ist der unregelmäßige Superlativ von "viel". Nicht "am vielsten" – das gibt es nicht!',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Der Komparativ von „gern" lautet „gerner".',
          richtig:   false,
          erklaerung: 'Falsch! „gern" ist unregelmäßig: gern → lieber → am liebsten. „gerner" gibt es nicht!',
        },
      ],
    },

  ], // end kategorien
};


// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KLASSE2;
}
