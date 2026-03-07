// ============================================================
//  accessoires.js – Accessoire-System (Freischalt-Logik)
//  Deutsch Trainer
//  Abhaengigkeiten: storage.js, avatar.js (AVATAR_HUETE etc.)
// ============================================================

// ── Accessoire-Definitionen mit Freischalt-Bedingungen ──────

const ACCESSOIRE_DATEN = [
  // ── Huete ──
  { id: 'party',       typ: 'hut',    emoji: '\u{1F389}', name: 'Partyhut',      bedingung: s => s.level >= 2,                                                       hinweis: 'Level 2 erreichen' },
  { id: 'cowboy',      typ: 'hut',    emoji: '\u{1F920}', name: 'Cowboyhut',     bedingung: s => s.streakRecord >= 3,                                                 hinweis: '3 Tage Streak erreichen' },
  { id: 'helm',        typ: 'hut',    emoji: '\u26D1\uFE0F', name: 'Rettungshelm',  bedingung: (s, f) => !!(f[0] && f[0].bossDefeated),                                hinweis: 'Boss Welt 1 besiegen' },
  { id: 'abschluss',   typ: 'hut',    emoji: '\u{1F393}', name: 'Absolventenhut', bedingung: (s, f) => !!(f[1] && f[1].bossDefeated),                                 hinweis: 'Boss Welt 2 besiegen' },
  { id: 'zylinder',    typ: 'hut',    emoji: '\u{1F3A9}', name: 'Zylinder',      bedingung: s => s.level >= 5,                                                       hinweis: 'Level 5 erreichen' },
  { id: 'stahlhelm',   typ: 'hut',    emoji: '\u{1FA96}', name: 'Stahlhelm',     bedingung: (s, f) => !!(f[2] && f[2].bossDefeated),                                  hinweis: 'Boss Welt 3 besiegen' },
  { id: 'krone',       typ: 'hut',    emoji: '\u{1F451}', name: 'Krone',         bedingung: s => s.level >= 8,                                                       hinweis: 'Max Level (8) erreichen' },

  // ── Brillen ──
  { id: 'lesebrille',   typ: 'brille', emoji: '\u{1F453}', name: 'Lesebrille',    bedingung: s => s.level >= 2,                                                       hinweis: 'Level 2 erreichen' },
  { id: 'sonnenbrille', typ: 'brille', emoji: '\u{1F576}\uFE0F', name: 'Sonnenbrille', bedingung: s => s.streakRecord >= 7,                                            hinweis: '7 Tage Streak erreichen' },
  { id: 'schutzbrille', typ: 'brille', emoji: '\u{1F97D}', name: 'Schutzbrille',  bedingung: (s, f) => !!(f[3] && f[3].bossDefeated),                                  hinweis: 'Boss Welt 4 besiegen' },
  { id: 'monokel',      typ: 'brille', emoji: '\u{1F9D0}', name: 'Monokel',       bedingung: s => s.xp >= 1000,                                                       hinweis: '1000 XP erreichen' },

  // ── Badges ──
  { id: 'anfaenger',  typ: 'badge',  emoji: '\u{1F331}', name: 'Anfaenger',     bedingung: () => true,                                                              hinweis: 'Sofort verfuegbar' },
  { id: 'fleissig',   typ: 'badge',  emoji: '\u{1F525}', name: 'Fleissig',      bedingung: s => s.streakRecord >= 5,                                                 hinweis: '5 Tage Streak erreichen' },
  { id: 'stern',      typ: 'badge',  emoji: '\u2B50',    name: 'Aufsteiger',    bedingung: s => s.level >= 4,                                                       hinweis: 'Level 4 erreichen' },
  { id: 'diamant',    typ: 'badge',  emoji: '\u{1F48E}', name: 'Diamant',       bedingung: s => s.xp >= 2000,                                                       hinweis: '2000 XP erreichen' },
  { id: 'champion',   typ: 'badge',  emoji: '\u{1F3C6}', name: 'Champion',      bedingung: (s, f) => f.every(w => w.bossDefeated),                                   hinweis: 'Alle 5 Bosse besiegen' },
  { id: 'meister',    typ: 'badge',  emoji: '\u{1F396}\uFE0F', name: 'Meister', bedingung: s => s.level >= 8,                                                       hinweis: 'Max Level (8) erreichen' },
];

// ============================================================
//  accessoiresFreigeschaltet – gibt Array der freigeschalteten IDs zurueck
// ============================================================

function accessoiresFreigeschaltet() {
  const spieler     = spielerLaden();
  const fortschritt = typeof fortschrittLaden === 'function' ? fortschrittLaden() : [];
  const frei = [];

  ACCESSOIRE_DATEN.forEach(acc => {
    try {
      if (acc.bedingung(spieler, fortschritt)) {
        frei.push(acc.id);
      }
    } catch { /* Bedingung fehlgeschlagen → nicht freigeschaltet */ }
  });

  return frei;
}

// ============================================================
//  accessoireIstFrei – prueft einzelnes Accessoire
// ============================================================

function accessoireIstFrei(id) {
  const acc = ACCESSOIRE_DATEN.find(a => a.id === id);
  if (!acc) return false;
  const spieler     = spielerLaden();
  const fortschritt = typeof fortschrittLaden === 'function' ? fortschrittLaden() : [];
  try { return acc.bedingung(spieler, fortschritt); } catch { return false; }
}

// ============================================================
//  accessoireNachTyp – gibt Accessoires eines Typs zurueck
// ============================================================

function accessoireNachTyp(typ) {
  return ACCESSOIRE_DATEN.filter(a => a.typ === typ);
}

// ============================================================
//  neuFreigeschalteteAccessoires – prueft auf neue Freischaltungen
//  Gibt Array mit neu freigeschalteten Accessoire-Objekten zurueck
// ============================================================

const ACCESSOIRE_STORAGE_KEY = 'dt_accessoires_bekannt';

function neuFreigeschalteteAccessoires() {
  const bekannt = JSON.parse(localStorage.getItem(ACCESSOIRE_STORAGE_KEY) || '[]');
  const aktuellFrei = accessoiresFreigeschaltet();
  const neu = [];

  aktuellFrei.forEach(id => {
    if (!bekannt.includes(id)) {
      const acc = ACCESSOIRE_DATEN.find(a => a.id === id);
      if (acc) neu.push(acc);
    }
  });

  if (neu.length > 0) {
    localStorage.setItem(ACCESSOIRE_STORAGE_KEY, JSON.stringify(aktuellFrei));
  }

  return neu;
}

// ============================================================
//  accessoireFreischaltungAnzeigen – Unlock-Overlay
// ============================================================

function accessoireFreischaltungAnzeigen(acc) {
  // Overlay erstellen
  const overlay = document.createElement('div');
  overlay.className = 'acc-unlock-overlay';
  overlay.innerHTML = `
    <div class="acc-unlock-box">
      <div class="acc-unlock-emoji">${acc.emoji}</div>
      <div class="acc-unlock-titel">Neues Accessoire!</div>
      <div class="acc-unlock-name">${acc.name}</div>
      <button class="acc-unlock-btn" onclick="this.closest('.acc-unlock-overlay').remove()">Super!</button>
    </div>`;
  document.body.appendChild(overlay);

  // Nach 4 Sekunden automatisch schliessen
  setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 4000);
}

// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ACCESSOIRE_DATEN,
    accessoiresFreigeschaltet,
    accessoireIstFrei,
    accessoireNachTyp,
    neuFreigeschalteteAccessoires,
    accessoireFreischaltungAnzeigen,
  };
}
