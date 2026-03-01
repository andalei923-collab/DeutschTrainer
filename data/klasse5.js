// ============================================================
//  data/klasse5.js – Welt 5: PSA-Vorbereitung (9. Schuljahr)
//  Deutsch Trainer | Zielgruppe: Pflichtschulabschluss, 14–16 Jahre
//  Österreichischer Lehrplan / PSA-Vorbereitung
// ============================================================

const KLASSE5 = {
  welt:  5,
  titel: 'Welt 5 – PSA-Vorbereitung',

  kategorien: [

    // ╔══════════════════════════════════════════════════════╗
    // ║  1. Grammatik – Sonderfälle & Vertiefung            ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'grammatik5',
      titel: 'Grammatik – Sonderfälle',
      farbe: '#a855f7',

      theorie: {
        titel: 'Passiv mit Modalverben & Konjunktiv II – Vertiefung',
        erklaerung:
          '• Passiv mit Modalverb:\n' +
          '  Modalverb (konjugiert) + Partizip II + werden\n' +
          '  „Die Aufgabe muss erledigt werden."\n' +
          '  „Das Problem kann gelöst werden."\n' +
          '  „Der Text sollte gelesen werden."\n\n' +
          '• Konjunktiv II mit Modalverben:\n' +
          '  Drückt Möglichkeit, Empfehlung oder hypothetische Bedingung aus.\n' +
          '  könnte (= wäre in der Lage):\n' +
          '    „Sie könnte die Stelle bekommen, wenn sie sich bewirbt."\n' +
          '  müsste (= wäre verpflichtet):\n' +
          '    „Er müsste eigentlich früher aufstehen."\n' +
          '  sollte (= wäre ratsam):\n' +
          '    „Du solltest mehr schlafen."\n\n' +
          '• Konjunktiv II in höflichen Bitten:\n' +
          '  Höflicher als der Imperativ:\n' +
          '  „Könnten Sie mir bitte helfen?"\n' +
          '  „Würden Sie das bitte erklären?"',
        beispiel:
          'Passiv + Modalverb:\n' +
          '  „Die Hausaufgaben müssen bis Freitag abgegeben werden."\n' +
          '  „Dieses Formular muss ausgefüllt werden."\n\n' +
          'Konjunktiv II Modalverb:\n' +
          '  „Du könntest morgen früher kommen." (Empfehlung)\n' +
          '  „Er müsste das eigentlich wissen." (Erwartung)\n\n' +
          'Höfliche Bitte:\n' +
          '  „Könnten Sie mir das Formular geben?" (höflicher als: Geben Sie mir das Formular!)',
        merkhilfe:
          'Passiv + Modalverb:\n' +
          '  Modalverb + Partizip II + werden\n' +
          '  muss gelöst werden | kann erledigt werden\n\n' +
          'Konjunktiv II Modalverb:\n' +
          '  könn-te, müss-te, soll-te, würd-e\n' +
          '  Erkennbar: Umlaut + -te-Endung!\n\n' +
          'Höfliche Frage: Könnten/Würden Sie … → immer Konjunktiv II!',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Wie bildet man Passiv mit einem Modalverb?',
          optionen:  [
            'Modalverb + Infinitiv',
            'Modalverb + Partizip II + werden',
            'werden + Partizip II + Modalverb',
            'haben + Partizip II + Modalverb',
          ],
          richtig:   1,
          erklaerung: 'Passiv mit Modalverb: Modalverb (konjugiert) + Partizip II + werden. Beispiel: „Das muss erklärt werden." Nicht: „Das muss werden erklärt."',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz enthält ein Passiv mit Modalverb?',
          optionen:  [
            'Er hat die Aufgabe erledigt.',
            'Die Aufgabe wird erledigt.',
            'Die Aufgabe muss erledigt werden.',
            'Er erledigt die Aufgabe.',
          ],
          richtig:   2,
          erklaerung: '„Die Aufgabe muss erledigt werden." → Modalverb (muss) + Partizip II (erledigt) + werden = Passiv mit Modalverb.',
        },
        {
          typ:       'lueckentext',
          frage:     'Ergänze das Passiv mit Modalverb:',
          satz:      'Das Formular ___ vollständig ausgefüllt werden.',
          optionen:  ['hat', 'ist', 'muss', 'wurde'],
          richtig:   'muss',
          erklaerung: '„muss … ausgefüllt werden" – Modalverb (muss) + Partizip II (ausgefüllt) + werden. Der Satz drückt eine Verpflichtung aus.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Der Satz „Könnten Sie mir bitte helfen?" steht im Konjunktiv II.',
          richtig:   true,
          erklaerung: 'Richtig! „könnten" ist der Konjunktiv II von „können". Er macht die Bitte höflicher als der Imperativ „Helfen Sie mir!".',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welche Form ist der Konjunktiv II von „müssen"?',
          optionen:  ['musste', 'müsste', 'gemüsst', 'müssen würde'],
          richtig:   1,
          erklaerung: '"müsste" ist der Konjunktiv II von „müssen" – erkennbar an Umlaut (ü) + Endung -te. Beispiel: „Er müsste das wissen."',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Das Problem kann nicht gelöst werden" steht ein Passiv mit Modalverb.',
          richtig:   true,
          erklaerung: 'Richtig! „kann" (Modalverb) + „gelöst" (Partizip II) + „werden" = Passiv mit Modalverb. Das Subjekt (Problem) handelt nicht selbst.',
        },
        {
          typ:       'lueckentext',
          frage:     'Welche Formulierung ist höflicher – wähle den Konjunktiv II:',
          satz:      '___ Sie mir bitte das Dokument schicken?',
          optionen:  ['Können', 'Könnten', 'Konnten', 'Konnte'],
          richtig:   'Könnten',
          erklaerung: '„Könnten" ist der Konjunktiv II von „können" und macht die Bitte höflicher. In formellen E-Mails und Briefen ist diese Form Standard.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  2. Textsorten – Bewerbung, Lebenslauf, Kommentar,  ║
    // ║     Zeitungsartikel                                 ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'textsorten5',
      titel: 'Textsorten – Bewerbung & Medien',
      farbe: '#e94560',

      theorie: {
        titel: 'Bewerbung, Lebenslauf, Kommentar und Zeitungsartikel',
        erklaerung:
          '• Bewerbungsschreiben:\n' +
          '  Formeller Brief an einen Arbeitgeber.\n' +
          '  Aufbau: Absender | Datum | Empfänger | Betreff |\n' +
          '  Einleitung (Woher wissen Sie von der Stelle?) |\n' +
          '  Hauptteil (Qualifikationen, Motivation) |\n' +
          '  Schluss (Einladung zum Gespräch) | Grußformel\n\n' +
          '• Tabellarischer Lebenslauf:\n' +
          '  Persönliche Daten, Schulbildung (chronologisch rückwärts),\n' +
          '  Berufserfahrung, Kenntnisse, Interessen\n\n' +
          '• Kommentar (Meinungstext):\n' +
          '  Subjektiv, argumentativ, klare Meinung\n' +
          '  Aufbau: These – Argumente – Fazit\n' +
          '  Verwendung von „Ich" erlaubt\n\n' +
          '• Zeitungsartikel (Bericht/Nachricht):\n' +
          '  Objektiv, neutral, sachlich\n' +
          '  Kein „Ich"! Präsens oder Präteritum\n' +
          '  W-Fragen: Wer? Was? Wo? Wann? Wie? Warum?\n' +
          '  Wichtigstes zuerst (Pyramidenprinzip)',
        beispiel:
          'Bewerbung – Einleitung:\n' +
          '  „Hiermit bewerbe ich mich um die Stelle als …,\n' +
          '  die Sie auf der Website ausgeschrieben haben."\n\n' +
          'Kommentar – These:\n' +
          '  „Meiner Meinung nach sollten Smartphones in der\n' +
          '  Schule vollständig verboten werden, weil …"\n\n' +
          'Zeitungsartikel – Einstieg:\n' +
          '  „Gestern Abend brach in einem Wiener Wohnhaus\n' +
          '  ein Brand aus. Die Feuerwehr war binnen …"',
        merkhilfe:
          'Bewerbung: FORMELL – kein Slang, Konjunktiv II für Bitten\n' +
          'Lebenslauf: CHRONOLOGISCH RÜCKWÄRTS – aktuellstes zuerst!\n' +
          'Kommentar: SUBJEKTIV – Ich, meiner Meinung nach, ich glaube\n' +
          'Zeitungsartikel: OBJEKTIV – kein Ich, W-Fragen, sachlich',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Welche Formulierung passt in ein Bewerbungsschreiben?',
          optionen:  [
            'Hey, ich will den Job!',
            'Hiermit bewerbe ich mich um die ausgeschriebene Stelle.',
            'Ich finde die Firma total cool.',
            'Schreibt mir zurück, wenn ihr mich nehmt.',
          ],
          richtig:   1,
          erklaerung: '„Hiermit bewerbe ich mich um die ausgeschriebene Stelle." ist formell korrekt. Bewerbungen erfordern sachliche, höfliche Sprache ohne Umgangssprache.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im tabellarischen Lebenslauf steht die aktuellste Erfahrung zuerst (chronologisch rückwärts).',
          richtig:   true,
          erklaerung: 'Richtig! Im Lebenslauf beginnt man mit der aktuellsten Station und geht dann zurück in die Vergangenheit. So sieht der Arbeitgeber sofort, was man zuletzt gemacht hat.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was unterscheidet einen Kommentar von einem Zeitungsartikel?',
          optionen:  [
            'Der Kommentar hat mehr Seiten',
            'Der Kommentar enthält subjektive Meinung, der Zeitungsartikel ist objektiv',
            'Der Zeitungsartikel hat keine Fakten',
            'Beide Textsorten sind gleich aufgebaut',
          ],
          richtig:   1,
          erklaerung: 'Kommentar = subjektiv (Meinung, Argumente, „Ich"); Zeitungsartikel = objektiv (Fakten, keine persönliche Wertung, kein „Ich").',
        },
        {
          typ:       'lueckentext',
          frage:     'Was steht am Anfang eines Zeitungsartikels nach dem Prinzip der Nachrichtenpyramide?',
          satz:      'Am Anfang eines Zeitungsartikels steht das ___ – die wichtigste Information zuerst.',
          optionen:  ['Fazit', 'Hintergrund', 'Wichtigste', 'Kommentar'],
          richtig:   'Wichtigste',
          erklaerung: 'Das Pyramidenprinzip: Die wichtigste Information (Wer, Was, Wann, Wo) steht ganz oben. Details und Hintergrund folgen danach.',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Was gehört in ein Bewerbungsschreiben? (Mehrere möglich)',
          optionen:  ['Eigene Qualifikationen', 'Lichtbild', 'Motivation für die Stelle', 'Gehaltsvorstellung'],
          richtig:   [0, 2],
          erklaerung: 'Qualifikationen und Motivation gehören ins Bewerbungsschreiben. Das Lichtbild und die Gehaltsvorstellung kommen in den Lebenslauf bzw. werden separat besprochen.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'In einem Zeitungsartikel kann man persönliche Meinungen mit „Ich finde …" ausdrücken.',
          richtig:   false,
          erklaerung: 'Falsch! Zeitungsartikel (Nachrichten/Berichte) sind objektiv und sachlich. Persönliche Meinung mit „Ich" gehört in den Kommentar.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Textbeginn ist typisch für einen sachlichen Zeitungsartikel?',
          optionen:  [
            'Meiner Meinung nach sollte man …',
            'Ich war gestern dabei und fand es schrecklich.',
            'Am Dienstag ereignete sich in Graz ein schwerer Unfall.',
            'Stellt euch vor, was gestern passiert ist!',
          ],
          richtig:   2,
          erklaerung: '„Am Dienstag ereignete sich in Graz ein schwerer Unfall." – sachlich, kein Ich, beantwortet direkt die W-Fragen (Wann, Wo, Was).',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  3. Stilmittel – Metapher, Vergleich, Alliteration  ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'stilmittel',
      titel: 'Stilmittel',
      farbe: '#0fd4c8',

      theorie: {
        titel: 'Stilmittel – Metapher, Vergleich, Alliteration & mehr',
        erklaerung:
          '• Metapher:\n' +
          '  Ein Wort wird in übertragener Bedeutung verwendet.\n' +
          '  KEIN „wie" – das Bild ist direkt gesetzt!\n' +
          '  „Das Herz der Stadt schlägt langsam."\n' +
          '  „Er ist ein Fuchs." (= er ist schlau)\n\n' +
          '• Vergleich:\n' +
          '  Zwei Dinge werden mit „wie" verglichen.\n' +
          '  „Sie läuft wie der Wind."\n' +
          '  „Er ist stark wie ein Bär."\n\n' +
          '• Alliteration:\n' +
          '  Mehrere Wörter beginnen mit demselben Laut.\n' +
          '  „Milch macht müde Männer munter."\n' +
          '  „mit Mann und Maus"\n\n' +
          '• Personifikation:\n' +
          '  Ein Ding oder Tier wird wie eine Person dargestellt.\n' +
          '  „Die Sonne lacht." „Der Wind flüstert."\n\n' +
          '• Hyperbel (Übertreibung):\n' +
          '  Bewusste Übertreibung zur Verstärkung.\n' +
          '  „Das habe ich dir tausendmal erklärt."\n' +
          '  „Ich sterbe vor Hunger."',
        beispiel:
          'Metapher:        „Er ist der Fels in der Brandung." (= zuverlässig)\n' +
          'Vergleich:       „Sie ist so fleißig wie eine Biene."\n' +
          'Alliteration:    „Wer wagt, gewinnt." | „Kraft, Können, Klasse!"\n' +
          'Personifikation: „Das Glück klopft an die Tür."\n' +
          'Hyperbel:        „Ich hab das schon ewig gewartet!"',
        merkhilfe:
          'Metapher vs. Vergleich:\n' +
          '  MIT wie → Vergleich (sie ist WIE der Wind)\n' +
          '  OHNE wie → Metapher (sie ist der Wind)\n\n' +
          'Alliteration: gleicher Anfangslaut → mehrere Wörter hintereinander\n' +
          'Personifikation: unbelebtes Ding + menschliche Handlung\n' +
          'Hyperbel: klar übertrieben? → Hyperbel!',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Was ist eine Metapher?',
          optionen:  [
            'Ein Vergleich mit „wie"',
            'Eine Übertreibung',
            'Ein Wort in übertragener Bedeutung ohne „wie"',
            'Wörter mit gleichem Anfangslaut',
          ],
          richtig:   2,
          erklaerung: 'Eine Metapher überträgt die Bedeutung eines Wortes ohne „wie": „Das Herz der Stadt." Das Bild wird direkt gesetzt.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz enthält einen Vergleich?',
          optionen:  [
            'Die Stadt ist ein Dschungel.',
            'Er ist so mutig wie ein Löwe.',
            'Der Wind flüsterte.',
            'Das habe ich tausendmal gesagt.',
          ],
          richtig:   1,
          erklaerung: '„Er ist so mutig wie ein Löwe." – das Wort „wie" zeigt den Vergleich. „Die Stadt ist ein Dschungel" ist eine Metapher.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Beispiel ist eine Alliteration?',
          optionen:  [
            'Er ist stark wie ein Bär.',
            'Die Sonne lacht.',
            'Kraft, Können, Klasse!',
            'Das habe ich millionenfach erklärt.',
          ],
          richtig:   2,
          erklaerung: '„Kraft, Können, Klasse!" – alle drei Wörter beginnen mit dem Laut „K" → Alliteration.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Der Satz „Die Sonne lacht" ist eine Personifikation.',
          richtig:   true,
          erklaerung: 'Richtig! Die Sonne (unbelebtes Ding) wird wie eine Person dargestellt (sie lacht) → Personifikation.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz ist eine Hyperbel (Übertreibung)?',
          optionen:  [
            'Das Buch war interessant.',
            'Er lief schnell.',
            'Ich hab das schon tausendmal erklärt!',
            'Sie ist klug.',
          ],
          richtig:   2,
          erklaerung: '„tausendmal erklärt" – niemand hat wirklich etwas tausendmal erklärt, das ist eine bewusste Übertreibung zur Verstärkung → Hyperbel.',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche Stilmittel sind in den folgenden Sätzen? Ordne zu: „Der Winter griff uns mit eisigen Händen." (Mehrere möglich)',
          optionen:  ['Personifikation', 'Metapher', 'Alliteration', 'Hyperbel'],
          richtig:   [0, 1],
          erklaerung: 'Personifikation: Der Winter handelt wie ein Mensch (greift). Metapher: „eisige Hände" in übertragener Bedeutung (direkt, ohne wie). Beides gleichzeitig möglich!',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Der Unterschied zwischen Metapher und Vergleich ist das Wort „wie".',
          richtig:   true,
          erklaerung: 'Richtig! Vergleich = mit „wie" (er ist WIE ein Fuchs). Metapher = ohne „wie" (er ist ein Fuchs). Das ist der wichtigste Unterschied.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  4. Rechtschreibung – Komposita & PSA-relevante     ║
    // ║     Wörter                                          ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'rechtschreibung5',
      titel: 'Rechtschreibung – Komposita & Prüfungswörter',
      farbe: '#4ade80',

      theorie: {
        titel: 'Komposita, Bindestrich und prüfungsrelevante Wörter',
        erklaerung:
          '1. Komposita (Zusammengesetzte Nomen):\n' +
          '  Zwei oder mehr Wörter werden zu einem neuen Nomen zusammengesetzt.\n' +
          '  Immer ZUSAMMENSCHREIBEN!\n' +
          '  Hausaufgabe, Schulbuch, Fußballspiel, Jahreszeit\n\n' +
          '2. Bindestrich bei Komposita:\n' +
          '  Bindestrich bei: Zusammensetzungen mit Abkürzungen, Zahlen, Fremdwörtern\n' +
          '  oder zur besseren Lesbarkeit:\n' +
          '  E-Mail, 3-D-Brille, Donau-Radweg, Fußball-WM\n\n' +
          '3. Schwierige Schreibungen (PSA-relevant):\n' +
          '  selbstständig ODER selbständig (beide korrekt!)\n' +
          '  aufwendig ODER aufwändig (beide korrekt!)\n' +
          '  Platz (kurzes a → tz) | Witz, Sitz, Blitz\n' +
          '  Schiffahrt → heute: Schifffahrt (drei f!)\n\n' +
          '4. Getrennt-/Zusammenschreibung Verben:\n' +
          '  fernsehen → ich sehe fern (trennbar!)\n' +
          '  kennenlernen → ich lerne sie kennen\n' +
          '  zusammenarbeiten → wir arbeiten zusammen',
        beispiel:
          'Komposita:\n' +
          '  Haus + Aufgabe = Hausaufgabe\n' +
          '  Fußball + Spiel = Fußballspiel\n\n' +
          'Bindestrich:\n' +
          '  E-Mail (Abkürzung), 8-jährig (Zahl), Deutsch-Übung\n\n' +
          'Dreifaches f:\n' +
          '  Schifffahrt (Schiff + Fahrt → 3×f)\n' +
          '  Kaffeefilter (Kaffee + Filter → 3×f)\n' +
          '  Balletttänzerin (Ballett + Tänzerin → 3×t)',
        merkhilfe:
          'Komposita: Zusammenschreiben! Das letzte Wort bestimmt den Artikel.\n' +
          '  das Haus + die Aufgabe = die Hausaufgabe\n' +
          'Bindestrich: Zahl/Abkürzung/Fremdwort + Wort → Bindestrich!\n' +
          'Dreifach-Buchstabe: Zusammensetzung kann 3 gleiche Buchstaben ergeben!\n' +
          '  Schiff + Fahrt = Schifffahrt (beide ff + f bleiben!)',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Welches Kompositum ist richtig geschrieben?',
          optionen:  ['Haus Aufgabe', 'Haus-aufgabe', 'Hausaufgabe', 'hausAufgabe'],
          richtig:   2,
          erklaerung: '„Hausaufgabe" – Komposita werden zusammengeschrieben (kein Leerzeichen, kein Bindestrich in diesem Fall). Das letzte Wort bestimmt den Artikel: die Aufgabe → die Hausaufgabe.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle die richtige Schreibweise:',
          satz:      'Das war eine sehr ___ Aufgabe, die viel Zeit kostete.',
          optionen:  ['aufwändig', 'aufwending', 'aufwändik', 'aufwandig'],
          richtig:   'aufwändig',
          erklaerung: '"aufwändig" (auch: aufwendig) ist korrekt. Der Wandel von e zu ä (Umlaut) ist in der Rechtschreibreform zugelassen – beide Formen sind richtig.',
        },
        {
          typ:        'satz_korrigieren',
          frage:      'Finde das falsch geschriebene Wort und klicke darauf:',
          satz:       'Die Schifart auf der Donau war wunderschön.',
          fehlerWort: 'Schifart',
          erklaerung: '"Schifffahrt" – Schiff (ff) + Fahrt (f) → drei f! Laut Rechtschreibregel bleiben bei Komposita alle Buchstaben erhalten: Schiff-fahrt = Schifffahrt.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Bei Komposita mit Abkürzungen oder Zahlen setzt man einen Bindestrich, z. B. E-Mail oder 8-jährig.',
          richtig:   true,
          erklaerung: 'Richtig! Enthält ein Kompositum eine Abkürzung (E-Mail) oder Zahl (8-jährig), wird ein Bindestrich gesetzt.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welche Schreibweise ist korrekt?',
          optionen:  ['selbstandig', 'selbstständig', 'selbst-ständig', 'Selbstständig'],
          richtig:   1,
          erklaerung: '"selbstständig" ist die vollständige Schreibweise (auch: selbständig). Beide sind laut Duden korrekt. Im Satzmittel kleingeschrieben.',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche Wörter enthalten durch Zusammensetzung drei gleiche Buchstaben? (Mehrere möglich)',
          optionen:  ['Schifffahrt', 'Hausaufgabe', 'Kaffeefilter', 'Fußballspiel'],
          richtig:   [0, 2],
          erklaerung: 'Schifffahrt (ff+f) und Kaffeefilter (ee+e) entstehen aus Zusammensetzungen mit drei gleichen Buchstaben. Hausaufgabe und Fußballspiel nicht.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das zusammengesetzte Nomen bekommt den Artikel des LETZTEN Wortes.',
          richtig:   true,
          erklaerung: 'Richtig! Das letzte Wort bestimmt den Artikel: der Ball + das Spiel = das Ballspiel | die Haus + die Aufgabe = die Hausaufgabe.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  5. Zeichensetzung – Sonderfälle & Wiederholung     ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'zeichensetzung5',
      titel: 'Zeichensetzung – Sonderfälle',
      farbe: '#f5a623',

      theorie: {
        titel: 'Semikolon, erweiterter Infinitiv und Sonderfälle',
        erklaerung:
          '• Semikolon (;):\n' +
          '  Trennt zwei eigenständige Hauptsätze, die inhaltlich zusammengehören.\n' +
          '  Stärker als ein Beistrich, schwächer als ein Punkt.\n' +
          '  „Ich kam zu spät; der Zug war bereits abgefahren."\n\n' +
          '• Erweiterter Infinitiv:\n' +
          '  Bei Infinitivgruppen mit „um … zu", „ohne … zu", „anstatt … zu"\n' +
          '  steht IMMER ein Beistrich:\n' +
          '  „Sie lernte hart, um die Prüfung zu bestehen."\n' +
          '  „Er ging, ohne sich zu verabschieden."\n\n' +
          '• Beistrich bei „als" und „wie":\n' +
          '  Vergleichssatz mit mehreren Wörtern → Beistrich!\n' +
          '  „Er ist größer, als ich dachte."\n' +
          '  ABER: Kein Beistrich bei einfachem Vergleich:\n' +
          '  „Er ist größer als sie." (kein Satz dahinter)\n\n' +
          '• Ellipse (Auslassung):\n' +
          '  Wenn das Verb ausgelassen wird, kann ein Gedankenstrich stehen:\n' +
          '  „Ich – einverstanden. Sie – dagegen."',
        beispiel:
          'Semikolon:\n' +
          '  „Sie hat viel gelernt; die Prüfung fiel ihr leicht."\n\n' +
          'Erweiterter Infinitiv:\n' +
          '  „Er arbeitet hart, um erfolgreich zu sein."\n' +
          '  „Sie ging, ohne ein Wort zu sagen."\n\n' +
          'Vergleichssatz:\n' +
          '  „Das Ergebnis war besser, als wir erwartet hatten."\n' +
          '  „Sie läuft schneller als er." (kein Beistrich – kein Satz)',
        merkhilfe:
          'Semikolon: Zwischen zwei Hauptsätzen, die zusammengehören\n' +
          '  → Stärker als Beistrich, schwächer als Punkt\n' +
          'Erweiterter Infinitiv: um/ohne/anstatt + zu → IMMER Beistrich!\n' +
          'Vergleichssatz: folgt nach „als/wie" ein vollständiger Satz? → Beistrich!\n' +
          '  „besser, als wir dachten" (Satz folgt → Beistrich)',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Wann verwendet man ein Semikolon (;)?',
          optionen:  [
            'Zwischen Subjekt und Prädikat',
            'Zwischen zwei zusammengehörigen Hauptsätzen',
            'Vor jedem Nebensatz',
            'Am Ende einer Aufzählung',
          ],
          richtig:   1,
          erklaerung: 'Das Semikolon steht zwischen zwei eigenständigen Hauptsätzen, die inhaltlich eng zusammengehören. Es ist stärker als ein Beistrich, aber schwächer als ein Punkt.',
        },
        {
          typ:       'lueckentext',
          frage:     'Braucht es hier einen Beistrich? Wähle die richtige Variante:',
          satz:      'Sie trainierte täglich ___ um den Wettkampf zu gewinnen.',
          optionen:  ['– ohne Beistrich –', ',', ';', ':'],
          richtig:   ',',
          erklaerung: 'Vor „um … zu" steht immer ein Beistrich: „Sie trainierte täglich, um den Wettkampf zu gewinnen." (erweiterter Infinitiv mit um…zu)',
        },
        {
          typ:        'satz_korrigieren',
          frage:      'Finde die fehlende Zeichensetzung – klicke auf das Wort VOR dem Beistrich fehlt:',
          satz:       'Er verließ das Haus ohne sich zu verabschieden.',
          fehlerWort: 'Haus',
          erklaerung: 'Vor „ohne … zu" steht ein Beistrich: „Er verließ das Haus, ohne sich zu verabschieden." (erweiterter Infinitiv mit ohne…zu)',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Das Ergebnis war besser, als wir erwartet hatten" steht der Beistrich korrekt.',
          richtig:   true,
          erklaerung: 'Richtig! Nach „besser" folgt ein vollständiger Vergleichssatz (wir erwartet hatten) → Beistrich nötig: „besser, als wir erwartet hatten."',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Er läuft schneller als sie" fehlt ein Beistrich vor „als".',
          richtig:   false,
          erklaerung: 'Falsch! „schneller als sie" ist ein einfacher Vergleich ohne vollständigen Satz dahinter → kein Beistrich nötig. Nur wenn ein Satz folgt: „schneller, als ich dachte."',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz ist korrekt gesetzt?',
          optionen:  [
            'Sie lernte, ohne zu schlafen.',
            'Sie lernte ohne, zu schlafen.',
            'Sie lernte ohne zu, schlafen.',
            'Sie lernte ohne zu schlafen.',
          ],
          richtig:   0,
          erklaerung: '„Sie lernte, ohne zu schlafen." – Beistrich vor „ohne … zu" (erweiterter Infinitiv). Das Komma steht direkt vor „ohne".',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz verwendet das Semikolon korrekt?',
          optionen:  [
            'Ich bin müde; weil ich nicht geschlafen habe.',
            'Sie hat gut gelernt; und die Prüfung bestanden.',
            'Das Wetter war schlecht; trotzdem gingen wir spazieren.',
            'Er; lief schnell nach Hause.',
          ],
          richtig:   2,
          erklaerung: '„Das Wetter war schlecht; trotzdem gingen wir spazieren." – Zwei eigenständige Hauptsätze, die inhaltlich zusammengehören. Vor Nebensätzen (weil) steht kein Semikolon.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  6. Synonyme – in Bewerbungstexten                  ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'synonyme5',
      titel: 'Synonyme in Bewerbungstexten',
      farbe: '#a855f7',

      theorie: {
        titel: 'Formelle Synonyme für Bewerbungen und Aufsätze',
        erklaerung:
          'In Bewerbungen und formellen Texten wählt man bewusst gehobene Synonyme.\n\n' +
          '• Statt „sagen" → mitteilen, darlegen, erläutern, betonen, erwähnen\n' +
          '• Statt „zeigen" → belegen, nachweisen, demonstrieren, veranschaulichen\n' +
          '• Statt „machen" → durchführen, realisieren, umsetzen, bewerkstelligen\n' +
          '• Statt „haben" → verfügen über, besitzen, aufweisen\n' +
          '• Statt „suchen" → anstreben, bewerben um, ansuchen um\n\n' +
          'Typische Bewerbungsphrasen:\n' +
          '  Ich bewerbe mich … (statt: Ich will)\n' +
          '  Ich verfüge über … (statt: Ich habe)\n' +
          '  Ich ersuche um … (statt: Ich bitte um)\n' +
          '  Ich wurde in meiner Ausbildung … (sachlich)\n' +
          '  Ich freue mich auf ein persönliches Gespräch.',
        beispiel:
          'Umgangssprachlich → formell:\n' +
          '  Ich hab gute Noten. → Ich verfüge über sehr gute schulische Leistungen.\n' +
          '  Ich bin gut organisiert. → Ich zeichne mich durch ausgeprägte\n' +
          '                             Organisationsfähigkeit aus.\n' +
          '  Ich lerne schnell. → Ich besitze eine hohe Lernbereitschaft\n' +
          '                       und eigne mir neues Wissen rasch an.',
        merkhilfe:
          'Bewerbungssprache: sachlich + positiv + formell\n' +
          '  VERMEIDE: will, habe, bin gut in, mache gerne\n' +
          '  VERWENDE: strebe an, verfüge über, zeichne mich durch … aus\n\n' +
          'Tipp: Ersetze kurze, einfache Wörter durch präzisere Synonyme.\n' +
          '  gut → hervorragend, fundiert, ausgeprägt',
      },

      fragen: [
        {
          typ:       'synonym_finden',
          frage:     'Welches Synonym für „haben" passt in eine formelle Bewerbung?',
          optionen:  ['kriegen', 'besitzen', 'schnappen', 'haben'],
          richtig:   1,
          erklaerung: '"besitzen" ist formell und passt in eine Bewerbung: „Ich besitze fundierte Kenntnisse in …" – auch „verfügen über" wäre möglich.',
        },
        {
          typ:       'synonym_finden',
          frage:     'Welches ist das formellste Synonym für „sagen" in einem Aufsatz?',
          optionen:  ['meinen', 'hinwerfen', 'darlegen', 'reden'],
          richtig:   2,
          erklaerung: '"darlegen" ist das gehobene, formellste Synonym: „Der Autor legt dar, dass …" In Aufsätzen vermeidet man „sagen" und ersetzt es durch präzisere Verben.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle die formell korrekte Formulierung für eine Bewerbung:',
          satz:      'Ich ___ über sehr gute Englischkenntnisse.',
          optionen:  ['habe', 'besitze', 'verfüge', 'kriege'],
          richtig:   'verfüge',
          erklaerung: '"Ich verfüge über …" ist die Standard-Bewerbungsformulierung. „besitze" ginge auch, „verfüge über" ist am gebräuchlichsten.',
        },
        {
          typ:       'synonym_verbinden',
          frage:     'Verbinde den umgangssprachlichen Ausdruck mit dem formellen Synonym:',
          paare: [
            ['will den Job',    'bewerbe mich um die Stelle' ],
            ['zeigen',          'belegen / nachweisen'       ],
            ['machen',          'durchführen / umsetzen'     ],
            ['bitten um',       'ersuchen um'                ],
          ],
          erklaerung: 'Formelle Synonyme: will → bewerbe mich | zeigen → belegen | machen → durchführen | bitten → ersuchen',
        },
        {
          typ:       'synonym_verbinden',
          frage:     'Verbinde: umgangssprachlich → formell / gehoben:',
          paare: [
            ['gut in',        'versiert in / kompetent in'  ],
            ['lernen',        'erwerben / aneignen'         ],
            ['nachweisen',    'belegen / dokumentieren'     ],
            ['Erfahrung haben','über Erfahrung verfügen'   ],
          ],
          erklaerung: 'Formelle Synonyme: gut in → versiert in | lernen → erwerben | nachweisen → belegen | Erfahrung haben → über Erfahrung verfügen',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'In einer Bewerbung ist der Satz „Ich bin super in Mathe" formell korrekt.',
          richtig:   false,
          erklaerung: 'Falsch! „super" ist umgangssprachlich und unpassend für eine Bewerbung. Besser: „Ich verfüge über fundierte Kenntnisse in Mathematik."',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welche Formulierung ist am besten für eine Bewerbung geeignet?',
          optionen:  [
            'Ich finde den Job total interessant.',
            'Der Job wäre halt cool für mich.',
            'Ich möchte mich um die ausgeschriebene Stelle bewerben.',
            'Ich will unbedingt bei euch arbeiten.',
          ],
          richtig:   2,
          erklaerung: '„Ich möchte mich um die ausgeschriebene Stelle bewerben." – sachlich, formell, ohne Slang. „total", „cool", „halt" und „unbedingt euch" sind umgangssprachlich.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  7. Homonyme – schwierige Fälle & Wiederholung      ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'homonyme5',
      titel: 'Homonyme – schwierige Fälle',
      farbe: '#0fd4c8',

      theorie: {
        titel: 'Schwierige Homonyme: Hahn, Mark, Weise, Licht',
        erklaerung:
          '• Hahn:\n' +
          '  1. männliches Huhn (der Hahn kräht)\n' +
          '  2. Wasserhahn / Absperrhahn (den Hahn aufdrehen)\n\n' +
          '• Mark:\n' +
          '  1. die Mark – ehemalige deutsche Währung\n' +
          '  2. das Mark – Knochenmark, inneres weiches Gewebe\n' +
          '  3. die Mark – Grenzland (historisch: Steiermark)\n\n' +
          '• Weise:\n' +
          '  1. die Weise – Art und Weise, Methode\n' +
          '  2. die Weise – Melodie, Liedweise\n' +
          '  3. der/die Weise – kluge, erfahrene Person\n\n' +
          '• Licht:\n' +
          '  1. die Beleuchtung, Helligkeit (das Licht brennt)\n' +
          '  2. die Kerze (mehrere Lichter)\n\n' +
          'Zusätzlich: Wiederholung bekannter Homonyme\n' +
          '  Bank, Schloss, Flügel, Tor, Mutter, Zug, Band, Gericht, Steuer',
        beispiel:
          'Hahn: „Der Hahn kräht jeden Morgen." → Vogel\n' +
          '      „Dreh den Hahn ab, es tropft." → Wasserhahn\n\n' +
          'Mark: „Das geht mir durch Mark und Bein!" → Knochenmark\n' +
          '      „Das kostet zehn Mark." → Währung\n\n' +
          'Weise: „Er löste es auf clevere Weise." → Methode/Art\n' +
          '       „Die drei Weisen aus dem Morgenland." → weise Personen',
        merkhilfe:
          'Artikel als Schlüssel:\n' +
          '  die Mark (Währung) / das Mark (Knochen) / die Mark (Land)\n' +
          '  die Weise (Methode/Melodie) / der Weise (Person)\n\n' +
          'Kontext zuerst: Welche Wörter stehen daneben?\n' +
          '  Hahn + krähen → Vogel | Hahn + Wasser → Armatur\n' +
          '  Weise + auf … → Methode | Weise + alt/klug → Person',
      },

      fragen: [
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Hahn" in diesem Satz?',
          satz:      'Der Klempner reparierte den tropfenden Hahn im Bad.',
          optionen:  ['Männliches Huhn', 'Wasserarmatur / Hahn', 'Werkzeug', 'Vogel'],
          richtig:   1,
          erklaerung: '"Klempner", "reparieren" und "tropfend" zeigen: Hier ist die Wasserarmatur (Wasserhahn) gemeint, kein Tier.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Hahn" in diesem Satz?',
          satz:      'Der Hahn auf dem Misthaufen kräht laut.',
          optionen:  ['Wasserhahn', 'Männliches Huhn', 'Wetterhahn', 'Absperrventil'],
          richtig:   1,
          erklaerung: '"krähen" ist die typische Lautäußerung des Hahns (männliches Huhn). "Misthaufen" bestätigt den bäuerlichen Kontext.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Mark" in diesem Satz?',
          satz:      'Der Arzt untersucht das Mark im Oberschenkelknochen.',
          optionen:  ['Ehemalige Währung', 'Grenzland', 'Knochenmark', 'Münze'],
          richtig:   2,
          erklaerung: '"Knochen" zeigt eindeutig: Hier ist das Knochenmark (das Mark) gemeint – das weiche Gewebe im Inneren von Knochen.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Weise" in diesem Satz?',
          satz:      'Sie löste das Problem auf eine sehr clevere Weise.',
          optionen:  ['Kluge Person', 'Melodie', 'Art und Methode', 'Weisheit'],
          richtig:   2,
          erklaerung: '„auf eine Weise" = auf eine Art und Weise (Methode). Typische Formulierung: „auf diese/eine Weise" → Art und Weise.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Weise" in diesem Satz?',
          satz:      'Die drei Weisen brachten dem Kind Geschenke.',
          optionen:  ['Melodien', 'Arten', 'Kluge, weise Personen', 'Methoden'],
          richtig:   2,
          erklaerung: '"die drei Weisen aus dem Morgenland" – Weise (Plural) = kluge, erfahrene Personen (der Weise / die Weisen).',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Bei Homonymen wie „Mark" hilft der Artikel, die Bedeutung zu bestimmen: das Mark (Knochen) vs. die Mark (Währung/Land).',
          richtig:   true,
          erklaerung: 'Richtig! Der Artikel ist bei vielen Homonymen entscheidend: das Mark (Knochenmark), die Mark (Währung oder Grenzland). So trennt man die Bedeutungen.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was sind Homonyme? (Vollständige Wiederholung)',
          optionen:  [
            'Wörter mit ähnlicher Bedeutung (Synonyme)',
            'Wörter mit demselben Klang/Schrift, aber verschiedenen Bedeutungen',
            'Wörter mit mehreren Silben',
            'Gesteigerte Adjektive',
          ],
          richtig:   1,
          erklaerung: 'Homonyme: gleiche Schreibung oder gleicher Klang, aber unterschiedliche Bedeutungen. Der Kontext (Satz) verrät immer, welche Bedeutung gemeint ist.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  8. Steigerungsformen – in Aufsätzen anwenden       ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'steigerung5',
      titel: 'Steigerungsformen im Aufsatz',
      farbe: '#e94560',

      theorie: {
        titel: 'Steigerungsformen korrekt in Texten einsetzen',
        erklaerung:
          'Im Aufsatz und in der Bewerbung werden Steigerungsformen häufig eingesetzt:\n\n' +
          '• Reguläre Steigerung:\n' +
          '  schnell → schneller → am schnellsten\n' +
          '  wichtig → wichtiger → am wichtigsten\n\n' +
          '• Unregelmäßige Steigerung (wichtig!):\n' +
          '  gut     → besser    → am besten\n' +
          '  viel    → mehr      → am meisten\n' +
          '  gern    → lieber    → am liebsten\n' +
          '  hoch    → höher     → am höchsten\n' +
          '  nah     → näher     → am nächsten\n\n' +
          '• Häufige Fehler vermeiden:\n' +
          '  FALSCH: am meistens, am schnellsten aller, guter als\n' +
          '  RICHTIG: am meisten, am schnellsten, besser als\n\n' +
          '• Steigerung in Argumentationstexten:\n' +
          '  „Ein noch wichtigerer Punkt ist …"\n' +
          '  „Das überzeugendste Argument lautet …"\n' +
          '  „Am stärksten beeindruckt hat mich …"',
        beispiel:
          'Im Argumentationsaufsatz:\n' +
          '  „Smartphones sind nützlich. Noch nützlicher sind jedoch Laptops.\n' +
          '   Am nützlichsten ist jedoch die Kombination aus beidem."\n\n' +
          'Im Vergleich:\n' +
          '  „Das erste Argument ist überzeugend, das zweite noch überzeugender,\n' +
          '   das dritte ist jedoch das überzeugendste."\n\n' +
          'Achtung Fehlerquellen:\n' +
          '  FALSCH: am meistens beliebt | RICHTIG: am meisten beliebt\n' +
          '  FALSCH: mehr besser | RICHTIG: besser',
        merkhilfe:
          'Checkliste für Steigerungsformen im Aufsatz:\n' +
          '  1. Regulär steigern (+ er / am …-sten) oder unregelmäßig?\n' +
          '  2. Komparativ + als (NICHT wie!)\n' +
          '  3. Superlativ = am …-sten (kein „am …-sten aller"!)\n' +
          '  4. Keine absolute Steigerung: NICHT optimaler, perfekter!\n' +
          '  5. FALSCH: am meistens → RICHTIG: am meisten',
      },

      fragen: [
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Superlativ für den Aufsatz:',
          wort:      'wichtig',
          form:      'superlativ',
          richtig:   'am wichtigsten',
          erklaerung: '"wichtig" → "wichtiger" → "am wichtigsten". Im Aufsatz: „Das am wichtigsten erscheinende Argument …"',
        },
        {
          typ:       'steigerung_ordnen',
          frage:     'Bringe die Steigerungsformen in die richtige Reihenfolge:',
          woerter:   ['am höchsten', 'höher', 'hoch'],
          richtig:   ['hoch', 'höher', 'am höchsten'],
          erklaerung: 'hoch → höher → am höchsten. Unregelmäßige Steigerung (Umlaut: o → ö). Im Aufsatz: „Den höchsten Stellenwert hat …"',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle das richtige Vergleichswort:',
          satz:      'Dieses Argument ist überzeugender ___ das erste.',
          optionen:  ['wie', 'als', 'so', 'denn'],
          richtig:   'als',
          erklaerung: 'Nach dem Komparativ (überzeugender) steht „als": „überzeugender als das erste." NICHT „überzeugender wie"!',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Die Form „am meistens" ist grammatikalisch korrekt.',
          richtig:   false,
          erklaerung: 'Falsch! Der Superlativ von „viel" lautet „am meisten" (nicht „am meistens"). „am meistens" ist ein häufiger Fehler!',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz verwendet die Steigerungsform korrekt?',
          optionen:  [
            'Das ist das wichtigste aller wichtigen Argumente.',
            'Das überzeugendste Argument lautet wie folgt.',
            'Dieses Thema ist mehr wichtiger als das andere.',
            'Er schreibt am meistens Aufsätze.',
          ],
          richtig:   1,
          erklaerung: '„Das überzeugendste Argument lautet wie folgt." – korrekte Superlativform im Aufsatz. „mehr wichtiger" und „am meistens" sind falsch.',
        },
        {
          typ:       'steigerung_bilden',
          frage:     'Bilde den Komparativ:',
          wort:      'überzeugend',
          form:      'komparativ',
          richtig:   'überzeugender',
          erklaerung: '"überzeugend" → "überzeugender" – reguläre Steigerung (+ -er). Im Aufsatz: „Noch überzeugender ist das folgende Argument …"',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Adjektive wie „optimal" oder „perfekt" kann man nicht steigern, weil sie einen absoluten Zustand beschreiben.',
          richtig:   true,
          erklaerung: 'Richtig! Absolute Adjektive (optimal, perfekt, maximal, einzigartig) sind nicht steigerbar. „optimaler" oder „perfekter" ist logisch unsinnig.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  9. Fremdwörter – akademischer Wortschatz           ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'fremdwoerter5',
      titel: 'Akademischer Wortschatz',
      farbe: '#4ade80',

      theorie: {
        titel: 'Akademischer Wortschatz für Prüfung und Aufsatz',
        erklaerung:
          'Für Aufsätze, Erörterungen und den PSA braucht man einen\n' +
          'akademischen Grundwortschatz:\n\n' +
          '• Argumentieren und Strukturieren:\n' +
          '  These       – Behauptung, Standpunkt\n' +
          '  Argument    – Begründung, Beleg für die These\n' +
          '  Konklusion  – Schlussfolgerung, Fazit\n' +
          '  Analyse     – genaue Untersuchung\n' +
          '  Aspekt      – Gesichtspunkt, Teilbereich\n\n' +
          '• Bewertung und Beurteilung:\n' +
          '  relevant     – bedeutsam, wichtig\n' +
          '  fundamental  – grundlegend, wesentlich\n' +
          '  komplex      – vielschichtig, schwierig\n' +
          '  explizit     – ausdrücklich, direkt gesagt\n' +
          '  implizit     – unausgesprochen, mitgemeint\n\n' +
          '• Wissenschaftliche Verben:\n' +
          '  analysieren  – genau untersuchen\n' +
          '  darlegen     – erklären, beschreiben\n' +
          '  belegen      – mit Beweisen zeigen\n' +
          '  konstatieren – feststellen',
        beispiel:
          'Im Aufsatz:\n' +
          '  „Die Analyse des Textes zeigt, dass …"\n' +
          '  „Meine These lautet: Smartphones beeinflussen das Lernverhalten."\n' +
          '  „Das relevanteste Argument dafür ist …"\n' +
          '  „Der Autor belegt seine Aussage durch …"\n\n' +
          'Schlussfolgerung:\n' +
          '  „Als Konklusion lässt sich festhalten, dass …"\n' +
          '  „Zusammenfassend kann man konstatieren, dass …"',
        merkhilfe:
          'Die 5 wichtigsten akademischen Wörter:\n' +
          '  These      = eigene Behauptung/Standpunkt\n' +
          '  Analyse    = genaue Untersuchung\n' +
          '  Argument   = Begründung\n' +
          '  relevant   = wichtig, bedeutsam\n' +
          '  Konklusion = Schluss, Fazit\n\n' +
          'Merke: explizit = direkt gesagt | implizit = mitgemeint',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Was bedeutet „These" in einem Argumentationsaufsatz?',
          optionen:  [
            'Die Schlussfolgerung am Ende',
            'Ein Gegenargument',
            'Der eigene Standpunkt / eine Behauptung',
            'Ein Zitat aus einem Text',
          ],
          richtig:   2,
          erklaerung: 'Die These ist der eigene Standpunkt oder eine Behauptung, die man im Aufsatz begründet und verteidigt. Sie steht meist am Anfang.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was bedeutet das Fremdwort „relevant"?',
          optionen:  [
            'unwichtig, nebensächlich',
            'bedeutsam, wichtig, von Belang',
            'kompliziert, schwierig',
            'ausführlich, detailliert',
          ],
          richtig:   1,
          erklaerung: '"relevant" (aus dem Lateinischen „relevare" = aufheben) bedeutet „bedeutsam, wichtig". Beispiel: „Das ist ein relevanter Punkt für die Diskussion."',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was bedeutet „Konklusion"?',
          optionen:  [
            'Einleitung des Aufsatzes',
            'Gegenargument',
            'Schlussfolgerung, Fazit',
            'These am Anfang',
          ],
          richtig:   2,
          erklaerung: '"Konklusion" (lateinisch: conclusio = Schluss) ist die Schlussfolgerung oder das Fazit am Ende eines Argumentationsgangs.',
        },
        {
          typ:       'lueckentext',
          frage:     'Welches akademische Wort passt in den Aufsatz?',
          satz:      'Die ___ des Textes zeigt, dass der Autor eine kritische Haltung einnimmt.',
          optionen:  ['Steigerung', 'Analyse', 'Hyperbel', 'Konklusion'],
          richtig:   'Analyse',
          erklaerung: '"Analyse" (genaue Untersuchung) passt: „Die Analyse des Textes zeigt …" – man untersucht den Text und stellt fest, was der Autor meint.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Ein „impliziter" Inhalt ist etwas, das direkt und ausdrücklich gesagt wird.',
          richtig:   false,
          erklaerung: 'Falsch! „implizit" bedeutet unausgesprochen, mitgemeint. „explizit" = direkt und ausdrücklich gesagt. Merke: Im → innen, versteckt; Ex → außen, sichtbar.',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche Wörter sind akademische Synonyme für „grundlegend / wesentlich"? (Mehrere möglich)',
          optionen:  ['fundamental', 'komplex', 'elementar', 'explizit'],
          richtig:   [0, 2],
          erklaerung: '"fundamental" und "elementar" bedeuten beide „grundlegend, wesentlich". "komplex" bedeutet vielschichtig, "explizit" bedeutet ausdrücklich.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Verb bedeutet „mit Beweisen oder Beispielen zeigen"?',
          optionen:  ['analysieren', 'konstatieren', 'belegen', 'darlegen'],
          richtig:   2,
          erklaerung: '"belegen" = etwas mit Beweisen, Beispielen oder Zitaten zeigen/beweisen. Beispiel: „Der Autor belegt seine These mit statistischen Daten."',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  10. PSA-Vorbereitung – typische Prüfungsaufgaben   ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'psa_vorbereitung',
      titel: 'PSA-Vorbereitung',
      farbe: '#f5a623',

      theorie: {
        titel: 'PSA Deutsch – Aufbau und typische Aufgaben',
        erklaerung:
          'Der Pflichtschulabschluss (PSA) Deutsch umfasst:\n\n' +
          '1. Leseverstehen (Textverständnis):\n' +
          '  Einen unbekannten Text lesen und Fragen dazu beantworten.\n' +
          '  Tipp: Erst Fragen lesen, dann den Text!\n' +
          '  Wichtig: Antworten mit Textbezug formulieren.\n\n' +
          '2. Sprachbetrachtung:\n' +
          '  Grammatikfragen: Wortarten, Fälle, Zeitformen, Passiv\n' +
          '  Rechtschreibung: ss/ß, das/dass, Groß-/Kleinschreibung\n' +
          '  Zeichensetzung: Beistrich, Doppelpunkt, Anführungszeichen\n\n' +
          '3. Textproduktion (Schreiben):\n' +
          '  Einen Text einer bestimmten Textsorte schreiben:\n' +
          '  Brief, Erörterung, Kommentar, Beschreibung\n' +
          '  Bewertungskriterien: Inhalt, Struktur, Sprache, Rechtschreibung\n\n' +
          'Allgemeine Tipps:\n' +
          '  Aufgabenstellung genau lesen!\n' +
          '  Vollständige Sätze schreiben (keine Stichworte)\n' +
          '  Text vor Abgabe nochmals lesen und korrigieren',
        beispiel:
          'Leseverstehen – typische Aufgaben:\n' +
          '  „Worum geht es im Text? Fasse in 2-3 Sätzen zusammen."\n' +
          '  „Was meint der Autor mit dem Ausdruck …?"\n\n' +
          'Sprachbetrachtung – typische Aufgaben:\n' +
          '  „Bestimme den Fall des unterstrichenen Nomens."\n' +
          '  „Bilde das Passiv: Der Schüler löst die Aufgabe."\n\n' +
          'Textproduktion – typische Aufgaben:\n' +
          '  „Schreibe einen Kommentar zum Thema Smartphones in der Schule."\n' +
          '  „Verfasse ein Bewerbungsschreiben für die Stelle als …"',
        merkhilfe:
          'PSA-Strategie:\n' +
          '  Leseverstehen: Erst Fragen, dann Text lesen!\n' +
          '  Sprachbetrachtung: Fragemethode nutzen (Wer? Wem? Wen?)\n' +
          '  Schreiben: Einleitung – Hauptteil – Schluss\n' +
          '             Auf Textsorte achten! (Kommentar ≠ Bericht)\n' +
          '  Immer: Vollständige Sätze! Vor Abgabe lesen!',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Welche drei Bereiche umfasst der PSA im Fach Deutsch?',
          optionen:  [
            'Diktat, Lesen, Sprechen',
            'Leseverstehen, Sprachbetrachtung, Textproduktion',
            'Grammatik, Vokabeln, Aufsatz',
            'Hören, Sehen, Schreiben',
          ],
          richtig:   1,
          erklaerung: 'Der PSA Deutsch besteht aus: 1. Leseverstehen (Textverständnis), 2. Sprachbetrachtung (Grammatik/Rechtschreibung), 3. Textproduktion (Schreiben).',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Beim PSA-Leseverstehen sollte man zuerst die Fragen lesen und dann den Text.',
          richtig:   true,
          erklaerung: 'Richtig! Wenn man die Fragen kennt, weiß man beim Lesen, worauf man achten soll. Das spart Zeit und erhöht die Treffsicherheit der Antworten.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was gehört in den Hauptteil eines Erörterungsaufsatzes?',
          optionen:  [
            'Nur eine persönliche Meinung ohne Begründung',
            'Die Zusammenfassung des Textes',
            'Argumente und Gegenargumente mit Begründungen',
            'Eine Liste von Fremdwörtern',
          ],
          richtig:   2,
          erklaerung: 'Im Hauptteil der Erörterung stehen Argumente (Pro) und Gegenargumente (Kontra), jeweils mit Begründungen und Beispielen belegt.',
        },
        {
          typ:       'lueckentext',
          frage:     'Welche Aufgabe gehört zur Sprachbetrachtung im PSA?',
          satz:      'Wandle den Aktivsatz ins Passiv um: „Die Schüler lösen die Aufgabe." → „Die Aufgabe ___ von den Schülern gelöst."',
          optionen:  ['hat', 'ist', 'wird', 'war'],
          richtig:   'wird',
          erklaerung: 'Passiv Präsens: „wird … gelöst". Aktivsatz → Passiv: Das Akkusativobjekt (Aufgabe) wird zum Subjekt, Hilfsverb: werden + Partizip II.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im PSA kann man in der Textproduktion mit Stichworten antworten statt mit vollständigen Sätzen.',
          richtig:   false,
          erklaerung: 'Falsch! In der Textproduktion (Schreiben) werden vollständige Sätze erwartet. Stichworte werden nicht oder gering bewertet.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches ist ein wichtiges Bewertungskriterium für die Textproduktion im PSA?',
          optionen:  [
            'Anzahl der verwendeten Fremdwörter',
            'Inhalt, Struktur, Sprache und Rechtschreibung',
            'Länge des Textes in Wörtern',
            'Anzahl der Absätze',
          ],
          richtig:   1,
          erklaerung: 'Texte werden nach Inhalt (Was steht drin?), Struktur (Aufbau), Sprache (Stil, Ausdruck) und Rechtschreibung/Zeichensetzung bewertet.',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Was muss man bei der PSA-Textproduktion beachten? (Mehrere möglich)',
          optionen:  ['Textsorte genau lesen', 'Einleitung–Hauptteil–Schluss', 'Text nach dem Schreiben nochmals lesen', 'Nur Stichworte schreiben'],
          richtig:   [0, 1, 2],
          erklaerung: 'Die ersten drei sind richtig: Textsorte kennen, Aufbau einhalten, Text kontrollieren. Stichworte sind in der Textproduktion nicht ausreichend.',
        },
      ],
    },

  ], // end kategorien
};


// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KLASSE5;
}
