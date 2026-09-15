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
    <div className="pgx-mark"><span className="wm">sketching it up<span className="dot">.</span></span></div>
    <svg width="0" height="0" aria-hidden="true"><filter id="pgxink"><feTurbulence type="fractalNoise" baseFrequency="0.013 0.021" numOctaves="2" seed="6" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="10" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter></svg>
  </div>

<nav className="wnav" style={{ display: "none" }}>
  <a className="brand" href="/">dinesh<span className="a">.</span></a>
  <nav className="snav">
    <a href="/work" className="on">work</a>
    <a href="/beyond">lil&nbsp;about&nbsp;me</a>
    
    <a className="ext" href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti exti-up">↗</span></a><a className="ext" href="../assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti exti-dn">↓</span></a><a href="/quick">quick&nbsp;view</a>
  </nav>
</nav>

{/* ================= HERO ================= */}
{/* ============ ONE PAYMENT'S JOURNEY · cinematic cold open (scoped boj-) ============ */}
<section style={{ paddingBlock: "0", borderTop: "none" }}>


<div className="boj" id="boj">
  <div className="stick">
    <div className="stage">

      <div className="beat on" data-b="0">
        <div className="stepk">the payment</div>
        <div className="steph">A supplier is waiting. The deadline is today.</div>
        <div className="big">AED 2,400,000, ready to go. <span className="a">The Authorizer is boarding a flight.</span></div>
      </div>

      <div className="beat" data-b="1">
        <div className="stepk">the old way</div>
        <div className="steph">Three roles, and the last one is chained to a desk.</div>
        <div className="pile" id="bojpile">
          <div className="pg"><span className="rl">maker</span><span>Creates the payment. <b>Done by 9am.</b></span></div>
          <div className="pg"><span className="rl">checker</span><span>Verifies every detail. <b>Done by 10.</b></span></div>
          <div className="pg stuck"><span className="rl">authorizer</span><span>Can only release it <b>from the desktop, at the office.</b></span></div>
          <div className="still" id="bojstill">payment waits · supplier waits · deadline slips</div>
        </div>
      </div>

      <div className="beat" data-b="2">
        <div className="stepk">business online</div>
        <div className="steph">The same release, from seat 14A.</div>
        <div className="ph">
          <div className="hdr"><b>Pending approval</b><span>Authorizer</span></div>
          <div className="fr"><span className="k">Beneficiary</span><span className="v">Gulf Steel Works</span></div>
          <div className="fr"><span className="k">Amount</span><span className="v">AED 2,400,000</span></div>
          <div className="fr"><span className="k">Checked by</span><span className="v">R. Menon ✓</span></div>
          <div className="hold"><i id="bojfill"></i><span id="bojlbl">Hold to approve</span></div>
          <div className="from">reviewed · approved · released</div>
        </div>
      </div>

      <div className="beat" data-b="3">
        <div className="stepk">shipped · emirates nbd · mena</div>
        <div className="num"><span id="bojnum">1.0</span><span className="a">×</span></div>
        <div className="cap">faster approvals and key journeys, from wherever the Authorizer is.</div>
      </div>

    </div>
  </div>
</div>

<Script id="script-case-business-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var host=document.getElementById('boj'); if(!host||RM) return;
  var beats=[].slice.call(host.querySelectorAll('.beat'));
  var pgs=[].slice.call(host.querySelectorAll('.pg'));
  var still=document.getElementById('bojstill');
  var fill=document.getElementById('bojfill');
  var lbl=document.getElementById('bojlbl');
  var num=document.getElementById('bojnum');
  var N=4;
  function render(p){
    var idx=Math.min(N-1,Math.floor(p*N));
    var t=Math.max(0,Math.min(1,p*N-idx));
    beats.forEach(function(b,k){ b.classList.toggle('on',k===idx); });
    if(idx===1){
      pgs.forEach(function(pg,k){ pg.classList.toggle('on', t>0.08+k*0.2); });
      still.classList.toggle('on', t>0.78);
    }
    if(idx===2){
      var f=Math.max(0,Math.min(1,(t-0.25)/0.5));
      fill.style.width=(f*100)+'%';
      lbl.textContent = f>=1 ? '\\u2713 Approved \\u00b7 released' : 'Hold to approve';
    }
    if(idx===3){
      var e=1-Math.pow(1-Math.min(1,t*1.5),3);
      num.textContent=(1+2*e).toFixed(1);
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
        <div className="kicker-row" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0.128px, 0px)", opacity: "0.9951", visibility: "inherit" }}>
          <span className="eyebrow">mobile app · enterprise banking · iOS &amp; android</span>
        </div>

        <h1 data-split="1"><span className="wr">corporate</span> <span className="wr">banking,</span> <span className="wr">in</span> <span className="wr">your</span> <span className="accent"><span className="wr">pocket.</span></span></h1>

        <p className="lede reveal" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0.2559px, 0px)", opacity: "0.9902", visibility: "inherit" }}>
          Emirates NBD's corporate banking app across MENA. Authorizers were desk-bound for time-sensitive payments. <b>I owned the maker-checker-authorizer experience and device activation</b>, turning a dense desktop system into role-specific iOS and Android journeys.
        </p>
      </div>

      <div className="hero-stage" aria-hidden="true" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0.5118px, 0px)", opacity: "0.9803", visibility: "inherit" }}>
        <div className="glow"></div>
        <div className="hp-phone hp-left"><div className="scr"><img src="../assets/case/bo/ba-after.png?v=6" alt="" /></div></div>
        <div className="hp-phone hp-right"><div className="scr"><img src="../assets/case/bo/before-screen.png?v=6" alt="" /></div></div>
        <div className="hp-phone hp-center"><div className="scr"><video src="../assets/case/bo/flow1.mp4?v=6" poster="../assets/case/bo/flow1-poster.png?v=6" autoPlay muted loop playsInline preload="auto"></video></div></div>
      </div>
    </div>

    {/* key metrics */}
    <div className="metrics reveal" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 1.0237px, 0px)", opacity: "0.9606", visibility: "inherit" }}>
      <div className="metric">
        <div className="big"><span data-target="70" data-suffix="%">70%</span><span className="trend up">↑</span></div>
        <div className="label">Faster delivery, by aligning design sprints with engineering readiness.</div>
        <span className="eyebrow tag">Delivery</span>
      </div>
      <div className="metric">
        <div className="big"><span data-target="3" data-suffix="×">3×</span><span className="trend up">↑</span></div>
        <div className="label">Faster task completion in key journeys like approvals and beneficiary management.</div>
        <span className="eyebrow tag">Speed</span>
      </div>
      <div className="metric">
        <div className="big"><span data-target="500" data-suffix="+">500+</span><span className="trend up">↑</span></div>
        <div className="label">Screens designed across end-to-end journeys.</div>
        <span className="eyebrow tag">Scale</span>
      </div>
      <div className="metric">
        <div className="big"><span data-target="12" data-suffix="">12</span><span className="trend up">↑</span></div>
        <div className="label">End-to-end journeys created, including dashboard, login and payments.</div>
        <span className="eyebrow tag">Coverage</span>
      </div>
    </div>
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
          <p>Sr. Product Designer · Business Online, mobile</p>
        </div>
        <div className="snap-fact">
          <span className="eyebrow">Team</span>
          <p>1 design lead + 3 senior designers (I led UX/UI with 2 others), plus product, iOS &amp; Android eng &amp; business</p>
        </div>
        <div className="snap-fact">
          <span className="eyebrow">Timeline</span>
          <p>2024 · Emirates NBD, Dubai</p>
        </div>
        <div className="snap-fact">
          <span className="eyebrow">Tools</span>
          <p>Figma · user research via user testing</p>
        </div>
      </div>
      <div className="snapshot">
        <div className="snap-cell">
          <span className="eyebrow">What I did</span>
          <p>Owned the role-based experience (Maker, Checker, Authorizer) and the full device-activation onboarding, end-to-end. Co-built the mobile component anatomy handed to iOS &amp; Android.</p>
        </div>
        <div className="snap-cell">
          <span className="eyebrow">Impact</span>
          <p>70% faster delivery and 3× faster task completion in key journeys, across 500+ screens and 12 end-to-end journeys.</p>
        </div>
        <div className="snap-cell">
          <span className="eyebrow">Constraints</span>
          <p>A small screen carrying high-value payments, multiple user roles, security controls, authorization limits, and dense financial data.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= THE TEAM ================= */}
