// ============================================================
//  storage.js – Lokale Datenpersistenz (localStorage)
//  Deutsch Trainer
// ============================================================

const APP_VERSION = '0.2';

const KEYS = {
  SPIELER:        'dt_spieler',
  FORTSCHRITT:    'dt_fortschritt',
  ACHIEVEMENTS:   'dt_achievements',
  DAILY:          'dt_daily_challenge',
  SPRACHE:        'dt_sprache',
  VERSION:        'dt_version',
};

// ------------------------------------------------------------
//  Standard-Werte
// ------------------------------------------------------------

const SPIELER_DEFAULT = {
  name:           'Spieler',
  avatar:         'default',
  hat:            null,
  glasses:        null,
  xp:             0,
  level:          1,
  streak:         0,
  streakRecord:   0,
  lastLogin:      null,
  heartsLastReset: null,
  hearts:         6,
  sprachModus:    'normal',   // "normal" | "einfach" | "tap"
};

// 5 Welten (Index 0 = Welt 1 … Index 4 = Welt 5)
const FORTSCHRITT_DEFAULT = Array.from({ length: 5 }, (_, i) => ({
  unlocked:   i === 0,   // nur Welt 1 ist von Anfang an freigeschaltet
  completed:  false,
  testPassed: false,
  stars:      0,         // 0 – 3
}));

const ACHIEVEMENTS_DEFAULT = [];

const DAILY_DEFAULT = {
  datum:      null,
  aufgabe:    null,
  erledigt:   false,
};

const SPRACHE_DEFAULT = {
  sprache:    'de',      // "de" | "fa" | "tr" | "ar"
  modus:      'normal',  // UI-Anzeigemodus
};

// ============================================================
//  Hilfsfunktionen
// ============================================================

function _laden(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return structuredClone(fallback);
    return JSON.parse(raw);
  } catch (err) {
    console.error(`[storage] Fehler beim Laden von "${key}":`, err);
    return structuredClone(fallback);
  }
}

function _speichern(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (err) {
    console.error(`[storage] Fehler beim Speichern von "${key}":`, err);
    return false;
  }
}

// ============================================================
//  Spielerprofil
// ============================================================

/**
 * Lädt das Spielerprofil.
 * Fehlende Felder werden mit Default-Werten aufgefüllt.
 * @returns {Object} Spielerprofil
 */
function spielerLaden() {
  const gespeichert = _laden(KEYS.SPIELER, SPIELER_DEFAULT);
  // Neue Felder ergänzen, falls ältere Speicherstände fehlen
  return { ...SPIELER_DEFAULT, ...gespeichert };
}

/**
 * Speichert das Spielerprofil.
 * @param {Object} data – Spielerprofil (vollständig oder partiell)
 * @returns {boolean} Erfolg
 */
function spielerSpeichern(data) {
  const aktuell = spielerLaden();
  return _speichern(KEYS.SPIELER, { ...aktuell, ...data });
}

// ============================================================
//  Lernfortschritt (5 Welten)
// ============================================================

/**
 * Lädt den Fortschritt aller 5 Welten.
 * @returns {Array<{unlocked, completed, testPassed, stars}>}
 */
function fortschrittLaden() {
  const gespeichert = _laden(KEYS.FORTSCHRITT, FORTSCHRITT_DEFAULT);

  // Sicherstellen, dass immer genau 5 Einträge vorhanden sind
  return FORTSCHRITT_DEFAULT.map((def, i) => ({
    ...def,
    ...(gespeichert[i] ?? {}),
  }));
}

/**
 * Speichert den Fortschritt aller 5 Welten.
 * @param {Array} data – Array mit 5 Welt-Objekten
 * @returns {boolean} Erfolg
 */
function fortschrittSpeichern(data) {
  if (!Array.isArray(data) || data.length !== 5) {
    console.error('[storage] fortschrittSpeichern: Erwartet ein Array mit genau 5 Einträgen.');
    return false;
  }
  return _speichern(KEYS.FORTSCHRITT, data);
}

