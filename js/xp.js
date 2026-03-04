// ============================================================
//  xp.js – XP-System & Herzen-System
//  Deutsch Trainer
//  Abhängigkeit: storage.js muss vorher geladen sein
// ============================================================

// ── XP-Tabelle ────────────────────────────────────────────
// Index = Level, Wert = benötigte Gesamt-XP zum Erreichen
const XP_TABELLE = [
  0,     // Level 1
  200,   // Level 2
  500,   // Level 3
  1000,  // Level 4
  2000,  // Level 5
  3500,  // Level 6
  5500,  // Level 7
  8000,  // Level 8
];

const MAX_LEVEL          = XP_TABELLE.length;   // 8
const MAX_HERZEN         = 6;    // Start-Herzen pro Tag
const MAX_HERZEN_ABSOLUT = 10;   // Maximum durch Streak-Bonus

// ── XP-Konstanten pro Aktion ───────────────────────────────
const XP_AKTION = {
  RICHTIGE_ANTWORT:        10,
  RICHTIGE_ANTWORT_STREAK: 15,   // Streak-Bonus statt Basis-XP
  QUIZ_ABGESCHLOSSEN:      25,
  STUFENTEST_BESTANDEN:   100,
  DAILY_CHALLENGE:         50,
};

// ============================================================
//  XP-System
// ============================================================

/**
 * Gibt das Level zurück, das zur übergebenen Gesamt-XP-Zahl gehört.
 * Level 1–8; bei XP ≥ 8000 bleibt es Level 8 (Max-Level).
 *
 * @param {number} xp – Gesamt-XP
 * @returns {number} Level (1–8)
 */
function levelBerechnen(xp) {
  if (typeof xp !== 'number' || xp < 0) return 1;

  let level = 1;
  for (let i = 1; i < XP_TABELLE.length; i++) {
    if (xp >= XP_TABELLE[i]) {
      level = i + 1;
    } else {
      break;
    }
  }
  return level;
}

/**
 * Gibt die Gesamt-XP zurück, die für das nächste Level benötigt werden.
 * Auf Max-Level (8) wird die Schwelle des aktuellen Levels zurückgegeben.
 *
 * @param {number} level – aktuelles Level (1–8)
 * @returns {number} XP-Schwelle des nächsten Levels
 */
function xpFuerNaechstesLevel(level) {
  const naechstes = Math.min(level, MAX_LEVEL - 1); // Index absichern
  return XP_TABELLE[naechstes];                      // XP-Tabelle ist 0-basiert: Index = Level - 1 + 1
}

/**
 * Berechnet den prozentualen Fortschritt innerhalb des aktuellen Levels.
 * Nützlich für XP-Balken in der UI.
 *
 * @param {number} xp    – Gesamt-XP
 * @param {number} level – aktuelles Level
 * @returns {number} 0–100 (Prozent)
 */
function xpFortschrittProzent(xp, level) {
  if (level >= MAX_LEVEL) return 100;

  const untergrenze = XP_TABELLE[level - 1];      // XP-Schwelle dieses Levels
  const obergrenze  = XP_TABELLE[level];           // XP-Schwelle nächstes Level
  const spanne      = obergrenze - untergrenze;
  const erreicht    = xp - untergrenze;

  return Math.min(100, Math.max(0, Math.round((erreicht / spanne) * 100)));
}

/**
 * Addiert XP, prüft Level-Up und speichert das Ergebnis.
 * Gibt ein Ergebnis-Objekt zurück, das die UI für Animationen nutzen kann.
 *
 * @param {number} menge – XP-Betrag (positiv)
 * @returns {{
 *   xpVorher: number,
 *   xpNachher: number,
 *   levelVorher: number,
 *   levelNachher: number,
 *   levelUp: boolean,
 *   maxLevel: boolean
 * }}
 */
function xpHinzufuegen(menge) {
  if (typeof menge !== 'number' || menge <= 0) {
    console.warn('[xp] xpHinzufuegen: ungültige Menge:', menge);
    const spieler = spielerLaden();
    return {
      xpVorher:    spieler.xp,
      xpNachher:   spieler.xp,
      levelVorher: spieler.level,
      levelNachher: spieler.level,
      levelUp:     false,
      maxLevel:    spieler.level >= MAX_LEVEL,
    };
  }

  const spieler    = spielerLaden();
  const xpVorher   = spieler.xp;
  const lvlVorher  = levelBerechnen(xpVorher);

  const xpNachher  = xpVorher + menge;
  const lvlNachher = levelBerechnen(xpNachher);
  const levelUp    = lvlNachher > lvlVorher;

  spielerSpeichern({ xp: xpNachher, level: lvlNachher });

  if (levelUp) {
    console.info(`[xp] Level-Up! ${lvlVorher} → ${lvlNachher} (${xpNachher} XP)`);
    if (typeof soundLevelUp === 'function') soundLevelUp();
  }

  return {
    xpVorher,
    xpNachher,
    levelVorher:  lvlVorher,
    levelNachher: lvlNachher,
    levelUp,
    maxLevel:     lvlNachher >= MAX_LEVEL,
  };
}

