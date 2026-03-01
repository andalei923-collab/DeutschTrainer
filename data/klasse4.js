// ============================================================
//  data/klasse4.js – Welt 4: Vertiefung & Abschluss
//  Deutsch Trainer | Zielgruppe: 4. Klasse Mittelschule, 13–14 Jahre
//  Österreichischer Lehrplan
// ============================================================

const KLASSE4 = {
  welt:  4,
  titel: 'Welt 4 – Vertiefung & Abschluss',

  kategorien: [

    // ╔══════════════════════════════════════════════════════╗
    // ║  1. Grammatik – Aktiv/Passiv, Konjunktiv,           ║
    // ║     indirekte Rede                                  ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'aktiv_passiv',
      titel: 'Aktiv, Passiv & Konjunktiv',
      farbe: '#a855f7',

      theorie: {
        titel: 'Aktiv, Passiv, Konjunktiv und indirekte Rede',
        erklaerung:
          '• Aktiv:\n' +
          '  Das Subjekt handelt selbst.\n' +
          '  „Der Mechaniker repariert das Auto."\n\n' +
          '• Passiv (Vorgangspassiv):\n' +
          '  Etwas wird getan – wer es tut, steht im Hintergrund.\n' +
          '  Bildung: werden + Partizip II\n' +
          '  „Das Auto wird repariert."\n' +
          '  → Das Agens (Handelnde) kann mit „von" hinzugefügt werden:\n' +
          '  „Das Auto wird vom Mechaniker repariert."\n\n' +
          '• Konjunktiv II:\n' +
          '  Drückt Wünsche, Bedingungen oder höfliche Bitten aus.\n' +
          '  Bildung: wäre, hätte, würde + Infinitiv\n' +
          '  „Wenn ich Zeit hätte, würde ich helfen."\n\n' +
          '• Konjunktiv I & indirekte Rede:\n' +
          '  Gibt wieder, was jemand gesagt hat (ohne direkte Anführungszeichen).\n' +
          '  Direkte Rede:   Er sagt: „Ich bin krank."\n' +
          '  Indirekte Rede: Er sagt, er sei krank.\n' +
          '  (sein → sei, haben → habe, gehen → gehe)',
        beispiel:
          'Aktiv:   „Die Schüler lösen die Aufgabe."\n' +
          'Passiv:  „Die Aufgabe wird (von den Schülern) gelöst."\n\n' +
          'Konjunktiv II:\n' +
          '  „Wenn ich mehr Zeit hätte, würde ich mehr lesen."\n\n' +
          'Indirekte Rede:\n' +
          '  Direkt:   Sie sagt: „Ich komme morgen."\n' +
          '  Indirekt: Sie sagt, sie komme morgen.',
        merkhilfe:
          'Passiv erkennen: „wird/werden" + Partizip II → Passiv!\n' +
          'Passiv bilden: Akkusativobjekt wird zum Subjekt.\n' +
          'Konjunktiv II: wäre / hätte / würde → Wunsch oder Bedingung\n' +
          'Indirekte Rede: Konjunktiv I (sei, habe, gehe …) → Distanz zur Aussage',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Wie bildet man das Passiv (Vorgangspassiv)?',
          optionen:  ['haben + Partizip II', 'sein + Infinitiv', 'werden + Partizip II', 'werden + Infinitiv'],
          richtig:   2,
          erklaerung: 'Passiv = werden + Partizip II. Beispiel: „Das Buch wird gelesen." werden (konjugiert) + gelesen (Partizip II).',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz steht im Passiv?',
          optionen:  [
            'Der Lehrer erklärt die Aufgabe.',
            'Die Aufgabe wird erklärt.',
            'Der Lehrer hat die Aufgabe erklärt.',
            'Die Aufgabe war schwierig.',
          ],
          richtig:   1,
          erklaerung: '„Die Aufgabe wird erklärt." → werden + Partizip II = Passiv. Die Aufgabe ist das Subjekt, sie selbst handelt nicht.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wandle den Aktivsatz ins Passiv um – ergänze das Hilfsverb:',
          satz:      'Der Brief ___ von der Sekretärin geschrieben.',
          optionen:  ['hat', 'ist', 'wird', 'war'],
          richtig:   'wird',
          erklaerung: 'Passiv Präsens: „wird … geschrieben". Der Brief ist das Subjekt, handelt aber nicht selbst.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   '„Wenn ich Zeit hätte, würde ich kommen." steht im Konjunktiv II.',
          richtig:   true,
          erklaerung: 'Richtig! „hätte" und „würde kommen" sind Konjunktiv-II-Formen. Dieser Satz drückt eine nicht erfüllte Bedingung aus.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz ist indirekte Rede?',
          optionen:  [
            'Er sagt: „Ich bin müde."',
            'Er sagt, er sei müde.',
            'Er ist müde.',
            'Er war müde.',
          ],
          richtig:   1,
          erklaerung: '"er sei müde" – der Konjunktiv I (sei) zeigt indirekte Rede. Es wird wiedergegeben, was er gesagt hat, ohne Anführungszeichen.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Passiv wird das frühere Akkusativobjekt zum Subjekt des Satzes.',
          richtig:   true,
          erklaerung: 'Richtig! Aktiv: „Der Koch kocht die Suppe." (die Suppe = Akk.Objekt) → Passiv: „Die Suppe wird gekocht." (die Suppe = Subjekt).',
        },
        {
          typ:       'lueckentext',
          frage:     'Welche Form steht in der indirekten Rede?',
          satz:      'Sie sagt, sie ___ morgen nicht kommen.',
          optionen:  ['kann', 'könne', 'konnte', 'können'],
          richtig:   'könne',
          erklaerung: '"könne" ist der Konjunktiv I von „können" – er steht in der indirekten Rede. „Sie sagt, sie könne morgen nicht kommen."',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  2. Satzbau – komplexe Satzgefüge                   ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'satzgefuege',
      titel: 'Komplexe Satzgefüge',
      farbe: '#e94560',

      theorie: {
        titel: 'Komplexe Satzgefüge – mehrere Nebensätze',
        erklaerung:
          'Ein Satzgefüge besteht aus einem Hauptsatz und einem oder mehreren Nebensätzen.\n\n' +
          '• Einfaches Satzgefüge:\n' +
          '  HS + 1 NS: „Ich lerne, weil morgen Prüfung ist."\n\n' +
          '• Mehrstufiges Satzgefüge:\n' +
          '  HS + NS + NS in NS:\n' +
          '  „Ich lerne, weil ich weiß, dass die Prüfung schwer ist."\n\n' +
          '• Relativsatz:\n' +
          '  Wird durch Relativpronomen (der, die, das, welcher …) eingeleitet.\n' +
          '  „Das Buch, das ich gestern gelesen habe, war spannend.\"\n\n' +
          '• Infinitivgruppe (kein vollständiger NS, aber satzwertig):\n' +
          '  „Er versucht, täglich Sport zu treiben."\n' +
          '  Kein Einleitewort, aber Beistrich vor „zu + Infinitiv" wenn\n' +
          '  ein Substantiv oder Pronomen vorangeht.',
        beispiel:
          'HS + NS:    „Sie hilft, obwohl sie selbst müde ist."\n' +
          'HS + NS + NS: „Er hofft, dass sie kommt, bevor es dunkel wird."\n' +
          'Relativsatz: „Der Schüler, der gewonnen hat, freut sich.\"\n' +
          'Infinitivgruppe: „Ich versuche, früh aufzustehen."',
        merkhilfe:
          'Zähle die Verben! Jedes Verb = eigener Teilsatz.\n' +
          'Jeder Nebensatz braucht einen Beistrich.\n' +
          'Relativpronomen (der/die/das) leiten immer einen Relativsatz ein → Beistrich!\n' +
          '„zu + Infinitiv" nach Substantiv/Pronomen → Beistrich davor!',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Wie viele Nebensätze enthält der Satz: „Ich glaube, dass er lügt, weil er rot wird"?',
          optionen:  ['Keinen', 'Einen', 'Zwei', 'Drei'],
          richtig:   2,
          erklaerung: 'Zwei Nebensätze: 1. „dass er lügt" (Objektsatz), 2. „weil er rot wird" (Kausalsatz). Einleitewörter: dass, weil.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Das Mädchen, das singt, ist meine Schwester" ist „das singt" ein Relativsatz.',
          richtig:   true,
          erklaerung: 'Richtig! „das singt" wird durch das Relativpronomen „das" eingeleitet und bezieht sich auf „das Mädchen" → Relativsatz.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle das richtige Relativpronomen:',
          satz:      'Der Mann, ___ dort steht, ist mein Onkel.',
          optionen:  ['das', 'die', 'der', 'den'],
          richtig:   'der',
          erklaerung: '„Der Mann" ist maskulin und Nominativ im Relativsatz (Wer steht dort?) → Relativpronomen „der".',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was ist eine Infinitivgruppe?',
          optionen:  [
            'Ein Nebensatz mit „weil"',
            'Ein Satz ohne Verb',
            'Eine satzwertige Konstruktion mit „zu + Infinitiv"',
            'Ein Hauptsatz mit zwei Verben',
          ],
          richtig:   2,
          erklaerung: 'Eine Infinitivgruppe ist eine satzwertige Konstruktion mit „zu + Infinitiv". Beispiel: „Er versucht, täglich Sport zu treiben."',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Sie hofft, ihn zu sehen" steht die Infinitivgruppe ohne Beistrich.',
          richtig:   false,
          erklaerung: 'Falsch! Wenn ein Pronomen (ihn) oder Substantiv vor der Infinitivgruppe steht, wird ein Beistrich gesetzt: „Sie hofft, ihn zu sehen."',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz ist ein komplexes Satzgefüge mit eingebettetem Relativsatz?',
          optionen:  [
            'Er liest und sie schreibt.',
            'Ich weiß, dass es schwer ist.',
            'Der Hund, der bellt, beißt nicht.',
            'Weil es regnet, bleibe ich drinnen.',
          ],
          richtig:   2,
          erklaerung: '„Der Hund, der bellt, beißt nicht." enthält einen eingebetteten Relativsatz (der bellt), der das Subjekt näher beschreibt.',
        },
        {
          typ:       'reihenfolge',
          frage:     'Bringe die Wörter in die richtige Reihenfolge (komplexes Satzgefüge):',
          woerter:   ['weiß', 'Ich', 'kommt', 'dass', 'sie', 'nicht'],
          richtig:   ['Ich', 'weiß', 'dass', 'sie', 'nicht', 'kommt'],
          erklaerung: '„Ich weiß, dass sie nicht kommt." – Hauptsatz: Ich weiß | Nebensatz mit „dass": Verb ans Ende (kommt).',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  3. Zeichensetzung – Gedankenstrich, Doppelpunkt,   ║
    // ║     Anführungszeichen                               ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'zeichensetzung4',
      titel: 'Gedankenstrich, Doppelpunkt & Anführungszeichen',
      farbe: '#0fd4c8',

      theorie: {
        titel: 'Gedankenstrich, Doppelpunkt und Anführungszeichen',
        erklaerung:
          '• Gedankenstrich (–):\n' +
          '  1. Einschub/Parenthese: „Er – und das überraschte alle – gewann."\n' +
          '  2. Pause oder Zäsur: „Ich dachte, du kommst – aber du kamst nicht."\n' +
          '  3. Dialoge: „– Wie heißt du? – Anna."\n\n' +
          '• Doppelpunkt (:):\n' +
          '  1. Vor direkter Rede: „Sie sagte: Ich komme."\n' +
          '  2. Vor Aufzählung: „Ich brauche: Stift, Heft und Lineal."\n' +
          '  3. Vor Schlussfolgerung: „Es regnete, der Boden war nass: klar!"\n\n' +
          '• Anführungszeichen (» «  oder „ "):\n' +
          '  1. Direkte Rede: „Er sagte: Ich bin da."\n' +
          '  2. Zitate, Titel: Das Lied „Stille Nacht" stammt aus Österreich.\n' +
          '  3. Ironische Verwendung: Der „Experte" wusste gar nichts.\n\n' +
          'In Österreich: öffnend „  schließend " (deutsche Regel)\n' +
          'oder » «  (Guillemets)',
        beispiel:
          'Gedankenstrich:\n' +
          '  „Sie – die Beste in der Klasse – bekam den ersten Preis."\n\n' +
          'Doppelpunkt:\n' +
          '  „Er rief: Hilfe!"\n' +
          '  „Zutaten: Mehl, Eier, Milch"\n\n' +
          'Anführungszeichen:\n' +
          '  „Er sagte: Ich komme morgen."\n' +
          '  Das Buch „Der Vorleser" ist sehr bekannt.',
        merkhilfe:
          'Gedankenstrich: Einschub in Gedanken → zwischen zwei Strichen!\n' +
          'Doppelpunkt: vor direkter Rede, vor Aufzählung, vor Schlussfolgerung\n' +
          'Anführungszeichen: direkte Rede „…" → nach Doppelpunkt öffnen!\n' +
          'Merke: Doppelpunkt + Anführungszeichen gehen oft gemeinsam!',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Wann setzt man einen Doppelpunkt?',
          optionen:  [
            'Immer am Ende eines Satzes',
            'Vor direkter Rede, Aufzählung oder Schlussfolgerung',
            'Nur nach Nomen',
            'Vor Adjektiven',
          ],
          richtig:   1,
          erklaerung: 'Der Doppelpunkt steht vor direkter Rede, vor Aufzählungen und vor Schlussfolgerungen. Beispiel: „Er rief: Hilfe!" oder „Zutaten: Mehl, Eier."',
        },
        {
          typ:        'satz_korrigieren',
          frage:      'Finde das fehlende oder falsch gesetzte Satzzeichen – klicke auf das betroffene Wort:',
          satz:       'Sie sagte ich komme morgen bestimmt.',
          fehlerWort: 'sagte',
          erklaerung: 'Nach „sagte" fehlt ein Doppelpunkt: „Sie sagte: Ich komme morgen bestimmt." Vor direkter Rede steht immer ein Doppelpunkt.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Wofür werden Anführungszeichen verwendet? (Wähle die vollständigste Antwort)',
          optionen:  [
            'Nur für direkte Rede',
            'Für direkte Rede, Zitate, Titel und ironische Wörter',
            'Nur für Zitate aus Büchern',
            'Nur am Anfang eines Satzes',
          ],
          richtig:   1,
          erklaerung: 'Anführungszeichen stehen bei: 1. direkter Rede, 2. Zitaten und Titeln, 3. ironisch gemeinten Wörtern (z. B. der „Experte").',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Er – seit Jahren der Beste – gewann die Meisterschaft" werden die Gedankenstriche korrekt verwendet.',
          richtig:   true,
          erklaerung: 'Richtig! Gedankenstriche rahmen einen Einschub (Parenthese) ein. „seit Jahren der Beste" ist ein eingeschobener Erläuterungssatz.',
        },
        {
          typ:       'lueckentext',
          frage:     'Welches Satzzeichen fehlt vor der Aufzählung?',
          satz:      'Sie kaufte alles ein___ Brot, Milch und Butter.',
          optionen:  [';', '–', ':', ','],
          richtig:   ':',
          erklaerung: 'Vor einer Aufzählung steht ein Doppelpunkt: „Sie kaufte alles ein: Brot, Milch und Butter."',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Anführungszeichen können auch ironisch eingesetzt werden, z. B. steht „Experte" in Anführungszeichen wenn er keiner ist.',
          richtig:   true,
          erklaerung: 'Richtig! Ironische Anführungszeichen signalisieren, dass ein Wort nicht wörtlich gemeint ist – der Leser soll skeptisch sein.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz verwendet den Gedankenstrich korrekt?',
          optionen:  [
            'Sie – war sehr müde und schlief ein.',
            'Das Ergebnis – überraschend für alle – war positiv.',
            'Ich – glaube – dass er kommt.',
            'Er lief – schnell.',
          ],
          richtig:   1,
          erklaerung: '„Das Ergebnis – überraschend für alle – war positiv." – Der Einschub „überraschend für alle" ist korrekt in Gedankenstriche eingeschlossen.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  4. Textsorten – Brief, E-Mail, Erörterung          ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'textsorten',
      titel: 'Textsorten erkennen',
      farbe: '#f5a623',

      theorie: {
        titel: 'Textsorten – Brief, E-Mail und Erörterung',
        erklaerung:
          '• Formeller Brief:\n' +
          '  Aufbau: Absender | Empfänger | Datum | Betreff | Anrede |\n' +
          '  Hauptteil | Schlussformel | Unterschrift\n' +
          '  Sprache: höflich, sachlich, formell\n' +
          '  Verwendung: Bewerbung, Beschwerde, Anfrage\n\n' +
          '• E-Mail:\n' +
          '  Formell: ähnlich Brief, aber kein Briefkopf, Betreffzeile oben\n' +
          '  Informell: kurz, direkt, oft ohne Grußformel\n' +
          '  Verwendung: schnelle Kommunikation\n\n' +
          '• Erörterung:\n' +
          '  Aufbau: Einleitung → These → Argumente (Pro/Kontra) →\n' +
          '  Gegenargumente → Fazit/Schluss\n' +
          '  Ziel: Eine Frage sachlich von mehreren Seiten beleuchten\n' +
          '  Sprache: sachlich, argumentativ, unpersönlich (man, es)\n\n' +
          '• Bericht / Beschreibung (zur Abgrenzung):\n' +
          '  Bericht: sachlich, Vergangenheit, Wer-Was-Wo-Wann-Wie\n' +
          '  Beschreibung: Gegenwartsform, detailliert, geordnet',
        beispiel:
          'Brief:\n' +
          '  Wien, 28. Februar 2026\n' +
          '  Betreff: Anfrage zum Kurs\n' +
          '  Sehr geehrte Damen und Herren, …\n' +
          '  Mit freundlichen Grüßen\n\n' +
          'Erörterung:\n' +
          '  „Sollten Smartphones in der Schule verboten werden?\n' +
          '  Einerseits … Andererseits … Alles in allem …"',
        merkhilfe:
          'Brief: Absender + Empfänger + Datum + Anrede + Schluss\n' +
          'E-Mail: Betreff oben, kein Briefkopf\n' +
          'Erörterung: THESE → PRO → KONTRA → FAZIT\n' +
          'Schlagwörter der Erörterung: „einerseits", „andererseits", „alles in allem"',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Was gehört zu den Pflichtteilen eines formellen Briefs?',
          optionen:  [
            'Betreff, Anrede, Hauptteil, Schlussformel, Unterschrift',
            'Nur Hauptteil und Unterschrift',
            'Hashtags und Emojis',
            'Nur Anrede und Datum',
          ],
          richtig:   0,
          erklaerung: 'Ein formeller Brief enthält: Absender, Empfänger, Datum, Betreff, Anrede, Hauptteil, Schlussformel und Unterschrift.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Eine Erörterung beleuchtet ein Thema von mehreren Seiten (Pro und Kontra).',
          richtig:   true,
          erklaerung: 'Richtig! Die Erörterung zeigt Argumente und Gegenargumente zu einer Frage und kommt am Ende zu einem begründeten Fazit.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welche Anrede ist für einen formellen Brief korrekt?',
          optionen:  [
            'Hey, was geht!',
            'Hallo Frau Maier,',
            'Sehr geehrte Frau Maier,',
            'Liebe Frau Maier!',
          ],
          richtig:   2,
          erklaerung: '„Sehr geehrte Frau Maier," ist die korrekte formelle Anrede. „Hallo" und „Liebe" sind für informelle Texte; „Hey, was geht!" ist umgangssprachlich.',
        },
        {
          typ:       'lueckentext',
          frage:     'Welches Übergangswort ist typisch für eine Erörterung?',
          satz:      '„___ ist es praktisch, andererseits entstehen neue Probleme."',
          optionen:  ['Hurra', 'Plötzlich', 'Einerseits', 'Neulich'],
          richtig:   'Einerseits',
          erklaerung: '„Einerseits … andererseits" ist ein typisches Sprachpaar der Erörterung – es zeigt Pro- und Kontraargumente.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Eine informelle E-Mail an eine Freundin muss immer mit „Sehr geehrte/r …" beginnen.',
          richtig:   false,
          erklaerung: 'Falsch! Eine informelle E-Mail kann mit „Hallo", „Hi" oder dem Namen beginnen. „Sehr geehrte/r" ist nur für formelle E-Mails und Briefe.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welche Textsorte erkennt man an den Elementen These – Argumente – Gegenargumente – Fazit?',
          optionen:  ['Bericht', 'Brief', 'Erörterung', 'Beschreibung'],
          richtig:   2,
          erklaerung: 'Die Erörterung hat den klassischen Aufbau: Einleitung/These → Argumente → Gegenargumente → Schluss/Fazit.',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche Elemente gehören zu einem formellen Brief, aber NICHT zu einer E-Mail? (Mehrere möglich)',
          optionen:  ['Absender mit Anschrift', 'Betreffzeile', 'Briefkopf', 'Schlussformel'],
          richtig:   [0, 2],
          erklaerung: 'Absender mit Anschrift (als Briefkopf) ist typisch für den formellen Brief. E-Mails haben eine Betreffzeile und Schlussformel, aber keinen Briefkopf.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  5. Rechtschreibung – ss/ß, Fremdwörter,            ║
    // ║     Nominalisierung                                 ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'rechtschreibung4',
      titel: 'Rechtschreibung – schwierige Fälle',
      farbe: '#4ade80',

      theorie: {
        titel: 'ss/ß-Regel, Nominalisierungen und Fremdwortschreibung',
        erklaerung:
          '1. ss / ß – Regel:\n' +
          '  Kurzer Vokal vor dem s-Laut → ss\n' +
          '    Fluss, messen, Wasser, dass\n' +
          '  Langer Vokal oder Diphthong → ß\n' +
          '    Straße, Maß, heiß, reißen, Fuß\n\n' +
          '2. Nominalisierungen (Substantivierungen):\n' +
          '  Verben und Adjektive können zu Nomen werden → Großschreibung!\n' +
          '  laufen → das Laufen\n' +
          '  schön  → das Schöne, das Schönste\n' +
          '  Essen  → das Essen\n\n' +
          '3. Fremdwortschreibung:\n' +
          '  Fremdwörter behalten oft ihre Originalschreibung:\n' +
          '  Rhythmus, Phrase, Chaos, Niveau, Jalousie\n' +
          '  Eingedeutschte Schreibung: Telefon (Telephon), Foto (Photo)',
        beispiel:
          'ss: „Er isst Wasser." – kurzes i und kurzes a → ss\n' +
          'ß:  „Die Straße ist heiß." – langes a und ei → ß\n\n' +
          'Nominalisierung:\n' +
          '  „das Schreiben" (Verb → Nomen)\n' +
          '  „das Beste" (Adjektiv → Nomen, groß!)\n\n' +
          'Fremdwörter: Rhythmus, Niveau, Chaos, Jalousie',
        merkhilfe:
          'ss / ß – Test:\n' +
          '  Sprich den Vokal VOR dem s-Laut:\n' +
          '  Kurz? → ss  (Fluss, nass)\n' +
          '  Lang oder Diphthong? → ß  (Straße, heiß)\n\n' +
          'Nominalisierung erkennen: „das/ein" davor setzen möglich? → Großschreiben!\n' +
          '  das Laufen, ein Essen, das Beste',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Welche Schreibweise ist richtig: ss oder ß?',
          optionen:  ['die Straße', 'die Straße', 'die Strasse', 'die Straße'],
          richtig:   0,
          erklaerung: '"die Straße" mit ß – der Vokal vor dem s-Laut ist lang (a → Stra-ße). Langer Vokal → ß.',
        },
        {
          typ:       'lueckentext',
          frage:     'ss oder ß? Wähle die richtige Schreibweise:',
          satz:      'Der Fluss flie___ schnell durch die Stadt.',
          optionen:  ['ß', 'ss', 'sss', 's'],
          richtig:   'ß',
          erklaerung: '"fließt" – das „ie" ist ein langer Vokal → ß: „fließt". (Nicht „fliesst"!)',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort ist eine korrekte Nominalisierung?',
          optionen:  ['das laufen', 'Das Laufen', 'das Laufen', 'Das laufen'],
          richtig:   2,
          erklaerung: '„das Laufen" – Nominalisierungen werden großgeschrieben, und „das" beginnt mit kleinem Buchstaben am Satzanfang wäre falsch. „das Laufen" (im Satzmittel) ist korrekt.',
        },
        {
          typ:        'satz_korrigieren',
          frage:      'Finde das falsch geschriebene Wort und klicke darauf:',
          satz:       'Das Wasser im See ist kalt und nasss.',
          fehlerWort: 'nasss',
          erklaerung: '„nass" – kurzes „a" → ss, aber nur doppelt: „nass". „nasss" mit drei s gibt es nicht.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Im Satz „Ich mag das Lesen sehr" ist „Lesen" ein nominalisiertes Verb und wird großgeschrieben.',
          richtig:   true,
          erklaerung: 'Richtig! „das Lesen" – „lesen" (Verb) wird durch den Artikel „das" zum Nomen → Nominalisierung → Großschreibung!',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche Wörter enthalten ein „ß"? (Mehrere möglich)',
          optionen:  ['heiß', 'Wasser', 'Straße', 'Fluss'],
          richtig:   [0, 2],
          erklaerung: '"heiß" (ei = Diphthong → ß) und "Straße" (langes a → ß). "Wasser" und "Fluss" haben kurze Vokale → ss.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welche Fremdwortschreibung ist eingedeutscht (nicht die Originalschreibung)?',
          optionen:  ['Rhythmus', 'Chaos', 'Foto', 'Niveau'],
          richtig:   2,
          erklaerung: '„Foto" ist die eingedeutschte Schreibung von „Photo" (griechisch). „Rhythmus", „Chaos" und „Niveau" behalten die Originalschreibung.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  6. Synonyme – stilistisch passend wählen           ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'synonyme4',
      titel: 'Synonyme – Stilebene & Kontext',
      farbe: '#a855f7',

      theorie: {
        titel: 'Stilistisch passende Synonyme wählen',
        erklaerung:
          'Synonyme unterscheiden sich oft in der Stilebene:\n\n' +
          '• Stilebenen:\n' +
          '  gehoben:          erörtern, darlegen, konstatieren\n' +
          '  neutral/standard: erklären, sagen, feststellen\n' +
          '  umgangssprachlich:erklären, sagen, meinen\n' +
          '  derb/salopp:      labern, quatschen, stänkern\n\n' +
          '• Konnotation (Beiklang):\n' +
          '  positiv:  Menschenmenge, Gemeinschaft, Gruppe\n' +
          '  neutral:  Ansammlung von Menschen\n' +
          '  negativ:  Masse, Mob, Horde\n\n' +
          '• Geltungsbereich:\n' +
          '  Ein formeller Text (Erörterung, Brief) braucht\n' +
          '  gehobene oder neutrale Synonyme.\n' +
          '  Ein persönlicher Text (Tagebuch, Chat) darf\n' +
          '  umgangssprachliche Synonyme enthalten.',
        beispiel:
          'Stilebenen für „sagen":\n' +
          '  gehoben:        konstatieren, formulieren, darlegen\n' +
          '  neutral:        erklären, berichten, mitteilen\n' +
          '  umgangssprachlich: meinen, behaupten, hinwerfen\n\n' +
          'Konnotation für „mutig":\n' +
          '  positiv: tapfer, heldenhaft, couragiert\n' +
          '  neutral:  mutig, beherzt\n' +
          '  (negativ: leichtsinnig, draufgängerisch)',
        merkhilfe:
          'Vor dem Synonym-Wählen fragen:\n' +
          '  1. Welche Textsorte/Situation liegt vor?\n' +
          '  2. Formell oder informell?\n' +
          '  3. Positive, negative oder neutrale Konnotation erwünscht?\n' +
          'Dann: Das Synonym wählen, das am besten passt!',
      },

      fragen: [
        {
          typ:       'synonym_finden',
          frage:     'Welches Synonym für „sagen" passt in eine formelle Erörterung?',
          optionen:  ['quatschen', 'labern', 'darlegen', 'hinwerfen'],
          richtig:   2,
          erklaerung: '"darlegen" ist ein gehobenes, formelles Synonym für „sagen/erklären". In einer Erörterung braucht man sachliche, formelle Sprache.',
        },
        {
          typ:       'synonym_finden',
          frage:     'Welches Synonym für „Gruppe von Menschen" hat eine negative Konnotation?',
          optionen:  ['Gemeinschaft', 'Mob', 'Team', 'Gesellschaft'],
          richtig:   1,
          erklaerung: '"Mob" hat eine stark negative Konnotation – es impliziert eine unkontrollierte, gefährliche Menschenmenge. „Gemeinschaft" und „Team" sind positiv.',
        },
        {
          typ:       'lueckentext',
          frage:     'Wähle das stilistisch passende Synonym für einen formellen Brief:',
          satz:      'Ich möchte Sie hiermit ___, dass die Lieferung verspätet ist.',
          optionen:  ['anquatschen', 'informieren', 'anmeckern', 'bescheid geben'],
          richtig:   'informieren',
          erklaerung: '"informieren" ist formell-neutral und passt in einen Geschäftsbrief. „anquatschen" und „anmeckern" sind umgangssprachlich/salopp.',
        },
        {
          typ:       'synonym_verbinden',
          frage:     'Verbinde die Synonyme und achte auf die Stilebene (jeweils gleichwertig):',
          paare: [
            ['erörtern',   'diskutieren'  ],
            ['konstatieren','feststellen' ],
            ['darlegen',   'erklären'     ],
            ['appellieren','aufrufen'     ],
          ],
          erklaerung: 'Richtige Paare: erörtern ↔ diskutieren | konstatieren ↔ feststellen | darlegen ↔ erklären | appellieren ↔ aufrufen',
        },
        {
          typ:       'synonym_verbinden',
          frage:     'Verbinde die Synonyme (formell ↔ umgangssprachlich):',
          paare: [
            ['kommunizieren', 'reden'    ],
            ['erwerben',      'kaufen'   ],
            ['wohnen',        'hausen'   ],
            ['betrachten',    'angucken' ],
          ],
          erklaerung: 'Richtige Paare: kommunizieren ↔ reden | erwerben ↔ kaufen | wohnen ↔ hausen | betrachten ↔ angucken',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'In einer Bewerbung ist „Ich will den Job" und „Ich bewerbe mich um die Stelle" gleichwertig.',
          richtig:   false,
          erklaerung: 'Falsch! Beide bedeuten dasselbe, aber die Stilebene ist verschieden. „Ich bewerbe mich um die Stelle" ist formell-korrekt für eine Bewerbung; „Ich will den Job" ist umgangssprachlich und unpassend.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Synonym für „tapfer" hat die positivste Konnotation?',
          optionen:  ['draufgängerisch', 'heldenhaft', 'leichtsinnig', 'stur'],
          richtig:   1,
          erklaerung: '"heldenhaft" hat die stärkste positive Konnotation – es impliziert bewundernswertes Verhalten. „draufgängerisch" und „leichtsinnig" können negativ wirken.',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  7. Homonyme – komplexere Fälle                     ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'homonyme4',
      titel: 'Homonyme – komplexe Fälle',
      farbe: '#f5a623',

      theorie: {
        titel: 'Homonyme – Gericht, Steuer, Recht, Gehalt',
        erklaerung:
          '• Gericht:\n' +
          '  1. Zubereitete Speise: „Das Gericht schmeckte köstlich."\n' +
          '  2. Justizbehörde/Tribunal: „Er wurde vor Gericht gestellt."\n\n' +
          '• Steuer:\n' +
          '  1. das Steuer – Lenkrad, Lenkvorrichtung: „Sie hielt das Steuer fest."\n' +
          '  2. die Steuer – Abgabe an den Staat: „Er muss hohe Steuern zahlen."\n\n' +
          '• Recht:\n' +
          '  1. das Recht – Gesetze, Gesetzgebung: „das österreichische Recht"\n' +
          '  2. recht (Adjektiv) – richtig, korrekt: „Du hast recht."\n' +
          '  3. rechts – die rechte Seite: „Biege rechts ab."\n\n' +
          '• Gehalt:\n' +
          '  1. das Gehalt – monatlicher Lohn: „Sein Gehalt ist gestiegen."\n' +
          '  2. der Gehalt – Inhalt/Anteil von etwas: „der Vitamingehalt"\n\n' +
          'Wichtig: Bei „Steuer" und „Gehalt" verrät der Artikel die Bedeutung!',
        beispiel:
          'Gericht: „Das Gericht fällte ein Urteil." → Justiz\n' +
          '         „Das Gericht war lecker." → Speise\n\n' +
          'Steuer:  „Er dreht das Steuer." → Lenkrad\n' +
          '         „Sie zahlt viele Steuern." → Abgabe\n\n' +
          'Gehalt:  „Sein Gehalt beträgt 2 000 Euro." → Lohn\n' +
          '         „der Zuckergehalt im Blut" → Anteil',
        merkhilfe:
          'Artikel als Hilfe:\n' +
          '  das Steuer (Lenkrad) ↔ die Steuer (Abgabe)\n' +
          '  das Gehalt (Lohn)    ↔ der Gehalt (Anteil)\n\n' +
          'Kontext:\n' +
          '  Gericht: Speise oder Justiz? → Küche oder Gericht-/Gerichtsgebäude?\n' +
          '  Recht: Gesetze oder „du hast recht" → Substantiv oder Adjektiv?',
      },

      fragen: [
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Gericht" in diesem Satz?',
          satz:      'Das Gericht verurteilte den Angeklagten zu zwei Jahren Haft.',
          optionen:  ['Zubereitete Speise', 'Justizbehörde / Tribunal', 'Restaurant', 'Schule'],
          richtig:   1,
          erklaerung: '"verurteilte", "Angeklagten" und "Haft" sind juristische Begriffe → hier ist die Justizbehörde gemeint.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Gericht" in diesem Satz?',
          satz:      'Meine Mutter kocht heute ein österreichisches Gericht.',
          optionen:  ['Gerichtssaal', 'Speise / Mahlzeit', 'Urteil', 'Gesetz'],
          richtig:   1,
          erklaerung: '"kocht" und "österreichisches" zeigen: Hier ist eine Speise (ein Essen) gemeint.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Steuer" in diesem Satz?',
          satz:      'Der Fahrer hielt das Steuer ruhig, obwohl die Straße glatt war.',
          optionen:  ['Abgabe an den Staat', 'Lenkrad / Lenkvorrichtung', 'Bremse', 'Schaltung'],
          richtig:   1,
          erklaerung: '"halten", "Fahrer" und "Straße" zeigen: Hier ist das Lenkrad (Steuer des Fahrzeugs) gemeint. Artikel: das Steuer.',
        },
        {
          typ:       'homonym_bedeutung',
          frage:     'Welche Bedeutung hat „Gehalt" in diesem Satz?',
          satz:      'Orangen haben einen hohen Vitamin-C-Gehalt.',
          optionen:  ['Monatlicher Lohn', 'Anteil / Inhalt von etwas', 'Stellenwert', 'Preis'],
          richtig:   1,
          erklaerung: '"Vitamin-C-Gehalt" = Anteil an Vitamin C (der Gehalt). Der Artikel wäre „der Gehalt" (Inhalt). Nicht zu verwechseln mit „das Gehalt" (Lohn).',
        },
        {
          typ:       'multiple_choice',
          frage:     'Wie unterscheidet man bei „Steuer" die zwei Bedeutungen am sichersten?',
          optionen:  ['An der Aussprache', 'Am Artikel (das Steuer vs. die Steuer)', 'An der Endung', 'An der Großschreibung'],
          richtig:   1,
          erklaerung: 'Der Artikel ist entscheidend: das Steuer = Lenkrad; die Steuer = staatliche Abgabe. Auch der Plural hilft: die Steuern (Abgaben).',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   '„Recht" kann sowohl ein Substantiv (das Recht) als auch ein Adjektiv (du hast recht) sein.',
          richtig:   true,
          erklaerung: 'Richtig! „das Recht" (Substantiv, Gesetze) und „recht haben" (Adjektiv, korrekt sein) sind zwei Bedeutungen desselben Wortes.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   '„das Gehalt" (Lohn) und „der Gehalt" (Anteil) sind dasselbe Wort mit demselben Artikel.',
          richtig:   false,
          erklaerung: 'Falsch! Die Artikel sind verschieden: das Gehalt (Lohn) und der Gehalt (Anteil/Inhalt). Der Artikel verrät die Bedeutung!',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  8. Steigerungsformen – absolute Adjektive          ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'steigerung4',
      titel: 'Absolute Adjektive & Elativ',
      farbe: '#0fd4c8',

      theorie: {
        titel: 'Absolute Adjektive – nicht steigerbar!',
        erklaerung:
          'Die meisten Adjektive lassen sich steigern: groß → größer → am größten.\n' +
          'Aber manche Adjektive beschreiben einen absoluten Zustand –\n' +
          'sie können logischerweise NICHT gesteigert werden:\n\n' +
          '• Absolute Adjektive (nicht steigerbar):\n' +
          '  optimal   (= das Bestmögliche)\n' +
          '  perfekt   (= ohne jeden Fehler)\n' +
          '  absolut   (= vollständig, ohne Einschränkung)\n' +
          '  maximal   (= höchstmöglich)\n' +
          '  minimal   (= geringstmöglich)\n' +
          '  einzigartig (= ohne Vergleich)\n' +
          '  vollständig (= ohne Fehlteile)\n' +
          '  total, ideal, universell\n\n' +
          '• Warum kann man sie nicht steigern?\n' +
          '  „optimaler" → Wenn etwas optimal ist, gibt es nichts Besseres!\n' +
          '  „perfekter" → Wenn etwas perfekt ist, hat es keine Fehler mehr.\n\n' +
          '• Elativ:\n' +
          '  Kein Vergleich, sondern eine Verstärkung: sehr + Adjektiv\n' +
          '  Elative als Wortbildung: blitz-sauber, bitter-kalt, hoch-interessant\n' +
          '  „Das war ein hochinteressanter Vortrag." (kein echter Superlativ!)',
        beispiel:
          'Falsch:  „Diese Lösung ist noch optimaler." ✗\n' +
          '         „Das ist die perfekteste Arbeit." ✗\n\n' +
          'Richtig: „Diese Lösung ist optimal." ✓\n' +
          '         „Das ist eine perfekte Arbeit." ✓\n\n' +
          'Elativ:  „Das war ein bitterkalter Wintertag."\n' +
          '         „Sie hat eine einwandfreie, blitzsaubere Arbeit abgegeben."',
        merkhilfe:
          'Test für absolute Adjektive:\n' +
          '  „Kann ich noch [Adjektiv]-er sagen, ohne einen Widerspruch zu erzeugen?"\n' +
          '  Ja → normale Steigerung möglich\n' +
          '  Nein → absolutes Adjektiv, nicht steigerbar!\n\n' +
          'Die häufigsten absoluten Adjektive merken:\n' +
          '  optimal – perfekt – absolut – maximal – einzigartig',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Warum kann man „perfekt" nicht steigern?',
          optionen:  [
            'Weil es ein Fremdwort ist',
            'Weil es kein Adjektiv ist',
            'Weil es einen absoluten Zustand beschreibt (keine Fehler möglich)',
            'Weil es zu lang ist',
          ],
          richtig:   2,
          erklaerung: '"perfekt" bedeutet „ohne jeden Fehler" – wenn etwas perfekt ist, gibt es nichts Besseres. „perfekter" wäre ein logischer Widerspruch.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Der Satz „Diese Methode ist noch optimaler" ist sprachlich korrekt.',
          richtig:   false,
          erklaerung: 'Falsch! „optimal" ist ein absolutes Adjektiv und kann nicht gesteigert werden. Wenn etwas optimal ist, ist es bereits das Bestmögliche.',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche Adjektive sind absolut (nicht steigerbar)? (Mehrere möglich)',
          optionen:  ['groß', 'maximal', 'schnell', 'einzigartig'],
          richtig:   [1, 3],
          erklaerung: '"maximal" (höchstmöglich) und "einzigartig" (ohne Vergleich) sind absolute Adjektive. "groß" und "schnell" lassen sich normal steigern.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was ist ein Elativ?',
          optionen:  [
            'Der Superlativ eines absoluten Adjektivs',
            'Eine Verstärkungsform ohne Vergleich (z. B. bitterkalter)',
            'Ein Adjektiv ohne Steigerung',
            'Der Komparativ im Nebensatz',
          ],
          richtig:   1,
          erklaerung: 'Ein Elativ ist eine Verstärkung ohne Vergleich: „bitterkalt", „hochinteressant", „blitzsauber". Er vergleicht nicht, sondern verstärkt.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   '„Das war ein hochinteressanter Vortrag" ist ein Beispiel für einen Elativ.',
          richtig:   true,
          erklaerung: 'Richtig! „hochinteressant" ist ein Elativ – es verstärkt „interessant", ohne einen Vergleich anzustellen. Es ist kein echter Superlativ.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welcher Satz ist sprachlich korrekt?',
          optionen:  [
            'Das ist die einzigartigste Ausstellung, die ich je gesehen habe.',
            'Das ist eine einzigartige Ausstellung.',
            'Diese Ausstellung ist noch einzigartiger als die letzte.',
            'Diese Ausstellung war am einzigartigsten.',
          ],
          richtig:   1,
          erklaerung: '"Das ist eine einzigartige Ausstellung." – „einzigartig" ist absolut und wird nicht gesteigert. Alle anderen Optionen enthalten unzulässige Steigerungen.',
        },
        {
          typ:       'steigerung_ordnen',
          frage:     'Bringe die regulären Steigerungsformen in die richtige Reihenfolge:',
          woerter:   ['am weitesten', 'weit', 'weiter'],
          richtig:   ['weit', 'weiter', 'am weitesten'],
          erklaerung: 'weit → weiter → am weitesten. Reguläre Steigerung. (Im Unterschied zu absoluten Adjektiven wie „maximal" kann „weit" gesteigert werden.)',
        },
      ],
    },


    // ╔══════════════════════════════════════════════════════╗
    // ║  9. Fremdwörter – Latein, Griechisch, Englisch      ║
    // ╚══════════════════════════════════════════════════════╝
    {
      id:    'fremdwoerter4',
      titel: 'Fremdwörter – Herkunft & Bedeutung',
      farbe: '#e94560',

      theorie: {
        titel: 'Fremdwörter aus Latein, Griechisch und Englisch',
        erklaerung:
          'Viele Fremdwörter im Deutschen lassen sich auf wenige Wortwurzeln zurückführen:\n\n' +
          '• Lateinische Wurzeln:\n' +
          '  aqua  (Wasser):  Aquarium, Aquädukt\n' +
          '  terra (Erde):    Terrarium, Terrain, territorial\n' +
          '  porta (Tür/Tor): Portal, portabel, Import, Export\n' +
          '  scrib (schreiben): Skript, Beschreibung, skribieren\n\n' +
          '• Griechische Wurzeln:\n' +
          '  bio   (Leben):   Biologie, Biographie, Biotop\n' +
          '  geo   (Erde):    Geographie, Geologie, Geometrie\n' +
          '  demos (Volk):    Demokratie, Demographie\n' +
          '  phon  (Stimme/Ton): Telefon, Mikrofon, Phonetik\n\n' +
          '• Anglizismen (aus dem Englischen):\n' +
          '  Computer, Internet, Job, Team, Stress, Download,\n' +
          '  checken, chillen, cool, Hashtag, Update\n\n' +
          'Anglizismen sind oft in der Jugendsprache und Technik häufig.\n' +
          'Sie haben meist deutsche Alternativen: Job → Arbeit/Stelle',
        beispiel:
          'bio = Leben:\n' +
          '  Biologie (Lehre vom Leben)\n' +
          '  Biographie (Lebensbeschreibung)\n\n' +
          'terra = Erde:\n' +
          '  Terrarium, territorial, Terrain\n\n' +
          'Anglizismen im Alltag:\n' +
          '  „Ich muss das Update noch downloaden."\n' +
          '  (Update → Aktualisierung; downloaden → herunterladen)',
        merkhilfe:
          'Wortwurzeln als Schlüssel:\n' +
          '  aqua = Wasser → bei jedem Wort mit „aqua": Wasser!\n' +
          '  bio  = Leben  → Biologie, Biotop, Biographie\n' +
          '  geo  = Erde   → Geographie, Geologie\n' +
          '  phon = Stimme → Telefon, Mikrofon\n\n' +
          'Anglizismen erkennen: klingen sie englisch? → Anglizismus!\n' +
          'Tipp: Gibt es ein deutsches Wort dafür? → Beides korrekt!',
      },

      fragen: [
        {
          typ:       'multiple_choice',
          frage:     'Was bedeutet die griechische Wortwurzel „bio"?',
          optionen:  ['Erde', 'Wasser', 'Leben', 'Stimme'],
          richtig:   2,
          erklaerung: '„bio" stammt aus dem Griechischen und bedeutet „Leben". Beispiele: Biologie (Lehre vom Leben), Biographie (Lebensbeschreibung).',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort enthält die lateinische Wurzel „aqua" (Wasser)?',
          optionen:  ['Terrarium', 'Aquarium', 'Biologie', 'Demographie'],
          richtig:   1,
          erklaerung: '„Aquarium" enthält die Wurzel „aqua" (Wasser) – ein Aquarium ist ein Wasserbehälter für Tiere und Pflanzen.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Welches Wort ist ein Anglizismus (Entlehnung aus dem Englischen)?',
          optionen:  ['Biologie', 'Demokratie', 'Download', 'Aquädukt'],
          richtig:   2,
          erklaerung: '„Download" ist ein Anglizismus aus dem Englischen (to download). Die deutsche Alternative wäre „Herunterladen".',
        },
        {
          typ:       'lueckentext',
          frage:     'Welches Fremdwort mit der Wurzel „geo" (Erde) passt?',
          satz:      'Die ___ beschäftigt sich mit dem Aufbau und den Schichten der Erde.',
          optionen:  ['Biologie', 'Geologie', 'Geographie', 'Demographie'],
          richtig:   'Geologie',
          erklaerung: '"Geologie" (geo = Erde + logos = Lehre) ist die Wissenschaft vom Aufbau der Erde. Geographie beschreibt eher die Oberfläche.',
        },
        {
          typ:       'richtig_falsch',
          frage:     'Ist die Aussage richtig oder falsch?',
          aussage:   'Das Wort „Telefon" enthält die griechische Wurzel „phon" (Stimme/Ton).',
          richtig:   true,
          erklaerung: 'Richtig! „Telefon" = tele (fern) + phon (Stimme) → Fernsprecher. Auch: Mikrofon (mikro = klein), Phonetik (Lautwissenschaft).',
        },
        {
          typ:       'mehrfachauswahl',
          frage:     'Welche Wörter sind Anglizismen? (Mehrere möglich)',
          optionen:  ['Stress', 'Aquarium', 'Hashtag', 'Demokratie'],
          richtig:   [0, 2],
          erklaerung: '"Stress" und "Hashtag" sind Anglizismen aus dem Englischen. "Aquarium" stammt aus dem Lateinischen, "Demokratie" aus dem Griechischen.',
        },
        {
          typ:       'multiple_choice',
          frage:     'Was bedeutet das Fremdwort „Demographie"?',
          optionen:  [
            'Lehre von der Erde',
            'Wissenschaft von der Bevölkerung (demos = Volk)',
            'Beschreibung des Lebens',
            'Lehre von der Stimme',
          ],
          richtig:   1,
          erklaerung: '„Demographie" = demos (Volk) + graphie (Beschreibung) → Wissenschaft, die Bevölkerungen beschreibt und untersucht.',
        },
      ],
    },

  ], // end kategorien
};


// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KLASSE4;
}
