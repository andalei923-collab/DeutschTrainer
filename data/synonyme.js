// ============================================================
//  data/synonyme.js – Synonymdatenbank
//  Deutsch Trainer | Alle Klassen
//  30+ Synonymgruppen, aufgeteilt nach Schwierigkeit
// ============================================================

const SYNONYME = {

  // ──────────────────────────────────────────────────────────
  //  LEICHT – Klasse 1–2 (einfache, bekannte Wörter)
  // ──────────────────────────────────────────────────────────
  leicht: [
    {
      wort:     'groß',
      synonyme: ['riesig', 'gewaltig', 'gigantisch', 'enorm'],
      hinweis:  'Alle beschreiben etwas, das viel Platz einnimmt oder beeindruckend wirkt.',
    },
    {
      wort:     'klein',
      synonyme: ['winzig', 'zierlich', 'mini', 'kaum sichtbar'],
      hinweis:  'Alle beschreiben etwas mit geringer Größe.',
    },
    {
      wort:     'schön',
      synonyme: ['hübsch', 'wunderschön', 'prächtig', 'ansehnlich'],
      hinweis:  'Alle drücken ein positives Aussehen oder eine angenehme Wirkung aus.',
    },
    {
      wort:     'schnell',
      synonyme: ['flink', 'rasch', 'hurtig', 'flott'],
      hinweis:  'Alle beschreiben eine hohe Geschwindigkeit oder Agilität.',
    },
    {
      wort:     'traurig',
      synonyme: ['betrübt', 'niedergeschlagen', 'unglücklich', 'wehmütig'],
      hinweis:  'Alle drücken ein negatives Gefühl der Traurigkeit aus.',
    },
    {
      wort:     'froh',
      synonyme: ['glücklich', 'fröhlich', 'heiter', 'vergnügt'],
      hinweis:  'Alle beschreiben eine positive, freudige Stimmung.',
    },
    {
      wort:     'laut',
      synonyme: ['lärmend', 'dröhnend', 'gellend', 'ohrenbetäubend'],
      hinweis:  'Alle beschreiben einen hohen Geräuschpegel.',
    },
    {
      wort:     'alt',
      synonyme: ['betagt', 'bejahrt', 'uralt', 'greisenhaft'],
      hinweis:  'Alle beschreiben ein hohes Alter – von Menschen oder Dingen.',
    },
    {
      wort:     'kalt',
      synonyme: ['frostig', 'eisig', 'frierend', 'winterlich'],
      hinweis:  'Alle drücken eine niedrige Temperatur aus.',
    },
    {
      wort:     'gehen',
      synonyme: ['schlendern', 'spazieren', 'wandern', 'trotten'],
      hinweis:  'Alle beschreiben eine Form der Fortbewegung zu Fuß.',
    },
    {
      wort:     'sprechen',
      synonyme: ['reden', 'sagen', 'erzählen', 'plaudern'],
      hinweis:  'Alle beschreiben sprachliche Kommunikation – unterschiedlich in Stil und Intensität.',
    },
    {
      wort:     'sehen',
      synonyme: ['blicken', 'schauen', 'anschauen', 'erblicken'],
      hinweis:  'Alle beschreiben den Sehvorgang – in verschiedenen Nuancen.',
    },
  ],

  // ──────────────────────────────────────────────────────────
  //  MITTEL – Klasse 3–4 (etwas anspruchsvoller)
  // ──────────────────────────────────────────────────────────
  mittel: [
    {
      wort:     'gefährlich',
      synonyme: ['riskant', 'heikel', 'bedrohlich', 'brenzlig'],
      hinweis:  'Alle beschreiben eine Situation mit möglichem Schaden oder Risiko.',
    },
    {
      wort:     'mutig',
      synonyme: ['tapfer', 'couragiert', 'beherzt', 'unerschrocken'],
      hinweis:  'Alle drücken Mut und Entschlossenheit aus – oft in schwierigen Situationen.',
    },
    {
      wort:     'wütend',
      synonyme: ['zornig', 'aufgebracht', 'erzürnt', 'aufbrausend'],
      hinweis:  'Alle beschreiben starken Ärger oder Zorn.',
    },
    {
      wort:     'erschöpft',
      synonyme: ['ermattet', 'abgespannt', 'ausgelaugt', 'kraftlos'],
      hinweis:  'Alle beschreiben einen Zustand extremer Müdigkeit nach Anstrengung.',
    },
    {
      wort:     'helfen',
      synonyme: ['unterstützen', 'beistehen', 'fördern', 'assistieren'],
      hinweis:  'Alle drücken aus, dass man jemandem Hilfe leistet.',
    },
    {
      wort:     'wichtig',
      synonyme: ['bedeutsam', 'wesentlich', 'maßgeblich', 'entscheidend'],
      hinweis:  'Alle drücken einen hohen Stellenwert aus.',
    },
    {
      wort:     'klug',
      synonyme: ['intelligent', 'schlau', 'weise', 'scharfsinnig'],
      hinweis:  'Alle beschreiben hohe geistige Fähigkeiten – in unterschiedlichen Nuancen.',
    },
    {
      wort:     'einfach',
      synonyme: ['leicht', 'simpel', 'unkompliziert', 'mühelos'],
      hinweis:  'Alle beschreiben etwas ohne große Schwierigkeit.',
    },
    {
      wort:     'bemerken',
      synonyme: ['wahrnehmen', 'erkennen', 'entdecken', 'feststellen'],
      hinweis:  'Alle beschreiben das bewusste Registrieren von etwas.',
    },
    {
      wort:     'kaufen',
      synonyme: ['erwerben', 'anschaffen', 'beschaffen', 'erstehen'],
      hinweis:  'Alle beschreiben den Kauf eines Gegenstands – unterschiedlich in Formalität.',
    },
    {
      wort:     'alt',
      synonyme: ['betagt', 'bejahrt', 'veraltet', 'antiquiert'],
      hinweis:  'Betagt/bejahrt für Personen, veraltet/antiquiert für Dinge.',
    },
    {
      wort:     'antworten',
      synonyme: ['erwidern', 'entgegnen', 'reagieren', 'replizieren'],
      hinweis:  'Alle beschreiben eine Reaktion auf eine Aussage oder Frage.',
    },
  ],

  // ──────────────────────────────────────────────────────────
  //  SCHWER – Klasse 5 / PSA (akademisch, gehoben)
  // ──────────────────────────────────────────────────────────
  schwer: [
    {
      wort:     'mitteilen',
      synonyme: ['informieren', 'benachrichtigen', 'verständigen', 'kommunizieren'],
      hinweis:  'Alle sind formell – ideal für Bewerbungen und offizielle Texte.',
    },
    {
      wort:     'zeigen',
      synonyme: ['belegen', 'nachweisen', 'darlegen', 'demonstrieren'],
      hinweis:  'In argumentativen Texten: belegen/nachweisen für Beweise, darlegen für Erklärungen.',
    },
    {
      wort:     'grundlegend',
      synonyme: ['fundamental', 'elementar', 'wesentlich', 'essenziell'],
      hinweis:  'Alle drücken etwas aus, das die Basis bildet oder unverzichtbar ist.',
    },
    {
      wort:     'untersuchen',
      synonyme: ['analysieren', 'prüfen', 'erforschen', 'evaluieren'],
      hinweis:  'Analysieren betont genaue Zerlegung; evaluieren die Bewertung.',
    },
    {
      wort:     'behaupten',
      synonyme: ['konstatieren', 'postulieren', 'anführen', 'vertreten'],
      hinweis:  'Konstatieren = nüchtern feststellen; postulieren = als These aufstellen.',
    },
    {
      wort:     'zustimmen',
      synonyme: ['befürworten', 'billigen', 'bejahen', 'akkordieren'],
      hinweis:  'Alle drücken Zustimmung aus – unterschiedlich in Intensität und Formalität.',
    },
    {
      wort:     'ablehnen',
      synonyme: ['verwerfen', 'zurückweisen', 'negieren', 'widersprechen'],
      hinweis:  'Alle drücken Ablehnung aus – verwerfen und zurückweisen sind stärker.',
    },
    {
      wort:     'beschreiben',
      synonyme: ['schildern', 'darlegen', 'veranschaulichen', 'charakterisieren'],
      hinweis:  'Schildern betont lebhafte Darstellung; charakterisieren die typischen Merkmale.',
    },
    {
      wort:     'zusammenfassen',
      synonyme: ['resümieren', 'rekapitulieren', 'verdichten', 'kondensieren'],
      hinweis:  'Resümieren = kurzes Fazit; rekapitulieren = nochmals durchgehen.',
    },
    {
      wort:     'überzeugen',
      synonyme: ['bekehren', 'gewinnen', 'bewegen', 'motivieren'],
      hinweis:  'Alle beschreiben das erfolgreiche Einwirken auf die Meinung oder das Handeln einer Person.',
    },
  ],
};


// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SYNONYME;
}