<section id="sec-0">
  <div className="wrap">
    <div className="team-grid">
      <div className="team-text">
        <div className="sec-head reveal" style={{ marginBottom: "18px" }}>
          <span className="eyebrow">The team</span>
          <h2 data-split="1"><span className="wr">four</span> <span className="wr">designers,</span> <span className="wr">one</span> <span className="accent"><span className="wr">redesign.</span></span></h2>
        </div>
        <p>A tight team: <b>one design lead and three senior product designers</b>. I drove the role-based journeys and onboarding, working closely with product and iOS &amp; Android engineering.</p>
      </div>
      <figure className="team-photo">
        <img src="../assets/case/bo/team.png?v=1" alt="The BOX Mobile design team working together at Emirates NBD, one lead and three senior product designers" />
      </figure>
    </div>
  </div>
</section>

{/* ================= THE REDESIGN (before/after hook) ================= */}
<section id="sec-1">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">The redesign</span>
      <h2 data-split="1"><span className="wr">legacy</span> <span className="wr">→</span> <span className="accent"><span className="wr">redesign.</span></span></h2>
    </div>
    <div className="ba-annotated wipe">
      <ul className="ba-notes l">
        <li><span className="t">Basic, functional layout with limited visual hierarchy</span><span className="ln"></span><span className="bar"></span></li>
        <li><span className="t">No distinction between user types</span><span className="ln"></span><span className="bar"></span></li>
        <li><span className="t">Limited contextual insights</span><span className="ln"></span><span className="bar"></span></li>
      </ul>
      <div className="ba-wipe-col">
        <div className="bo-ba" id="ba">
          <img className="before" src="../assets/case/bo/ba-before.png?v=6" alt="legacy Business Online home, before the redesign" />
          <img className="after" src="../assets/case/bo/ba-after.png?v=6" alt="redesigned Business Online home, after" />
          <div className="ba-lbl l">before</div><div className="ba-lbl r">after</div>
          <div className="ba-handle"></div>
        </div>
        <p className="note" style={{ textAlign: "center", marginTop: "14px" }}>drag ⇆ to reveal the redesign</p>
      </div>
      <ul className="ba-notes r">
        <li><span className="bar"></span><span className="ln"></span><span className="t">Modernized layout with clear segmentation of actions, balances, and insights</span></li>
        <li><span className="bar"></span><span className="ln"></span><span className="t">Role-based cards (e.g. "Pending Approvals" for Authorizers only) keep focus</span></li>
        <li><span className="bar"></span><span className="ln"></span><span className="t">Added Payment Tracker, Recent Transactions, and Carbon Footprint widgets</span></li>
      </ul>
    </div>
  </div>
</section>

{/* ================= CONTEXT ================= */}
<section id="sec-2">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">01 · Context</span>
      <h2 data-split="1"><span className="wr">banking</span> <span className="wr">that</span> <span className="wr">fits</span> <span className="wr">in</span> <span className="wr">a</span> <span className="accent"><span className="wr">thumb.</span></span></h2>
    </div>
    <div className="body-col reveal">
      <p>Corporate banking is built for desktop dashboards. The person approving a multi-million-AED payment is usually away from their desk. <span className="mk">The job: make high-stakes banking feel safe and simple on a phone.</span></p>
    </div>
  </div>
</section>

{/* ================= ROLES (maker / checker / authorizer) ================= */}
<section id="sec-3">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">02 · The roles</span>
      <h2 data-split="1"><span className="wr">one</span> <span className="wr">payment,</span> <span className="wr">three</span> <span className="accent"><span className="wr">roles.</span></span></h2>
    </div>
    <div className="body-col reveal" style={{ marginBottom: "34px" }}><p>First, the people. A corporate payment isn't one person's job: a <b>Maker</b> creates it, a <b>Checker</b> verifies it, an <b>Authorizer</b> releases it, each with a focused view and a clear approve-or-reject fork.</p></div>

    <div className="roleflow-wrap">
      <div className="roleflow" id="roleflow">
        <svg viewBox="0 0 1000 272" preserveAspectRatio="none" aria-hidden="true">
          <line className="conn draw" x1="150" y1="136" x2="370" y2="136"></line>
          <line className="conn draw" x1="370" y1="136" x2="535" y2="136"></line>
          <path className="appr draw" d="M685,136 C745,118 770,76 852,74"></path>
          <path className="rej draw" d="M685,136 C745,154 770,196 824,200"></path>
        </svg>
        <div className="pnode" style={{ left: "15%" }}><span className="role">Maker</span><div className="act">Creates</div></div>
        <div className="pnode" style={{ left: "37%" }}><span className="role">Checker</span><div className="act">Verifies</div></div>
        <div className="dnode" style={{ left: "61%" }}><div><span className="role">Authorizer</span><div className="act">Decides</div></div></div>
        <span className="dbio" style={{ left: "61%" }}>biometric check</span>
        <div className="dterm" style={{ left: "88%" }}>✓ released</div>
        <div className="dret" style={{ left: "84.5%" }}>✕ back to maker</div>
      </div>
    </div>
    <p className="note" style={{ textAlign: "center", marginTop: "16px" }}>maker and checker do the work; the Authorizer decides. Approve releases it, reject returns it to the Maker.</p>
  </div>
