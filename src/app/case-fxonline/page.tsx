"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.setAttribute('data-cine', 'hero parallax tilt magnet grain');
    document.body.classList.add("case-page");
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
        document.body.classList.remove('case-page');
        burger.removeEventListener('click', onBurgerClick);
        menu.removeEventListener('click', onMenuClick as any);
        document.documentElement.style.overflow = '';
      };
    }
  }, []);

  return (
    <>
      <div id="gnav" className="is-case"><div className="gnav-bar"><a className="gnav-back" href="/work"><span className="exti">←</span> back to work</a><button className="gnav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="gnavMenu"><span className="gb-txt">menu</span><span className="gb-ico"><span className="gb-l"></span><span className="gb-l"></span></span></button></div><nav className="gnav-dock" aria-label="primary"><a href="/work">work</a><a href="/beyond">about</a><a href="/blog">blogs</a><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti">↗</span></a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti">↓</span></a><a className="cta" href="/quick">quick view <span className="arw">→</span></a><a className="cta cta-ghost" href="mailto:dineshkatal.work@gmail.com">let’s talk <span className="arw">→</span></a></nav><div className="gnav-menu" id="gnavMenu" aria-hidden="true"><nav className="gnav-menu-inner" aria-label="menu"><a href="/work">work</a><a href="/beyond">about</a><a href="/blog">blogs</a><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti">↗</span></a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti">↓</span></a><a className="cta" href="/quick">quick view <span className="arw">→</span></a><a className="cta cta-ghost" href="mailto:dineshkatal.work@gmail.com">let’s talk <span className="arw">→</span></a></nav></div></div>
  {/* shared page transition (ink wipe), see transition.css/js */}
  <div className="pgx" id="pgx" aria-hidden="true">
    <div className="pgx-ink"></div>
    <div className="pgx-mark"><span className="wm">ink still wet<span className="dot">.</span></span></div>
    <svg width="0" height="0" aria-hidden="true"><filter id="pgxink"><feTurbulence type="fractalNoise" baseFrequency="0.013 0.021" numOctaves="2" seed="6" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="10" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter></svg>
  </div>

{/* NDA gate removed, FX case study is now open */}

<nav className="wnav" style={{ display: "none" }}>
  <a className="brand" href="/">dinesh<span className="a">.</span></a>
  <nav className="snav">
    <a href="/work" className="on">work</a>
    <a href="/beyond">lil&nbsp;about&nbsp;me</a>
    
    <a className="ext" href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti exti-up">↗</span></a><a className="ext" href="../assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti exti-dn">↓</span></a><a href="/quick">quick&nbsp;view</a>
  </nav>
</nav>

{/* ================= HERO ================= */}
{/* ============ ONE TRADE'S JOURNEY · cinematic cold open (scoped fxj-) ============ */}
<section style={{ paddingBlock: "0", borderTop: "none" }}>


<div className="fxj" id="fxj">
  <div className="stick">
    <div className="stage">
      <div className="beat on" data-b="0">
        <div className="stepk">the trade</div>
        <div className="steph">It starts with a number.</div>
        <div className="big">€1,000,000 <span className="a">needs to become dollars.</span></div>
        <div className="tick">EUR/USD &nbsp;<b id="fxjrate">1.1000</b></div>
      </div>

      <div className="beat" data-b="1">
        <div className="stepk">the old way</div>
        <div className="steph">By the time a rate reaches you, it is already old.</div>
        <div className="rc" id="fxjrc">
          <div className="k">Deal rate</div>
          <div className="v">1.1000</div>
          <div className="to"><span>Deal rate timed out</span><span>00:00</span></div>
        </div>
        <div className="chain">call the branch → wait for the trader → get a callback → re-quote</div>
      </div>

      <div className="beat" data-b="2">
        <div className="stepk">fx online</div>
        <div className="steph">Verify the customer, see the live rate, and lock it yourself.</div>
        <div className="bc" id="fxjbc">
          <div className="top"><span>🇪🇺 EUR → 🇺🇸 USD</span><b>1,000,000</b></div>
          <div className="lock"><span className="tl">Time left to book</span><span className="tv" id="fxjtv">01:30</span></div>
          <div className="place" id="fxjpl">Place your order</div>
        </div>
      </div>

      <div className="beat" data-b="3">
        <div className="stepk">shipped · emirates nbd</div>
        <div className="num" id="fxjnum">0</div>
        <div className="cap">live deals booked this way. <b>No calls. No fear.</b></div>
      </div>

    </div>
  </div>
</div>

<Script id="script-case-fxonline-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var host=document.getElementById('fxj'); if(!host||RM) return;
  var beats=[].slice.call(host.querySelectorAll('.beat'));
  var rateEl=document.getElementById('fxjrate'), rc=document.getElementById('fxjrc'),
      bc=document.getElementById('fxjbc'), tv=document.getElementById('fxjtv'),
      pl=document.getElementById('fxjpl'), num=document.getElementById('fxjnum');
  var N=4;
  function render(p){
    var idx=Math.min(N-1,Math.floor(p*N));
    var t=Math.max(0,Math.min(1,p*N-idx));
    beats.forEach(function(b,k){ b.classList.toggle('on',k===idx); });
    if(idx===0){ rateEl.textContent=(1.1+0.0012*Math.sin(p*90)).toFixed(4); }
    if(idx===1){ rc.classList.toggle('dead', t>0.45); }
    if(idx===2){
      var secs=Math.max(4,Math.round(90-t*100));
      var done=t>0.86;
      bc.classList.toggle('done',done);
      tv.textContent=done?'locked':('0'+Math.floor(secs/60))+':'+('0'+secs%60).slice(-2);
      pl.textContent=done?'\\u2713 Order placed':'Place your order';
    }
    if(idx===3){
      var e=1-Math.pow(1-Math.min(1,t*1.5),3);
      num.textContent=Math.round(16265*e).toLocaleString('en-US');
    }
  }
  var ticking=false;
  function onScroll(){
    var r=host.getBoundingClientRect();
    var travel=r.height-window.innerHeight;
    if(travel<=0) return;
    render(Math.max(0,Math.min(0.9999,(-r.top)/travel)));
  }
  function tick(){ if(ticking)return; ticking=true;
    requestAnimationFrame(function(){ onScroll(); ticking=false; }); }
  window.addEventListener('scroll',tick,{passive:true});
  window.addEventListener('resize',tick);
  setTimeout(onScroll,60);
})();` }} />
</section>

<header className="hero" data-cine-hero="noh1" id="top">
  <div className="wrap">
    <div className="hero-grid">
      <div className="hero-txt">
        <div className="kicker-row" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 26px)", opacity: "0", visibility: "hidden" }}>
          <span className="eyebrow">FX online · fintech · internal B2B</span>
        </div>

        <h1 data-split="1"><span className="wr">exchange</span> <span className="wr">currency</span> <span className="wr">without</span> <span className="wr">the</span> <span className="accent"><span className="wr">fear.</span></span></h1>

        <p className="lede reveal" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 26px)", opacity: "0", visibility: "hidden" }}>
          Relationship managers and treasury traders had ninety seconds to agree and book a live FX rate.
          I led the end-to-end design of a shared deal-order flow that exposed the market rate, margin, profit, and expiry <b>before commitment</b>.
        </p>
      </div>

      <div className="hero-stage" aria-hidden="true" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 26px)", opacity: "0", visibility: "hidden" }}>
        <div className="glow"></div>
        <figure className="bw bw-main"><div className="bw-bar"><i className="r"></i><i className="y"></i><i className="g"></i><span className="url">fxonline · book deal</span></div><video src="../assets/case/fx/cover-loop.mp4" poster="../assets/case/fx/cover-loop-poster.jpg" muted loop playsInline autoPlay></video></figure>
      </div>
    </div>

    {/* 3-number metric hero */}
    <div className="metrics reveal" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 26px)", opacity: "0", visibility: "hidden" }}>
      <div className="metric">
        <div className="big"><span data-target="16265">16,265</span></div>
        <div className="label">FX deals booked through the platform by May 2025.</div>
        <span className="eyebrow tag">Deals booked</span>
      </div>
      <div className="metric">
        <div className="big"><span data-target="262" data-suffix="Mn">262Mn</span> <span className="arrow">↑</span></div>
        <div className="label">AED in booked value on the FX Online platform.</div>
        <span className="eyebrow tag">Booked value (AED)</span>
      </div>
      <div className="metric">
        <div className="big"><span data-target="400" data-suffix="+">400+</span> <span className="arrow">↑</span></div>
        <div className="label">RMs &amp; Traders onboarded; 40% lift in perceived task clarity.</div>
        <span className="eyebrow tag">Users onboarded</span>
      </div>
    </div>
    <p className="note" style={{ marginTop: "16px", textAlign: "center", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 26px)", opacity: "0", visibility: "hidden" }}>live-platform figures reported by the business &amp; stakeholders · as of May 2025</p>
  </div>
</header>

{/* ================= CASE SNAPSHOT ================= */}
<section className="snapshot-sec">
  <div className="wrap">
    <span className="eyebrow snap-kicker">Case snapshot</span>
    <div className="snap-card cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" }}>
      <div className="snap-facts">
        <div className="snap-fact">
          <span className="eyebrow">Role</span>
          <p>Data Analyst &amp; Python Developer · Trading Performance Analysis</p>
        </div>
        <div className="snap-fact">
          <span className="eyebrow">Team</span>
          <p>Team of 8, architects, 4 backend, 2 frontend, me on design</p>
        </div>
        <div className="snap-fact">
          <span className="eyebrow">Timeline</span>
          <p>Sept 2024, Apr 2025 · Dubai</p>
        </div>
        <div className="snap-fact">
          <span className="eyebrow">Tools</span>
          <p>Figma · usability testing</p>
        </div>
      </div>
      <div className="snapshot">
        <div className="snap-cell">
          <span className="eyebrow">What I did</span>
          <p>Owned research, the relationship-manager and trader journeys, rate negotiation, deal booking, dashboards, authentication, edge cases, and the responsive design system. The bet: show the full price, not just the headline rate.</p>
        </div>
        <div className="snap-cell">
          <span className="eyebrow">Impact</span>
          <p>16,265 deals booked worth 262Mn AED on the platform by May 2025; 400+ RMs and traders onboarded.</p>
        </div>
        <div className="snap-cell">
          <span className="eyebrow">Constraints</span>
          <p>Rates that changed continuously, quotes that expired after 90 seconds, and authority, audit &amp; compliance requirements across two desks.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= CONTEXT ================= */}
<section id="sec-0">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">01 · Context</span>
      <h2 data-split="1"><span className="wr">rates</span> <span className="wr">that</span> <span className="wr">move</span> <span className="wr">every</span> <span className="mk"><span className="wr">90</span> <span className="wr">seconds.</span></span></h2>
    </div>
    <div className="body-col reveal">
      <p>At Emirates NBD, Relationship Managers and Treasury negotiate currency deals where the market rate updates every millisecond. <b>The job was to simplify a brutally complex, time-pressured system</b>, so RMs and Traders could agree a rate and book with confidence, fast.</p>
    </div>
  </div>
</section>

{/* ================= PROBLEM ================= */}
<section id="sec-1">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">02 · Problem</span>
      <h2 data-split="1"><span className="wr">no</span> <span className="wr">one</span> <span className="wr">trusted</span> <span className="wr">the</span> <span className="accent"><span className="wr">rate.</span></span></h2>
    </div>
    <div className="cards reveal">
      <div className="card">
        <div className="num">01</div>
        <h3>A rate you couldn't trust</h3>
        <p>The headline rate and the post-margin rate were never shown together, so no one was sure what they'd actually book.</p>
      </div>
      <div className="card">
        <div className="num">02</div>
        <h3>Rates that move</h3>
        <p>Quotes changed mid-negotiation, and the 90-second window could expire before the deal was confirmed.</p>
      </div>
      <div className="card">
        <div className="num">03</div>
        <h3>A booked deal can't be unwound</h3>
        <p>Once an RM books, it's live in the market, but the screen gave no confident final review before commit.</p>
      </div>
      <div className="card">
        <div className="num">04</div>
        <h3>Two desks, one blind spot</h3>
        <p>RM and Treasury negotiated from different views, with authority limits (DOA) surfacing only after the fact.</p>
      </div>
    </div>

    <div className="pullquote reveal">
      <span className="qmark">“</span>
      <div className="qlabel">the signal · user interviews</div>
      <div className="qbig">how do I know this is the real rate?</div>
      <div className="qsrc"><span>Relationship Managers</span><span>Treasury traders</span><span>Ops</span></div>
      <div className="qfoot">Trust in the quoted rate, not features, was what made or broke a transfer.</div>
    </div>
  </div>
</section>

{/* ================= THE OLD WAY VS ONEPIN ================= */}
<section id="sec-2">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">03 · The shift</span>
      <h2 data-split="1"><span className="wr">from</span> <span className="wr">guesswork</span> <span className="wr">to</span> <span className="wr">a</span> <span className="accent"><span className="wr">clear</span> <span className="wr">quote.</span></span></h2>
    </div>
    <div className="body-col reveal" style={{ marginBottom: "30px" }}>
      <p>Booking an FX deal, the core task. Before vs. after the redesign.</p>
    </div>
    <div className="body-col reveal" style={{ marginBottom: "30px" }}>
      <p><b>The bet behind it.</b> I made price transparency the default. The safer option was to show only the familiar headline rate. But research showed the hidden post-margin price was exactly what made users anxious. So I brought market rate, margin, profit and remaining booking time into one reviewable view: the uncomfortable number, made the trustworthy one.</p>
    </div>
    <div className="shiftblk">
      <div><span className="old">anxious, opaque rate-guessing</span><span className="arw">→</span></div>
      <span className="new">the <em>full quote</em>, clear before you book.</span>
      <p className="ssub">Five steps to a rate that might already have moved, now market rate, margin and profit shown together, with a visible 90-second countdown.</p>
    </div>
  </div>
</section>

{/* ================= PROCESS ================= */}
<section id="sec-3">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">04 · Process</span>
      <h2 data-split="1"><span className="wr">designed</span> <span className="wr">for</span> <span className="accent"><span className="wr">confidence.</span></span></h2>
    </div>
    <div className="body-col reveal">
      <p>Research the real anxieties, prototype the transparent flow, and validate it sprint by sprint.</p>
    </div>
    
    <p className="voices-label">in their own words</p>
    <div className="words reveal">
      <div className="wcard cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" }}>
        <blockquote className="wq">“By the time I confirm the rate, it's moved, and I've lost face with the client.”</blockquote>
        <div className="wpersona"><img className="wav" src="https://api.dicebear.com/9.x/notionists/svg?seed=Rashed&amp;backgroundColor=c0e6ff,b6e3f4,d1d4f9" alt="" /><div><span className="wname">Rashed A.</span><span className="wctx">Relationship Manager · Corporate</span></div></div>
      </div>
      <div className="wcard cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" }}>
        <blockquote className="wq">“I need market rate, margin and profit on one screen, or I'm booking blind.”</blockquote>
        <div className="wpersona"><img className="wav" src="https://api.dicebear.com/9.x/notionists/svg?seed=Lena&amp;backgroundColor=ffd5dc,ffdfbf,d1d4f9" alt="" /><div><span className="wname">Lena H.</span><span className="wctx">Treasury Trader</span></div></div>
      </div>
      <div className="wcard cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" }}>
        <blockquote className="wq">“If a special rate breaches my authority, I need to know before I book, not after.”</blockquote>
        <div className="wpersona"><img className="wav" src="https://api.dicebear.com/9.x/notionists/svg?seed=Omar&amp;backgroundColor=c0aede,b6e3f4" alt="" /><div><span className="wname">Omar S.</span><span className="wctx">Senior RM · Special rates</span></div></div>
      </div>
    </div>

    {/* key decision: chose vs rejected */}
    <div className="reframe">
      <span className="re-eyebrow">the bet</span>
      <p className="re-line">Burying fees until checkout nudges <em>conversion</em> short-term. I showed rate, fee and final amount together instead, <strong>total cost upfront</strong>, because trust is the whole product.</p>
    </div>

    {/* interactive process stepper */}
    <div className="stepper" id="stepper">
      <div className="step-tabs" role="tablist">
        <button className="step-tab active" data-step="0"><span className="st-n">01</span> reframe</button>
        <button className="step-tab" data-step="1"><span className="st-n">02</span> prototype</button>
        <button className="step-tab" data-step="2"><span className="st-n">03</span> validate</button>
        <button className="step-tab" data-step="3"><span className="st-n">04</span> ship</button>
        <span className="step-ind" id="stepInd" style={{ width: "25%", transform: "translateX(0%)" }}></span>
      </div>
      <div className="step-panels">
        <div className="step-panel active" data-panel="0">
          <h3>find the real fear</h3>
          <p>Interviews showed the blocker wasn't speed, it was <b>not trusting the rate</b> and fearing hidden fees.</p>
        </div>
        <div className="step-panel" data-panel="1">
          <h3>prototype the transparent quote</h3>
          <p>Designed a quote that shows rate, fee and exact amount received <em>together</em>, with a locked-rate countdown.</p>
        </div>
        <div className="step-panel" data-panel="2">
          <h3>validate with real users</h3>
          <p>Usability-tested the transparent flow vs. the old one, faster transfers and far higher trust in the rate.</p>
        </div>
        <div className="step-panel" data-panel="3">
          <h3>ship a responsive system</h3>
          <p>Delivered a responsive design system so the flow stayed consistent across mobile, tablet and desktop.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= SOLUTION VISUALS ================= */}
<section id="sec-4">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">05 · Solution</span>
      <h2 data-split="1"><span className="wr">the</span> <span className="wr">clear</span> <span className="wr">quote,</span> <span className="wr">made</span> <span className="wr">visible.</span></h2>
    </div>
    <div className="body-col reveal" style={{ marginBottom: "34px" }}>
      <p>From the dense legacy trader terminal to one clear deal-order canvas, verify the client, see rate, margin &amp; profit together, and book before the 90-second window closes.</p>
    </div>

    {/* before / after slider */}
    <div className="ix-ba" id="ba">
      <img className="before" src="../assets/case/fx/legacy-refinitiv.png" alt="legacy Refinitiv FX trading terminal" />
      <img className="after" src="../assets/case/fx/order-filled.png" alt="FX Online" />
      <div className="ba-lbl l">before · Refinitiv terminal</div>
      <div className="ba-lbl r">after · FX Online</div>
      <div className="ba-handle"></div>
    </div>
    <p className="note" style={{ textAlign: "center", marginTop: "12px" }}>drag to compare ⇆</p>
  </div>
</section>

{/* ================= SCROLLYTELLING FLOW ================= */}
<section id="sec-5">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">06 · The flow</span>
      <h2 data-split="1"><span className="wr">the</span> <span className="wr">deal</span> <span className="wr">order,</span> <span className="wr">step</span> <span className="wr">by</span> <span className="accent"><span className="wr">step.</span></span></h2>
    </div>
    <div className="ix-scrolly">
      <div className="ix-stickywrap">
        <div className="ix-sticky" id="sticky">
          <img data-i="0" className="on" src="../assets/case/fx/order-empty.png" />
          <img data-i="1" src="../assets/case/fx/verify-cif.png" />
          <img data-i="2" src="../assets/case/fx/order-filled.png" />
          <img data-i="3" src="../assets/case/fx/rate-timeout.png" />
        </div>
      </div>
      <div className="ix-steps" id="steps">
        <div className="ix-step act" data-i="0"><span className="n">01</span><h3>start the trade</h3><p>The RM opens a clean deal-order canvas, setup on the left, live amounts and rate on the right.</p></div>
        <div className="ix-step" data-i="1"><span className="n">02</span><h3>verify the client (CIF)</h3><p>One tap confirms the customer and pulls their details, no re-typing what the bank already knows.</p></div>
        <div className="ix-step" data-i="2"><span className="n">03</span><h3>rate, margin &amp; profit, together</h3><p>Market quotes, post-margin rates and the live booking countdown, all in one confident view.</p></div>
        <div className="ix-step" data-i="3"><span className="n">04</span><h3>rate timed out? refresh, don't panic</h3><p>When the 90-second rate expires, a clear timeout state lets the RM refresh instead of guessing.</p></div>
      </div>
    </div>

    {/* motion: interaction craft */}
    <div style={{ marginTop: "52px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "22px", alignItems: "start" }}>
      <div>
        <figure className="bw"><video src="../assets/case/fx/fill.mp4" muted loop playsInline autoPlay></video></figure>
        <p className="note" style={{ marginTop: "14px", textAlign: "center" }}>details fill from the client's last deal. the RM confirms rather than re-types.</p>
      </div>
      <div>
        <figure className="bw"><video src="../assets/case/fx/rate.mp4" muted loop playsInline autoPlay></video></figure>
        <p className="note" style={{ marginTop: "14px", textAlign: "center" }}>the market rate springs between values and counts down, so the number you book stays honest.</p>
      </div>
    </div>
  </div>
</section>

{/* ================= HOTSPOTS ================= */}
<section id="sec-6">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">07 · Design decisions</span>
      <h2 data-split="1"><span className="wr">guardrails</span> <span className="wr">on</span> <span className="wr">a</span> <span className="accent"><span className="wr">high-stakes</span></span> <span className="wr">screen.</span></h2>
    </div>
    <div className="ix-hs">
      <img src="../assets/case/fx/special-rate-doa.png" alt="special rate screen" />
      <div className="ix-pin" style={{ left: "62%", top: "30%" }}>1<span className="tip">Inline guardrail: a special margin beyond the RM's authority (DOA) warns immediately, before submit, not after.</span></div>
      <div className="ix-pin" style={{ left: "30%", top: "42%" }}>2<span className="tip">Client identity stays pinned at the top so the RM never loses context mid-negotiation.</span></div>
      <div className="ix-pin" style={{ left: "78%", top: "64%" }}>3<span className="tip">A live market-quotes table makes the rate logic legible instead of hidden in a back-end.</span></div>
    </div>

    {/* motion: the commit moment */}
    <figure className="bw" style={{ margin: "44px auto 0", maxWidth: "560px" }}><video src="../assets/case/fx/commit.mp4" muted loop playsInline autoPlay></video></figure>
    <p className="note" style={{ maxWidth: "560px", margin: "14px auto 0", textAlign: "center" }}>a deliberate commit: press-and-hold, a short processing beat, then unmistakable confirmation. <b>why not one-tap?</b> for an irreversible booking, that final beat is what prevents a costly, unrecoverable mistake.</p>
  </div>
</section>

{/* ================= GALLERY ================= */}
<section id="sec-7">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">08 · Screens</span>
      <h2 data-split="1"><span className="wr">the</span> <span className="wr">full</span> <span className="accent"><span className="wr">picture.</span></span></h2>
    </div>
    <div className="ix-bento" id="bento">
      <div className="cell"><img src="../assets/case/fx/order-empty.png" /><div className="cap">deal order · empty</div></div>
      <div className="cell"><img src="../assets/case/fx/verify-cif.png" /><div className="cap">verify CIF</div></div>
      <div className="cell"><img src="../assets/case/fx/order-filled.png" /><div className="cap">rate + countdown</div></div>
      <div className="cell"><img src="../assets/case/fx/rate-timeout.png" /><div className="cap">rate timeout</div></div>
      <div className="cell"><img src="../assets/case/fx/special-rate-doa.png" /><div className="cap">special rate · guardrail</div></div>
    </div>
  </div>
</section>

{/* ================= IMPACT 3-WAY ================= */}
<section id="sec-8">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">09 · Impact</span>
      <h2 data-split="1"><span className="wr">what</span> <span className="wr">changed,</span> <span className="wr">three</span> <span className="wr">ways.</span></h2>
    </div>
    <div className="impact-sky">
    <div className="impact reveal">
      <div className="imp user">
        <span className="eyebrow">For the RM &amp; trader</span>
        <div className="ibig"><span className="arrow">↑</span> <span data-target="40" data-suffix="%">40%</span></div>
        <p>Lift in perceived task clarity, faster, more confident deal capture under the 90-second window.</p>
      </div>
      <div className="imp biz">
        <span className="eyebrow">For the business</span>
        <div className="ibig"><span className="arrow">↑</span> <span data-target="262" data-suffix="Mn">262Mn</span></div>
        <p>AED booked through FX Online by May 2025, across 16,265 deals.</p>
      </div>
      <div className="imp org">
        <span className="eyebrow">For the org</span>
        <div className="ibig"><span className="arrow">↑</span> <span data-target="400" data-suffix="+">400+</span></div>
        <p>RMs &amp; Traders on one responsive system, consistent across desk and device.</p>
      </div>
    </div>
    </div>
    <p className="note" style={{ textAlign: "center", marginTop: "18px" }}>live-platform figures · reported by the business, May 2025</p>
  </div>
</section>

{/* ================= REFLECTION ================= */}
<section id="sec-9">
  <div className="wrap">
    <div className="sec-head reveal" style={{ marginBottom: "24px" }}>
      <span className="eyebrow">10 · Reflection</span>
    </div>
    <div className="refl-split">
      <h2 className="rs-big">we made a 90-second window feel <em>calm.</em></h2>
      <div className="rs-body">
        <p>Confidence doesn't come from removing complexity. It comes from revealing the right complexity at the moment a person must decide: one canvas where rate, margin and profit live together, so a deal gets booked before the rate moves.</p>
        <p>Every choice answered a real anxiety, "did it go through?", "is this rate still good?", and turned it into something visible and reassuring.</p>
        <p>Building it wasn't linear. It meant unlearning a dense legacy terminal, prototyping, testing with heatmaps, and reworking until attention landed exactly where the decision happens.</p>
        <p>And the system keeps growing. New currency pairs, predictive timeouts, coaching for junior desks, the platform should stay calm and confident long after this release.</p>
      </div>
    </div>
  </div>
</section>

{/* ================= TESTIMONIAL ================= */}
<section>
  <div className="wrap">
    <div className="quote reveal">
      <div className="q">Good fintech design isn't flashy, it's a trader and an RM agreeing a rate in ninety seconds and both knowing, with total certainty, exactly what they just booked.</div>
      <div className="who">The principle behind the platform</div>
    </div>
  </div>
</section>

{/* ================= HANDOFF ================= */}
<section>
  <div className="wrap">
    <div className="handoff reveal">
      <span className="eyebrow">11 · Beyond the Figma file</span>
      <h2>I shipped <span className="accent">trust</span>, not just screens.</h2>
      <p>A responsive design system, handed to engineering so cost-clarity held across every device and future flow.</p>
      <p>Accessible by default: AA-contrast tokens, clear focus states, and legible numerals for amounts and rates.</p>
    </div>
  </div>
</section>

{/* ================= NEXT ================= */}
<footer>
  <div className="wrap">
    <span className="eyebrow">Next chapter · Dubai</span>
    <a className="nextcase reveal" href="/case-business">
      <span className="t">business online →</span>
    </a>
  </div>
</footer>

{/* ============ INTERACTION KIT (scroll reveals · count-up metrics · smooth scroll · sticky section nav) ============ */}


{/* interactions */}
<Script id="script-case-fxonline-1" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  /* native scroll, no Lenis (it was hijacking + lagging the wheel) */

  /* ---- scroll reveals (tag sections + key blocks, stagger their children) ---- */
  var blocks=document.querySelectorAll('header.hero .lede, .metrics, .meta-grid, .sec-head, .body-col, .chips, .cards, .pullquote, .flow-compare, .decision, .visual, .visual-grid, .words, .impact, .quote, .handoff, footer .nextcase');
  blocks.forEach(function(b){ b.classList.add('reveal'); });
  var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }); },{threshold:.16});
  blocks.forEach(function(b){ io.observe(b); });

  /* ---- count-up on the metric hero numbers ---- */
  function animateNum(el){
    var raw=el.getAttribute('data-num'); if(!raw) return;
    var target=parseFloat(raw), suffix=el.getAttribute('data-suffix')||'', dur=1100, t0=null;
    function step(ts){ if(!t0)t0=ts; var p=Math.min(1,(ts-t0)/dur); var eased=1-Math.pow(1-p,3);
      var val=Math.round(target*eased); el.firstChild.nodeValue=val.toLocaleString();
      if(p<1) requestAnimationFrame(step); else el.firstChild.nodeValue=target.toLocaleString(); }
    requestAnimationFrame(step);
  }
  // (legacy hero count-up disabled, replaced by the looping countEl system below)
  document.querySelectorAll('.metric .big.__legacy_off').forEach(function(big){
    var txt=big.textContent.trim();
    if(/^[\\d,]+\\+?$/.test(txt)){
      var plus=txt.indexOf('+')>-1; var n=parseInt(txt.replace(/[,+]/g,''),10);
      big.setAttribute('data-num',n); big.textContent=''; var tn=document.createTextNode('0'); big.appendChild(tn);
      if(plus){ var s=document.createElement('span'); s.textContent='+'; big.appendChild(s);}
      var mo=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ animateNum(big); mo.unobserve(e.target);} }); },{threshold:.5});
      mo.observe(big);
    }
  });

  /* ---- sticky section dot-nav ---- */
  var secs=Array.prototype.slice.call(document.querySelectorAll('section'));
  // keep only sections that have an eyebrow label
  var nav=document.createElement('div'); nav.id='secnav';
  var entries=[];
  secs.forEach(function(s){ var eb=s.querySelector('.sec-head .eyebrow'); if(!eb) return;
    var id=s.id||('sec-'+entries.length); s.id=id;
    var label=eb.textContent.replace(/^\\d+\\s*·\\s*/,'').trim();
    var a=document.createElement('a'); a.href='#'+id; a.innerHTML='<span class="lbl">'+label+'</span>';
    a.addEventListener('click',function(ev){ ev.preventDefault(); document.getElementById(id).scrollIntoView({behavior:'smooth'}); });
    nav.appendChild(a); entries.push({s:s,a:a});
  });
  if(entries.length){ document.body.appendChild(nav);
    var navIo=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){
      entries.forEach(function(en){ en.a.classList.toggle('on', en.s===e.target); }); } }); },{threshold:.4,rootMargin:'-30% 0px -50% 0px'});
    entries.forEach(function(en){ navIo.observe(en.s); });
  }

  /* ---- AFTER card: stagger the checkmarks in (delays per step), replays in view ---- */
  var good=document.querySelector('.flow.good');
  if(good){
    var steps=good.querySelectorAll('.step');
    steps.forEach(function(s,k){ var d=s.querySelector('.dot'); if(d) d.style.transitionDelay=(k*0.13)+'s'; s.style.transitionDelay=(k*0.13)+'s'; });
    var ft=good.querySelector('.ftime'); if(ft) ft.style.transitionDelay=(steps.length*0.13+0.1)+'s';
    var gio=new IntersectionObserver(function(es){ es.forEach(function(e){
      if(e.isIntersecting){ good.classList.add('go'); }
      else { good.classList.remove('go'); } // replay each time it re-enters
    }); },{threshold:.45});
    gio.observe(good);
  }

  /* ---- staggered reveal for problem cards ---- */
  var cardIo=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){
    var cards=Array.prototype.slice.call(e.target.querySelectorAll('.card'));
    cards.forEach(function(c,k){ setTimeout(function(){ c.classList.add('in'); }, k*110); });
    cardIo.unobserve(e.target); } }); },{threshold:.2});
  document.querySelectorAll('.cards').forEach(function(g){ cardIo.observe(g); });

  /* ---- count-up on every metric number + reveal its arrow ---- */
  function countEl(el){
    var target=parseFloat(el.getAttribute('data-target')); var suffix=el.getAttribute('data-suffix')||'';
    if (matchMedia('(max-width: 760px)').matches) { el.textContent=target.toLocaleString()+suffix; return; }
    var delay=parseInt(el.getAttribute('data-delay')||'0',10)*180; var dur=1000, t0=null;
    setTimeout(function(){ requestAnimationFrame(function step(ts){ if(!t0)t0=ts; var p=Math.min(1,(ts-t0)/dur); var e=1-Math.pow(1-p,3);
      el.textContent=Math.round(target*e).toLocaleString()+(p>=1?suffix:''); if(p<1) requestAnimationFrame(step); else el.textContent=target.toLocaleString()+suffix; }); }, delay);
  }
  // count-up that LOOPS while the metrics are on screen (replays every ~3.4s)
  var metricLoop=null;
  function runMetrics(grid){ grid.querySelectorAll('.metric').forEach(function(c){ c.classList.add('lit'); c.querySelectorAll('[data-target]').forEach(countEl); }); }
  var mio=new IntersectionObserver(function(es){ es.forEach(function(e){
    if(e.isIntersecting){ runMetrics(e.target); }
  }); },{threshold:.4});
  var mgrid=document.querySelector('.metrics'); if(mgrid) mio.observe(mgrid);
  // impact-card numbers (also loop)
  var impLoop=null;
  var iio=new IntersectionObserver(function(es){ es.forEach(function(e){
    if(e.isIntersecting){ e.target.querySelectorAll('[data-target]').forEach(countEl); }
  }); },{threshold:.4});
  var igrid=document.querySelector('.impact'); if(igrid) iio.observe(igrid);

  /* ---- word-by-word reveal on big section headings as you scroll ---- */
  function splitWords(h){
    if(h.dataset.split) return;
    h.dataset.split='1';
    // walk DOM nodes; only split TEXT nodes into word-spans, leave element nodes (<span class="accent">, <br>) intact
    var out=[];
    function walk(node){
      Array.prototype.forEach.call(node.childNodes,function(n){
        if(n.nodeType===3){ // text
          var frag=n.textContent.split(/(\\s+)/).map(function(t){ return /\\S/.test(t)?'<span class="wr">'+t+'</span>':t; }).join('');
          out.push(frag);
        } else if(n.nodeType===1){
          if(n.tagName==='BR'){ out.push('<br>'); }
          else { out.push('<'+n.tagName.toLowerCase()+(n.className?' class="'+n.className+'"':'')+'>'); walk(n); out.push('</'+n.tagName.toLowerCase()+'>'); }
        }
      });
    }
    walk(h);
    h.innerHTML=out.join('');
    // also wrap the accent spans themselves so they animate
    h.querySelectorAll('.accent .wr').forEach(function(){});
  }
  var headings=document.querySelectorAll('.sec-head h2, header.hero h1');
  headings.forEach(splitWords);
  var hio=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){
    var words=e.target.querySelectorAll('.wr');
    words.forEach(function(w,k){ setTimeout(function(){ w.classList.add('on'); }, k*70); });
    hio.unobserve(e.target); } }); },{threshold:.4});
  headings.forEach(function(h){ hio.observe(h); });

  /* ---- interactive process stepper (click tabs + gentle auto-advance in view) ---- */
  var stepper=document.getElementById('stepper');
  if(stepper){
    var tabs=stepper.querySelectorAll('.step-tab');
    var panels=stepper.querySelectorAll('.step-panel');
    var ind=document.getElementById('stepInd');
    var nSteps=tabs.length, autoTimer=null, cur=0;
    function showStep(i){ cur=i;
      tabs.forEach(function(t,k){ t.classList.toggle('active',k===i); });
      panels.forEach(function(p,k){ p.classList.toggle('active',k===i); });
      ind.style.width=(100/nSteps)+'%'; ind.style.transform='translateX('+(i*100)+'%)';
    }
    function stopAuto(){ clearInterval(autoTimer); autoTimer=null; }
    function startAuto(){ if(!autoTimer) autoTimer=setInterval(function(){ showStep((cur+1)%nSteps); },4200); }
    tabs.forEach(function(t){ t.addEventListener('click',function(){ stopAuto(); showStep(+t.getAttribute('data-step')); }); });
    var sio=new IntersectionObserver(function(es){ es.forEach(function(e){ e.isIntersecting?startAuto():stopAuto(); }); },{threshold:.4});
    sio.observe(stepper);
    showStep(0);
  }
})();` }} /><div id="secnav"><a href="#sec-0"><span className="lbl">Context</span></a><a href="#sec-1"><span className="lbl">Problem</span></a><a href="#sec-2"><span className="lbl">The shift</span></a><a href="#sec-3"><span className="lbl">Process</span></a><a href="#sec-4"><span className="lbl">Solution</span></a><a href="#sec-5"><span className="lbl">The flow</span></a><a href="#sec-6"><span className="lbl">Design decisions</span></a><a href="#sec-7"><span className="lbl">Screens</span></a><a href="#sec-8"><span className="lbl">Impact</span></a><a href="#sec-9"><span className="lbl">Reflection</span></a></div>
<link rel="stylesheet" href="../assets/case/case-fx-ix.css" />
<div id="lb"><span className="x">✕</span><img src="" alt="" /></div>
<Script src="/../assets/case/case-fx-ix.js?v=zoom1" strategy="afterInteractive" />
  {/* persistent case-study left rail (metadata + scroll-spy nav) */}
  
  <Script src="/case-sidebar.js?v=glass1"  strategy="afterInteractive" />
  {/* global footer */}
  
  <Script src="/footer.js"  strategy="afterInteractive" />
  <Script src="/transition.js"  strategy="afterInteractive" />
  <Script src="/nav.js?v=6"  strategy="afterInteractive" />
  {/* cinematic layer: GSAP scroll choreography + shader grain */}
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
  <Script src="/cinematic.js?v=1" strategy="afterInteractive" /><canvas className="cn-grain" aria-hidden="true" width="1440" height="900"></canvas>
  <Script src="/smooth-scroll.js"  strategy="afterInteractive" />


