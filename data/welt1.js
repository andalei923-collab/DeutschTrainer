// ============================================================
//  welt1.js – Welt 1: Wortarten & Grundlagen
//  5 Unterwelten × 30 Fragen = 150 Fragen
//  Zielgruppe: 1. Klasse MS, 10–11 Jahre
// ============================================================

'use strict';

const WELT1 = {
  // ================================================================
  //  1.1 – Nomen
  // ================================================================
  '1-1': {
    theorie: {
      titel: 'Was ist ein Nomen?',
      erklaerung: 'Nomen (auch Substantive oder Hauptwörter genannt) bezeichnen Menschen, Tiere, Pflanzen, Dinge und Gefühle. Sie werden im Deutschen IMMER großgeschrieben. Jedes Nomen hat einen Begleiter: der, die oder das. Nomen kann man in Einzahl (Singular) und Mehrzahl (Plural) setzen.',
      beispiel: '<span class="highlight">Der Hund</span> spielt im <span class="highlight">Garten</span> mit einem <span class="highlight">Ball</span>.',
      merkhilfe: 'Artikel-Probe: Kann ich "der", "die" oder "das" davorsetzen? Dann ist es ein Nomen! Beispiel: der Tisch, die Lampe, das Buch.',
    },
    fragen: [
      // Multiple Choice – Nomen erkennen
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Nomen?', optionen: ['laufen', 'der Hund', 'schnell', 'aber'], richtig: 1, erklaerung: '"Hund" ist ein Nomen – es hat einen Artikel (der) und wird großgeschrieben.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Nomen?', optionen: ['schreiben', 'lustig', 'die Schule', 'heute'], richtig: 2, erklaerung: '"Schule" ist ein Nomen – die Schule. Nomen haben immer einen Artikel.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist KEIN Nomen?', optionen: ['Baum', 'Katze', 'rennen', 'Tisch'], richtig: 2, erklaerung: '"rennen" ist ein Verb (Tuwort), kein Nomen.' },
      { typ: 'multiple_choice', frage: 'Welches Nomen bezeichnet ein Gefühl?', optionen: ['Tisch', 'Freude', 'Apfel', 'Garten'], richtig: 1, erklaerung: '"Freude" ist ein abstraktes Nomen – es beschreibt ein Gefühl.' },
      { typ: 'multiple_choice', frage: 'Welches Nomen bezeichnet ein Tier?', optionen: ['Stuhl', 'Blume', 'Vogel', 'Brot'], richtig: 2, erklaerung: '"Vogel" ist ein Nomen für ein Tier.' },
      { typ: 'multiple_choice', frage: 'Was ist der richtige Artikel für "Sonne"?', optionen: ['der', 'die', 'das', 'den'], richtig: 1, erklaerung: 'Es heißt "die Sonne" – Sonne ist weiblich (feminin).' },
      { typ: 'multiple_choice', frage: 'Was ist der richtige Artikel für "Buch"?', optionen: ['der', 'die', 'das', 'dem'], richtig: 2, erklaerung: 'Es heißt "das Buch" – Buch ist sächlich (neutrum).' },
      { typ: 'multiple_choice', frage: 'Was ist der Plural von "das Kind"?', optionen: ['die Kinds', 'die Kinder', 'die Kindern', 'die Kinde'], richtig: 1, erklaerung: 'Der Plural von "das Kind" ist "die Kinder".' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Nomen werden im Deutschen immer großgeschrieben.', richtig: true, erklaerung: 'Richtig! Alle Nomen schreibt man groß: der Tisch, die Lampe, das Haus.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Das Wort "schön" ist ein Nomen.', richtig: false, erklaerung: '"schön" ist ein Adjektiv (Wiewort), kein Nomen.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"Liebe" ist ein Nomen, weil man "die" davorsetzen kann.', richtig: true, erklaerung: 'Richtig! "die Liebe" – es ist ein abstraktes Nomen für ein Gefühl.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Jedes Nomen hat genau einen Artikel, der sich nie ändert.', richtig: false, erklaerung: 'Der Artikel ändert sich je nach Fall: der Hund (Nominativ), dem Hund (Dativ).' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Im Plural haben alle Nomen den Artikel "die".', richtig: true, erklaerung: 'Richtig! Im Nominativ Plural heißt es immer "die": die Hunde, die Katzen, die Bücher.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter sind Nomen? (mehrere richtig)', optionen: ['Tisch', 'rennen', 'Schule', 'blau', 'Freund'], richtig: [0, 2, 4], erklaerung: 'Tisch, Schule und Freund sind Nomen – erkennbar am Artikel und der Großschreibung.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter sind Nomen?', optionen: ['Angst', 'trinken', 'Wolke', 'schnell', 'Stuhl'], richtig: [0, 2, 4], erklaerung: 'Angst, Wolke und Stuhl sind Nomen.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Nomen bezeichnen Lebewesen?', optionen: ['Fisch', 'Tür', 'Mädchen', 'Lampe', 'Lehrer'], richtig: [0, 2, 4], erklaerung: 'Fisch, Mädchen und Lehrer bezeichnen Lebewesen.' },

      // Lückentext – Artikel zuordnen
      { typ: 'lueckentext', frage: 'Setze den richtigen Artikel ein: ___ Hund bellt laut.', satz: '___ Hund bellt laut.', optionen: ['Der', 'Die', 'Das', 'Den'], richtig: 'Der', erklaerung: '"Hund" ist männlich – deshalb "der Hund".' },
      { typ: 'lueckentext', frage: 'Setze den richtigen Artikel ein: ___ Katze schläft.', satz: '___ Katze schläft.', optionen: ['Der', 'Die', 'Das', 'Den'], richtig: 'Die', erklaerung: '"Katze" ist weiblich – deshalb "die Katze".' },
      { typ: 'lueckentext', frage: 'Setze den richtigen Artikel ein: ___ Auto fährt schnell.', satz: '___ Auto fährt schnell.', optionen: ['Der', 'Die', 'Das', 'Den'], richtig: 'Das', erklaerung: '"Auto" ist sächlich – deshalb "das Auto".' },
      { typ: 'lueckentext', frage: 'Wie heißt der Plural? Ein Apfel → Viele ___.', satz: 'Ein Apfel → Viele ___.', richtig: 'Äpfel', erklaerung: 'Der Plural von "Apfel" ist "Äpfel" – mit Umlaut!' },
      { typ: 'lueckentext', frage: 'Wie heißt der Plural? Ein Haus → Viele ___.', satz: 'Ein Haus → Viele ___.', richtig: 'Häuser', erklaerung: 'Der Plural von "Haus" ist "Häuser" – mit Umlaut und -er.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde das falsch geschriebene Wort:', satz: 'Das hund schläft auf dem Sofa.', fehlerWort: 'hund', korrektWort: 'Hund', erklaerung: 'Nomen werden großgeschrieben: "der Hund", nicht "der hund".' },
      { typ: 'satz_korrigieren', frage: 'Finde das falsch geschriebene Wort:', satz: 'Die katze trinkt Milch.', fehlerWort: 'katze', korrektWort: 'Katze', erklaerung: '"Katze" ist ein Nomen und wird großgeschrieben.' },
      { typ: 'satz_korrigieren', frage: 'Finde das falsch geschriebene Wort:', satz: 'Ich esse einen apfel.', fehlerWort: 'apfel', korrektWort: 'Apfel', erklaerung: '"Apfel" ist ein Nomen und wird großgeschrieben.' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne den Satz richtig:', woerter: ['spielt', 'Der', 'Hund', 'draußen'], richtig: ['Der', 'Hund', 'spielt', 'draußen'], erklaerung: 'Der Hund spielt draußen. Das Subjekt (Der Hund) steht vorne, das Verb (spielt) an 2. Stelle.' },
      { typ: 'reihenfolge', frage: 'Ordne den Satz richtig:', woerter: ['Katze', 'Die', 'Milch', 'trinkt'], richtig: ['Die', 'Katze', 'trinkt', 'Milch'], erklaerung: 'Die Katze trinkt Milch. Subjekt – Verb – Objekt.' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Welches Wort ist ein anderes Wort für "Haus"?', optionen: ['Auto', 'Gebäude', 'Straße', 'Garten'], richtig: 1, erklaerung: '"Gebäude" ist ein Synonym für "Haus" – beide bezeichnen ein Bauwerk.' },
      { typ: 'synonym_finden', frage: 'Welches Wort ist ein anderes Wort für "Angst"?', optionen: ['Freude', 'Mut', 'Furcht', 'Liebe'], richtig: 2, erklaerung: '"Furcht" ist ein Synonym für "Angst".' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "Bank" in diesem Satz?', satz: 'Die Kinder sitzen auf der Bank.', optionen: ['Ein Geldinstitut', 'Ein Sitzmöbel', 'Ein Regal', 'Ein Schrank'], richtig: 1, erklaerung: '"Bank" hat zwei Bedeutungen: Sitzmöbel oder Geldinstitut. Hier ist ein Sitzmöbel gemeint.' },

      // Weitere Fragen
      { typ: 'multiple_choice', frage: 'Was ist der Plural von "der Stuhl"?', optionen: ['die Stuhle', 'die Stühle', 'die Stühlen', 'die Stuhl'], richtig: 1, erklaerung: 'Der Plural von "Stuhl" ist "Stühle" – mit Umlaut (u → ü).' },
      { typ: 'lueckentext', frage: 'Wie heißt der Plural? Ein Buch → Viele ___.', satz: 'Ein Buch → Viele ___.', richtig: 'Bücher', erklaerung: 'Der Plural von "Buch" ist "Bücher" – mit Umlaut und -er.' },
    ],
  },

  // ================================================================
  //  1.2 – Verben
  // ================================================================
  '1-2': {
    theorie: {
      titel: 'Was ist ein Verb?',
      erklaerung: 'Verben sind Tuwörter oder Zeitwörter. Sie drücken aus, was jemand tut oder was passiert. Verben werden kleingeschrieben (außer am Satzanfang). Man kann Verben konjugieren – das bedeutet, sie verändern ihre Form je nach Person: ich laufe, du läufst, er läuft. Die Grundform eines Verbs heißt Infinitiv und endet meistens auf -en: laufen, spielen, essen.',
      beispiel: 'Der Hund <span class="highlight">spielt</span> im Garten und <span class="highlight">springt</span> über den Zaun.',
      merkhilfe: 'Frage: "Was tut jemand?" oder "Was passiert?" – die Antwort ist das Verb! Beispiel: Der Hund spielt. → Was tut der Hund? Er spielt.',
    },
    fragen: [
      // Multiple Choice – Verben erkennen
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Verb?', optionen: ['Tisch', 'laufen', 'groß', 'der'], richtig: 1, erklaerung: '"laufen" ist ein Verb – es beschreibt eine Tätigkeit.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Verb?', optionen: ['Schule', 'schnell', 'schreiben', 'Stift'], richtig: 2, erklaerung: '"schreiben" ist ein Verb – Was tut man? Man schreibt.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist KEIN Verb?', optionen: ['singen', 'tanzen', 'Blume', 'kochen'], richtig: 2, erklaerung: '"Blume" ist ein Nomen, kein Verb.' },
      { typ: 'multiple_choice', frage: 'Was ist der Infinitiv (Grundform) von "er singt"?', optionen: ['singen', 'singt', 'sang', 'gesungen'], richtig: 0, erklaerung: 'Der Infinitiv ist "singen" – die Grundform endet auf -en.' },
      { typ: 'multiple_choice', frage: 'Was ist der Infinitiv von "sie läuft"?', optionen: ['läuft', 'laufen', 'lief', 'gelaufen'], richtig: 1, erklaerung: 'Der Infinitiv ist "laufen". "Läuft" ist die konjugierte Form für "sie".' },
      { typ: 'multiple_choice', frage: 'Wie heißt "spielen" in der Form "er/sie/es"?', optionen: ['spiele', 'spielst', 'spielt', 'spielen'], richtig: 2, erklaerung: 'Er/sie/es spielt. Die Endung für die 3. Person Singular ist -t.' },
      { typ: 'multiple_choice', frage: 'Wie heißt "lesen" in der Form "du"?', optionen: ['lese', 'liest', 'lest', 'lesen'], richtig: 1, erklaerung: 'Du liest. Bei "lesen" verändert sich der Vokal: e → ie.' },
      { typ: 'multiple_choice', frage: 'Welches Verb passt? Die Katze ___ Milch.', optionen: ['bellt', 'trinkt', 'fliegt', 'schwimmt'], richtig: 1, erklaerung: 'Katzen trinken Milch. "trinkt" passt zum Satz.' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Verben werden immer kleingeschrieben.', richtig: false, erklaerung: 'Nicht immer! Am Satzanfang werden Verben großgeschrieben: "Spiel draußen!" Und nominalisierte Verben auch: "Das Laufen macht Spaß."' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Die Grundform (Infinitiv) eines Verbs endet meistens auf -en.', richtig: true, erklaerung: 'Richtig! Beispiele: lauf-en, spiel-en, ess-en, trink-en.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"schnell" ist ein Verb, weil man schnell laufen kann.', richtig: false, erklaerung: '"schnell" ist ein Adjektiv, kein Verb. Das Verb ist "laufen".' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Verben kann man konjugieren (ich spiele, du spielst, er spielt).', richtig: true, erklaerung: 'Richtig! Konjugieren bedeutet, das Verb an die Person anzupassen.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"essen" und "trinken" sind beide Verben.', richtig: true, erklaerung: 'Richtig! Beide beschreiben Tätigkeiten: Was tust du? Ich esse. Ich trinke.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter sind Verben?', optionen: ['schwimmen', 'Tisch', 'singen', 'groß', 'kochen'], richtig: [0, 2, 4], erklaerung: 'schwimmen, singen und kochen sind Verben – sie beschreiben Tätigkeiten.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter sind Verben?', optionen: ['Haus', 'lesen', 'schön', 'schlafen', 'malen'], richtig: [1, 3, 4], erklaerung: 'lesen, schlafen und malen sind Verben.' },

      // Lückentext – Konjugation
      { typ: 'lueckentext', frage: 'Konjugiere: Ich ___ gerne Fußball. (spielen)', satz: 'Ich ___ gerne Fußball.', optionen: ['spiele', 'spielst', 'spielt', 'spielen'], richtig: 'spiele', erklaerung: 'Ich spiele – die Endung für "ich" ist -e.' },
      { typ: 'lueckentext', frage: 'Konjugiere: Du ___ ein Buch. (lesen)', satz: 'Du ___ ein Buch.', optionen: ['lese', 'liest', 'lest', 'lesen'], richtig: 'liest', erklaerung: 'Du liest – bei "lesen" verändert sich der Vokal für "du".' },
      { typ: 'lueckentext', frage: 'Konjugiere: Er ___ schnell. (laufen)', satz: 'Er ___ schnell.', optionen: ['laufe', 'läufst', 'läuft', 'laufen'], richtig: 'läuft', erklaerung: 'Er läuft – bei "laufen" wird aus "au" → "äu" in der 3. Person.' },
      { typ: 'lueckentext', frage: 'Konjugiere: Wir ___ zusammen. (lernen)', satz: 'Wir ___ zusammen.', optionen: ['lerne', 'lernst', 'lernt', 'lernen'], richtig: 'lernen', erklaerung: 'Wir lernen – für "wir" bleibt die Infinitiv-Form.' },
      { typ: 'lueckentext', frage: 'Finde den Infinitiv: Sie tanzt gerne. → ___', satz: 'Sie tanzt gerne. → ___', richtig: 'tanzen', erklaerung: 'Der Infinitiv von "tanzt" ist "tanzen".' },
      { typ: 'lueckentext', frage: 'Finde den Infinitiv: Er isst einen Apfel. → ___', satz: 'Er isst einen Apfel. → ___', richtig: 'essen', erklaerung: 'Der Infinitiv von "isst" ist "essen".' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde das falsche Wort im Satz:', satz: 'Ich spiele und er spielen auch.', fehlerWort: 'spielen', korrektWort: 'spielt', erklaerung: 'Für "er" braucht man "spielt" (3. Person Singular), nicht "spielen".' },
      { typ: 'satz_korrigieren', frage: 'Finde das falsche Wort im Satz:', satz: 'Du laufe sehr schnell.', fehlerWort: 'laufe', korrektWort: 'läufst', erklaerung: 'Für "du" heißt es "läufst", nicht "laufe".' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne die Konjugation richtig: spielen', woerter: ['er spielt', 'ich spiele', 'du spielst'], richtig: ['ich spiele', 'du spielst', 'er spielt'], erklaerung: 'Die Reihenfolge ist: ich spiele, du spielst, er spielt.' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Welches Verb bedeutet dasselbe wie "sprechen"?', optionen: ['schreiben', 'reden', 'lesen', 'hören'], richtig: 1, erklaerung: '"reden" und "sprechen" bedeuten dasselbe.' },
      { typ: 'synonym_finden', frage: 'Welches Verb bedeutet dasselbe wie "beginnen"?', optionen: ['aufhören', 'starten', 'warten', 'schlafen'], richtig: 1, erklaerung: '"starten" und "beginnen" sind Synonyme.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "fliegen" in diesem Satz?', satz: 'Die Vögel fliegen nach Süden.', optionen: ['Insekten (die Fliegen)', 'Sich durch die Luft bewegen', 'Schnell rennen', 'Fallen'], richtig: 1, erklaerung: '"fliegen" bedeutet hier "sich durch die Luft bewegen".' },

      // Weitere Fragen
      { typ: 'multiple_choice', frage: 'Welches Verb drückt eine Bewegung aus?', optionen: ['schlafen', 'denken', 'rennen', 'sehen'], richtig: 2, erklaerung: '"rennen" beschreibt eine Bewegung – schnell laufen.' },
      { typ: 'lueckentext', frage: 'Konjugiere: Ihr ___ sehr laut. (singen)', satz: 'Ihr ___ sehr laut.', optionen: ['singe', 'singst', 'singt', 'singen'], richtig: 'singt', erklaerung: 'Ihr singt – die Endung für "ihr" ist -t.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"gehen, stehen, liegen" sind alles Verben.', richtig: true, erklaerung: 'Richtig! Alle drei beschreiben einen Zustand oder eine Tätigkeit.' },
    ],
  },

  // ================================================================
  //  1.3 – Adjektive
  // ================================================================
  '1-3': {
    theorie: {
      titel: 'Was ist ein Adjektiv?',
      erklaerung: 'Adjektive sind Wiewörter. Sie beschreiben, wie etwas oder jemand ist. Adjektive werden normalerweise kleingeschrieben. Man kann die meisten Adjektive steigern: schön → schöner → am schönsten. Adjektive stehen oft vor einem Nomen (der große Hund) oder nach "sein" (Der Hund ist groß).',
      beispiel: 'Der <span class="highlight">große</span> Hund spielt im <span class="highlight">schönen</span> Garten.',
      merkhilfe: 'Frage: "Wie ist es?" – die Antwort ist ein Adjektiv! Beispiel: Wie ist der Hund? Er ist groß. → "groß" ist ein Adjektiv.',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Adjektiv?', optionen: ['Tisch', 'laufen', 'schnell', 'aber'], richtig: 2, erklaerung: '"schnell" ist ein Adjektiv – es beschreibt, wie etwas ist.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Adjektiv?', optionen: ['Schule', 'lustig', 'schreiben', 'heute'], richtig: 1, erklaerung: '"lustig" ist ein Adjektiv – Wie ist es? Es ist lustig.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist KEIN Adjektiv?', optionen: ['groß', 'Baum', 'klein', 'alt'], richtig: 1, erklaerung: '"Baum" ist ein Nomen, kein Adjektiv.' },
      { typ: 'multiple_choice', frage: 'Wie heißt der Komparativ (Steigerung) von "schön"?', optionen: ['schöner', 'am schönsten', 'schönlich', 'schönheit'], richtig: 0, erklaerung: 'Komparativ: schön → schöner. Die Steigerung mit -er.' },
      { typ: 'multiple_choice', frage: 'Wie heißt der Superlativ von "groß"?', optionen: ['größer', 'großartig', 'am größten', 'großes'], richtig: 2, erklaerung: 'Superlativ: groß → am größten. Mit Umlaut und "am ... -sten".' },
      { typ: 'multiple_choice', frage: 'Was ist das Gegenteil von "kalt"?', optionen: ['warm', 'kühl', 'nass', 'dunkel'], richtig: 0, erklaerung: 'Das Gegenteil (Antonym) von "kalt" ist "warm".' },
      { typ: 'multiple_choice', frage: 'Was ist das Gegenteil von "laut"?', optionen: ['schnell', 'leise', 'groß', 'hell'], richtig: 1, erklaerung: 'Das Gegenteil von "laut" ist "leise".' },
      { typ: 'multiple_choice', frage: 'Was ist das Gegenteil von "alt"?', optionen: ['groß', 'lang', 'neu', 'jung'], richtig: 3, erklaerung: 'Das Gegenteil von "alt" ist "jung" (bei Menschen) oder "neu" (bei Dingen).' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Adjektive beschreiben, wie etwas ist.', richtig: true, erklaerung: 'Richtig! Adjektive sind Wiewörter: groß, klein, schnell, langsam.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Man kann alle Adjektive steigern.', richtig: false, erklaerung: 'Nicht alle! Manche Adjektive kann man nicht steigern, z. B. "tot", "leer", "rund".' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"gut – besser – am besten" ist eine unregelmäßige Steigerung.', richtig: true, erklaerung: 'Richtig! "gut" hat eine unregelmäßige Steigerung: gut – besser – am besten.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Adjektive schreibt man immer groß.', richtig: false, erklaerung: 'Falsch! Adjektive werden normalerweise kleingeschrieben: ein großer Hund.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"viel – mehr – am meisten" ist eine Steigerung.', richtig: true, erklaerung: 'Richtig! Das ist die (unregelmäßige) Steigerung von "viel".' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter sind Adjektive?', optionen: ['rot', 'Tisch', 'klein', 'laufen', 'süß'], richtig: [0, 2, 4], erklaerung: 'rot, klein und süß sind Adjektive – sie beschreiben Eigenschaften.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Adjektive kann man steigern?', optionen: ['groß', 'tot', 'schnell', 'rund', 'schön'], richtig: [0, 2, 4], erklaerung: 'groß, schnell und schön kann man steigern. "tot" und "rund" sind absolute Adjektive.' },

      // Lückentext – Steigerung
      { typ: 'lueckentext', frage: 'Steigere: schnell → ___ → am schnellsten', satz: 'schnell → ___ → am schnellsten', richtig: 'schneller', erklaerung: 'Komparativ: schnell → schneller. Regel: Grundform + -er.' },
      { typ: 'lueckentext', frage: 'Steigere: klein → kleiner → ___', satz: 'klein → kleiner → ___', richtig: 'am kleinsten', erklaerung: 'Superlativ: am kleinsten. Regel: am + Grundform + -sten.' },
      { typ: 'lueckentext', frage: 'Steigere: gut → ___ → am besten', satz: 'gut → ___ → am besten', richtig: 'besser', erklaerung: '"gut" hat eine unregelmäßige Steigerung: gut – besser – am besten.' },
      { typ: 'lueckentext', frage: 'Das Gegenteil von "hell" ist ___.', satz: 'Das Gegenteil von "hell" ist ___.', richtig: 'dunkel', erklaerung: 'Das Antonym von "hell" ist "dunkel".' },
      { typ: 'lueckentext', frage: 'Das Gegenteil von "schwer" ist ___.', satz: 'Das Gegenteil von "schwer" ist ___.', richtig: 'leicht', erklaerung: 'Das Antonym von "schwer" ist "leicht".' },

      // Steigerung bilden
      { typ: 'steigerung_bilden', frage: 'Bilde den Komparativ von "lang":', wort: 'lang', form: 'komparativ', richtig: 'länger', erklaerung: 'Komparativ: lang → länger. Achtung: Umlaut (a → ä)!' },
      { typ: 'steigerung_bilden', frage: 'Bilde den Superlativ von "schön":', wort: 'schön', form: 'superlativ', richtig: 'am schönsten', erklaerung: 'Superlativ: am schönsten. Regel: am + Grundform + -sten.' },

      // Steigerung ordnen
      { typ: 'steigerung_ordnen', frage: 'Bringe in die richtige Reihenfolge:', woerter: ['am schnellsten', 'schneller', 'schnell'], richtig: ['schnell', 'schneller', 'am schnellsten'], erklaerung: 'Positiv → Komparativ → Superlativ: schnell – schneller – am schnellsten.' },
      { typ: 'steigerung_ordnen', frage: 'Bringe in die richtige Reihenfolge:', woerter: ['am besten', 'gut', 'besser'], richtig: ['gut', 'besser', 'am besten'], erklaerung: 'Unregelmäßig: gut – besser – am besten.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde das falsche Wort:', satz: 'Der Elefant ist größer wie die Maus.', fehlerWort: 'wie', korrektWort: 'als', erklaerung: 'Beim Komparativ (Vergleich) verwendet man "als", nicht "wie": größer als.' },

      // Synonym
      { typ: 'synonym_finden', frage: 'Welches Adjektiv bedeutet dasselbe wie "fröhlich"?', optionen: ['traurig', 'lustig', 'müde', 'laut'], richtig: 1, erklaerung: '"lustig" und "fröhlich" sind Synonyme – beide beschreiben gute Laune.' },
      { typ: 'synonym_finden', frage: 'Welches Adjektiv bedeutet dasselbe wie "riesig"?', optionen: ['winzig', 'gewaltig', 'schnell', 'schön'], richtig: 1, erklaerung: '"riesig" und "gewaltig" bedeuten dasselbe – beide beschreiben etwas sehr Großes.' },

      // Weitere Fragen
      { typ: 'lueckentext', frage: 'Das Gegenteil von "schnell" ist ___.', satz: 'Das Gegenteil von "schnell" ist ___.', richtig: 'langsam', erklaerung: 'Das Antonym von "schnell" ist "langsam".' },
      { typ: 'multiple_choice', frage: 'Welches Wort beschreibt eine Farbe?', optionen: ['laufen', 'grün', 'Tisch', 'weil'], richtig: 1, erklaerung: '"grün" ist ein Adjektiv – es beschreibt eine Farbe.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Der Komparativ von "hoch" ist "höher".', richtig: true, erklaerung: 'Richtig! hoch → höher → am höchsten (unregelmäßig, mit Umlaut).' },
    ],
  },

  // ================================================================
  //  1.4 – Artikel
  // ================================================================
  '1-4': {
    theorie: {
      titel: 'Artikel: der, die, das',
      erklaerung: 'Im Deutschen hat jedes Nomen einen Artikel (Begleiter). Es gibt drei bestimmte Artikel: "der" (männlich/maskulin), "die" (weiblich/feminin) und "das" (sächlich/neutrum). Daneben gibt es unbestimmte Artikel: "ein" (männlich/sächlich) und "eine" (weiblich). Den richtigen Artikel muss man oft einfach lernen, aber es gibt hilfreiche Endungsregeln.',
      beispiel: '<span class="highlight">Der</span> Mann, <span class="highlight">die</span> Frau, <span class="highlight">das</span> Kind. <span class="highlight">Ein</span> Hund, <span class="highlight">eine</span> Katze.',
      merkhilfe: 'Endungen helfen: -ung, -heit, -keit → immer "die". -chen, -lein → immer "das". -er, -ling → meistens "der".',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Welcher Artikel gehört zu "Tisch"?', optionen: ['der', 'die', 'das', 'den'], richtig: 0, erklaerung: 'Es heißt "der Tisch" – Tisch ist männlich (maskulin).' },
      { typ: 'multiple_choice', frage: 'Welcher Artikel gehört zu "Blume"?', optionen: ['der', 'die', 'das', 'dem'], richtig: 1, erklaerung: 'Es heißt "die Blume" – Blume ist weiblich (feminin).' },
      { typ: 'multiple_choice', frage: 'Welcher Artikel gehört zu "Fenster"?', optionen: ['der', 'die', 'das', 'den'], richtig: 2, erklaerung: 'Es heißt "das Fenster" – Fenster ist sächlich (neutrum).' },
      { typ: 'multiple_choice', frage: 'Welcher Artikel gehört zu "Mädchen"?', optionen: ['der', 'die', 'das', 'den'], richtig: 2, erklaerung: 'Es heißt "das Mädchen" – Endung -chen = immer "das"! (auch wenn es ein Mädchen ist)' },
      { typ: 'multiple_choice', frage: 'Welcher Artikel gehört zu "Zeitung"?', optionen: ['der', 'die', 'das', 'dem'], richtig: 1, erklaerung: 'Es heißt "die Zeitung" – Endung -ung = immer "die"!' },
      { typ: 'multiple_choice', frage: 'Welcher Artikel gehört zu "Frühling"?', optionen: ['der', 'die', 'das', 'dem'], richtig: 0, erklaerung: 'Es heißt "der Frühling" – Endung -ling = meistens "der".' },
      { typ: 'multiple_choice', frage: 'Was ist der unbestimmte Artikel für "Hund"?', optionen: ['ein', 'eine', 'einer', 'einem'], richtig: 0, erklaerung: '"Hund" ist männlich → unbestimmt: "ein Hund".' },
      { typ: 'multiple_choice', frage: 'Was ist der unbestimmte Artikel für "Tasche"?', optionen: ['ein', 'eine', 'einer', 'einem'], richtig: 1, erklaerung: '"Tasche" ist weiblich → unbestimmt: "eine Tasche".' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Nomen mit der Endung "-chen" haben immer den Artikel "das".', richtig: true, erklaerung: 'Richtig! -chen ist eine Verkleinerungsform: das Häuschen, das Mädchen, das Kätzchen.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Nomen mit der Endung "-ung" haben immer den Artikel "die".', richtig: true, erklaerung: 'Richtig! -ung ist immer feminin: die Zeitung, die Ordnung, die Hoffnung.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Es heißt "der Mädchen", weil ein Mädchen weiblich ist.', richtig: false, erklaerung: 'Falsch! Es heißt "das Mädchen" – die Endung -chen bestimmt den Artikel, nicht das Geschlecht.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"ein" ist der unbestimmte Artikel für männliche und sächliche Nomen.', richtig: true, erklaerung: 'Richtig! ein Hund (männlich), ein Buch (sächlich). Weiblich: eine Katze.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Im Plural gibt es keinen unbestimmten Artikel.', richtig: true, erklaerung: 'Richtig! Man sagt "Hunde" (ohne Artikel) statt "eine Hunde".' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Nomen haben den Artikel "die"?', optionen: ['Lampe', 'Tisch', 'Freiheit', 'Auto', 'Blume'], richtig: [0, 2, 4], erklaerung: 'die Lampe, die Freiheit (-heit!), die Blume – alle sind feminin.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Nomen haben den Artikel "das"?', optionen: ['Kind', 'Hund', 'Häuschen', 'Katze', 'Buch'], richtig: [0, 2, 4], erklaerung: 'das Kind, das Häuschen (-chen!), das Buch – alle sind neutrum.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Setze den Artikel ein: ___ Schule beginnt um 8 Uhr.', satz: '___ Schule beginnt um 8 Uhr.', optionen: ['Der', 'Die', 'Das', 'Den'], richtig: 'Die', erklaerung: 'Es heißt "die Schule" – Schule ist feminin.' },
      { typ: 'lueckentext', frage: 'Setze den Artikel ein: ___ Computer ist kaputt.', satz: '___ Computer ist kaputt.', optionen: ['Der', 'Die', 'Das', 'Den'], richtig: 'Der', erklaerung: 'Es heißt "der Computer" – Computer ist maskulin.' },
      { typ: 'lueckentext', frage: 'Setze den Artikel ein: ___ Essen schmeckt gut.', satz: '___ Essen schmeckt gut.', optionen: ['Der', 'Die', 'Das', 'Den'], richtig: 'Das', erklaerung: 'Es heißt "das Essen" – Essen ist neutrum.' },
      { typ: 'lueckentext', frage: 'Bestimmt oder unbestimmt? Ich sehe ___ Hund. (irgendeinen)', satz: 'Ich sehe ___ Hund.', optionen: ['der', 'ein', 'einen', 'das'], richtig: 'einen', erklaerung: 'Unbestimmt + Akkusativ: "einen Hund". Man kennt den Hund nicht genau.' },
      { typ: 'lueckentext', frage: 'Setze den Artikel ein: Ich habe ___ Schwester.', satz: 'Ich habe ___ Schwester.', optionen: ['ein', 'eine', 'einer', 'einem'], richtig: 'eine', erklaerung: 'Schwester ist feminin → unbestimmt: "eine Schwester".' },
      { typ: 'lueckentext', frage: 'Welcher Artikel? ___ Freundschaft ist wichtig.', satz: '___ Freundschaft ist wichtig.', optionen: ['Der', 'Die', 'Das', 'Ein'], richtig: 'Die', erklaerung: 'Freundschaft endet auf -schaft → immer "die"!' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde den falschen Artikel:', satz: 'Der Mädchen spielt im Garten.', fehlerWort: 'Der', korrektWort: 'Das', erklaerung: 'Es heißt "das Mädchen" (wegen -chen), nicht "der".' },
      { typ: 'satz_korrigieren', frage: 'Finde den falschen Artikel:', satz: 'Das Hund bellt laut.', fehlerWort: 'Das', korrektWort: 'Der', erklaerung: 'Es heißt "der Hund", nicht "das Hund".' },
      { typ: 'satz_korrigieren', frage: 'Finde den falschen Artikel:', satz: 'Der Sonne scheint heute.', fehlerWort: 'Der', korrektWort: 'Die', erklaerung: 'Es heißt "die Sonne", nicht "der Sonne".' },

      // Synonym verbinden (Nomen → Artikel)
      { typ: 'synonym_verbinden', frage: 'Verbinde jedes Nomen mit seinem Artikel:', paare: [['Haus', 'das'], ['Hund', 'der'], ['Katze', 'die']], erklaerung: 'der Hund (maskulin), die Katze (feminin), das Haus (neutrum).' },
      { typ: 'synonym_verbinden', frage: 'Verbinde jedes Nomen mit seinem Artikel:', paare: [['Ordnung', 'die'], ['Brötchen', 'das'], ['Lehrer', 'der']], erklaerung: 'die Ordnung (-ung!), das Brötchen (-chen!), der Lehrer (-er).' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne: maskulin → feminin → neutrum', woerter: ['das (sächlich)', 'die (weiblich)', 'der (männlich)'], richtig: ['der (männlich)', 'die (weiblich)', 'das (sächlich)'], erklaerung: 'Die Reihenfolge ist: der (maskulin) – die (feminin) – das (neutrum).' },

      // Weitere Fragen
      { typ: 'multiple_choice', frage: 'Welcher Artikel gehört zu "Schmetterling"?', optionen: ['der', 'die', 'das', 'dem'], richtig: 0, erklaerung: 'Es heißt "der Schmetterling" – Endung -ling = meistens "der".' },
      { typ: 'lueckentext', frage: 'Setze den Artikel ein: ___ Möglichkeit ist gut.', satz: '___ Möglichkeit ist gut.', optionen: ['Der', 'Die', 'Das', 'Den'], richtig: 'Die', erklaerung: 'Möglichkeit endet auf -keit → immer "die"!' },
      { typ: 'multiple_choice', frage: 'Welcher Artikel gehört zu "Häuschen"?', optionen: ['der', 'die', 'das', 'dem'], richtig: 2, erklaerung: '"Häuschen" endet auf -chen → immer "das"!' },
    ],
  },

  // ================================================================
  //  1.5 – Pronomen
  // ================================================================
  '1-5': {
    theorie: {
      titel: 'Was sind Pronomen?',
      erklaerung: 'Pronomen sind Fürwörter – sie stehen FÜR ein Nomen und ersetzen es, damit man sich nicht wiederholt. Die wichtigsten Pronomen sind die Personalpronomen: ich, du, er, sie, es, wir, ihr, sie. Daneben gibt es Possessivpronomen (mein, dein, sein), die zeigen, wem etwas gehört.',
      beispiel: 'Der Hund ist müde. <span class="highlight">Er</span> schläft. (Er = der Hund)',
      merkhilfe: 'Pronomen = "Für-Wörter". Sie stehen FÜR ein Nomen, damit man es nicht wiederholen muss. Statt "Lisa geht. Lisa isst." sagt man "Lisa geht. Sie isst."',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Pronomen?', optionen: ['Tisch', 'schnell', 'er', 'laufen'], richtig: 2, erklaerung: '"er" ist ein Personalpronomen – es ersetzt ein männliches Nomen.' },
      { typ: 'multiple_choice', frage: 'Welches Pronomen ersetzt "die Katze"?', optionen: ['er', 'sie', 'es', 'wir'], richtig: 1, erklaerung: '"die Katze" ist weiblich → "sie" ist das richtige Pronomen.' },
      { typ: 'multiple_choice', frage: 'Welches Pronomen ersetzt "das Kind"?', optionen: ['er', 'sie', 'es', 'ihr'], richtig: 2, erklaerung: '"das Kind" ist sächlich → "es" ist das richtige Pronomen.' },
      { typ: 'multiple_choice', frage: 'Welches Pronomen ersetzt "der Lehrer"?', optionen: ['er', 'sie', 'es', 'du'], richtig: 0, erklaerung: '"der Lehrer" ist männlich → "er" ist das richtige Pronomen.' },
      { typ: 'multiple_choice', frage: 'Welches Pronomen ersetzt "die Kinder" (Plural)?', optionen: ['er', 'sie', 'es', 'wir'], richtig: 1, erklaerung: 'Plural-Nomen werden mit "sie" (Plural) ersetzt.' },
      { typ: 'multiple_choice', frage: 'Was ist ein Possessivpronomen?', optionen: ['ich', 'mein', 'und', 'der'], richtig: 1, erklaerung: '"mein" ist ein Possessivpronomen – es zeigt Besitz an: mein Hund.' },
      { typ: 'multiple_choice', frage: 'Das ist Toms Buch. Es gehört ___.', optionen: ['mich', 'ihm', 'sie', 'wir'], richtig: 1, erklaerung: '"ihm" ist das Pronomen für Tom im Dativ (Wem gehört es? Ihm.).' },
      { typ: 'multiple_choice', frage: 'Welches Possessivpronomen passt? ___ Mutter kocht.', optionen: ['Mein', 'Meine', 'Meiner', 'Meinem'], richtig: 1, erklaerung: '"Mutter" ist feminin → "meine Mutter" (nicht "mein").' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Pronomen ersetzen Nomen, um Wiederholungen zu vermeiden.', richtig: true, erklaerung: 'Richtig! Statt "Der Hund bellt. Der Hund ist laut." sagt man "Der Hund bellt. Er ist laut."' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"ich, du, er, sie, es" sind Personalpronomen.', richtig: true, erklaerung: 'Richtig! Das sind die Personalpronomen der 1., 2. und 3. Person Singular.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"mein" ist ein Personalpronomen.', richtig: false, erklaerung: '"mein" ist ein Possessivpronomen (es zeigt Besitz an), kein Personalpronomen.' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"wir" ist das Pronomen für die 1. Person Plural.', richtig: true, erklaerung: 'Richtig! ich (Singular) → wir (Plural).' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: 'Man kann "die Bücher" durch "es" ersetzen.', richtig: false, erklaerung: 'Falsch! "die Bücher" ist Plural → "sie" (nicht "es"). "es" ist nur für Singular neutrum.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter sind Personalpronomen?', optionen: ['ich', 'mein', 'du', 'Tisch', 'wir'], richtig: [0, 2, 4], erklaerung: 'ich, du und wir sind Personalpronomen. "mein" ist ein Possessivpronomen.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter sind Possessivpronomen?', optionen: ['dein', 'er', 'sein', 'sie', 'unser'], richtig: [0, 2, 4], erklaerung: 'dein, sein und unser zeigen Besitz an → Possessivpronomen.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Der Hund ist müde. ___ schläft.', satz: 'Der Hund ist müde. ___ schläft.', optionen: ['Er', 'Sie', 'Es', 'Wir'], richtig: 'Er', erklaerung: '"der Hund" ist männlich → Pronomen "er".' },
      { typ: 'lueckentext', frage: 'Die Lehrerin erklärt. ___ ist nett.', satz: 'Die Lehrerin erklärt. ___ ist nett.', optionen: ['Er', 'Sie', 'Es', 'Wir'], richtig: 'Sie', erklaerung: '"die Lehrerin" ist weiblich → Pronomen "sie".' },
      { typ: 'lueckentext', frage: 'Das Baby weint. ___ hat Hunger.', satz: 'Das Baby weint. ___ hat Hunger.', optionen: ['Er', 'Sie', 'Es', 'Wir'], richtig: 'Es', erklaerung: '"das Baby" ist sächlich → Pronomen "es".' },
      { typ: 'lueckentext', frage: 'Ich habe ___ Buch vergessen. (zu mir gehörig)', satz: 'Ich habe ___ Buch vergessen.', optionen: ['mein', 'dein', 'sein', 'ihr'], richtig: 'mein', erklaerung: 'Das Buch gehört zu "ich" → "mein Buch".' },
      { typ: 'lueckentext', frage: 'Tom hat ___ Rucksack mitgebracht. (zu ihm gehörig)', satz: 'Tom hat ___ Rucksack mitgebracht.', optionen: ['mein', 'dein', 'seinen', 'ihren'], richtig: 'seinen', erklaerung: 'Der Rucksack gehört Tom (er) → "seinen Rucksack" (Akkusativ).' },
      { typ: 'lueckentext', frage: 'Lisa und ___ spielen Fußball. (1. Person Singular)', satz: 'Lisa und ___ spielen Fußball.', optionen: ['ich', 'du', 'er', 'sie'], richtig: 'ich', erklaerung: '1. Person Singular = "ich". Lisa und ich spielen Fußball.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde das falsche Pronomen:', satz: 'Die Katze schläft. Er ist müde.', fehlerWort: 'Er', korrektWort: 'Sie', erklaerung: '"die Katze" ist weiblich → Pronomen "sie", nicht "er".' },
      { typ: 'satz_korrigieren', frage: 'Finde das falsche Pronomen:', satz: 'Das Auto ist neu. Sie fährt schnell.', fehlerWort: 'Sie', korrektWort: 'Es', erklaerung: '"das Auto" ist sächlich → Pronomen "es", nicht "sie".' },
      { typ: 'satz_korrigieren', frage: 'Finde das falsche Pronomen:', satz: 'Tom lernt viel. Sie ist fleißig.', fehlerWort: 'Sie', korrektWort: 'Er', erklaerung: '"Tom" ist männlich → Pronomen "er", nicht "sie".' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne die Personalpronomen: 1., 2., 3. Person Singular', woerter: ['er/sie/es', 'du', 'ich'], richtig: ['ich', 'du', 'er/sie/es'], erklaerung: '1. Person: ich, 2. Person: du, 3. Person: er/sie/es.' },
      { typ: 'reihenfolge', frage: 'Ordne die Personalpronomen: 1., 2., 3. Person Plural', woerter: ['sie', 'wir', 'ihr'], richtig: ['wir', 'ihr', 'sie'], erklaerung: '1. Person Plural: wir, 2. Person: ihr, 3. Person: sie.' },

      // Synonym verbinden (Nomen → Pronomen)
      { typ: 'synonym_verbinden', frage: 'Verbinde das Nomen mit dem richtigen Pronomen:', paare: [['der Vater', 'er'], ['die Mutter', 'sie'], ['das Haus', 'es']], erklaerung: 'der Vater → er (maskulin), die Mutter → sie (feminin), das Haus → es (neutrum).' },

      // Weitere Fragen
      { typ: 'multiple_choice', frage: 'Welches Pronomen passt? ___ spielen im Garten. (die Kinder)', optionen: ['Er', 'Sie', 'Es', 'Wir'], richtig: 1, erklaerung: '"die Kinder" (Plural) → Pronomen "sie" (Plural).' },
      { typ: 'lueckentext', frage: 'Anna hat ___ Tasche verloren. (zu ihr gehörig)', satz: 'Anna hat ___ Tasche verloren.', optionen: ['meine', 'deine', 'ihre', 'seine'], richtig: 'ihre', erklaerung: 'Die Tasche gehört Anna (sie) → "ihre Tasche".' },
      { typ: 'richtig_falsch', frage: 'Stimmt diese Aussage?', aussage: '"ihr" kann sowohl ein Personalpronomen als auch ein Possessivpronomen sein.', richtig: true, erklaerung: 'Richtig! "ihr" als Personalpronomen (2. Person Plural) und "ihr" als Possessivpronomen (zu sie gehörig).' },
    ],
  },
};