</section>

{/* ================= PROBLEM ================= */}
<section id="sec-4">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">03 · Problem</span>
      <h2 data-split="1"><span className="wr">high</span> <span className="wr">stakes</span> <span className="wr">on</span> <span className="wr">a</span> <span className="accent"><span className="wr">small</span> <span className="wr">screen.</span></span></h2>
    </div>
    <div className="cards reveal">
      <div className="card">
        <div className="num">01</div>
        <h3>Approvals stuck at the desk</h3>
        <p>Authorizers had to wait until they were at a desktop to release payments.</p>
      </div>
      <div className="card">
        <div className="num">02</div>
        <h3>"Did it go through?"</h3>
        <p>Unclear status after authorizing, no confident confirmation on mobile.</p>
      </div>
      <div className="card">
        <div className="num">03</div>
        <h3>Dense for a phone</h3>
        <p>Desktop-grade data crammed onto a small screen, hard to scan.</p>
      </div>
      <div className="card">
        <div className="num">04</div>
        <h3>Multi-role complexity</h3>
        <p>Makers, checkers and authorizers each need a different view.</p>
      </div>
    </div>

    <div className="pullquote reveal">
      <span className="qmark">“</span>
      <div className="qlabel">the signal · user + heatmap research</div>
      <div className="qbig">I just need to approve it and know it's done.</div>
      <div className="qsrc"><span>Business owners</span><span>Finance teams</span><span>Authorizers</span></div>
      <div className="qfoot">Confidence and clarity, not more features, was what authorizers asked for.</div>
    </div>
  </div>
</section>

{/* ================= RESEARCH (heatmaps) ================= */}
<section id="sec-5">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">04 · Research</span>
      <h2 data-split="1"><span className="wr">the</span> <span className="wr">data</span> <span className="wr">backed</span> <span className="wr">the</span> <span className="accent"><span className="wr">complaints.</span></span></h2>
    </div>
    <div className="body-col reveal" style={{ marginBottom: "30px" }}><p>We started with daily users. The same frustrations kept surfacing, so before redrawing a screen we validated them with <b>attention heatmaps</b> on the legacy app.</p></div>
    
        <p className="voices-label">in their own words</p>
    <div className="words reveal">
      <div className="wcard cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px) translate(0px, 2.14753px)" }}>
        <blockquote className="wq">“If I'm out of the office, a payment just waits, I can't release anything until I'm back at my desk.”</blockquote>
        <div className="wpersona"><img className="wav" src="https://api.dicebear.com/9.x/notionists/svg?seed=Imran&amp;backgroundColor=c0e6ff,b6e3f4" alt="" /><div><span className="wname">Imran K.</span><span className="wctx">Finance Authorizer</span></div></div>
      </div>
      <div className="wcard cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px) translate(0px, 2.14753px)" }}>
        <blockquote className="wq">“After I tap approve I'm never quite sure it actually went through.”</blockquote>
        <div className="wpersona"><img className="wav" src="https://api.dicebear.com/9.x/notionists/svg?seed=Priya&amp;backgroundColor=ffd5dc,ffdfbf" alt="" /><div><span className="wname">Priya N.</span><span className="wctx">Business Owner</span></div></div>
      </div>
      <div className="wcard cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px) translate(0px, 2.14753px)" }}>
        <blockquote className="wq">“There's so much packed onto one screen, I scan for the one number I need and ignore the rest.”</blockquote>
        <div className="wpersona"><img className="wav" src="https://api.dicebear.com/9.x/notionists/svg?seed=Tariq&amp;backgroundColor=d1d4f9,c0aede" alt="" /><div><span className="wname">Tariq M.</span><span className="wctx">Finance Team · Daily user</span></div></div>
      </div>
    </div>
    <p className="heat-kicker">attention heatmaps · legacy app · validating what users told us</p>

    <div className="heatflow">
      <div className="heat-figlabel"><span className="fl">Fig.01 · Authorizer · approvals</span><span className="heat-verdict">approvals lost in the noise</span></div>
      <figure className="heat-fig lb-open"><img src="../assets/case/bo/auth.png?v=2" alt="Attention heatmap across the legacy Authorizer approval flow" /></figure>
      <ul className="heat-oid">
        <li><span className="k">Observed</span><span className="v">Across the approval journey, attention spread evenly over headers, balances and dense request tables, <b>the pending-authorization items never pulled the eye</b>.</span></li>
        <li className="val"><span className="k">Validates</span><span className="v">Confirms what authorizers described: the one action they open the app for was buried in everything else on screen.</span></li>
        <li className="dec"><span className="k">Decision</span><span className="v">Led with a task-based home and a focused approval queue, so <b>pending approvals are the first thing an Authorizer sees</b>.</span></li>
      </ul>
    </div>

    <div className="heatflow">
      <div className="heat-figlabel"><span className="fl">Fig.02 · Maker · beneficiary management</span><span className="heat-verdict">no clear path to the action</span></div>
      <figure className="heat-fig lb-open"><img src="../assets/case/bo/maker.png?v=2" alt="Attention heatmap across the legacy Maker add-beneficiary flow" /></figure>
      <ul className="heat-oid">
        <li><span className="k">Observed</span><span className="v">Through the add-beneficiary flow, attention scattered down long, undifferentiated lists and form fields, <b>no step made its primary action obvious</b>.</span></li>
        <li className="val"><span className="k">Validates</span><span className="v">Matches the "I scan for the one thing I need and ignore the rest" feedback, the flow read as a wall to scan, not a path to follow.</span></li>
        <li className="dec"><span className="k">Decision</span><span className="v">Simplified navigation and surfaced the primary action at each step, turning beneficiary management into a <b>guided, faster path</b>.</span></li>
      </ul>
    </div>
  </div>
