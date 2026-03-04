// ============================================================
//  quiz.js – Quiz-Engine (11 Fragetypen)
//  Deutsch Trainer
//  Abhängigkeiten: storage.js, xp.js, avatar.js
// ============================================================

'use strict';

// ── Zustand ────────────────────────────────────────────────
const QUIZ = {
  fragen:     [],
  index:      0,
  richtig:    0,
  falsch:     0,
  xpRunde:    0,
  weltNr:     1,
  container:  null,
  gesperrt:   false,   // Eingabe blockiert während Feedback läuft

  _richtigInFolge: 0,  // Streak-Zähler für Herz-Bonus (4 in Folge = +1 ❤️)

  // Typ-spezifischer Zustand – wird pro Frage neu gesetzt
  _typ: {
    gewaehlt:   [],    // reihenfolge / steigerung_ordnen / mehrfachauswahl
    verbunden:  [],    // synonym_verbinden: bereits gefundene Paare
    linksAktiv: null,  // synonym_verbinden: aktuell gewählte linke Seite
  },
};

// ── Hilfsfunktionen ────────────────────────────────────────
const qs  = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

function mischen(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// XSS-Schutz für Nutzereingaben in innerHTML
function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function _typZustandReset() {
  QUIZ._typ.gewaehlt   = [];
  QUIZ._typ.verbunden  = [];
  QUIZ._typ.linksAktiv = null;
}

// ============================================================
//  Satz-Übersetzung (MyMemory API – kein Key nötig)
// ============================================================

/**
 * Übersetzt einen deutschen Text via MyMemory API.
 * @param {string} text         – Quelltext (Deutsch)
 * @param {string} zielSprache  – ISO-Code: "fa" | "tr" | "ar"
 * @returns {Promise<string|null>} Übersetzung oder null bei Fehler
 */
async function satzUebersetzen(text, zielSprache) {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=de|${zielSprache}`;
    const res  = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const daten = await res.json();
    return daten.responseData?.translatedText ?? null;
  } catch {
    return null;
  }
}

/**
 * Erstellt einen "🌍 Ganzen Satz übersetzen"-Block (Button + Ausgabe).
 * @param {function(): string} getTextFn – liefert den zu übersetzenden Text
 * @param {string}             zielSprache
 * @returns {HTMLElement}
 */
function _uebersetzerBlock(getTextFn, zielSprache) {
  const wrap = document.createElement('div');
  wrap.className = 'uebers-block';

  const btn = document.createElement('button');
  btn.className   = 'uebers-btn';
  btn.textContent = '🌍 Ganzen Satz übersetzen';

  const ausgabe = document.createElement('p');
  ausgabe.className    = 'uebers-ausgabe';
  ausgabe.style.display = 'none';

  btn.addEventListener('click', async () => {
    btn.disabled    = true;
    btn.textContent = '⏳ Übersetze …';

    const uebersetzung = await satzUebersetzen(getTextFn(), zielSprache);

    if (uebersetzung) {
      ausgabe.textContent   = uebersetzung;
      btn.textContent       = '🌍 Nochmal übersetzen';
    } else {
      ausgabe.textContent   = 'Übersetzung gerade nicht verfügbar';
      btn.textContent       = '🌍 Ganzen Satz übersetzen';
    }
    ausgabe.style.display = 'block';
    btn.disabled          = false;
  });

  wrap.appendChild(btn);
  wrap.appendChild(ausgabe);
  return wrap;
}

// ============================================================
//  _streakHerzPopupZeigen – Popup + Blitz-Effekt
// ============================================================

/**
 * Zeigt kurz ein grünes "+1 ❤️ Streak Bonus!"-Popup
 * und einen grünen Blitz-Hintergrund an.
 */
function _streakHerzPopupZeigen() {
  // Grüner Blitz-Hintergrund
  const blitz = document.createElement('div');
  blitz.style.cssText = [
    'position:fixed', 'inset:0', 'z-index:490',
    'background:rgba(74,222,128,.22)',
    'pointer-events:none',
    'opacity:1',
    'transition:opacity .45s ease',
  ].join(';');
  document.body.appendChild(blitz);
  setTimeout(() => { blitz.style.opacity = '0'; }, 80);
  setTimeout(() => blitz.remove(), 560);

  // Popup-Text
  const popup = document.createElement('div');
  popup.textContent = '+1 ❤️ Streak Bonus!';
  popup.style.cssText = [
    'position:fixed',
    'top:42%', 'left:50%',
    'transform:translate(-50%,-50%) scale(.75)',
    'z-index:500',
    'background:#0d2e1e',
    'border:2px solid #4ade80',
    'color:#4ade80',
    'font-size:1.25rem',
    'font-weight:800',
    'letter-spacing:.02em',
    'padding:.65rem 1.5rem',
    'border-radius:14px',
    'box-shadow:0 8px 32px rgba(74,222,128,.35)',
    'pointer-events:none',
    'opacity:0',
    'transition:transform .18s ease, opacity .18s ease',
  ].join(';');
  document.body.appendChild(popup);

  // Einblenden
  requestAnimationFrame(() => {
    popup.style.opacity  = '1';
    popup.style.transform = 'translate(-50%,-50%) scale(1)';
  });

  // Ausblenden
  setTimeout(() => {
    popup.style.opacity   = '0';
    popup.style.transform = 'translate(-50%,-58%) scale(.92)';
  }, 1400);
  setTimeout(() => popup.remove(), 1620);
}

// ============================================================
//  herzAnzeigenAktualisieren
// ============================================================

/**
 * Liest die aktuelle Herzanzahl und rendert ❤️-Icons
 * in #herzenAnzeige (zwischen Avatar und Fragekarte).
 */
function herzAnzeigenAktualisieren() {
  const el = document.getElementById('herzenAnzeige');
  if (!el) return;
  const herzen = typeof spielerLaden === 'function'
    ? Math.max(0, spielerLaden().hearts)
    : 0;
  el.textContent = herzen > 0 ? '❤️'.repeat(herzen) : '💔';
  el.setAttribute('aria-label', `${herzen} Herzen verbleibend`);
}

// ============================================================
//  Tap-to-Translate – Quiz-Fragetext
// ============================================================

const _QUIZ_SPRACH_LABEL = { de: 'Deutsch', fa: 'Persisch', tr: 'Türkçe', ar: 'العربية' };
let _quizTapAktiv   = false;
let _quizPopupTimer = null;

/**
 * Wandelt einen Text in antippbare Wort-Spans um.
 * @param {string} text
 * @returns {DocumentFragment}
 */
function _quizFrageZuSpans(text) {
  const frag = document.createDocumentFragment();
  text.split(/(\s+)/).forEach(teil => {
    if (/^\s+$/.test(teil)) { frag.appendChild(document.createTextNode(teil)); return; }
    if (!teil) return;
    const span       = document.createElement('span');
    span.className   = 'wort';
    span.tabIndex    = 0;
    span.dataset.de  = teil.replace(/[.,!?;:»«()"]/g, '');
    span.textContent = teil;
    frag.appendChild(span);
  });
  return frag;
}

/**
 * Zeigt das Übersetzungs-Popup für ein angeklicktes Quiz-Wort.
 * Übersetzt via LibreTranslate.
 * @param {HTMLElement} span
 * @param {number}      x
 * @param {number}      y
 * @param {string}      zielSprache – 'fa' | 'tr' | 'ar'
 */
async function _quizPopupZeigen(span, x, y, zielSprache) {
  const popup = document.getElementById('translate-popup');
  const txtEl = document.getElementById('popupText');
  const sprEl = document.getElementById('popupSprache');
  if (!popup || !txtEl || !sprEl) return;

  const wort = (span.dataset.de || span.textContent).replace(/[.,!?;:»«()"]/g, '').trim();
  if (!wort) return;

  txtEl.textContent = '…';
  sprEl.textContent = _QUIZ_SPRACH_LABEL[zielSprache] ?? zielSprache;
  popup.style.left  = Math.min(x, window.innerWidth - 160) + 'px';
  popup.style.top   = (y - 52) + 'px';
  popup.classList.add('sichtbar');
  span.classList.add('active');

  if (_quizPopupTimer) clearTimeout(_quizPopupTimer);

  const uebersetzung = await satzUebersetzen(wort, zielSprache);
  txtEl.textContent  = uebersetzung || wort;

  _quizPopupTimer = setTimeout(() => {
    popup.classList.remove('sichtbar');
    span.classList.remove('active');
    _quizPopupTimer = null;
  }, 2000);
}

/**
 * Richtet Tap-to-Translate für den Quiz-Fragetext ein (einmalig).
 * Kein Popup wenn Zielsprache = Deutsch.
 */
function _quizTapToTranslateInit() {
  const spr = typeof spracheLaden === 'function'
    ? (spracheLaden().sprache ?? 'de') : 'de';
  if (spr === 'de' || _quizTapAktiv) return;
  _quizTapAktiv = true;

  document.body.addEventListener('click', e => {
    const span = e.target.closest('span.wort');
    if (!span) return;
    _quizPopupZeigen(span, e.clientX, e.clientY, spr);
  });

  document.body.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const span = e.target.closest('span.wort');
    if (!span) return;
    e.preventDefault();
    const r = span.getBoundingClientRect();
    _quizPopupZeigen(span, r.left + r.width / 2, r.top, spr);
  });
}

// ============================================================
//  quizStarten – Einstieg
// ============================================================

/**
 * Initialisiert und startet eine Quiz-Runde.
 * @param {Object[]} fragen
 * @param {{ weltNr?: number, containerId?: string }} opt
 */
function quizStarten(fragen, opt = {}) {
  const { weltNr = 1, containerId = 'theoriKarte', xpProAntwort = 0 } = opt;

  QUIZ.fragen          = fragen;
  QUIZ.index           = 0;
  QUIZ.richtig         = 0;
  QUIZ.falsch          = 0;
  QUIZ.xpRunde         = 0;
  QUIZ.weltNr          = weltNr;
  QUIZ.gesperrt        = false;
  QUIZ._richtigInFolge = 0;
  QUIZ.xpProAntwort    = xpProAntwort;  // 0 = Standard (10/15), sonst fester Wert
  QUIZ.container       = document.getElementById(containerId);

  if (!QUIZ.container) {
    console.error(`[quiz] Container #${containerId} nicht gefunden.`);
    return;
  }

  // Tap-to-Translate für Fragetext aktivieren
  _quizTapToTranslateInit();

  // Herzen täglich zurücksetzen wenn nötig
  if (typeof herzenPruefen === 'function') herzenPruefen();

  frageAnzeigen(QUIZ.fragen[0]);
}

