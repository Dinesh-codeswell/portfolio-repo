"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.setAttribute('data-cine', 'hero magnet grain reveals');
    // Wire hamburger menu click handlers
    const burger = document.querySelector('.gnav-burger');
    const menu = document.querySelector('.gnav-menu');
    const nav = document.getElementById('gnav');
    if (burger && menu && nav) {
      const menuInner = nav.querySelector('.gnav-menu-inner');
      if (menuInner && menuInner.children.length === 0) {
        nav.querySelectorAll('.gnav-dock a').forEach((a) => {
          menuInner.appendChild(a.cloneNode(true));
        });
      }
      const setOpen = (open: boolean) => {
        nav.classList.toggle('menu-open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
        document.documentElement.style.overflow = open ? 'hidden' : '';
      };
      const onBurgerClick = () => setOpen(!nav.classList.contains('menu-open'));
      const onMenuClick = (e: MouseEvent) => {
        if (e.target === menu || (e.target as HTMLElement).closest('a')) setOpen(false);
      };
      burger.addEventListener('click', onBurgerClick);
      menu.addEventListener('click', onMenuClick as any);
      
      return () => {
        document.body.removeAttribute('data-cine');
        
        burger.removeEventListener('click', onBurgerClick);
        menu.removeEventListener('click', onMenuClick as any);
        document.documentElement.style.overflow = '';
      };
    }
  }, []);

  return (
    <>
      

  
  {/* shared page transition (ink wipe) — see transition.css/js */}
  <div className="pgx" id="pgx" aria-hidden="true">
    <div className="pgx-ink"></div>
    <div className="pgx-mark"><span className="wm">shaping the clay<span className="dot">.</span></span></div>
    <svg width="0" height="0" aria-hidden="true"><filter id="pgxink"><feTurbulence type="fractalNoise" baseFrequency="0.013 0.021" numOctaves="2" seed="6" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="10" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter></svg>
  </div>

  <nav className="topnav wrap"><a className="back-home" href="/"><span className="ar">←</span> back to home</a></nav>

  <header className="wrap bhead" data-cine-hero="">
    <h1 className="btitle" data-cine-split="1" data-split="1">
      <span className="cn-m"><span className="cn-w">Product,</span></span>{" "}
      <span className="cn-m"><span className="cn-w">data,</span></span>{" "}
      <span className="cn-m"><span className="cn-w">and</span></span>{" "}
      <span className="cn-m"><span className="cn-w">growth</span></span> <br />
      <span className="cn-m"><span className="cn-w">insights</span></span>{" "}
      <span className="cn-m"><span className="cn-w">from</span></span>{" "}
      <span className="cn-m"><span className="cn-w">the</span></span>{" "}
      <span className="cn-m"><span className="cn-w">trenches</span></span>
      <span className="cn-m"><span className="cn-w">.</span></span>
    </h1>
    <p className="bintro">Lowkey obsessed with cohort analytics, product discovery, and growth engines.</p>
  </header>

  <main className="wrap posts">

    <a className="post" href="/bridging" data-rv="" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }}>
      <p className="pmeta">2026 · essay · interactive</p>
      <h2 className="ptitle">Bridging the hard and the <em>soft.</em></h2>
      <span className="pgo">read the essay <i>→</i></span>
    </a>

    <a className="post" href="/artofmaking" data-rv="" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0.0354px, 0px)", opacity: "0.9988", visibility: "inherit" }}>
      <p className="pmeta">2026 · essay · interactive</p>
      <h2 className="ptitle">We forgot that making things is supposed to <em>feel good.</em></h2>
      <span className="pgo">read the essay <i>→</i></span>
    </a>

    <p className="more">More coming soon.</p>

  </main>

  
  <Script src="/footer.js"  strategy="afterInteractive" />
  <Script src="/transition.js"  strategy="afterInteractive" />
  {/* cinematic layer: GSAP entrance + staggered reveals + grain */}
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
  <Script src="/cinematic.js?v=1" strategy="afterInteractive" /><canvas className="cn-grain" aria-hidden="true" width="1440" height="900"></canvas>
  <Script src="/smooth-scroll.js"  strategy="afterInteractive" />


