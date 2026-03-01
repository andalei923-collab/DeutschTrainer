// ============================================================
//  data/klasse3.js – Welt 3: Vertiefung der deutschen Sprache
//  Deutsch Trainer | Zielgruppe: 3. Klasse Mittelschule, 12–13 Jahre
//  Österreichischer Lehrplan
// ============================================================

const KLASSE3 = {
  welt:  3,
  titel: 'Welt 3 – Vertiefung der deutschen Sprache',

  kategorien: [

    // ╔══════════════════════════════════════════════════════╗
    // ║  1. Grammatik – Satzglieder & Nebensätze            ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'satzglieder',
      titel: 'Satzglieder & Nebensätze',
      farbe: '#a855f7',

      theorie: {
        titel: 'Satzglieder – alle Bausteine eines Satzes',
        erklaerung:
          'Ein Satz besteht aus mehreren Satzgliedern:\n\n' +
          '• Subjekt (Wer/Was?) → steht im Nominativ\n' +
          '  „Der Schüler lernt."\n\n' +
          '• Prädikat (Was tut er?) → das Verb\n' +
          '  „Der Schüler lernt."\n\n' +
          '• Akkusativobjekt (Wen/Was?) → direktes Objekt\n' +
          '  „Er liest das Buch."\n\n' +
          '• Dativobjekt (Wem?) → indirektes Objekt\n' +
          '  „Er gibt der Lehrerin das Heft."\n\n' +
          '• Adverbiale Bestimmung (Wo? Wann? Wie? Warum?)\n' +
          '  Ort: „Er liest im Garten."\n' +
          '  Zeit: „Er liest jeden Abend."\n' +
          '  Art: „Er liest aufmerksam."\n\n' +
          '• Genitivattribut (Wessen?) → gibt Besitz an\n' +
          '  „Das Buch des Schülers liegt hier."',
        beispiel:
          '       Subj.     Präd.    Dat.Obj.   Akk.Obj.\n' +
          '„Die Lehrerin  erklärt  den Schülern  die Aufgabe."\n\n' +
          'Adverbiale: „Er liest jeden Abend ruhig im Zimmer."\n' +
          '             Zeit: jeden Abend | Art: ruhig | Ort: im Zimmer',
        merkhilfe:
          'Fragemethode für Satzglieder:\n' +
          '  Subjekt        → Wer/Was … [Verb]?\n' +
          '  Akkusativobjekt→ Wen/Was … [Verb] das Subjekt?\n' +
          '  Dativobjekt    → Wem … [Verb] das Subjekt?\n' +
          '  Adv. Ort       → Wo?\n' +
          '  Adv. Zeit      → Wann?\n' +
          '  Adv. Art       → Wie?\n' +
          '  Genitivattribut→ Wessen?',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Welche Frage stellt man nach einer adverbialen Bestimmung des Ortes?',
          optionen:  ['Wer?', 'Was?', 'Wo?', 'Wem?'],
          richtig:   2,
          erklaerung: 'Die adverbiale Bestimmung des Ortes beantwortet die Frage „Wo?". Beispiel: „Er sitzt im Garten." → Wo sitzt er? Im Garten.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was ist das Dativobjekt im Satz „Sie gibt dem Bruder das Buch"?',
          optionen:  ['Sie', 'gibt', 'dem Bruder', 'das Buch'],
          richtig:   2,
          erklaerung: '„dem Bruder" ist das Dativobjekt – Frage: Wem gibt sie das Buch? → dem Bruder.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was ist das Genitivattribut im Satz „Das Fahrrad des Nachbars ist rot"?',
          optionen:  ['Das Fahrrad', 'des Nachbars', 'ist', 'rot'],
          richtig:   1,
          erklaerung: '„des Nachbars" ist ein Genitivattribut – es gibt Besitz an (Wessen Fahrrad? → des Nachbars).',
        },
        {
          typ:       'lueckentext',
          frage:     'Welches Satzglied antwortet auf die Frage „Wann"?',
          satz:      'Die adverbiale Bestimmung der ___ antwortet auf „Wann?".',
          optionen:  ['Ort', 'Art', 'Zeit', 'Grund'],
          richtig:   'Zeit',
          erklaerung: 'Die adverbiale Bestimmung der Zeit beantwortet „Wann?". Beispiel: „Er kommt morgen." → Wann? morgen.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Das Mädchen liest aufmerksam" ist „aufmerksam" eine adverbiale Bestimmung der Art.',
          richtig:   true,
          erklaerung: 'Richtig! „aufmerksam" beantwortet die Frage „Wie liest das Mädchen?" → adverbiale Bestimmung der Art.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Jeder Satz muss eine adverbiale Bestimmung enthalten.',
          richtig:   false,
          erklaerung: 'Falsch! Ein Satz braucht nur Subjekt und Prädikat. Adverbiale Bestimmungen sind optional.',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche Wörter/Gruppen sind Satzglieder im Satz „Der Hund bellt laut im Garten"? (Mehrere Antworten möglich)',
          optionen:  ['Der Hund', 'bellt', 'laut', 'im Garten'],
          richtig:   [0, 1, 2, 3],
          erklaerung: 'Alle vier sind Satzglieder: Der Hund (Subjekt), bellt (Prädikat), laut (adv. Art), im Garten (adv. Ort).',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  2. Satzbau – Haupt- & Nebensatz                    ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'haupt_nebensatz',
      titel: 'Haupt- & Nebensatz',
      farbe: '#e94560',

      theorie: {
        titel: 'Hauptsatz und Nebensatz',
        erklaerung:
          '• Hauptsatz:\n' +
          '  Kann allein stehen – er ergibt für sich allein einen Sinn.\n' +
          '  Das Verb steht an 2. Stelle.\n' +
          '  „Ich gehe heute in die Schule."\n\n' +
          '• Nebensatz:\n' +
          '  Kann NICHT allein stehen – er braucht einen Hauptsatz.\n' +
          '  Wird durch ein Einleitewort (Konjunktion oder Relativpronomen) eingeleitet.\n' +
          '  Das Verb steht am ENDE des Nebensatzes!\n\n' +
          'Einleitewörter für Nebensätze:\n' +
          '  Kausalsatz (Grund):    weil, da\n' +
          '  Konditionalsatz (Bed.):wenn, falls\n' +
          '  Konzessivsatz (Einr.): obwohl, obgleich\n' +
          '  Objektsatz:            dass\n' +
          '  Relativsatz:           der, die, das, welcher …\n\n' +
          'Stellung: Der Nebensatz kann vor oder nach dem Hauptsatz stehen.\n' +
          '  Vorne: „Weil es regnet, bleibe ich zu Hause."\n' +
          '  Hinten: „Ich bleibe zu Hause, weil es regnet."',
        beispiel:
          'HS: „Ich lerne Deutsch."        (steht allein – vollständig)\n' +
          'NS: „… weil ich es mag."        (braucht einen HS – unvollständig)\n\n' +
          'Verbstellung im NS:\n' +
          '  HS: „Ich weiß, [dass er morgen kommt.]"\n' +
          '                                  ↑ Verb am Ende!',
        merkhilfe:
          'Test für Hauptsatz: Ergibt der Satz allein Sinn? → Hauptsatz!\n' +
          'Test für Nebensatz: Beginnt der Satz mit weil/dass/obwohl/wenn/der …? → Nebensatz!\n' +
          'Verb im Nebensatz: IMMER ans Ende! „… weil ich heute müde bin."',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Wo steht das Verb im Nebensatz?',
          optionen:  ['An erster Stelle', 'An zweiter Stelle', 'Am Ende', 'Vor dem Subjekt'],
          richtig:   2,
          erklaerung: 'Im Nebensatz steht das Verb immer am Ende: „… weil er heute müde ist." Das Verb „ist" steht ganz am Ende.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz ist ein Hauptsatz?',
          optionen:  ['weil er krank ist', 'obwohl sie übt', 'Der Hund bellt laut.', 'dass du kommst'],
          richtig:   2,
          erklaerung: '„Der Hund bellt laut." ist ein Hauptsatz – er ergibt allein einen Sinn und hat kein Einleitewort.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle das passende Einleitewort für einen Kausalsatz (Grund):',
          satz:      'Ich nehme einen Regenschirm mit, ___ es regnet.',
          optionen:  ['obwohl', 'wenn', 'weil', 'dass'],
          richtig:   'weil',
          erklaerung: '„weil" leitet einen Kausalsatz ein (Grund). „weil es regnet" → gibt den Grund an.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Ein Nebensatz kann allein als vollständiger Satz verwendet werden.',
          richtig:   false,
          erklaerung: 'Falsch! Ein Nebensatz braucht immer einen Hauptsatz. „weil er müde ist" allein ergibt keinen vollständigen Satz.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Ich lerne, obwohl ich müde bin" steht „obwohl ich müde bin" im Nebensatz.',
          richtig:   true,
          erklaerung: 'Richtig! „obwohl" leitet den Nebensatz ein, und das Verb „bin" steht am Ende → Nebensatz.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort leitet einen Konzessivsatz (Einräumung) ein?',
          optionen:  ['weil', 'dass', 'obwohl', 'wenn'],
          richtig:   2,
          erklaerung: '"obwohl" leitet einen Konzessivsatz ein – er drückt einen Widerspruch aus: „Obwohl es regnet, gehe ich spazieren."',
        },
        {
          typ:       'reihenfolge',
          frage:     'Bringe die Wörter in die richtige Reihenfolge (Nebensatz mit „weil"):',
          woerter:   ['nicht', 'weil', 'bin', 'ich', 'da', 'ich'],
          richtig:   ['ich', 'bin', 'nicht', 'da', 'weil', 'ich'],
          erklaerung: '„… weil ich nicht da bin." – Im Nebensatz mit „weil" steht das Verb (bin) am Ende.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  3. Zeichensetzung – Beistrich bei Nebensätzen      ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'zeichensetzung',
      titel: 'Zeichensetzung',
      farbe: '#0fd4c8',

      theorie: {
        titel: 'Beistrich (Komma) bei Nebensätzen',
        erklaerung:
          'Der Beistrich trennt Haupt- und Nebensatz voneinander:\n\n' +
          '1. Nebensatz nach dem Hauptsatz:\n' +
          '   Hauptsatz [,] Nebensatz\n' +
          '   „Ich bleibe zu Hause[,] weil es regnet."\n\n' +
          '2. Nebensatz vor dem Hauptsatz:\n' +
          '   Nebensatz [,] Hauptsatz\n' +
          '   „Weil es regnet[,] bleibe ich zu Hause."\n\n' +
          '3. Eingeschobener Nebensatz (Relativsatz):\n' +
          '   HS-Teil [,] Nebensatz [,] HS-Rest\n' +
          '   „Das Buch[,] das ich lese[,] ist spannend."\n\n' +
          'Wichtig: Vor „und", „oder", „aber" zwischen zwei Hauptsätzen steht\n' +
          'KEIN zwingender Beistrich, wenn kein Nebensatz folgt.\n' +
          '  „Er liest und sie schreibt." → kein Beistrich nötig\n' +
          '  „Er liest, aber sie schläft." → Beistrich möglich (Gegensatz)',
        beispiel:
          'NS hinten: „Ich lerne Deutsch, weil es mir Spaß macht."\n' +
          'NS vorne:  „Weil es mir Spaß macht, lerne ich Deutsch."\n' +
          'Relativsatz: „Das Mädchen, das singt, ist meine Schwester."\n\n' +
          'Merke: Steht der NS vorne, kommt danach das Verb des HS!',
        merkhilfe:
          'Beistrich-Regel für NS:\n' +
          '  → Immer Beistrich zwischen Haupt- und Nebensatz!\n' +
          '  → Einleitewörter wie weil, dass, obwohl, wenn, der/die/das … → Beistrich davor!\n' +
          'Trick: Findest du ein Einleitewort? → Beistrich!',
      },

      fragen: [
        {
          typ:        'satz_korrigieren',
          frage:      'Finde das fehlende Satzzeichen – klicke auf das Wort VOR dem der Beistrich fehlt:',
          satz:       'Ich gehe spazieren weil die Sonne scheint.',
          fehlerWort: 'spazieren',
          erklaerung: 'Vor „weil" muss ein Beistrich stehen: „Ich gehe spazieren, weil die Sonne scheint."',
        },
        {
          typ:        'satz_korrigieren',
          frage:      'Finde das fehlende Satzzeichen – klicke auf das Wort VOR dem der Beistrich fehlt:',
          satz:       'Das Buch das auf dem Tisch liegt gehört mir.',
          fehlerWort: 'Buch',
          erklaerung: 'Vor einem eingeschobenen Relativsatz steht ein Beistrich: „Das Buch, das auf dem Tisch liegt, gehört mir."',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz ist richtig gesetzt?',
          optionen:  [
            'Ich lerne weil morgen Prüfung ist.',
            'Ich lerne, weil morgen Prüfung ist.',
            'Ich lerne weil, morgen Prüfung ist.',
            'Ich lerne weil morgen, Prüfung ist.',
          ],
          richtig:   1,
          erklaerung: 'Der Beistrich kommt direkt vor das Einleitewort „weil": „Ich lerne, weil morgen Prüfung ist."',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Weil es schneit, bleibe ich drinnen." steht der Beistrich richtig.',
          richtig:   true,
          erklaerung: 'Richtig! Wenn der Nebensatz vorne steht, kommt danach ein Beistrich: „Weil es schneit[,] bleibe ich drinnen."',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Vor „und" muss immer ein Beistrich stehen.',
          richtig:   false,
          erklaerung: 'Falsch! Vor „und" zwischen zwei Hauptsätzen ist kein Beistrich nötig: „Er singt und sie tanzt." Nur vor Nebensätzen ist ein Beistrich Pflicht.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wo muss ein Beistrich stehen? Wähle die richtige Stelle:',
          satz:      'Sie weiß ___ dass er kommt.',
          optionen:  ['kein Beistrich', 'nach weiß', 'nach kommt', 'nach dass'],
          richtig:   'nach weiß',
          erklaerung: 'Der Beistrich steht vor dem Einleitewort „dass": „Sie weiß, dass er kommt."',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz enthält einen korrekt gesetzten Beistrich?',
          optionen:  [
            'Obwohl er müde war er lernte weiter.',
            'Obwohl er müde war, lernte er weiter.',
            'Obwohl, er müde war lernte er weiter.',
            'Obwohl er müde, war lernte er weiter.',
          ],
          richtig:   1,
          erklaerung: 'Der Beistrich trennt den Nebensatz (obwohl …) vom Hauptsatz: „Obwohl er müde war, lernte er weiter."',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  4. Zeitformen – Futur & Plusquamperfekt            ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'zeitformen3',
      titel: 'Futur & Plusquamperfekt',
      farbe: '#f5a623',

      theorie: {
        titel: 'Futur I und Plusquamperfekt',
        erklaerung:
          '• Futur I (Zukunft):\n' +
          '  Drückt aus, was in der Zukunft passieren wird.\n' +
          '  Bildung: werden + Infinitiv\n' +
          '  „Ich werde morgen lernen."\n' +
          '  „Er wird bald kommen."\n\n' +
          '• Plusquamperfekt (Vorvergangenheit):\n' +
          '  Drückt aus, was VOR einem anderen Ereignis in der Vergangenheit passiert ist.\n' +
          '  Bildung: hatte/war + Partizip II\n' +
          '  hatte → für die meisten Verben\n' +
          '  war   → für Bewegungs- und Zustandsverben\n' +
          '  „Ich hatte das Buch schon gelesen, bevor er kam."\n' +
          '  „Sie war bereits gegangen, als ich ankam."\n\n' +
          'Zeitstrahl:\n' +
          '  Plqpf. → Perfekt/Präteritum → Präsens → Futur I\n' +
          '  (früher)   (Vergangenheit)   (jetzt)   (später)',
        beispiel:
          'Futur I:        „Morgen werde ich ins Kino gehen."\n' +
          '                 ↑ werden + Infinitiv\n\n' +
          'Plusquamperfekt: „Ich hatte bereits gegessen, bevor er kam.\"\n' +
          '                  ↑ hatte/war + Partizip II\n\n' +
          'Reihenfolge: Er hatte das Haus verlassen (früher),\n' +
          '             bevor der Regen begann (später).',
        merkhilfe:
          'Futur I = werden + Infinitiv → Zukunft\n' +
          'Plusquamperfekt = hatte/war + Partizip II → Vorvergangenheit\n\n' +
          'Hilfsverb beim Plusquamperfekt:\n' +
          '  Bewegung/Zustandswechsel → war (gegangen, gefahren)\n' +
          '  Alles andere → hatte (gespielt, gegessen)',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Wie bildet man das Futur I?',
          optionen:  ['haben + Partizip II', 'werden + Infinitiv', 'sein + Infinitiv', 'werden + Partizip II'],
          richtig:   1,
          erklaerung: 'Futur I = werden + Infinitiv. Beispiel: „Ich werde morgen lernen." Das Hilfsverb ist „werden".',
        },
        {
          typ:       'multiple_choice',
          frage:     'In welcher Zeitform steht „Er hatte schon gegessen"?',
          optionen:  ['Perfekt', 'Futur I', 'Plusquamperfekt', 'Präteritum'],
          richtig:   2,
          erklaerung: '„hatte gegessen" = Hilfsverb im Präteritum (hatte) + Partizip II (gegessen) → Plusquamperfekt.',
        },
        {
          typ:       'lueckentext',
          frage:     'Bilde das Futur I – wähle die richtige Form:',
          satz:      'Nächstes Jahr ___ wir nach Wien fahren.',
          optionen:  ['haben', 'sind', 'werden', 'waren'],
          richtig:   'werden',
          erklaerung: 'Futur I: „werden" + Infinitiv. „Wir werden … fahren." Das Hilfsverb „werden" steht an 2. Stelle.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle das richtige Hilfsverb für das Plusquamperfekt:',
          satz:      'Sie ___ bereits weggegangen, als ich ankam.',
          optionen:  ['hatte', 'hat', 'war', 'ist'],
          richtig:   'war',
          erklaerung: '„weggehen" ist ein Bewegungsverb → Plusquamperfekt mit „sein": „war weggegangen".',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Plusquamperfekt drückt aus, was vor einem anderen vergangenen Ereignis passiert ist.',
          richtig:   true,
          erklaerung: 'Richtig! Das Plusquamperfekt zeigt die Vorzeitigkeit: „Er hatte gegessen, bevor er wegging." – Essen war früher als Weggehen.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz steht im Futur I?',
          optionen:  [
            'Er hat gestern gespielt.',
            'Er spielte gestern.',
            'Er wird morgen spielen.',
            'Er war gespielt.',
          ],
          richtig:   2,
          erklaerung: '„Er wird morgen spielen." → werden + Infinitiv = Futur I. „morgen" ist ein weiteres Hinweis auf die Zukunft.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Plusquamperfekt von „gehen" lautet „hatte gegangen".',
          richtig:   false,
          erklaerung: 'Falsch! „gehen" ist ein Bewegungsverb → Plusquamperfekt mit „sein": „war gegangen". Nicht „hatte gegangen"!',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  5. Wortarten – Numeralien & Interjektionen         ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'wortarten3',
      titel: 'Numeralien & Interjektionen',
      farbe: '#4ade80',

      theorie: {
        titel: 'Numeralien (Zahlwörter) und Interjektionen (Ausrufewörter)',
        erklaerung:
          '• Numeralien (Zahlwörter):\n' +
          '  Geben eine Anzahl oder Reihenfolge an.\n\n' +
          '  Kardinalzahlen (Grundzahlen) → „wie viele?"\n' +
          '  ein, zwei, drei, vier, fünf … zwanzig, hundert\n\n' +
          '  Ordinalzahlen (Ordnungszahlen) → „der/die/das wievielte?"\n' +
          '  erst-, zweit-, dritt-, viert-, fünft- …\n' +
          '  „der erste Platz", „das dritte Kind"\n\n' +
          '• Interjektionen (Ausrufewörter):\n' +
          '  Drücken Gefühle, Reaktionen oder Rufe aus.\n' +
          '  Sie sind keine vollständigen Sätze!\n\n' +
          '  Freude:    Hurra! Toll! Super! Juhuu!\n' +
          '  Schmerz:   Au! Aua! Autsch!\n' +
          '  Ekel:      Igitt! Pfui! Bäh!\n' +
          '  Überrasch.:Oh! Ah! Aha! Wow!\n' +
          '  Stille:    Pst! Schsch!\n' +
          '  Gruß:      Hallo! Tschüss!',
        beispiel:
          'Kardinalzahl:  „Ich habe drei Geschwister."\n' +
          'Ordinalzahl:   „Sie wohnt im zweiten Stock."\n' +
          '               „Er gewann den ersten Preis."\n\n' +
          'Interjektion:  „Au! Das tut weh!"\n' +
          '               „Hurra! Wir haben gewonnen!\"\n' +
          '               „Pst! Sei bitte leise!\"',
        merkhilfe:
          'Numeralien:\n' +
          '  Kardinal → Wie viele? (drei, zehn, hundert)\n' +
          '  Ordinal  → Der/Die wievielte? (erst-, dritt-, fünft-)\n\n' +
          'Interjektion:\n' +
          '  Steht allein oder am Satzanfang\n' +
          '  Drückt ein Gefühl aus → meist Ausrufezeichen dahinter!',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Was ist eine Kardinalzahl?',
          optionen:  ['Eine Ordnungszahl wie „erst-"', 'Eine Grundzahl wie „drei"', 'Ein Ausrufewort', 'Ein Verhältniswort'],
          richtig:   1,
          erklaerung: 'Kardinalzahlen sind Grundzahlen (wie viele?): ein, zwei, drei, vier … Sie geben eine Menge an.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort ist eine Interjektion?',
          optionen:  ['schnell', 'drei', 'Hurra', 'laufen'],
          richtig:   2,
          erklaerung: '„Hurra" ist eine Interjektion – ein Ausrufewort, das Freude ausdrückt. Es ist keine Zahl und kein Verb.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „dritte" ist eine Ordinalzahl.',
          richtig:   true,
          erklaerung: 'Richtig! „dritte" (bzw. „dritt-") ist eine Ordnungszahl – sie beantwortet die Frage „Der/Die wievielte?". Beispiel: „die dritte Runde".',
        },
        {
          typ:       'lueckentext',
          frage:     'Ergänze die richtige Ordinalzahl:',
          satz:      'Er belegt beim Rennen den ___ Platz.',
          optionen:  ['erst', 'erste', 'eins', 'erstens'],
          richtig:   'erste',
          erklaerung: 'Die Ordinalzahl „erste" steht als Adjektiv vor dem Nomen: „den ersten Platz" (Akk.) bzw. „der erste Platz" (Nom.).',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche der folgenden Wörter sind Interjektionen? (Mehrere möglich)',
          optionen:  ['Au', 'sieben', 'Igitt', 'Pst'],
          richtig:   [0, 2, 3],
          erklaerung: '„Au" (Schmerz), „Igitt" (Ekel) und „Pst" (Stille) sind Interjektionen. „sieben" ist eine Kardinalzahl.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Interjektionen sind vollständige Sätze.',
          richtig:   false,
          erklaerung: 'Falsch! Interjektionen (wie „Au!", „Hurra!", „Oh!") sind keine vollständigen Sätze – sie haben kein Subjekt und kein Prädikat.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welche Interjektion passt zum Ausruf der Überraschung?',
          optionen:  ['Au!', 'Pfui!', 'Wow!', 'Pst!'],
          richtig:   2,
          erklaerung: '„Wow!" drückt Überraschung oder Begeisterung aus. „Au!" = Schmerz, „Pfui!" = Ekel, „Pst!" = Stille.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  6. Synonyme – Bedeutungsnuancen                    ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'synonyme3',
      titel: 'Synonyme & Bedeutungsnuancen',
      farbe: '#a855f7',

      theorie: {
        titel: 'Synonyme – feine Bedeutungsunterschiede erkennen',
        erklaerung:
          'Synonyme sind Wörter mit ähnlicher Bedeutung – aber oft gibt es feine Unterschiede!\n\n' +
          '• Intensität (Stärkegrad):\n' +
          '  „überrascht" < „erstaunt" < „verblüfft" < „fassungslos"\n\n' +
          '• Stilebene (formell / umgangssprachlich):\n' +
          '  formell: „mitteilen", „informieren", „benachrichtigen"\n' +
          '  neutral: „sagen", „erzählen"\n' +
          '  umgangssprachlich: „quatschen", „labern"\n\n' +
          '• Bedeutungsfeld (ähnlich, aber nicht gleich):\n' +
          '  „sehen" / „blicken" / „starren" / „beobachten"\n' +
          '  Alle bedeuten eine Form von „Sehvorgang", aber:\n' +
          '  „starren" = lange, starr anschauen\n' +
          '  „beobachten" = aufmerksam, systematisch beobachten\n\n' +
          '• Konnotation (positiv/negativ/neutral):\n' +
          '  positiv: „sparsam", negativ: „geizig" – Bedeutung ähnlich, Wertung verschieden!',
        beispiel:
          '„Er ging langsam." → Er schlenderte. / Er schlich. / Er trottete.\n' +
          '  „schlenderte" = gemütlich, entspannt\n' +
          '  „schlich" = leise, heimlich\n' +
          '  „trottete" = schwerfällig, lustlos\n\n' +
          'Wähle das Synonym nach Kontext:\n' +
          '„Nach dem Marathon schlich er erschöpft nach Hause." ✓\n' +
          '„Er schlenderte erschöpft nach Hause." ✗ (Widerspruch!)',
        merkhilfe:
          'Fragen beim Synonym-Wählen:\n' +
          '  1. Passt die Intensität? (schwach / mittel / stark)\n' +
          '  2. Passt die Stilebene? (formell / neutral / umgangssprachlich)\n' +
          '  3. Passt die Konnotation? (positiv / negativ / neutral)\n' +
          '  4. Ergibt der Satz noch Sinn?',
      },

      fragen: [
        {
          typ:       'synonym_finden',
          frage:     'Was ist ein passendes Synonym für „mitteilen" (formell)?',
          optionen:  ['quatschen', 'informieren', 'reden', 'sagen'],
          richtig:   1,
          erklaerung: '"informieren" ist ein formelles Synonym für „mitteilen" – beide bedeuten, jemandem etwas bekanntzugeben. „quatschen" ist umgangssprachlich.',
        },
        {
          typ:       'synonym_finden',
          frage:     'Welches Synonym drückt „sehen" mit besonderer Intensität (lange, starr) aus?',
          optionen:  ['blicken', 'beobachten', 'starren', 'schauen'],
          richtig:   2,
          erklaerung: '"starren" bedeutet, lange und starr auf etwas zu schauen – es ist intensiver als „sehen" oder „blicken".',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle das Synonym, das am besten zur Situation passt:',
          satz:      'Die Detektivin ___ den Verdächtigen stundenlang, ohne sich zu bewegen.',
          optionen:  ['sah', 'schaute', 'beobachtete', 'blinzelte'],
          richtig:   'beobachtete',
          erklaerung: '"beobachtete" passt am besten – es drückt systematisches, aufmerksames Beobachten aus. Eine Detektivin beobachtet, nicht nur „schaut".',
        },
        {
          typ:       'synonym_finden',
          frage:     'Was ist ein Synonym für „benachrichtigen"?',
          optionen:  ['vergessen', 'verbergen', 'verständigen', 'verschweigen'],
          richtig:   2,
          erklaerung: '"verständigen" ist ein Synonym für „benachrichtigen" – beide bedeuten, jemanden über etwas in Kenntnis zu setzen.',
        },
        {
          typ:       'synonym_verbinden',
          frage:     'Verbinde die Synonyme mit unterschiedlicher Intensität: Klicke zuerst links, dann rechts.',
          paare: [
            ['überrascht',   'erstaunt'     ],
            ['mutig',        'tapfer'       ],
            ['klug',         'weise'        ],
            ['schreien',     'brüllen'      ],
          ],
          erklaerung: 'Richtige Paare: überrascht ↔ erstaunt | mutig ↔ tapfer | klug ↔ weise | schreien ↔ brüllen',
        },
        {
          typ:       'synonym_verbinden',
          frage:     'Verbinde die Synonyme: Klicke zuerst links, dann rechts.',
          paare: [
            ['gehen',       'schreiten'   ],
            ['sehen',       'wahrnehmen'  ],
            ['antworten',   'erwidern'    ],
            ['helfen',      'unterstützen'],
          ],
          erklaerung: 'Richtige Paare: gehen ↔ schreiten | sehen ↔ wahrnehmen | antworten ↔ erwidern | helfen ↔ unterstützen',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   '„sparsam" und „geizig" haben die gleiche positive oder negative Bedeutung.',
          richtig:   false,
          erklaerung: 'Falsch! „sparsam" ist positiv (mit Geld umgehen können), „geizig" ist negativ (anderen nichts gönnen). Sie unterscheiden sich in der Konnotation.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  7. Homonyme – kontextabhängige Bedeutungen         ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'homonyme3',
      titel: 'Homonyme – kontextabhängig',
      farbe: '#e94560',

      theorie: {
        titel: 'Neue Homonyme – Zug, Band, Strauß, Läufer',
        erklaerung:
          '• Zug:\n' +
          '  1. Schienenfahrzeug (Eisenbahn)\n' +
          '  2. Luftzug / Zugluft (kalte Luft)\n' +
          '  3. Spielzug (beim Schach / beim Kartenspiel)\n' +
          '  4. Zug am Seil (Anstrengung, Zugkraft)\n\n' +
          '• Band:\n' +
          '  1. das Band – schmales Gewebeband, Tonband\n' +
          '  2. der Band – Buch, Buchband (Bd. 1, Bd. 2 …)\n' +
          '  3. die Band – Musikgruppe\n\n' +
          '• Strauß:\n' +
          '  1. Blumenstrauß\n' +
          '  2. Vogel Strauß (großer Laufvogel)\n\n' +
          '• Läufer:\n' +
          '  1. Person, die läuft (Sportler)\n' +
          '  2. langer Teppich (Treppenläufer)\n' +
          '  3. Schachfigur',
        beispiel:
          '„Wir nehmen den Zug nach Wien." → Eisenbahn\n' +
          '„Mach das Fenster zu, es zieht!" → Zugluft\n\n' +
          '„Ich lese den dritten Band der Reihe." → Buchband\n' +
          '„Die Band spielte bis Mitternacht." → Musikgruppe\n\n' +
          '„Sie bekam einen Strauß rote Rosen." → Blumenstrauß',
        merkhilfe:
          'Immer den ganzen Satz lesen!\n' +
          'Bei „Zug": Fährt etwas? → Eisenbahn. Ist es kalt? → Luftzug.\n' +
          'Bei „Band": Artikel beachten! der Band (Buch), die Band (Musik), das Band (Gewebe)\n' +
          'Bei „Strauß": Blumen oder Vogel? → Kontext!',
      },

      fragen: [
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Zug" in diesem Satz?',
          satz:      'Wir fahren mit dem Zug nach Salzburg.',
          optionen:  ['Luftzug', 'Schienenfahrzeug', 'Spielzug', 'Zugkraft'],
          richtig:   1,
          erklaerung: '„mit dem Zug fahren" – der Kontext (fahren, nach Salzburg) zeigt eindeutig: Hier ist das Schienenfahrzeug gemeint.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Zug" in diesem Satz?',
          satz:      'Schließ das Fenster, hier ist ein unangenehmer Zug.',
          optionen:  ['Eisenbahn', 'Spielzug beim Schach', 'Luftzug / Zugluft', 'Zugkraft'],
          richtig:   2,
          erklaerung: '„Fenster schließen" und „unangenehm" – hier ist Zugluft (kalte Luft) gemeint, kein Fahrzeug.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Band" in diesem Satz?',
          satz:      'Ich habe den zweiten Band des Romans ausgelesen.',
          optionen:  ['Musikgruppe', 'Gewebeband', 'Tonband', 'Buchband'],
          richtig:   3,
          erklaerung: '„den zweiten Band … Romans" – hier ist ein Buchband gemeint (Bd. 2). Artikel: der Band (Buch).',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Strauß" in diesem Satz?',
          satz:      'Der Strauß im Zoo kann trotz seiner Flügel nicht fliegen.',
          optionen:  ['Blumenstrauß', 'Laufvogel', 'Teppich', 'Werkzeug'],
          richtig:   1,
          erklaerung: '"Zoo", "Flügel" und "nicht fliegen" zeigen: Hier ist der Vogel Strauß gemeint – ein großer Laufvogel.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Läufer" in diesem Satz?',
          satz:      'Im Treppenhaus liegt ein langer Läufer aus Wolle.',
          optionen:  ['Sportler', 'Schachfigur', 'Langer Teppich', 'Hund'],
          richtig:   2,
          erklaerung: '"Treppenhaus" und "aus Wolle" zeigen: Hier ist ein langer Teppich (Treppenläufer) gemeint.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „Band" hat im Deutschen mindestens drei verschiedene Bedeutungen.',
          richtig:   true,
          erklaerung: 'Richtig! „Band" ist ein Homonym: 1. der Band (Buch), 2. die Band (Musik), 3. das Band (Gewebeband/Tonband). Sogar der Artikel ist verschieden!',
        },
        {
          typ:       'multiple_choice',
          frage:     'Wie erkennt man bei Homonymen die richtige Bedeutung?',
          optionen:  ['Nur am Artikel', 'Nur am Anfangsbuchstaben', 'Am Kontext (Zusammenhang) des Satzes', 'An der Länge des Wortes'],
          richtig:   2,
          erklaerung: 'Der Kontext (die Wörter rund ums Homonym) verrät die Bedeutung. Den ganzen Satz lesen ist entscheidend!',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  8. Steigerungsformen – in Sätzen anwenden          ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'steigerung3',
      titel: 'Steigerungsformen im Satz',
      farbe: '#0fd4c8',

      theorie: {
        titel: 'Steigerungsformen in Vergleichssätzen anwenden',
        erklaerung:
          'Steigerungsformen werden in Vergleichssätzen verwendet:\n\n' +
          '• Vergleich mit dem Komparativ → „als"\n' +
          '  „Mia ist größer als Leon."\n' +
          '  „Dieses Buch ist interessanter als das andere."\n\n' +
          '• Gleichheit → „so … wie" oder „genauso … wie"\n' +
          '  „Tom ist genauso groß wie Anna."\n\n' +
          '• Superlativ → mit „am …-sten" oder als Attribut\n' +
          '  „Das ist das schönste Bild."\n' +
          '  „Sie singt am schönsten."\n\n' +
          'Häufige Fehler:\n' +
          '  ✗ „Er ist größer wie ich." → FALSCH!\n' +
          '  ✓ „Er ist größer als ich." → RICHTIG!\n' +
          '  ✗ „Er ist so groß als ich." → FALSCH!\n' +
          '  ✓ „Er ist so groß wie ich." → RICHTIG!\n\n' +
          'Unregelmäßige Formen (Wiederholung):\n' +
          '  gut → besser → am besten\n' +
          '  viel → mehr → am meisten\n' +
          '  gern → lieber → am liebsten\n' +
          '  hoch → höher → am höchsten\n' +
          '  nah → näher → am nächsten',
        beispiel:
          'Komparativ + als:\n' +
          '  „Wien ist größer als Linz."\n' +
          '  „Heute ist es wärmer als gestern."\n\n' +
          'Gleichheit + so … wie:\n' +
          '  „Ein Kilometer ist genauso weit wie 1 000 Meter."\n\n' +
          'Superlativ:\n' +
          '  „Der Mount Everest ist der höchste Berg der Welt."\n' +
          '  „Am liebsten esse ich Pizza."',
        merkhilfe:
          'Merkreim:\n' +
          '  Komparativ → als  (er ist größer ALS sie)\n' +
          '  Gleichheit  → wie  (er ist so groß WIE sie)\n\n' +
          'Trick: Bei Komparativ klingt „als" nach „Vergleich mit Unterschied".\n' +
          'Bei Gleichheit klingt „wie" nach „genauso".',
      },

      fragen: [
        {
          typ:       'lueckentext',
          frage:     'Wähle das richtige Vergleichswort:',
          satz:      'Mein Hund ist schneller ___ deine Katze.',
          optionen:  ['wie', 'als', 'so', 'ob'],
          richtig:   'als',
          erklaerung: 'Nach dem Komparativ (schneller) steht „als": „Mein Hund ist schneller als deine Katze." Komparativ + als!',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle das richtige Vergleichswort:',
          satz:      'Er ist genauso stark ___ sein Bruder.',
          optionen:  ['als', 'so', 'wie', 'ob'],
          richtig:   'wie',
          erklaerung: 'Bei Gleichheit (genauso) steht „wie": „genauso stark wie sein Bruder." Gleichheit + wie!',
        },
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Komparativ:',
          wort:      'hoch',
          form:      'komparativ',
          richtig:   'höher',
          erklaerung: '"hoch" → "höher" – unregelmäßige Steigerung mit Umlaut (o → ö) und Wegfall des „ch". Beispiel: „Der Berg ist höher als ich dachte."',
        },
        {
          typ:       'steigerung_ordnen',
          frage:     'Bringe die Steigerungsformen in die richtige Reihenfolge (Grundform → Komparativ → Superlativ):',
          woerter:   ['am nächsten', 'nah', 'näher'],
          richtig:   ['nah', 'näher', 'am nächsten'],
          erklaerung: 'nah → näher → am nächsten. Unregelmäßige Steigerung: das „h" fällt nicht weg, aber das Wort verändert sich.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Der Satz „Er ist größer wie ich" ist grammatikalisch richtig.',
          richtig:   false,
          erklaerung: 'Falsch! Nach dem Komparativ steht „als", nicht „wie": „Er ist größer als ich." „wie" steht nur bei Gleichheit: „genauso groß wie".',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz verwendet die Steigerungsform richtig?',
          optionen:  [
            'Sie singt schöner wie er.',
            'Sie singt so schöner wie er.',
            'Sie singt schöner als er.',
            'Sie singt am schöner.',
          ],
          richtig:   2,
          erklaerung: '„Sie singt schöner als er." → Komparativ (schöner) + als. Das ist die einzig richtige Form.',
        },
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Superlativ:',
          wort:      'nah',
          form:      'superlativ',
          richtig:   'am nächsten',
          erklaerung: '"nah" → "am nächsten" – unregelmäßige Superlativform. Beispiel: „Die Schule ist am nächsten, wenn ich den Weg durch den Park nehme."',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  9. Fremdwörter – häufige Alltagsfremdwörter        ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'fremdwoerter',
      titel: 'Fremdwörter',
      farbe: '#f5a623',

      theorie: {
        titel: 'Fremdwörter – Bedeutung und Herkunft',
        erklaerung:
          'Fremdwörter sind Wörter aus anderen Sprachen, die ins Deutsche übernommen wurden.\n\n' +
          'Woher kommen Fremdwörter?\n' +
          '  Englisch:   Computer, Internet, Team, Stress, cool\n' +
          '  Lateinisch: Produkt, Reaktion, Information, Struktur\n' +
          '  Griechisch: Demokratie, Gymnasium, Telefon, Theater\n' +
          '  Französisch:Restaurant, Balkon, Chance, Routine\n' +
          '  Italienisch:Piano, Pizza, Saldo, Risiko\n\n' +
          'Häufige Fremdwörter und ihre Bedeutung:\n' +
          '  Information  → Nachricht, Auskunft\n' +
          '  Reaktion     → Antwort auf einen Reiz, Wirkung\n' +
          '  Kommunikation→ Austausch, Verständigung\n' +
          '  Toleranz     → Duldsamkeit, Akzeptanz\n' +
          '  Demokratie   → Volksherrschaft\n' +
          '  Produkt      → erzeugtes Erzeugnis, Ware\n' +
          '  Struktur     → Aufbau, Gliederung\n' +
          '  flexibel     → anpassungsfähig, biegsam',
        beispiel:
          '„Hast du die neueste Information?" → Nachricht/Auskunft\n' +
          '„Das Produkt ist von guter Qualität." → Erzeugnis/Ware\n' +
          '„Die Reaktion der Lehrerin war überraschend." → Antwort/Wirkung\n\n' +
          'Tipp: Viele Fremdwörter kann man durch ein deutsches Wort ersetzen!\n' +
          '  Information → Nachricht\n' +
          '  tolerant    → duldsam, verständnisvoll',
        merkhilfe:
          'Fremdwörter erkennen:\n' +
          '  Klingen sie „fremd"? → meist aus anderen Sprachen\n' +
          '  Enthalten sie typische Endungen?\n' +
          '    -tion (lat.): Reaktion, Information\n' +
          '    -ie (gr.):    Demokratie, Philosophie\n' +
          '    -ismus:       Realismus, Tourismus\n' +
          '  Wenn unsicher: Wörterbuch verwenden!',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Was bedeutet das Fremdwort „Reaktion"?',
          optionen:  ['Aufbau, Gliederung', 'Antwort auf einen Reiz, Wirkung', 'Volksherrschaft', 'Nachricht, Auskunft'],
          richtig:   1,
          erklaerung: '"Reaktion" (aus dem Lateinischen) bedeutet eine Antwort oder Wirkung auf einen Reiz oder eine Handlung. Beispiel: „Die Reaktion auf den Alarm war sofortig."',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was bedeutet das Fremdwort „Toleranz"?',
          optionen:  ['Strenge, Härte', 'Duldsamkeit, Akzeptanz anderer', 'Gefährlichkeit', 'Gleichgültigkeit'],
          richtig:   1,
          erklaerung: '"Toleranz" (aus dem Lateinischen „tolerare" = dulden) bedeutet, andere Meinungen oder Lebensweisen zu akzeptieren.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Aus welcher Sprache stammt das Wort „Demokratie"?',
          optionen:  ['Englisch', 'Französisch', 'Griechisch', 'Italienisch'],
          richtig:   2,
          erklaerung: '„Demokratie" stammt aus dem Griechischen: „demos" (Volk) + „kratos" (Herrschaft) = Volksherrschaft.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle das passende Fremdwort:',
          satz:      'Die ___ zwischen den beiden Ländern verbesserte sich durch regelmäßige Gespräche.',
          optionen:  ['Produktion', 'Reaktion', 'Kommunikation', 'Struktur'],
          richtig:   'Kommunikation',
          erklaerung: '"Kommunikation" (Austausch, Verständigung) passt am besten – es geht um Gespräche zwischen Ländern.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „Computer" stammt aus dem Englischen.',
          richtig:   true,
          erklaerung: 'Richtig! „Computer" ist ein englisches Fremdwort (von „to compute" = berechnen), das ins Deutsche übernommen wurde.',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche Wörter haben die lateinische Endung „-tion"? (Mehrere möglich)',
          optionen:  ['Information', 'Demokratie', 'Reaktion', 'Gymnasium'],
          richtig:   [0, 2],
          erklaerung: '"Information" und "Reaktion" enden auf „-tion" (aus dem Lateinischen). „Demokratie" endet auf „-ie" (Griechisch), „Gymnasium" ist auch griechisch.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches deutsche Wort kann „flexibel" ersetzen?',
          optionen:  ['starr', 'anpassungsfähig', 'unbeweglich', 'kompliziert'],
          richtig:   1,
          erklaerung: '"flexibel" (aus dem Lateinischen „flexibilis" = biegsam) bedeutet „anpassungsfähig" oder „biegsam". Beispiel: „Sie hat einen flexiblen Arbeitsplan."',
        },
      ],
    },

  ], // end kategorien
};


// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KLASSE3;
}
