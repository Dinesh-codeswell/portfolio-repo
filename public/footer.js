/* ============================================================
   GLOBAL FOOTER — air.inc-style "ground" footer (migration).
   Self-injecting, no dependencies. Add to any page with:
     <script src="footer.js" defer></script>
   Inherits the page's tokens; includes a live clock.
   If #gfooter already exists in the HTML, this script just
   wires up the scroll-reveal and clock — it does NOT create
   a duplicate footer.
   ============================================================ */
(function () {
  'use strict';

  var f = document.getElementById('gfooter');

  // If the footer isn't in the DOM yet, create and inject it
  if (!f) {
    f = document.createElement('footer');
    f.id = 'gfooter';
    f.className = 'ground';
    f.innerHTML =
      '<div class="gf-sky" aria-hidden="true"><span class="gf-cloud c1"></span><span class="gf-cloud c2"></span><span class="gf-cloud c3"></span><span class="gf-cloud c4"></span></div>' +
      '<div class="ground-contact">' +
        '<div class="gf-top">' +
          '<div class="gf-cta">' +
            '<div class="ground-kick">contact</div>' +
            '<h2 class="ground-ttl">let\'s build <em>something that matters.</em></h2>' +
            '<a class="ground-mail" href="mailto:dineshkatal.work@gmail.com">dineshkatal.work@gmail.com <span class="arw">\u2192</span></a>' +
            '<p class="ground-sub">care about <b>design</b>, <b>impact</b>, and products that actually ship? you know where to find me.</p>' +
          '</div>' +
          '<nav class="gf-cols" aria-label="footer">' +
            '<div class="gf-col"><span class="gf-h">explore</span>' +
              '<a href="/work">work</a>' +
              '<a href="/beyond">lil about me</a>' +
              '<a href="/lab">art lab</a>' +
              '<a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">\u00e9 r\u00e9sum\u00e9 \u2193</a>' +
            '</div>' +
            '<div class="gf-col"><span class="gf-h">connect</span>' +
              '<a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin \u2197</a>' +
              '<a href="mailto:dineshkatal.work@gmail.com">email \u2197</a>' +
              '<a href="https://dinesh.design" target="_blank" rel="noopener">dinesh.design \u2197</a>' +
            '</div>' +
            '<div class="gf-col"><span class="gf-h">status</span>' +
              '<span class="gf-avail"><i></i> open to new work</span>' +
              '<span class="gf-line">based in Gurugram, India</span>' +
              '<span class="gf-line">local time <b id="gfClock">\u2014</b></span>' +
            '</div>' +
          '</nav>' +
        '</div>' +
        '<div class="gf-bar">' +
          '<a class="gf-mark" href="/"><svg viewBox="0 0 30 26" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" aria-hidden="true"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"/><line x1="15" y1="7" x2="15" y2="4.2"/><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"/><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"/><line x1="2.5" y1="18" x2="27.5" y2="18"/></svg>dinesh.</a>' +
          '<div class="gf-meta"><span>\u00a9 2026 dinesh kumar katal</span><span>designed &amp; built by me \u2014 and a few too many coffees \u00b7 switzer + react</span></div>' +
        '</div>' +
      '</div>';

    var host = document.getElementById('afterInner') || document.body;
    host.appendChild(f);
  }

  // ── Scroll-reveal: add .in when footer enters the viewport ──
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    f.classList.add('in');
  } else {
    var fio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { f.classList.add('in'); fio.disconnect(); }
      });
    }, { threshold: 0.08 });
    fio.observe(f);
  }

  // ── Live clock (Gurugram, India = IST = Asia/Kolkata) ──
  var el = f.querySelector('#gfClock');
  if (el) {
    var tick = function () {
      try {
        el.textContent = new Date().toLocaleTimeString('en-US', {
          hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kolkata'
        });
      } catch (e) {
        el.textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      }
    };
    tick();
    setInterval(tick, 15000);
  }
})();
