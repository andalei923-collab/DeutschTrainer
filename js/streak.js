// ============================================================
//  streak.js – Streak-System (Lerntage in Folge)
//  Deutsch Trainer
//  Abhängigkeit: storage.js muss vorher geladen sein
// ============================================================

// ── Hilfsfunktionen für Datum ─────────────────────────────

/**
 * Gibt das heutige Datum als "YYYY-MM-DD"-String zurück.
 * @returns {string}
 */
function _heute() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Gibt das gestrige Datum als "YYYY-MM-DD"-String zurück.
 * @returns {string}
 */
function _gestern() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

/**
 * Vergleicht zwei Datumsstrings ("YYYY-MM-DD") und gibt die
 * Differenz in ganzen Tagen zurück (positiv = datum2 liegt später).
 *
 * @param {string|null} datum1
 * @param {string|null} datum2
 * @returns {number} Tage-Differenz (NaN wenn ein Datum null/ungültig)
 */
function _tageDifferenz(datum1, datum2) {
  if (!datum1 || !datum2) return NaN;
  const ms = new Date(datum2) - new Date(datum1);
  return Math.round(ms / 86_400_000); // 1000 * 60 * 60 * 24
}

// ============================================================
//  Kern-Funktionen
// ============================================================

/**
 * Prüft, ob heute bereits eine Runde gespielt wurde.
 * ("gespielt" = lastLogin ist heute UND Streak wurde heute schon erhöht)
 *
 * @returns {boolean} true = heute schon gespielt
 */
function streakPruefen() {
  const spieler = spielerLaden();
  return spieler.lastLogin === _heute();
}

/**
 * Aktualisiert den Streak nach Abschluss einer Runde.
 *
 * Regeln:
 *  - lastLogin === heute      → nichts tun (mehrfaches Spielen zählt nicht extra)
 *  - lastLogin === gestern    → Streak + 1 (Folgetag)
 *  - lastLogin < gestern/null → Streak zurück auf 1 (Tag übersprungen)
 *
 * Speichert: streak, streakRecord, lastLogin
 *
 * @returns {{
 *   streakVorher:  number,
 *   streakNachher: number,
 *   rekord:        number,
 *   neuerRekord:   boolean,
 *   bereitsGespielt: boolean
 * }}
 */
function streakAktualisieren() {
  const spieler     = spielerLaden();
  const heute       = _heute();
  const letzterTag  = spieler.lastLogin ?? null;

  // Heute schon gespielt → kein doppeltes Zählen
  if (letzterTag === heute) {
    return {
      streakVorher:    spieler.streak,
      streakNachher:   spieler.streak,
      rekord:          spieler.streakRecord,
      neuerRekord:     false,
      bereitsGespielt: true,
    };
  }

  const streakVorher = spieler.streak;
  let   streakNachher;

  const diff = _tageDifferenz(letzterTag, heute);  // 1 = Folgetag, >1 = Lücke, NaN = erster Login

  if (diff === 1) {
    // Folgetag → Streak erhöhen
    streakNachher = streakVorher + 1;
  } else {
    // Erster Login überhaupt (diff=NaN) oder Tag übersprungen (diff>1) → Reset
    streakNachher = 1;
  }

  const neuerRekord = streakNachher > spieler.streakRecord;
  const rekord      = neuerRekord ? streakNachher : spieler.streakRecord;

  spielerSpeichern({
    streak:       streakNachher,
    streakRecord: rekord,
    lastLogin:    heute,
  });

  console.info(
    `[streak] ${streakVorher} → ${streakNachher}` +
    (neuerRekord ? ' 🏆 Neuer Rekord!' : '')
  );

  return {
    streakVorher,
    streakNachher,
    rekord,
    neuerRekord,
    bereitsGespielt: false,
  };
}

/**
 * Gibt den aktuellen Streak und den Rekord zurück.
 * Rein lesend – ändert nichts.
 *
 * @returns {{
 *   streak:       number,
 *   streakRecord: number,
 *   lastLogin:    string|null,
 *   heuteGespielt: boolean
 * }}
 */
function streakAnzeigen() {
  const spieler = spielerLaden();
  return {
    streak:        spieler.streak,
    streakRecord:  spieler.streakRecord,
    lastLogin:     spieler.lastLogin ?? null,
    heuteGespielt: spieler.lastLogin === _heute(),
  };
}

/**
 * Gibt true zurück, wenn heute noch NICHT gespielt wurde.
 * Wird genutzt, um dem Avatar eine „traurige" Emotion zu zeigen
 * und den Spieler ans Lernen zu erinnern.
 *
 * @returns {boolean} true = Streak in Gefahr (noch nicht gespielt heute)
 */
function streakVerlustWarnung() {
  const spieler  = spielerLaden();
  const gestern  = _gestern();
  const letzter  = spieler.lastLogin ?? null;

  // Noch nie gespielt → keine Warnung (kein Streak zu verlieren)
  if (!letzter) return false;

  // Heute schon gespielt → alles gut
  if (letzter === _heute()) return false;

  // Gestern gespielt, aber heute noch nicht → Streak in Gefahr
  if (letzter === gestern) return true;

  // Noch länger nicht gespielt → Streak bereits weg (kein weiterer Verlust)
  return false;
}

// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    streakPruefen,
    streakAktualisieren,
    streakAnzeigen,
    streakVerlustWarnung,
  };
}