// ============================================================
//  Achievements (Abzeichen)
// ============================================================

/**
 * Lädt die Liste freigeschalteter Abzeichen.
 * @returns {Array<string>} Achievement-IDs
 */
function achievementsLaden() {
  return _laden(KEYS.ACHIEVEMENTS, ACHIEVEMENTS_DEFAULT);
}

/**
 * Speichert die Achievement-Liste.
 * @param {Array<string>} data – Achievement-IDs
 * @returns {boolean} Erfolg
 */
function achievementsSpeichern(data) {
  if (!Array.isArray(data)) {
    console.error('[storage] achievementsSpeichern: Erwartet ein Array.');
    return false;
  }
  return _speichern(KEYS.ACHIEVEMENTS, data);
}

// ============================================================
//  Daily Challenge
// ============================================================

/**
 * Lädt die tägliche Challenge.
 * @returns {{ datum: string|null, aufgabe: any, erledigt: boolean }}
 */
function dailyChallengeLaden() {
  const gespeichert = _laden(KEYS.DAILY, DAILY_DEFAULT);
  return { ...DAILY_DEFAULT, ...gespeichert };
}

/**
 * Speichert die tägliche Challenge.
 * @param {Object} data
 * @returns {boolean} Erfolg
 */
function dailyChallengeSpeichern(data) {
  const aktuell = dailyChallengeLaden();
  return _speichern(KEYS.DAILY, { ...aktuell, ...data });
}

// ============================================================
//  Sprache & Modus
// ============================================================

/**
 * Lädt die gewählte Sprache und den UI-Modus.
 * @returns {{ sprache: string, modus: string }}
 */
function spracheLaden() {
  const gespeichert = _laden(KEYS.SPRACHE, SPRACHE_DEFAULT);
  return { ...SPRACHE_DEFAULT, ...gespeichert };
}

/**
 * Speichert die gewählte Sprache und den UI-Modus.
 * @param {{ sprache?: string, modus?: string }} data
 * @returns {boolean} Erfolg
 */
function spracheSpeichern(data) {
  const aktuell = spracheLaden();
  return _speichern(KEYS.SPRACHE, { ...aktuell, ...data });
}

// ============================================================
//  Migrations-System
// ============================================================

/**
 * Prüft die gespeicherte App-Version und führt nötige
 * Datenmigration durch. Muss VOR spielerLaden() aufgerufen werden.
 */
function migrieren() {
  try {
    const gespeicherteVersion = localStorage.getItem(KEYS.VERSION);

    // Bereits aktuell – nichts zu tun
    if (gespeicherteVersion === APP_VERSION) return;

    console.info(`[storage] Migration: ${gespeicherteVersion ?? 'keine'} → ${APP_VERSION}`);

    // ── Migration → v0.2 ─────────────────────────────────────
    // Herzen-Minimum auf 6 anheben (war früher 5 oder 3)
    if (gespeicherteVersion === null || gespeicherteVersion === '0.1') {
      const spieler = spielerLaden();
      if ((spieler.hearts ?? 0) < 6) {
        spielerSpeichern({ hearts: 6 });
        console.info('[storage] Migration 0.2: hearts auf 6 angehoben.');
      }
    }

    // Neue Version persistieren
    localStorage.setItem(KEYS.VERSION, APP_VERSION);
    console.info('[storage] Migration abgeschlossen → v' + APP_VERSION);

  } catch (err) {
    console.error('[storage] Fehler bei Migration:', err);
  }
}

// ============================================================
//  Exports (für Module-Umgebungen)
//  Im Browser auch global verfügbar (window.*)
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    APP_VERSION,
    spielerLaden,
    spielerSpeichern,
    fortschrittLaden,
    fortschrittSpeichern,
    achievementsLaden,
    achievementsSpeichern,
    dailyChallengeLaden,
    dailyChallengeSpeichern,
    spracheLaden,
    spracheSpeichern,
    migrieren,
  };
}
