// ============================================================
//  tutorial.js – Kombiniertes Onboarding Tutorial
//  Teil 1: Intro Slides (index.html)
//  Teil 2: Tooltip Tour (app.html)
// ============================================================

(function () {
  'use strict';

  var TUTORIAL_KEY = 'dt_tutorial';
  var _cleanup = null;

  // ── CSS injizieren ──────────────────────────────────────────
  var _css = document.createElement('style');
  _css.textContent = `
    /* ── Overlay ──────────────────────────────────────────── */
    .tut-overlay {
      position: fixed; inset: 0; z-index: 9990;
      background: rgba(0,0,0,.82);
      transition: opacity .3s;
    }

    /* ── Click-Blocker ────────────────────────────────────── */
    .tut-blocker {
      position: fixed; inset: 0; z-index: 9990;
    }

    /* ── Spotlight ─────────────────────────────────────────── */
    .tut-spot {
      position: fixed; z-index: 9991;
      border-radius: 12px;
      box-shadow: 0 0 0 9999px rgba(0,0,0,.75);
      transition: top .4s, left .4s, width .4s, height .4s, opacity .3s;
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      pointer-events: none;
    }

    /* ── Slide Container ──────────────────────────────────── */
    .tut-slide-container {
      position: fixed; inset: 0; z-index: 9992;
      display: flex; align-items: center; justify-content: center;
      padding: 1rem;
    }

    .tut-slide {
      background: #16213e;
      border: 1.5px solid rgba(255,255,255,.12);
      border-radius: 20px;
      padding: 2rem 1.8rem 1.5rem;
      width: 100%;
      max-width: 460px;
      color: #eaeaea;
      box-shadow: 0 20px 60px rgba(0,0,0,.7);
      font-family: 'Segoe UI', system-ui, sans-serif;
      text-align: center;
      animation: tut-slide-in .35s ease;
      position: relative;
    }
    @keyframes tut-slide-in {
      from { opacity: 0; transform: translateY(20px) scale(.95); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .tut-slide-emoji {
      font-size: 4rem;
      margin-bottom: .6rem;
      line-height: 1.2;
    }

    .tut-slide-title {
      font-size: 1.3rem;
      font-weight: 800;
      margin-bottom: .6rem;
      line-height: 1.3;
    }

    .tut-slide-text {
      font-size: .95rem;
      line-height: 1.6;
      color: #b0b8c8;
      margin-bottom: 1rem;
    }

    .tut-slide-bosses {
      display: flex;
      justify-content: center;
      gap: .6rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }
    .tut-boss-chip {
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 10px;
      padding: .35rem .6rem;
      font-size: .78rem;
      font-weight: 600;
      display: flex; align-items: center; gap: .3rem;
      white-space: nowrap;
    }

    .tut-slide-highlight {
      margin-top: .5rem;
      padding: .6rem 1rem;
      background: rgba(168,85,247,.1);
      border: 1px solid rgba(168,85,247,.25);
      border-radius: 12px;
      font-size: .88rem;
      color: #c084fc;
      margin-bottom: 1rem;
    }

    /* ── Skip Button ──────────────────────────────────────── */
    .tut-skip {
      position: absolute;
      top: .8rem; right: .8rem;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 99px;
      color: #8892a4;
      font-size: .75rem;
      font-weight: 600;
      padding: .3rem .7rem;
      cursor: pointer;
      transition: all .15s;
    }
    .tut-skip:hover { background: rgba(255,255,255,.12); color: #eaeaea; }

    /* ── Navigation ────────────────────────────────────────── */
    .tut-nav {
      display: flex; align-items: center;
      justify-content: space-between; gap: .5rem;
      border-top: 1px solid rgba(255,255,255,.07);
      padding-top: .75rem;
      margin-top: .5rem;
    }

    .tut-btn {
      padding: .55rem 1rem; border: none; border-radius: 12px;
      font-size: .88rem; font-weight: 700; cursor: pointer;
      min-height: 42px; min-width: 80px;
      transition: all .15s;
      display: inline-flex; align-items: center; justify-content: center;
    }
    .tut-btn:hover { transform: translateY(-1px); }
    .tut-btn:active { transform: scale(.97); }

    .tut-btn-back {
      background: rgba(255,255,255,.07); color: #8892a4;
      border: 1px solid rgba(255,255,255,.1);
    }
    .tut-btn-back:hover { background: rgba(255,255,255,.12); color: #eaeaea; }

    .tut-btn-next {
      background: linear-gradient(135deg, #a855f7, #e94560); color: #fff;
    }
    .tut-btn-next:hover { opacity: .9; }

    .tut-btn-go {
      background: linear-gradient(135deg, #e94560, #a855f7); color: #fff;
      font-size: .95rem; padding: .65rem 1.4rem;
      box-shadow: 0 4px 18px rgba(233,69,96,.3);
    }

    .tut-btn-finish {
      background: linear-gradient(135deg, #0fd4c8, #a855f7); color: #fff;
      font-size: .95rem; padding: .65rem 1.4rem;
      box-shadow: 0 4px 18px rgba(15,212,200,.3);
    }

    /* ── Fortschritts-Punkte ───────────────────────────────── */
    .tut-dots { display: flex; gap: .25rem; justify-content: center; }
    .tut-dot {
      width: 8px; height: 8px; border-radius: 99px;
      background: rgba(255,255,255,.15); transition: all .3s;
      cursor: pointer;
    }
    .tut-dot:hover { background: rgba(255,255,255,.3); }
    .tut-dot.on { width: 20px; background: #a855f7; }

    /* ── Tooltip (Tour) ───────────────────────────────────── */
    .tut-tip {
      position: fixed; z-index: 9992;
      background: #16213e;
      border: 1.5px solid rgba(255,255,255,.15);
      border-radius: 16px;
      padding: 1.2rem 1.4rem 1rem;
      min-width: 300px;
      max-width: min(420px, 90vw);
      color: #eaeaea;
      box-shadow: 0 16px 48px rgba(0,0,0,.6);
      font-family: 'Segoe UI', system-ui, sans-serif;
      animation: tut-tip-in .3s ease;
    }
    @keyframes tut-tip-in {
      from { opacity: 0; transform: translateY(8px) scale(.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .tut-tip-text {
      font-size: .95rem; line-height: 1.6;
      margin-bottom: .8rem;
    }

    /* ── Hilfe-Button ─────────────────────────────────────── */
    .hilfe-btn {
      background: none;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 99px; color: #8892a4;
      font-size: .95rem; font-weight: 800;
      padding: .4rem .65rem;
      min-width: 40px; min-height: 40px;
      display: inline-flex; align-items: center; justify-content: center;
      cursor: pointer; transition: color .15s, border-color .15s;
    }
    .hilfe-btn:hover { color: #eaeaea; border-color: rgba(255,255,255,.3); }

    /* ── Responsive ────────────────────────────────────────── */
    @media (max-width: 380px) {
      .tut-slide { padding: 1.4rem 1.2rem 1rem; }
      .tut-slide-emoji { font-size: 3rem; }
      .tut-slide-title { font-size: 1.1rem; }
      .tut-slide-text { font-size: .88rem; }
      .tut-tip { min-width: 260px; padding: 1rem 1.1rem .8rem; }
      .tut-tip-text { font-size: .88rem; }
      .tut-btn { min-width: 66px; font-size: .82rem; }
    }
  `;
  document.head.appendChild(_css);

  // ── Helfer ──────────────────────────────────────────────────

  function _seite() {
    var p = location.pathname;
    if (p.includes('app.html')) return 'app';
    if (p.includes('index.html') || p.endsWith('/') || p === '') return 'index';
    return 'andere';
  }

  function _esc(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function _aufraumen() {
    if (_cleanup) { _cleanup(); _cleanup = null; }
    var sel = '.tut-overlay,.tut-blocker,.tut-spot,.tut-tip,.tut-slide-container';
    var rest = document.querySelectorAll(sel);
    for (var i = 0; i < rest.length; i++) rest[i].remove();
  }

  // ── Gewählten Avatar-Emoji finden ──────────────────────────
  function _avatarEmoji() {
    var map = {
      fuchs:'🦊', frosch:'🐸', panda:'🐼', waschbaer:'🦝', wolf:'🐺',
      koala:'🐨', hund:'🐶', affe:'🐵', loewe:'🦁', tiger:'🐯',
      baer:'🐻', katze:'🐱', kuh:'🐮', schlange:'🐍', papagei:'🦜',
    };
    try {
      var sel = document.querySelector('.avatar-btn.selected');
      if (sel) return sel.textContent.trim();
      if (typeof spielerLaden === 'function') {
        var s = spielerLaden();
        if (s.avatar && map[s.avatar]) return map[s.avatar];
      }
    } catch (_) {}
    return '🦊';
  }

  // ════════════════════════════════════════════════════════════
  //  TEIL 1 – Intro Slides (index.html)
  // ════════════════════════════════════════════════════════════

  var SLIDES = [
    {
      emoji: function() { return _avatarEmoji(); },
      title: 'Willkommen beim Deutsch Trainer! 🎉',
      text: 'Lerne Deutsch – Schritt für Schritt, Level für Level!',
    },
    {
      emoji: '🌐',
      title: 'Wähle deine Sprache!',
      text: 'Du sprichst auch Persisch, Türkisch oder Arabisch? Stelle hier deine Sprache ein! Dann werden dir Erklärungen und Wörter in deiner Sprache angezeigt.',
      spotlight: '#langGrid',
    },
    {
      emoji: '🌍',
      title: '5 Lernwelten warten auf dich!',
      text: 'Jede Welt hat 5 Unterwelten und einen Bosskampf am Ende. Arbeite dich durch alle Welten und besiege am Ende den Deutsch-Drachen! 🐉',
    },
    {
      emoji: '⭐',
      title: 'Sammle XP und steige auf!',
      text: 'Je mehr du übst, desto höher dein Level! Schalte dabei coole Accessoires frei — Hüte, Brillen und Abzeichen für deinen Avatar!',
    },
    {
      emoji: '❤️',
      title: 'Pass auf deine Herzen auf!',
      text: 'Bei falschen Antworten verlierst du ein Herz. Aber: 3 richtige Antworten hintereinander = 1 Herz zurück!',
    },
    {
      emoji: '👺',
      title: 'Besiege die Bosse!',
      text: 'Jeder Boss hat 15 HP. Richtige Antwort = -1 HP für den Boss. Falsche Antwort = du verlierst ein Herz. 0 Herzen = Boss gewinnt!',
      bosses: [
        { icon: '👺', name: 'Wort-Kobold' },
        { icon: '🧌', name: 'Grammatik-Troll' },
        { icon: '🧙‍♀️', name: 'Rechtschreib-Hexe' },
        { icon: '🗿', name: 'Text-Golem' },
        { icon: '🐉', name: 'Deutsch-Drache' },
      ],
    },
    {
      emoji: '📚',
      title: 'Themen-Quiz & Leaderboard',
      text: '24 Themen-Quizze kannst du jederzeit spielen — perfekt zum Üben! Im Leaderboard siehst du die Top 10. Wer hat die meisten XP? 🏆',
    },
    {
      emoji: '🌍',
      title: 'Wähle deine Welt und leg los!',
      text: 'Schalte neue Welten frei je besser du wirst!',
      isLast: true,
    },
  ];

  function _startSlides() {
    _aufraumen();

    var aktuell = 0;

    var overlay = document.createElement('div');
    overlay.className = 'tut-overlay';

    var spot = document.createElement('div');
    spot.className = 'tut-spot';
    spot.style.opacity = '0';

    var container = document.createElement('div');
    container.className = 'tut-slide-container';

    document.body.appendChild(overlay);
    document.body.appendChild(spot);
    document.body.appendChild(container);

    function rendern() {
      var s = SLIDES[aktuell];

      // Spotlight
      if (s.spotlight) {
        var el = document.querySelector(s.spotlight);
        if (el) {
          var r = el.getBoundingClientRect();
          var pad = 10;
          spot.style.top = (r.top - pad) + 'px';
          spot.style.left = (r.left - pad) + 'px';
          spot.style.width = (r.width + pad * 2) + 'px';
          spot.style.height = (r.height + pad * 2) + 'px';
          spot.style.opacity = '1';
          overlay.style.background = 'transparent';
        }
      } else {
        spot.style.opacity = '0';
        overlay.style.background = 'rgba(0,0,0,.82)';
      }

      var emoji = typeof s.emoji === 'function' ? s.emoji() : s.emoji;

      var html = '<div class="tut-slide">';

      // Skip Button nur auf erstem Slide
      if (aktuell === 0) {
        html += '<button class="tut-skip" id="_tSkip">Tutorial überspringen</button>';
      }

      html += '<div class="tut-slide-emoji">' + emoji + '</div>';
      html += '<div class="tut-slide-title">' + _esc(s.title) + '</div>';
      html += '<div class="tut-slide-text">' + _esc(s.text) + '</div>';

      // Bosse
      if (s.bosses) {
        html += '<div class="tut-slide-bosses">';
        for (var b = 0; b < s.bosses.length; b++) {
          html += '<div class="tut-boss-chip">' + s.bosses[b].icon + ' ' + _esc(s.bosses[b].name) + '</div>';
        }
        html += '</div>';
      }

      // Navigation
      html += '<div class="tut-nav">';

      // Zurück
      html += aktuell > 0
        ? '<button class="tut-btn tut-btn-back" id="_tZ">← Zurück</button>'
        : '<div></div>';

      // Dots
      html += '<div class="tut-dots">';
      for (var i = 0; i < SLIDES.length; i++) {
        html += '<div class="tut-dot' + (i === aktuell ? ' on' : '') + '" data-i="' + i + '"></div>';
      }
      html += '</div>';

      // Weiter / Los geht's
      if (s.isLast) {
        html += '<button class="tut-btn tut-btn-go" id="_tW">Los geht\'s! 🚀</button>';
      } else {
        html += '<button class="tut-btn tut-btn-next" id="_tW">Weiter →</button>';
      }

      html += '</div>'; // nav
      html += '</div>'; // slide

      container.innerHTML = html;

      // Events
      var wBtn = document.getElementById('_tW');
      var zBtn = document.getElementById('_tZ');
      var skipBtn = document.getElementById('_tSkip');

      if (wBtn) wBtn.onclick = function () {
        if (s.isLast) {
          localStorage.setItem(TUTORIAL_KEY, 'slides_done');
          schliessen();
        } else {
          aktuell++;
          rendern();
        }
      };

      if (zBtn) zBtn.onclick = function () {
        if (aktuell > 0) { aktuell--; rendern(); }
      };

      if (skipBtn) skipBtn.onclick = function () {
        localStorage.setItem(TUTORIAL_KEY, 'true');
        schliessen();
      };

      // Dot-Navigation
      var dots = container.querySelectorAll('.tut-dot');
      dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
          aktuell = parseInt(dot.dataset.i, 10);
          rendern();
        });
      });
    }

    // Keyboard
    function keyHandler(e) {
      if (e.key === 'Escape') {
        localStorage.setItem(TUTORIAL_KEY, 'true');
        schliessen();
      }
      if (e.key === 'ArrowRight') {
        if (aktuell < SLIDES.length - 1) { aktuell++; rendern(); }
      }
      if (e.key === 'ArrowLeft') {
        if (aktuell > 0) { aktuell--; rendern(); }
      }
    }
    document.addEventListener('keydown', keyHandler);

    function schliessen() {
      document.removeEventListener('keydown', keyHandler);
      overlay.remove();
      spot.remove();
      container.remove();
      _cleanup = null;
    }

    _cleanup = schliessen;
    rendern();
  }

  // ════════════════════════════════════════════════════════════
  //  TEIL 2 – Tooltip Tour (app.html)
  // ════════════════════════════════════════════════════════════

  function _weltOeffnen() {
    var w = document.querySelector('.welt-akkordeon:first-child');
    if (w && !w.classList.contains('offen')) {
      var k = w.querySelector('.welt-kopf:not(.disabled)');
      if (k) k.click();
    }
  }

  var TOUR_SCHRITTE = [
    {
      selektor: '.avatar-bubble',
      text: 'Das bist du! Passe deinen Avatar an und schalte Accessoires frei 🐾',
      pos: 'bottom',
    },
    {
      selektor: '.player-meta',
      text: 'Hier siehst du deine Erfahrungspunkte ⭐',
      pos: 'bottom',
    },
    {
      selektor: '.stat-chip.hearts',
      text: 'Deine Herzen – pass gut auf sie auf! 3er-Streak = +1 Herz ❤️',
      pos: 'bottom',
    },
    {
      selektor: '.stat-chip.streak',
      text: 'Spiele täglich für deinen Streak! 🔥',
      pos: 'bottom',
    },
    {
      selektor: '.welt-akkordeon:first-child .welt-kopf',
      text: 'Hier startest du – klicke auf Welt 1! 🌍',
      pos: 'bottom',
      vorbereiten: _weltOeffnen,
    },
    {
      selektor: '.bottom-nav .nav-item:nth-child(2)',
      text: '24 Themen-Quizze zum Üben – jederzeit spielbar! 📚',
      pos: 'top',
    },
    {
      selektor: '.bottom-nav .nav-item:nth-child(4)',
      text: 'Miss dich mit deinen Mitschülern – Top 10! 🏆',
      pos: 'top',
      isLast: true,
    },
  ];

  function _startTour() {
    _aufraumen();

    var aktuell = 0;

    var blocker = document.createElement('div');
    blocker.className = 'tut-blocker';

    var spot = document.createElement('div');
    spot.className = 'tut-spot';
    spot.style.opacity = '0';

    var tip = document.createElement('div');
    tip.className = 'tut-tip';
    tip.style.opacity = '0';

    document.body.appendChild(blocker);
    document.body.appendChild(spot);
    document.body.appendChild(tip);

    function zeigen() {
      var s = TOUR_SCHRITTE[aktuell];
      if (!s) {
        localStorage.setItem(TUTORIAL_KEY, 'true');
        schliessen();
        return;
      }

      if (s.vorbereiten) s.vorbereiten();

      // Animation
      tip.style.animation = 'none';
      void tip.offsetHeight;
      tip.style.animation = '';

      // Inhalt
      var html = '<div class="tut-tip-text">' + _esc(s.text) + '</div>';

      // Nav
      html += '<div class="tut-nav">';

      // Zurück
      html += aktuell > 0
        ? '<button class="tut-btn tut-btn-back" id="_tZ">← Zurück</button>'
        : '<div></div>';

      // Dots
      html += '<div class="tut-dots">';
      for (var i = 0; i < TOUR_SCHRITTE.length; i++) {
        html += '<div class="tut-dot' + (i === aktuell ? ' on' : '') + '"></div>';
      }
      html += '</div>';

      // Weiter / Beenden
      if (s.isLast) {
        html += '<button class="tut-btn tut-btn-finish" id="_tW">Tutorial beenden ✓</button>';
      } else {
        html += '<button class="tut-btn tut-btn-next" id="_tW">Weiter →</button>';
      }

      html += '</div>';
      tip.innerHTML = html;

      // Events
      var wBtn = document.getElementById('_tW');
      var zBtn = document.getElementById('_tZ');
      if (wBtn) wBtn.onclick = function () {
        if (s.isLast) {
          localStorage.setItem(TUTORIAL_KEY, 'true');
          schliessen();
        } else {
          aktuell++;
          zeigen();
        }
      };
      if (zBtn) zBtn.onclick = function () {
        if (aktuell > 0) { aktuell--; zeigen(); }
      };

      // Positionierung
      var el = document.querySelector(s.selektor);
      if (!el) { aktuell++; zeigen(); return; }

      el.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setTimeout(function () {
        var r = el.getBoundingClientRect();
        var pad = 8;

        // Spotlight
        spot.style.top = (r.top - pad) + 'px';
        spot.style.left = (r.left - pad) + 'px';
        spot.style.width = (r.width + pad * 2) + 'px';
        spot.style.height = (r.height + pad * 2) + 'px';
        spot.style.opacity = '1';

        // Tooltip messen
        tip.style.opacity = '0';
        tip.style.top = '0';
        tip.style.left = '0';
        var tr = tip.getBoundingClientRect();

        var gap = 14;
        var pos = s.pos || 'bottom';
        var oben = r.top - pad - gap;
        var unten = window.innerHeight - r.bottom - pad - gap;
        if (pos === 'top' && oben < tr.height + 10) pos = 'bottom';
        if (pos === 'bottom' && unten < tr.height + 10) pos = 'top';

        var tTop;
        if (pos === 'bottom') {
          tTop = r.bottom + pad + gap;
        } else {
          tTop = r.top - pad - gap - tr.height;
        }
        tTop = Math.max(8, Math.min(tTop, window.innerHeight - tr.height - 8));

        var tLeft = r.left + r.width / 2 - tr.width / 2;
        tLeft = Math.max(8, Math.min(tLeft, window.innerWidth - tr.width - 8));

        tip.style.top = tTop + 'px';
        tip.style.left = tLeft + 'px';
        tip.style.opacity = '1';
      }, 350);
    }

    // Keyboard
    function keyHandler(e) {
      if (e.key === 'Escape') {
        localStorage.setItem(TUTORIAL_KEY, 'true');
        schliessen();
      }
      if (e.key === 'ArrowRight') {
        if (aktuell < TOUR_SCHRITTE.length - 1) { aktuell++; zeigen(); }
        else { localStorage.setItem(TUTORIAL_KEY, 'true'); schliessen(); }
      }
      if (e.key === 'ArrowLeft') {
        if (aktuell > 0) { aktuell--; zeigen(); }
      }
    }
    document.addEventListener('keydown', keyHandler);

    // Resize
    var resizeTimer;
    function resizeHandler() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(zeigen, 150);
    }
    window.addEventListener('resize', resizeHandler);

    function schliessen() {
      document.removeEventListener('keydown', keyHandler);
      window.removeEventListener('resize', resizeHandler);
      blocker.remove();
      spot.remove();
      tip.remove();
      _cleanup = null;
    }

    _cleanup = schliessen;
    zeigen();
  }

  // ════════════════════════════════════════════════════════════
  //  Öffentliche API
  // ════════════════════════════════════════════════════════════

  // Tutorial manuell neu starten (Hilfe-Button)
  window.tutorialAnzeigen = function () {
    var seite = _seite();
    if (seite === 'app') {
      _startTour();
    } else if (seite === 'index') {
      _startSlides();
    } else {
      window.location.href = 'app.html?tour=1';
    }
  };

  // Automatische Initialisierung
  window.tutorialInit = function () {
    var seite = _seite();
    var state = localStorage.getItem(TUTORIAL_KEY);

    // URL-Parameter ?tour=1 (Hilfe-Button von anderer Seite)
    var params = new URLSearchParams(location.search);
    if (params.get('tour') === '1') {
      params.delete('tour');
      var neu = location.pathname + (params.toString() ? '?' + params.toString() : '');
      history.replaceState(null, '', neu);
      setTimeout(function () { _startTour(); }, 600);
      return;
    }

    // Tutorial bereits abgeschlossen
    if (state === 'true') return;

    // Slides wurden abgeschlossen → Tour auf app.html starten
    if (state === 'slides_done' && seite === 'app') {
      setTimeout(function () { _startTour(); }, 800);
      return;
    }

    // Erstbesuch: kein State vorhanden
    if (!state) {
      if (seite === 'index') {
        setTimeout(function () { _startSlides(); }, 800);
      }
      return;
    }
  };

})();