// ============================================================
//  frageAnzeigen
// ============================================================

/**
 * Rendert eine Frage vollständig in den Container.
 * @param {Object} frage
 */
function frageAnzeigen(frage) {
  if (!frage) { rundeBeenden(); return; }

  _typZustandReset();
  QUIZ.gesperrt = false;

  // Fortschrittsbalken
  const pct  = Math.round((QUIZ.index / QUIZ.fragen.length) * 100);
  const fill = document.getElementById('fortschrittFill');
  if (fill) fill.style.width = pct + '%';

  const c = QUIZ.container;
  c.innerHTML = '';

  // Nummer
  const numEl = document.createElement('div');
  numEl.className   = 'quiz-nummer';
  numEl.textContent = `${QUIZ.index + 1} / ${QUIZ.fragen.length}`;
  c.appendChild(numEl);

  // Frage-Text (Wörter als antippbare Spans für Tap-to-Translate)
  const frageEl = document.createElement('p');
  frageEl.className = 'quiz-frage';
  frageEl.appendChild(_quizFrageZuSpans(frage.frage));
  c.appendChild(frageEl);

  // Satz-Übersetzungs-Button (wenn Sprache ≠ Deutsch)
  const _frageSpr = typeof spracheLaden === 'function'
    ? (spracheLaden().sprache ?? 'de') : 'de';
  if (_frageSpr !== 'de') {
    c.appendChild(_uebersetzerBlock(() => frageEl.textContent, _frageSpr));
  }

  // Typ-Body
  const body = document.createElement('div');
  body.className = 'quiz-body';
  c.appendChild(body);

  const renderer = TYPEN_RENDERER[frage.typ];
  if (renderer) {
    renderer(frage, body);
  } else {
    body.innerHTML = `<p style="color:#e94560">Unbekannter Fragetyp: ${esc(frage.typ)}</p>`;
  }

  // Feedback-Bereich (leer, wird nach Antwort befüllt)
  const fbEl = document.createElement('div');
  fbEl.id        = 'quiz-feedback';
  fbEl.className = 'quiz-feedback';
  c.appendChild(fbEl);
}

