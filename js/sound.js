// ============================================================
//  sound.js – Sound-System (Web Audio API)
//  Deutsch Trainer  –  keine externen Dateien nötig
// ============================================================

const _SOUND_KEY = 'dt_sound';
let _audioCtx = null;

// ── AudioContext (lazy, erst bei erster Nutzung) ────────────
function _ctx() {
  if (!_audioCtx) {
    _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  // iOS/Chrome: Context nach User-Gesture fortsetzen
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

// ── Persistenz ─────────────────────────────────────────────
function soundStatus() {
  try { return localStorage.getItem(_SOUND_KEY) !== '0'; }
  catch { return true; }
}
function soundAn()  { try { localStorage.setItem(_SOUND_KEY, '1'); } catch {} }
function soundAus() { try { localStorage.setItem(_SOUND_KEY, '0'); } catch {} }

// ── Interner Ton-Baustein ───────────────────────────────────
// freq   – Frequenz in Hz
// start  – Verzögerung ab jetzt (Sekunden)
// dauer  – Tondauer (Sekunden)
// vol    – Lautstärke 0–1 (default 0.28)
// typ    – OscillatorType (default 'sine')
function _ton(freq, start, dauer, vol = 0.28, typ = 'sine') {
  if (!soundStatus()) return;
  try {
    const ctx  = _ctx();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    const now  = ctx.currentTime;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = typ;
    osc.frequency.setValueAtTime(freq, now + start);

    gain.gain.setValueAtTime(0, now + start);
    gain.gain.linearRampToValueAtTime(vol, now + start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + start + dauer);

    osc.start(now + start);
    osc.stop(now + start + dauer + 0.02);
  } catch (_) { /* silent */ }
}

// ============================================================
//  Sounds
// ============================================================

// Heller Aufwärtston – richtige Antwort
function soundRichtig() {
  _ton(523, 0,    0.12);   // C5
  _ton(659, 0.08, 0.20);   // E5
}

// Dumpfer Abwärtston – falsche Antwort
function soundFalsch() {
  _ton(320, 0,    0.10, 0.22, 'sawtooth');
  _ton(220, 0.10, 0.22, 0.18, 'sawtooth');
}

// Kleine Fanfare – 3 aufsteigende Töne (Level Up)
function soundLevelUp() {
  _ton(523, 0,    0.14);   // C5
  _ton(659, 0.14, 0.14);   // E5
  _ton(784, 0.28, 0.38);   // G5
}

// Glocken-Ton – Achievement freigeschaltet
function soundAchievement() {
  _ton(880,  0,    0.10, 0.20);  // A5
  _ton(1047, 0.08, 0.10, 0.18);  // C6
  _ton(1319, 0.16, 0.28, 0.16);  // E6
}

// Schneller fröhlicher Ton – Streak-Bonus
function soundStreakBonus() {
  _ton(659, 0,    0.07);   // E5
  _ton(784, 0.07, 0.07);   // G5
  _ton(880, 0.14, 0.14);   // A5
}

// Kleine Siegesmelodie – Test bestanden
function soundTestBestanden() {
  _ton(523,  0,    0.10);  // C5
  _ton(659,  0.10, 0.10);  // E5
  _ton(784,  0.20, 0.10);  // G5
  _ton(1047, 0.30, 0.45);  // C6
}

// Kurzer neutraler Klick
function soundKlick() {
  _ton(440, 0, 0.06, 0.14, 'square');
}

// Boss-Treffer – wuchtiger Schlag
function soundBossTreffer() {
  _ton(180, 0, 0.08, 0.32, 'sawtooth');
  _ton(120, 0.06, 0.15, 0.28, 'square');
  _ton(90,  0.12, 0.20, 0.20, 'sawtooth');
}

// Spieler kassiert Schaden – dumpfer Aufprall
function soundSpielerSchaden() {
  _ton(200, 0, 0.06, 0.25, 'sawtooth');
  _ton(140, 0.08, 0.18, 0.22, 'square');
}

// Boss besiegt – epische Siegesfanfare
function soundBossBesiegt() {
  _ton(523,  0,    0.12);        // C5
  _ton(659,  0.10, 0.12);        // E5
  _ton(784,  0.20, 0.12);        // G5
  _ton(1047, 0.30, 0.15);        // C6
  _ton(1319, 0.42, 0.12);        // E6
  _ton(1568, 0.52, 0.50, 0.22);  // G6 (lang)
}

// Boss-Niederlage – traurige Melodie
function soundBossNiederlage() {
  _ton(440, 0,    0.15, 0.22, 'sawtooth');  // A4
  _ton(370, 0.15, 0.15, 0.20, 'sawtooth');  // F#4
  _ton(330, 0.30, 0.15, 0.18, 'sawtooth');  // E4
  _ton(262, 0.45, 0.40, 0.16, 'sawtooth');  // C4
}

// Boss-Kampf Intro – spannender Einstieg
function soundBossIntro() {
  _ton(165, 0,    0.12, 0.28, 'square');
  _ton(196, 0.12, 0.12, 0.26, 'square');
  _ton(220, 0.24, 0.12, 0.24, 'square');
  _ton(262, 0.36, 0.22, 0.30, 'sawtooth');
}

// Epischerer Intro-Sound für den Deutsch-Drachen (Welt 5 Endkampf)
function soundDrachenIntro() {
  // Tiefes Grollen
  _ton(65,  0,    0.20, 0.40, 'sawtooth');
  _ton(73,  0.05, 0.20, 0.38, 'sawtooth');
  // Aufsteigende Fanfare
  _ton(131, 0.25, 0.12, 0.30, 'square');
  _ton(165, 0.37, 0.12, 0.28, 'square');
  _ton(196, 0.49, 0.12, 0.26, 'square');
  _ton(220, 0.61, 0.12, 0.24, 'square');
  _ton(262, 0.73, 0.15, 0.32, 'sawtooth');
  // Dramatischer Schlussakkord
  _ton(131, 0.90, 0.25, 0.35, 'sawtooth');
  _ton(165, 0.90, 0.25, 0.30, 'square');
  _ton(262, 0.90, 0.30, 0.35, 'sawtooth');
}

// ============================================================
//  Sound-Toggle-Button initialisieren
//  Sucht nach element mit id="soundToggleBtn" und setzt
//  Text + onclick.
// ============================================================
function soundToggleInit(btnId = 'soundToggleBtn') {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  const aktualisieren = () => {
    btn.textContent = soundStatus() ? '🔊' : '🔇';
    btn.title       = soundStatus() ? 'Sound ausschalten' : 'Sound einschalten';
  };

  btn.addEventListener('click', () => {
    soundKlick();
    if (soundStatus()) soundAus(); else soundAn();
    aktualisieren();
  });

  aktualisieren();
}

// ============================================================
//  Exports
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    soundStatus, soundAn, soundAus,
    soundRichtig, soundFalsch, soundLevelUp,
    soundAchievement, soundStreakBonus,
    soundTestBestanden, soundKlick,
    soundBossTreffer, soundSpielerSchaden,
    soundBossBesiegt, soundBossNiederlage, soundBossIntro, soundDrachenIntro,
    soundToggleInit,
  };
}