</section>

{/* ================= THE SHIFT (before vs after) ================= */}
<section id="sec-6">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">05 · The shift</span>
      <h2 data-split="1"><span className="wr">from</span> <span className="wr">desk-bound</span> <span className="wr">to</span> <span className="accent"><span className="wr">on</span> <span className="wr">the</span> <span className="wr">go.</span></span></h2>
    </div>
    <div className="body-col reveal" style={{ marginBottom: "30px" }}>
      <p>Approving a pending payment, the core task. Before vs. after the mobile redesign.</p>
    </div>
    <div className="body-col reveal" style={{ marginBottom: "30px" }}>
      <p><b>The bet behind it.</b> The obvious move is the whole portal on a phone. But a finance lead on the go needs one thing: authorize a pending payment, fast, and know it released. I scoped to that moment, not feature parity. Saying no to everything else is what made it quick.</p>
    </div>
    <div className="shiftblk">
      <div><span className="old">approvals tethered to a desk</span><span className="arw">→</span></div>
      <span className="new">released in <em>seconds</em>, from anywhere.</span>
      <p className="ssub">What needed a desktop and a wait is now a pending-first home screen, authorizers see and clear tasks the moment they land.</p>
    </div>
  </div>
</section>

{/* ================= PROCESS ================= */}
<section id="sec-7">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">06 · Process</span>
      <h2 data-split="1"><span className="wr">designed</span> <span className="wr">for</span> <span className="wr">the</span> <span className="accent"><span className="wr">thumb</span> <span className="wr">zone.</span></span></h2>
    </div>
    <div className="body-col reveal">
      <p>Research how authorizers really work on mobile, prototype the flows, and validate with heatmaps and testing.</p>
    </div>

    {/* key decision: chose vs rejected */}
    <div className="reframe">
      <span className="re-eyebrow">the bet</span>
      <p className="re-line">Cramming the full desktop dashboard onto a phone would keep the very density that made approvals slow. Instead I led with a <em>pending-first</em> home, <strong>what needs action, at the top.</strong></p>
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
          <h3>map the roles</h3>
          <p>Makers create, checkers verify, authorizers release. Each needed a focused mobile view, not one crowded screen.</p>
        </div>
        <div className="step-panel" data-panel="1">
          <h3>prototype the flows</h3>
          <p>Designed a pending-first home, a clear authorize action, and a frictionless device-activation journey.</p>
        </div>
        <div className="step-panel" data-panel="2">
          <h3>validate with heatmaps</h3>
          <p>Ran heatmap + usability testing on the new screens, attention landed exactly where the key actions live.</p>
        </div>
        <div className="step-panel" data-panel="3">
          <h3>ship across iOS &amp; Android</h3>
          <p>Delivered a documented component anatomy so the app stayed consistent across both platforms and future releases.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= SOLUTION (mobile) ================= */}
<section id="sec-8">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">07 · Solution</span>
      <h2 data-split="1"><span className="wr">the</span> <span className="wr">app,</span> <span className="accent"><span className="wr">in</span> <span className="wr">hand.</span></span></h2>
    </div>
    <div className="body-col reveal" style={{ marginBottom: "36px" }}><p>A Maker and a Checker don't need the same screen. Each home is tuned to what that role actually does, here are the key decisions, on the live build.</p></div>
    
    <div className="annrole">
      <figure className="bo-vid"><video src="../assets/case/bo/flow1.mp4?v=6" poster="../assets/case/bo/flow1-poster.png?v=6" autoPlay muted loop playsInline preload="auto"></video></figure>
      <div className="annrole-info">
        <span className="rd-role">Checker</span>
        <ul className="annlist">
          <li><b>Pending Approvals, upfront</b><span>Task-based prioritisation, the approval queue leads the dashboard instead of sitting in a menu.</span></li>
          <li><b>Approve / Reject in context</b><span>Role-aware CTAs replace the one generic button.</span></li>
          <li><b>Workflow tab</b><span>Every step of a transaction is visible, for full transparency.</span></li>
        </ul>
      </div>
    </div>
    <div className="annrole">
      <figure className="bo-vid"><video src="../assets/case/bo/flow2.mp4?v=6" poster="../assets/case/bo/flow2-poster.png?v=6" autoPlay muted loop playsInline preload="auto"></video></figure>
      <div className="annrole-info">
        <span className="rd-role">Maker</span>
        <ul className="annlist">
          <li><b>Create New, front and centre</b><span>The Maker's primary action leads, in place of a generic CTA.</span></li>
          <li><b>Role-relevant quick links</b><span>Action cards for the Maker's common tasks replace the generic shortcut.</span></li>
          <li><b>Workflow tab</b><span>See exactly where a submitted payment sits in the approval chain.</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* ================= TRUST SIGNALS (hotspots) ================= */}
<section id="sec-9">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">08 · Trust by design</span>
      <h2 data-split="1"><span className="wr">moving</span> <span className="wr">money</span> <span className="accent"><span className="wr">needs</span> <span className="wr">trust.</span></span></h2>
    </div>
    <div className="body-col reveal" style={{ marginBottom: "30px" }}><p>In corporate banking, confidence is designed. Every element here does quiet work to make a CFO trust an irreversible transfer, hover the markers.</p></div>
    <div className="bo-trust-wrap">
      <div className="bo-trust">
        <img src="../assets/case/bo/authorizer-checker.png" alt="business online home screen" />
        <button className="bo-hot" style={{ top: "15.5%", left: "32%" }} aria-label="balance"><span className="dot"></span><span className="tip"><b>Balance to the fil</b>Shown to two decimals, in real time, precision signals the numbers can be trusted, down to the cent.</span></button>
        <button className="bo-hot" style={{ top: "30%", left: "21%" }}><span className="dot"></span><span className="tip"><b>Nothing slips through</b>12 pending approvals surfaced up front, every payment awaiting action is visible, never buried.</span></button>
        <button className="bo-hot" style={{ top: "30%", left: "73%" }}><span className="dot"></span><span className="tip"><b>Risk, proactively flagged</b>Action &amp; alerts brings issues to the user instead of waiting to be found.</span></button>
        <button className="bo-hot" style={{ top: "51%", left: "44%" }}><span className="dot"></span><span className="tip"><b>Masked account numbers</b>Sensitive details are partially hidden by default, privacy on a shared or shoulder-surfed screen.</span></button>
        <button className="bo-hot" style={{ top: "71.5%", left: "64%" }}><span className="dot"></span><span className="tip"><b>The loop is closed</b>"Credited to beneficiary" confirms the money actually arrived, not just that it was sent.</span></button>
      </div>
    </div>
    <p className="note" style={{ textAlign: "center", marginTop: "14px" }}>hover a ● marker to see the trust signal</p>
  </div>