// ============================================================
//  antwortPruefen
// ============================================================

/**
 * Validiert eine Antwort und zeigt Feedback.
 * @param {*}      antwort  – typabhängig (Zahl, String, Array …)
 * @param {Object} frage    – aktuelles Frage-Objekt
 */
function antwortPruefen(antwort, frage) {
  if (QUIZ.gesperrt) return;
  QUIZ.gesperrt = true;

  const pruefFn    = TYPEN_PRUEFER[frage.typ];
  const istRichtig = pruefFn ? pruefFn(antwort, frage) : false;

  // Buttons deaktivieren
  qsa('button', QUIZ.container).forEach(b => {
    if (b.id !== 'weiterBtn') b.disabled = true;
  });
  const input = qs('input', QUIZ.container);
  if (input) input.disabled = true;

  if (istRichtig) {
    QUIZ.richtig++;
    QUIZ._richtigInFolge++;

    // XP: Themen-Quiz hat festen Wert, sonst Streak-Bonus
    const xpMenge = QUIZ.xpProAntwort > 0
      ? QUIZ.xpProAntwort
      : (QUIZ.falsch === 0 && QUIZ.richtig > 1)
        ? (typeof XP_AKTION !== 'undefined' ? XP_AKTION.RICHTIGE_ANTWORT_STREAK : 15)
        : (typeof XP_AKTION !== 'undefined' ? XP_AKTION.RICHTIGE_ANTWORT : 10);

    let levelUp = false;
    if (typeof xpHinzufuegen === 'function') {
      levelUp = xpHinzufuegen(xpMenge).levelUp;
    }
    QUIZ.xpRunde += xpMenge;

    // Herz-Bonus: jede 3. richtige Antwort in Folge → +1 ❤️ (max 10)
    if (QUIZ._richtigInFolge === 3) {
      QUIZ._richtigInFolge = 0;  // Zähler für nächste Serie zurücksetzen
      if (typeof herzHinzufuegen === 'function') {
        const herzRes = herzHinzufuegen();
        if (herzRes.hinzugefuegt) {
          _streakHerzPopupZeigen();
          if (typeof avatarEmotion === 'function') avatarEmotion('celebrate');
          if (typeof soundRichtig === 'function') soundRichtig();
          herzAnzeigenAktualisieren();
        }
      }
    }

    if (typeof avatarEmotion === 'function') avatarEmotion('happy');
    // Sound: Streak-Bonus oder normales Richtig (Level-Up-Sound kommt aus xp.js)
    if (QUIZ.falsch === 0 && QUIZ.richtig > 1) {
      if (typeof soundStreakBonus === 'function') soundStreakBonus();
    } else {
      if (typeof soundRichtig === 'function') soundRichtig();
    }
    feedbackZeigen(true, frage.erklaerung ?? '', xpMenge, levelUp);
    herzAnzeigenAktualisieren();

  } else {
    QUIZ.falsch++;
    QUIZ._richtigInFolge = 0;   // Streak zurücksetzen bei Fehler

    let herzNachher  = 6;
    let rundeVerloren = false;
    if (typeof herzVerlieren === 'function') {
      const res = herzVerlieren();
      herzNachher   = res.herzNachher;
      rundeVerloren = res.verloren;
    }

    if (typeof soundFalsch === 'function') soundFalsch();
    if (typeof avatarEmotion === 'function') {
      avatarEmotion(rundeVerloren ? 'cry' : 'sad');
    }

    // Richtige Antwort aufdecken
    _richtigeAntwortMarkieren(frage);
    feedbackZeigen(false, frage.erklaerung ?? '', 0, false, herzNachher, rundeVerloren);
    herzAnzeigenAktualisieren();
  }
}

