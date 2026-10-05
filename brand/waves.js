// WAVES - draws the "resonation" motif into any <svg data-waves> on the page.
// Part of the brand kit: see /brand/brand-guide.md, section "Motif", for where waves are allowed.
// Load it at the end of <body>:  <script src="/brand/waves.js"></script>
// All settings live in data- attributes in the HTML, so you tune waves without touching JS.
//
// data-lines   how many lines in the stack          (default 12)
// data-amp     how high the waves go, in SVG units  (default 30)
// data-freq    how many bumps across the width      (default 1)
// data-spread  how much each line differs from the next (default 0.15)
// data-from / data-to  colors of the first and last line (gradient across the stack).
//              Leave them out to use --wave-from / --wave-via / --wave-to from tokens.css (follows the theme).
// data-via     optional middle color, for a 3-color gradient (from -> via -> to)
// data-depth   optional: back lines get thin, front lines get thicker (fake 3D depth). Value = extra width of the front line
// data-motion  "ambient" = always moving slowly, "hover" = only moves while you point at it, "none" = static
// data-trigger CSS selector of the element that wakes a "hover" wave (default: the svg's parent)
// data-seed    any text; gives this wave its own unique shape (used for per-post waveforms)
// data-lines-small  fewer lines on phones (saves battery)
// data-scroll  ambient only: scrolling speeds the waves up, they calm down by themselves
// data-cursor  ambient only: lines part around the mouse pointer, like a comb through hair
(function () {
  // Ask the operating system if the visitor wants less motion (accessibility setting).
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // One switch for all ambient waves, flipped by any button with data-motion-toggle.
  let ambientPaused = false;

  // Turn a piece of text into a number, so the same title always gives the same wave.
  function hash(text) {
    let h = 0;
    for (let i = 0; i < text.length; i++) {
      h = (h * 31 + text.charCodeAt(i)) % 100000; // 31 is a common "mixing" number for simple hashes
    }
    return h;
  }

  // Mix two hex colors. amount 0 = first color, 1 = second color.
  function mix(hexA, hexB, amount) {
    const a = parseInt(hexA.slice(1), 16); // "#FF8D00" -> one big number
    const b = parseInt(hexB.slice(1), 16);
    const channels = [16, 8, 0].map(function (shift) {
      const ca = (a >> shift) & 255; // pull out red, green or blue (0-255)
      const cb = (b >> shift) & 255;
      return Math.round(ca + (cb - ca) * amount);
    });
    return 'rgb(' + channels.join(',') + ')';
  }

  // Read a color token from tokens.css, e.g. token('--wave-from') -> "#FFD9AA".
  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // Pick the color for one line. amount 0 = first line, 1 = last line.
  // data- attributes win; otherwise the theme's tokens are used.
  function lineColor(set, amount) {
    const from = set.from || token('--wave-from') || '#FFD9AA';
    const via = set.via || (set.from ? '' : token('--wave-via')); // custom colors set = no automatic middle color
    const to = set.to || token('--wave-to') || '#FF8D00';
    if (!via) return mix(from, to, amount); // only two colors: blend straight across
    // three colors: first half blends from -> via, second half via -> to
    return amount < 0.5 ? mix(from, via, amount * 2) : mix(via, to, (amount - 0.5) * 2);
  }

  // Build the drawing instructions ("d" attribute) for one wavy line.
  // lens = the cursor's influence (position, size, strength), or null when there is none.
  function wavePath(w, baseY, amp, freq, phase, offset, lens) {
    let d = '';
    for (let x = 0; x <= w; x += 6) { // a point every 6 units is smooth enough and cheap
      const t = x / w;                 // 0 at the left edge, 1 at the right edge
      const swell = Math.sin(t * Math.PI); // calm at both edges, biggest in the middle
      let y = baseY
        + Math.sin(t * freq * 6.283 + phase + offset) * amp * swell             // main wave (6.283 = one full circle)
        + Math.sin(t * freq * 13 - phase * 0.6 + offset * 2) * amp * 0.25 * swell; // small ripple on top
      if (lens && lens.presence > 0.01) {
        const dx = x - lens.x;
        const dy = y - lens.y;
        // falloff: 1 right at the cursor, fading to 0 further away (a soft round "bubble")
        const falloff = Math.exp(-(dx * dx + dy * dy) / (2 * lens.radius * lens.radius));
        // push the line away from the cursor: lines above go up, lines below go down
        y += Math.tanh(dy / (lens.radius * 0.4)) * lens.strength * lens.presence * falloff;
      }
      d += (x === 0 ? 'M' : 'L') + x + ' ' + y.toFixed(1) + ' ';
    }
    return d;
  }

  document.querySelectorAll('svg[data-waves]').forEach(function (svg) {
    const set = svg.dataset; // shortcut to all data- attributes
    const small = window.innerWidth < 700 && set.linesSmall; // phone-sized screen?
    const lines = Number(small ? set.linesSmall : (set.lines || 12));
    const baseAmp = Number(set.amp || 30);
    const seed = set.seed ? hash(set.seed) : 0;
    const freq = Number(set.freq || 1) + (seed % 7) / 6;   // seeded waves get their own rhythm
    const spread = Number(set.spread || 0.15);
    const motion = reduceMotion ? 'none' : (set.motion || 'none');
    const box = svg.viewBox.baseVal;                        // the drawing area from viewBox="0 0 w h"

    // Create one <path> per line and color it along the gradient.
    const paths = [];
    for (let i = 0; i < lines; i++) {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const amount = i / Math.max(lines - 1, 1); // where this line sits in the stack, 0 to 1
      if (set.depth) {
        p.setAttribute('stroke-width', (0.5 + amount * Number(set.depth)).toFixed(2)); // thin at the back, thick at the front
      }
      svg.appendChild(p);
      paths.push(p);
    }

    // Color every line. Runs again when the theme changes (light/dark).
    function paint() {
      paths.forEach(function (p, i) {
        p.setAttribute('stroke', lineColor(set, i / Math.max(lines - 1, 1)));
      });
    }
    paint();
    document.addEventListener('themechange', paint); // sent by the theme toggle
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', paint); // OS setting changed

    let phase = seed / 1000; // start position, different per seed
    let energy = motion === 'hover' ? 0 : 1; // 0 = calm, 1 = fully "resonating"
    let target = energy;
    let boost = 0; // extra speed from scrolling; fades out on its own

    // The cursor "lens". x/y = where it is drawn, tx/ty = where the mouse really is.
    // We move x/y a little toward tx/ty every frame, so the effect glides instead of jumping.
    const lens = set.cursor !== undefined && motion === 'ambient'
      ? { x: 0, y: 0, tx: 0, ty: 0, presence: 0, target: 0, radius: box.height * 0.12, strength: box.height * 0.035 }
      : null;

    function draw() {
      const amp = baseAmp * (0.3 + 0.7 * energy) * (1 + Math.min(boost * 6, 0.5)); // scrolling makes waves a bit taller too
      paths.forEach(function (p, i) {
        const baseY = box.height * 0.15 + box.height * 0.7 * (i / Math.max(lines - 1, 1));
        p.setAttribute('d', wavePath(box.width, baseY, amp, freq, phase, i * spread, lens));
      });
    }
    draw(); // always draw once, so reduced-motion visitors still see the static shape

    if (motion === 'none') return; // stop here: no animation

    let running = false;
    function tick() {
      energy += (target - energy) * 0.06; // ease toward the target instead of jumping
      const moving = motion === 'ambient' ? !ambientPaused : energy > 0.01 || target > 0;
      if (moving && motion === 'ambient') {
        boost *= 0.94;                   // lose 6% of the scroll speed every frame
        phase += 0.005 + boost;          // slow constant drift + whatever scrolling added
        if (lens) {
          lens.x += (lens.tx - lens.x) * 0.08;                    // glide toward the mouse
          lens.y += (lens.ty - lens.y) * 0.08;
          lens.presence += (lens.target - lens.presence) * 0.05;  // fade the effect in or out
        }
      } else if (moving) {
        phase += 0.012 * (0.5 + 2 * energy);
      }
      draw();
      if (moving) {
        requestAnimationFrame(tick); // ask the browser for the next frame
      } else {
        running = false; // nothing to animate: stop using CPU
      }
    }
    function start() {
      if (!running) { running = true; requestAnimationFrame(tick); }
    }

    if (motion === 'ambient') {
      start();
      svg.addEventListener('waves:resume', start); // the pause button sends this when resuming

      if (set.scroll !== undefined) {
        let lastScroll = window.scrollY;
        window.addEventListener('scroll', function () {
          const moved = Math.abs(window.scrollY - lastScroll); // pixels scrolled since last time
          lastScroll = window.scrollY;
          boost = Math.min(boost + moved * 0.0004, 0.08);     // more scrolling = faster, with a speed limit
        }, { passive: true }); // passive: promise the browser we won't block scrolling
      }

      if (lens) {
        window.addEventListener('pointermove', function (e) {
          // Convert screen pixels to the SVG's own coordinates (the viewBox), whatever its size on screen.
          const point = new DOMPoint(e.clientX, e.clientY).matrixTransform(svg.getScreenCTM().inverse());
          if (lens.target === 0) { lens.x = point.x; lens.y = point.y; } // first move: start right under the cursor
          lens.tx = point.x;
          lens.ty = point.y;
          lens.target = 1;
        });
        // Mouse left the window: let the lines relax back.
        document.documentElement.addEventListener('pointerleave', function () { lens.target = 0; });
      }
    } else {
      // Hover mode: wake up when the pointer or keyboard focus is on the trigger element.
      const trigger = set.trigger ? document.querySelector(set.trigger) : svg.parentElement;
      ['mouseenter', 'focusin'].forEach(function (ev) {
        trigger.addEventListener(ev, function () { target = 1; start(); });
      });
      ['mouseleave', 'focusout'].forEach(function (ev) {
        trigger.addEventListener(ev, function () { target = 0; start(); });
      });
    }
  });

  // Pause/play button for ambient waves (WCAG 2.2.2: moving content needs a pause control).
  document.querySelectorAll('[data-motion-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      ambientPaused = !ambientPaused;
      btn.setAttribute('aria-pressed', String(ambientPaused)); // tells screen readers the state
      btn.textContent = ambientPaused ? 'Play waves' : 'Pause waves';
      if (!ambientPaused) {
        document.querySelectorAll('svg[data-motion="ambient"]').forEach(function (s) {
          s.dispatchEvent(new Event('waves:resume'));
        });
      }
    });
  });
})();