</section>

{/* ================= ONBOARDING (device activation) ================= */}
<section id="sec-10">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">09 · Onboarding</span>
      <h2 data-split="1"><span className="wr">secure</span> <span className="wr">setup,</span> <span className="wr">no</span> <span className="accent"><span className="wr">branch</span> <span className="wr">visit.</span></span></h2>
    </div>
    <div className="body-col reveal" style={{ marginBottom: "34px" }}><p>Before touching a file, a corporate user has to prove who they are. I designed the full <b>device-activation</b> journey, subscriber ID, OTP, password, Smart Pass PIN, so first-time users sign in without visiting a branch.</p></div>

    <div className="bo-scrolly">
      <div className="bo-sticky">
        <div className="bo-stickyphone">
          <img data-i="0" className="on" src="../assets/case/bo/onb-identify.png?v=5" alt="Activate your device, enter subscriber and user ID" />
          <img data-i="1" src="../assets/case/bo/onb-verify.png?v=5" alt="Verify your number, six-digit OTP with live countdown" />
          <img data-i="2" src="../assets/case/bo/onb-secure.png?v=5" alt="Set up your password with live rule validation" />
          <img data-i="3" src="../assets/case/bo/onb-activated.png?v=5" alt="Device activated, quick login with Touch ID or MPIN" />
        </div>
      </div>
      <div className="bo-sc-steps" id="boSteps">
        <div className="bo-sc-step act" data-i="0">
          <span className="n">01 · identify</span>
          <h3>prove who you are</h3>
          <p>Subscriber and user ID from the welcome email. The bank already knows the corporate, so there's nothing to invent, just confirm.</p>
        </div>
        <div className="bo-sc-step" data-i="1">
          <span className="n">02 · verify</span>
          <h3>a one-time code</h3>
          <p>A six-digit OTP to the registered number, with a live countdown and a resend path. Verify the channel before any credential is set.</p>
          <div className="bo-sc-note"><span className="k">decision</span><span className="v">Countdown and Resend are visible from second one, so no one's left guessing whether the code is stuck.</span></div>
        </div>
        <div className="bo-sc-step" data-i="2">
          <span className="n">03 · secure</span>
          <h3>set a password it can trust</h3>
          <p>Rules validate live and turn green as you type, then a four-digit Smart Pass PIN for fast re-entry. No guessing what "strong enough" means.</p>
          <div className="bo-sc-note"><span className="k">decision</span><span className="v">Rules check as you type, not on submit, so a weak password gets fixed in the moment instead of bounced after.</span></div>
        </div>
        <div className="bo-sc-step" data-i="3">
          <span className="n">04 · activated</span>
          <h3>in, and ready</h3>
          <p>Device activated, with Touch ID and MPIN offered for faster, safer access next time, all without a branch visit.</p>
        </div>
      </div>
    </div>

  </div>
</section>

{/* ================= IMPACT 3-WAY ================= */}
<section id="sec-11">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow">10 · Impact</span>
      <h2 data-split="1"><span className="wr">3×</span> <span className="wr">faster,</span> <span className="wr">off</span> <span className="wr">the</span> <span className="accent"><span className="wr">desk.</span></span></h2>
    </div>
    <div className="impact-sky">
    <div className="impact reveal">
      <div className="imp user">
        <span className="eyebrow">For the user</span>
        <div className="imp-stat"><b>3×<span className="trend up">↑</span></b><span>faster task completion</span></div>
        <p>Role-specific UI and simplified navigation cut the steps in key journeys like approvals and beneficiary management, so the work that mattered got done three times faster.</p>
      </div>
      <div className="imp biz">
        <span className="eyebrow">For the business</span>
        <div className="imp-stat"><b>70%<span className="trend up">↑</span></b><span>faster delivery</span></div>
        <p>Aligning design sprints with engineering readiness cut delivery time, so the redesign shipped faster without stalling on handoff.</p>
      </div>
      <div className="imp org">
        <span className="eyebrow">For the org</span>
        <div className="imp-stat"><b>500+<span className="trend up">↑</span></b><span>screens, one system</span></div>
        <p>A documented mobile component anatomy keeps iOS and Android consistent and lets every future release build on a real system, not one-off screens.</p>
      </div>
    </div>
    </div>
    <p className="note" style={{ textAlign: "center", marginTop: "18px" }}>measured across approvals and beneficiary-management journeys</p>
  </div>
</section>

{/* ================= REFLECTION ================= */}
<section id="sec-12">
  <div className="wrap">
    <div className="sec-head reveal" style={{ marginBottom: "24px" }}>
      <span className="eyebrow">11 · Reflection</span>
    </div>
    <div className="refl-split">
      <h2 className="rs-big">We built something <em>better than polished.</em></h2>
      <div className="rs-body">
        <p>This wasn't just a redesign. It was a re-alignment of roles, priorities, and how we want business users to feel when they interact with BOX Mobile.</p>
        <p>Every decision was rooted in real user insight and built to scale. We simplified complexity without removing depth.</p>
        <p>Working on this project wasn't linear, and that's what made it real. It involved sketching, unlearning, reworking, and lots of back-and-forth.</p>
        <p>And as always, the process continues. Because great design isn't ever done, it just keeps getting sharper with every scroll, tap, and insight.</p>
      </div>
    </div>
  </div>
</section>

{/* ================= TESTIMONIAL ================= */}
<section>
  <div className="wrap">
    <div className="quote reveal">
      <div className="q">Great mobile banking design is invisible, a business owner approves a huge payment from their phone and never once feels nervous.</div>
      <div className="who">The principle behind the app</div>
    </div>
  </div>
</section>

