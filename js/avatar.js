// ============================================================
//  avatar.js – Avatar-Anzeige & Emotions-System
//  Deutsch Trainer
//  Voraussetzung: avatar.css eingebunden
// ============================================================

// ── Tier-Emojis ───────────────────────────────────────────
const AVATAR_TIERE = {
  fuchs:     '🦊',
  frosch:    '🐸',
  panda:     '🐼',
  waschbaer: '🦝',
  wolf:      '🐺',
  koala:     '🐨',
  hund:      '🐶',
  affe:      '🐵',
  loewe:     '🦁',
  tiger:     '🐯',
  baer:      '🐻',
  katze:     '🐱',
  kuh:       '🐮',
  schlange:  '🐍',
  papagei:   '🦜',
  default:   '😊',
};

// ── Accessoires ────────────────────────────────────────────
const AVATAR_HUETE = {
  zylinder:  '🎩',
  cowboy:    '🤠',
  party:     '🎉',
  helm:      '⛑️',
  krone:     '👑',
  stahlhelm: '🪖',
  abschluss: '🎓',
};

const AVATAR_BRILLEN = {
  sonnenbrille: '🕶️',
  lesebrille:   '👓',
  schutzbrille: '🥽',
};

// ── Gültige Emotionen ──────────────────────────────────────
const EMOTIONEN = [
  'happy', 'sad', 'celebrate', 'shocked',
  'cool',  'sleepy', 'party',  'cry',
];

// ── Modul-Zustand ──────────────────────────────────────────
let _aktuellerContainer = null;   // zuletzt genutztes Wrap-Element
let _emotionTimer       = null;   // Timer für Auto-Reset nach einmaliger Emotion

// ============================================================
//  Hilfsfunktionen
// ============================================================

/**
 * Löst alle Emotion-Klassen von einem Element.
 * @param {HTMLElement} el
 */
function _emotionenEntfernen(el) {
  EMOTIONEN.forEach(e => el.classList.remove(`emotion-${e}`));
}

/**
 * Gibt den richtigen Emoji-String zurück (ID oder direkt als Emoji).
 * @param {string|null} wert   – z. B. "fuchs", "🦊", null
 * @param {Object}      tabelle – z. B. AVATAR_TIERE
 * @returns {string|null}
 */
function _aufloesen(wert, tabelle) {
  if (!wert) return null;
  if (tabelle[wert]) return tabelle[wert];   // ID-Auflösung
  return wert;                               // bereits Emoji / unbekannt
}

// ============================================================
//  avatarAnzeigen
// ============================================================

/**
 * Rendert den Avatar in einem Container-Element.
 *
 * @param {string}      tier      – Tier-ID (z. B. "fuchs") oder Emoji
 * @param {string|null} hut       – Hut-ID, Emoji oder null
 * @param {string|null} brille    – Brillen-ID, Emoji oder null
 * @param {Object}      optionen
 * @param {string}      [optionen.containerId='avatar-container']
 *                                – ID des Ziel-Elements im DOM
 * @param {string}      [optionen.groesse='']
 *                                – CSS-Größenklasse: 'avatar-sm' | 'avatar-md'
 *                                   | 'avatar-lg' | 'avatar-xl' | ''
 * @param {string}      [optionen.startEmotion='happy']
 *                                – Emotion beim ersten Anzeigen
 * @returns {HTMLElement|null}    – das Wrap-Element oder null bei Fehler
 */
function avatarAnzeigen(tier, hut = null, brille = null, optionen = {}) {
  const {
    containerId   = 'avatar-container',
    groesse       = '',
    startEmotion  = 'happy',
  } = optionen;

  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`[avatar] Container #${containerId} nicht gefunden.`);
    return null;
  }

  const tierEmoji    = _aufloesen(tier,   AVATAR_TIERE)   ?? AVATAR_TIERE.default;
  const hutEmoji     = _aufloesen(hut,    AVATAR_HUETE);
  const brilleEmoji  = _aufloesen(brille, AVATAR_BRILLEN);

  // Wrap-Element aufbauen
  const wrap = document.createElement('div');
  wrap.className = ['avatar-wrap', groesse].filter(Boolean).join(' ');
  wrap.setAttribute('role', 'img');
  wrap.setAttribute('aria-label', `Avatar: ${tier ?? 'default'}`);

  // Tier
  const tierEl = document.createElement('span');
  tierEl.className   = 'avatar-tier';
  tierEl.textContent = tierEmoji;
  tierEl.setAttribute('aria-hidden', 'true');
  wrap.appendChild(tierEl);

  // Hut (optional)
  if (hutEmoji) {
    const hutEl = document.createElement('span');
    hutEl.className   = 'avatar-hut';
    hutEl.textContent = hutEmoji;
    hutEl.setAttribute('aria-hidden', 'true');
    wrap.appendChild(hutEl);
  }

  // Brille (optional)
  if (brilleEmoji) {
    const brilleEl = document.createElement('span');
    brilleEl.className   = 'avatar-brille';
    brilleEl.textContent = brilleEmoji;
    brilleEl.setAttribute('aria-hidden', 'true');
    wrap.appendChild(brilleEl);
  }

  // Alten Inhalt ersetzen
  container.innerHTML = '';
  container.appendChild(wrap);
  _aktuellerContainer = wrap;

  // Startemotion abspielen
  if (startEmotion && EMOTIONEN.includes(startEmotion)) {
    avatarEmotion(startEmotion, { wrap });
  }

  return wrap;
}

