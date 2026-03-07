// ============================================================
//  storage.js – Lokale Datenpersistenz (localStorage)
//  Deutsch Trainer
// ============================================================

const APP_VERSION = '0.3';

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
  badge:          null,
  xp:             0,
  level:          1,
  streak:         0,
  streakRecord:   0,
  lastLogin:      null,
  heartsLastReset: null,
  hearts:         6,
  sprachModus:    'normal',   // "normal" | "einfach" | "tap"
};

// 5 Welten mit je 5 Unterwelten + Boss
const FORTSCHRITT_DEFAULT = Array.from({ length: 5 }, (_, i) => ({
  unlocked:     i === 0,   // nur Welt 1 ist von Anfang an freigeschaltet
  bossDefeated: false,
  subwelten:    Array.from({ length: 5 }, () => ({
    completed: false,
    stars:     0,          // 0 – 3
  })),
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
//  Lernfortschritt (5 Welten × 5 Unterwelten + Boss)
// ============================================================

/**
 * Lädt den Fortschritt aller 5 Welten mit Unterwelten.
 * @returns {Array<{unlocked, bossDefeated, subwelten}>}
 */
function fortschrittLaden() {
  const gespeichert = _laden(KEYS.FORTSCHRITT, FORTSCHRITT_DEFAULT);

  // Altes Format erkennen (hat testPassed statt subwelten)
  if (Array.isArray(gespeichert) && gespeichert.length > 0 &&
      gespeichert[0].testPassed !== undefined && !gespeichert[0].subwelten) {
    return structuredClone(FORTSCHRITT_DEFAULT);
  }

  // Neue Struktur mit Subwelten sicherstellen
  return FORTSCHRITT_DEFAULT.map((def, i) => {
    const saved = gespeichert[i] ?? {};
    return {
      unlocked:     saved.unlocked ?? def.unlocked,
      bossDefeated: saved.bossDefeated ?? def.bossDefeated,
      subwelten:    def.subwelten.map((subDef, j) => ({
        ...subDef,
        ...(saved.subwelten?.[j] ?? {}),
      })),
    };
  });
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

    // ── Migration → v0.3 ─────────────────────────────────────
    // Weltsystem-Umbau: altes Flat-Format → Subwelten-Struktur
    if (!gespeicherteVersion || gespeicherteVersion < '0.3') {
      const raw = localStorage.getItem(KEYS.FORTSCHRITT);
      if (raw) {
        try {
          const alt = JSON.parse(raw);
          if (Array.isArray(alt) && alt.length > 0 &&
              alt[0].testPassed !== undefined && !alt[0].subwelten) {
            const neu = FORTSCHRITT_DEFAULT.map((def, i) => {
              const altW = alt[i] ?? {};
              return {
                unlocked:     altW.unlocked ?? def.unlocked,
                bossDefeated: altW.testPassed ?? false,
                subwelten:    def.subwelten.map(() => ({
                  completed: altW.completed ?? false,
                  stars:     altW.completed ? (altW.stars ?? 0) : 0,
                })),
              };
            });
            _speichern(KEYS.FORTSCHRITT, neu);
            console.info('[storage] Migration 0.3: Altes Weltsystem → Subwelten');
          }
        } catch { /* Fehlerhafte Daten ignorieren */ }
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