// ── Richtige Antwort visuell hervorheben ───────────────────
function _richtigeAntwortMarkieren(frage) {
  switch (frage.typ) {
    case 'multiple_choice':
    case 'synonym_finden':
    case 'homonym_bedeutung': {
      qsa('.mc-btn', QUIZ.container).forEach((btn, i) => {
        if (i === frage.richtig) btn.classList.add('btn-korrekt');
      });
      break;
    }
    case 'richtig_falsch': {
      qsa('.rf-btn', QUIZ.container).forEach(btn => {
        const ist = btn.classList.contains('rf-richtig');
        if (ist === frage.richtig) btn.classList.add('btn-korrekt');
      });
      break;
    }
    case 'lueckentext':
    case 'steigerung_bilden': {
      const slot = document.getElementById('luecke-slot') ?? qs('input', QUIZ.container);
      if (slot) {
        slot.style.color      = '#e94560';
        const korrEl          = document.createElement('span');
        korrEl.className      = 'korrekt-hinweis';
        korrEl.textContent    = ` → ${frage.richtig}`;
        slot.after?.(korrEl) ?? slot.parentNode?.appendChild(korrEl);
      }
      break;
    }
    case 'satz_korrigieren': {
      qsa('.korr-wort', QUIZ.container).forEach(span => {
        const bereinigt = span.textContent.replace(/[.,!?;:]/g, '');
        if (bereinigt.toLowerCase() === frage.fehlerWort.toLowerCase()) {
          span.classList.add('btn-korrekt');
        }
      });
      break;
    }
    case 'reihenfolge':
    case 'steigerung_ordnen': {
      const ziel = document.getElementById('reihe-ziel');
      if (ziel) {
        ziel.innerHTML = '';
        frage.richtig.forEach(w => {
          const span       = document.createElement('span');
          span.className   = 'reihe-chip btn-korrekt';
          span.textContent = w;
          ziel.appendChild(span);
        });
      }
      break;
    }
    default:
      break;
  }
}

// ============================================================
//  feedbackZeigen
// ============================================================

