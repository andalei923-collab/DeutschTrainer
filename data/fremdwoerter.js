// ============================================================
//  data/fremdwoerter.js – Fremdwörterdatenbank
//  Deutsch Trainer | Klasse 3–5 / PSA
//  60 Fremdwörter aufgeteilt nach Schwierigkeit und Herkunft
// ============================================================

const FREMDWOERTER = {

  // ──────────────────────────────────────────────────────────
  //  KLASSE 3 – Häufige Alltagsfremdwörter
  //  Zielgruppe: 12–13 Jahre
  //  Themen: Alltag, Technik, Kultur, Schule
  // ──────────────────────────────────────────────────────────
  klasse3: [
    {
      wort:        'Telefon',
      bedeutung:   'Gerät zur Übertragung von Sprache über Leitungen oder Funk',
      beispielsatz:'Kannst du mir kurz dein Telefon leihen?',
      herkunft:    'Griechisch: tele (fern) + phone (Stimme)',
    },
    {
      wort:        'Computer',
      bedeutung:   'Elektronische Rechenmaschine zur Datenverarbeitung',
      beispielsatz:'Für das Referat brauchen wir den Computer in der Bibliothek.',
      herkunft:    'Englisch: to compute (berechnen)',
    },
    {
      wort:        'Musik',
      bedeutung:   'Kunst, die Töne und Klänge zu einem Werk verbindet',
      beispielsatz:'Die Musik im Kino war so laut, dass man kaum sprechen konnte.',
      herkunft:    'Griechisch: musiké (Kunst der Musen)',
    },
    {
      wort:        'Pizza',
      bedeutung:   'Flaches Hefeteiggebäck mit Belag, ursprünglich aus Italien',
      beispielsatz:'Am Freitagabend bestellen wir immer Pizza.',
      herkunft:    'Italienisch: pizza (Fladen)',
    },
    {
      wort:        'Sport',
      bedeutung:   'Körperliche Betätigung und Wettkampf nach Regeln',
      beispielsatz:'Sport ist wichtig für die Gesundheit und das Wohlbefinden.',
      herkunft:    'Englisch: sport (Zeitvertreib, Vergnügen)',
    },
    {
      wort:        'Stress',
      bedeutung:   'Zustand körperlicher und geistiger Anspannung und Überlastung',
      beispielsatz:'Vor der Schularbeit hatte sie großen Stress.',
      herkunft:    'Englisch: stress (Druck, Anspannung)',
    },
    {
      wort:        'Internet',
      bedeutung:   'Weltweites Netzwerk miteinander verbundener Computer',
      beispielsatz:'Ohne Internet kann ich meine Hausaufgaben nicht recherchieren.',
      herkunft:    'Englisch: inter (zwischen) + net (Netz)',
    },
    {
      wort:        'Theater',
      bedeutung:   'Gebäude oder Einrichtung für Bühnenaufführungen',
      beispielsatz:'Die Schulklasse besuchte das Theater in der Innenstadt.',
      herkunft:    'Griechisch: theatron (Schauplatz, Zuschauerstätte)',
    },
    {
      wort:        'Foto',
      bedeutung:   'Mit einer Kamera aufgenommenes Bild',
      beispielsatz:'Ich habe auf dem Ausflug viele Fotos gemacht.',
      herkunft:    'Griechisch: photos (Licht) – Kurzform von Photographie',
    },
    {
      wort:        'Restaurant',
      bedeutung:   'Gaststätte, in der Speisen und Getränke serviert werden',
      beispielsatz:'Am Geburtstag geht die Familie in ein Restaurant essen.',
      herkunft:    'Französisch: restaurer (wiederherstellen, stärken)',
    },
    {
      wort:        'Energie',
      bedeutung:   'Kraft und Antrieb; physikalische Größe für Arbeit',
      beispielsatz:'Solaranlagen wandeln Sonnenenergie in Strom um.',
      herkunft:    'Griechisch: energeia (Wirksamkeit, Tätigkeit)',
    },
    {
      wort:        'Hobby',
      bedeutung:   'Freizeitbeschäftigung, die man zum Vergnügen betreibt',
      beispielsatz:'Mein Hobby ist das Lesen und Fotografieren.',
      herkunft:    'Englisch: hobby (Steckenpferd, Lieblingstätigkeit)',
    },
    {
      wort:        'Rhythmus',
      bedeutung:   'Regelmäßige Abfolge von betonten und unbetonten Elementen',
      beispielsatz:'Der Rhythmus des Liedes machte es unmöglich, nicht mitzuwippen.',
      herkunft:    'Griechisch: rhythmos (gleichmäßige Bewegung)',
    },
    {
      wort:        'Balkon',
      bedeutung:   'Vorspringender offener Anbau an einem Gebäude',
      beispielsatz:'Im Sommer frühstücken wir auf dem Balkon.',
      herkunft:    'Italienisch/Türkisch: balkon/balkhane (Söller)',
    },
    {
      wort:        'Chaos',
      bedeutung:   'Vollständige Unordnung und Durcheinander',
      beispielsatz:'Nach dem Umzug herrschte in der Wohnung totales Chaos.',
      herkunft:    'Griechisch: chaos (Leere, Unordnung)',
    },
    {
      wort:        'Niveau',
      bedeutung:   'Stand oder Grad der Qualität; Höhenlinie',
      beispielsatz:'Das Niveau des Unterrichts war sehr hoch.',
      herkunft:    'Französisch: niveau (Wasserwaage, Höhe)',
    },
    {
      wort:        'Chance',
      bedeutung:   'Günstige Gelegenheit oder Möglichkeit',
      beispielsatz:'Diese Prüfung ist deine Chance, dich zu verbessern.',
      herkunft:    'Französisch: chance (Glücksfall, Zufall)',
    },
    {
      wort:        'Routine',
      bedeutung:   'Durch Übung erworbene Fertigkeit; gewohnheitsmäßiger Ablauf',
      beispielsatz:'Mit der Zeit wird das Lernen zur täglichen Routine.',
      herkunft:    'Französisch: route (Weg) – regelmäßiger Weg',
    },
    {
      wort:        'Talent',
      bedeutung:   'Natürliche Begabung oder Fähigkeit für etwas',
      beispielsatz:'Sie hat großes Talent für Sprachen und Musik.',
      herkunft:    'Griechisch: talanton (Gewicht, Waagschale) → Begabung',
    },
    {
      wort:        'Nummer',
      bedeutung:   'Ziffer oder Zahl zur Kennzeichnung; Einzelstück einer Serie',
      beispielsatz:'Die Telefonnummer meiner Schule lautet 0512-123456.',
      herkunft:    'Lateinisch: numerus (Zahl)',
    },
  ],

  // ──────────────────────────────────────────────────────────
  //  KLASSE 4 – Fremdwörter aus Latein, Griechisch, Englisch
  //  Zielgruppe: 13–14 Jahre
  //  Fokus: Wortwurzeln erkennen und Bedeutung erschließen
  // ──────────────────────────────────────────────────────────
  klasse4: [
    {
      wort:        'Aquarium',
      bedeutung:   'Behälter mit Wasser für Fische und Wasserpflanzen; Schauanlage',
      beispielsatz:'Im Aquarium schwimmen bunte Tropenfische.',
      herkunft:    'Lateinisch: aqua (Wasser) + -arium (Behälter)',
    },
    {
      wort:        'Terrarium',
      bedeutung:   'Behälter zur Haltung von Reptilien oder Landtieren',
      beispielsatz:'In seinem Terrarium lebt eine Bartagame.',
      herkunft:    'Lateinisch: terra (Erde) + -arium (Behälter)',
    },
    {
      wort:        'Biographie',
      bedeutung:   'Beschreibung des Lebens einer Person',
      beispielsatz:'Er las die Biographie des berühmten Forschers in zwei Tagen.',
      herkunft:    'Griechisch: bios (Leben) + graphein (schreiben)',
    },
    {
      wort:        'Geographie',
      bedeutung:   'Wissenschaft von der Erdoberfläche, Ländern und Landschaften',
      beispielsatz:'Im Geographieunterricht lernten wir die Kontinente kennen.',
      herkunft:    'Griechisch: ge (Erde) + graphein (beschreiben)',
    },
    {
      wort:        'Demokratie',
      bedeutung:   'Staatsform, in der das Volk die politische Macht ausübt',
      beispielsatz:'Österreich ist eine parlamentarische Demokratie.',
      herkunft:    'Griechisch: demos (Volk) + kratos (Herrschaft)',
    },
    {
      wort:        'Mikroskop',
      bedeutung:   'Optisches Gerät zur starken Vergrößerung kleiner Objekte',
      beispielsatz:'Unter dem Mikroskop erkannte man die Zellstruktur.',
      herkunft:    'Griechisch: mikros (klein) + skopein (schauen)',
    },
    {
      wort:        'Teleskop',
      bedeutung:   'Optisches Gerät zur Beobachtung weit entfernter Objekte',
      beispielsatz:'Mit dem Teleskop konnte man die Jupitermonde sehen.',
      herkunft:    'Griechisch: tele (fern) + skopein (schauen)',
    },
    {
      wort:        'Philosophie',
      bedeutung:   'Wissenschaft von den Grundfragen des Seins und Denkens',
      beispielsatz:'Die Philosophie fragt nach dem Sinn des Lebens.',
      herkunft:    'Griechisch: philos (Freund) + sophia (Weisheit)',
    },
    {
      wort:        'Thermometer',
      bedeutung:   'Gerät zur Messung der Temperatur',
      beispielsatz:'Das Thermometer zeigte heute 30 Grad Celsius.',
      herkunft:    'Griechisch: thermos (warm) + metron (Maß)',
    },
    {
      wort:        'Importieren',
      bedeutung:   'Waren oder Daten aus dem Ausland einführen',
      beispielsatz:'Österreich importiert viel Erdöl aus dem Ausland.',
      herkunft:    'Lateinisch: importare – in (hinein) + portare (tragen)',
    },
    {
      wort:        'Exportieren',
      bedeutung:   'Waren in das Ausland ausführen',
      beispielsatz:'Österreich exportiert viele Maschinen und Fahrzeuge.',
      herkunft:    'Lateinisch: exportare – ex (heraus) + portare (tragen)',
    },
    {
      wort:        'Phonetik',
      bedeutung:   'Wissenschaft von den Lauten und der Aussprache einer Sprache',
      beispielsatz:'In der Phonetik lernt man, wie Laute gebildet werden.',
      herkunft:    'Griechisch: phone (Stimme, Laut)',
    },
    {
      wort:        'Reaktion',
      bedeutung:   'Antwort auf einen Reiz; chemischer Vorgang',
      beispielsatz:'Die Reaktion des Lehrers auf den Fehler überraschte alle.',
      herkunft:    'Lateinisch: re (zurück) + agere (handeln)',
    },
    {
      wort:        'Produktion',
      bedeutung:   'Herstellung von Waren oder Gütern',
      beispielsatz:'Die Produktion des neuen Modells begann im Sommer.',
      herkunft:    'Lateinisch: pro (vor) + ducere (führen)',
    },
    {
      wort:        'Toleranz',
      bedeutung:   'Duldsamkeit gegenüber anderen Meinungen und Lebensweisen',
      beispielsatz:'Toleranz ist eine wichtige Voraussetzung für das Zusammenleben.',
      herkunft:    'Lateinisch: tolerare (dulden, ertragen)',
    },
    {
      wort:        'Download',
      bedeutung:   'Herunterladen von Daten aus dem Internet auf ein Gerät',
      beispielsatz:'Der Download der Datei dauerte wegen der langsamen Verbindung lange.',
      herkunft:    'Englisch: down (hinunter) + load (laden)',
    },
    {
      wort:        'Update',
      bedeutung:   'Aktualisierung eines Programms oder Systems',
      beispielsatz:'Nach dem Update funktionierte die App wieder einwandfrei.',
      herkunft:    'Englisch: up (hinauf) + date (Datum) → auf neuesten Stand bringen',
    },
    {
      wort:        'Kommunikation',
      bedeutung:   'Austausch von Informationen und Verständigung zwischen Personen',
      beispielsatz:'Gute Kommunikation ist der Schlüssel für erfolgreiche Teamarbeit.',
      herkunft:    'Lateinisch: communicare (mitteilen, teilen)',
    },
    {
      wort:        'Vegetation',
      bedeutung:   'Gesamtheit der Pflanzen in einem Gebiet',
      beispielsatz:'Die tropische Vegetation des Regenwalds ist unglaublich vielfältig.',
      herkunft:    'Lateinisch: vegetare (beleben, wachsen)',
    },
    {
      wort:        'Demokratisierung',
      bedeutung:   'Prozess der Einführung oder Ausweitung demokratischer Strukturen',
      beispielsatz:'Die Demokratisierung des Landes dauerte mehrere Jahrzehnte.',
      herkunft:    'Griechisch: demos + kratos + Suffix -isierung (Prozess)',
    },
  ],

  // ──────────────────────────────────────────────────────────
  //  KLASSE 5 – Akademischer Wortschatz
  //  Zielgruppe: PSA / 9. Schuljahr
  //  Fokus: Argumentieren, Schreiben, Prüfungsvorbereitung
  // ──────────────────────────────────────────────────────────
  klasse5: [
    {
      wort:        'Analyse',
      bedeutung:   'Genaue Untersuchung und Zerlegung eines Gegenstands oder Problems',
      beispielsatz:'Die Analyse des Textes zeigt, dass der Autor eine kritische Haltung einnimmt.',
      herkunft:    'Griechisch: analyein (auflösen, zerlegen)',
    },
    {
      wort:        'Struktur',
      bedeutung:   'Aufbau, Gliederung und innere Ordnung von etwas',
      beispielsatz:'Der Aufsatz braucht eine klare Struktur mit Einleitung, Hauptteil und Schluss.',
      herkunft:    'Lateinisch: structura (Aufbau, Anordnung)',
    },
    {
      wort:        'Funktion',
      bedeutung:   'Zweck, Aufgabe oder Wirkungsweise von etwas',
      beispielsatz:'Die Funktion der Leber ist es, das Blut zu reinigen.',
      herkunft:    'Lateinisch: functio (Verrichtung, Ausführung)',
    },
    {
      wort:        'These',
      bedeutung:   'Behauptung oder Standpunkt, der begründet und verteidigt wird',
      beispielsatz:'Meine These lautet: Smartphones beeinflussen das Lernverhalten negativ.',
      herkunft:    'Griechisch: thesis (Aufstellung, Behauptung)',
    },
    {
      wort:        'Argument',
      bedeutung:   'Begründung oder Beweis zur Unterstützung einer These',
      beispielsatz:'Das stärkste Argument für die These liefert die Studie aus dem Jahr 2020.',
      herkunft:    'Lateinisch: argumentum (Beweis, Beweismittel)',
    },
    {
      wort:        'Konklusion',
      bedeutung:   'Schlussfolgerung, die sich aus den Argumenten ergibt',
      beispielsatz:'Als Konklusion lässt sich festhalten, dass weitere Maßnahmen nötig sind.',
      herkunft:    'Lateinisch: conclusio (Schluss, Abschluss)',
    },
    {
      wort:        'Perspektive',
      bedeutung:   'Blickwinkel, Sichtweise; Aussicht auf zukünftige Entwicklung',
      beispielsatz:'Der Autor beschreibt das Thema aus einer neuen Perspektive.',
      herkunft:    'Lateinisch: perspicere (hindurchblicken, klar sehen)',
    },
    {
      wort:        'Relevanz',
      bedeutung:   'Bedeutsamkeit, Wichtigkeit für einen bestimmten Kontext',
      beispielsatz:'Die Relevanz dieser Studie für die Praxis wird im Fazit erläutert.',
      herkunft:    'Lateinisch: relevare (aufheben, erleichtern)',
    },
    {
      wort:        'Kontext',
      bedeutung:   'Zusammenhang, in dem etwas steht oder gesagt wird',
      beispielsatz:'Man muss ein Zitat immer im Kontext lesen, nicht isoliert.',
      herkunft:    'Lateinisch: contextus (Zusammenhang, Verbindung)',
    },
    {
      wort:        'Aspekt',
      bedeutung:   'Gesichtspunkt oder Teilbereich, unter dem man etwas betrachtet',
      beispielsatz:'Ein wichtiger Aspekt dieser Frage ist die wirtschaftliche Dimension.',
      herkunft:    'Lateinisch: aspectus (Anblick, Gesichtspunkt)',
    },
    {
      wort:        'Resümee',
      bedeutung:   'Kurze Zusammenfassung des Wesentlichen am Ende eines Textes',
      beispielsatz:'Als Resümee kann man sagen, dass das Projekt erfolgreich war.',
      herkunft:    'Französisch: résumer (zusammenfassen)',
    },
    {
      wort:        'Hypothese',
      bedeutung:   'Annahme oder Vermutung, die noch bewiesen werden muss',
      beispielsatz:'Die Hypothese des Wissenschaftlers wurde durch das Experiment bestätigt.',
      herkunft:    'Griechisch: hypothesis (Unterstellung, Grundlage)',
    },
    {
      wort:        'Prozess',
      bedeutung:   'Ablauf, Vorgang oder Entwicklung über eine Zeit',
      beispielsatz:'Der Lernprozess braucht Zeit, Geduld und regelmäßiges Üben.',
      herkunft:    'Lateinisch: processus (Fortgang, Verlauf)',
    },
    {
      wort:        'Explizit',
      bedeutung:   'Ausdrücklich, direkt und deutlich gesagt oder formuliert',
      beispielsatz:'Der Autor erklärt explizit, was er unter Freiheit versteht.',
      herkunft:    'Lateinisch: explicitus (entfaltet, klar dargelegt)',
    },
    {
      wort:        'Implizit',
      bedeutung:   'Unausgesprochen, mitgemeint, ohne es direkt zu sagen',
      beispielsatz:'Der Text enthält eine implizite Kritik am bestehenden System.',
      herkunft:    'Lateinisch: implicitus (eingewickelt, verborgen)',
    },
    {
      wort:        'Komplex',
      bedeutung:   'Vielschichtig, aus vielen Teilen bestehend, schwer zu durchschauen',
      beispielsatz:'Die Ursachen des Klimawandels sind komplex und vielschichtig.',
      herkunft:    'Lateinisch: complexus (umfasst, verflochten)',
    },
    {
      wort:        'Fundamental',
      bedeutung:   'Grundlegend, wesentlich, das Fundament bildend',
      beispielsatz:'Das ist ein fundamentaler Fehler im Aufbau der Argumentation.',
      herkunft:    'Lateinisch: fundamentum (Grundlage, Fundament)',
    },
    {
      wort:        'Objektiv',
      bedeutung:   'Sachlich, unparteiisch, nicht von persönlichen Gefühlen beeinflusst',
      beispielsatz:'Ein Zeitungsartikel sollte objektiv und ohne Wertung geschrieben sein.',
      herkunft:    'Lateinisch: obiectum (das Gegenübergestellte, der Gegenstand)',
    },
    {
      wort:        'Subjektiv',
      bedeutung:   'Persönlich, von eigenen Gefühlen und Meinungen beeinflusst',
      beispielsatz:'Ein Kommentar darf subjektiv sein und die persönliche Meinung zeigen.',
      herkunft:    'Lateinisch: subiectum (das Zugrundeliegende, das Ich)',
    },
    {
      wort:        'Evaluierung',
      bedeutung:   'Bewertung und Beurteilung anhand von festgelegten Kriterien',
      beispielsatz:'Nach dem Projekt folgte eine Evaluierung der Ergebnisse.',
      herkunft:    'Lateinisch: evaluare (den Wert bestimmen)',
    },
  ],
};


// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FREMDWOERTER;
}