<aside id="caserail" aria-label="Case study contents"><a className="cr-proj" href="#top">FX Online<span className="a">.</span></a><div className="cr-meta"><div className="cr-fact"><span>Role</span><p>Data Analyst<span className="org">Trading Performance Analysis</span></p></div><div className="cr-fact"><span>Timeline</span><p>Sept 2024, Apr 2025 · Dubai</p></div></div><div className="cr-rule"></div><div className="cr-navlabel">contents</div><nav className="cr-nav" id="crNav"><a href="#top"><i></i><span>overview</span></a><a href="#sec-0"><i>01</i><span>context</span></a><a href="#sec-1"><i>02</i><span>problem</span></a><a href="#sec-2"><i>03</i><span>the shift</span></a><a href="#sec-3"><i>04</i><span>process</span></a><a href="#sec-4"><i>05</i><span>solution</span></a><a href="#sec-5"><i>06</i><span>the flow</span></a><a href="#sec-6"><i>07</i><span>design decisions</span></a><a href="#sec-7"><i>08</i><span>screens</span></a><a href="#sec-8"><i>09</i><span>impact</span></a><a href="#sec-9"><i>10</i><span>reflection</span></a></nav><div className="cr-foot"><div className="cr-prog"><i id="crProgBar" style={{ width: "0%" }}></i></div><div className="cr-pct" id="crPct">0%</div></div></aside><footer id="gfooter" className="ground"><div className="gf-sky" aria-hidden="true"><span className="gf-cloud c1"></span><span className="gf-cloud c2"></span><span className="gf-cloud c3"></span><span className="gf-cloud c4"></span></div><div className="ground-contact"><div className="gf-top"><div className="gf-cta"><div className="ground-kick">contact</div><h2 className="ground-ttl">let’s build <em>something that matters.</em></h2><a className="ground-mail" href="mailto:dineshkatal.work@gmail.com">dineshkatal.work@gmail.com <span className="arw">→</span></a><p className="ground-sub">care about <b>design</b>, <b>impact</b>, and products that actually ship? you know where to find me.</p></div><nav className="gf-cols" aria-label="footer"><div className="gf-col"><span className="gf-h">explore</span><a href="/work">work</a><a href="/beyond">lil about me</a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé ↓</a></div><div className="gf-col"><span className="gf-h">connect</span><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin ↗</a><a href="mailto:dineshkatal.work@gmail.com">email ↗</a></div><div className="gf-col"><span className="gf-h">status</span><span className="gf-avail"><i></i> open to new work</span><span className="gf-line">based in Gurugram, India</span><span className="gf-line">local time <b id="gfClock">2:31 AM</b></span></div></nav></div><div className="gf-bar"><a className="gf-mark" href="/"><svg viewBox="0 0 30 26" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"></path><line x1="15" y1="7" x2="15" y2="4.2"></line><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"></line><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"></line><line x1="2.5" y1="18" x2="27.5" y2="18"></line></svg>dinesh.</a><div className="gf-meta"><span>© 2026 dinesh kumar katal</span><span>designed &amp; built by me — and a few too many coffees · switzer + react</span></div></div></div></footer>
<style dangerouslySetInnerHTML={{ __html: `:root{
    --paper:var(--t-paper);
    --paper-2:var(--t-paper-2);
    --ink:var(--t-ink);
    --ink-soft:var(--t-ink-soft);
    --ink-faint:var(--t-ink-faint);
    --line:var(--t-line);
    --accent:var(--t-accent);
    --accent-soft:var(--t-accent-soft);
    --sage:#8DB67E;
    --gold:var(--t-gold);
    --blue:var(--t-blue);
    --maxw:var(--t-maxw);
    /* CRAFT PASS · surfaces. Base page is pure white, so elevation comes from
       light (hairline + shadow), never from a grey fill. */
    --surface:#ffffff;    /* raised cards */
    --surface-2:#f5f5f5;  /* recessed: section bands, media stages */
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{
    background:var(--paper);
    color:var(--ink);
    font-family:'Switzer',system-ui,sans-serif;
    font-size:17px;
    line-height:1.65;
    -webkit-font-smoothing:antialiased;
  }

  /* ---- type voices ---- */
  .eyebrow{
    font-family:'Geist Mono',monospace;
    text-transform:uppercase;
    letter-spacing:.14em;
    font-size:14px;
    color:#32404F;
    font-weight:500;
  }
  h1,h2,h3{font-family:'Switzer',sans-serif;font-weight:400;letter-spacing:-.03em;line-height:1.02;text-transform:lowercase}
  .accent{color:var(--accent)}
  .script{font-family:'Switzer',cursive;text-transform:none;letter-spacing:0}
  .note{font-family:'Switzer',system-ui,sans-serif;color:var(--ink-soft);font-size:13.5px;letter-spacing:0}

  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}

  /* ---- top nav ---- */
  nav.top{
    position:sticky;top:18px;z-index:50;margin:18px auto 0;max-width:var(--maxw);
    padding:0 18px;
  }
  nav.top .wrap{
    display:flex;align-items:center;justify-content:space-between;height:58px;
    background:rgba(255,255,255,.82);
    backdrop-filter:saturate(150%) blur(12px);
    border:1px solid rgba(20,32,52,.06);
    border-radius:var(--r-2);
    box-shadow:0 8px 30px -12px rgba(20,32,52,.18);
    padding:0 22px;max-width:none;
  }
  .back{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.12em;font-size:12px;color:var(--ink-soft);text-decoration:none;display:inline-flex;gap:8px;align-items:center}
  .back:hover{color:var(--accent)}
  .navmeta{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.12em;font-size:11px;color:var(--ink-faint)}
  /* unified site header (brand left · work/about/lab right) */
  .wnav{display:flex;justify-content:space-between;align-items:center;max-width:var(--maxw);margin:0 auto;padding:22px 18px;}
  .wnav .brand{font-family:'Switzer',sans-serif;font-weight:400;font-size:22px;letter-spacing:-.02em;color:var(--ink);text-decoration:none;}
  .wnav .brand .a{color:var(--accent);}
  /* global site nav (work · about · lab) */
  .snav{display:flex;gap:4px;font-family:'Geist Mono',monospace;font-size:12px;text-transform:lowercase;letter-spacing:.06em}
  .snav a{color:var(--ink-soft);text-decoration:none;padding:7px 13px;border-radius:var(--r-3);border:1px solid transparent;transition:color .2s,border-color .2s}
  .snav a:hover{color:var(--ink);border-color:var(--line)}
  .snav a.on{color:var(--accent)}

  /* ---- hero ---- */
  header.hero{padding:var(--s-8) 0 var(--s-7)}
  .kicker-row{display:flex;align-items:center;gap:14px;margin-bottom:22px;flex-wrap:wrap}
  .pill{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.1em;font-size:11px;border:1px solid var(--line);border-radius:var(--r-pill);padding:5px 11px;color:var(--ink-soft);background:var(--surface-2)}
  .pill.brand{border-color:#0083E7;color:#0083E7;background:rgba(0,131,231,.1)}
  header.hero h1{font-size:clamp(26px,3.6vw,42px);line-height:1.06;margin-bottom:16px}
  .lede{font-size:clamp(15px,1.3vw,17px);max-width:760px;color:var(--ink-soft);line-height:1.5;font-weight:400}
  /* product-forward hero: text + browser-window frames */
  .hero-grid{display:grid;grid-template-columns:1.05fr 1fr;align-items:center;gap:var(--s-6);}
  header.hero .hero-grid h1{font-size:clamp(28px,3.6vw,44px);}
  .hero-stage{position:relative;min-height:430px;display:flex;align-items:center;justify-content:center;}
  .hero-stage .glow{position:absolute;width:520px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(22,32,43,.15),transparent 65%);z-index:0;}
  .bw{position:relative;border-radius:var(--r-2);overflow:hidden;background:var(--surface-2);border:1px solid var(--line);box-shadow:0 44px 84px -42px rgba(0,0,0,.45);}
  .bw .bw-bar{height:32px;background:var(--surface-2);display:flex;align-items:center;gap:7px;padding:0 13px;border-bottom:1px solid var(--line);}
  .bw .bw-bar i{width:10px;height:10px;border-radius:50%;background:#d9d4cc;flex:0 0 auto;display:none;}
  .bw .bw-bar i.r{background:#e8836b}.bw .bw-bar i.y{background:#e6c06b}.bw .bw-bar i.g{background:#9bc47e}
  .bw .bw-bar .url{margin-left:9px;font-family:'Geist Mono',monospace;font-size:9.5px;color:var(--ink-faint);background:var(--surface-2);border:1px solid var(--line);border-radius:6px;padding:3px 12px;}
  .bw img,.bw video{display:block;width:100%;height:auto}
  .bw-main{position:relative;z-index:3;width:108%;max-width:470px}
  .bw-back{position:absolute;z-index:2;width:60%;max-width:265px;top:-9%;right:-6%;transform:rotate(3.5deg);opacity:.92}
  .hp-tag{position:absolute;z-index:5;font-family:'Geist Mono',monospace;font-size:10px;letter-spacing:.06em;text-transform:uppercase;background:var(--surface-2);color:var(--ink);padding:7px 12px;border-radius:var(--r-pill);box-shadow:0 12px 30px -14px rgba(0,0,0,.4);border:1px solid var(--line)}
  .hp-tag.t1{bottom:7%;left:-3%} .hp-tag.t1 .d{color:var(--accent);font-weight:400}
  .hp-tag.t2{top:4%;left:12%}
  header.hero .metrics{margin-top:var(--s-6)}
  @media(max-width:900px){.hero-grid{grid-template-columns:1fr;gap:20px}.hero-stage{min-height:330px;margin-top:6px}header.hero .hero-grid h1{font-size:clamp(28px,5vw,46px)}.bw-main{width:100%}.bw-back{display:none}}
  .lede b{color:var(--ink);font-weight:400}

  /* ---- metric hero (3 big numbers) ---- */
  .metrics{
    display:grid;grid-template-columns:repeat(3,1fr);gap:0;
    border:1px solid var(--hairline);border-radius:var(--r-3);overflow:hidden;
    background:var(--surface);margin-top:var(--s-6);
    box-shadow:var(--shadow-1);
  }
  .metric{padding:38px 34px;border-right:1px solid var(--line);position:relative;transition:background .3s,transform .3s}
  .metric:last-child{border-right:none}
  .metric:hover{background:linear-gradient(180deg,#fff,var(--accent-soft));z-index:2}
  .metric .big{font-family:'Switzer',sans-serif;font-weight:400;letter-spacing:-.04em;font-size:clamp(20px,2.4vw,28px);line-height:1;color:var(--ink)}
  .metric .big .arrow{color:#0083E7;font-weight:500;font-size:.92em;display:inline-block;transition:transform .35s cubic-bezier(.4,0,.1,1)}
  .metric:hover .big .arrow{transform:translateX(8px)}
  /* arrow draws/slides in when the card enters view */
  .metric .big .arrow{opacity:1;transform:translateX(-6px)}
  .imp .ibig .arrow,.ibig .arrow{color:#0083E7;font-weight:500;font-size:.88em;display:inline-block}
  .metric.lit .big .arrow{opacity:1;transform:translateX(0);transition:opacity .5s ease .35s,transform .5s cubic-bezier(.4,0,.1,1) .35s}
  .metric.lit:hover .big .arrow{transform:translateX(8px)}
  .metric .label{margin-top:14px;font-size:14.5px;color:var(--ink-soft);line-height:1.45}
  .metric .tag{margin-top:10px;display:inline-block}

  /* ---- section scaffold ---- */
  section{padding:var(--s-8) 0;border-top:1px solid rgba(20,32,52,.07)}
  .sec-head{margin-bottom:var(--s-4)}
  .sec-head .eyebrow{display:block;margin-bottom:7px}
  .sec-head h2{font-size:clamp(20px,2.4vw,28px);line-height:1.12}
  .body-col{max-width:740px}
  .body-col p{margin-bottom:18px;color:var(--ink-soft)}
  .body-col p b{color:var(--ink);font-weight:400}

  /* ---- meta grid (role/team/timeline/tags) ---- */
  .meta-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:var(--s-4)}
  .voices{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--s-3);margin:4px 0 28px}
  .voice{border:1px solid var(--hairline);border-radius:var(--r-2);padding:24px 22px;background:var(--surface);box-shadow:var(--shadow-1);display:flex;flex-direction:column;gap:16px}
  .voice .vq{font-family:'Switzer',serif;font-style:normal;font-size:20px;line-height:1.32;color:var(--ink)}
  .voice .vq::before{content:'“';color:var(--accent);font-weight:500;margin-right:1px}
  .voice .vw{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.1em;font-size:10.5px;color:var(--ink-faint);margin-top:auto}
  .voices-label{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.14em;font-size:11px;color:var(--ink-faint);margin:0 0 14px}
  .meta-grid .cell .eyebrow{display:block;margin-bottom:8px}
  .meta-grid .cell .v{font-size:16px;color:var(--ink);font-weight:500;line-height:1.4}
  .meta-grid .cell .v.small{font-size:14.5px;color:var(--ink-soft);font-weight:400}

  /* ---- case snapshot (unified card) ---- */
  .snapshot-sec{padding-top:var(--s-6);border-top:none}
  .snap-kicker{display:block;margin-bottom:16px}
  .snap-card{border:none;border-radius:0;overflow:visible;background:transparent}
  .snap-facts{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:none;gap:30px 36px}
  .snap-fact{padding:0;border-right:none}
  .snap-fact:last-child{border-right:none}
  .snap-fact .eyebrow{display:block;margin-bottom:6px;color:#32404F}
  .snap-fact p{font-size:15px;color:var(--ink);line-height:1.45;margin:0;font-weight:400}
  .snapshot{display:grid;grid-template-columns:repeat(3,1fr);gap:30px 36px;margin-top:var(--s-5);padding-top:var(--s-5);border-top:1px solid var(--line)}
  .snap-cell{padding:0;border-right:none}
  .snap-cell:last-child{border-right:none}
  .snap-cell .eyebrow{display:block;margin-bottom:9px;color:#32404F}
  .snap-cell p{font-size:15px;color:var(--ink-soft);line-height:1.6;margin:0}
  @media(max-width:760px){
    .snap-facts{grid-template-columns:1fr 1fr}
    .snap-fact:nth-child(2n){border-right:none}
    .snap-fact:nth-child(1),.snap-fact:nth-child(2){border-bottom:none}
    .snapshot{grid-template-columns:1fr}
    .snap-cell{border-right:none;border-bottom:none}
    .snap-cell:last-child{border-bottom:none}
  }

  /* ---- scannable chips (Anushriya-style micro-copy) ---- */
  .chips{display:flex;flex-wrap:wrap;gap:10px}
  .chip{font-size:14px;color:var(--ink-soft);background:var(--surface-2);border:1px solid var(--line);border-radius:var(--r-1);padding:9px 14px;line-height:1.35}
  .chip b{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.08em;font-size:11px;color:var(--accent);margin-right:7px}

  /* ---- word-by-word heading reveal ---- */
  .wr{display:inline-block;opacity:0;transform:translateY(18px);transition:opacity .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)}
  .wr.on{opacity:1;transform:none}

  /* ---- problem cards ---- */
  .cards{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--s-4)}
  .card{position:relative;overflow:hidden;border:1px solid var(--hairline);border-radius:var(--r-2);background:var(--surface);padding:30px;box-shadow:var(--shadow-1);
    transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .45s var(--ease),background .45s var(--ease)}
  /* accent edge that grows on hover */
  .card::before{content:none}
  .card:hover{transform:translateY(-5px);border-color:#cfdcee;box-shadow:var(--shadow-2)}
  .card:hover::before{transform:scaleY(1)}
  .card .num{font-family:'Geist Mono',monospace;font-size:12px;color:#2f6cb8;letter-spacing:.1em;display:inline-block;transition:transform .35s cubic-bezier(.2,1.4,.4,1)}
  .card:hover .num{transform:translateX(2px)}
  .card h3{font-size:18px;margin:10px 0 8px;transition:color .3s}
  .card:hover h3{color:var(--accent)}
  .card p{font-size:15px;color:var(--ink-soft);margin:0}
  /* staggered scroll-in */
  .card{opacity:0;transform:translateY(20px)}
  .card.in{opacity:1;transform:none;transition:opacity .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)}
  .card.in:hover{transform:translateY(-6px)}
  /* ---- research pull-quote ---- */
  .pullquote{margin-top:var(--s-6);text-align:center;position:relative;padding:18px 20px}
  .pullquote .qmark{font-family:'Switzer';font-weight:400;font-size:120px;line-height:.6;color:var(--accent);opacity:.16;display:block;height:50px}
  .pullquote .qlabel{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.16em;font-size:11px;color:var(--ink-faint);margin-bottom:18px}
  .pullquote .qbig{font-family:'Switzer',serif;font-style:normal;font-size:clamp(28px,4vw,48px);line-height:1.08;color:var(--ink);max-width:860px;margin:0 auto 24px;letter-spacing:-.01em}
  .pullquote .qsrc{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
  .pullquote .qsrc span{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.08em;font-size:11px;color:var(--ink-soft);border:1px solid var(--line);border-radius:var(--r-pill);padding:6px 13px;background:var(--surface-2)}
  .pullquote .qfoot{margin-top:18px;font-size:14.5px;color:var(--ink-faint);max-width:560px;margin-left:auto;margin-right:auto}

  /* ---- old vs new pipeline ---- */
  .flow-compare{display:grid;grid-template-columns:1fr 1fr;gap:var(--s-4)}
  .flow{border:1px solid var(--hairline);border-radius:var(--r-2);padding:28px;background:var(--surface);box-shadow:var(--shadow-1)}
  .flow.bad{background:var(--surface-2);box-shadow:none}
  .flow.good{border-color:rgba(20,32,52,.18);box-shadow:var(--shadow-1)}
  .flow .ftitle{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.1em;font-size:12px;margin-bottom:18px;color:var(--ink-soft)}
  .flow.good .ftitle{color:var(--accent)}
  .step{display:flex;gap:12px;align-items:flex-start;padding:9px 0;font-size:14.5px;color:var(--ink-soft)}
  .step .dot{flex:0 0 auto;width:22px;height:22px;border-radius:50%;background:var(--paper);border:1px solid var(--line);display:grid;place-items:center;font-family:'Geist Mono',monospace;font-size:11px;color:var(--ink-faint)}
  .flow.good .step .dot{background:var(--accent);border-color:var(--accent);color:#fff}
  /* AFTER card micro-interaction: checkmarks pop in one-by-one when card enters view */
  .flow.good{transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
  .flow.good:hover{transform:translateY(-5px);box-shadow:var(--shadow-2)}
  .flow.good .step .dot{transform:scale(0);transition:transform .45s cubic-bezier(.2,1.6,.4,1)}
  .flow.good.go .step .dot{transform:scale(1)}
  .flow.good .step{opacity:.35;transition:opacity .4s ease}
  .flow.good.go .step{opacity:1}
  .flow.good .step .dot{position:relative}
  /* tiny ring ping when each check appears */
  .flow.good.go .step .dot::after{content:'';position:absolute;inset:-4px;border:2px solid var(--accent);border-radius:50%;opacity:0;animation:ping .6s ease-out}
  @keyframes ping{0%{transform:scale(.6);opacity:.6}100%{transform:scale(1.5);opacity:0}}
  .flow.good .ftime{transform:translateY(8px);opacity:0;transition:transform .5s cubic-bezier(.2,.8,.2,1),opacity .5s}
  .flow.good.go .ftime{transform:none;opacity:1}
  .flow .ftime{margin-top:16px;font-family:'Switzer';font-weight:400;font-size:30px;letter-spacing:-.03em}
  .flow.bad .ftime{color:var(--ink-soft)}
  .flow.good .ftime{color:var(--accent)}

  /* ---- interactive process stepper ---- */
  .stepper{margin-top:var(--s-5);border:1px solid var(--hairline);border-radius:var(--r-3);background:var(--surface);overflow:hidden;box-shadow:var(--shadow-1)}
  .step-tabs{position:relative;display:flex;border-bottom:1px solid var(--line);background:var(--surface-2)}
  .step-tab{flex:1;appearance:none;background:none;border:none;cursor:pointer;padding:18px 16px;text-align:left;
    font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.08em;font-size:12px;color:var(--ink-faint);transition:color .25s;border-right:1px solid var(--line)}
  .step-tab:last-of-type{border-right:none}
  .step-tab .st-n{display:block;font-size:18px;font-family:'Switzer';font-weight:400;letter-spacing:-.02em;color:var(--ink-faint);margin-bottom:4px;transition:color .25s}
  .step-tab.active{color:var(--ink)} .step-tab.active .st-n{color:var(--accent)}
  .step-tab:hover{color:var(--ink-soft)}
  .step-ind{position:absolute;bottom:-1px;left:0;height:2px;background:var(--accent);width:25%;transition:transform .35s cubic-bezier(.4,0,.1,1)}
  .step-panels{position:relative;padding:34px 32px;min-height:150px}
  .step-panel{display:none;animation:stepIn .4s ease}
  .step-panel.active{display:block}
  @keyframes stepIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
  .step-panel h3{font-size:22px;margin-bottom:10px}
  .step-panel p{color:var(--ink-soft);max-width:640px;margin-bottom:16px}
  @media(max-width:680px){.step-tab{padding:12px 10px;font-size:10px}.step-tab .st-n{font-size:15px}}

  /* ---- decision callout ---- */
  .decision{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid var(--hairline);border-radius:var(--r-2);overflow:hidden;margin-top:var(--s-4);box-shadow:var(--shadow-1)}
  .decision>div{padding:26px}
  .decision .chose{background:var(--surface)}
  .decision .rejected{background:var(--surface-2);border-left:1px solid var(--line)}
  .decision h3{font-size:18px;margin-bottom:10px;display:flex;align-items:center;gap:8px}
  .decision .rejected h3{color:var(--ink-faint);text-decoration:line-through;text-decoration-color:var(--ink-faint)}
  .decision p{font-size:14.5px;color:var(--ink-soft);margin:0}
  .tick{color:var(--accent)}

  /* ---- visual placeholder frames ---- */
  .visual{border:1.5px dashed var(--line);border-radius:var(--r-2);background:repeating-linear-gradient(45deg,#fff,#fff 12px,var(--paper) 12px,var(--paper) 24px);min-height:300px;display:grid;place-items:center;text-align:center;padding:30px;color:var(--ink-faint)}
  .visual .vlabel{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.12em;font-size:12px;margin-bottom:8px;color:var(--ink-soft)}
  .visual .vhint{font-size:14px;max-width:340px}
  .visual-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--s-3);margin-top:var(--s-3)}
  .visual.tall{min-height:420px}
  .visual.wide{min-height:260px}

  /* ---- impact 3-way (cloudy panel · white cards · green arrows) ---- */
  .impact-sky{border-radius:var(--r-4);padding:clamp(30px,4.4vw,52px);
    background:radial-gradient(46% 64% at 13% 14%,rgba(255,255,255,.9),transparent 56%),radial-gradient(42% 54% at 87% 8%,rgba(255,255,255,.72),transparent 52%),radial-gradient(54% 60% at 66% 100%,rgba(255,255,255,.6),transparent 56%),linear-gradient(180deg,#cfe3f6 0%,#dceafb 50%,#e9f2fc 100%);}
  .impact{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--s-3)}
  .imp{border:1px solid var(--hairline);border-radius:var(--r-2);padding:30px 28px;background:var(--surface);box-shadow:var(--shadow-1)}
  .imp .eyebrow{display:flex;align-items:center;gap:7px;margin-bottom:18px}
  .imp .eyebrow::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--green)}
  .imp .ibig{font-family:'Switzer';font-weight:500;font-size:clamp(32px,3.2vw,44px);letter-spacing:-.03em;line-height:1;margin-bottom:14px;color:var(--ink);display:flex;align-items:center;gap:11px}
  .imp .ibig .arrow{color:#0083E7;font-weight:500;font-size:.88em;display:inline-block}
  .imp p{font-size:14.5px;color:var(--ink-soft);margin:0;line-height:1.5}

  /* ---- testimonial ---- */
  .quote{border:1px solid var(--hairline);border-radius:var(--r-3);background:var(--surface);padding:54px 44px;text-align:center;box-shadow:var(--shadow-1)}
  .quote .q{font-family:'Switzer',serif;font-style:normal;font-size:clamp(20px,2.4vw,28px);line-height:1.22;color:var(--ink);max-width:820px;margin:0 auto 24px;letter-spacing:-.01em}
  .quote .who{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.12em;font-size:12px;color:var(--ink-faint)}
  .pending{border:1px dashed var(--accent);background:var(--accent-soft)}
  .pending .q{color:var(--ink-soft)}

  /* ---- handoff ---- */
  .handoff{background:var(--ink);color:#F4F1E8;border-radius:var(--r-2);padding:42px 38px}
  .handoff .eyebrow{color:#B9AE9C}
  .handoff h2{color:#fff;font-size:clamp(19px,2.2vw,26px);margin:12px 0 16px}
  .handoff p{color:#D7CFC1;max-width:720px;font-size:15.5px}
  .handoff .accent{color:#DB7B50}

  /* ---- footer ---- */
  footer{padding:34px 0 30px;border-top:1px solid var(--line);text-align:center}
  footer .eyebrow{display:block;margin-bottom:10px}
  .nextcase{display:inline-flex;flex-direction:column;gap:6px;text-decoration:none;color:var(--ink)}
  .nextcase .t{font-family:'Switzer';font-weight:400;font-size:25px;letter-spacing:-.03em;text-transform:lowercase}
  .nextcase:hover .t{color:var(--accent)}
  .soon{font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.1em;font-size:10px;color:var(--ink-faint);border:1px solid var(--line);border-radius:var(--r-pill);padding:3px 9px;align-self:center;margin-top:6px}

  /* annotation badge for draft notes (toggle off when shipping) */
  .draftnote{position:relative}
  .draftnote{overflow:hidden}
  .draftnote::after{content:attr(data-note);position:absolute;top:10px;right:10px;font-family:'Switzer',cursive;font-size:11px;color:var(--accent);background:var(--accent-soft);border:1px dashed var(--accent);border-radius:8px;padding:2px 8px;transform:rotate(-2deg);max-width:60%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:5}

  @media(max-width:820px){
    .metrics,.impact{grid-template-columns:1fr}
    .metric{border-right:none;border-bottom:1px solid var(--line)}
    .metric:last-child{border-bottom:none}
    .cards,.flow-compare,.decision,.visual-grid{grid-template-columns:1fr}
    .meta-grid,.voices{grid-template-columns:1fr 1fr}
    .imp .eyebrow{margin-bottom:8px}
  }

    .mqx-bar,.bw-bar,.sf-bar,.opin-bar{display:none!important}
  #lb{position:fixed;inset:0;background:rgba(20,18,15,.92);display:none;place-items:center;z-index:2000;padding:30px;cursor:zoom-out}
  #lb.on{display:grid}
  #lb img{max-width:96%;max-height:94%;border-radius:8px;box-shadow:0 30px 80px rgba(0,0,0,.5)}
  #lb .x{position:absolute;top:22px;right:28px;color:#fff;font-size:30px;cursor:pointer}
  .ix-sticky{cursor:zoom-in}` }} />
