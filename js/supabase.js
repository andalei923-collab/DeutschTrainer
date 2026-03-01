// ============================================================
//  js/supabase.js – Supabase REST API (Leaderboard + Analytics)
//  Deutsch Trainer
//
//  ⚠️  Vor dem ersten Einsatz hier die echten Werte eintragen:
//     SUPABASE_URL  → Einstellungen > API > Project URL
//     SUPABASE_KEY  → Einstellungen > API > anon public key
//
//  Benötigte Supabase-Tabellen:
//
//  CREATE TABLE leaderboard (
//    name            TEXT PRIMARY KEY,
//    xp              INTEGER NOT NULL DEFAULT 0,
//    level           INTEGER NOT NULL DEFAULT 1,
//    streak          INTEGER NOT NULL DEFAULT 0,
//    aktualisiert_am TIMESTAMPTZ DEFAULT now()
//  );
//
//  CREATE TABLE analytics (
//    id          BIGSERIAL PRIMARY KEY,
//    ereignis    TEXT NOT NULL,
//    zeitstempel TIMESTAMPTZ DEFAULT now()
//  );
//
//  RLS (Row Level Security):
//    leaderboard → SELECT für alle, INSERT/UPDATE für alle (anon)
//    analytics   → INSERT für alle (anon)
// ============================================================

const SUPABASE_URL = 'HIER_SUPABASE_URL_EINTRAGEN';
const SUPABASE_KEY = 'HIER_SUPABASE_ANON_KEY_EINTRAGEN';

// ------------------------------------------------------------
//  Interne Hilfsfunktionen
// ------------------------------------------------------------

/**
 * Prüft ob Supabase mit echten Werten konfiguriert ist.
 * @returns {boolean}
 */
function _supabaseKonfiguriert() {
  return (
    SUPABASE_URL !== 'HIER_SUPABASE_URL_EINTRAGEN' &&
    SUPABASE_KEY !== 'HIER_SUPABASE_ANON_KEY_EINTRAGEN' &&
    SUPABASE_URL.startsWith('https://')
  );
}

/**
 * Gemeinsame HTTP-Header für alle Supabase-Anfragen.
 * @returns {Object}
 */
function _headers() {
  return {
    'apikey':        SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type':  'application/json',
  };
}

// ============================================================
//  top10Laden
//  Lädt die Top 10 aus der Supabase-Tabelle "leaderboard".
//  @returns {Promise<Array<{name, xp, level, streak}>>}
//           Leeres Array bei Fehler oder fehlender Konfiguration.
// ============================================================

async function top10Laden() {
  if (!_supabaseKonfiguriert()) {
    console.warn('[supabase] Nicht konfiguriert – Leaderboard nicht verfügbar.');
    return null;
  }

  try {
    const url =
      `${SUPABASE_URL}/rest/v1/leaderboard` +
      `?select=name,xp,level,streak` +
      `&order=xp.desc` +
      `&limit=10`;

    const res = await fetch(url, { headers: _headers() });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} – ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error('[supabase] top10Laden Fehler:', err);
    return [];
  }
}

// ============================================================
//  spielerEintragen
//  Trägt den eigenen Score ein oder aktualisiert ihn (Upsert).
//  Primärschlüssel: name (eindeutiger Spielername)
//
//  @param {string} name   – Spielername aus storage.js
//  @param {number} xp     – Gesamt-XP
//  @param {number} level  – Aktuelles Level (1–8)
//  @param {number} streak – Aktueller Lern-Streak
//  @returns {Promise<boolean>} – true bei Erfolg
// ============================================================

async function spielerEintragen(name, xp, level, streak) {
  if (!_supabaseKonfiguriert()) {
    console.warn('[supabase] Nicht konfiguriert – Score nicht gespeichert.');
    return false;
  }

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/leaderboard`,
      {
        method:  'POST',
        headers: {
          ..._headers(),
          // Upsert: bei gleichem Namen (PRIMARY KEY) wird aktualisiert
          'Prefer': 'resolution=merge-duplicates',
        },
        body: JSON.stringify({
          name,
          xp,
          level,
          streak,
          aktualisiert_am: new Date().toISOString(),
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} – ${res.statusText}`);
    }

    return true;
  } catch (err) {
    console.error('[supabase] spielerEintragen Fehler:', err);
    return false;
  }
}

// ============================================================
//  analyticsZaehlen
//  Speichert ein Ereignis in der Tabelle "analytics" (fire & forget).
//  Beispiel-Ereignisse: "app_gestartet", "quiz_abgeschlossen",
//                        "welt_freigeschaltet", "streak_verloren"
//
//  @param {string} ereignis – Eindeutiger Ereignisname
//  @returns {Promise<boolean>} – true bei Erfolg
// ============================================================

async function analyticsZaehlen(ereignis) {
  if (!_supabaseKonfiguriert()) return false;

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/analytics`,
      {
        method:  'POST',
        headers: _headers(),
        body:    JSON.stringify({
          ereignis,
          zeitstempel: new Date().toISOString(),
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} – ${res.statusText}`);
    }

    return true;
  } catch (err) {
    console.error('[supabase] analyticsZaehlen Fehler:', err);
    return false;
  }
}

// ============================================================
//  Exports (für Module-Umgebungen)
//  Im Browser auch global verfügbar (window.*)
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { top10Laden, spielerEintragen, analyticsZaehlen };
}