function feedbackZeigen(richtig, erklaerung, xp, levelUp, herzNachher = 5, rundeVerloren = false) {
  const fb = document.getElementById('quiz-feedback');
  if (!fb) return;

  const klasse  = richtig ? 'feedback-richtig' : 'feedback-falsch';
  const xpBadge = richtig ? `<span class="fb-xp">+${xp} XP${levelUp ? ' 🎉 Level Up!' : ''}</span>` : '';
  const herzInfo = !richtig
    ? `<span class="fb-herz">❤️ ${herzNachher} verbleibend</span>`
    : '';

  fb.className = `quiz-feedback ${klasse} aktiv`;
  fb.innerHTML = `
    <div class="fb-kopf">
      <span class="fb-symbol">${richtig ? '✅' : '❌'}</span>
      <span class="fb-status">${richtig ? 'Richtig!' : 'Falsch!'}</span>
      <div class="fb-badges">${xpBadge}${herzInfo}</div>
    </div>
    ${erklaerung ? `<p class="fb-erklaerung">${esc(erklaerung)}</p>` : ''}
    ${rundeVerloren
      ? `<p class="fb-verloren">Keine Herzen mehr! Komm morgen wieder 💔</p>
         <button class="fb-weiter-btn" id="weiterBtn" onclick="window.location.href='app.html'">
           Zur Karte →
         </button>`
      : `<button class="fb-weiter-btn" id="weiterBtn">
           ${QUIZ.index + 1 >= QUIZ.fragen.length ? 'Ergebnis →' : 'Weiter →'}
         </button>`
    }`;

  if (!rundeVerloren) {
    document.getElementById('weiterBtn').addEventListener('click', naechsteFrage);
  }
}

// ============================================================
//  naechsteFrage / rundeBeenden
// ============================================================

function naechsteFrage() {
  QUIZ.index++;
  if (QUIZ.index >= QUIZ.fragen.length) {
    rundeBeenden();
  } else {
    frageAnzeigen(QUIZ.fragen[QUIZ.index]);
  }
}

function rundeBeenden() {
  const gesamt  = QUIZ.fragen.length;
  const pct     = gesamt > 0 ? Math.round((QUIZ.richtig / gesamt) * 100) : 0;
  const sterne  = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0;
  const sternStr = '⭐'.repeat(sterne) + '☆'.repeat(3 - sterne);

  // Bonus-XP für Abschluss
  if (typeof xpFuerAktion === 'function') xpFuerAktion('QUIZ_ABGESCHLOSSEN');
  QUIZ.xpRunde += 25;

  // Streak aktualisieren
  if (typeof streakAktualisieren === 'function') streakAktualisieren();

  // Fortschritt speichern (Sterne + Welt-Freischaltung) – nicht im Themen-Quiz
  if (!QUIZ.xpProAntwort && typeof fortschrittLaden === 'function') {
    const fortschritt = fortschrittLaden();
    const weltIdx     = QUIZ.weltNr - 1;
    if (weltIdx >= 0 && weltIdx < 5) {
      const fs = fortschritt[weltIdx];
      fs.stars = Math.max(fs.stars ?? 0, sterne);
      if (sterne > 0) fs.completed = true;
      if (sterne >= 2) {
        fs.testPassed = true;
        if (weltIdx + 1 < 5) fortschritt[weltIdx + 1].unlocked = true;
        if (typeof soundTestBestanden === 'function') soundTestBestanden();
      }
      fortschrittSpeichern(fortschritt);
    }
  }

  // Achievements prüfen
  if (typeof achievementsPruefen === 'function') {
    achievementsPruefen({ quizAbgeschlossen: true, pct });
  }

  if (typeof avatarEmotion === 'function') {
    avatarEmotion(sterne === 3 ? 'party' : sterne >= 2 ? 'celebrate' : sterne === 1 ? 'happy' : 'sad');
  }

  const fill = document.getElementById('fortschrittFill');
  if (fill) fill.style.width = '100%';

  const c = QUIZ.container;
  c.innerHTML = `
    <div class="ergebnis-screen">
      <div class="ergebnis-sterne" aria-label="${sterne} von 3 Sternen">${sternStr}</div>
      <h2 class="ergebnis-titel">${esc(_ergebnisText(pct))}</h2>
      <p class="ergebnis-pct">${pct}% richtig</p>
      <div class="ergebnis-stats">
        <div class="stat-zeile stat-ok">✅ ${QUIZ.richtig} richtig</div>
        <div class="stat-zeile stat-fail">❌ ${QUIZ.falsch} falsch</div>
        <div class="stat-zeile stat-xp">⚡ +${QUIZ.xpRunde} XP</div>
      </div>
      <div class="ergebnis-aktionen">
        <button class="btn-welt"    id="btnWelt">${QUIZ.xpProAntwort ? '← Zu den Themen' : '← Zur Karte'}</button>
        <button class="btn-nochmal" id="btnNochmal">Nochmal 🔄</button>
      </div>
    </div>`;

  document.getElementById('btnWelt').addEventListener('click',
    () => { window.location.href = QUIZ.xpProAntwort ? 'themen.html' : 'app.html'; });

  document.getElementById('btnNochmal').addEventListener('click', () => {
    QUIZ.index   = 0;
    QUIZ.richtig = 0;
    QUIZ.falsch  = 0;
    QUIZ.xpRunde = 0;
    frageAnzeigen(QUIZ.fragen[0]);
  });
}

