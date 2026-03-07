// ============================================================
//  welt2.js – Welt 2: Satzbau & Grammatik
//  5 Unterwelten × 30 Fragen = 150 Fragen
//  Zielgruppe: 1.–2. Klasse MS, 10–12 Jahre
// ============================================================

'use strict';

const WELT2 = {
  // ================================================================
  //  2.1 – Satzglieder
  // ================================================================
  '2-1': {
    theorie: {
      titel: 'Satzglieder erkennen',
      erklaerung: 'Jeder Satz besteht aus Satzgliedern. Die drei wichtigsten sind: das Subjekt (Wer oder was?), das Prädikat (Was tut? Was geschieht?) und das Objekt (Wen? Wem? Was?). Das Prädikat (Verb) steht im Aussagesatz immer an zweiter Stelle. Man kann Satzglieder erkennen, indem man sie zusammen verschiebt – die Umstellprobe.',
      beispiel: '<span class="highlight">Der Hund</span> <span class="highlight">frisst</span> <span class="highlight">den Knochen</span>. (Subjekt – Prädikat – Objekt)',
      merkhilfe: 'Wer oder was? = Subjekt. Was tut? = Prädikat. Wen oder was? / Wem? = Objekt. Die Umstellprobe hilft: Was zusammen verschoben werden kann, ist EIN Satzglied.',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Was ist das Subjekt im Satz: "Die Katze trinkt Milch."?', optionen: ['trinkt', 'Milch', 'Die Katze', 'trinkt Milch'], richtig: 2, erklaerung: 'Wer trinkt Milch? → Die Katze. Das ist das Subjekt.' },
      { typ: 'multiple_choice', frage: 'Was ist das Prädikat im Satz: "Der Junge liest ein Buch."?', optionen: ['Der Junge', 'liest', 'ein Buch', 'Junge'], richtig: 1, erklaerung: 'Was tut der Junge? → Er liest. Das Verb "liest" ist das Prädikat.' },
      { typ: 'multiple_choice', frage: 'Was ist das Objekt im Satz: "Mama kauft einen Kuchen."?', optionen: ['Mama', 'kauft', 'einen Kuchen', 'Mama kauft'], richtig: 2, erklaerung: 'Wen oder was kauft Mama? → einen Kuchen. Das ist das Objekt.' },
      { typ: 'multiple_choice', frage: 'An welcher Stelle steht das Verb im deutschen Aussagesatz?', optionen: ['An 1. Stelle', 'An 2. Stelle', 'An letzter Stelle', 'Egal wo'], richtig: 1, erklaerung: 'Im Aussagesatz steht das Verb (Prädikat) IMMER an zweiter Stelle.' },
      { typ: 'multiple_choice', frage: 'Was ist das Subjekt? "Im Park spielt das Kind."', optionen: ['Im Park', 'spielt', 'das Kind', 'Park'], richtig: 2, erklaerung: 'Wer spielt? → das Kind. Auch wenn es hinten steht, bleibt es das Subjekt.' },
      { typ: 'multiple_choice', frage: 'Was ist das Prädikat? "Gestern hat Lisa einen Brief geschrieben."', optionen: ['Gestern', 'Lisa', 'hat ... geschrieben', 'einen Brief'], richtig: 2, erklaerung: 'Das Prädikat ist "hat geschrieben" – eine zweiteilige Verbform (Perfekt).' },
      { typ: 'multiple_choice', frage: 'Was ist KEIN Satzglied?', optionen: ['Subjekt', 'Prädikat', 'Artikel', 'Objekt'], richtig: 2, erklaerung: 'Der Artikel ("der, die, das") ist kein eigenständiges Satzglied, sondern gehört zum Nomen.' },
      { typ: 'multiple_choice', frage: 'Welche Frage stellt man für das Subjekt?', optionen: ['Was tut?', 'Wer oder was?', 'Wen oder was?', 'Wo?'], richtig: 1, erklaerung: '"Wer oder was?" ist die Frage für das Subjekt (Nominativ).' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Das Prädikat steht im Aussagesatz immer an zweiter Stelle.', richtig: true, erklaerung: 'Richtig! Im deutschen Aussagesatz ist das Verb (Prädikat) immer an Position 2.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Das Subjekt muss immer am Satzanfang stehen.', richtig: false, erklaerung: 'Falsch! "Gestern ging ich ins Kino." – hier steht "Gestern" am Anfang, nicht das Subjekt.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Jeder vollständige Satz braucht mindestens ein Subjekt und ein Prädikat.', richtig: true, erklaerung: 'Richtig! "Der Hund bellt." hat Subjekt (Der Hund) und Prädikat (bellt) – das reicht für einen Satz.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Bei der Umstellprobe darf man einzelne Wörter aus einem Satzglied trennen.', richtig: false, erklaerung: 'Falsch! Was zusammengehört, bleibt zusammen. "Der kleine Hund" ist ein Satzglied – man trennt es nicht.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"Er schläft." ist ein vollständiger Satz mit Subjekt und Prädikat.', richtig: true, erklaerung: 'Richtig! Subjekt = Er, Prädikat = schläft. Ein Objekt ist nicht immer nötig.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Satzglieder hat der Satz "Die Kinder spielen im Garten"?', optionen: ['Subjekt', 'Prädikat', 'Akkusativobjekt', 'Adverbiale Bestimmung (Ort)', 'Genitivobjekt'], richtig: [0, 1, 3], erklaerung: 'Die Kinder (Subjekt) + spielen (Prädikat) + im Garten (Ortsangabe/Adverbiale).' },
      { typ: 'mehrfachauswahl', frage: 'Welche Fragen helfen, Satzglieder zu bestimmen?', optionen: ['Wer oder was?', 'Wie schön?', 'Wen oder was?', 'Wann?', 'Wem?'], richtig: [0, 2, 4], erklaerung: 'Wer/was (Subjekt), Wen/was (Akk.-Objekt), Wem (Dat.-Objekt) helfen bei der Bestimmung.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Das Satzglied, das die Frage "Wer oder was?" beantwortet, heißt ___.', satz: 'Das Satzglied heißt ___.', optionen: ['Subjekt', 'Prädikat', 'Objekt', 'Adverb'], richtig: 'Subjekt', erklaerung: 'Das Subjekt antwortet auf "Wer oder was?".' },
      { typ: 'lueckentext', frage: 'Das Verb im Satz nennt man auch ___.', satz: 'Das Verb im Satz nennt man auch ___.', optionen: ['Subjekt', 'Prädikat', 'Objekt', 'Artikel'], richtig: 'Prädikat', erklaerung: 'Das Verb (Tuwort) im Satz ist das Prädikat.' },
      { typ: 'lueckentext', frage: '"Wen oder was?" fragt man nach dem ___.', satz: '"Wen oder was?" fragt man nach dem ___.', optionen: ['Subjekt', 'Prädikat', 'Akkusativobjekt', 'Dativobjekt'], richtig: 'Akkusativobjekt', erklaerung: '"Wen oder was?" ist die Frage für das Akkusativobjekt (4. Fall).' },
      { typ: 'lueckentext', frage: '"Wem?" fragt man nach dem ___.', satz: '"Wem?" fragt man nach dem ___.', optionen: ['Subjekt', 'Prädikat', 'Akkusativobjekt', 'Dativobjekt'], richtig: 'Dativobjekt', erklaerung: '"Wem?" ist die Frage für das Dativobjekt (3. Fall).' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne den Satz richtig (Subjekt – Verb – Objekt):', woerter: ['einen Apfel', 'isst', 'Das Kind'], richtig: ['Das Kind', 'isst', 'einen Apfel'], erklaerung: 'Das Kind (Subjekt) isst (Prädikat) einen Apfel (Objekt).' },
      { typ: 'reihenfolge', frage: 'Ordne den Satz richtig:', woerter: ['dem Hund', 'gibt', 'Lisa', 'einen Knochen'], richtig: ['Lisa', 'gibt', 'dem Hund', 'einen Knochen'], erklaerung: 'Lisa (Subj.) gibt (Präd.) dem Hund (Dat.-Obj.) einen Knochen (Akk.-Obj.).' },
      { typ: 'reihenfolge', frage: 'Ordne: Subjekt → Prädikat → Dativobjekt', woerter: ['hilft', 'dem Kind', 'Die Lehrerin'], richtig: ['Die Lehrerin', 'hilft', 'dem Kind'], erklaerung: 'Die Lehrerin (Subj.) hilft (Präd.) dem Kind (Dat.-Obj.).' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler in der Wortreihenfolge:', satz: 'Spielt das Kind im Garten gerne.', fehlerWort: 'Spielt', korrektWort: 'Das Kind spielt', erklaerung: 'Im Aussagesatz steht das Verb an 2. Stelle: "Das Kind spielt im Garten gerne."' },
      { typ: 'satz_korrigieren', frage: 'Finde das falsche Satzglied:', satz: 'Den Hund beißt der Junge.', fehlerWort: 'Den', korrektWort: 'Der', erklaerung: 'Wenn der Hund beißt, ist er das Subjekt: "Der Hund beißt den Jungen."' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Wie nennt man das Verb im Satz auch?', optionen: ['Subjekt', 'Satzgegenstand', 'Prädikat', 'Ergänzung'], richtig: 2, erklaerung: 'Das Verb im Satz heißt auch Prädikat oder Satzaussage.' },
      { typ: 'synonym_finden', frage: 'Wie nennt man das Subjekt auch?', optionen: ['Satzaussage', 'Satzgegenstand', 'Satzergänzung', 'Satzzeichen'], richtig: 1, erklaerung: 'Das Subjekt heißt auch Satzgegenstand.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "Satzglied" in der Grammatik?', satz: 'Bestimme die Satzglieder im folgenden Satz.', optionen: ['Ein Körperteil', 'Ein Teil eines Satzes mit eigener Funktion', 'Ein Satzzeichen', 'Ein Wort'], richtig: 1, erklaerung: 'Ein Satzglied ist ein Teil des Satzes mit eigener grammatischer Funktion (Subjekt, Prädikat, Objekt ...).' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Was ist das Subjekt in: "Die Katze schläft auf dem Sofa."?', optionen: ['schläft', 'Die Katze', 'auf dem Sofa', 'dem Sofa'], richtig: 1, erklaerung: 'Wer schläft? → Die Katze ist das Subjekt.' },
      { typ: 'richtig_falsch', frage: 'Ein Satz kann auch ohne Prädikat vollständig sein.', richtig: false, erklaerung: 'Jeder vollständige Satz braucht ein Prädikat (Verb).' },
      { typ: 'lueckentext', frage: 'Ergänze das passende Satzglied: "___ spielt im Garten."', satz: '___ spielt im Garten.', antwort: 'Das Kind', erklaerung: '"Das Kind" ist das Subjekt – es beantwortet die Frage "Wer spielt?".' },
    ],
  },

  // ================================================================
  //  2.2 – Die 4 Fälle
  // ================================================================
  '2-2': {
    theorie: {
      titel: 'Die 4 Fälle (Kasus)',
      erklaerung: 'Im Deutschen gibt es 4 Fälle (Kasus): den Nominativ (1. Fall – Wer?), den Akkusativ (4. Fall – Wen oder was?), den Dativ (3. Fall – Wem?) und den Genitiv (2. Fall – Wessen?). Der Fall bestimmt, wie sich der Artikel und manchmal das Nomen verändern. Beispiel: der Hund (Nom.) → den Hund (Akk.) → dem Hund (Dat.) → des Hundes (Gen.).',
      beispiel: 'Nominativ: <span class="highlight">Der Hund</span> bellt. Akkusativ: Ich sehe <span class="highlight">den Hund</span>. Dativ: Ich gebe <span class="highlight">dem Hund</span> Futter. Genitiv: Das Fell <span class="highlight">des Hundes</span>.',
      merkhilfe: 'Merksatz für die Fragen: Wer? → Nominativ. Wen oder was? → Akkusativ. Wem? → Dativ. Wessen? → Genitiv. Eselsbrücke: "Wer will wen wem wessen?"',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Welche Frage gehört zum Nominativ?', optionen: ['Wen?', 'Wem?', 'Wer oder was?', 'Wessen?'], richtig: 2, erklaerung: '"Wer oder was?" ist die Frage für den Nominativ (1. Fall).' },
      { typ: 'multiple_choice', frage: 'Welche Frage gehört zum Akkusativ?', optionen: ['Wer?', 'Wen oder was?', 'Wem?', 'Wessen?'], richtig: 1, erklaerung: '"Wen oder was?" ist die Frage für den Akkusativ (4. Fall).' },
      { typ: 'multiple_choice', frage: 'Welche Frage gehört zum Dativ?', optionen: ['Wer?', 'Wen?', 'Wem?', 'Wessen?'], richtig: 2, erklaerung: '"Wem?" ist die Frage für den Dativ (3. Fall).' },
      { typ: 'multiple_choice', frage: 'Welche Frage gehört zum Genitiv?', optionen: ['Wer?', 'Wen?', 'Wem?', 'Wessen?'], richtig: 3, erklaerung: '"Wessen?" ist die Frage für den Genitiv (2. Fall).' },
      { typ: 'multiple_choice', frage: 'In welchem Fall steht "dem Mann" in: "Ich helfe dem Mann."?', optionen: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], richtig: 2, erklaerung: 'Wem helfe ich? → dem Mann. Das ist Dativ.' },
      { typ: 'multiple_choice', frage: 'In welchem Fall steht "den Ball" in: "Er wirft den Ball."?', optionen: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], richtig: 1, erklaerung: 'Wen oder was wirft er? → den Ball. Das ist Akkusativ.' },
      { typ: 'multiple_choice', frage: 'In welchem Fall steht "des Vaters" in: "Das Auto des Vaters"?', optionen: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], richtig: 3, erklaerung: 'Wessen Auto? → des Vaters. Das ist Genitiv.' },
      { typ: 'multiple_choice', frage: 'Wie heißt "der Hund" im Akkusativ?', optionen: ['der Hund', 'den Hund', 'dem Hund', 'des Hundes'], richtig: 1, erklaerung: 'Maskulin im Akkusativ: der → den. Also "den Hund".' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Nur der männliche Artikel ändert sich im Akkusativ (der → den).', richtig: true, erklaerung: 'Richtig! die Katze bleibt "die Katze", das Buch bleibt "das Buch". Nur "der" wird zu "den".' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"helfen" verlangt den Dativ.', richtig: true, erklaerung: 'Richtig! Ich helfe dem Kind (Wem?). "helfen" braucht immer den Dativ.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Das Subjekt steht immer im Akkusativ.', richtig: false, erklaerung: 'Falsch! Das Subjekt steht immer im Nominativ (1. Fall).' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Im Genitiv bekommt ein männliches Nomen oft die Endung -es oder -s.', richtig: true, erklaerung: 'Richtig! des Hundes, des Vaters, des Buches – maskulin und neutrum bekommen -es/-s.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"Ich sehe die Frau" – "die Frau" steht im Nominativ.', richtig: false, erklaerung: 'Falsch! Wen sehe ich? → die Frau. Das ist Akkusativ (der fem. Artikel ändert sich im Akk. nicht).' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Verben verlangen den Dativ?', optionen: ['sehen', 'helfen', 'kaufen', 'danken', 'glauben'], richtig: [1, 3, 4], erklaerung: 'helfen, danken, glauben verlangen den Dativ: Ich helfe dir. Ich danke dir. Ich glaube dir.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Formen sind Dativ?', optionen: ['dem Kind', 'der Frau', 'den Hund', 'dem Lehrer', 'des Buches'], richtig: [0, 1, 3], erklaerung: 'dem Kind, der Frau (Dativ fem.!), dem Lehrer sind Dativ. "den Hund" = Akk., "des Buches" = Gen.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Ergänze den Artikel im Akkusativ: Ich sehe ___ Hund.', satz: 'Ich sehe ___ Hund.', optionen: ['der', 'den', 'dem', 'des'], richtig: 'den', erklaerung: 'Maskulin im Akkusativ: der → den. "Ich sehe den Hund."' },
      { typ: 'lueckentext', frage: 'Ergänze den Artikel im Dativ: Ich gebe ___ Kind einen Ball.', satz: 'Ich gebe ___ Kind einen Ball.', optionen: ['der', 'den', 'dem', 'des'], richtig: 'dem', erklaerung: 'Neutrum im Dativ: das → dem. "Ich gebe dem Kind."' },
      { typ: 'lueckentext', frage: 'Ergänze den Artikel im Dativ: Er hilft ___ Frau.', satz: 'Er hilft ___ Frau.', optionen: ['die', 'der', 'den', 'dem'], richtig: 'der', erklaerung: 'Feminin im Dativ: die → der. "Er hilft der Frau."' },
      { typ: 'lueckentext', frage: 'Ergänze im Genitiv: Das Spielzeug ___ Kindes ist kaputt.', satz: 'Das Spielzeug ___ Kindes ist kaputt.', optionen: ['der', 'den', 'dem', 'des'], richtig: 'des', erklaerung: 'Neutrum im Genitiv: das → des. "des Kindes".' },
      { typ: 'lueckentext', frage: 'Der 3. Fall heißt auch ___.', satz: 'Der 3. Fall heißt auch ___.', optionen: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], richtig: 'Dativ', erklaerung: 'Der 3. Fall ist der Dativ (Wem?).' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne die 4 Fälle in der richtigen Reihenfolge (1.–4.):', woerter: ['Akkusativ', 'Genitiv', 'Nominativ', 'Dativ'], richtig: ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], erklaerung: '1. Nominativ, 2. Genitiv, 3. Dativ, 4. Akkusativ.' },
      { typ: 'reihenfolge', frage: 'Ordne: Nominativ → Akkusativ → Dativ → Genitiv von "der Hund":', woerter: ['des Hundes', 'dem Hund', 'der Hund', 'den Hund'], richtig: ['der Hund', 'den Hund', 'dem Hund', 'des Hundes'], erklaerung: 'der Hund (Nom.) → den Hund (Akk.) → dem Hund (Dat.) → des Hundes (Gen.).' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde den falschen Artikel:', satz: 'Ich gebe den Hund einen Knochen.', fehlerWort: 'den', korrektWort: 'dem', erklaerung: '"geben" braucht Dativ: Wem gebe ich? → dem Hund (nicht "den").' },
      { typ: 'satz_korrigieren', frage: 'Finde den falschen Artikel:', satz: 'Das Auto der Vaters ist rot.', fehlerWort: 'der', korrektWort: 'des', erklaerung: 'Genitiv maskulin: der → des. "Das Auto des Vaters."' },
      { typ: 'satz_korrigieren', frage: 'Finde den falschen Artikel:', satz: 'Er dankt dem Lehrer und dem Frau.', fehlerWort: 'dem', korrektWort: 'der', erklaerung: 'Feminin im Dativ: die → der. "Er dankt der Frau."' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde den Fall mit seiner Frage:', paare: [['Nominativ', 'Wer?'], ['Akkusativ', 'Wen?'], ['Dativ', 'Wem?']], erklaerung: 'Nominativ = Wer?, Akkusativ = Wen?, Dativ = Wem?' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'In welchem Fall steht "des Vaters" in: "Das Auto des Vaters ist neu."?', optionen: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], richtig: 3, erklaerung: 'Wessen Auto? → des Vaters. Das ist Genitiv.' },
      { typ: 'richtig_falsch', frage: 'Im Dativ heißt es "die Frau" → "der Frau".', richtig: true, erklaerung: 'Feminin im Dativ: die → der. "Ich helfe der Frau."' },
      { typ: 'lueckentext', frage: 'Ergänze den richtigen Artikel: "Ich gebe ___ Hund einen Knochen." (Dativ)', satz: 'Ich gebe ___ Hund einen Knochen.', antwort: 'dem', erklaerung: 'Wem gebe ich den Knochen? → dem Hund (Dativ maskulin).' },
      { typ: 'multiple_choice', frage: 'Welcher Satz enthält einen Genitiv?', optionen: ['Ich sehe den Ball.', 'Das Dach des Hauses ist rot.', 'Er gibt dem Kind Essen.', 'Die Frau lacht.'], richtig: 1, erklaerung: 'Wessen Dach? → des Hauses. Das ist Genitiv.' },
    ],
  },

  // ================================================================
  //  2.3 – Zeitformen
  // ================================================================
  '2-3': {
    theorie: {
      titel: 'Zeitformen: Präsens, Präteritum, Perfekt',
      erklaerung: 'Im Deutschen gibt es drei wichtige Zeitformen: Das Präsens (Gegenwart – ich spiele), das Präteritum (schriftliche Vergangenheit – ich spielte) und das Perfekt (mündliche Vergangenheit – ich habe gespielt). Das Präsens beschreibt, was gerade passiert oder regelmäßig geschieht. Das Präteritum wird vor allem beim Schreiben benutzt (Erzählungen, Berichte). Das Perfekt wird vor allem beim Sprechen benutzt.',
      beispiel: 'Präsens: Ich <span class="highlight">spiele</span>. Präteritum: Ich <span class="highlight">spielte</span>. Perfekt: Ich <span class="highlight">habe gespielt</span>.',
      merkhilfe: 'Präsens = JETZT. Präteritum = Vergangenheit (geschrieben, Märchen: "Es war einmal..."). Perfekt = Vergangenheit (gesprochen: "Ich habe heute Fußball gespielt.").',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Welche Zeitform ist "ich spiele"?', optionen: ['Präsens', 'Präteritum', 'Perfekt', 'Futur'], richtig: 0, erklaerung: '"ich spiele" ist Präsens – die Gegenwartsform.' },
      { typ: 'multiple_choice', frage: 'Welche Zeitform ist "ich spielte"?', optionen: ['Präsens', 'Präteritum', 'Perfekt', 'Futur'], richtig: 1, erklaerung: '"ich spielte" ist Präteritum – die schriftliche Vergangenheitsform.' },
      { typ: 'multiple_choice', frage: 'Welche Zeitform ist "ich habe gespielt"?', optionen: ['Präsens', 'Präteritum', 'Perfekt', 'Futur'], richtig: 2, erklaerung: '"ich habe gespielt" ist Perfekt – die mündliche Vergangenheitsform.' },
      { typ: 'multiple_choice', frage: 'Welche Zeitform benutzt man meistens beim Sprechen?', optionen: ['Präsens', 'Präteritum', 'Perfekt', 'Alle gleich'], richtig: 2, erklaerung: 'Beim Sprechen benutzt man meistens das Perfekt: "Ich habe gegessen."' },
      { typ: 'multiple_choice', frage: 'Wie heißt "gehen" im Präteritum (er)?', optionen: ['er geht', 'er ging', 'er ist gegangen', 'er gehte'], richtig: 1, erklaerung: '"gehen" ist unregelmäßig: er ging (nicht "gehte"!).' },
      { typ: 'multiple_choice', frage: 'Wie heißt "spielen" im Perfekt (ich)?', optionen: ['ich spielte', 'ich spiele', 'ich habe gespielt', 'ich bin gespielt'], richtig: 2, erklaerung: 'Perfekt von "spielen": ich habe gespielt (haben + Partizip II).' },
      { typ: 'multiple_choice', frage: 'Welches Hilfsverb braucht "gehen" im Perfekt?', optionen: ['haben', 'sein', 'werden', 'können'], richtig: 1, erklaerung: 'Verben der Bewegung nutzen "sein": Ich bin gegangen (nicht "habe gegangen").' },
      { typ: 'multiple_choice', frage: 'Wie heißt das Partizip II von "essen"?', optionen: ['geesst', 'gegessen', 'aßen', 'esste'], richtig: 1, erklaerung: 'essen → gegessen. Es ist ein unregelmäßiges (starkes) Verb.' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Das Perfekt wird mit "haben" oder "sein" + Partizip II gebildet.', richtig: true, erklaerung: 'Richtig! Ich habe gespielt. Ich bin gelaufen.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Das Präteritum von "machen" ist "er machte".', richtig: true, erklaerung: 'Richtig! Regelmäßige Verben bilden Präteritum mit -te: mach-te.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"Er ist geschlafen" ist richtig.', richtig: false, erklaerung: 'Falsch! "schlafen" braucht "haben": Er hat geschlafen (keine Bewegung/Veränderung).' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Im Märchen wird meistens das Präteritum benutzt.', richtig: true, erklaerung: 'Richtig! "Es war einmal..." – Märchen und Erzählungen nutzen das Präteritum.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"laufen" bildet das Perfekt mit "haben".', richtig: false, erklaerung: 'Falsch! "laufen" ist ein Bewegungsverb → "sein": Ich bin gelaufen.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Verben bilden das Perfekt mit "sein"?', optionen: ['gehen', 'kochen', 'laufen', 'schreiben', 'fahren'], richtig: [0, 2, 4], erklaerung: 'Bewegungsverben: gehen, laufen, fahren → bin gegangen, bin gelaufen, bin gefahren.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Sätze stehen im Präteritum?', optionen: ['Er ging nach Hause.', 'Sie hat gelacht.', 'Wir spielten Fußball.', 'Ich esse Pizza.', 'Er lief schnell.'], richtig: [0, 2, 4], erklaerung: 'ging, spielten, lief sind Präteritumformen.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Setze ins Präteritum: Ich ___ gestern Fußball. (spielen)', satz: 'Ich ___ gestern Fußball.', optionen: ['spiele', 'spielte', 'habe gespielt', 'spielen'], richtig: 'spielte', erklaerung: 'Präteritum von "spielen" (ich): spielte.' },
      { typ: 'lueckentext', frage: 'Setze ins Perfekt: Er ___ einen Brief ___. (schreiben)', satz: 'Er ___ einen Brief geschrieben.', optionen: ['hat', 'ist', 'wird', 'kann'], richtig: 'hat', erklaerung: '"schreiben" bildet Perfekt mit "haben": Er hat geschrieben.' },
      { typ: 'lueckentext', frage: 'Setze ins Perfekt: Sie ___ nach Wien ___. (fahren)', satz: 'Sie ___ nach Wien gefahren.', optionen: ['hat', 'ist', 'wird', 'kann'], richtig: 'ist', erklaerung: '"fahren" = Bewegungsverb → Perfekt mit "sein": Sie ist gefahren.' },
      { typ: 'lueckentext', frage: 'Wie heißt das Partizip II von "trinken"?', satz: 'Ich habe Milch ___.', optionen: ['trinkte', 'getrunken', 'getrunkt', 'trinken'], richtig: 'getrunken', erklaerung: 'trinken → getrunken. Unregelmäßiges Verb.' },
      { typ: 'lueckentext', frage: 'Wie heißt das Partizip II von "lesen"?', satz: 'Er hat das Buch ___.', optionen: ['gelest', 'gelesen', 'leste', 'leser'], richtig: 'gelesen', erklaerung: 'lesen → gelesen. Unregelmäßiges Verb.' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne die Zeitformen: Vergangenheit → Gegenwart', woerter: ['Präsens', 'Perfekt', 'Präteritum'], richtig: ['Präteritum', 'Perfekt', 'Präsens'], erklaerung: 'Präteritum und Perfekt = Vergangenheit, Präsens = Gegenwart.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Ich habe gestern nach Wien gefahren.', fehlerWort: 'habe', korrektWort: 'bin', erklaerung: '"fahren" = Bewegungsverb → Perfekt mit "sein": Ich bin gefahren.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Er gehte gestern ins Kino.', fehlerWort: 'gehte', korrektWort: 'ging', erklaerung: '"gehen" ist unregelmäßig: er ging (nicht "gehte").' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Wir sind gestern Pizza gegessen.', fehlerWort: 'sind', korrektWort: 'haben', erklaerung: '"essen" braucht "haben": Wir haben Pizza gegessen.' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde die Zeitform mit dem Beispiel:', paare: [['Präsens', 'ich spiele'], ['Präteritum', 'ich spielte'], ['Perfekt', 'ich habe gespielt']], erklaerung: 'Präsens = ich spiele, Präteritum = ich spielte, Perfekt = ich habe gespielt.' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Welche Zeitform ist "wir haben gelacht"?', optionen: ['Präsens', 'Präteritum', 'Perfekt', 'Futur'], richtig: 2, erklaerung: '"wir haben gelacht" ist Perfekt (haben + Partizip II).' },
      { typ: 'richtig_falsch', frage: '"Ich bin nach Wien gefahren" ist Perfekt.', richtig: true, erklaerung: 'Ja! Bei Bewegungsverben bildet man Perfekt mit "sein": bin gefahren.' },
      { typ: 'lueckentext', frage: 'Setze das Verb ins Präteritum: "Er ___ ein Buch." (lesen)', satz: 'Er ___ ein Buch.', antwort: 'las', erklaerung: 'Präteritum von "lesen": ich las, er las.' },
      { typ: 'multiple_choice', frage: 'Welches Hilfsverb braucht "schwimmen" im Perfekt?', optionen: ['haben', 'sein', 'werden', 'können'], richtig: 1, erklaerung: 'Bewegungsverben bilden Perfekt mit "sein": Ich bin geschwommen.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Sie sind nach Hause gelauft.', fehlerWort: 'gelauft', korrektWort: 'gelaufen', erklaerung: 'Das Partizip II von "laufen" ist "gelaufen" (nicht "gelauft"). Bewegungsverben bilden das Perfekt mit "sein".' },
    ],
  },

  // ================================================================
  //  2.4 – Satzzeichen & Zeichensetzung
  // ================================================================
  '2-4': {
    theorie: {
      titel: 'Satzzeichen und Zeichensetzung',
      erklaerung: 'Satzzeichen helfen beim Lesen und Verstehen. Die wichtigsten sind: der Punkt (.) am Ende eines Aussagesatzes, das Fragezeichen (?) bei Fragen, das Ausrufezeichen (!) bei Ausrufen und Befehlen, das Komma (,) bei Aufzählungen und vor Nebensätzen, und der Doppelpunkt (:) vor direkter Rede oder Aufzählungen. Besonders wichtig: Vor "weil", "dass", "wenn", "obwohl" steht immer ein Komma!',
      beispiel: 'Er ruft<span class="highlight">:</span> <span class="highlight">"</span>Komm her<span class="highlight">!"</span> Ich kaufe Brot<span class="highlight">,</span> Milch und Eier<span class="highlight">.</span>',
      merkhilfe: 'Punkt = Aussage fertig. Fragezeichen = Frage. Ausrufezeichen = Ausruf/Befehl. Komma = Aufzählung ODER Nebensatz. Doppelpunkt = "Achtung, jetzt kommt was!"',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Welches Satzzeichen steht am Ende einer Frage?', optionen: ['Punkt (.)', 'Komma (,)', 'Fragezeichen (?)', 'Ausrufezeichen (!)'], richtig: 2, erklaerung: 'Am Ende einer Frage steht ein Fragezeichen (?).' },
      { typ: 'multiple_choice', frage: 'Welches Satzzeichen steht am Ende eines Aussagesatzes?', optionen: ['Punkt (.)', 'Komma (,)', 'Fragezeichen (?)', 'Ausrufezeichen (!)'], richtig: 0, erklaerung: 'Am Ende eines Aussagesatzes steht ein Punkt (.).' },
      { typ: 'multiple_choice', frage: 'Welches Satzzeichen steht bei einem Ausruf oder Befehl?', optionen: ['Punkt (.)', 'Komma (,)', 'Fragezeichen (?)', 'Ausrufezeichen (!)'], richtig: 3, erklaerung: 'Bei Ausrufen und Befehlen steht ein Ausrufezeichen (!).' },
      { typ: 'multiple_choice', frage: 'Wann setzt man ein Komma?', optionen: ['Am Satzende', 'Bei Aufzählungen', 'Vor jedem Nomen', 'Nach jedem Verb'], richtig: 1, erklaerung: 'Ein Komma steht bei Aufzählungen: Ich kaufe Brot, Milch und Eier.' },
      { typ: 'multiple_choice', frage: 'Welches Satzzeichen steht vor der direkten Rede?', optionen: ['Komma', 'Punkt', 'Doppelpunkt', 'Semikolon'], richtig: 2, erklaerung: 'Vor der direkten Rede steht ein Doppelpunkt: Er sagt: "Hallo!"' },
      { typ: 'multiple_choice', frage: 'Wo steht das Komma? "Ich komme weil es regnet."', optionen: ['Nach "komme"', 'Nach "weil"', 'Nach "es"', 'Kein Komma nötig'], richtig: 0, erklaerung: 'Vor "weil" (Nebensatz-Einleitung) steht ein Komma: "Ich komme, weil es regnet."' },
      { typ: 'multiple_choice', frage: 'Wann steht kein Komma vor "und"?', optionen: ['Nie', 'Bei Aufzählungen', 'Immer', 'Vor Nebensätzen'], richtig: 1, erklaerung: 'In Aufzählungen steht vor "und" normalerweise KEIN Komma: Brot, Milch und Eier.' },
      { typ: 'multiple_choice', frage: 'Welcher Satz hat das richtige Satzzeichen?', optionen: ['Wie heißt du.', 'Wie heißt du?', 'Wie heißt du!', 'Wie heißt du,'], richtig: 1, erklaerung: '"Wie heißt du?" ist eine Frage → Fragezeichen.' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Vor "dass" steht immer ein Komma.', richtig: true, erklaerung: 'Richtig! "dass" leitet einen Nebensatz ein → Komma davor: "Ich weiß, dass du kommst."' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Nach einem Punkt schreibt man klein weiter.', richtig: false, erklaerung: 'Falsch! Nach einem Punkt beginnt ein neuer Satz → Großschreibung.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Ein Doppelpunkt steht vor einer Aufzählung.', richtig: true, erklaerung: 'Richtig! "Ich brauche: Brot, Milch und Eier." – Doppelpunkt kündigt die Aufzählung an.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Vor "und" in einer Aufzählung steht immer ein Komma.', richtig: false, erklaerung: 'Falsch! Vor "und" steht normalerweise KEIN Komma: Brot, Milch und Eier.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Vor "weil" steht immer ein Komma.', richtig: true, erklaerung: 'Richtig! "weil" leitet einen Nebensatz ein → Komma: "Ich bin müde, weil es spät ist."' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Vor welchen Wörtern steht immer ein Komma?', optionen: ['und', 'weil', 'oder', 'dass', 'wenn'], richtig: [1, 3, 4], erklaerung: 'Vor "weil", "dass", "wenn" (Nebensatz-Einleitungen) steht immer ein Komma.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Sätze brauchen ein Fragezeichen?', optionen: ['Wie heißt du', 'Ich bin Lisa', 'Kommst du mit', 'Wo wohnst du', 'Das ist toll'], richtig: [0, 2, 3], erklaerung: 'Fragen brauchen ein Fragezeichen: Wie heißt du? Kommst du mit? Wo wohnst du?' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Setze das richtige Satzzeichen: Wie alt bist du___', satz: 'Wie alt bist du___', optionen: ['.', '?', '!', ','], richtig: '?', erklaerung: '"Wie alt bist du?" ist eine Frage → Fragezeichen.' },
      { typ: 'lueckentext', frage: 'Setze das richtige Satzzeichen: Pass auf___', satz: 'Pass auf___', optionen: ['.', '?', '!', ','], richtig: '!', erklaerung: '"Pass auf!" ist ein Befehl/Warnung → Ausrufezeichen.' },
      { typ: 'lueckentext', frage: 'Setze das richtige Satzzeichen: Ich gehe nach Hause___', satz: 'Ich gehe nach Hause___', optionen: ['.', '?', '!', ','], richtig: '.', erklaerung: '"Ich gehe nach Hause." ist ein Aussagesatz → Punkt.' },
      { typ: 'lueckentext', frage: 'Wo fehlt das Komma? "Ich komme___ weil ich dich besuchen will."', satz: 'Ich komme___ weil ich dich besuchen will.', optionen: ['.', '?', '!', ','], richtig: ',', erklaerung: 'Vor "weil" kommt ein Komma: "Ich komme, weil ich dich besuchen will."' },
      { typ: 'lueckentext', frage: 'Ergänze: Ich kaufe Brot___ Butter und Milch.', satz: 'Ich kaufe Brot___ Butter und Milch.', optionen: ['.', '?', '!', ','], richtig: ',', erklaerung: 'Aufzählung: "Ich kaufe Brot, Butter und Milch." – Komma zwischen den Teilen.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde das falsche Satzzeichen:', satz: 'Wo wohnst du.', fehlerWort: 'du.', korrektWort: 'du?', erklaerung: '"Wo wohnst du?" ist eine Frage und braucht ein Fragezeichen.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Ich bin froh dass du kommst.', fehlerWort: 'froh', korrektWort: 'froh,', erklaerung: 'Vor "dass" kommt ein Komma: "Ich bin froh, dass du kommst."' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Er sagt. Ich komme morgen.', fehlerWort: 'sagt.', korrektWort: 'sagt:', erklaerung: 'Vor direkter Rede steht ein Doppelpunkt: Er sagt: "Ich komme morgen."' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne die Satzzeichen ihrem Zweck zu: Aussage → Frage → Ausruf', woerter: ['! (Ausruf)', '? (Frage)', '. (Aussage)'], richtig: ['. (Aussage)', '? (Frage)', '! (Ausruf)'], erklaerung: 'Punkt = Aussage, Fragezeichen = Frage, Ausrufezeichen = Ausruf.' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde das Satzzeichen mit seinem Namen:', paare: [['.', 'Punkt'], ['?', 'Fragezeichen'], ['!', 'Ausrufezeichen']], erklaerung: '. = Punkt, ? = Fragezeichen, ! = Ausrufezeichen.' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Welches Satzzeichen steht vor wörtlicher Rede?', optionen: ['Komma (,)', 'Punkt (.)', 'Doppelpunkt (:)', 'Semikolon (;)'], richtig: 2, erklaerung: 'Vor wörtlicher Rede steht ein Doppelpunkt: Er sagt: "Hallo!"' },
      { typ: 'richtig_falsch', frage: 'Vor "und" in einer Aufzählung steht kein Komma.', richtig: true, erklaerung: 'In einer Aufzählung steht vor dem letzten "und" kein Komma: Brot, Milch und Eier.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Ich kaufe Äpfel, Birnen, und Bananen.', fehlerWort: ',', korrektWort: '(kein Komma vor und)', erklaerung: 'Vor "und" in einer Aufzählung steht im Deutschen kein Komma.' },
      { typ: 'lueckentext', frage: 'Setze das richtige Satzzeichen: "Wo wohnst du___"', satz: 'Wo wohnst du___', antwort: '?', erklaerung: '"Wo wohnst du?" ist eine Frage – also steht ein Fragezeichen.' },
      { typ: 'multiple_choice', frage: 'Wann steht KEIN Komma?', optionen: ['Vor "weil"', 'Vor "dass"', 'Vor "und" in einer Aufzählung', 'Vor "obwohl"'], richtig: 2, erklaerung: 'Vor "und" in einer einfachen Aufzählung steht kein Komma.' },
    ],
  },

  // ================================================================
  //  2.5 – Nebensätze
  // ================================================================
  '2-5': {
    theorie: {
      titel: 'Haupt- und Nebensätze',
      erklaerung: 'Ein Hauptsatz kann alleine stehen und hat das Verb an 2. Stelle. Ein Nebensatz kann NICHT alleine stehen – er braucht einen Hauptsatz. Im Nebensatz steht das Verb am ENDE. Nebensätze beginnen mit Einleitewörtern (Konjunktionen) wie: weil, dass, wenn, obwohl, als, damit, ob. Zwischen Haupt- und Nebensatz steht immer ein Komma.',
      beispiel: 'Hauptsatz: <span class="highlight">Ich bleibe zu Hause</span>, Nebensatz: <span class="highlight">weil es regnet</span>. (Verb "regnet" steht am Ende!)',
      merkhilfe: 'Nebensatz-Regel: Das Verb wandert ans ENDE! "Ich weiß, dass er krank ist." (nicht: "dass er ist krank"). Signal-Wörter: weil, dass, wenn, obwohl, als, ob → Nebensatz!',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Was ist ein Nebensatz?', optionen: ['Ein Satz, der alleine stehen kann', 'Ein Satz, der einen Hauptsatz braucht', 'Ein Satz ohne Verb', 'Ein sehr kurzer Satz'], richtig: 1, erklaerung: 'Ein Nebensatz kann nicht alleine stehen – er braucht immer einen Hauptsatz.' },
      { typ: 'multiple_choice', frage: 'Wo steht das Verb im Nebensatz?', optionen: ['An 1. Stelle', 'An 2. Stelle', 'Am Ende', 'Egal wo'], richtig: 2, erklaerung: 'Im Nebensatz steht das Verb immer am Ende: "..., weil es regnet."' },
      { typ: 'multiple_choice', frage: 'Welches Wort leitet KEINEN Nebensatz ein?', optionen: ['weil', 'und', 'dass', 'obwohl'], richtig: 1, erklaerung: '"und" verbindet Hauptsätze, es leitet keinen Nebensatz ein.' },
      { typ: 'multiple_choice', frage: 'Was steht zwischen Haupt- und Nebensatz?', optionen: ['Ein Punkt', 'Ein Komma', 'Ein Doppelpunkt', 'Nichts'], richtig: 1, erklaerung: 'Zwischen Haupt- und Nebensatz steht immer ein Komma.' },
      { typ: 'multiple_choice', frage: 'Welcher Teil ist der Nebensatz? "Ich lerne, weil morgen ein Test ist."', optionen: ['Ich lerne', 'weil morgen ein Test ist', 'morgen ein Test', 'Ich lerne weil'], richtig: 1, erklaerung: '"weil morgen ein Test ist" ist der Nebensatz (eingeleitet mit "weil", Verb am Ende).' },
      { typ: 'multiple_choice', frage: 'Welcher Satz ist richtig?', optionen: ['Ich weiß, dass er ist krank.', 'Ich weiß, dass er krank ist.', 'Ich weiß dass er krank ist.', 'Ich weiß, dass krank er ist.'], richtig: 1, erklaerung: 'Verb am Ende im Nebensatz + Komma: "Ich weiß, dass er krank ist."' },
      { typ: 'multiple_choice', frage: 'Welche Konjunktion drückt einen Grund aus?', optionen: ['obwohl', 'wenn', 'weil', 'dass'], richtig: 2, erklaerung: '"weil" gibt einen Grund an: "Ich bin müde, weil ich spät ins Bett ging."' },
      { typ: 'multiple_choice', frage: 'Welche Konjunktion drückt einen Gegensatz aus?', optionen: ['weil', 'dass', 'obwohl', 'wenn'], richtig: 2, erklaerung: '"obwohl" drückt einen Gegensatz aus: "Er geht raus, obwohl es regnet."' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Im Nebensatz steht das Verb an zweiter Stelle.', richtig: false, erklaerung: 'Falsch! Im Nebensatz steht das Verb am ENDE, nicht an zweiter Stelle.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Vor "weil", "dass", "wenn" und "obwohl" steht immer ein Komma.', richtig: true, erklaerung: 'Richtig! Diese Wörter leiten Nebensätze ein → Komma davor.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Ein Nebensatz kann auch am Anfang stehen: "Weil es regnet, bleibe ich zu Hause."', richtig: true, erklaerung: 'Richtig! Der Nebensatz kann vor oder nach dem Hauptsatz stehen.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"und" und "oder" leiten Nebensätze ein.', richtig: false, erklaerung: 'Falsch! "und" und "oder" verbinden Hauptsätze oder Satzteile, keine Nebensätze.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"Weil es kalt ist." ist ein vollständiger Satz.', richtig: false, erklaerung: 'Falsch! Das ist nur ein Nebensatz. Er braucht einen Hauptsatz: "Ich ziehe mich warm an, weil es kalt ist."' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter leiten Nebensätze ein?', optionen: ['weil', 'und', 'dass', 'aber', 'wenn'], richtig: [0, 2, 4], erklaerung: 'weil, dass, wenn leiten Nebensätze ein. "und" und "aber" verbinden Hauptsätze.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Sätze enthalten einen Nebensatz?', optionen: ['Ich lese und du schreibst.', 'Ich komme, wenn du mich rufst.', 'Er sagt, dass er müde ist.', 'Sie lacht laut.', 'Ich weiß, obwohl er es leugnet.'], richtig: [1, 2, 4], erklaerung: 'wenn, dass, obwohl → Nebensätze. "und" verbindet nur Hauptsätze.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Ergänze die Konjunktion: Ich bleibe zu Hause, ___ es regnet.', satz: 'Ich bleibe zu Hause, ___ es regnet.', optionen: ['und', 'weil', 'oder', 'aber'], richtig: 'weil', erklaerung: '"weil" gibt den Grund an: Warum bleibe ich? Weil es regnet.' },
      { typ: 'lueckentext', frage: 'Ergänze: Er sagt, ___ er morgen kommt.', satz: 'Er sagt, ___ er morgen kommt.', optionen: ['weil', 'dass', 'wenn', 'obwohl'], richtig: 'dass', erklaerung: '"dass" leitet einen Inhaltssatz ein: Er sagt, dass er morgen kommt.' },
      { typ: 'lueckentext', frage: 'Ergänze: ___ du willst, können wir ins Kino gehen.', satz: '___ du willst, können wir ins Kino gehen.', optionen: ['Weil', 'Dass', 'Wenn', 'Obwohl'], richtig: 'Wenn', erklaerung: '"wenn" drückt eine Bedingung aus: Wenn du willst, ...' },
      { typ: 'lueckentext', frage: 'Im Nebensatz steht das Verb am ___.', satz: 'Im Nebensatz steht das Verb am ___.', optionen: ['Anfang', 'Ende', 'zweiter Stelle', 'beliebiger Stelle'], richtig: 'Ende', erklaerung: 'Nebensatz-Regel: Das Verb steht am Ende!' },
      { typ: 'lueckentext', frage: 'Ergänze: Sie geht spazieren, ___ es kalt ist.', satz: 'Sie geht spazieren, ___ es kalt ist.', optionen: ['weil', 'dass', 'obwohl', 'damit'], richtig: 'obwohl', erklaerung: '"obwohl" drückt einen Gegensatz aus: Sie geht trotzdem raus.' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne den Nebensatz richtig (Verb ans Ende!):', woerter: ['regnet', 'es', 'weil'], richtig: ['weil', 'es', 'regnet'], erklaerung: '"weil es regnet" – Im Nebensatz steht das Verb am Ende.' },
      { typ: 'reihenfolge', frage: 'Ordne den Nebensatz richtig:', woerter: ['kommt', 'er', 'morgen', 'dass'], richtig: ['dass', 'er', 'morgen', 'kommt'], erklaerung: '"dass er morgen kommt" – Verb am Ende im Nebensatz.' },
      { typ: 'reihenfolge', frage: 'Ordne den ganzen Satz richtig:', woerter: ['weil ich müde bin', 'ich gehe schlafen'], richtig: ['ich gehe schlafen', 'weil ich müde bin'], erklaerung: 'Hauptsatz, Nebensatz: "Ich gehe schlafen, weil ich müde bin."' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Ich weiß, dass er ist krank.', fehlerWort: 'ist', korrektWort: '(ans Ende)', erklaerung: 'Im Nebensatz steht das Verb am Ende: "Ich weiß, dass er krank ist."' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Ich komme weil ich dich mag.', fehlerWort: 'komme', korrektWort: 'komme,', erklaerung: 'Vor "weil" fehlt das Komma: "Ich komme, weil ich dich mag."' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde die Konjunktion mit ihrer Bedeutung:', paare: [['weil', 'Grund'], ['obwohl', 'Gegensatz'], ['wenn', 'Bedingung']], erklaerung: 'weil = Grund, obwohl = Gegensatz/trotzdem, wenn = Bedingung/Zeitpunkt.' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Welches Wort leitet einen Nebensatz ein?', optionen: ['und', 'aber', 'damit', 'denn'], richtig: 2, erklaerung: '"damit" leitet einen Nebensatz ein: "Ich lerne, damit ich gute Noten bekomme."' },
      { typ: 'richtig_falsch', frage: 'Im Nebensatz steht das Verb an zweiter Stelle.', richtig: false, erklaerung: 'Nein! Im Nebensatz steht das Verb am ENDE: "..., weil er krank ist."' },
      { typ: 'lueckentext', frage: 'Ergänze die Konjunktion: "Ich bleibe zu Hause, ___ ich krank bin."', satz: 'Ich bleibe zu Hause, ___ ich krank bin.', antwort: 'weil', erklaerung: '"weil" gibt den Grund an: Ich bleibe zu Hause, weil ich krank bin.' },
      { typ: 'multiple_choice', frage: 'Welcher Satz ist ein Nebensatz?', optionen: ['Ich gehe nach Hause.', 'weil es regnet', 'Er lacht laut.', 'Komm her!'], richtig: 1, erklaerung: '"weil es regnet" ist ein Nebensatz – er kann nicht alleine stehen und beginnt mit "weil".' },
    ],
  },
};