// ============================================================
//  avatarEmotion
// ============================================================

/**
 * Setzt eine Emotion auf dem Avatar (CSS-Klasse + Auto-Reset).
 *
 * Einmalige Emotionen (happy, sad, celebrate, shocked, party, cry)
 * werden nach ihrer Animation automatisch entfernt.
 * Dauerhafte Emotionen (cool, sleepy) bleiben bis zur nächsten Änderung.
 *
 * @param {string}      emotion   – eine der 8 Emotionen
 * @param {Object}      optionen
 * @param {HTMLElement} [optionen.wrap]  – Ziel-Wrap-Element (Default: zuletzt erzeugtes)
 * @returns {boolean}  true = Emotion gesetzt, false = ungültig/kein Element
 */
function avatarEmotion(emotion, optionen = {}) {
  const wrap = optionen.wrap ?? _aktuellerContainer;

  if (!wrap) {
    console.warn('[avatar] avatarEmotion: kein Avatar-Element vorhanden.');
    return false;
  }

  if (!EMOTIONEN.includes(emotion)) {
    console.warn('[avatar] Unbekannte Emotion:', emotion);
    return false;
  }

  // Laufenden Timer stoppen
  if (_emotionTimer) {
    clearTimeout(_emotionTimer);
    _emotionTimer = null;
  }

  // Alle Emotionen entfernen und neu setzen
  // (Animation-Neustart durch kurzes void-Reflow)
  _emotionenEntfernen(wrap);
  void wrap.offsetWidth;             // Reflow erzwingen → Animation startet neu
  wrap.classList.add(`emotion-${emotion}`);

  // Einmalige Emotionen nach der Animation automatisch entfernen
  const DAUERND = ['cool', 'sleepy'];
  if (!DAUERND.includes(emotion)) {
    // Dauer aus der CSS-Animation abschätzen (als Fallback: 2,5 s)
    const animDauer = _animationsDauer(wrap);
    _emotionTimer = setTimeout(() => {
      _emotionenEntfernen(wrap);
      _emotionTimer = null;
    }, animDauer + 50);   // +50 ms Puffer
  }

  return true;
}

// ============================================================
//  avatarAccessoire
// ============================================================

/**
 * Ändert Hut oder Brille eines bestehenden Avatars ohne Neuaufbau.
 *
 * @param {'hut'|'brille'} typ  – welches Accessoire
 * @param {string|null}    wert – ID, Emoji oder null (= entfernen)
 * @param {HTMLElement}    [wrap] – Ziel-Wrap (Default: zuletzt erzeugtes)
 */
function avatarAccessoire(typ, wert, wrap = null) {
  const el = wrap ?? _aktuellerContainer;
  if (!el) return;

  const klasse  = typ === 'hut' ? 'avatar-hut' : 'avatar-brille';
  const tabelle = typ === 'hut' ? AVATAR_HUETE : AVATAR_BRILLEN;
  const emoji   = _aufloesen(wert, tabelle);

  let slot = el.querySelector(`.${klasse}`);

  if (!emoji) {
    // Entfernen
    if (slot) slot.remove();
    return;
  }

  if (!slot) {
    slot = document.createElement('span');
    slot.className = klasse;
    slot.setAttribute('aria-hidden', 'true');
    el.appendChild(slot);
  }

  slot.textContent = emoji;
}

// ============================================================
//  Hilfsfunktion: Animations-Dauer aus computed style lesen
// ============================================================

/**
 * Liest die tatsächliche CSS-Animations-Gesamtdauer (duration × iteration-count).
 * @param {HTMLElement} el
 * @returns {number} Millisekunden
 */
function _animationsDauer(el) {
  try {
    const style      = getComputedStyle(el);
    const dauer      = parseFloat(style.animationDuration)      || 0.6;
    const iterationen = style.animationIterationCount === 'infinite'
      ? 1
      : (parseFloat(style.animationIterationCount) || 1);
    return dauer * iterationen * 1000;
  } catch {
    return 2500;
  }
}

// ============================================================
//  Exports & Konstanten
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AVATAR_TIERE,
    AVATAR_HUETE,
    AVATAR_BRILLEN,
    EMOTIONEN,
    avatarAnzeigen,
    avatarEmotion,
    avatarAccessoire,
  };
}