function _ergebnisText(pct) {
  if (pct === 100) return 'Perfekt! 🏆';
  if (pct >= 80)   return 'Super gemacht! 🎉';
  if (pct >= 60)   return 'Gut! Weiter so 💪';
  if (pct >= 30)   return 'Nicht schlecht 🙂';
  return 'Üb weiter, du schaffst das! 📚';
}

// ============================================================
//  TYPEN_RENDERER
// ============================================================

const TYPEN_RENDERER = {

  // 1. Multiple Choice ─────────────────────────────────────────
  multiple_choice(frage, body) {
    const grid = document.createElement('div');
    grid.className = 'mc-grid';
    frage.optionen.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className   = 'mc-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => antwortPruefen(i, frage));
      grid.appendChild(btn);
    });
    body.appendChild(grid);
  },

  // 2. Lückentext ──────────────────────────────────────────────
  lueckentext(frage, body) {
    const satzEl = document.createElement('p');
    satzEl.className = 'luecken-satz';

    if (frage.optionen?.length) {
      // Klick-Variante
      satzEl.innerHTML = esc(frage.satz).replace(
        '___', '<span class="luecke-slot" id="luecke-slot">___</span>'
      );
      body.appendChild(satzEl);

      const grid = document.createElement('div');
      grid.className = 'mc-grid';
      frage.optionen.forEach(opt => {
        const btn = document.createElement('button');
        btn.className   = 'mc-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
          const slot = document.getElementById('luecke-slot');
          if (slot) slot.textContent = opt;
          antwortPruefen(opt, frage);
        });
        grid.appendChild(btn);
      });
      body.appendChild(grid);

    } else {
      // Tipp-Variante
      satzEl.innerHTML = esc(frage.satz).replace(
        '___',
        '<input id="luecke-input" class="luecke-input" type="text" ' +
        'placeholder="Deine Antwort …" autocomplete="off" spellcheck="false" />'
      );
      body.appendChild(satzEl);

      const confirm = document.createElement('button');
      confirm.className   = 'mc-btn submit-btn';
      confirm.textContent = 'Prüfen ✓';
      confirm.addEventListener('click', () => {
        const val = (qs('#luecke-input')?.value ?? '').trim();
        antwortPruefen(val, frage);
      });
      body.appendChild(confirm);

      setTimeout(() => {
        const inp = qs('#luecke-input');
        if (!inp) return;
        inp.addEventListener('keydown', e => { if (e.key === 'Enter') confirm.click(); });
        inp.focus();
      }, 50);
    }
  },

  // 3. Richtig / Falsch ────────────────────────────────────────
  richtig_falsch(frage, body) {
    if (frage.aussage) {
      const box = document.createElement('div');
      box.className   = 'aussage-box';
      box.textContent = frage.aussage;
      body.appendChild(box);
    }
    const grid = document.createElement('div');
    grid.className = 'rf-grid';
    [['✓ Richtig', true, 'rf-richtig'], ['✗ Falsch', false, 'rf-falsch']].forEach(([lbl, val, cls]) => {
      const btn = document.createElement('button');
      btn.className   = `rf-btn ${cls}`;
      btn.textContent = lbl;
      btn.addEventListener('click', () => antwortPruefen(val, frage));
      grid.appendChild(btn);
    });
    body.appendChild(grid);
  },

  // 4. Satz korrigieren ────────────────────────────────────────
  satz_korrigieren(frage, body) {
    const hint = document.createElement('p');
    hint.className   = 'typ-hinweis';
    hint.textContent = 'Tippe auf das falsche Wort:';
    body.appendChild(hint);

    const satzEl = document.createElement('div');
    satzEl.className = 'korr-satz';
    frage.satz.split(' ').forEach(wort => {
      const span       = document.createElement('span');
      span.className   = 'korr-wort';
      span.textContent = wort;
      span.tabIndex    = 0;
      const bereinigt  = wort.replace(/[.,!?;:»«]/g, '');
      const klick = () => {
        qsa('.korr-wort', satzEl).forEach(s => s.classList.remove('ausgewaehlt'));
        span.classList.add('ausgewaehlt');
        antwortPruefen(bereinigt, frage);
      };
      span.addEventListener('click', klick);
      span.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') klick(); });
      satzEl.appendChild(span);
      satzEl.appendChild(document.createTextNode(' '));
    });
    body.appendChild(satzEl);
  },

  // 5. Reihenfolge ─────────────────────────────────────────────
  reihenfolge(frage, body) {
    _renderReihenfolge(frage, body);
  },

  // 6. Mehrfachauswahl ─────────────────────────────────────────
  mehrfachauswahl(frage, body) {
    const hint = document.createElement('p');
    hint.className   = 'typ-hinweis';
    hint.textContent = 'Wähle alle richtigen Antworten:';
    body.appendChild(hint);

    const grid = document.createElement('div');
    grid.className = 'mc-grid';
    frage.optionen.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className   = 'mc-btn toggle-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (QUIZ.gesperrt) return;
        btn.classList.toggle('ausgewaehlt');
        const set = new Set(QUIZ._typ.gewaehlt);
        if (set.has(i)) set.delete(i); else set.add(i);
        QUIZ._typ.gewaehlt = [...set];
      });
      grid.appendChild(btn);
    });
    body.appendChild(grid);

    const confirm = document.createElement('button');
    confirm.className   = 'mc-btn submit-btn';
    confirm.textContent = 'Auswahl bestätigen ✓';
    confirm.addEventListener('click', () =>
      antwortPruefen([...QUIZ._typ.gewaehlt].sort((a, b) => a - b), frage)
    );
    body.appendChild(confirm);
  },

  // 7. Synonym finden ──────────────────────────────────────────
  synonym_finden(frage, body) {
    TYPEN_RENDERER.multiple_choice(frage, body);
  },

  // 8. Synonym verbinden ───────────────────────────────────────
  synonym_verbinden(frage, body) {
    const hint = document.createElement('p');
    hint.className   = 'typ-hinweis';
    hint.textContent = 'Verbinde die Paare: links → rechts';
    body.appendChild(hint);

    const rechteGemischt = mischen(frage.paare.map(p => p[1]));
    const wrap = document.createElement('div');
    wrap.className = 'verbinden-wrap';

    const linksEl  = document.createElement('div');
    linksEl.className = 'verbinden-spalte';
    frage.paare.map(p => p[0]).forEach(wort => {
      const btn = document.createElement('button');
      btn.className    = 'verbinden-btn links-btn';
      btn.textContent  = wort;
      btn.dataset.wort = wort;
      btn.tabIndex     = 0;
      btn.addEventListener('click', () => _verbindenKlick('links', wort, btn, frage));
      linksEl.appendChild(btn);
    });

    const rechtsEl = document.createElement('div');
    rechtsEl.className = 'verbinden-spalte';
    rechteGemischt.forEach(wort => {
      const btn = document.createElement('button');
      btn.className    = 'verbinden-btn rechts-btn';
      btn.textContent  = wort;
      btn.dataset.wort = wort;
      btn.tabIndex     = 0;
      btn.addEventListener('click', () => _verbindenKlick('rechts', wort, btn, frage));
      rechtsEl.appendChild(btn);
    });

    wrap.appendChild(linksEl);
    wrap.appendChild(rechtsEl);
    body.appendChild(wrap);
  },

  // 9. Homonym – Bedeutung im Kontext ──────────────────────────
  homonym_bedeutung(frage, body) {
    const kontext = document.createElement('div');
    kontext.className = 'kontext-satz';
    kontext.textContent = `„${frage.satz}"`;
    body.appendChild(kontext);
    TYPEN_RENDERER.multiple_choice(frage, body);
  },

  // 10. Steigerung bilden ──────────────────────────────────────
  steigerung_bilden(frage, body) {
    const basis = document.createElement('div');
    basis.className = 'steig-basis';
    basis.innerHTML = `Basisform: <strong>${esc(frage.wort)}</strong>`;
    body.appendChild(basis);

    const hint = document.createElement('p');
    hint.className   = 'typ-hinweis';
    hint.textContent = frage.form === 'komparativ'
      ? 'Bilde den Komparativ:' : 'Bilde den Superlativ:';
    body.appendChild(hint);

    const input = document.createElement('input');
    input.id          = 'luecke-input';
    input.className   = 'luecke-input block-input';
    input.type        = 'text';
    input.placeholder = 'Deine Antwort …';
    input.autocomplete = 'off';
    input.spellcheck  = false;
    body.appendChild(input);

    const confirm = document.createElement('button');
    confirm.className   = 'mc-btn submit-btn';
    confirm.textContent = 'Prüfen ✓';
    confirm.addEventListener('click', () =>
      antwortPruefen(input.value.trim(), frage)
    );
    body.appendChild(confirm);

    input.addEventListener('keydown', e => { if (e.key === 'Enter') confirm.click(); });
    setTimeout(() => input.focus(), 50);
  },

  // 11. Steigerung ordnen ──────────────────────────────────────
  steigerung_ordnen(frage, body) {
    const hint = document.createElement('p');
    hint.className   = 'typ-hinweis';
    hint.textContent = 'Sortiere: Grundform → Komparativ → Superlativ';
    body.appendChild(hint);
    _renderReihenfolge(frage, body);
  },
};

