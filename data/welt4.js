// ============================================================
//  welt4.js – Welt 4: Texte & Kommunikation
//  5 Unterwelten × 30 Fragen = 150 Fragen
//  Zielgruppe: 1.–2. Klasse MS, 10–12 Jahre
// ============================================================

const WELT4 = {

  // ================================================================
  //  4.1 – Textarten erkennen
  // ================================================================
  '4-1': {
    theorie: {
      titel: 'Textarten erkennen',
      erklaerung: 'Es gibt verschiedene Textarten, und jede hat einen eigenen Zweck und eigene Merkmale. Eine Erzählung unterhält und hat eine Einleitung, einen Hauptteil mit Höhepunkt und einen Schluss. Ein Bericht informiert sachlich über ein Ereignis (W-Fragen, Präteritum, keine Meinung). Eine Beschreibung erklärt, wie etwas aussieht oder funktioniert (Präsens, genaue Details). Ein Kommentar gibt eine persönliche Meinung zu einem Thema ab. Ein Märchen ist eine fantastische Erzählung mit typischen Merkmalen wie "Es war einmal..." und einem Happy End.',
      beispiel: '<span class="highlight">Erzählung</span>: spannende Geschichte mit Höhepunkt. <span class="highlight">Bericht</span>: sachlich, W-Fragen. <span class="highlight">Märchen</span>: "Es war einmal..."',
      merkhilfe: 'Frage dich: Will der Text unterhalten (Erzählung/Märchen), informieren (Bericht/Beschreibung) oder überzeugen (Kommentar)?',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Was ist das Hauptmerkmal einer Erzählung?', optionen: ['Sie informiert sachlich', 'Sie unterhält und hat einen Höhepunkt', 'Sie beschreibt ein Objekt', 'Sie gibt eine Meinung ab'], richtig: 1, erklaerung: 'Eine Erzählung unterhält den Leser und hat einen Höhepunkt in der Handlung.' },
      { typ: 'multiple_choice', frage: 'In welcher Zeitform wird ein Bericht geschrieben?', optionen: ['Präsens', 'Perfekt', 'Präteritum', 'Futur'], richtig: 2, erklaerung: 'Ein Bericht wird im Präteritum (Vergangenheitsform) geschrieben.' },
      { typ: 'multiple_choice', frage: 'Was ist typisch für ein Märchen?', optionen: ['Sachliche Sprache', '"Es war einmal..." und ein Happy End', 'W-Fragen', 'Persönliche Meinung'], richtig: 1, erklaerung: 'Märchen beginnen oft mit "Es war einmal..." und enden meist gut.' },
      { typ: 'multiple_choice', frage: 'Was macht ein Kommentar?', optionen: ['Er beschreibt ein Tier', 'Er erzählt eine Geschichte', 'Er gibt eine persönliche Meinung ab', 'Er beantwortet W-Fragen'], richtig: 2, erklaerung: 'Ein Kommentar gibt die persönliche Meinung des Verfassers zu einem Thema wieder.' },
      { typ: 'multiple_choice', frage: 'In welcher Zeitform steht eine Beschreibung?', optionen: ['Präteritum', 'Perfekt', 'Präsens', 'Futur'], richtig: 2, erklaerung: 'Eine Beschreibung steht im Präsens: "Der Hund hat braunes Fell."' },
      { typ: 'multiple_choice', frage: 'Welche Textart hat Einleitung, Hauptteil mit Höhepunkt und Schluss?', optionen: ['Bericht', 'Beschreibung', 'Erzählung', 'Kommentar'], richtig: 2, erklaerung: 'Eine Erzählung hat den typischen Aufbau: Einleitung → Hauptteil mit Höhepunkt → Schluss.' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: '"Ein Bericht enthält keine persönliche Meinung."', richtig: true, erklaerung: 'Richtig! Ein Bericht ist sachlich und enthält keine persönliche Meinung.' },
      { typ: 'richtig_falsch', frage: '"In einem Märchen kommen oft magische Wesen vor."', richtig: true, erklaerung: 'Ja! Märchen enthalten oft Feen, Hexen, Zauberer, sprechende Tiere und andere magische Wesen.' },
      { typ: 'richtig_falsch', frage: '"Eine Beschreibung hat einen spannenden Höhepunkt."', richtig: false, erklaerung: 'Nein! Eine Beschreibung erklärt sachlich, wie etwas aussieht – sie hat keinen Spannungsbogen.' },
      { typ: 'richtig_falsch', frage: '"Ein Kommentar muss immer objektiv sein."', richtig: false, erklaerung: 'Nein! Ein Kommentar ist gerade subjektiv – er enthält die persönliche Meinung des Autors.' },
      { typ: 'richtig_falsch', frage: '"Erzählungen werden meistens im Präteritum geschrieben."', richtig: true, erklaerung: 'Ja! Erzählungen und Geschichten werden meistens im Präteritum geschrieben.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Ergänze: "Ein ___ informiert sachlich über ein Ereignis."', satz: 'Ein ___ informiert sachlich über ein Ereignis.', antwort: 'Bericht', erklaerung: 'Ein Bericht informiert sachlich und beantwortet die W-Fragen.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Ein Märchen beginnt oft mit: Es war ___..."', satz: 'Ein Märchen beginnt oft mit: Es war ___...', antwort: 'einmal', erklaerung: '"Es war einmal..." ist der typische Anfang eines Märchens.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Ein ___ gibt die persönliche Meinung des Autors wieder."', satz: 'Ein ___ gibt die persönliche Meinung des Autors wieder.', antwort: 'Kommentar', erklaerung: 'Ein Kommentar enthält die persönliche Meinung und Bewertung des Autors.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Merkmale gehören zum Bericht?', optionen: ['Sachlich', 'Spannender Höhepunkt', 'W-Fragen', 'Persönliche Meinung', 'Präteritum'], richtig: [0, 2, 4], erklaerung: 'Ein Bericht ist sachlich, beantwortet W-Fragen und steht im Präteritum.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Merkmale gehören zum Märchen?', optionen: ['Es war einmal...', 'Sachliche Sprache', 'Magische Wesen', 'W-Fragen', 'Happy End'], richtig: [0, 2, 4], erklaerung: 'Märchen beginnen mit "Es war einmal...", haben magische Wesen und ein Happy End.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Dieser Satz passt nicht in einen Bericht. Warum?', satz: 'Ich finde, das Konzert war total super!', fehlerWort: 'Ich finde', korrektWort: '(persönliche Meinung entfernen)', erklaerung: 'Ein Bericht enthält keine persönliche Meinung. "Ich finde" und "total super" sind subjektiv.' },
      { typ: 'satz_korrigieren', frage: 'Dieser Satz steht in einer Beschreibung. Finde den Fehler:', satz: 'Der Hund hatte braunes Fell.', fehlerWort: 'hatte', korrektWort: 'hat', erklaerung: 'Beschreibungen stehen im Präsens: "Der Hund hat braunes Fell."' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Welche Textart passt zu "sachlich, W-Fragen, Präteritum"?', wort: 'sachlich + W-Fragen + Präteritum', optionen: ['Erzählung', 'Bericht', 'Märchen', 'Kommentar'], richtig: 1, erklaerung: 'Sachlich + W-Fragen + Präteritum = Bericht.' },
      { typ: 'synonym_finden', frage: 'Welche Textart passt zu "Einleitung, Höhepunkt, Schluss"?', wort: 'Einleitung + Höhepunkt + Schluss', optionen: ['Beschreibung', 'Bericht', 'Erzählung', 'Kommentar'], richtig: 2, erklaerung: 'Einleitung → Hauptteil mit Höhepunkt → Schluss = Erzählung.' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde die Textart mit ihrem Zweck:', paare: [['Erzählung', 'unterhalten'], ['Bericht', 'informieren'], ['Kommentar', 'Meinung äußern']], erklaerung: 'Erzählung unterhält, Bericht informiert, Kommentar äußert eine Meinung.' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne den Aufbau einer Erzählung:', teile: ['Einleitung', 'Hauptteil', 'Höhepunkt', 'Schluss'], erklaerung: 'Eine Erzählung: Einleitung → Hauptteil → Höhepunkt → Schluss.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "Bericht" im schulischen Kontext?', satz: 'Schreibe einen Bericht über den Schulausflug.', optionen: ['Eine spannende Geschichte', 'Eine sachliche Darstellung eines Ereignisses', 'Ein Brief an die Eltern', 'Eine Meinungsäußerung'], richtig: 1, erklaerung: 'Ein Bericht ist eine sachliche Darstellung eines Ereignisses mit W-Fragen und im Präteritum.' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Welcher Satzanfang passt zu einer Erzählung?', optionen: ['Am 15. März fand...', 'Der Gegenstand ist...', 'An einem sonnigen Tag beschloss Lisa...', 'Meiner Meinung nach...'], richtig: 2, erklaerung: 'Erzählungen beginnen oft mit einer Situation und einer Figur.' },
      { typ: 'richtig_falsch', frage: '"Eine Beschreibung soll den Leser unterhalten."', richtig: false, erklaerung: 'Nein! Eine Beschreibung soll informieren – sie erklärt, wie etwas aussieht oder funktioniert.' },
      { typ: 'multiple_choice', frage: 'Welche Textart verwendet die W-Fragen (Wer? Was? Wann? Wo? Wie?)?', optionen: ['Märchen', 'Erzählung', 'Bericht', 'Gedicht'], richtig: 2, erklaerung: 'Der Bericht beantwortet die W-Fragen: Wer? Was? Wann? Wo? Wie? Warum?' },
      { typ: 'lueckentext', frage: 'Ergänze: "Eine ___ erklärt, wie etwas aussieht oder funktioniert."', satz: 'Eine ___ erklärt, wie etwas aussieht oder funktioniert.', antwort: 'Beschreibung', erklaerung: 'Eine Beschreibung gibt sachlich wieder, wie etwas aussieht.' },
      { typ: 'satz_korrigieren', frage: 'Dieser Satz steht in einem Märchen. Was fehlt?', satz: 'Eines Tages ging die Prinzessin in den Wald.', fehlerWort: '(kein Fehler)', korrektWort: '(kein Fehler)', erklaerung: 'Der Satz passt zu einem Märchen – Präteritum und fantastische Figur (Prinzessin).' },
      { typ: 'synonym_finden', frage: 'Welche Textart passt zu: "Meiner Meinung nach sollte..."?', wort: 'Meiner Meinung nach', optionen: ['Bericht', 'Beschreibung', 'Kommentar', 'Märchen'], richtig: 2, erklaerung: '"Meiner Meinung nach..." zeigt eine persönliche Meinung – das ist typisch für einen Kommentar.' },
      { typ: 'richtig_falsch', frage: '"Ein Bericht und eine Erzählung sind das Gleiche."', richtig: false, erklaerung: 'Nein! Ein Bericht informiert sachlich, eine Erzählung unterhält mit Spannung und Höhepunkt.' },
    ],
  },

  // ================================================================
  //  4.2 – Berichte schreiben
  // ================================================================
  '4-2': {
    theorie: {
      titel: 'Berichte schreiben',
      erklaerung: 'Ein Bericht informiert sachlich über ein Ereignis und beantwortet die W-Fragen: Wer war beteiligt? Was ist passiert? Wann ist es passiert? Wo ist es passiert? Wie ist es passiert? Warum ist es passiert? Ein Bericht steht immer im Präteritum (Vergangenheit). Er enthält keine persönliche Meinung, keine wörtliche Rede und keine ausgeschmückten Beschreibungen. Die Sprache ist klar und sachlich.',
      beispiel: 'Am <span class="highlight">Montag, dem 5. März</span>, <span class="highlight">ereignete sich</span> auf der Hauptstraße ein Unfall. <span class="highlight">Ein Radfahrer</span> stieß mit einem Auto zusammen.',
      merkhilfe: 'W-Fragen beantworten + Präteritum + sachlich + keine Meinung = perfekter Bericht! Merksatz: "Wer? Was? Wann? Wo? Wie? Warum?"',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Welche Zeitform verwendet man in einem Bericht?', optionen: ['Präsens', 'Perfekt', 'Präteritum', 'Futur'], richtig: 2, erklaerung: 'Ein Bericht steht im Präteritum: "Es ereignete sich..." (nicht "Es ereignet sich...").' },
      { typ: 'multiple_choice', frage: 'Was gehört NICHT in einen Bericht?', optionen: ['W-Fragen', 'Sachliche Sprache', 'Persönliche Meinung', 'Präteritum'], richtig: 2, erklaerung: 'Persönliche Meinung gehört nicht in einen Bericht – er muss sachlich bleiben.' },
      { typ: 'multiple_choice', frage: 'Welche W-Frage beantwortet "am Montag"?', optionen: ['Wer?', 'Was?', 'Wann?', 'Wo?'], richtig: 2, erklaerung: '"am Montag" beantwortet die Frage "Wann?" – die Zeitangabe.' },
      { typ: 'multiple_choice', frage: 'Welche W-Frage beantwortet "auf dem Schulhof"?', optionen: ['Wer?', 'Was?', 'Wann?', 'Wo?'], richtig: 3, erklaerung: '"auf dem Schulhof" beantwortet die Frage "Wo?" – die Ortsangabe.' },
      { typ: 'multiple_choice', frage: 'Welche W-Frage beantwortet "die Feuerwehr"?', optionen: ['Wer?', 'Was?', 'Wann?', 'Wo?'], richtig: 0, erklaerung: '"die Feuerwehr" beantwortet die Frage "Wer?" – die beteiligte Person/Gruppe.' },
      { typ: 'multiple_choice', frage: 'Welcher Satz passt in einen Bericht?', optionen: ['Es war total aufregend!', 'Am Dienstag fand ein Schulfest statt.', 'Ich finde, das war super.', 'Es war der beste Tag meines Lebens!'], richtig: 1, erklaerung: '"Am Dienstag fand ein Schulfest statt." ist sachlich und im Präteritum – perfekt für einen Bericht.' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: '"Ein Bericht enthält wörtliche Rede."', richtig: false, erklaerung: 'Nein! Ein Bericht enthält keine wörtliche Rede. Man gibt Aussagen indirekt wieder.' },
      { typ: 'richtig_falsch', frage: '"Ein Bericht beantwortet die W-Fragen."', richtig: true, erklaerung: 'Ja! Wer? Was? Wann? Wo? Wie? Warum? – das sind die W-Fragen eines Berichts.' },
      { typ: 'richtig_falsch', frage: '"In einem Bericht darf man Adjektive wie toll, super, schrecklich verwenden."', richtig: false, erklaerung: 'Nein! Solche wertenden Adjektive drücken eine Meinung aus und gehören nicht in einen Bericht.' },
      { typ: 'richtig_falsch', frage: '"Ein Bericht wird im Präteritum geschrieben."', richtig: true, erklaerung: 'Ja! Der Bericht steht im Präteritum (Vergangenheitsform).' },
      { typ: 'richtig_falsch', frage: '"Ein Zeitungsbericht und ein Unfallbericht haben den gleichen Aufbau."', richtig: true, erklaerung: 'Ja! Beide folgen dem gleichen Grundaufbau: W-Fragen, sachlich, Präteritum.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Ergänze: "Ein Bericht steht immer im ___."', satz: 'Ein Bericht steht immer im ___.', antwort: 'Präteritum', erklaerung: 'Berichte werden im Präteritum (Vergangenheit) geschrieben.' },
      { typ: 'lueckentext', frage: 'Ergänze die W-Frage: "___ war beteiligt?"', satz: '___ war beteiligt?', antwort: 'Wer', erklaerung: '"Wer?" fragt nach den beteiligten Personen.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Ein Bericht enthält keine persönliche ___."', satz: 'Ein Bericht enthält keine persönliche ___.', antwort: 'Meinung', erklaerung: 'Ein Bericht ist sachlich und enthält keine persönliche Meinung.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Dieser Satz passt nicht in einen Bericht. Warum?', satz: 'Das Fest war mega cool und ich war total begeistert!', fehlerWort: 'mega cool', korrektWort: '(sachlich umformulieren)', erklaerung: '"mega cool" und "total begeistert" sind subjektive Wertungen – sie gehören nicht in einen Bericht.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler im Bericht:', satz: 'Am Mittwoch findet ein Sportfest statt.', fehlerWort: 'findet', korrektWort: 'fand', erklaerung: 'Ein Bericht steht im Präteritum: "fand statt" statt "findet statt".' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler im Bericht:', satz: 'Der Lehrer sagte: "Alle Schüler sollen kommen!"', fehlerWort: '"Alle Schüler sollen kommen!"', korrektWort: 'alle Schüler sollten kommen', erklaerung: 'Wörtliche Rede gehört nicht in einen Bericht. Stattdessen: indirekte Rede.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche W-Fragen gehören zum Bericht?', optionen: ['Wer?', 'Was?', 'Wie schön?', 'Wann?', 'Wo?'], richtig: [0, 1, 3, 4], erklaerung: 'Wer? Was? Wann? Wo? sind W-Fragen des Berichts. "Wie schön?" ist eine Wertung.' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne die W-Fragen in einer sinnvollen Reihenfolge:', teile: ['Wann?', 'Wo?', 'Wer?', 'Was?', 'Wie?'], erklaerung: 'Sinnvolle Reihenfolge: Wann? → Wo? → Wer? → Was? → Wie? (Zeit, Ort, Person, Ereignis, Art und Weise).' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Welches Wort passt besser in einen Bericht statt "total cool"?', wort: 'total cool', optionen: ['mega', 'gelungen', 'fantastisch', 'krass'], richtig: 1, erklaerung: '"gelungen" ist sachlich und passt in einen Bericht. Die anderen sind umgangssprachlich.' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde die W-Frage mit der Information:', paare: [['Wer?', 'die Feuerwehr'], ['Wann?', 'am Dienstag'], ['Wo?', 'auf dem Schulhof']], erklaerung: 'Wer? = beteiligte Personen, Wann? = Zeitpunkt, Wo? = Ort des Geschehens.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "sachlich" in Bezug auf einen Bericht?', satz: 'Schreibe einen sachlichen Bericht.', optionen: ['Langweilig', 'Ohne persönliche Meinung, neutral', 'Mit vielen Fakten', 'Kurz und knapp'], richtig: 1, erklaerung: '"Sachlich" bedeutet neutral, ohne persönliche Meinung oder Wertung.' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Welcher Satz ist sachlich formuliert?', optionen: ['Der Unfall war schrecklich.', 'Bei dem Unfall wurde ein Mann leicht verletzt.', 'Zum Glück ist nichts Schlimmes passiert.', 'Es war ein furchtbarer Tag.'], richtig: 1, erklaerung: 'Nur "Bei dem Unfall wurde ein Mann leicht verletzt" ist sachlich – die anderen enthalten Wertungen.' },
      { typ: 'richtig_falsch', frage: '"Ein Bericht darf Überschriften und Zwischenüberschriften haben."', richtig: true, erklaerung: 'Ja! Besonders Zeitungsberichte haben oft eine Überschrift und manchmal Zwischenüberschriften.' },
      { typ: 'lueckentext', frage: 'Ergänze: "___ ist es passiert? – Am Freitag um 14 Uhr."', satz: '___ ist es passiert?', antwort: 'Wann', erklaerung: '"Wann?" fragt nach dem Zeitpunkt des Ereignisses.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler im Bericht:', satz: 'Gestern hat es ein tolles Konzert gegeben.', fehlerWort: 'hat', korrektWort: 'gab', erklaerung: 'Berichte stehen im Präteritum: "gab es ein Konzert" statt Perfekt "hat es gegeben".' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist für einen Bericht zu wertend?', optionen: ['stattfanden', 'beteiligt', 'fantastisch', 'ereignete'], richtig: 2, erklaerung: '"fantastisch" ist eine subjektive Wertung und gehört nicht in einen sachlichen Bericht.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Sätze passen in einen Bericht?', optionen: ['Am Montag fand ein Schulfest statt.', 'Es war der beste Tag aller Zeiten!', 'Etwa 200 Schüler nahmen teil.', 'Ich fand es super!', 'Das Fest dauerte von 9 bis 13 Uhr.'], richtig: [0, 2, 4], erklaerung: 'Sachliche Aussagen mit Fakten passen in einen Bericht. Wertungen nicht.' },
      { typ: 'richtig_falsch', frage: '"In einem Bericht schreibt man in der Ich-Form."', richtig: false, erklaerung: 'Nein! Ein Bericht ist sachlich und vermeidet die Ich-Form. Man schreibt neutral.' },
      { typ: 'lueckentext', frage: 'Ergänze: "___ ist es passiert? – Weil ein Autofahrer zu schnell fuhr."', satz: '___ ist es passiert?', antwort: 'Warum', erklaerung: '"Warum?" fragt nach dem Grund des Ereignisses.' },
    ],
  },

  // ================================================================
  //  4.3 – Briefe & E-Mails
  // ================================================================
  '4-3': {
    theorie: {
      titel: 'Briefe und E-Mails schreiben',
      erklaerung: 'Briefe und E-Mails können formell (offiziell) oder informell (persönlich) sein. Formelle Briefe haben einen festen Aufbau: Absender, Empfänger, Datum, Betreff, Anrede ("Sehr geehrte/r..."), Haupttext, Grußformel ("Mit freundlichen Grüßen") und Unterschrift. Bei formellen Briefen schreibt man "Sie" und "Ihnen" groß. Informelle Briefe (an Freunde, Familie) sind lockerer: "Liebe/r...", "Viele Grüße". Bei E-Mails ist der Betreff besonders wichtig – er fasst das Thema zusammen.',
      beispiel: 'Formell: <span class="highlight">Sehr geehrte</span> Frau Müller, ... <span class="highlight">Mit freundlichen Grüßen</span>. Informell: <span class="highlight">Liebe</span> Anna, ... <span class="highlight">Viele Grüße</span>',
      merkhilfe: 'Formell = Sie/Ihnen (groß!), "Sehr geehrte/r", "Mit freundlichen Grüßen". Informell = du/dir, "Liebe/r", "Viele Grüße" oder "Bis bald".',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Welche Anrede passt zu einem formellen Brief?', optionen: ['Hey du!', 'Hallo Leute!', 'Sehr geehrte Frau Müller,', 'Hi Anna!'], richtig: 2, erklaerung: '"Sehr geehrte Frau Müller," ist die korrekte formelle Anrede.' },
      { typ: 'multiple_choice', frage: 'Welche Grußformel passt zu einem formellen Brief?', optionen: ['Tschüss!', 'Bussi!', 'Mit freundlichen Grüßen', 'Bis bald!'], richtig: 2, erklaerung: '"Mit freundlichen Grüßen" ist die korrekte formelle Grußformel.' },
      { typ: 'multiple_choice', frage: 'Wie schreibt man "Sie" in einem formellen Brief?', optionen: ['sie (klein)', 'Sie (groß)', 'SIE (alles groß)', 'Egal wie'], richtig: 1, erklaerung: 'Die höfliche Anrede "Sie" und "Ihnen" wird im formellen Brief immer großgeschrieben.' },
      { typ: 'multiple_choice', frage: 'Was steht in der Betreffzeile einer E-Mail?', optionen: ['Die Grußformel', 'Das Thema der E-Mail', 'Der Absender', 'Das Datum'], richtig: 1, erklaerung: 'Die Betreffzeile fasst kurz das Thema der E-Mail zusammen.' },
      { typ: 'multiple_choice', frage: 'An wen schreibt man einen formellen Brief?', optionen: ['An Freunde', 'An die Familie', 'An Behörden, Firmen oder unbekannte Personen', 'An Klassenkameraden'], richtig: 2, erklaerung: 'Formelle Briefe schreibt man an Behörden, Firmen, Lehrer oder Personen, die man nicht kennt.' },
      { typ: 'multiple_choice', frage: 'Was kommt nach der Anrede in einem Brief?', optionen: ['Die Unterschrift', 'Ein Komma und dann der Text', 'Die Grußformel', 'Der Betreff'], richtig: 1, erklaerung: 'Nach der Anrede kommt ein Komma, dann beginnt der eigentliche Text (kleingeschrieben).' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: '"In einem formellen Brief duzt man den Empfänger."', richtig: false, erklaerung: 'Nein! In einem formellen Brief siezt man den Empfänger: "Sie" statt "du".' },
      { typ: 'richtig_falsch', frage: '"Nach der Anrede in einem Brief kommt ein Komma."', richtig: true, erklaerung: 'Ja! Nach der Anrede steht ein Komma: "Sehr geehrte Frau Müller," – dann geht der Text weiter.' },
      { typ: 'richtig_falsch', frage: '"Viele Grüße" ist eine formelle Grußformel.', richtig: false, erklaerung: '"Viele Grüße" ist eher informell. Formell wäre: "Mit freundlichen Grüßen".' },
      { typ: 'richtig_falsch', frage: '"Eine E-Mail braucht keinen Betreff."', richtig: false, erklaerung: 'Doch! Der Betreff ist wichtig – er sagt dem Empfänger sofort, worum es geht.' },
      { typ: 'richtig_falsch', frage: '"Liebe Anna" ist eine informelle Anrede.', richtig: true, erklaerung: 'Ja! "Liebe/r..." verwendet man bei Freunden und Familie – das ist informell.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Ergänze die formelle Anrede: "___ geehrter Herr Schmidt,"', satz: '___ geehrter Herr Schmidt,', antwort: 'Sehr', erklaerung: 'Die vollständige formelle Anrede lautet: "Sehr geehrter Herr Schmidt,".' },
      { typ: 'lueckentext', frage: 'Ergänze die Grußformel: "Mit freundlichen ___"', satz: 'Mit freundlichen ___', antwort: 'Grüßen', erklaerung: '"Mit freundlichen Grüßen" ist die vollständige formelle Grußformel.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Können ___ mir bitte helfen?" (formell)', satz: 'Können ___ mir bitte helfen?', antwort: 'Sie', erklaerung: 'In formellen Briefen verwendet man "Sie" (großgeschrieben).' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler im formellen Brief:', satz: 'Sehr geehrte Frau Müller. Ich schreibe Ihnen weil...', fehlerWort: 'Müller.', korrektWort: 'Müller,', erklaerung: 'Nach der Anrede steht ein Komma, kein Punkt: "Sehr geehrte Frau Müller,".' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler im formellen Brief:', satz: 'Können sie mir bitte die Unterlagen schicken?', fehlerWort: 'sie', korrektWort: 'Sie', erklaerung: 'Die höfliche Anrede "Sie" wird im formellen Brief immer großgeschrieben.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Lieber Herr Direktor, ich will morgen frei haben.', fehlerWort: 'will', korrektWort: 'möchte', erklaerung: '"möchte" ist höflicher als "will" in einem formellen Brief.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Was gehört in einen formellen Brief?', optionen: ['Absender', 'Emojis', 'Betreff', 'Slang-Wörter', 'Grußformel'], richtig: [0, 2, 4], erklaerung: 'Absender, Betreff und Grußformel gehören in einen formellen Brief. Emojis und Slang nicht.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Anreden sind formell?', optionen: ['Hey!', 'Sehr geehrte Damen und Herren,', 'Hi!', 'Sehr geehrter Herr Müller,', 'Hallo du!'], richtig: [1, 3], erklaerung: '"Sehr geehrte Damen und Herren," und "Sehr geehrter Herr Müller," sind formelle Anreden.' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Welche Grußformel passt zu einem Brief an einen Freund?', wort: 'informelle Grußformel', optionen: ['Mit freundlichen Grüßen', 'Hochachtungsvoll', 'Bis bald!', 'Mit vorzüglicher Hochachtung'], richtig: 2, erklaerung: '"Bis bald!" ist informell und passt zu einem Brief an Freunde.' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde formell und informell:', paare: [['Sehr geehrte/r', 'Liebe/r'], ['Sie', 'du'], ['Mit freundlichen Grüßen', 'Viele Grüße']], erklaerung: 'Formell: Sehr geehrte/r, Sie, Mit freundlichen Grüßen. Informell: Liebe/r, du, Viele Grüße.' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne den Aufbau eines formellen Briefs:', teile: ['Absender + Datum', 'Betreff', 'Anrede', 'Haupttext', 'Grußformel + Unterschrift'], erklaerung: 'Aufbau: Absender/Datum → Betreff → Anrede → Haupttext → Grußformel/Unterschrift.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "Betreff" in einer E-Mail?', satz: 'Betreff: Entschuldigung für den 15. März', optionen: ['Der Absender der E-Mail', 'Eine kurze Zusammenfassung des Themas', 'Die Grußformel', 'Die Unterschrift'], richtig: 1, erklaerung: 'Der Betreff fasst in wenigen Worten zusammen, worum es in der E-Mail geht.' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Was schreibt man nach "Mit freundlichen Grüßen"?', optionen: ['Ein Komma', 'Einen Punkt', 'Nichts (Absatz, dann Name)', 'Ein Ausrufezeichen'], richtig: 2, erklaerung: 'Nach "Mit freundlichen Grüßen" steht kein Satzzeichen – dann folgt der Name.' },
      { typ: 'richtig_falsch', frage: '"In E-Mails kann man den Betreff weglassen."', richtig: false, erklaerung: 'Der Betreff sollte nie fehlen – er hilft dem Empfänger, die E-Mail einzuordnen.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Sehr geehrte Damen und ___,"', satz: 'Sehr geehrte Damen und ___,', antwort: 'Herren', erklaerung: '"Sehr geehrte Damen und Herren," verwendet man, wenn man den Empfänger nicht kennt.' },
      { typ: 'multiple_choice', frage: 'Was ist der Unterschied zwischen einem Brief und einer E-Mail?', optionen: ['Kein Unterschied', 'E-Mails haben einen Betreff, Briefe nicht', 'Briefe werden gedruckt/geschrieben, E-Mails elektronisch verschickt', 'E-Mails sind immer formell'], richtig: 2, erklaerung: 'Briefe werden auf Papier geschrieben, E-Mails elektronisch versendet. Beide können formell oder informell sein.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Sehr geehrter Herr Müller ich schreibe Ihnen wegen...', fehlerWort: 'Müller ich', korrektWort: 'Müller, ich', erklaerung: 'Nach der Anrede fehlt das Komma: "Sehr geehrter Herr Müller, ich schreibe..."' },
      { typ: 'richtig_falsch', frage: '"In einem informellen Brief darf man Emojis verwenden."', richtig: true, erklaerung: 'Ja! In informellen Nachrichten an Freunde sind Emojis in Ordnung.' },
      { typ: 'synonym_finden', frage: 'Welche Anrede passt, wenn man den Empfänger nicht kennt?', wort: 'unbekannter Empfänger', optionen: ['Lieber Herr...', 'Hallo!', 'Sehr geehrte Damen und Herren,', 'Hey!'], richtig: 2, erklaerung: '"Sehr geehrte Damen und Herren," verwendet man, wenn der Name des Empfängers unbekannt ist.' },
    ],
  },

  // ================================================================
  //  4.4 – Bewerbung
  // ================================================================
  '4-4': {
    theorie: {
      titel: 'Bewerbung schreiben',
      erklaerung: 'Eine Bewerbung besteht aus: dem Bewerbungsschreiben (Anschreiben), dem Lebenslauf und den Zeugnissen. Das Anschreiben erklärt, warum du dich bewirbst und was du kannst. Der Lebenslauf listet deine persönlichen Daten, Schulbildung, Erfahrungen und Hobbys auf – meistens tabellarisch. Wichtig: Schreibe höflich (Sie), fehlerfrei und nenne konkrete Stärken. Der erste Eindruck zählt!',
      beispiel: '<span class="highlight">Hiermit bewerbe ich mich</span> um die Stelle als Praktikant/in in Ihrem Unternehmen. Ich bin <span class="highlight">zuverlässig</span> und <span class="highlight">teamfähig</span>.',
      merkhilfe: 'Die 3 Teile: 1. Anschreiben (Warum du? Warum diese Stelle?) 2. Lebenslauf (Wer bist du?) 3. Zeugnisse (Was kannst du beweisen?). Immer höflich, fehlerfrei, konkret!',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Aus welchen Teilen besteht eine Bewerbung?', optionen: ['Nur ein Brief', 'Anschreiben, Lebenslauf, Zeugnisse', 'Nur der Lebenslauf', 'Brief und Foto'], richtig: 1, erklaerung: 'Eine Bewerbung besteht aus Anschreiben, Lebenslauf und Zeugnissen.' },
      { typ: 'multiple_choice', frage: 'Was steht im Anschreiben?', optionen: ['Deine Schulnoten', 'Warum du dich bewirbst und was du kannst', 'Dein Geburtsdatum', 'Deine Hobbys in Listenform'], richtig: 1, erklaerung: 'Das Anschreiben erklärt, warum du dich bewirbst und welche Stärken du hast.' },
      { typ: 'multiple_choice', frage: 'Welche Anrede passt in ein Bewerbungsschreiben?', optionen: ['Hey Chef!', 'Hallo!', 'Sehr geehrte Damen und Herren,', 'Hi!'], richtig: 2, erklaerung: '"Sehr geehrte Damen und Herren," ist die passende formelle Anrede.' },
      { typ: 'multiple_choice', frage: 'Was ist ein Lebenslauf?', optionen: ['Eine Erzählung über dein Leben', 'Eine tabellarische Übersicht deiner Daten und Erfahrungen', 'Ein Brief an den Chef', 'Eine Liste deiner Noten'], richtig: 1, erklaerung: 'Der Lebenslauf listet tabellarisch deine persönlichen Daten, Bildung und Erfahrungen auf.' },
      { typ: 'multiple_choice', frage: 'Welche Stärke passt gut in eine Bewerbung?', optionen: ['Ich bin manchmal faul', 'Ich bin teamfähig und zuverlässig', 'Ich komme gerne zu spät', 'Schule finde ich langweilig'], richtig: 1, erklaerung: '"Teamfähig" und "zuverlässig" sind positive Stärken, die Arbeitgeber gerne lesen.' },
      { typ: 'multiple_choice', frage: 'Welcher Satz passt in ein Bewerbungsschreiben?', optionen: ['Ich will den Job, weil ich Geld brauche.', 'Hiermit bewerbe ich mich um die ausgeschriebene Stelle.', 'Gebt mir die Stelle!', 'Ich habe keine Ahnung, was ihr macht.'], richtig: 1, erklaerung: '"Hiermit bewerbe ich mich..." ist eine höfliche und professionelle Formulierung.' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: '"Im Bewerbungsschreiben duzt man den Arbeitgeber."', richtig: false, erklaerung: 'Nein! Man siezt den Arbeitgeber: "Sie" und "Ihnen" (großgeschrieben).' },
      { typ: 'richtig_falsch', frage: '"Der Lebenslauf wird meistens tabellarisch geschrieben."', richtig: true, erklaerung: 'Ja! Der tabellarische Lebenslauf ist die übliche Form mit Spalten für Zeitraum und Inhalt.' },
      { typ: 'richtig_falsch', frage: '"Rechtschreibfehler in der Bewerbung sind nicht schlimm."', richtig: false, erklaerung: 'Doch! Rechtschreibfehler machen einen schlechten Eindruck. Die Bewerbung muss fehlerfrei sein!' },
      { typ: 'richtig_falsch', frage: '"Zeugnisse gehören zur Bewerbung."', richtig: true, erklaerung: 'Ja! Zeugnisse (Schulzeugnisse, Praktikumszeugnisse) belegen deine Qualifikationen.' },
      { typ: 'richtig_falsch', frage: '"Im Lebenslauf steht auch die Schulbildung."', richtig: true, erklaerung: 'Ja! Im Lebenslauf listet man Schulen, Abschlüsse und wichtige Erfahrungen auf.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Ergänze: "Hiermit ___ ich mich um die Stelle als..."', satz: 'Hiermit ___ ich mich um die Stelle als...', antwort: 'bewerbe', erklaerung: '"Hiermit bewerbe ich mich..." ist die Standardformulierung im Anschreiben.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Ich bin ___ und arbeite gerne im Team."', satz: 'Ich bin ___ und arbeite gerne im Team.', antwort: 'zuverlässig', erklaerung: '"Zuverlässig" ist eine wichtige Stärke in einer Bewerbung.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Über eine Einladung zum ___ würde ich mich freuen."', satz: 'Über eine Einladung zum ___ würde ich mich freuen.', antwort: 'Vorstellungsgespräch', erklaerung: 'Am Ende des Anschreibens bittet man um ein Vorstellungsgespräch.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler im Bewerbungsschreiben:', satz: 'Ich bewerbe mich, weil ich halt irgendwas arbeiten will.', fehlerWort: 'halt irgendwas', korrektWort: '(konkret formulieren)', erklaerung: 'Eine Bewerbung muss konkret und motiviert klingen – nicht "halt irgendwas".' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Ich möchte bei ihnen als Praktikant arbeiten.', fehlerWort: 'ihnen', korrektWort: 'Ihnen', erklaerung: 'Die höfliche Anrede "Ihnen" wird in formellen Briefen großgeschrieben.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Hey, ich will bei euch arbeiten!', fehlerWort: 'Hey', korrektWort: 'Sehr geehrte Damen und Herren,', erklaerung: '"Hey" ist viel zu informell. Eine Bewerbung beginnt mit einer formellen Anrede.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Was gehört in den Lebenslauf?', optionen: ['Name und Geburtsdatum', 'Schulbildung', 'Lieblingsessen', 'Praktische Erfahrungen', 'Peinliche Geschichten'], richtig: [0, 1, 3], erklaerung: 'Name, Geburtsdatum, Schulbildung und praktische Erfahrungen gehören in den Lebenslauf.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter beschreiben positive Stärken?', optionen: ['teamfähig', 'faul', 'zuverlässig', 'unpünktlich', 'engagiert'], richtig: [0, 2, 4], erklaerung: 'Teamfähig, zuverlässig und engagiert sind positive Stärken für eine Bewerbung.' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne die Teile einer Bewerbung:', teile: ['Anschreiben', 'Lebenslauf', 'Zeugnisse'], erklaerung: 'Reihenfolge: 1. Anschreiben, 2. Lebenslauf, 3. Zeugnisse (Anlagen).' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Welches Wort bedeutet das gleiche wie "Bewerbungsschreiben"?', wort: 'Bewerbungsschreiben', optionen: ['Lebenslauf', 'Anschreiben', 'Zeugnis', 'Arbeitsvertrag'], richtig: 1, erklaerung: '"Bewerbungsschreiben" und "Anschreiben" meinen das Gleiche.' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde den Teil mit seinem Inhalt:', paare: [['Anschreiben', 'Warum bewirbst du dich?'], ['Lebenslauf', 'Daten und Erfahrungen'], ['Zeugnisse', 'Nachweise']], erklaerung: 'Anschreiben = Motivation, Lebenslauf = Daten, Zeugnisse = Nachweise.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "Stelle" in "Ich bewerbe mich um die Stelle"?', satz: 'Ich bewerbe mich um die Stelle als Praktikant.', optionen: ['Ein Ort/Platz', 'Ein Arbeitsplatz/Job', 'Eine Textstelle', 'Eine Körperstelle'], richtig: 1, erklaerung: '"Stelle" bedeutet hier "Arbeitsplatz" oder "Position in einer Firma".' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Wann schreibt man eine Bewerbung?', optionen: ['Wenn man krank ist', 'Wenn man sich für einen Job oder ein Praktikum bewirbt', 'Wenn man umzieht', 'Wenn man Geburtstag hat'], richtig: 1, erklaerung: 'Eine Bewerbung schreibt man, wenn man sich für einen Job, ein Praktikum oder eine Ausbildung bewirbt.' },
      { typ: 'richtig_falsch', frage: '"Man sollte in der Bewerbung seine Schwächen betonen."', richtig: false, erklaerung: 'Nein! Man betont seine Stärken. Schwächen erwähnt man nur, wenn danach gefragt wird.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Ich bin ___ und bringe gerne eigene Ideen ein."', satz: 'Ich bin ___ und bringe gerne eigene Ideen ein.', antwort: 'kreativ', erklaerung: '"Kreativ" ist eine positive Eigenschaft, die in Bewerbungen gut ankommt.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Ich bin der Beste und will sofort anfangen!', fehlerWort: 'der Beste', korrektWort: '(bescheidener formulieren)', erklaerung: 'Übertreibungen vermeiden. Besser: "Ich bin motiviert und möchte gerne bei Ihnen anfangen."' },
      { typ: 'multiple_choice', frage: 'Was gehört NICHT in eine Bewerbung?', optionen: ['Schulbildung', 'Praktische Erfahrungen', 'Lieblingsfilm', 'Stärken'], richtig: 2, erklaerung: 'Der Lieblingsfilm hat nichts mit der Bewerbung zu tun – er gehört nicht hinein.' },
      { typ: 'richtig_falsch', frage: '"Das Anschreiben ist der wichtigste Teil der Bewerbung."', richtig: true, erklaerung: 'Ja! Das Anschreiben ist meist das Erste, was der Arbeitgeber liest – der erste Eindruck zählt!' },
      { typ: 'synonym_verbinden', frage: 'Verbinde die Stärke mit ihrer Bedeutung:', paare: [['teamfähig', 'gut mit anderen arbeiten'], ['zuverlässig', 'man kann sich auf dich verlassen'], ['engagiert', 'mit vollem Einsatz dabei']], erklaerung: 'Wichtige Stärken für Bewerbungen und ihre Bedeutung.' },
    ],
  },

  // ================================================================
  //  4.5 – Zusammenfassungen
  // ================================================================
  '4-5': {
    theorie: {
      titel: 'Texte zusammenfassen',
      erklaerung: 'Eine Zusammenfassung gibt den Inhalt eines Textes kurz und in eigenen Worten wieder. Wichtige Regeln: 1. Nur das Wichtigste – Details und Beispiele weglassen. 2. Eigene Worte benutzen – nicht abschreiben. 3. Im Präsens schreiben: "Der Autor erklärt..." 4. Keine persönliche Meinung. 5. Kürzer als der Originaltext. Am Anfang steht ein Einleitungssatz mit Titel, Autor und Thema des Textes.',
      beispiel: 'Einleitungssatz: <span class="highlight">In dem Text "..."</span> von <span class="highlight">[Autor]</span> geht es um <span class="highlight">[Thema]</span>.',
      merkhilfe: 'Zusammenfassung = kurz + eigene Worte + Präsens + keine Meinung. Merksatz: "Was ist das Wichtigste? Sag es kurz und in deinen Worten!"',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'In welcher Zeitform schreibt man eine Zusammenfassung?', optionen: ['Präteritum', 'Perfekt', 'Präsens', 'Futur'], richtig: 2, erklaerung: 'Eine Zusammenfassung steht im Präsens: "Der Autor beschreibt..." (nicht "beschrieb").' },
      { typ: 'multiple_choice', frage: 'Was gehört in den Einleitungssatz einer Zusammenfassung?', optionen: ['Deine Meinung', 'Titel, Autor und Thema', 'Ein lustiger Witz', 'Alle Details des Textes'], richtig: 1, erklaerung: 'Der Einleitungssatz nennt Titel, Autor und Thema des Originaltextes.' },
      { typ: 'multiple_choice', frage: 'Was gehört NICHT in eine Zusammenfassung?', optionen: ['Die Hauptaussage', 'Eigene Worte', 'Persönliche Meinung', 'Der Einleitungssatz'], richtig: 2, erklaerung: 'Eine Zusammenfassung ist sachlich – persönliche Meinung gehört nicht hinein.' },
      { typ: 'multiple_choice', frage: 'Wie lang sollte eine Zusammenfassung sein?', optionen: ['Genauso lang wie der Originaltext', 'Länger als der Originaltext', 'Kürzer als der Originaltext', 'Genau eine Seite'], richtig: 2, erklaerung: 'Eine Zusammenfassung ist immer kürzer als der Originaltext – nur das Wichtigste!' },
      { typ: 'multiple_choice', frage: 'Was bedeutet "in eigenen Worten"?', optionen: ['Den Text wörtlich abschreiben', 'Den Inhalt selbst formulieren, ohne abzuschreiben', 'Neue Informationen erfinden', 'Nur Stichworte aufschreiben'], richtig: 1, erklaerung: '"In eigenen Worten" bedeutet, den Inhalt selbst neu zu formulieren, ohne vom Original abzuschreiben.' },
      { typ: 'multiple_choice', frage: 'Was lässt man in einer Zusammenfassung weg?', optionen: ['Die Hauptaussage', 'Den Autor', 'Details und Beispiele', 'Das Thema'], richtig: 2, erklaerung: 'Details, Beispiele und Nebensächlichkeiten lässt man in einer Zusammenfassung weg.' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: '"Eine Zusammenfassung steht im Präsens."', richtig: true, erklaerung: 'Ja! Zusammenfassungen stehen im Präsens: "Der Text handelt von..."' },
      { typ: 'richtig_falsch', frage: '"In einer Zusammenfassung darf man Sätze wörtlich abschreiben."', richtig: false, erklaerung: 'Nein! Man soll den Inhalt in eigenen Worten wiedergeben.' },
      { typ: 'richtig_falsch', frage: '"Eine Zusammenfassung enthält nur die wichtigsten Informationen."', richtig: true, erklaerung: 'Ja! Nur das Wichtigste kommt in die Zusammenfassung – keine Details oder Beispiele.' },
      { typ: 'richtig_falsch', frage: '"Am Anfang einer Zusammenfassung steht die eigene Meinung."', richtig: false, erklaerung: 'Nein! Am Anfang steht der Einleitungssatz mit Titel, Autor und Thema.' },
      { typ: 'richtig_falsch', frage: '"Eine Zusammenfassung darf länger als der Originaltext sein."', richtig: false, erklaerung: 'Nein! Eine Zusammenfassung ist immer kürzer als der Originaltext.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Ergänze den Einleitungssatz: "In dem Text ___ es um das Thema Umweltschutz."', satz: 'In dem Text ___ es um das Thema Umweltschutz.', antwort: 'geht', erklaerung: '"In dem Text geht es um..." ist ein typischer Einleitungssatz für eine Zusammenfassung.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Der ___ erklärt in seinem Text, wie Bienen leben."', satz: 'Der ___ erklärt in seinem Text, wie Bienen leben.', antwort: 'Autor', erklaerung: 'Im Einleitungssatz nennt man den Autor des Originaltextes.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Eine Zusammenfassung schreibt man im ___."', satz: 'Eine Zusammenfassung schreibt man im ___.', antwort: 'Präsens', erklaerung: 'Zusammenfassungen stehen im Präsens (Gegenwartsform).' },
      { typ: 'lueckentext', frage: 'Ergänze: "Man gibt den Inhalt in ___ Worten wieder."', satz: 'Man gibt den Inhalt in ___ Worten wieder.', antwort: 'eigenen', erklaerung: 'Den Inhalt gibt man in eigenen Worten wieder – nicht abschreiben!' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler in der Zusammenfassung:', satz: 'Der Text handelte von Umweltschutz.', fehlerWort: 'handelte', korrektWort: 'handelt', erklaerung: 'Zusammenfassungen stehen im Präsens: "handelt" statt "handelte".' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Ich finde den Text sehr interessant und gut geschrieben.', fehlerWort: 'Ich finde', korrektWort: '(Meinung entfernen)', erklaerung: 'Eine Zusammenfassung enthält keine persönliche Meinung ("Ich finde...").' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Der Autor schrieb, dass Wasser wichtig ist.', fehlerWort: 'schrieb', korrektWort: 'schreibt', erklaerung: 'Im Präsens: "Der Autor schreibt, dass..." (nicht Präteritum).' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Was gehört in eine gute Zusammenfassung?', optionen: ['Einleitungssatz', 'Persönliche Meinung', 'Eigene Worte', 'Alle Details', 'Hauptaussage'], richtig: [0, 2, 4], erklaerung: 'Einleitungssatz, eigene Worte und die Hauptaussage gehören in eine Zusammenfassung.' },
      { typ: 'mehrfachauswahl', frage: 'Was lässt man in einer Zusammenfassung weg?', optionen: ['Beispiele', 'Die Hauptaussage', 'Unwichtige Details', 'Wörtliche Zitate', 'Den Autor'], richtig: [0, 2, 3], erklaerung: 'Beispiele, unwichtige Details und wörtliche Zitate gehören nicht in eine Zusammenfassung.' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne die Schritte beim Zusammenfassen:', teile: ['Text lesen', 'Wichtiges markieren', 'Einleitungssatz schreiben', 'Inhalt in eigenen Worten wiedergeben', 'Überprüfen'], erklaerung: 'Schritte: Lesen → Wichtiges markieren → Einleitungssatz → eigene Worte → überprüfen.' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Welches Wort passt zum Einleitungssatz einer Zusammenfassung?', wort: 'Einleitungssatz', optionen: ['Schluss', 'Überschrift', 'Anfangssatz mit Titel und Autor', 'Schlusswort'], richtig: 2, erklaerung: 'Der Einleitungssatz ist der Anfangssatz, in dem Titel, Autor und Thema genannt werden.' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde die Regel mit dem Beispiel:', paare: [['Präsens verwenden', 'Der Autor beschreibt...'], ['Eigene Worte', 'nicht abschreiben'], ['Kein Detail', 'nur das Wichtigste']], erklaerung: 'Präsens, eigene Worte und nur das Wichtigste – die drei Grundregeln einer Zusammenfassung.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "zusammenfassen" im schulischen Kontext?', satz: 'Fasse den Text zusammen.', optionen: ['Dinge in eine Tasche packen', 'Den Inhalt kurz und in eigenen Worten wiedergeben', 'Etwas anfassen', 'Einen Text auswendig lernen'], richtig: 1, erklaerung: '"Zusammenfassen" bedeutet hier: den Inhalt eines Textes kurz und in eigenen Worten wiedergeben.' },

      // Zusätzliche Frage
      { typ: 'multiple_choice', frage: 'Welcher Einleitungssatz ist korrekt?', optionen: ['Der Text ist langweilig.', 'Ich finde den Text gut.', 'In dem Text "Wasser" von M. Meier geht es um den Wasserkreislauf.', 'Es war einmal ein Text...'], richtig: 2, erklaerung: 'Der korrekte Einleitungssatz nennt Titel, Autor und Thema sachlich.' },
      { typ: 'richtig_falsch', frage: '"In einer Zusammenfassung darf man direkte Zitate verwenden."', richtig: false, erklaerung: 'Nein! Man gibt den Inhalt in eigenen Worten wieder, nicht mit wörtlichen Zitaten.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Der Text war sehr interessant und spannend.', fehlerWort: 'war', korrektWort: 'ist', erklaerung: 'Zusammenfassungen stehen im Präsens: "Der Text ist..." statt "war".' },
      { typ: 'lueckentext', frage: 'Ergänze: "Der Autor ___ die wichtigsten Fakten zum Thema Ernährung."', satz: 'Der Autor ___ die wichtigsten Fakten zum Thema Ernährung.', antwort: 'nennt', erklaerung: '"nennt" steht im Präsens und ist sachlich – passend für eine Zusammenfassung.' },
      { typ: 'multiple_choice', frage: 'Was ist der erste Schritt beim Zusammenfassen?', optionen: ['Sofort schreiben', 'Den Text aufmerksam lesen', 'Die eigene Meinung notieren', 'Den Text abschreiben'], richtig: 1, erklaerung: 'Zuerst liest man den Text aufmerksam, dann markiert man das Wichtigste.' },
      { typ: 'synonym_finden', frage: 'Welcher Ausdruck passt für "Der Text beschreibt..." in einer Zusammenfassung?', wort: 'beschreibt', optionen: ['erzählt dummerweise', 'handelt von', 'ist total langweilig über', 'meckert über'], richtig: 1, erklaerung: '"handelt von" ist ein sachlicher Ausdruck, der gut in eine Zusammenfassung passt.' },
    ],
  },
};
