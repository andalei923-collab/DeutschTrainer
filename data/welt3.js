// ============================================================
//  welt3.js – Welt 3: Rechtschreibung & Ausdruck
//  5 Unterwelten × 30 Fragen = 150 Fragen
//  Zielgruppe: 1.–2. Klasse MS, 10–12 Jahre
// ============================================================

const WELT3 = {

  // ================================================================
  //  3.1 – Groß- und Kleinschreibung
  // ================================================================
  '3-1': {
    theorie: {
      titel: 'Groß- und Kleinschreibung',
      erklaerung: 'Im Deutschen schreibt man Nomen (Namenwörter) immer groß: der Tisch, die Schule, das Glück. Auch am Satzanfang schreibt man groß. Verben und Adjektive werden großgeschrieben, wenn sie wie ein Nomen benutzt werden (Nominalisierung). Erkennungszeichen: ein Artikel davor (das Lesen, das Schöne). Namen von Personen, Orten und Ländern schreibt man ebenfalls groß.',
      beispiel: '<span class="highlight">D</span>as <span class="highlight">L</span>esen macht Spaß. <span class="highlight">S</span>ie geht in die <span class="highlight">S</span>chule. <span class="highlight">W</span>ien ist schön.',
      merkhilfe: 'Artikel-Probe: Steht "der/die/das" davor? Dann groß! Satzanfang = immer groß! Namen = immer groß!',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Welches Wort muss man immer großschreiben?', optionen: ['laufen', 'schnell', 'Tisch', 'aber'], richtig: 2, erklaerung: '"Tisch" ist ein Nomen und wird immer großgeschrieben.' },
      { typ: 'multiple_choice', frage: 'Warum schreibt man "das Lesen" groß?', optionen: ['Weil es am Satzanfang steht', 'Weil es ein Name ist', 'Weil es ein nominalisiertes Verb ist', 'Weil es ein Adjektiv ist'], richtig: 2, erklaerung: '"Lesen" ist hier ein nominalisiertes Verb – ein Artikel steht davor (das Lesen).' },
      { typ: 'multiple_choice', frage: 'Welcher Satz ist richtig geschrieben?', optionen: ['er geht nach Hause.', 'Er geht nach hause.', 'Er geht nach Hause.', 'er geht nach hause.'], richtig: 2, erklaerung: 'Satzanfang groß ("Er") und "Hause" als Nomen groß.' },
      { typ: 'multiple_choice', frage: 'Was ist eine Nominalisierung?', optionen: ['Ein Nomen wird zum Verb', 'Ein Verb oder Adjektiv wird wie ein Nomen benutzt', 'Ein Name wird kleingeschrieben', 'Ein Satz ohne Nomen'], richtig: 1, erklaerung: 'Bei einer Nominalisierung wird ein Verb oder Adjektiv wie ein Nomen benutzt: das Laufen, das Gute.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist nominalisiert?', optionen: ['Er läuft schnell.', 'Das Schöne daran ist...', 'Sie ist schön.', 'Schöne Blumen blühen.'], richtig: 1, erklaerung: '"das Schöne" hat einen Artikel davor – es ist ein nominalisiertes Adjektiv.' },
      { typ: 'multiple_choice', frage: 'Wann schreibt man am Satzanfang groß?', optionen: ['Nur bei Nomen', 'Nur bei Namen', 'Immer', 'Nie'], richtig: 2, erklaerung: 'Am Satzanfang schreibt man IMMER groß, egal welche Wortart.' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: '"Adjektive schreibt man immer klein."', richtig: false, erklaerung: 'Nominalisierte Adjektive schreibt man groß: das Gute, das Schöne, etwas Neues.' },
      { typ: 'richtig_falsch', frage: '"Am Satzanfang schreibt man immer groß."', richtig: true, erklaerung: 'Ja! Egal welches Wort am Satzanfang steht – es wird großgeschrieben.' },
      { typ: 'richtig_falsch', frage: '"Namen von Städten schreibt man groß."', richtig: true, erklaerung: 'Ja! Eigennamen wie Wien, Salzburg, Berlin werden immer großgeschrieben.' },
      { typ: 'richtig_falsch', frage: '"Verben schreibt man nie groß."', richtig: false, erklaerung: 'Nominalisierte Verben schreibt man groß: das Lesen, beim Schwimmen, zum Essen.' },
      { typ: 'richtig_falsch', frage: '"Das Wort nach einem Doppelpunkt schreibt man immer groß."', richtig: false, erklaerung: 'Nach einem Doppelpunkt schreibt man nur groß, wenn ein ganzer Satz folgt.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Schreibe richtig: "Das ___ macht Spaß." (lesen)', satz: 'Das ___ macht Spaß.', antwort: 'Lesen', erklaerung: '"Lesen" ist hier nominalisiert (Artikel "das" davor) und wird großgeschrieben.' },
      { typ: 'lueckentext', frage: 'Schreibe richtig: "Beim ___ habe ich viel gelernt." (wandern)', satz: 'Beim ___ habe ich viel gelernt.', antwort: 'Wandern', erklaerung: '"Wandern" ist nominalisiert ("beim" = bei dem) und wird großgeschrieben.' },
      { typ: 'lueckentext', frage: 'Schreibe richtig: "Er mag etwas ___." (süßes)', satz: 'Er mag etwas ___.', antwort: 'Süßes', erklaerung: 'Nach "etwas" wird das Adjektiv nominalisiert: etwas Süßes (großgeschrieben).' },
      { typ: 'lueckentext', frage: 'Schreibe richtig: "Zum ___ braucht man Geduld." (lernen)', satz: 'Zum ___ braucht man Geduld.', antwort: 'Lernen', erklaerung: '"Lernen" ist nominalisiert ("zum" = zu dem) und wird großgeschrieben.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Das lesen macht mir Spaß.', fehlerWort: 'lesen', korrektWort: 'Lesen', erklaerung: '"Lesen" ist hier nominalisiert (Artikel "Das" davor) → großschreiben.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Mein Bruder wohnt in wien.', fehlerWort: 'wien', korrektWort: 'Wien', erklaerung: '"Wien" ist ein Eigenname (Stadt) und wird immer großgeschrieben.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Sie hat etwas schönes gekauft.', fehlerWort: 'schönes', korrektWort: 'Schönes', erklaerung: 'Nach "etwas" wird das Adjektiv nominalisiert: etwas Schönes.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Im Sommer gehen wir gerne Schwimmen.', fehlerWort: 'Schwimmen', korrektWort: 'schwimmen', erklaerung: 'Hier ist "schwimmen" ein normales Verb (wir gehen schwimmen), keine Nominalisierung.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter müssen großgeschrieben werden?', optionen: ['tisch', 'laufen', 'wien', 'schön', 'freude'], richtig: [0, 2, 4], erklaerung: 'Tisch (Nomen), Wien (Eigenname) und Freude (Nomen) werden großgeschrieben.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter sind nominalisiert?', optionen: ['das Gute', 'er liest', 'beim Essen', 'sie rennt', 'etwas Neues'], richtig: [0, 2, 4], erklaerung: '"das Gute", "beim Essen" und "etwas Neues" sind Nominalisierungen (Artikel/Pronomen davor).' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Bringe den Satz in die richtige Reihenfolge (auf Großschreibung achten!):', teile: ['Das', 'Schwimmen', 'im', 'See', 'macht', 'Spaß.'], erklaerung: '"Das Schwimmen im See macht Spaß." – "Schwimmen" ist nominalisiert, "See" ist ein Nomen.' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Welches Wort ist ein anderes Wort für "Nominalisierung"?', wort: 'Nominalisierung', optionen: ['Verkleinerung', 'Substantivierung', 'Vergrößerung', 'Konjugation'], richtig: 1, erklaerung: 'Nominalisierung = Substantivierung. Ein Verb oder Adjektiv wird zum Nomen gemacht.' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde die Regel mit dem Beispiel:', paare: [['Nomen = groß', 'der Tisch'], ['Nominalisierung = groß', 'das Lesen'], ['Satzanfang = groß', 'Er geht.']], erklaerung: 'Nomen, Nominalisierungen und Satzanfänge werden großgeschrieben.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "Groß" in "Großschreibung"?', satz: 'Achte auf die Großschreibung!', optionen: ['Etwas ist sehr groß/hoch', 'Der erste Buchstabe ist ein großer Buchstabe', 'Das Wort hat viele Buchstaben', 'Man schreibt mit großer Schrift'], richtig: 1, erklaerung: 'Großschreibung bedeutet: Der erste Buchstabe des Wortes ist ein Großbuchstabe (Majuskel).' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Welcher Satz enthält eine Nominalisierung?', optionen: ['Ich lese gern.', 'Das Lesen ist toll.', 'Lies das Buch!', 'Er liest schnell.'], richtig: 1, erklaerung: '"Das Lesen" ist eine Nominalisierung – ein Verb wird mit Artikel zum Nomen.' },
      { typ: 'richtig_falsch', frage: '"Nach etwas, nichts, viel, wenig wird ein Adjektiv großgeschrieben."', richtig: true, erklaerung: 'Ja! z.B. etwas Schönes, nichts Neues, viel Gutes, wenig Interessantes.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Wir haben nichts neues gelernt.', fehlerWort: 'neues', korrektWort: 'Neues', erklaerung: 'Nach "nichts" wird das Adjektiv nominalisiert: nichts Neues.' },
      { typ: 'lueckentext', frage: 'Schreibe richtig: "Heute ist ___ Wetter." (schönes)', satz: 'Heute ist ___ Wetter.', antwort: 'schönes', erklaerung: '"schönes" ist hier ein ganz normales Adjektiv vor einem Nomen – es bleibt klein.' },
      { typ: 'multiple_choice', frage: 'Welches Wort muss hier großgeschrieben werden? "er hat viel ___ getan."', optionen: ['gutes', 'Gutes', 'GUTES', 'gutEs'], richtig: 1, erklaerung: 'Nach "viel" wird das Adjektiv nominalisiert: viel Gutes.' },
    ],
  },

  // ================================================================
  //  3.2 – Getrennt- und Zusammenschreibung
  // ================================================================
  '3-2': {
    theorie: {
      titel: 'Getrennt- und Zusammenschreibung',
      erklaerung: 'Zusammengesetzte Nomen schreibt man immer zusammen: Fußball, Haustür, Schultasche. Verb + Verb schreibt man meistens getrennt: spazieren gehen, kennen lernen. Adjektiv + Verb schreibt man getrennt, wenn das Adjektiv gesteigert werden kann: schnell laufen (schneller laufen). Manche Verbindungen schreibt man aber zusammen, wenn eine neue Bedeutung entsteht: teilnehmen, fernsehen. Im Zweifelsfall hilft der Duden!',
      beispiel: 'Zusammen: <span class="highlight">Fußball</span>, <span class="highlight">fernsehen</span>, <span class="highlight">teilnehmen</span>. Getrennt: <span class="highlight">Rad fahren</span>, <span class="highlight">spazieren gehen</span>.',
      merkhilfe: 'Nomen + Nomen = IMMER zusammen! Verb + Verb = meist getrennt. Wenn eine NEUE Bedeutung entsteht = oft zusammen.',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Wie schreibt man "Fußball"?', optionen: ['Fuß Ball', 'Fuß-Ball', 'Fußball', 'fuß ball'], richtig: 2, erklaerung: 'Nomen + Nomen wird immer zusammengeschrieben: Fußball.' },
      { typ: 'multiple_choice', frage: 'Wie schreibt man "Rad fahren"?', optionen: ['Radfahren', 'Rad fahren', 'rad fahren', 'RadFahren'], richtig: 1, erklaerung: '"Rad fahren" wird getrennt geschrieben (Rad = Nomen, fahren = Verb).' },
      { typ: 'multiple_choice', frage: 'Wie schreibt man "fernsehen"?', optionen: ['fern sehen', 'Fern Sehen', 'fernsehen', 'fern Sehen'], richtig: 2, erklaerung: '"fernsehen" wird zusammengeschrieben, weil eine neue Bedeutung entsteht (TV schauen).' },
      { typ: 'multiple_choice', frage: 'Welche Regel gilt für zusammengesetzte Nomen?', optionen: ['Immer getrennt', 'Immer zusammen', 'Manchmal getrennt', 'Mit Bindestrich'], richtig: 1, erklaerung: 'Zusammengesetzte Nomen werden IMMER zusammengeschrieben: Haustür, Schultasche.' },
      { typ: 'multiple_choice', frage: 'Wie schreibt man "kennen lernen"?', optionen: ['kennenlernen', 'kennen lernen', 'Beides ist erlaubt', 'KennenLernen'], richtig: 2, erklaerung: 'Beides ist korrekt: "kennenlernen" und "kennen lernen" sind beide erlaubt.' },
      { typ: 'multiple_choice', frage: 'Wie schreibt man "Haus" + "Tür"?', optionen: ['Haus Tür', 'Haus-Tür', 'Haustür', 'haus tür'], richtig: 2, erklaerung: 'Nomen + Nomen = zusammen: Haustür.' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: '"Zusammengesetzte Nomen schreibt man immer zusammen."', richtig: true, erklaerung: 'Ja! Nomen + Nomen = immer zusammen: Fußball, Haustür, Schultasche.' },
      { typ: 'richtig_falsch', frage: '"spazieren gehen" schreibt man zusammen.', richtig: false, erklaerung: 'Nein! "spazieren gehen" schreibt man getrennt (Verb + Verb = meist getrennt).' },
      { typ: 'richtig_falsch', frage: '"Eislaufen" ist richtig geschrieben.', richtig: true, erklaerung: 'Ja! "Eislaufen" als Nomen (das Eislaufen) wird zusammengeschrieben.' },
      { typ: 'richtig_falsch', frage: '"Auto fahren" wird zusammengeschrieben.', richtig: false, erklaerung: '"Auto fahren" wird getrennt geschrieben.' },
      { typ: 'richtig_falsch', frage: '"Schul" + "Tasche" = "Schultasche" zusammen.', richtig: true, erklaerung: 'Ja! Nomen + Nomen = immer zusammen: Schultasche.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Setze zusammen: "Schuh" + "Geschäft" = ___', satz: '"Schuh" + "Geschäft" = ___', antwort: 'Schuhgeschäft', erklaerung: 'Nomen + Nomen = zusammen: Schuhgeschäft.' },
      { typ: 'lueckentext', frage: 'Setze zusammen: "Hand" + "Schuh" = ___', satz: '"Hand" + "Schuh" = ___', antwort: 'Handschuh', erklaerung: 'Nomen + Nomen = zusammen: Handschuh.' },
      { typ: 'lueckentext', frage: 'Setze zusammen: "Küchen" + "Tisch" = ___', satz: '"Küchen" + "Tisch" = ___', antwort: 'Küchentisch', erklaerung: 'Nomen + Nomen = zusammen: Küchentisch.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Ich spiele gerne Fuß Ball.', fehlerWort: 'Fuß Ball', korrektWort: 'Fußball', erklaerung: 'Nomen + Nomen = zusammen: Fußball.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Wir wollen heute radfahren.', fehlerWort: 'radfahren', korrektWort: 'Rad fahren', erklaerung: '"Rad fahren" wird getrennt geschrieben.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Die Haus Aufgabe ist schwer.', fehlerWort: 'Haus Aufgabe', korrektWort: 'Hausaufgabe', erklaerung: 'Nomen + Nomen = zusammen: Hausaufgabe.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Er möchte Eis laufen gehen.', fehlerWort: 'Eis laufen', korrektWort: 'eislaufen', erklaerung: '"eislaufen" wird zusammengeschrieben (eine neue Bedeutung: Schlittschuhlaufen).' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter schreibt man zusammen?', optionen: ['Haustür', 'Rad fahren', 'Schultasche', 'spazieren gehen', 'Fußball'], richtig: [0, 2, 4], erklaerung: 'Haustür, Schultasche und Fußball sind zusammengesetzte Nomen = zusammen.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Wortpaare schreibt man getrennt?', optionen: ['schnell laufen', 'Handschuh', 'laut singen', 'Küchentisch', 'spazieren gehen'], richtig: [0, 2, 4], erklaerung: '"schnell laufen", "laut singen" und "spazieren gehen" werden getrennt geschrieben.' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Bilde ein zusammengesetztes Nomen aus diesen Teilen:', teile: ['Zimmer', '+', 'Schlaf', '=', 'Schlafzimmer'], erklaerung: 'Schlaf + Zimmer = Schlafzimmer (zusammengeschrieben).' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Welches Wort ist ein zusammengesetztes Nomen?', wort: 'zusammengesetztes Nomen', optionen: ['schnell laufen', 'Handtuch', 'schön singen', 'gut machen'], richtig: 1, erklaerung: '"Handtuch" ist ein zusammengesetztes Nomen (Hand + Tuch).' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde die Teile zum zusammengesetzten Nomen:', paare: [['Schul + Hof', 'Schulhof'], ['Bade + Zimmer', 'Badezimmer'], ['Tür + Schloss', 'Türschloss']], erklaerung: 'Nomen + Nomen = immer zusammen: Schulhof, Badezimmer, Türschloss.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "zusammensetzen" hier?', satz: 'Wir setzen die Wörter zusammen.', optionen: ['Sich nebeneinander setzen', 'Zwei Teile zu einem Wort verbinden', 'Ein Puzzle lösen', 'Etwas reparieren'], richtig: 1, erklaerung: '"zusammensetzen" bedeutet hier: Zwei Wörter zu einem neuen Wort verbinden.' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Wie schreibt man "Tisch" + "Lampe"?', optionen: ['Tisch Lampe', 'Tischlampe', 'Tisch-Lampe', 'tischlampe'], richtig: 1, erklaerung: 'Nomen + Nomen = zusammen: Tischlampe.' },
      { typ: 'richtig_falsch', frage: '"teilnehmen" schreibt man zusammen.', richtig: true, erklaerung: 'Ja! "teilnehmen" wird zusammengeschrieben, weil eine neue Bedeutung entsteht.' },
      { typ: 'lueckentext', frage: 'Setze zusammen: "Wohn" + "Zimmer" = ___', satz: '"Wohn" + "Zimmer" = ___', antwort: 'Wohnzimmer', erklaerung: 'Nomen + Nomen = zusammen: Wohnzimmer.' },
      { typ: 'multiple_choice', frage: 'Wie schreibt man "schnell laufen"?', optionen: ['schnelllaufen', 'schnell laufen', 'Schnell Laufen', 'schnell-laufen'], richtig: 1, erklaerung: 'Adjektiv + Verb getrennt, wenn das Adjektiv steigerbar ist: schnell(er) laufen.' },
      { typ: 'satz_korrigieren', frage: 'Finde den Fehler:', satz: 'Wir gehen ins Schwimm Bad.', fehlerWort: 'Schwimm Bad', korrektWort: 'Schwimmbad', erklaerung: '"Schwimmbad" ist ein zusammengesetztes Nomen und wird zusammengeschrieben.' },
      { typ: 'richtig_falsch', frage: '"Garten" + "Zaun" = "Gartenzaun" ist richtig.', richtig: true, erklaerung: 'Ja! Nomen + Nomen = zusammen: Gartenzaun.' },
    ],
  },

  // ================================================================
  //  3.3 – Synonyme & Antonyme
  // ================================================================
  '3-3': {
    theorie: {
      titel: 'Synonyme und Antonyme',
      erklaerung: 'Synonyme sind Wörter mit gleicher oder ähnlicher Bedeutung: "schnell" und "flink" bedeuten das Gleiche. Antonyme sind Wörter mit gegenteiliger Bedeutung: "groß" ist das Gegenteil von "klein". Synonyme und Antonyme helfen dir, Texte abwechslungsreicher zu schreiben. Statt immer "sagen" zu verwenden, kannst du auch "erzählen", "berichten" oder "meinen" schreiben.',
      beispiel: 'Synonyme: <span class="highlight">schnell</span> = <span class="highlight">flink</span> = <span class="highlight">rasch</span>. Antonyme: <span class="highlight">groß</span> ↔ <span class="highlight">klein</span>, <span class="highlight">hell</span> ↔ <span class="highlight">dunkel</span>.',
      merkhilfe: 'Synonym = ähnliche Bedeutung (SYN = zusammen). Antonym = Gegenteil (ANTI = gegen). Merksatz: "Synonyme sind Freunde, Antonyme sind Feinde!"',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Was ist ein Synonym?', optionen: ['Ein Wort mit gegenteiliger Bedeutung', 'Ein Wort mit gleicher Bedeutung', 'Ein Fremdwort', 'Ein zusammengesetztes Wort'], richtig: 1, erklaerung: 'Ein Synonym ist ein Wort mit gleicher oder ähnlicher Bedeutung.' },
      { typ: 'multiple_choice', frage: 'Was ist ein Antonym?', optionen: ['Ein Wort mit gleicher Bedeutung', 'Ein Wort mit gegenteiliger Bedeutung', 'Ein Nomen', 'Eine Redewendung'], richtig: 1, erklaerung: 'Ein Antonym ist ein Wort mit gegenteiliger Bedeutung.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Synonym für "froh"?', optionen: ['traurig', 'wütend', 'glücklich', 'müde'], richtig: 2, erklaerung: '"froh" und "glücklich" haben eine ähnliche Bedeutung – sie sind Synonyme.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Antonym von "laut"?', optionen: ['leise', 'schnell', 'groß', 'hell'], richtig: 0, erklaerung: '"leise" ist das Gegenteil von "laut" – sie sind Antonyme.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Synonym für "beginnen"?', optionen: ['beenden', 'anfangen', 'aufhören', 'vergessen'], richtig: 1, erklaerung: '"beginnen" und "anfangen" bedeuten das Gleiche.' },
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Antonym von "mutig"?', optionen: ['tapfer', 'feige', 'stark', 'klug'], richtig: 1, erklaerung: '"feige" ist das Gegenteil von "mutig".' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: '"schnell" und "langsam" sind Synonyme.', richtig: false, erklaerung: '"schnell" und "langsam" sind Antonyme (Gegenteile), keine Synonyme.' },
      { typ: 'richtig_falsch', frage: '"groß" und "riesig" sind Synonyme.', richtig: true, erklaerung: 'Ja! "groß" und "riesig" haben eine ähnliche Bedeutung – sie sind Synonyme.' },
      { typ: 'richtig_falsch', frage: '"hell" und "dunkel" sind Antonyme.', richtig: true, erklaerung: 'Ja! "hell" und "dunkel" sind Gegenteile – sie sind Antonyme.' },
      { typ: 'richtig_falsch', frage: '"Haus" und "Gebäude" sind Antonyme.', richtig: false, erklaerung: '"Haus" und "Gebäude" haben eine ähnliche Bedeutung – sie sind Synonyme, nicht Antonyme.' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Finde ein Synonym für "hübsch":', wort: 'hübsch', optionen: ['hässlich', 'schön', 'klein', 'alt'], richtig: 1, erklaerung: '"hübsch" und "schön" haben eine ähnliche Bedeutung.' },
      { typ: 'synonym_finden', frage: 'Finde ein Synonym für "rennen":', wort: 'rennen', optionen: ['gehen', 'laufen', 'stehen', 'sitzen'], richtig: 1, erklaerung: '"rennen" und "laufen" haben eine ähnliche Bedeutung.' },
      { typ: 'synonym_finden', frage: 'Finde ein Synonym für "klug":', wort: 'klug', optionen: ['dumm', 'intelligent', 'langsam', 'laut'], richtig: 1, erklaerung: '"klug" und "intelligent" haben eine ähnliche Bedeutung.' },
      { typ: 'synonym_finden', frage: 'Finde ein Synonym für "wütend":', wort: 'wütend', optionen: ['fröhlich', 'zornig', 'müde', 'ruhig'], richtig: 1, erklaerung: '"wütend" und "zornig" haben eine ähnliche Bedeutung.' },
      { typ: 'synonym_finden', frage: 'Finde ein Synonym für "reden":', wort: 'reden', optionen: ['schweigen', 'sprechen', 'schlafen', 'lesen'], richtig: 1, erklaerung: '"reden" und "sprechen" haben eine ähnliche Bedeutung.' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde die Synonyme:', paare: [['schnell', 'flink'], ['traurig', 'betrübt'], ['lustig', 'witzig']], erklaerung: 'schnell = flink, traurig = betrübt, lustig = witzig – alles Synonympaare.' },
      { typ: 'synonym_verbinden', frage: 'Verbinde die Antonyme (Gegenteile):', paare: [['warm', 'kalt'], ['alt', 'jung'], ['reich', 'arm']], erklaerung: 'warm ↔ kalt, alt ↔ jung, reich ↔ arm – alles Gegensatzpaare.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Setze ein Synonym ein: "Der Hund ist sehr ___." (Ein anderes Wort für "schnell")', satz: 'Der Hund ist sehr ___.', antwort: 'flink', erklaerung: '"flink" ist ein Synonym für "schnell".' },
      { typ: 'lueckentext', frage: 'Setze das Antonym ein: "Das Wasser ist nicht warm, sondern ___."', satz: 'Das Wasser ist nicht warm, sondern ___.', antwort: 'kalt', erklaerung: '"kalt" ist das Gegenteil (Antonym) von "warm".' },
      { typ: 'lueckentext', frage: 'Setze das Antonym ein: "Sie ist nicht traurig, sie ist ___." (froh)', satz: 'Sie ist nicht traurig, sie ist ___.', antwort: 'froh', erklaerung: '"froh" ist das Gegenteil (Antonym) von "traurig".' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter sind Synonyme für "sagen"?', optionen: ['erzählen', 'schweigen', 'berichten', 'meinen', 'vergessen'], richtig: [0, 2, 3], erklaerung: '"erzählen", "berichten" und "meinen" sind Synonyme für "sagen".' },
      { typ: 'mehrfachauswahl', frage: 'Welche Paare sind Antonyme?', optionen: ['groß – klein', 'schnell – flink', 'hell – dunkel', 'nass – trocken', 'traurig – betrübt'], richtig: [0, 2, 3], erklaerung: 'groß/klein, hell/dunkel und nass/trocken sind Gegensatzpaare (Antonyme).' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne die Wörter von klein nach groß:', teile: ['winzig', 'klein', 'mittel', 'groß', 'riesig'], erklaerung: 'winzig → klein → mittel → groß → riesig – eine Steigerung von Synonymen/verwandten Wörtern.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "Bank" in diesem Satz?', satz: 'Ich sitze auf der Bank im Park.', optionen: ['Ein Geldinstitut', 'Ein Sitzmöbel', 'Ein Flussufer', 'Ein Regal'], richtig: 1, erklaerung: '"Bank" hat mehrere Bedeutungen. Hier ist ein Sitzmöbel im Park gemeint.' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Welches Wort ist ein Antonym von "fleißig"?', optionen: ['faul', 'klug', 'mutig', 'nett'], richtig: 0, erklaerung: '"faul" ist das Gegenteil von "fleißig".' },
      { typ: 'synonym_finden', frage: 'Finde ein Synonym für "Angst":', wort: 'Angst', optionen: ['Mut', 'Furcht', 'Freude', 'Wut'], richtig: 1, erklaerung: '"Angst" und "Furcht" haben eine ähnliche Bedeutung.' },
      { typ: 'richtig_falsch', frage: '"kaufen" und "verkaufen" sind Synonyme.', richtig: false, erklaerung: '"kaufen" und "verkaufen" sind Antonyme (Gegenteile): einer kauft, der andere verkauft.' },
      { typ: 'synonym_finden', frage: 'Finde das Antonym von "schwer":', wort: 'schwer', optionen: ['hart', 'leicht', 'groß', 'dunkel'], richtig: 1, erklaerung: '"leicht" ist das Gegenteil von "schwer".' },
      { typ: 'lueckentext', frage: 'Setze das Antonym ein: "Der Turm ist nicht niedrig, sondern ___."', satz: 'Der Turm ist nicht niedrig, sondern ___.', antwort: 'hoch', erklaerung: '"hoch" ist das Antonym (Gegenteil) von "niedrig".' },
      { typ: 'multiple_choice', frage: 'Welches Wortpaar sind Synonyme?', optionen: ['groß – klein', 'Haus – Gebäude', 'warm – kalt', 'hell – dunkel'], richtig: 1, erklaerung: '"Haus" und "Gebäude" haben eine ähnliche Bedeutung – sie sind Synonyme.' },
    ],
  },

  // ================================================================
  //  3.4 – Fremdwörter
  // ================================================================
  '3-4': {
    theorie: {
      titel: 'Fremdwörter im Deutschen',
      erklaerung: 'Viele Wörter im Deutschen kommen aus anderen Sprachen. Aus dem Englischen: Computer, cool, Handy. Aus dem Lateinischen: Nummer, Datum, Minute. Aus dem Französischen: Garage, Parfüm, Friseur. Aus dem Italienischen: Pizza, Konto, Risiko. Aus dem Griechischen: Telefon, Musik, Idee. Fremdwörter erkennst du oft an besonderen Buchstabenkombinationen: ph (Telefon), th (Theater), tion (Nation).',
      beispiel: '<span class="highlight">Telefon</span> (Griechisch), <span class="highlight">Computer</span> (Englisch), <span class="highlight">Pizza</span> (Italienisch), <span class="highlight">Garage</span> (Französisch).',
      merkhilfe: 'Typische Fremdwort-Zeichen: ph = f (Telefon), th (Theater), tion = zion (Nation), ment (Moment). Viele Fremdwörter klingen "anders" als deutsche Wörter.',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Aus welcher Sprache kommt das Wort "Telefon"?', optionen: ['Englisch', 'Französisch', 'Griechisch', 'Lateinisch'], richtig: 2, erklaerung: '"Telefon" kommt aus dem Griechischen: tele = fern, phon = Ton/Stimme.' },
      { typ: 'multiple_choice', frage: 'Aus welcher Sprache kommt "Pizza"?', optionen: ['Englisch', 'Französisch', 'Griechisch', 'Italienisch'], richtig: 3, erklaerung: '"Pizza" ist ein italienisches Wort.' },
      { typ: 'multiple_choice', frage: 'Aus welcher Sprache kommt "Computer"?', optionen: ['Englisch', 'Französisch', 'Lateinisch', 'Griechisch'], richtig: 0, erklaerung: '"Computer" kommt aus dem Englischen (to compute = berechnen).' },
      { typ: 'multiple_choice', frage: 'Was bedeutet das Fremdwort "Diskussion"?', optionen: ['Ein Streit', 'Ein Gespräch mit verschiedenen Meinungen', 'Eine Prüfung', 'Eine Erzählung'], richtig: 1, erklaerung: 'Eine Diskussion ist ein Gespräch, bei dem verschiedene Meinungen ausgetauscht werden.' },
      { typ: 'multiple_choice', frage: 'Aus welcher Sprache kommt "Garage"?', optionen: ['Englisch', 'Französisch', 'Italienisch', 'Griechisch'], richtig: 1, erklaerung: '"Garage" kommt aus dem Französischen.' },
      { typ: 'multiple_choice', frage: 'Was bedeutet das Fremdwort "Emotion"?', optionen: ['Bewegung', 'Gefühl', 'Nachricht', 'Idee'], richtig: 1, erklaerung: '"Emotion" bedeutet "Gefühl" (aus dem Lateinischen: emovere = herausbewegen/erregen).' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: '"Handy" ist ein deutsches Wort.', richtig: false, erklaerung: '"Handy" klingt englisch, wird aber in dieser Bedeutung (Mobiltelefon) nur im Deutschen verwendet – ein Scheinanglizismus.' },
      { typ: 'richtig_falsch', frage: '"Theater" kommt aus dem Griechischen.', richtig: true, erklaerung: 'Ja! "Theater" kommt vom griechischen "theatron" = Schauplatz.' },
      { typ: 'richtig_falsch', frage: '"Ketchup" ist ein deutsches Wort.', richtig: false, erklaerung: '"Ketchup" ist ein englisches Wort, das ursprünglich aus dem Chinesischen stammt.' },
      { typ: 'richtig_falsch', frage: 'Das "ph" in Fremdwörtern spricht man wie "f" aus.', richtig: true, erklaerung: 'Ja! "ph" wird wie "f" gesprochen: Telefon, Alphabet, Physik.' },
      { typ: 'richtig_falsch', frage: '"Musik" kommt aus dem Englischen.', richtig: false, erklaerung: '"Musik" kommt aus dem Griechischen (mousike = Kunst der Musen).' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Ergänze das passende Fremdwort: "Ich rufe dich am ___ an."', satz: 'Ich rufe dich am ___ an.', antwort: 'Telefon', erklaerung: '"Telefon" ist ein Fremdwort aus dem Griechischen.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Wir gehen heute ins ___." (Schauspielhaus)', satz: 'Wir gehen heute ins ___.', antwort: 'Theater', erklaerung: '"Theater" ist ein Fremdwort aus dem Griechischen.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Er spielt am ___." (elektronisches Gerät)', satz: 'Er spielt am ___.', antwort: 'Computer', erklaerung: '"Computer" ist ein Fremdwort aus dem Englischen.' },

      // Satz korrigieren
      { typ: 'satz_korrigieren', frage: 'Finde das falsch geschriebene Fremdwort:', satz: 'Wir gehen ins Teater.', fehlerWort: 'Teater', korrektWort: 'Theater', erklaerung: '"Theater" wird mit "th" geschrieben (griechisches Fremdwort).' },
      { typ: 'satz_korrigieren', frage: 'Finde das falsch geschriebene Fremdwort:', satz: 'Die Akzion im Supermarkt ist super.', fehlerWort: 'Akzion', korrektWort: 'Aktion', erklaerung: '"Aktion" wird mit "kt" geschrieben (lateinisch: actio). Nicht "kz"!' },
      { typ: 'satz_korrigieren', frage: 'Finde das falsch geschriebene Fremdwort:', satz: 'Die Tellfonnummer ist falsch.', fehlerWort: 'Tellfonnummer', korrektWort: 'Telefonnummer', erklaerung: 'Es heißt "Telefon" mit "e" (nicht "Tell") – griechisch: tele = fern.' },

      // Synonym finden
      { typ: 'synonym_finden', frage: 'Welches deutsche Wort bedeutet das gleiche wie "Snack"?', wort: 'Snack', optionen: ['Mahlzeit', 'Imbiss', 'Getränk', 'Dessert'], richtig: 1, erklaerung: '"Snack" (Englisch) = "Imbiss" (Deutsch) – eine kleine Zwischenmahlzeit.' },
      { typ: 'synonym_finden', frage: 'Welches deutsche Wort bedeutet das gleiche wie "Team"?', wort: 'Team', optionen: ['Schule', 'Mannschaft', 'Familie', 'Verein'], richtig: 1, erklaerung: '"Team" (Englisch) = "Mannschaft" oder "Gruppe" (Deutsch).' },
      { typ: 'synonym_finden', frage: 'Welches deutsche Wort bedeutet das gleiche wie "fair"?', wort: 'fair', optionen: ['schnell', 'gerecht', 'lustig', 'laut'], richtig: 1, erklaerung: '"fair" (Englisch) = "gerecht" (Deutsch).' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde das Fremdwort mit seiner Herkunft:', paare: [['Pizza', 'Italienisch'], ['Computer', 'Englisch'], ['Balkon', 'Französisch']], erklaerung: 'Pizza = Italienisch, Computer = Englisch, Balkon = Französisch.' },
      { typ: 'synonym_verbinden', frage: 'Verbinde das Fremdwort mit seiner deutschen Bedeutung:', paare: [['Team', 'Mannschaft'], ['fair', 'gerecht'], ['Snack', 'Imbiss']], erklaerung: 'Team = Mannschaft, fair = gerecht, Snack = Imbiss.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche Wörter sind Fremdwörter?', optionen: ['Telefon', 'Tisch', 'Computer', 'Stuhl', 'Pizza'], richtig: [0, 2, 4], erklaerung: 'Telefon (Griechisch), Computer (Englisch) und Pizza (Italienisch) sind Fremdwörter.' },
      { typ: 'mehrfachauswahl', frage: 'Welche Fremdwörter kommen aus dem Englischen?', optionen: ['Computer', 'Pizza', 'Hobby', 'Theater', 'Smartphone'], richtig: [0, 2, 4], erklaerung: 'Computer, Hobby und Smartphone kommen aus dem Englischen.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet das Fremdwort "Projekt"?', satz: 'Wir arbeiten an einem Projekt.', optionen: ['Ein Buch', 'Ein geplantes Vorhaben', 'Ein Spiel', 'Eine Prüfung'], richtig: 1, erklaerung: '"Projekt" kommt aus dem Lateinischen und bedeutet "ein geplantes Vorhaben".' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Ordne die Fremdwörter nach ihrer Herkunftssprache (Griechisch → Lateinisch → Englisch):', teile: ['Telefon', 'Datum', 'Computer'], erklaerung: 'Telefon (Griechisch), Datum (Lateinisch), Computer (Englisch).' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Was bedeutet das Fremdwort "kreativ"?', optionen: ['langweilig', 'schöpferisch/einfallsreich', 'sportlich', 'kritisch'], richtig: 1, erklaerung: '"kreativ" kommt aus dem Lateinischen (creare = schaffen) und bedeutet "schöpferisch".' },
      { typ: 'richtig_falsch', frage: '"Computer" kommt aus dem Lateinischen.', richtig: false, erklaerung: '"Computer" kommt aus dem Englischen (to compute = berechnen). Das englische Wort hat allerdings lateinische Wurzeln (computare).' },
      { typ: 'lueckentext', frage: 'Ergänze: "Die ___ beginnt um 8 Uhr." (Unterrichtseinheit, Fremdwort)', satz: 'Die ___ beginnt um 8 Uhr.', antwort: 'Lektion', erklaerung: '"Lektion" ist ein Fremdwort aus dem Lateinischen (lectio = Lesen, Vorlesung).' },
      { typ: 'satz_korrigieren', frage: 'Finde das falsch geschriebene Fremdwort:', satz: 'Er hat ein tolles Hobbi.', fehlerWort: 'Hobbi', korrektWort: 'Hobby', erklaerung: '"Hobby" wird mit "y" am Ende geschrieben (englisches Fremdwort).' },
    ],
  },

  // ================================================================
  //  3.5 – Redewendungen
  // ================================================================
  '3-5': {
    theorie: {
      titel: 'Redewendungen und Sprichwörter',
      erklaerung: 'Redewendungen sind feste Ausdrücke mit einer übertragenen (nicht wörtlichen) Bedeutung. "Tomaten auf den Augen haben" bedeutet nicht wirklich Tomaten auf den Augen, sondern "etwas Offensichtliches nicht sehen". Sprichwörter sind kurze Weisheiten: "Übung macht den Meister" bedeutet, dass man durch Üben besser wird. Redewendungen machen die Sprache bildhaft und lebendig.',
      beispiel: '"Da <span class="highlight">steppt der Bär</span>" = Da ist viel los. "Jemandem einen <span class="highlight">Bären aufbinden</span>" = Jemanden belügen.',
      merkhilfe: 'Redewendungen darf man NICHT wörtlich nehmen! Sie haben eine übertragene Bedeutung. Am besten lernt man sie auswendig.',
    },
    fragen: [
      // Multiple Choice
      { typ: 'multiple_choice', frage: 'Was bedeutet "Tomaten auf den Augen haben"?', optionen: ['Gemüse einkaufen', 'Etwas Offensichtliches nicht sehen', 'Gut kochen können', 'Müde sein'], richtig: 1, erklaerung: '"Tomaten auf den Augen haben" = etwas Offensichtliches nicht sehen/bemerken.' },
      { typ: 'multiple_choice', frage: 'Was bedeutet "Da steppt der Bär"?', optionen: ['Ein Bär tanzt', 'Da ist viel los/Da wird gefeiert', 'Es ist gefährlich', 'Es regnet stark'], richtig: 1, erklaerung: '"Da steppt der Bär" = Da ist viel los, da wird gefeiert.' },
      { typ: 'multiple_choice', frage: 'Was bedeutet "den Nagel auf den Kopf treffen"?', optionen: ['Einen Nagel einschlagen', 'Genau das Richtige sagen', 'Sich am Kopf verletzen', 'Sehr laut sein'], richtig: 1, erklaerung: '"den Nagel auf den Kopf treffen" = genau das Richtige sagen/treffen.' },
      { typ: 'multiple_choice', frage: 'Was bedeutet "Übung macht den Meister"?', optionen: ['Man braucht keine Übung', 'Durch Üben wird man besser', 'Meister sind die Besten', 'Übungen sind langweilig'], richtig: 1, erklaerung: '"Übung macht den Meister" bedeutet, dass man durch viel Üben besser wird.' },
      { typ: 'multiple_choice', frage: 'Was bedeutet "jemandem einen Bären aufbinden"?', optionen: ['Jemandem ein Tier schenken', 'Jemanden belügen/anlügen', 'Jemandem helfen', 'Jemanden umarmen'], richtig: 1, erklaerung: '"Jemandem einen Bären aufbinden" = jemanden belügen, eine Lügengeschichte erzählen.' },
      { typ: 'multiple_choice', frage: 'Was bedeutet "die Daumen drücken"?', optionen: ['Die Hände waschen', 'Jemandem Glück wünschen', 'Wütend sein', 'Etwas festhalten'], richtig: 1, erklaerung: '"Die Daumen drücken" = jemandem Glück wünschen, hoffen, dass etwas klappt.' },
      { typ: 'multiple_choice', frage: 'Was bedeutet "ins Fettnäpfchen treten"?', optionen: ['In Fett treten', 'Etwas Peinliches/Unpassendes sagen', 'Gut kochen', 'Stolpern'], richtig: 1, erklaerung: '"Ins Fettnäpfchen treten" = etwas Peinliches oder Unpassendes sagen/tun.' },

      // Richtig/Falsch
      { typ: 'richtig_falsch', frage: '"Redewendungen darf man wörtlich nehmen."', richtig: false, erklaerung: 'Nein! Redewendungen haben eine übertragene Bedeutung und dürfen NICHT wörtlich verstanden werden.' },
      { typ: 'richtig_falsch', frage: '"Übung macht den Meister" ist ein Sprichwort.', richtig: true, erklaerung: 'Ja! Es ist ein Sprichwort – eine kurze Lebensweisheit.' },
      { typ: 'richtig_falsch', frage: '"Ich habe Hunger" ist eine Redewendung.', richtig: false, erklaerung: '"Ich habe Hunger" ist eine normale Aussage, keine Redewendung. Es wird wörtlich gemeint.' },
      { typ: 'richtig_falsch', frage: '"Unter einer Decke stecken" bedeutet, dass man zusammenarbeitet (oft heimlich).', richtig: true, erklaerung: 'Ja! "Unter einer Decke stecken" = heimlich zusammenarbeiten, gemeinsame Sache machen.' },

      // Lückentext
      { typ: 'lueckentext', frage: 'Ergänze die Redewendung: "Da beißt die ___ keinen Faden ab."', satz: 'Da beißt die ___ keinen Faden ab.', antwort: 'Maus', erklaerung: '"Da beißt die Maus keinen Faden ab" = Daran lässt sich nichts ändern.' },
      { typ: 'lueckentext', frage: 'Ergänze die Redewendung: "Wer zuletzt lacht, lacht am ___."', satz: 'Wer zuletzt lacht, lacht am ___.', antwort: 'besten', erklaerung: '"Wer zuletzt lacht, lacht am besten" = Der wahre Gewinner zeigt sich erst am Ende.' },
      { typ: 'lueckentext', frage: 'Ergänze die Redewendung: "Er hat ein Brett vor dem ___."', satz: 'Er hat ein Brett vor dem ___.', antwort: 'Kopf', erklaerung: '"Ein Brett vor dem Kopf haben" = etwas Offensichtliches nicht verstehen.' },
      { typ: 'lueckentext', frage: 'Ergänze die Redewendung: "Morgenstund hat ___ im Mund."', satz: 'Morgenstund hat ___ im Mund.', antwort: 'Gold', erklaerung: '"Morgenstund hat Gold im Mund" = Frühes Aufstehen lohnt sich.' },

      // Synonym finden (hier: Bedeutung finden)
      { typ: 'synonym_finden', frage: 'Was bedeutet "Schwein haben"?', wort: 'Schwein haben', optionen: ['Ein Schwein besitzen', 'Glück haben', 'Schmutzig sein', 'Hunger haben'], richtig: 1, erklaerung: '"Schwein haben" = Glück haben (umgangssprachliche Redewendung).' },
      { typ: 'synonym_finden', frage: 'Was bedeutet "auf dem Holzweg sein"?', wort: 'auf dem Holzweg sein', optionen: ['Im Wald spazieren', 'Sich irren', 'Holz sammeln', 'Verloren sein'], richtig: 1, erklaerung: '"Auf dem Holzweg sein" = sich irren, falsch liegen.' },
      { typ: 'synonym_finden', frage: 'Was bedeutet "die Katze im Sack kaufen"?', wort: 'die Katze im Sack kaufen', optionen: ['Eine Katze adoptieren', 'Etwas kaufen, ohne es zu prüfen', 'Im Geschäft einkaufen', 'Ein Haustier kaufen'], richtig: 1, erklaerung: '"Die Katze im Sack kaufen" = etwas kaufen/annehmen, ohne es vorher geprüft zu haben.' },

      // Synonym verbinden
      { typ: 'synonym_verbinden', frage: 'Verbinde die Redewendung mit ihrer Bedeutung:', paare: [['Tomaten auf den Augen haben', 'etwas nicht sehen'], ['Daumen drücken', 'Glück wünschen'], ['ins Fettnäpfchen treten', 'etwas Peinliches sagen']], erklaerung: 'Jede Redewendung hat eine feste übertragene Bedeutung.' },
      { typ: 'synonym_verbinden', frage: 'Verbinde die Redewendung mit ihrer Bedeutung:', paare: [['Schwein haben', 'Glück haben'], ['den Nagel auf den Kopf treffen', 'genau richtig liegen'], ['auf dem Holzweg sein', 'sich irren']], erklaerung: 'Redewendungen haben eine bildhafte, übertragene Bedeutung.' },

      // Mehrfachauswahl
      { typ: 'mehrfachauswahl', frage: 'Welche sind echte Redewendungen?', optionen: ['den Nagel auf den Kopf treffen', 'nach Hause gehen', 'ins Fettnäpfchen treten', 'ein Buch lesen', 'die Katze im Sack kaufen'], richtig: [0, 2, 4], erklaerung: 'Nagel auf den Kopf treffen, ins Fettnäpfchen treten und Katze im Sack kaufen sind Redewendungen.' },

      // Reihenfolge
      { typ: 'reihenfolge', frage: 'Bringe die Redewendung in die richtige Reihenfolge:', teile: ['Wer', 'zuletzt', 'lacht,', 'lacht', 'am', 'besten.'], erklaerung: '"Wer zuletzt lacht, lacht am besten." – ein bekanntes deutsches Sprichwort.' },

      // Homonym
      { typ: 'homonym_bedeutung', frage: 'Was bedeutet "Bär" in "jemandem einen Bären aufbinden"?', satz: 'Er hat mir einen Bären aufgebunden.', optionen: ['Ein echtes Tier', 'Eine Lüge/erfundene Geschichte', 'Ein Kuscheltier', 'Ein schweres Gewicht'], richtig: 1, erklaerung: 'In dieser Redewendung bedeutet "Bär" eine erfundene Geschichte/Lüge.' },

      // Zusätzliche Fragen
      { typ: 'multiple_choice', frage: 'Was bedeutet "alle Hände voll zu tun haben"?', optionen: ['Die Hände schmutzig haben', 'Sehr beschäftigt sein', 'Viele Sachen tragen', 'Nicht arbeiten wollen'], richtig: 1, erklaerung: '"Alle Hände voll zu tun haben" = sehr beschäftigt sein, viel Arbeit haben.' },
      { typ: 'richtig_falsch', frage: '"Jemandem die Daumen drücken" bedeutet, jemanden zu verletzen.', richtig: false, erklaerung: 'Nein! "Die Daumen drücken" bedeutet, jemandem Glück wünschen.' },
      { typ: 'lueckentext', frage: 'Ergänze: "Aller Anfang ist ___."', satz: 'Aller Anfang ist ___.', antwort: 'schwer', erklaerung: '"Aller Anfang ist schwer" = Am Anfang ist alles besonders schwierig.' },
      { typ: 'multiple_choice', frage: 'Was bedeutet "jemandem auf den Zahn fühlen"?', optionen: ['Zum Zahnarzt gehen', 'Jemanden genau befragen/prüfen', 'Zahnschmerzen haben', 'Jemanden ärgern'], richtig: 1, erklaerung: '"Jemandem auf den Zahn fühlen" = jemanden genau befragen oder prüfen.' },
      { typ: 'synonym_finden', frage: 'Was bedeutet "kein Blatt vor den Mund nehmen"?', wort: 'kein Blatt vor den Mund nehmen', optionen: ['Leise sprechen', 'Offen und ehrlich sprechen', 'Nichts essen', 'Im Garten arbeiten'], richtig: 1, erklaerung: '"Kein Blatt vor den Mund nehmen" = offen und direkt sagen, was man denkt.' },
      { typ: 'richtig_falsch', frage: '"Den Kopf in den Sand stecken" bedeutet, ein Problem zu ignorieren.', richtig: true, erklaerung: 'Ja! "Den Kopf in den Sand stecken" = ein Problem ignorieren, so tun, als gäbe es kein Problem.' },
      { typ: 'multiple_choice', frage: 'Was bedeutet "zwei linke Hände haben"?', optionen: ['Linkshänder sein', 'Sehr ungeschickt sein', 'Zwei Hände benutzen', 'Gut basteln können'], richtig: 1, erklaerung: '"Zwei linke Hände haben" = sehr ungeschickt sein bei handwerklichen Dingen.' },
    ],
  },
};