// ============================================================
//  Reihenfolge-Renderer (Typ 5 & 11)
// ============================================================

function _renderReihenfolge(frage, body) {
  // Zielreihe
  const zielEl = document.createElement('div');
  zielEl.id        = 'reihe-ziel';
  zielEl.className = 'reihe-ziel';
  const platz       = document.createElement('span');
  platz.className   = 'reihe-platz';
  platz.textContent = '…';
  zielEl.appendChild(platz);
  body.appendChild(zielEl);

  // Quelle
  const quelleEl = document.createElement('div');
  quelleEl.id        = 'reihe-quelle';
  quelleEl.className = 'reihe-quelle';
  mischen(frage.woerter).forEach(wort => {
    const chip = document.createElement('button');
    chip.className   = 'wort-chip';
    chip.textContent = wort;
    chip.tabIndex    = 0;
    chip.addEventListener('click', () => _reiheKlick(chip, wort, frage));
    quelleEl.appendChild(chip);
  });
  body.appendChild(quelleEl);
}

function _reiheKlick(chip, wort, frage) {
  if (QUIZ.gesperrt) return;
  chip.classList.add('verwendet');
  chip.disabled = true;
  QUIZ._typ.gewaehlt.push(wort);

  const zielEl = document.getElementById('reihe-ziel');
  if (zielEl) {
    qs('.reihe-platz', zielEl)?.remove();
    const span       = document.createElement('span');
    span.className   = 'reihe-chip';
    span.textContent = wort;
    zielEl.appendChild(span);
  }

  if (QUIZ._typ.gewaehlt.length === frage.woerter.length) {
    antwortPruefen([...QUIZ._typ.gewaehlt], frage);
  }
}

