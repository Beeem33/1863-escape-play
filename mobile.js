/*
 * Touch controls + full screen for phones and tablets.
 *
 * Only activates on devices whose primary input is touch (no hover, coarse
 * pointer). On a desktop/laptop with a mouse this file does nothing, so the
 * PC version of the game is unchanged.
 *
 * The game exposes its input object as window.__escapeInput; the controls
 * below press and release the same key codes the keyboard would.
 */
(function () {
  'use strict';

  var isTouch =
    window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (!isTouch) return;

  var root = document.documentElement;
  root.classList.add('touch');

  // ---------------------------------------------------------------- helpers
  function el(tag, cls, text, parent) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }

  function input() {
    var i = window.__escapeInput;
    if (i && !i.__touchPatched) {
      // There is no mouse to capture on a phone; pointer lock would only
      // fail or, on some browsers, lock and then immediately pause the game.
      i.requestPointerLock = function () {};
      i.__touchPatched = true;
    }
    return i;
  }

  // Which managed key codes each control currently holds down.
  var MANAGED = ['KeyW', 'KeyS', 'KeyA', 'KeyD', 'ShiftLeft', 'KeyQ', 'Space'];
  var holds = { stick: {}, sprint: {}, lookBack: {}, jump: {} };

  function syncKeys() {
    var inp = input();
    if (!inp) return;
    MANAGED.forEach(function (code) {
      var want = false;
      for (var src in holds) if (holds[src][code]) want = true;
      if (want) inp.down.add(code);
      else inp.down.delete(code);
    });
  }

  function tap(code) {
    var inp = input();
    if (inp) inp.pressed.add(code);
  }

  function releaseAll() {
    for (var src in holds) holds[src] = {};
    syncKeys();
    stickReset();
    lookId = null;
  }

  function buzz(ms) {
    if (navigator.vibrate) {
      try { navigator.vibrate(ms); } catch (e) {}
    }
  }

  // ------------------------------------------------------------- full screen
  var fsElement = document.documentElement;
  var canFullscreen = !!(fsElement.requestFullscreen || fsElement.webkitRequestFullscreen);

  function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }

  function goFullscreen() {
    if (!canFullscreen || isFullscreen()) return;
    try {
      var p = fsElement.requestFullscreen
        ? fsElement.requestFullscreen({ navigationUI: 'hide' })
        : fsElement.webkitRequestFullscreen();
      var lock = function () {
        if (screen.orientation && screen.orientation.lock) {
          screen.orientation.lock('landscape').catch(function () {});
        }
      };
      if (p && p.then) p.then(lock).catch(function () {});
      else lock();
    } catch (e) {}
  }

  // Any menu button (Play / a chapter / Retry / Resume) enters full screen.
  document.addEventListener(
    'click',
    function (e) {
      var t = e.target;
      if (t && t.closest && t.closest('.menu-level, .btn')) goFullscreen();
    },
    true
  );

  // Leaving full screen mid-run (back gesture, etc.) pauses the game.
  function onFsChange() {
    if (!isFullscreen() && playing) tap('KeyP');
  }
  document.addEventListener('fullscreenchange', onFsChange);
  document.addEventListener('webkitfullscreenchange', onFsChange);

  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });

  // ------------------------------------------------------------ build layer
  var layer = el('div', 'touch-controls hidden', '', document.body);

  // Left half: floating joystick (move / push / ease off)
  var moveZone = el('div', 'tc-zone tc-move', '', layer);
  var stick = el('div', 'tc-stick', '', moveZone);
  var knob = el('div', 'tc-knob', '', stick);

  // Right half: drag to look around
  var lookZone = el('div', 'tc-zone tc-look', '', layer);

  // Buttons
  var btnJump = el('div', 'tc-btn tc-jump', 'Jump', layer);
  var btnSprint = el('div', 'tc-btn tc-sprint', 'Sprint', layer);
  var btnBack = el('div', 'tc-btn tc-back', 'Look back', layer);
  var btnPause = el('div', 'tc-btn tc-pause', '', layer);
  btnPause.setAttribute('aria-label', 'Pause');

  var rotate = el('div', 'tc-rotate hidden', 'Turn your phone sideways for the best view', document.body);

  // ---------------------------------------------------------------- joystick
  var STICK_R = 56;
  var stickId = null, stickX = 0, stickY = 0;

  function stickHome() {
    stick.style.left = '';
    stick.style.top = '';
    stick.classList.remove('active');
  }

  function stickReset() {
    stickId = null;
    knob.style.transform = 'translate(-50%, -50%)';
    holds.stick = {};
    stickHome();
  }

  moveZone.addEventListener('pointerdown', function (e) {
    if (stickId !== null) return;
    e.preventDefault();
    stickId = e.pointerId;
    try { moveZone.setPointerCapture(e.pointerId); } catch (err) {}
    var r = moveZone.getBoundingClientRect();
    stickX = e.clientX;
    stickY = e.clientY;
    stick.style.left = e.clientX - r.left + 'px';
    stick.style.top = e.clientY - r.top + 'px';
    stick.classList.add('active');
    stickMove(e);
  });

  function stickMove(e) {
    if (e.pointerId !== stickId) return;
    e.preventDefault();
    var dx = e.clientX - stickX, dy = e.clientY - stickY;
    var len = Math.sqrt(dx * dx + dy * dy);
    if (len > STICK_R) { dx = (dx / len) * STICK_R; dy = (dy / len) * STICK_R; }
    knob.style.transform = 'translate(calc(-50% + ' + dx + 'px), calc(-50% + ' + dy + 'px))';
    var nx = dx / STICK_R, ny = dy / STICK_R;
    holds.stick = {
      KeyA: nx < -0.35,
      KeyD: nx > 0.35,
      KeyW: ny < -0.45,
      KeyS: ny > 0.55,
      ShiftLeft: ny < -0.92 // stick pushed all the way up also sprints
    };
    syncKeys();
  }

  function stickEnd(e) {
    if (e.pointerId !== stickId) return;
    stickReset();
    syncKeys();
  }

  moveZone.addEventListener('pointermove', stickMove);
  moveZone.addEventListener('pointerup', stickEnd);
  moveZone.addEventListener('pointercancel', stickEnd);

  // -------------------------------------------------------------- look drag
  var LOOK_GAIN = 1.6;
  var lookId = null, lookX = 0, lookY = 0;

  lookZone.addEventListener('pointerdown', function (e) {
    if (lookId !== null) return;
    e.preventDefault();
    lookId = e.pointerId;
    lookX = e.clientX;
    lookY = e.clientY;
    try { lookZone.setPointerCapture(e.pointerId); } catch (err) {}
  });
  lookZone.addEventListener('pointermove', function (e) {
    if (e.pointerId !== lookId) return;
    e.preventDefault();
    var inp = input();
    if (inp) {
      inp.mouseDX += (e.clientX - lookX) * LOOK_GAIN;
      inp.mouseDY += (e.clientY - lookY) * LOOK_GAIN;
    }
    lookX = e.clientX;
    lookY = e.clientY;
  });
  function lookEnd(e) { if (e.pointerId === lookId) lookId = null; }
  lookZone.addEventListener('pointerup', lookEnd);
  lookZone.addEventListener('pointercancel', lookEnd);

  // ----------------------------------------------------------------- buttons
  function holdButton(btn, name, code, onPress) {
    var ids = {};
    function count() { return Object.keys(ids).length; }
    btn.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      e.stopPropagation();
      ids[e.pointerId] = true;
      try { btn.setPointerCapture(e.pointerId); } catch (err) {}
      btn.classList.add('down');
      if (code) { holds[name] = {}; holds[name][code] = true; syncKeys(); }
      if (onPress) onPress();
    });
    function up(e) {
      if (!ids[e.pointerId]) return;
      delete ids[e.pointerId];
      if (count() > 0) return;
      btn.classList.remove('down');
      if (code) { holds[name] = {}; syncKeys(); }
    }
    btn.addEventListener('pointerup', up);
    btn.addEventListener('pointercancel', up);
  }

  holdButton(btnJump, 'jump', 'Space', function () { tap('Space'); buzz(12); });
  holdButton(btnSprint, 'sprint', 'ShiftLeft');
  holdButton(btnBack, 'lookBack', 'KeyQ');
  holdButton(btnPause, 'pause', null, function () { tap('KeyP'); });

  // ------------------------------------------------- show only while running
  var playing = false;

  function checkState() {
    input(); // patch pointer lock as soon as the game exists
    var hud = document.querySelector('#ui-root .hud');
    var hudVisible = !!hud && !hud.classList.contains('hidden');
    var screenOpen = !!document.querySelector('#ui-root .screen:not(.hidden)');
    var now = hudVisible && !screenOpen;
    if (now !== playing) {
      playing = now;
      layer.classList.toggle('hidden', !playing);
      if (!playing) releaseAll();
    }
    rotate.classList.toggle('hidden', !(playing && window.innerHeight > window.innerWidth));
    touchHowTo();
  }

  setInterval(checkState, 150);
  document.addEventListener('visibilitychange', function () { if (document.hidden) releaseAll(); });
  window.addEventListener('blur', releaseAll);

  // -------------------------------------- touch wording in "How to Play"
  var howToDone = false;
  function touchHowTo() {
    if (howToDone) return;
    var grids = document.querySelectorAll('#ui-root .keys');
    for (var g = 0; g < grids.length; g++) {
      var grid = grids[g];
      if (grid.textContent.indexOf('Push harder') === -1) continue;
      grid.textContent = '';
      [
        ['Left stick', 'Drag left / right to move across the trail'],
        ['Stick up', 'Push harder — all the way up to sprint'],
        ['Stick down', 'Ease off — catch your breath, lose ground'],
        ['Jump', 'Vault low obstacles, leap ditches and craters'],
        ['Sprint', 'Hold to sprint (burns stamina)'],
        ['Look back', 'Hold to glance over your shoulder'],
        ['Right side', 'Drag to look around'],
        ['❚❚', 'Pause']
      ].forEach(function (row) {
        el('div', 'key', row[0], grid);
        el('div', '', row[1], grid);
      });
      howToDone = true;
    }
  }

  // --------------------- iPhone: no full screen API for web pages, so offer
  // the Home Screen route, which launches the game full screen.
  var standalone =
    window.navigator.standalone === true ||
    (window.matchMedia && window.matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches);
  if (!canFullscreen && !standalone) {
    var tip = el(
      'div',
      'tc-ios-tip',
      'For full screen on iPhone: tap Share, then “Add to Home Screen”, and play from the new icon.',
      document.body
    );
    var close = el('span', 'tc-ios-close', '✕', tip);
    close.addEventListener('click', function () { tip.remove(); });
    setInterval(function () {
      if (!tip.isConnected) return;
      var menuOpen = !!document.querySelector('#ui-root .screen.menu-bg:not(.hidden)');
      tip.classList.toggle('hidden', !menuOpen);
    }, 300);
  }
})();