{/* ================= HANDOFF ================= */}
<section>
  <div className="wrap">
    <div className="handoff-grid">
      <div className="handoff reveal">
        <span className="eyebrow">12 · Beyond the Figma file</span>
        <h2>I shipped a <span className="accent">mobile system</span>, not just screens.</h2>
        <p>A documented component anatomy handed to iOS and Android, so the experience stayed consistent and every release built on a real system.</p>
        <p>Accessible by default: large touch targets, AA-contrast tokens, and clear focus states for every authorizer.</p>
      </div>
      <figure className="handoff-vid">
        <video src="../assets/case/bo/design-lib.mp4?v=1" poster="../assets/case/bo/design-lib-poster.jpg?v=1" autoPlay muted loop playsInline preload="metadata"></video>
      </figure>
    </div>
  </div>
</section>

{/* ================= NEXT ================= */}
<footer>
  <div className="wrap">
    <span className="eyebrow">Next chapter · Gurugram</span>
    <a className="nextcase reveal" href="/case-podonos">
      <span className="t">podonos · onepin →</span>
    </a>
  </div>
</footer>

{/* ============ INTERACTION KIT (scroll reveals · count-up metrics · smooth scroll · sticky section nav) ============ */}


{/* interactions */}
<Script id="script-case-business-1" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
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
    var label=eb.textContent.replace(/^\\d+[a-z]?\\s*·\\s*/i,'').trim();
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
})();` }} /><div id="secnav"><a href="#sec-0"><span className="lbl">The team</span></a><a href="#sec-1"><span className="lbl">The redesign</span></a><a href="#sec-2"><span className="lbl">Context</span></a><a href="#sec-3"><span className="lbl">The roles</span></a><a href="#sec-4"><span className="lbl">Problem</span></a><a href="#sec-5"><span className="lbl">Research</span></a><a href="#sec-6"><span className="lbl">The shift</span></a><a href="#sec-7"><span className="lbl">Process</span></a><a href="#sec-8"><span className="lbl">Solution</span></a><a href="#sec-9"><span className="lbl">Trust by design</span></a><a href="#sec-10"><span className="lbl">Onboarding</span></a><a href="#sec-11"><span className="lbl">Impact</span></a><a href="#sec-12"><span className="lbl">Reflection</span></a></div>
<link rel="stylesheet" href="../assets/case/case-bo-ix.css?v=33" />
<div id="lb"><span className="x">✕</span><img src="" alt="" /></div>
<Script src="/../assets/case/case-bo-ix.js?v=9" strategy="afterInteractive" />
  {/* persistent case-study left rail (metadata + scroll-spy nav) */}
  
  <Script src="/case-sidebar.js?v=name2"  strategy="afterInteractive" />
  {/* global footer */}
  
  <Script src="/footer.js"  strategy="afterInteractive" />
  <Script src="/transition.js"  strategy="afterInteractive" />
  <Script src="/nav.js?v=6"  strategy="afterInteractive" />
  {/* cinematic layer: GSAP scroll choreography + shader grain */}
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
  <Script src="/cinematic.js?v=1" strategy="afterInteractive" /><canvas className="cn-grain" aria-hidden="true" width="1440" height="900"></canvas>
  <Script src="/smooth-scroll.js"  strategy="afterInteractive" />


<aside id="caserail" aria-label="Case study contents"><a className="cr-proj" href="#top">Business Online<span className="a">.</span></a><div className="cr-meta"><div className="cr-fact"><span>Role</span><p>Sr. Product Designer<span className="org">Business Online, mobile</span></p></div><div className="cr-fact"><span>Timeline</span><p>2024 · Emirates NBD, Dubai</p></div></div><div className="cr-rule"></div><div className="cr-navlabel">contents</div><nav className="cr-nav" id="crNav"><a href="#top"><i></i><span>overview</span></a><a href="#sec-0"><i></i><span>the team</span></a><a href="#sec-1"><i></i><span>the redesign</span></a><a href="#sec-2"><i>01</i><span>context</span></a><a href="#sec-3"><i>02</i><span>the roles</span></a><a href="#sec-4"><i>03</i><span>problem</span></a><a href="#sec-5"><i>04</i><span>research</span></a><a href="#sec-6"><i>05</i><span>the shift</span></a><a href="#sec-7"><i>06</i><span>process</span></a><a href="#sec-8"><i>07</i><span>solution</span></a><a href="#sec-9"><i>08</i><span>trust by design</span></a><a href="#sec-10"><i>09</i><span>onboarding</span></a><a href="#sec-11"><i>10</i><span>impact</span></a><a href="#sec-12"><i>11</i><span>reflection</span></a></nav><div className="cr-foot"><div className="cr-prog"><i id="crProgBar" style={{ width: "0%" }}></i></div><div className="cr-pct" id="crPct">0%</div></div></aside><footer id="gfooter" className="ground"><div className="gf-sky" aria-hidden="true"><span className="gf-cloud c1"></span><span className="gf-cloud c2"></span><span className="gf-cloud c3"></span><span className="gf-cloud c4"></span></div><div className="ground-contact"><div className="gf-top"><div className="gf-cta"><div className="ground-kick">contact</div><h2 className="ground-ttl">let’s build <em>something that matters.</em></h2><a className="ground-mail" href="mailto:dineshkatal.work@gmail.com">dineshkatal.work@gmail.com <span className="arw">→</span></a><p className="ground-sub">care about <b>design</b>, <b>impact</b>, and products that actually ship? you know where to find me.</p></div><nav className="gf-cols" aria-label="footer"><div className="gf-col"><span className="gf-h">explore</span><a href="/work">work</a><a href="/beyond">lil about me</a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé ↓</a></div><div className="gf-col"><span className="gf-h">connect</span><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin ↗</a><a href="mailto:dineshkatal.work@gmail.com">email ↗</a></div><div className="gf-col"><span className="gf-h">status</span><span className="gf-avail"><i></i> open to new work</span><span className="gf-line">based in Gurugram, India</span><span className="gf-line">local time <b id="gfClock">2:31 AM</b></span></div></nav></div><div className="gf-bar"><a className="gf-mark" href="/"><svg viewBox="0 0 30 26" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"></path><line x1="15" y1="7" x2="15" y2="4.2"></line><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"></line><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"></line><line x1="2.5" y1="18" x2="27.5" y2="18"></line></svg>dinesh.</a><div className="gf-meta"><span>© 2026 dinesh kumar katal</span><span>designed &amp; built by me — and a few too many coffees · switzer + react</span></div></div></div></footer>
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
    box-shadow:var(--shadow-2);
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
  .lede b{color:var(--ink);font-weight:400}
  /* product-forward hero: text + floating device frames */
  .hero-grid{display:grid;grid-template-columns:1.04fr .96fr;align-items:center;gap:46px;}
  header.hero .hero-grid h1{font-size:clamp(30px,4vw,48px);}
  .hero-stage{position:relative;height:540px;display:flex;align-items:center;justify-content:center;}
  .hero-stage .glow{position:absolute;width:440px;height:440px;border-radius:50%;background:radial-gradient(circle,rgba(22,32,43,.16),transparent 65%);z-index:0;}
  .hp-phone{position:absolute;border-radius:40px;background:#1c1a17;padding:11px;box-shadow:0 24px 60px -20px rgba(22,32,43,.18),0 0 0 2px rgba(22,32,43,.06);overflow:hidden;}
  .hp-phone::before{content:'';position:absolute;top:14px;left:50%;transform:translateX(-50%);width:76px;height:18px;background:#1c1a17;border-radius:0 0 14px 14px;z-index:3;}
  .hp-phone .scr{width:100%;height:100%;border-radius:29px;overflow:hidden;background:#0c1018;}
  .hp-phone video,.hp-phone img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;}
  .hp-center{width:252px;aspect-ratio:546/1183;z-index:3;}
  .hp-left{width:212px;aspect-ratio:546/1183;z-index:2;left:2%;top:50%;transform:translateY(-50%);}
  .hp-right{width:212px;aspect-ratio:546/1183;z-index:2;right:2%;top:50%;transform:translateY(-50%);}
  .hp-tag{position:absolute;z-index:5;font-family:'Geist Mono',monospace;font-size:10px;letter-spacing:.06em;text-transform:uppercase;background:var(--surface-2);color:var(--ink);padding:7px 12px;border-radius:30px;box-shadow:0 12px 30px -14px rgba(0,0,0,.4);border:1px solid var(--line);}
  .hp-tag.t1{top:7%;right:9%;} .hp-tag.t1 .d{color:var(--accent);font-weight:400;}
  .hp-tag.t2{bottom:12%;left:8%;}
  header.hero .metrics{margin-top:var(--s-6);}
  @media(max-width:900px){.hero-grid{grid-template-columns:1fr;gap:18px}.hero-stage{height:430px;margin-top:6px}.hero-grid h1{font-size:clamp(30px,5vw,48px)}}
  /* phones are fixed-width (252/212) and overlap badly on a real phone — scale the
     whole stack with the viewport so all three fan out and fit without clipping */
  @media(max-width:600px){
    .hero-stage{height:auto;min-height:118vw;max-height:520px;margin-top:2px}
    .hp-center{width:min(52vw,212px)}
    .hp-left{width:min(38vw,156px);left:0}
    .hp-right{width:min(38vw,156px);right:0}
    .hero-stage .glow{width:80vw;height:80vw}
  }

  /* ---- metric hero (3 big numbers) ---- */
  .metrics{
    display:grid;grid-template-columns:repeat(4,1fr);gap:0;
    border:1px solid var(--hairline);border-radius:var(--r-3);overflow:hidden;
    background:var(--surface);margin-top:var(--s-6);
    box-shadow:var(--shadow-1);
  }
  .metric{padding:32px 24px;border-right:1px solid var(--line);position:relative;transition:background .3s,transform .3s}
  .metric:last-child{border-right:none}
  .metric:hover{background:linear-gradient(180deg,#fff,var(--accent-soft));z-index:2}
  .metric .big{font-family:'Switzer',sans-serif;font-weight:400;letter-spacing:-.04em;font-size:clamp(20px,2.4vw,28px);line-height:1;color:var(--ink)}
  .metric .big .arrow{color:var(--accent);font-weight:400;display:inline-block;transition:transform .35s cubic-bezier(.4,0,.1,1)}
  .metric:hover .big .arrow{transform:translateX(8px)}
  /* arrow draws/slides in when the card enters view */
  .metric .big .arrow{opacity:0;transform:translateX(-6px)}
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
  .snapshot{display:grid;grid-template-columns:repeat(3,1fr);gap:30px 36px;margin-top:34px;padding-top:34px;border-top:1px solid var(--line)}
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

  /* process timeline spine + node dots (scoped to this stepper) */
  #stepper{position:relative;padding-left:34px}
  #stepper::before{content:'';position:absolute;left:5px;top:20px;bottom:20px;width:2px;background:var(--line)}
  #stepper .step-panel{position:relative}
  #stepper .step-panel::before{content:'';position:absolute;left:-35px;top:27px;width:16px;height:16px;border-radius:50%;background:linear-gradient(150deg,rgba(120,195,255,.65),rgba(0,131,231,.4));border:1px solid rgba(255,255,255,.6);box-shadow:inset 0 1px 1.5px rgba(255,255,255,.85),inset 0 -2px 3px rgba(0,70,140,.3),0 5px 12px -3px rgba(0,131,231,.38),0 0 0 5px #fff;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);z-index:1;transition:transform .45s ease,box-shadow .45s ease,background .45s ease}
  #stepper.lit .step-panel::before{transform:scale(1.16);background:linear-gradient(150deg,rgba(125,198,255,.92),rgba(0,131,231,.72));box-shadow:inset 0 1px 1.5px rgba(255,255,255,.95),inset 0 -2px 4px rgba(0,70,140,.45),0 6px 16px -3px rgba(0,131,231,.55),0 0 0 5px #fff}
  #stepper.lit .step-panel:nth-child(1)::before{transition-delay:.05s}
  #stepper.lit .step-panel:nth-child(2)::before{transition-delay:.22s}
  #stepper.lit .step-panel:nth-child(3)::before{transition-delay:.39s}
  #stepper.lit .step-panel:nth-child(4)::before{transition-delay:.56s}
  @media(max-width:680px){#stepper{padding-left:28px}#stepper .step-panel::before{left:-28px}}

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
  .visual-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:18px}
  .visual.tall{min-height:420px}
  .visual.wide{min-height:260px}

  /* ---- impact 3-way ---- */
  .impact{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--s-4)}
  .imp{border:1px solid var(--hairline);border-radius:var(--r-2);padding:30px;background:var(--surface);box-shadow:var(--shadow-1)}
  .imp .eyebrow{display:block;margin-bottom:14px}
  .imp .ibig{font-family:'Switzer';font-weight:400;font-size:30px;letter-spacing:-.03em;line-height:1.05;margin-bottom:10px}
  /* unified color system: all headlines ink, accent reserved for emphasis only */
  .imp .ibig{color:var(--ink)}
  .imp .ibig .arrow{color:var(--accent)}
  /* small colored eyebrow dot keeps a hint of variety without clashing headlines */
  .imp .eyebrow{display:flex;align-items:center;gap:7px}
  .imp .eyebrow::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--accent)}
  .imp p{font-size:14.5px;color:var(--ink-soft);margin:0}
  .imp .imp-stat{margin:2px 0 12px}
  .imp .imp-stat b{display:inline-flex;align-items:center;gap:.04em;white-space:nowrap;font-family:'Switzer';font-weight:500;font-size:44px;letter-spacing:-.03em;line-height:.9;color:var(--ink)}
  .imp .imp-stat>span{display:block;margin-top:9px;font-family:'Geist Mono';font-size:9.5px;letter-spacing:.03em;text-transform:uppercase;color:var(--ink-soft);line-height:1.35}

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
    .impact{grid-template-columns:1fr}
    .metrics{grid-template-columns:repeat(2,1fr)}
    .metric:nth-child(2n){border-right:none}
    .metric:nth-child(-n+2){border-bottom:1px solid var(--line)}
    .cards,.flow-compare,.decision,.visual-grid{grid-template-columns:1fr}
    .meta-grid,.voices{grid-template-columns:1fr 1fr}
    .imp .eyebrow{margin-bottom:8px}
  }` }} />
