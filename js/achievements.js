// ============================================================
//  achievements.js – Abzeichen-System
//  Deutsch Trainer
//  Abhängigkeit: storage.js muss vorher geladen sein
// ============================================================

// ── Abzeichen-Definitionen ──────────────────────────────────
const ACHIEVEMENTS_LISTE = [
  {
    id:           'erste_runde',
    symbol:       '🎯',
    titel:        'Erste Runde',
    beschreibung: 'Eine Quiz-Runde abgeschlossen',
    selten:       false,
  },
  {
    id:           'streak_3',
    symbol:       '🔥',
    titel:        'Heißes Streak',
    beschreibung: '3 Tage hintereinander gelernt',
    selten:       false,
  },
  {
    id:           'streak_7',
    symbol:       '⚡',
    titel:        'Wochenchampion',
    beschreibung: '7 Tage in Folge gelernt',
    selten:       false,
  },
  {
    id:           'streak_30',
    symbol:       '💎',
    titel:        'Monatsrekord',
    beschreibung: '30 Tage in Folge gelernt',
    selten:       true,
  },
  {
    id:           'level_3',
    symbol:       '⬆️',
    titel:        'Level 3 erreicht',
    beschreibung: 'Auf Level 3 aufgestiegen',
    selten:       false,
  },
  {
    id:           'level_5',
    symbol:       '🚀',
    titel:        'Level 5 erreicht',
    beschreibung: 'Auf Level 5 aufgestiegen',
    selten:       false,
  },
  {
    id:           'level_8',
    symbol:       '🌟',
    titel:        'Max Level!',
    beschreibung: 'Das höchste Level erreicht',
    selten:       true,
  },
  {
    id:           'xp_100',
    symbol:       '✨',
    titel:        '100 XP',
    beschreibung: '100 Erfahrungspunkte gesammelt',
    selten:       false,
  },
  {
    id:           'xp_500',
    symbol:       '💰',
    titel:        '500 XP',
    beschreibung: '500 Erfahrungspunkte gesammelt',
    selten:       false,
  },
  {
    id:           'xp_2000',
    symbol:       '🏅',
    titel:        '2000 XP',
    beschreibung: '2000 Erfahrungspunkte gesammelt',
    selten:       true,
  },
  {
    id:           'welt1_bestanden',
    symbol:       '🌱',
    titel:        'Welt 1 bestanden',
    beschreibung: 'Den Test in Welt 1 bestanden',
    selten:       false,
  },
  {
    id:           'welt2_bestanden',
    symbol:       '🌊',
    titel:        'Welt 2 bestanden',
    beschreibung: 'Den Test in Welt 2 bestanden',
    selten:       false,
  },
  {
    id:           'welt3_bestanden',
    symbol:       '🔥',
    titel:        'Welt 3 bestanden',
    beschreibung: 'Den Test in Welt 3 bestanden',
    selten:       false,
  },
  {
    id:           'welt4_bestanden',
    symbol:       '⚡',
    titel:        'Welt 4 bestanden',
    beschreibung: 'Den Test in Welt 4 bestanden',
    selten:       false,
  },
  {
    id:           'welt5_bestanden',
    symbol:       '🌟',
    titel:        'Profi!',
    beschreibung: 'Alle Welten absolviert – Glückwunsch!',
    selten:       true,
  },
  {
    id:           'perfekt_quiz',
    symbol:       '💯',
    titel:        'Perfekt!',
    beschreibung: '100 % in einem Quiz erreicht',
    selten:       false,
  },
];

// ============================================================
//  achievementsPruefen
//  Prüft alle Bedingungen und gibt neu freigeschaltete Abzeichen zurück.
//
//  @param {Object} extras – zusätzlicher Kontext aus dem aktuellen Spielzug:
//    { quizAbgeschlossen?: boolean, pct?: number }
//  @returns {Array} – neu freigeschaltete Achievement-Objekte
// ============================================================

function achievementsPruefen(extras = {}) {
  if (typeof spielerLaden !== 'function') return [];

  const spieler     = spielerLaden();
  const fortschritt = typeof fortschrittLaden === 'function' ? fortschrittLaden() : [];
  const vorhandene  = achievementsLaden();
  const neu         = [];

  const bedingungen = {
    erste_runde:     () => extras.quizAbgeschlossen === true,
    streak_3:        () => spieler.streak >= 3,
    streak_7:        () => spieler.streak >= 7,
    streak_30:       () => spieler.streak >= 30,
    level_3:         () => spieler.level >= 3,
    level_5:         () => spieler.level >= 5,
    level_8:         () => spieler.level >= 8,
    xp_100:          () => spieler.xp >= 100,
    xp_500:          () => spieler.xp >= 500,
    xp_2000:         () => spieler.xp >= 2000,
    welt1_bestanden: () => !!(fortschritt[0]?.testPassed),
    welt2_bestanden: () => !!(fortschritt[1]?.testPassed),
    welt3_bestanden: () => !!(fortschritt[2]?.testPassed),
    welt4_bestanden: () => !!(fortschritt[3]?.testPassed),
    welt5_bestanden: () => !!(fortschritt[4]?.testPassed),
    perfekt_quiz:    () => extras.pct === 100,
  };

  ACHIEVEMENTS_LISTE.forEach(ach => {
    if (vorhandene.includes(ach.id)) return;
    const fn = bedingungen[ach.id];
    if (fn && fn()) {
      vorhandene.push(ach.id);
      neu.push(ach);
    }
  });

  if (neu.length > 0) {
    achievementsSpeichern(vorhandene);
    if (typeof soundAchievement === 'function') soundAchievement();
  }

  return neu;
}

// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ACHIEVEMENTS_LISTE, achievementsPruefen };
}