<footer id="gfooter" className="ground"><div className="gf-sky" aria-hidden="true"><span className="gf-cloud c1"></span><span className="gf-cloud c2"></span><span className="gf-cloud c3"></span><span className="gf-cloud c4"></span></div><div className="ground-contact"><div className="gf-top"><div className="gf-cta"><div className="ground-kick">contact</div><h2 className="ground-ttl">let’s build <em>something that matters.</em></h2><a className="ground-mail" href="mailto:dineshkatal.work@gmail.com">dineshkatal.work@gmail.com <span className="arw">→</span></a><p className="ground-sub">care about <b>design</b>, <b>impact</b>, and products that actually ship? you know where to find me.</p></div><nav className="gf-cols" aria-label="footer"><div className="gf-col"><span className="gf-h">explore</span><a href="/work">work</a><a href="/beyond">lil about me</a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé ↓</a></div><div className="gf-col"><span className="gf-h">connect</span><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin ↗</a><a href="mailto:dineshkatal.work@gmail.com">email ↗</a></div><div className="gf-col"><span className="gf-h">status</span><span className="gf-avail"><i></i> open to new work</span><span className="gf-line">based in Gurugram, India</span><span className="gf-line">local time <b id="gfClock">2:31 AM</b></span></div></nav></div><div className="gf-bar"><a className="gf-mark" href="/"><svg viewBox="0 0 30 26" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"></path><line x1="15" y1="7" x2="15" y2="4.2"></line><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"></line><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"></line><line x1="2.5" y1="18" x2="27.5" y2="18"></line></svg>dinesh.</a><div className="gf-meta"><span>© 2026 dinesh kumar katal</span><span>designed &amp; built by me — and a few too many coffees · switzer + react</span></div></div></div></footer>
<style dangerouslySetInnerHTML={{ __html: `*{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:#fff;color:var(--ink);font-family:"Satoshi","Switzer",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  .wrap{max-width:760px;margin:0 auto;padding:0 clamp(24px,6vw,40px)}
  em{font-style:italic}

  /* header */
  /* top bar — single back-to-home button (no global nav dock on this page) */
  .topnav{padding-top:clamp(24px,4vh,40px)}
  .back-home{display:inline-flex;align-items:center;gap:8px;font-family:"Geist Mono",monospace;font-size:12px;letter-spacing:.09em;text-transform:uppercase;color:var(--ink);text-decoration:none;
    padding:10px 18px;border:1px solid var(--line);border-radius:999px;transition:border-color .2s,color .2s,background .2s}
  .back-home .ar{transition:transform .2s}
  .back-home:hover{border-color:#0083E7;color:#0083E7;background:rgba(0,131,231,.06)}
  .back-home:hover .ar{transform:translateX(-3px)}
  .bhead{padding-top:clamp(44px,7vh,92px);padding-bottom:clamp(44px,8vh,84px)}
  .kick{font-family:"Geist Mono",monospace;font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:#0083E7;margin:0 0 20px}
  .btitle{font-family:"Satoshi","Switzer","Geist",system-ui,sans-serif;font-weight:400;font-size:clamp(27px,4.1vw,44px);line-height:1.1;letter-spacing:-.02em;color:var(--ink);max-width:none}
  .bintro{font-size:clamp(15px,1rem + .3vw,18px);line-height:1.6;color:var(--soft);max-width:50ch;margin:22px 0 0}

  /* posts — whitespace only, no rules, no cover */
  .posts{padding-bottom:clamp(140px,22vh,220px)}
  .post{display:block;text-decoration:none;color:inherit;padding:clamp(24px,4.5vh,44px) 0;max-width:56ch}
  .post + .post{border:0}
  .pmeta{font-family:"Geist Mono",monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin:0 0 12px}
  .ptitle{font-family:"Satoshi","Switzer","Geist",system-ui,sans-serif;font-weight:400;font-size:clamp(25px,3.6vw,38px);line-height:1.12;letter-spacing:-.015em;color:var(--ink);transition:color .25s ease;text-wrap:balance}
  .ptitle em{font-style:normal;color:inherit}
  .pdek{font-size:clamp(15px,1rem + .15vw,17px);line-height:1.58;color:var(--soft);margin:12px 0 0;text-wrap:pretty}
  .pgo{display:inline-flex;align-items:center;gap:7px;font-family:"Geist Mono",monospace;font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:#0083E7;margin:16px 0 0;opacity:0;transform:translateX(-4px);transition:opacity .3s ease,transform .3s ease}
  .pgo i{font-style:normal;transition:transform .25s}
  .post:hover .ptitle{color:#0083E7}
  .post:hover .pgo{opacity:1;transform:none}
  .post:hover .pgo i{transform:translateX(4px)}

  .more{font-family:"Satoshi","Switzer","Geist",system-ui,sans-serif;font-style:normal;font-size:clamp(15px,1.5vw,18px);color:var(--faint);margin:clamp(36px,7vh,72px) 0 0}

  @media (prefers-reduced-motion:reduce){ .pgo{opacity:1;transform:none;transition:none} }

  /* touch devices have no hover — always show the "read" cue + keep the tap target obvious */
  @media (hover:none){
    .pgo{opacity:1;transform:none}
    .back-home{padding:11px 18px}
  }
  /* phones */
  @media (max-width:600px){
    .pgo{opacity:1;transform:none}                 /* always show the "read" cue on phones */
    .topnav{padding-top:22px}
    .btitle br{display:none}                       /* let the heading wrap naturally, no forced break */
    .btitle{font-size:clamp(26px,7.6vw,34px)}
    .bhead{padding-top:clamp(30px,5vh,52px);padding-bottom:clamp(30px,5vh,56px)}
    .bintro{margin-top:16px;font-size:16px}
    .post{padding:clamp(22px,3.5vh,32px) 0}
    .posts{padding-bottom:clamp(90px,18vh,160px)}
    .ptitle{font-size:clamp(23px,6.4vw,30px)}
  }` }} />
    </>
  );
}