<style dangerouslySetInnerHTML={{ __html: `.boj{height:480vh;position:relative}
.boj .stick{position:sticky;top:0;height:100vh;padding:clamp(10px,1.6vh,18px);display:grid;place-items:center}
.boj .stage{position:relative;height:min(100%,760px);width:100%;border-radius:24px;overflow:hidden;
  background-color:#fff;
  background-image:radial-gradient(rgba(22,19,15,.08) 1px,transparent 1px);background-size:16px 16px;
  border:1px solid rgba(22,19,15,.07);box-shadow:0 24px 70px -34px rgba(22,19,15,.22);
  display:grid;place-items:center}
.boj .beat{grid-area:1/1;width:min(760px,calc(100% - clamp(40px,7vw,96px)));text-align:center;
  opacity:0;transform:translateY(16px);pointer-events:none;position:relative;z-index:3;
  transition:opacity .5s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1)}
.boj .beat.on{opacity:1;transform:none}
.boj .stepk{font-family:'Switzer',system-ui,sans-serif;font-weight:500;font-size:11px;
  letter-spacing:.16em;text-transform:uppercase;color:rgba(22,19,15,.55);margin-bottom:10px}
.boj .steph{font-size:clamp(16px,1.7vw,21px);color:rgba(22,19,15,.8);letter-spacing:-.015em;
  line-height:1.4;margin-bottom:clamp(20px,3.6vh,36px);text-wrap:balance}
.boj .big{font-size:clamp(28px,4.2vw,54px);line-height:1.14;letter-spacing:-.035em;color:#16130f}
.boj .big .a{color:var(--accent,#0083E7)}
.boj .pile{display:flex;flex-direction:column;gap:9px;align-items:center}
.boj .pg{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid rgba(22,19,15,.11);
  border-radius:12px;padding:10px 16px;font-size:13.5px;color:rgba(22,19,15,.75);
  box-shadow:0 8px 20px -12px rgba(22,19,15,.18);min-width:min(380px,84vw);text-align:left;
  opacity:0;transform:translateY(10px);
  transition:opacity .45s cubic-bezier(.22,1,.36,1),transform .45s cubic-bezier(.22,1,.36,1)}
.boj .pg.on{opacity:1;transform:none}
.boj .pg .rl{font-family:'Geist Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.1em;
  text-transform:uppercase;color:#1d6b3c;background:#e2f5e8;border-radius:999px;padding:3px 8px;flex:0 0 auto}
.boj .pg.stuck .rl{color:#b45309;background:#fdf1e3}
.boj .pg b{font-weight:600;color:#16130f}
.boj .pile .still{margin-top:8px;font-family:'Geist Mono',ui-monospace,monospace;font-size:11.5px;
  letter-spacing:.06em;color:#b45309;opacity:0;transition:opacity .4s}
.boj .pile .still.on{opacity:1}
/* the phone approval card */
.boj .ph{display:inline-block;text-align:left;background:#fff;border:1px solid rgba(22,19,15,.09);
  border-radius:26px;padding:18px;box-shadow:0 18px 44px -20px rgba(22,19,15,.26);width:min(330px,82vw)}
.boj .ph .hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.boj .ph .hdr b{font-size:14px;color:#16130f}
.boj .ph .hdr span{font-family:'Geist Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.1em;
  text-transform:uppercase;color:#3e77e0;background:#e8f1fd;border-radius:999px;padding:3px 9px}
.boj .fr{display:flex;align-items:center;justify-content:space-between;gap:12px;
  border:1px solid rgba(22,19,15,.11);border-radius:11px;padding:8.5px 13px;
  font-size:12.5px;margin-top:7px}
.boj .fr .k{color:rgba(22,19,15,.45)}
.boj .fr .v{color:#16130f;font-weight:600;white-space:nowrap}
.boj .hold{position:relative;margin-top:13px;border-radius:12px;overflow:hidden;
  background:#16130f;color:#fff;text-align:center;padding:12px 0;font-size:13.5px;font-weight:500}
.boj .hold i{position:absolute;inset:0;width:0;background:#1d6b3c;transition:width .2s linear}
.boj .hold span{position:relative;z-index:1}
.boj .ph .from{margin-top:11px;text-align:center;font-family:'Geist Mono',ui-monospace,monospace;
  font-size:10.5px;letter-spacing:.08em;color:rgba(22,19,15,.5)}
.boj .num{font-size:clamp(54px,8vw,110px);line-height:1;letter-spacing:-.045em;color:#16130f;
  font-variant-numeric:tabular-nums}
.boj .num .a{color:var(--accent,#0083E7)}
.boj .cap{margin-top:14px;font-size:clamp(16px,1.8vw,22px);color:rgba(22,19,15,.75);letter-spacing:-.015em}
@media(prefers-reduced-motion:reduce){
  .boj{height:auto}
  .boj .stick{position:static;height:auto}
  .boj .stage{display:block;padding:44px 24px;height:auto}
  .boj .beat{opacity:1;transform:none;margin:0 auto 44px;grid-area:auto}
  .boj .pg,.boj .pile .still{opacity:1;transform:none}
  .boj .hold i{width:100%}
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