/**
 * Bequemlichkeitsfunktion: XP für eine bestimmte Aktion hinzufügen.
 * Gibt dasselbe Ergebnis-Objekt wie xpHinzufuegen() zurück.
 *
 * @param {keyof typeof XP_AKTION} aktionsKey
 * @returns {ReturnType<xpHinzufuegen>}
 */
function xpFuerAktion(aktionsKey) {
  const menge = XP_AKTION[aktionsKey];
  if (menge === undefined) {
    console.error('[xp] Unbekannte Aktion:', aktionsKey);
    return xpHinzufuegen(0);
  }
  return xpHinzufuegen(menge);
}

// ============================================================
//  Herzen-System
// ============================================================

/**
 * Prüft, ob die Herzen heute bereits zurückgesetzt wurden.
 * Falls nicht, führt herzenResetten() aus.
 * Sollte einmal pro Sitzungsstart aufgerufen werden.
 *
 * @returns {boolean} true = Reset wurde heute schon durchgeführt
 */
function herzenPruefen() {
  const spieler = spielerLaden();
  const heute   = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

  if (spieler.heartsLastReset === heute) {
    return true; // bereits resettet
  }

  herzenResetten();
  return false;
}

/**
 * Setzt die Herzen auf MAX_HERZEN (5) zurück und speichert das heutige Datum.
 */
function herzenResetten() {
  const heute = new Date().toISOString().slice(0, 10);
  spielerSpeichern({ hearts: MAX_HERZEN, heartsLastReset: heute });
  console.info('[xp] Herzen auf', MAX_HERZEN, 'zurückgesetzt.');
}

/**
 * Gibt ein Herz als Streak-Bonus dazu (max MAX_HERZEN_ABSOLUT).
 *
 * @returns {{
 *   herzVorher:    number,
 *   herzNachher:   number,
 *   hinzugefuegt:  boolean   // false wenn bereits bei Maximum
 * }}
 */
function herzHinzufuegen() {
  const spieler   = spielerLaden();
  const herzVorher = spieler.hearts;

  if (herzVorher >= MAX_HERZEN_ABSOLUT) {
    return { herzVorher, herzNachher: herzVorher, hinzugefuegt: false };
  }

  const herzNachher = herzVorher + 1;
  spielerSpeichern({ hearts: herzNachher });
  console.info(`[xp] Streak-Bonus: +1 Herz (${herzVorher} → ${herzNachher})`);

  return { herzVorher, herzNachher, hinzugefuegt: true };
}

/**
 * Zieht ein Herz ab. Bei 0 Herzen: gibt { verloren: true } zurück.
 * Löst kein automatisches Reset aus – das übernimmt herzenPruefen().
 *
 * @returns {{
 *   herzVorher:  number,
 *   herzNachher: number,
 *   verloren:    boolean   // true = keine Herzen mehr → Runde verloren
 * }}
 */
function herzVerlieren() {
  const spieler    = spielerLaden();
  const herzVorher = spieler.hearts;

  if (herzVorher <= 0) {
    return { herzVorher: 0, herzNachher: 0, verloren: true };
  }

  const herzNachher = herzVorher - 1;
  spielerSpeichern({ hearts: herzNachher });

  console.info(`[xp] Herz verloren: ${herzVorher} → ${herzNachher}`);

  return {
    herzVorher,
    herzNachher,
    verloren: herzNachher === 0,
  };
}

// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    XP_AKTION,
    XP_TABELLE,
    MAX_LEVEL,
    MAX_HERZEN,
    MAX_HERZEN_ABSOLUT,
    levelBerechnen,
    xpFuerNaechstesLevel,
    xpFortschrittProzent,
    xpHinzufuegen,
    xpFuerAktion,
    herzenPruefen,
    herzenResetten,
    herzVerlieren,
    herzHinzufuegen,
  };
}