<style dangerouslySetInnerHTML={{ __html: `.fxj{height:480vh;position:relative}
.fxj .stick{position:sticky;top:0;height:100vh;padding:clamp(10px,1.6vh,18px);display:grid;place-items:center}
.fxj .stage{position:relative;height:min(100%,760px);width:100%;border-radius:24px;overflow:hidden;
  background-color:#fff;
  background-image:radial-gradient(rgba(22,19,15,.08) 1px,transparent 1px);background-size:16px 16px;
  border:1px solid rgba(22,19,15,.07);box-shadow:0 24px 70px -34px rgba(22,19,15,.22);
  display:grid;place-items:center}
.fxj .beat{grid-area:1/1;width:min(760px,calc(100% - clamp(40px,7vw,96px)));text-align:center;
  opacity:0;transform:translateY(16px);pointer-events:none;position:relative;z-index:3;
  transition:opacity .5s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1)}
.fxj .beat.on{opacity:1;transform:none}
.fxj .stepk{font-family:'Switzer',system-ui,sans-serif;font-weight:500;font-size:11px;
  letter-spacing:.16em;text-transform:uppercase;color:rgba(22,19,15,.55);margin-bottom:10px}
.fxj .steph{font-size:clamp(16px,1.7vw,21px);color:rgba(22,19,15,.8);letter-spacing:-.015em;
  line-height:1.4;margin-bottom:clamp(20px,3.6vh,36px);text-wrap:balance}
.fxj .big{font-size:clamp(30px,4.4vw,58px);line-height:1.14;letter-spacing:-.035em;color:#16130f}
.fxj .big .a{color:#0083E7}
.fxj .tick{margin-top:18px;font-family:'Geist Mono',ui-monospace,monospace;font-size:14px;
  letter-spacing:.06em;color:rgba(22,19,15,.6);font-variant-numeric:tabular-nums}
.fxj .tick b{color:#16130f;font-weight:500}
/* rate cards */
.fxj .rc{display:inline-block;text-align:left;background:#fff;border:1px solid rgba(22,19,15,.11);
  border-radius:16px;padding:18px 22px;box-shadow:0 14px 34px -18px rgba(22,19,15,.18);min-width:min(340px,80vw)}
.fxj .rc .k{font-size:12px;color:rgba(22,19,15,.5);margin-bottom:4px}
.fxj .rc .v{font-family:'Geist Mono',ui-monospace,monospace;font-size:26px;color:#16130f;
  font-variant-numeric:tabular-nums;letter-spacing:.02em;transition:color .3s}
.fxj .rc.dead .v{color:rgba(22,19,15,.35);text-decoration:line-through;text-decoration-color:#d97706}
.fxj .rc .to{margin-top:10px;display:none;align-items:center;justify-content:space-between;gap:14px;
  background:#fdf1e3;border:1px solid #f0ce9e;border-radius:10px;padding:8px 12px;
  font-family:'Geist Mono',ui-monospace,monospace;font-size:12px;color:#b45309}
.fxj .rc.dead .to{display:flex}
.fxj .chain{margin-top:16px;font-family:'Geist Mono',ui-monospace,monospace;font-size:11px;
  letter-spacing:.04em;color:rgba(22,19,15,.45)}
/* the booking card */
.fxj .bc{display:inline-block;text-align:left;background:#fff;border:1px solid rgba(22,19,15,.11);
  border-radius:16px;padding:18px 22px;box-shadow:0 14px 34px -18px rgba(22,19,15,.18);min-width:min(360px,82vw)}
.fxj .bc .top{display:flex;justify-content:space-between;gap:18px;font-size:13px;color:#16130f;margin-bottom:12px}
.fxj .bc .top b{font-weight:600}
.fxj .lock{display:flex;align-items:center;justify-content:space-between;gap:14px;
  background:#eaf7ee;border:1.5px solid #74c08a;border-radius:12px;padding:10px 14px}
.fxj .lock .tl{font-size:11px;color:#1d6b3c}
.fxj .lock .tv{font-family:'Geist Mono',ui-monospace,monospace;font-size:22px;color:#1d6b3c;
  font-variant-numeric:tabular-nums}
.fxj .place{margin-top:12px;text-align:center;background:#16130f;color:#fff;border-radius:10px;
  padding:11px 0;font-size:13.5px;font-weight:500;transition:background .3s}
.fxj .bc.done .lock{background:#e2f5e8}
.fxj .bc.done .place{background:#1d6b3c}
/* final count */
.fxj .num{font-size:clamp(54px,8vw,110px);line-height:1;letter-spacing:-.045em;color:#16130f;
  font-variant-numeric:tabular-nums}
.fxj .cap{margin-top:14px;font-size:clamp(16px,1.8vw,22px);color:rgba(22,19,15,.75);letter-spacing:-.015em}
.fxj .cap b{color:#0083E7;font-weight:500}
@media(prefers-reduced-motion:reduce){
  .fxj{height:auto}
  .fxj .stick{position:static;height:auto}
  .fxj .stage{display:block;padding:44px 24px;height:auto}
  .fxj .beat{opacity:1;transform:none;margin:0 auto 44px;grid-area:auto}
}` }} />
<style dangerouslySetInnerHTML={{ __html: `/* scroll reveal */
  .reveal{opacity:0;transform:translateY(24px);transition:opacity 1.1s cubic-bezier(.19,1,.22,1),transform 1.1s cubic-bezier(.19,1,.22,1);}
  .reveal.in{opacity:1;transform:none;}
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1!important;transform:none!important;transition:none!important}}
  /* sticky section dot-nav (right edge) */
  #secnav{position:fixed;right:20px;top:50%;transform:translateY(-50%);z-index:60;display:flex;flex-direction:column;gap:14px;}
  #secnav a{position:relative;width:11px;height:11px;border-radius:50%;border:2px solid var(--ink-faint);background:transparent;transition:all .3s;}
  #secnav a.on{background:var(--accent);border-color:var(--accent);transform:scale(1.25);}
  #secnav a .lbl{position:absolute;right:22px;top:50%;transform:translateY(-50%);white-space:nowrap;font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.1em;font-size:10px;color:var(--ink-soft);background:var(--surface-2);border:1px solid var(--line);border-radius:8px;padding:4px 9px;opacity:0;pointer-events:none;transition:opacity .25s;}
  #secnav a:hover .lbl{opacity:1;}
  #secnav a.on .lbl{opacity:1;}
  @media(max-width:900px){#secnav{display:none}}` }} />
    </>
  );
}