// ============================================================
//  Synonym-Verbinden Logik
// ============================================================

function _verbindenKlick(seite, wort, btn, frage) {
  if (QUIZ.gesperrt) return;
  if (btn.classList.contains('verbunden')) return;

  if (seite === 'links') {
    qsa('.links-btn.aktiv', QUIZ.container).forEach(b => b.classList.remove('aktiv'));
    QUIZ._typ.linksAktiv = wort;
    btn.classList.add('aktiv');
    return;
  }

  // Rechts geklickt
  if (!QUIZ._typ.linksAktiv) return;
  const linksWort = QUIZ._typ.linksAktiv;
  const istPaar   = frage.paare.some(p => p[0] === linksWort && p[1] === wort);

  if (istPaar) {
    // Richtiges Paar
    QUIZ._typ.verbunden.push([linksWort, wort]);
    qsa(`.links-btn[data-wort="${CSS.escape(linksWort)}"]`, QUIZ.container).forEach(b => {
      b.classList.remove('aktiv');
      b.classList.add('verbunden', 'verbunden-ok');
      b.disabled = true;
    });
    btn.classList.add('verbunden', 'verbunden-ok');
    btn.disabled = true;
    QUIZ._typ.linksAktiv = null;

    if (QUIZ._typ.verbunden.length === frage.paare.length) {
      antwortPruefen(QUIZ._typ.verbunden, frage);
    }
  } else {
    // Falsches Paar
    btn.classList.add('verbunden-err');
    qsa('.links-btn.aktiv', QUIZ.container).forEach(b => b.classList.add('verbunden-err'));
    if (typeof herzVerlieren === 'function') herzVerlieren();
    if (typeof avatarEmotion === 'function') avatarEmotion('sad');

    setTimeout(() => {
      qsa('.verbunden-err', QUIZ.container).forEach(b => {
        b.classList.remove('verbunden-err', 'aktiv');
      });
      QUIZ._typ.linksAktiv = null;
    }, 700);
  }
}

// ============================================================
//  TYPEN_PRUEFER
// ============================================================

const TYPEN_PRUEFER = {
  multiple_choice:   (a, f) => a === f.richtig,
  lueckentext:       (a, f) => a.toLowerCase() === String(f.richtig).toLowerCase(),
  richtig_falsch:    (a, f) => a === f.richtig,
  satz_korrigieren:  (a, f) => a.toLowerCase() === f.fehlerWort.toLowerCase(),
  reihenfolge:       (a, f) => JSON.stringify(a) === JSON.stringify(f.richtig),
  mehrfachauswahl:   (a, f) => JSON.stringify(a) === JSON.stringify([...f.richtig].sort((x,y)=>x-y)),
  synonym_finden:    (a, f) => a === f.richtig,
  synonym_verbinden: (a, f) => a.length === f.paare.length,  // Paare live geprüft
  homonym_bedeutung: (a, f) => a === f.richtig,
  steigerung_bilden: (a, f) => a.toLowerCase() === f.richtig.toLowerCase(),
  steigerung_ordnen: (a, f) => JSON.stringify(a) === JSON.stringify(f.richtig),
};

// ============================================================
//  Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    quizStarten,
    frageAnzeigen,
    antwortPruefen,
    naechsteFrage,
    rundeBeenden,
    herzAnzeigenAktualisieren,
    TYPEN_RENDERER,
    TYPEN_PRUEFER,
  };
}
