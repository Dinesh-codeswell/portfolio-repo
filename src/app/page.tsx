"use client";

import Script from "next/script";
import { useEffect } from "react";
import { PersonSchema } from "./schema";

export default function Page() {
  useEffect(() => {
    document.body.classList.add("home");
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
        document.body.classList.remove('home');
        burger.removeEventListener('click', onBurgerClick);
        menu.removeEventListener('click', onMenuClick as any);
        document.documentElement.style.overflow = '';
      };
    }
  }, []);

  return (
    <>
      <PersonSchema />
      <div id="gnav"><div className="gnav-bar"><a className="gnav-brand" href="/"><svg className="gnav-mark" viewBox="0 0 30 26" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><g className="sun"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"></path><line x1="15" y1="7" x2="15" y2="4.2"></line><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"></line><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"></line></g><line x1="2.5" y1="18" x2="27.5" y2="18"></line></svg>dinesh<span className="gnav-dot">.</span></a><button className="gnav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="gnavMenu"><span className="gb-txt">menu</span><span className="gb-ico"><span className="gb-l"></span><span className="gb-l"></span></span></button></div><nav className="gnav-dock" aria-label="primary"><a href="/work">work</a><a href="/beyond">about</a><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti">↗</span></a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti">↓</span></a><a className="cta" href="/quick">quick view <span className="arw">→</span></a><a className="cta cta-ghost" href="mailto:dineshkatal.work@gmail.com">let’s talk <span className="arw">→</span></a></nav><div className="gnav-menu" id="gnavMenu" aria-hidden="true"><nav className="gnav-menu-inner" aria-label="menu"><a href="/work">work</a><a href="/beyond">about</a><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti">↗</span></a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti">↓</span></a><a className="cta" href="/quick">quick view <span className="arw">→</span></a><a className="cta cta-ghost" href="mailto:dineshkatal.work@gmail.com">let’s talk <span className="arw">→</span></a></nav></div></div>

{/* splash intro */}


{/* ambient cloud sky behind the scroll (air-style) */}
<div id="aiSplash" aria-hidden="true" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -100%)" }}><div className="sp-dawn" style={{ opacity: "0" }}></div><div className="sp-sun" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}><span className="glow"></span><span className="disc"></span></div><div className="sp-line" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>the sky's the limit<span className="dot">.</span></div></div>
<div className="cloudfield" id="cloudfield" aria-hidden="true"></div>


{/* ════════════ AIR.INC CLOUD SKY — below the fold only (hero meadow stays untouched) ════════════ */}


<section className="stage" data-motes="">

  {/* ░░ your original animated sky ░░ */}
  <div className="sky" aria-hidden="true">
    <div className="i-sunwrap" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}><div className="i-rays"></div><div className="i-glow"></div><div className="i-sun"></div></div>
    <div className="i-pl" data-depth="0.50" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}><div className="i-cloud c3"></div></div>
    <div className="i-pl" data-depth="0.40" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}><div className="i-cloud c1"></div></div>
    <div className="i-pl" data-depth="0.26" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}><div className="i-cloud c2"></div></div>
    <div className="i-pl" data-depth="0.34" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}><div className="i-cloud c4"></div></div>
  </div>

  {/* ░░ wandering bees → fireflies at night ░░ */}
  <div className="bees" id="bees" aria-hidden="true" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}></div>

  {/* ░░ alpine meadow band with stream — transparent sky, tints with the time-of-day slider ░░ */}
  <div className="meadow" data-depth="0.6" style={{ opacity: "1", transform: "translate(0px, 0px)" }}>
    <picture>
      <source media="(max-width:720px)" type="image/webp" srcSet="/assets/hero/meadow-band-mobile.webp" />
      <source media="(max-width:720px)" srcSet="/assets/hero/meadow-band-mobile.png" />
      <source type="image/webp" srcSet="/assets/hero/meadow-band-v5.webp" />
      <img src="/assets/hero/meadow-band-v5.png" alt="alpine meadow with a winding stream and wildflowers" />
    </picture>
  </div>

  {/* ░░ NAV ░░ — legacy bar, hidden by nav.js which injects the shared #gnav */}
  <nav className="nav nav-old" style={{ display: "none" }}>
    <a className="brand" href="/"><svg className="brand-mark" viewBox="0 0 30 26" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><g className="sun"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"></path><line x1="15" y1="7" x2="15" y2="4.2"></line><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"></line><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"></line></g><line x1="2.5" y1="18" x2="27.5" y2="18"></line></svg>dinesh<span className="a" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>.</span></a>
    <button className="navtoggle" id="navToggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="navMenu"><span className="tg-txt">menu</span><span className="tg-ico"><span></span><span></span></span></button>
    <div className="snav" id="navMenu">
      <a href="/work">work</a>
      <a className="hideSm" href="/beyond">lil&nbsp;about&nbsp;me</a>
      
      
      <a className="hideSm" href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti">↗</span></a>
      <a className="hideSm" href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti">↓</span></a>
      <a className="cta cta-ghost" href="/quick">quick&nbsp;view <span className="arw">→</span></a>
      <a className="cta" href="mailto:dineshkatal.work@gmail.com">let’s&nbsp;talk <span className="arw">→</span></a>
    </div>
  </nav>

  {/* ░░ HERO ░░ */}
  <div className="hero">
    <div className="eyebrow">dinesh kumar katal · gurugram, india</div>
    <div className="hey" aria-label="hi, i'm dinesh"><span className="hey-slot"><span className="hey-w" id="heyW">hi</span></span>, i'm dinesh</div>
    <h1 className="hl"><span className="ln"><span>product manager for</span></span><span className="ln l2"><span>data & AI-driven products.</span></span></h1>
    <p className="lede"><b>IIT Kharagpur dual-degree grad</b> combining technical depth with product analytics: I launch platforms serving 30k+ users, optimize conversion funnels, and build machine learning engines.</p>
    <div className="cta-row">
      <a className="ink-btn primary" id="skip" href="mailto:dineshkatal.work@gmail.com"><span className="lbl">let's talk <span className="arw">→</span></span></a>
      <a className="ink-btn" id="bookCall" href="https://calendly.com/dineshkatal-work/book-1-1-session" target="_blank" rel="noopener"><span className="lbl">book a call <span className="arw">↗</span></span></a>
      <a className="ink-btn" href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener"><span className="lbl">linkedin <span className="arw">↗</span></span></a>
    </div>
  </div>

  {/* ░░ time-of-day rail (vertical glass slider — drag to set the light, AUTO follows local time) ░░ */}
  
  <div className="scene-rail" id="skyRail" title="the light here follows your time" aria-label="time of day: the light here follows your time">
    <button className="sr-b" data-tod="dawn" title="dawn" aria-label="dawn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18h18"></path><path d="M8 18a4 4 0 0 1 8 0"></path><path d="M12 3v4"></path><path d="M9.5 5L12 3l2.5 2"></path></svg></button>
    <button className="sr-b on" data-tod="day" title="day" aria-label="day"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"></path></svg></button>
    <button className="sr-b" data-tod="golden" title="golden hour" aria-label="golden hour"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18h18"></path><path d="M8 18a4 4 0 0 1 8 0"></path><path d="M12 7V3"></path><path d="M9.5 5L12 7l2.5-2"></path></svg></button>
    <button className="sr-b" data-tod="night" title="night" aria-label="night"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 13.5A8 8 0 1 1 10.5 3.5a6.2 6.2 0 0 0 10 10z"></path></svg></button>
    <span className="sr-div" aria-hidden="true"></span>
    <button className="sr-auto" id="ssAuto" title="follow my local time">auto</button>
    <input type="range" min="0" max="100" defaultValue="50" id="ssRange" aria-hidden="true" tabIndex={-1} style={{ position: "absolute", width: "1px", height: "1px", opacity: "0", pointerEvents: "none" }} />
  </div>

  {/* ░░ ask pill ░░ */}
  <button className="ask-pill" type="button" aria-label="Ask AI about Dinesh"><svg className="spark" viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M12 1.6l1.7 6.7L20.4 10l-6.7 1.7L12 18.4l-1.7-6.7L3.6 10l6.7-1.7L12 1.6z"></path></svg><span className="ai-label">ask AI</span></button>

<canvas className="cn-motes" aria-hidden="true" data-engine="three.js r160" width="1440" height="900" style={{ opacity: "1", visibility: "inherit" }}></canvas></section>

{/* ════════════ AIR-STYLE EDITORIAL SCROLL ════════════ */}


{/* big real-screen showcase, floating in the sky (air-style) */}

{/* night-mode legibility for the air-style sections (active when body.nightsky is on) */}


{/* big belief banner (air-style, over the sky) — top, right under the hero */}
<section className="ai-sec sw-sec" id="projects">
  <div className="ai-wrap">
    <div className="sw-head ai-rv">
      <h2>Selected <em>work.</em></h2>
      <a className="sw-seeall" href="https://github.com/Dinesh-codeswell?tab=repositories" target="_blank" rel="noopener">all repositories <i>→</i></a>
    </div>
    <div className="sw-filters ai-rv" id="swFilters" role="group" aria-label="filter work"><span className="sw-thumb" aria-hidden="true" style={{ width: "59px", transform: "translateX(0px)" }}></span>
      <button className="on" data-f="all">all</button>
      <button data-f="agentic">agentic</button>
      <button data-f="ai">ai</button>
      <button data-f="data">data</button>
      <button data-f="web">web</button>
      <button data-f="python">python</button>
    </div>
    <div className="sw-grid">
      <a className="sw-card ai-rv feat" data-f="agentic ai" href="https://github.com/Dinesh-codeswell/fried-viper" target="_blank" rel="noopener" style={{ viewTransitionName: "swc1" }}>
        <div className="sw-media app">
          <video className="sw-rec" src="/assets/recordings/fried-viper.mp4" poster="/assets/recordings/fried-viper-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Fried Viper screen recording" />
          <span className="sw-badge">fried viper</span>
        </div>
        <div className="sw-body"><h3 className="sw-ttl">A hacker hostel of <em>self-coordinating AI agents.</em></h3><div className="sw-meta">multi-agent terminal harness<br /><b>electron · react · typescript · pixi.js</b></div></div>
      </a>
      <a className="sw-card ai-rv" data-f="python ai web" href="https://github.com/Dinesh-codeswell/lyrical-video" target="_blank" rel="noopener" style={{ viewTransitionName: "swc2" }}>
        <div className="sw-media app">
          <video className="sw-rec" src="/assets/recordings/lyrical-dashboard.mp4" poster="/assets/recordings/lyrical-dashboard-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Lyrical video editing suite screen recording" />
          <span className="sw-badge">lyrical video</span>
        </div>
        <div className="sw-body"><h3 className="sw-ttl">Cinematic lyric videos, <em>rendered from raw audio.</em></h3><div className="sw-meta">web studio · desktop gui · cli<br /><b>python · fastapi · ffmpeg · ai transcription</b></div></div>
      </a>
      <a className="sw-card ai-rv" data-f="python data web" href="https://github.com/Dinesh-codeswell/music-profile-scraper" target="_blank" rel="noopener" style={{ viewTransitionName: "swc3" }}>
        <div className="sw-media app">
          <video className="sw-rec" src="/assets/recordings/music-scraper.mp4" poster="/assets/recordings/music-scraper-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Music profile scraper screen recording" />
          <span className="sw-badge">live · music-profile-scraper</span>
        </div>
        <div className="sw-body"><h3 className="sw-ttl">Music intelligence studio, <em>zero auth, zero API keys.</em></h3><div className="sw-meta">fastapi · mcp protocol · docker<br /><b>spotify + apple ingestion → epk generator</b></div></div>
      </a>
      <a className="sw-card ai-rv" data-f="web" href="https://aniquest-snowy.vercel.app" target="_blank" rel="noopener" style={{ viewTransitionName: "swc4" }}>
        <div className="sw-media app">
          <video className="sw-rec" src="/assets/recordings/aniquest.mp4" poster="/assets/recordings/aniquest-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="AniQuest screen recording" />
          <span className="sw-badge">live · aniquest</span>
        </div>
        <div className="sw-body"><h3 className="sw-ttl">Anime discovery terminal <em>on AniList GraphQL.</em></h3><div className="sw-meta">react 18 · vite · typescript · tanstack query<br /><b>roulette · release calendar · binge lists</b></div></div>
      </a>
      <a className="sw-card ai-rv" data-f="web data" href="https://github.com/Dinesh-codeswell/Job-Dashboard" target="_blank" rel="noopener" style={{ viewTransitionName: "swc5" }}>
        <div className="sw-media app">
          <video className="sw-rec" src="/assets/recordings/job-dashboard.mp4" poster="/assets/recordings/job-dashboard-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Job Dashboard screen recording" />
          <span className="sw-badge">live · job dashboard</span>
        </div>
        <div className="sw-body"><h3 className="sw-ttl">A job board the community <em>actually uses, daily.</em></h3><div className="sw-meta">1,000+ daily users · live openings, hourly refresh<br /><b>next.js · vercel · community-first</b></div></div>
      </a>
    </div>
  </div>
</section>

{/* stat banner — counts up on scroll (script-home-19 drives reveal + countup) */}
<section className="ai-sec ai-banner ai-stat-pin" id="aiStatSec">
  <div className="ai-wrap">
    <h2 className="ai-stat" id="aiStat" aria-label="30k+ users served. 2k+ resumes scored. 400+ teams matched. 45% funnel lift.">
      <span className="row"><span className="ln"><span className="num" data-to="30">0</span>k+ users served.</span></span>
      <span className="row"><span className="ln"><span className="num" data-to="2">0</span>k+ resumes scored.</span></span>
      <span className="row"><span className="ln"><span className="num" data-to="400">0</span>+ teams matched.</span></span>
      <span className="row"><span className="ln em"><span className="num" data-to="45">0</span>% funnel lift.</span></span>
    </h2>
  </div>
</section>

{/* ───── work experience — glass timeline with org logos, proof links & skill tags ───── */}

<section className="ai-sec wx-sec" id="experience">
  <div className="ai-wrap">
    <div className="wx-head ai-rv">
      <span className="eyebrow">— work experience —</span>
      <h2 className="ai-big">where i've <em>shipped.</em></h2>
      <p className="wx-sub">roles, ownership and the receipts behind them — every card links to proof of the work.</p>
    </div>

    <div className="wx-rail">

      {/* ── Songdew Media (current) ── */}
      <article className="wx-card ai-rv is-now">
        <span className="wx-node" aria-hidden="true"></span>
        <div className="wx-side">
          <span className="wx-logo"><img src="/assets/logos/orgs/songdew_logo.png" alt="Songdew logo" loading="lazy" /></span>
          <span className="wx-when">may 2025 — present</span>
          <span className="wx-now">current</span>
        </div>
        <div className="wx-main">
          <h3 className="wx-role">Product <em>Intern</em></h3>
          <div className="wx-org">Songdew Media Private Limited · Gurugram, India</div>
          <p className="wx-mission">music &amp; artist platform — epk, onboarding and trust &amp; safety</p>
          <ul className="wx-points">
            <li>revamped the <b>EPK module</b> — the lowest-engagement feature — driving <b>65% of new registering users</b> to complete profiles</li>
            <li>built <b>AI-driven onboarding</b> personalizing the experience across modules, boosting engagement by <b>30%</b></li>
            <li>engineered a <b>fraud-detection pipeline</b>, cutting fake/bot account registrations from <b>60% → 5%</b> daily</li>
            <li>launched a targeted <b>email campaign</b> for the EPK module, lifting profile completion rates by <b>40%</b></li>
          </ul>
          <div className="wx-tags">
            <span>product management</span><span>ai integration</span><span>onboarding</span><span>fraud detection</span><span>email marketing</span><span>user engagement</span><span>analytics</span>
          </div>
          <div className="wx-links">
            <a href="https://www.songdew.com/" target="_blank" rel="noopener">songdew.com ↗</a>
          </div>
        </div>
      </article>

      {/* ── Beyond Career ── */}
      <article className="wx-card ai-rv">
        <span className="wx-node" aria-hidden="true"></span>
        <div className="wx-side">
          <span className="wx-logo"><img src="/assets/logos/orgs/beyondcareer_logo.jpg" alt="Beyond Career logo" loading="lazy" /></span>
          <span className="wx-when">apr 2025 — apr 2026</span>
        </div>
        <div className="wx-main">
          <h3 className="wx-role">Founding Member &amp; <em>Product Lead</em></h3>
          <div className="wx-org">Beyond Career · Gurugram, India · Remote</div>
          <p className="wx-mission">making traditional edtech smarter with ai-based solutions</p>
          <ul className="wx-points">
            <li>architected the end-to-end platform scaling to <b>30,000+ users</b> with <b>99.9% uptime</b> across 50+ API endpoints</li>
            <li>built an ML matchmaking algorithm on <b>30+ parameters</b>, facilitating <b>400+ team formations</b> for competitions</li>
            <li>drove sales-pipeline growth via <b>60+ college workshops</b> and 40+ webinars, optimizing LVR and conversion</li>
            <li>developed an ATS engine parsing <b>2,000+ resumes</b> against 60+ criteria, boosting user scores by <b>35%</b> via NLP</li>
            <li>led growth analytics over SQL funnels, improving ATS keyword matching by <b>45%</b></li>
            <li>curated a hub of 50+ PM resources and 20+ books for a community of <b>1,000+ students</b></li>
          </ul>
          <div className="wx-tags">
            <span>product analytics</span><span>python</span><span>sql</span><span>machine learning</span><span>nlp</span><span>growth analytics</span><span>user funnels</span><span>api development</span><span>jira</span><span>notion</span>
          </div>
          <div className="wx-links">
            <a href="https://www.beyondcareer.online/" target="_blank" rel="noopener">live platform ↗</a>
            <a href="https://www.beyondcareer.online/resume-ai" target="_blank" rel="noopener">resume-ai ↗</a>
          </div>
        </div>
      </article>

      {/* ── IIT KGP Teaching Assistant ── */}
      <article className="wx-card ai-rv">
        <span className="wx-node" aria-hidden="true"></span>
        <div className="wx-side">
          <span className="wx-logo"><img src="/assets/logos/orgs/indian_institute_of_technology_kharagpur_logo.jpg" alt="IIT Kharagpur logo" loading="lazy" /></span>
          <span className="wx-when">aug 2024 — apr 2025</span>
        </div>
        <div className="wx-main">
          <h3 className="wx-role">Teaching <em>Assistant</em></h3>
          <div className="wx-org">Indian Institute of Technology, Kharagpur · Kharagpur, India</div>
          <p className="wx-mission">supported academic instruction and student mentorship</p>
          <ul className="wx-points">
            <li>assisted professors in course delivery and academic assessment</li>
            <li>mentored undergraduates in technical subjects and project guidance</li>
            <li>conducted doubt-clearing sessions and tutorial classes; evaluated assignments with constructive feedback</li>
          </ul>
          <div className="wx-tags">
            <span>mentorship</span><span>technical teaching</span><span>communication</span><span>student support</span>
          </div>
        </div>
      </article>

      {/* ── SWG IIT KGP ── */}
      <article className="wx-card ai-rv">
        <span className="wx-node" aria-hidden="true"></span>
        <div className="wx-side">
          <span className="wx-logo"><img src="/assets/logos/orgs/SWG.jpg" alt="Student Welfare Group logo" loading="lazy" /></span>
          <span className="wx-when">nov 2022 — aug 2023</span>
        </div>
        <div className="wx-main">
          <h3 className="wx-role">Student <em>Mentor</em></h3>
          <div className="wx-org">Student Welfare Group, IIT Kharagpur · Kharagpur, India</div>
          <p className="wx-mission">guided incoming students through academic and social integration</p>
          <ul className="wx-points">
            <li>mentored <b>10+ freshers</b> as their primary point of contact for academic success</li>
            <li>developed personalized mentorship strategies; delivered orientation and ongoing campus support</li>
          </ul>
          <div className="wx-tags">
            <span>mentorship</span><span>leadership development</span><span>student counseling</span><span>communication</span>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>

{/* work — full-width real screens & video, floating in the sky */}


{/* ════ AIR-STYLE giant belief statement — full-bleed, scroll-scrub line wipe over a vivid sky ════ */}


{/* ░░ Selected work — case studies (ported from air version; bees stay as the hero teaser) ░░ */}

{/* clients / logos carousel (air-style) */}



{/* skills / capabilities (scroll-highlight, Motion inView technique) */}

<section className="ai-sec ai-skills">
  <div className="ai-wrap">
    <div className="skills-grid">
      <aside className="skills-aside ai-rv">
        <div className="skills-kick">what i do</div>
        <h2>the full loop.</h2>
        <p>Product strategy, data analytics, and growth engineering. Driving key product metrics from initial discovery to scaled production.</p>
      </aside>
      <div className="skills-list" id="skillsList">
        <div className="skill-row"><span className="skill-name"><span className="skill-idx">01</span><span className="skill-ttl">product strategy</span></span><span className="skill-tools">roadmaps · 0→1 validation · KPIs</span></div>
        <div className="skill-row"><span className="skill-name"><span className="skill-idx">02</span><span className="skill-ttl">data analytics</span></span><span className="skill-tools">SQL · cohort analysis · user funnels</span></div>
        <div className="skill-row"><span className="skill-name"><span className="skill-idx">03</span><span className="skill-ttl">experimentation</span></span><span className="skill-tools">A/B testing · feature flags · usability tests</span></div>
        <div className="skill-row"><span className="skill-name"><span className="skill-idx">04</span><span className="skill-ttl">growth marketing</span></span><span className="skill-tools">acquisition · conversion optimization · CRM</span></div>
        <div className="skill-row"><span className="skill-name"><span className="skill-idx">05</span><span className="skill-ttl">machine learning</span></span><span className="skill-tools">predictive modeling · NLP · Python</span></div>
        <div className="skill-row"><span className="skill-name"><span className="skill-idx">06</span><span className="skill-ttl">product tools</span></span><span className="skill-tools">Mixpanel · Amplitude · HubSpot · Figma</span></div>
      </div>
    </div>
    {/* toolbelt — full stack from the resume, mono chips */}
    <div className="toolbelt ai-rv">
      <span className="toolbelt-k">toolbelt</span>
      <div className="toolbelt-chips">
        <span>jira</span><span>notion</span><span>figma</span><span>git</span><span>hubspot</span><span>firebase</span><span>power bi</span><span>tableau</span><span>google analytics</span><span>mixpanel</span><span>amplitude</span><span>excel</span><span>matplotlib</span><span>seaborn</span><span>api integration</span><span>google workspace</span>
      </div>
    </div>
  </div>
</section>
<Script id="script-home-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* Scroll highlight — Motion inView center-zone technique, vanilla IntersectionObserver.
     Each skill row lights up as it crosses a narrow band at the viewport's vertical center. */
  (function(){
    var rows = document.querySelectorAll('#skillsList .skill-row');
    if(!rows.length) return;
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches){
      rows.forEach(function(r){ r.classList.add('in'); });
      return;
    }
    if(!('IntersectionObserver' in window)){
      rows.forEach(function(r){ r.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        e.target.classList.toggle('in', e.isIntersecting);
      });
    }, { rootMargin: '-48% 0px -48% 0px', threshold: 0 });
    rows.forEach(function(r){ io.observe(r); });
  })();` }} />

<section className="ai-sec ai-creds" id="credentials">
  <div className="ai-wrap">
    <div className="creds-grid">
      {/* Left Column: Academic Credentials + Certifications on a timeline rail */}
      <div className="creds-col">
        <div className="creds-col-ttl ai-rv">
          <span className="eyebrow">— background —</span>
          <h3>academic <em>seals.</em></h3>
        </div>
        <div className="creds-rail">
          {/* Card 1 */}
          <div className="creds-card ai-rv">
            <span className="creds-node" aria-hidden="true"></span>
            <div className="creds-card-head">
              <span className="creds-card-date">2020 — 2025</span>
              <span className="creds-card-badge">degree</span>
            </div>
            <h4 className="creds-card-title">Integrated Dual Degree (B.Tech + M.Tech)</h4>
            <h5 className="creds-card-subtitle">Indian Institute of Technology, Kharagpur</h5>
            <p className="creds-card-desc">Mining Engineering · CGPA 8.03. Coursework in ML, Business Analytics, Data Visualization, DBMS, and Entrepreneurship.</p>
          </div>

          {/* Card 2 */}
          <div className="creds-card ai-rv">
            <span className="creds-node" aria-hidden="true"></span>
            <div className="creds-card-head">
              <span className="creds-card-date">MAR — MAY 2025</span>
              <span className="creds-card-badge">harvard</span>
            </div>
            <h4 className="creds-card-title">Aspire Advanced Leadership Program</h4>
            <h5 className="creds-card-subtitle">Harvard Business School · Aspire Institute</h5>
            <p className="creds-card-desc">Selected for HBS's global initiative. Intensive coursework in leadership development and social innovation.</p>
          </div>

          {/* Card 3 */}
          <div className="creds-card ai-rv">
            <span className="creds-node" aria-hidden="true"></span>
            <div className="creds-card-head">
              <span className="creds-card-date">APR — JUN 2025</span>
              <span className="creds-card-badge">stanford</span>
            </div>
            <h4 className="creds-card-title">Code in Place — Python</h4>
            <h5 className="creds-card-subtitle">Stanford University</h5>
            <p className="creds-card-desc">Stanford's public-service programming course: Python and CS fundamentals under Stanford CS professors.</p>
          </div>

          {/* Card 4 */}
          <div className="creds-card ai-rv">
            <span className="creds-node" aria-hidden="true"></span>
            <div className="creds-card-head">
              <span className="creds-card-date">APR — JUN 2025</span>
              <span className="creds-card-badge">mckinsey</span>
            </div>
            <h4 className="creds-card-title">Forward Learning Program</h4>
            <h5 className="creds-card-subtitle">McKinsey.org</h5>
            <p className="creds-card-desc">10-week Forward journey in future-of-work skills: critical thinking, structured problem-solving, adaptive leadership.</p>
          </div>

          {/* Card 5 — certifications strip from JSON data */}
          <div className="creds-card ai-rv">
            <span className="creds-node" aria-hidden="true"></span>
            <div className="creds-card-head">
              <span className="creds-card-date">2023 — 2025</span>
              <span className="creds-card-badge">certified</span>
            </div>
            <h4 className="creds-card-title">Certifications &amp; Training</h4>
            <p className="creds-card-desc">ISRO AI/ML (CNN · RNN · YOLO) · CS50, Harvard (edX) · Machine Learning Specialization (Coursera) · LangChain for LLM Apps · Fundamentals of Equity Valuation (365 Financial Analyst) · Generative AI for Everyone.</p>
          </div>
        </div>
      </div>

      {/* Right Column: Championship medals with real medal tints */}
      <div className="creds-col">
        <div className="creds-col-ttl ai-rv">
          <span className="eyebrow">— achievements —</span>
          <h3>medals <em>&amp; podiums.</em></h3>
        </div>
        <div className="creds-rail">
          {/* Competition Card 1 */}
          <div className="creds-card medal-gold ai-rv">
            <span className="creds-node" aria-hidden="true"></span>
            <div className="creds-card-head">
              <span className="creds-card-date">MAR — APR 2024</span>
              <span className="creds-medal">gold · 1st</span>
            </div>
            <h4 className="creds-card-title">Product Design General Championship</h4>
            <h5 className="creds-card-subtitle">Inter-hall Championship · IIT Kharagpur</h5>
            <p className="creds-card-desc">1st of 15+ teams. Ideated TIMETINT, a smart color-changing pharma label cutting expired-medicine consumption by 60% for patient safety.</p>
          </div>

          {/* Competition Card 2 */}
          <div className="creds-card medal-silver ai-rv">
            <span className="creds-node" aria-hidden="true"></span>
            <div className="creds-card-head">
              <span className="creds-card-date">OCT — NOV 2022</span>
              <span className="creds-medal">silver · 2nd</span>
            </div>
            <h4 className="creds-card-title">Open IIT Data Analytics Competition</h4>
            <h5 className="creds-card-subtitle">OpenIIT · IIT Kharagpur</h5>
            <p className="creds-card-desc">2nd of 67 teams. NLP classifiers (BERT, ANN, RNN) detecting gender bias across 2,000+ sentence pairs with 89% accuracy.</p>
          </div>

          {/* Competition Card 3 */}
          <div className="creds-card ai-rv">
            <span className="creds-node" aria-hidden="true"></span>
            <div className="creds-card-head">
              <span className="creds-card-date">OCTOBER 2022</span>
              <span className="creds-medal">finalist</span>
            </div>
            <h4 className="creds-card-title">Product Design Open IIT</h4>
            <h5 className="creds-card-subtitle">OpenIIT · IIT Kharagpur</h5>
            <p class-name="creds-card-desc">Smart Knee Brace for a 30-crore-user market — production cost down 49.7%, robustness up 36%.</p>
          </div>

          {/* Competition Card 4 */}
          <div className="creds-card medal-bronze ai-rv">
            <span className="creds-node" aria-hidden="true"></span>
            <div className="creds-card-head">
              <span className="creds-card-date">JAN — FEB 2024</span>
              <span className="creds-medal">bronze · captain</span>
            </div>
            <h4 className="creds-card-title">Athletics Captaincy &amp; GC Short Film</h4>
            <h5 className="creds-card-subtitle">Nehru Hall · IIT Kharagpur</h5>
            <p className="creds-card-desc">Led 21 athletes to Nehru Hall's historic inter-hall bronze; creative-directed the silver-winning GC short film.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Commented out Gauravi's On Stages section
<section className="ai-sec ai-stage">
  <div className="ai-wrap">
    <header className="ai-stage-head ai-rv">
      <h2 className="ai-big" style={{ fontSize: "clamp(30px,5vw,62px)", marginTop: "0" }}>on stages &amp; in <em>conversations.</em></h2>
      <p className="ai-stage-sub">a few moments: speaking, hosting &amp; interviewing the craft, from Dubai to Gurugram.</p>
    </header>
    <div className="cf-stage" id="cfStage"><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(-580px) translateZ(-300px) rotateY(44deg) scale(0.75)", opacity: "0.3", zIndex: "98" }}><img src="/assets/conferences/conf-4.avif" alt="on stage, presenting" loading="lazy" /><div className="cap"><span className="t">on stage</span><span className="s">presenting</span></div></div><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(-290px) translateZ(-150px) rotateY(22deg) scale(0.82)", opacity: "0.62", zIndex: "99" }}><img src="/assets/conferences/conf-3.avif" alt="on the mic, design event" loading="lazy" /><div className="cap"><span className="t">on the mic</span><span className="s">design event</span></div></div><div className="cf-card is-active" style={{ transform: "translate(-50%, -50%) translateX(0px) translateZ(0px) rotateY(0deg) scale(1)", opacity: "1", zIndex: "100" }}><img src="/assets/conferences/conf-2.avif" alt="interviewing Don Norman, fangirl moment 101 · ddx conference" loading="lazy" /><div className="cap"><span className="t">interviewing Don Norman</span><span className="s">fangirl moment 101 · ddx conference</span></div></div><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(290px) translateZ(-150px) rotateY(-22deg) scale(0.82)", opacity: "0.62", zIndex: "99" }}><img src="/assets/conferences/conf-6.avif" alt="co-hosting, design session" loading="lazy" /><div className="cap"><span className="t">co-hosting</span><span className="s">design session</span></div></div><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(580px) translateZ(-300px) rotateY(-44deg) scale(0.75)", opacity: "0.3", zIndex: "98" }}><video src="/assets/conferences/conf-clip.mp4" poster="/assets/conferences/conf-clip-poster.jpg" muted loop playsInline preload="metadata"></video><span className="play">▶</span><div className="cap"><span className="t">watch the talk</span><span className="s">on stage</span></div></div><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(870px) translateZ(-450px) rotateY(-44deg) scale(0.68)", opacity: "0.3", zIndex: "97" }}><img src="/assets/conferences/conf-config-group.jpg" alt="the community, config 2026" loading="lazy" /><div className="cap"><span className="t">the community</span><span className="s">config 2026</span></div></div><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(1160px) translateZ(-600px) rotateY(-44deg) scale(0.62)", opacity: "0.3", zIndex: "96" }}><img src="/assets/conferences/conf-config-b.jpg" alt="at config, figma · sf" loading="lazy" /><div className="cap"><span className="t">at config</span><span className="s">figma · sf</span></div></div><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(1450px) translateZ(-750px) rotateY(-44deg) scale(0.62)", opacity: "0.3", zIndex: "95" }}><img src="/assets/conferences/conf-config-a.jpg" alt="in the room, config · sf" loading="lazy" /><div className="cap"><span className="t">in the room</span><span className="s">config · sf</span></div></div><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(1740px) translateZ(-900px) rotateY(-44deg) scale(0.62)", opacity: "0.3", zIndex: "94" }}><video src="/assets/conferences/conf-config-clip.mp4" poster="/assets/conferences/conf-config-poster.jpg" muted loop playsInline preload="metadata"></video><span className="play">▶</span><div className="cap"><span className="t">config recap</span><span className="s">the bay</span></div></div><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(2030px) translateZ(-1050px) rotateY(-44deg) scale(0.62)", opacity: "0.3", zIndex: "93" }}><img src="/assets/conferences/conf-config-c.jpg" alt="config, gurugram, india" loading="lazy" /><div className="cap"><span className="t">config</span><span className="s">gurugram, india</span></div></div><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(2320px) translateZ(-1200px) rotateY(-44deg) scale(0.62)", opacity: "0.3", zIndex: "92" }}><img src="/assets/conferences/conf-1.avif" alt="on a panel, discussion" loading="lazy" /><div className="cap"><span className="t">on a panel</span><span className="s">discussion</span></div></div><div className="cf-card" style={{ transform: "translate(-50%, -50%) translateX(2610px) translateZ(-1350px) rotateY(-44deg) scale(0.62)", opacity: "0.3", zIndex: "91" }}><img src="/assets/conferences/conf-5.avif" alt="hosting, community meetup" loading="lazy" /><div className="cap"><span className="t">hosting</span><span className="s">community meetup</span></div></div></div>
    <div className="cf-nav"><button id="cfPrev" aria-label="previous moment">←</button><button id="cfNext" aria-label="next moment">→</button></div>
  </div>
</section>
*/}

{/* practice: research / design / ship (cards, staggered reveal) */}
<section className="ai-sec ai-triad-sec">
  <div className="ai-triad-head ai-rv">
    <div className="ai-triad-eb">product manager · <b>data &amp; insights, end&nbsp;to&nbsp;end</b></div>
  </div>
  <div className="ai-triad" id="aiTriad">
    <div className="tri-thread" style={{ left: "261.453px", right: "auto", width: "637.078px" }}></div>
    <div className="tri-card"><span className="tri-dot">01</span><div className="tri-n">strategy</div><h4>Strategy</h4><p>Define product vision and growth opportunities through rigorous market research and customer discovery, aligning product goals with business outcomes.</p><div className="tri-stack"><span>product roadmap</span><span>market research</span><span>user personas</span></div></div>
    <div className="tri-card"><span className="tri-dot">02</span><div className="tri-n">analytics</div><h4>Analytics</h4><p>Deep dive into user funnels and complex datasets using SQL, Python, and Power BI. Run A/B experiments to identify growth loops and conversion bottlenecks.</p><div className="tri-stack"><span>SQL</span><span>Power BI</span><span>A/B testing</span></div></div>
    <div className="tri-card"><span className="tri-dot">03</span><div className="tri-n">growth</div><h4>Growth</h4><p>Partner with engineering and marketing teams to ship optimized products, validate startup ideas, and scale platforms to thousands of active users.</p><div className="tri-stack"><span>product ops</span><span>growth loops</span><span>agile</span></div></div>
  </div>
</section>

<Script id="script-home-1" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* pin the triad connector exactly to the dot centers (robust across widths —
     avoids the --edge percentage resolving against different containing blocks) */
  (function(){
    function placeThread(){
      var a=document.getElementById('aiTriad'); if(!a) return;
      var dots=a.querySelectorAll('.tri-dot'); var t=a.querySelector('.tri-thread');
      if(dots.length<2||!t) return;
      var ar=a.getBoundingClientRect();
      var d1=dots[0].getBoundingClientRect(), dN=dots[dots.length-1].getBoundingClientRect();
      var x1=(d1.left+d1.width/2)-ar.left, x2=(dN.left+dN.width/2)-ar.left;
      t.style.left=x1+'px'; t.style.right='auto'; t.style.width=(x2-x1)+'px';
    }
    var a0=document.getElementById('aiTriad');
    if(a0 && 'ResizeObserver' in window){ new ResizeObserver(placeThread).observe(a0); }
    function run(){requestAnimationFrame(function(){requestAnimationFrame(placeThread);});}
    if(document.readyState!=='loading') run(); else document.addEventListener('DOMContentLoaded',run);
    window.addEventListener('load',run);
    window.addEventListener('resize',run);
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(placeThread);
  })();` }} />
<Script id="script-home-2" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* cursor spotlight + glare position for the process cards */
  (function(){
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    [].forEach.call(document.querySelectorAll('.tri-card'),function(card){
      card.addEventListener('pointermove',function(e){
        var r=card.getBoundingClientRect();
        card.style.setProperty('--mx',(e.clientX-r.left)+'px');
        card.style.setProperty('--my',(e.clientY-r.top)+'px');
        card.style.setProperty('--gx',((e.clientX-r.left)/r.width*100)+'%');
      });
    });
  })();` }} />

{/* ===== lil about me — postcard floating on the sky (links to beyond.html) ===== */}

<section className="ai-sec abtme">
  <div className="ai-wrap">
    <div className="ai-rv">
      <div className="eyebrow" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>the person behind the work</div>
      <h2 className="ai-big">about <em>me.</em></h2>
    </div>
    <a className="abtme-card ai-rv" href="/beyond" aria-label="more about dinesh - read the full story">
      <span className="abtme-aur" aria-hidden="true"></span><span className="abtme-aur2" aria-hidden="true"></span>
      <span className="abtme-photo">
        <img src="/assets/dinesh_profile.webp" alt="Dinesh Kumar Katal" loading="lazy" />
        <span className="abtme-cap">iit kharagpur → gurugram</span>
      </span>
      <div className="abtme-copy">
        <p>product manager and data analyst with an <span className="pull">engineer's grounding.</span> at beyond career i grew a platform from early days to <span className="pull">30,000+ users</span>; now at songdew i build ai-driven onboarding and fraud-detection, mentor aspiring PMs on topmate, and ship open-source projects.</p>
      </div>
    </a>
  </div>
</section>

{/* ===== testimonials — "The Wall" (PLACEHOLDER COPY: swap quotes/names with real recommendations before publishing) ===== */}

<section className="ai-sec tmn" id="testimonials">
  <div className="ai-wrap">
    <div className="ai-rv">
      <div className="eyebrow" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>what people say</div>
      <h2 className="ai-big">in their <em>words.</em></h2>
    </div>
    <div className="tmn-rows">
      <div className="tmn-row r1"><div className="tmn-track">
        <article className="tmn-card"><p>Today's session brought <span className="pull">instant clarity</span> to concepts I'd been struggling with for days. The intuitive, practical style made even complex ideas feel simple. The roadmap shared gave me a step-by-step approach for my specific goals.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/mansi.jpeg" alt="Mansi Agarwal" loading="lazy" /></span><div><div className="tmn-nm">Mansi Agarwal</div><div className="tmn-rl">IIM Indore (IPM)</div></div></div></article>
        <article className="tmn-card"><p>One of the <span className="pull">best advices and career guidance</span> — and now I know I will definitely get the job.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/testimonials/apoorva-jain.png" alt="Apoorva Jain" loading="lazy" /></span><div><div className="tmn-nm">Apoorva Jain</div><div className="tmn-rl">mentee · Unstop · 5.0 ★</div></div></div></article>
        <article className="tmn-card"><p>Amazing 😍. It felt like the mentor <span className="pull">truly understood</span> the modern job market and offered tailored, useful insights. Extremely helpful in shaping my path.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/dtu.jpeg" alt="Sagar" loading="lazy" /></span><div><div className="tmn-nm">Sagar</div><div className="tmn-rl">DTU, Delhi</div></div></div></article>
        <article className="tmn-card"><p>Very <span className="pull">helpful</span>.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/testimonials/tia-sharma.png" alt="Tia Sharma" loading="lazy" /></span><div><div className="tmn-nm">Tia Sharma</div><div className="tmn-rl">mentee · Unstop · 5.0 ★</div></div></div></article>
        <article className="tmn-card"><p>Beyond Career is an exceptional mentoring platform that provided precise and <span className="pull">effective solutions</span>, guiding me in the right direction. Their expertise and support have been invaluable.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/isha.png" alt="Isha Mehla" loading="lazy" /></span><div><div className="tmn-nm">Isha Mehla</div><div className="tmn-rl">Amity University Rajasthan</div></div></div></article>
      </div></div>
      <div className="tmn-row r2"><div className="tmn-track">
        <article className="tmn-card"><p>Beyond Career is an exceptional mentoring platform that provided precise and <span className="pull">effective solutions</span>, guiding me in the right direction. Their expertise and support have been invaluable.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/isha.png" alt="Isha Mehla" loading="lazy" /></span><div><div className="tmn-nm">Isha Mehla</div><div className="tmn-rl">Amity University Rajasthan</div></div></div></article>
        <article className="tmn-card"><p>Very <span className="pull">helpful</span>.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/testimonials/tia-sharma.png" alt="Tia Sharma" loading="lazy" /></span><div><div className="tmn-nm">Tia Sharma</div><div className="tmn-rl">mentee · Unstop · 5.0 ★</div></div></div></article>
        <article className="tmn-card"><p>Today's session brought <span className="pull">instant clarity</span> to concepts I'd been struggling with for days. The intuitive, practical style made even complex ideas feel simple. The roadmap shared gave me a step-by-step approach for my specific goals.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/mansi.jpeg" alt="Mansi Agarwal" loading="lazy" /></span><div><div className="tmn-nm">Mansi Agarwal</div><div className="tmn-rl">IIM Indore (IPM)</div></div></div></article>
        <article className="tmn-card"><p>Your explanation is <span className="pull">very nice</span>, I will try for that. Thanks for guiding.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/testimonials/sneha-yadav.png" alt="Sneha Yadav" loading="lazy" /></span><div><div className="tmn-nm">Sneha Yadav</div><div className="tmn-rl">mentee · Unstop · 5.0 ★</div></div></div></article>
        <article className="tmn-card"><p>Amazing 😍. It felt like the mentor <span className="pull">truly understood</span> the modern job market and offered tailored, useful insights. Extremely helpful in shaping my path.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/dtu.jpeg" alt="Sagar" loading="lazy" /></span><div><div className="tmn-nm">Sagar</div><div className="tmn-rl">DTU, Delhi</div></div></div></article>
        <article className="tmn-card"><p><span className="pull">Highly recommended</span>.</p><div className="tmn-who"><span className="tmn-av"><img src="/assets/testimonials/subham-sahoo.png" alt="Subham Sahoo" loading="lazy" /></span><div><div className="tmn-nm">Subham Sahoo</div><div className="tmn-rl">mentee · Unstop · 5.0 ★</div></div></div></article>
      </div></div>
    </div>
    <div className="tmn-src ai-rv">+ more on <a href="https://unstop.com/mentor/DineshKatal" target="_blank" rel="noopener">unstop ↗</a> · <a href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener">topmate ↗</a> — 5.0 average across platforms</div>
  </div>
</section>

{/* ===== topmate — live mentorship stats & badges (data pulled from topmate.io/dinesh_katal) ===== */}

<section className="ai-sec ai-topmate">
  <div className="ai-wrap">
    <div className="tm-grid">
      <div className="tm-intro ai-rv">
        <div className="eyebrow">mentoring on topmate</div>
        <h2 className="ai-big">top 0.1% <em>mentor.</em></h2>
        <p className="tm-sub">1:1 career sessions on resume reviews, product careers and data roles — rated <b>4.9 / 5</b> across <b>7 reviews</b>.</p>
        <div className="tm-nums">
          <div className="tm-num"><span className="tm-n">4.9<em>/5</em></span><span className="tm-l">avg rating</span></div>
          <div className="tm-num"><span className="tm-n">25+</span><span className="tm-l">sessions booked</span></div>
          <div className="tm-num"><span className="tm-n">0.1%</span><span className="tm-l">of all mentors</span></div>
        </div>
        <a className="tm-cta" href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener">book a session on topmate <i>↗</i></a>
      </div>
      <div className="tm-badges ai-rv">
        <a className="tm-badge" href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener" title="Top 0.1% — Best of Best">
          <img src="/assets/topmate/top01.png" alt="Top 0.1% mentor badge" loading="lazy" />
          <span className="tm-bt">top 0.1%</span><span className="tm-bs">best of best</span>
        </a>
        <a className="tm-badge" href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener" title="Top 1% — 25 bookings">
          <img src="/assets/topmate/top1.png" alt="Top 1% mentor badge" loading="lazy" />
          <span className="tm-bt">top 1%</span><span className="tm-bs">25 bookings</span>
        </a>
        <a className="tm-badge" href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener" title="People's Choice — 5 bookings">
          <img src="/assets/topmate/peoples-choice.png" alt="People's Choice badge" loading="lazy" />
          <span className="tm-bt">people's choice</span><span className="tm-bs">5 bookings</span>
        </a>
        <a className="tm-badge" href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener" title="Hustler — Top Earners">
          <img src="/assets/topmate/hustler.png" alt="Hustler badge" loading="lazy" />
          <span className="tm-bt">hustler</span><span className="tm-bs">top earners</span>
        </a>
        <a className="tm-badge" href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener" title="Curator — sold a product">
          <img src="/assets/topmate/curator.png" alt="Curator badge" loading="lazy" />
          <span className="tm-bt">curator</span><span className="tm-bs">sold a product</span>
        </a>
        <a className="tm-badge" href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener" title="Community Care — hosted a free 1:1">
          <img src="/assets/topmate/community-care.png" alt="Community Care badge" loading="lazy" />
          <span className="tm-bt">community care</span><span className="tm-bs">free 1:1 host</span>
        </a>
        <a className="tm-badge" href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener" title="Top 5% — 10 bookings">
          <img src="/assets/topmate/top5.png" alt="Top 5% mentor badge" loading="lazy" />
          <span className="tm-bt">top 5%</span><span className="tm-bs">10 bookings</span>
        </a>
        <a className="tm-badge" href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener" title="Debut '25 / '26 — joined in 2025-26">
          <img src="/assets/topmate/debut2526.png" alt="Debut 2025-26 badge" loading="lazy" />
          <span className="tm-bt">debut '25/'26</span><span className="tm-bs">class of 2025-26</span>
        </a>
      </div>
    </div>
  </div>
</section>

<Script id="script-home-3" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(reduce) return;
  /* duplicate each row's cards once so the -50% marquee loops seamlessly */
  [].forEach.call(document.querySelectorAll('.tmn-track'),function(t){ t.innerHTML+=t.innerHTML; });
})();` }} />

{/* Commented out Gauravi's conferences coverflow script
<Script id="script-home-4" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var base='/assets/conferences/';
  var slides=[
    {img:'conf-4.avif',t:'on stage',s:'presenting'},
    {img:'conf-3.avif',t:'on the mic',s:'design event'},
    {img:'conf-2.avif',t:'interviewing Don Norman',s:'fangirl moment 101 \\u00b7 ddx conference'},
    {img:'conf-6.avif',t:'co-hosting',s:'design session'},
    {video:'conf-clip.mp4',poster:'conf-clip-poster.jpg',t:'watch the talk',s:'on stage'},
    {img:'conf-config-group.jpg',t:'the community',s:'config 2026'},
    {img:'conf-config-b.jpg',t:'at config',s:'figma · sf'},
    {img:'conf-config-a.jpg',t:'in the room',s:'config · sf'},
    {video:'conf-config-clip.mp4',poster:'conf-config-poster.jpg',t:'config recap',s:'the bay'},
    {img:'conf-config-c.jpg',t:'config',s:'gurugram, india'},
    {img:'conf-1.avif',t:'on a panel',s:'discussion'},
    {img:'conf-5.avif',t:'hosting',s:'community meetup'}
  ];
  var stage=document.getElementById('cfStage'); if(!stage) return;
  var active=2, cards=[];
  slides.forEach(function(sl,i){
    var c=document.createElement('div'); c.className='cf-card';
    var media = sl.video
      ? '<video src="'+base+sl.video+'" poster="'+base+sl.poster+'" muted loop playsinline preload="metadata"></video><span class="play">&#9654;</span>'
      : '<img src="'+base+sl.img+'" alt="'+sl.t+', '+sl.s+'" loading="lazy">';
    c.innerHTML=media+'<div class="cap"><span class="t">'+sl.t+'</span><span class="s">'+sl.s+'</span></div>';
    c.addEventListener('click',function(){
      if(i===active){ var v=c.querySelector('video'); if(v){ var p=c.querySelector('.play'); if(v.paused){v.play();if(p)p.style.display='none';} else {v.pause();if(p)p.style.display='';} } }
      else setActive(i);
    });
    stage.appendChild(c); cards.push(c);
  });
  function layout(){
    var sp=Math.min(window.innerWidth*0.21,290);
    cards.forEach(function(c,i){
      var o=i-active, ao=Math.abs(o);
      var x=o*sp, ry=Math.max(-2,Math.min(2,-o))*22, sc=o===0?1:Math.max(0.62,0.82-(ao-1)*0.07), z=-ao*150, op=o===0?1:(ao===1?0.62:0.3);
      c.style.transform='translate(-50%,-50%) translateX('+x+'px) translateZ('+z+'px) rotateY('+ry+'deg) scale('+sc+')';
      c.style.opacity=op; c.style.zIndex=String(100-ao); c.classList.toggle('is-active',o===0);
      if(o!==0){ var v=c.querySelector('video'); if(v&&!v.paused){v.pause(); var p=c.querySelector('.play'); if(p)p.style.display='';} }
    });
  }
  function setActive(i){ active=Math.max(0,Math.min(cards.length-1,i)); layout(); }
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches, timer=null;
  function anyVid(){ return [].some.call(stage.querySelectorAll('video'),function(v){return !v.paused&&!v.ended;}); }
  function advance(){ setActive(active>=cards.length-1?0:active+1); }
  function stop(){ if(timer){clearInterval(timer);timer=null;} }
  function play(){ stop(); if(reduce||anyVid()) return; timer=setInterval(advance,3200); }
  document.getElementById('cfPrev').onclick=function(){setActive(active<=0?cards.length-1:active-1);stop();play();};
  document.getElementById('cfNext').onclick=function(){advance();stop();play();};
  window.addEventListener('resize',layout);
  var sx=0,drag=false;
  stage.addEventListener('pointerdown',function(e){drag=true;sx=e.clientX;});
  window.addEventListener('pointerup',function(e){ if(!drag)return; drag=false; var dx=e.clientX-sx; if(Math.abs(dx)>50){ setActive(active+(dx<0?1:-1)); stop(); play(); } });
  stage.addEventListener('pointerenter',stop);
  stage.addEventListener('pointerleave',play);
  stage.addEventListener('play',stop,true);
  stage.addEventListener('pause',play,true);
  stage.addEventListener('ended',play,true);
  layout();
  // don't auto-advance on load — start (from the interviewing opener) only when the gallery is reached
  if('IntersectionObserver' in window){ new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting) play(); else stop(); });},{threshold:.15}).observe(stage); }
  else { play(); }
})();` }} />
*/}

{/* ground: grass field at the very bottom (air-style), comes in + tints with local time */}



{/* time-of-day palette + slider */}
<Script id="script-home-5" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var PALETTES={
    dawn:{sky:['#7EB9D9','#C6D1C8','#ddd0b0','#F3D09F'],sun:['#fff6e4','#ffd79c'],night:false},
    day:{sky:['#2f6cb8','#5a93cf','#8cbce9','#b9dcf4'],sun:['#fff3c4','#ffd95b'],night:false},
    golden:{sky:['#a89ecb','#c8a9c8','#eec0a0','#f7dcc2'],sun:['#fff5ea','#f2c49c'],night:false},
    night:{sky:['#2b3a55','#3d4f6b','#6b7689','#9aa1a8'],sun:['#dfe7ff','#aab6dd'],night:true}
  };
  var ORDER=['dawn','day','golden','night'];
  function paletteForHour(h){ return (h>=5&&h<8)?'dawn':(h>=8&&h<17)?'day':(h>=17&&h<20)?'golden':'night'; }
  function hx(h){return [parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];}
  function mix(h1,h2,t){var a=hx(h1),b=hx(h2);return 'rgb('+Math.round(a[0]+(b[0]-a[0])*t)+','+Math.round(a[1]+(b[1]-a[1])*t)+','+Math.round(a[2]+(b[2]-a[2])*t)+')';}
  var root=document.documentElement.style;
  function applyMix(v){
    var t=v/100*(ORDER.length-1), i=Math.min(Math.floor(t),ORDER.length-2), f=t-i;
    var a=PALETTES[ORDER[i]], b=PALETTES[ORDER[i+1]];
    for(var k=0;k<4;k++) root.setProperty('--sky'+(k+1), mix(a.sky[k],b.sky[k],f));
    root.setProperty('--sun-core',mix(a.sun[0],b.sun[0],f));
    root.setProperty('--sun-mid', mix(a.sun[1],b.sun[1],f));
    document.body.classList.toggle('nightsky', f>0.5 ? b.night : a.night);
    var _nm=(f>0.5?ORDER[Math.min(i+1,ORDER.length-1)]:ORDER[i]);
    document.body.classList.toggle('litcopy', _nm==='day'||_nm==='night');
    document.body.classList.toggle('glasswhite', _nm==='night');
    document.body.setAttribute('data-tod', _nm);
  }
  function valueForName(n){ var idx=ORDER.indexOf(n); return idx<0?50:(idx/(ORDER.length-1)*100); }
  function nameForValue(v){ return ORDER[Math.max(0,Math.min(ORDER.length-1,Math.round(v/100*(ORDER.length-1))))]; }
  function broadcast(name){ window.gvTOD=name; if(window.gvOnTOD) window.gvOnTOD(name); }
  var range=document.getElementById('ssRange'), autoBtn=document.getElementById('ssAuto'), autoMode=true;
  function goAuto(){ autoMode=true; autoBtn.classList.add('on');
    var nm=paletteForHour(new Date().getHours()); var v=valueForName(nm); range.value=v; applyMix(v); broadcast(nm); }
  range.addEventListener('input',function(){ autoMode=false; autoBtn.classList.remove('on'); var nm=nameForValue(+range.value); range.value=valueForName(nm); applyMix(+range.value); broadcast(nm); });
  autoBtn.addEventListener('click',goAuto);
  /* global setter so the grass switcher (and anything else) drives the whole page's time of day */
  window.gvApplyName=function(name){ autoMode=false; if(autoBtn) autoBtn.classList.remove('on'); var v=valueForName(name); if(range) range.value=v; applyMix(v); broadcast(name); };
  goAuto();
  setInterval(function(){ if(autoMode) goAuto(); }, 60000);
  window.gvApplyName('day');   /* default to day on load */
})();` }} />

{/* wandering bees → fireflies at night (from journey.html) */}
<Script id="script-home-6" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var host=document.getElementById('bees'); if(!host) return;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mob=innerWidth<=720;
  /* each bee is a floating "idea" → a real open-source project */
  var CASES=[
    {tag:'AGENTIC AI', metric:'multi-agent harness',  prob:'agents that can't cooperate',   ttl:'Fried Viper agent hostel.',            href:'https://github.com/Dinesh-codeswell/fried-viper'},
    {tag:'CREATIVE CODE', metric:'1080p renders', prob:'manual lyric-video editing',   ttl:'Lyrical video render suite.',     href:'https://github.com/Dinesh-codeswell/lyrical-video'},
    {tag:'MUSIC INTELLIGENCE', metric:'zero-auth scrapers',  prob:'artist data locked in platforms',    ttl:'Music profile scraper & EPK.',      href:'https://github.com/Dinesh-codeswell/music-profile-scraper'},
    {tag:'COMMUNITY', metric:'1,000+ daily users', prob:'scattered job openings', ttl:'Job Dashboard for the community.',    href:'https://github.com/Dinesh-codeswell/Job-Dashboard'}
  ];
  var W=innerWidth,H=innerHeight,N=mob?3:4,bees=[],ORIG=[[43,57],[43,56],[34,47]];
  /* phones: keep bees down near the meadow (anchored to the bottom) so they never drift across the hero copy, whatever the viewport height */
  function bandY(){return mob?(H-90-Math.random()*110):H*(0.12+Math.random()*0.40);}
  for(var i=0;i<N;i++){
    var c=CASES[i%CASES.length];
    var el=document.createElement('div');el.className='bee';
    el.setAttribute('role','link');el.setAttribute('tabindex','0');
    el.setAttribute('aria-label','Case study: '+c.ttl+' Problem: '+c.prob);
    var bi=(i%3)+1, o=ORIG[i%3];
    el.innerHTML='<div class="bee-art"><img class="bee-body" src="/assets/bees/bee'+bi+'_body.png" alt="" />'
      +'<img class="bee-wing" src="/assets/bees/bee'+bi+'_wing.png" alt="" style="transform-origin:'+o[0]+'% '+o[1]+'%;animation-delay:'+(Math.random()*0.1).toFixed(2)+'s" />'
      +'<span class="bee-fly"></span></div>'
      +'<span class="bee-hint"></span>'
      +'<span class="bee-tag">'+c.metric+'</span>'
      +'<span class="bee-line"></span>'
      +'<div class="bee-lbl"><span class="bl-k">the problem</span><span class="bl-p">'+c.prob+'</span><span class="bl-t">'+c.ttl+'</span><span class="bl-r">read the case →</span></div>';
    host.appendChild(el);
    var dir=Math.random()<0.5?-1:1;
    var b={el:el,art:el.querySelector('.bee-art'),href:c.href,bx:Math.random()*W,by:bandY(),vx:dir*(0.2+Math.random()*0.28),
      ph:Math.random()*6.28,phs:0.045+Math.random()*0.03,bobA:7+Math.random()*7,swayA:6+Math.random()*8,sc:(mob?0.42:0.62)+Math.random()*(mob?0.2:0.42),hover:false};
    bees.push(b);
    (function(b){
      function go(){ window.open(b.href,'_blank','noopener'); }
      b.el.addEventListener('click',go);
      b.el.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault();go();} });
      b.el.addEventListener('mouseenter',function(){b.hover=true;b.el.classList.toggle('flip', b.bx > innerWidth*0.58);});
      b.el.addEventListener('focus',function(){b.hover=true;b.el.classList.toggle('flip', b.bx > innerWidth*0.58);});
      b.el.addEventListener('blur',function(){b.hover=false;});
      b.el.addEventListener('mouseleave',function(){b.hover=false;});
    })(b);
  }
  addEventListener('resize',function(){W=innerWidth;H=innerHeight;});
  function set(b){var dx=Math.sin(b.ph*0.7)*b.swayA,dy=Math.sin(b.ph)*b.bobA,
    tilt=Math.cos(b.ph)*5,face=b.vx<0?-1:1;
    b.el.style.transform='translate('+(b.bx+dx).toFixed(1)+'px,'+(b.by+dy).toFixed(1)+'px)';
    b.art.style.transform='rotate('+tilt.toFixed(1)+'deg) scaleX('+face+') scale('+b.sc.toFixed(2)+')';}
  if(reduce){bees.forEach(set);}
  else{
    var raf=window.requestAnimationFrame||function(c){return setTimeout(c,16);};
    (function loop(){
      host.classList.toggle('night',document.body.classList.contains('nightsky'));
      for(var i=0;i<bees.length;i++){var b=bees[i];
        if(!b.hover){ b.bx+=b.vx;b.ph+=b.phs;
          if(b.vx>0&&b.bx>W+70){b.bx=-70;b.by=bandY();}
          if(b.vx<0&&b.bx<-70){b.bx=W+70;b.by=bandY();} }
        set(b);}
      raf(loop);
    })();
    /* whisper: reveal one bee's metric tag at a time so the scene quietly hints it's clickable */
    var wi=-1;
    setInterval(function(){
      for(var k=0;k<bees.length;k++) bees[k].el.classList.remove('show-tag');
      wi=(wi+1)%bees.length;
      if(!bees[wi].hover) bees[wi].el.classList.add('show-tag');
    },3000);
  }
})();` }} />

{/* GSAP: headline letter-reveal + entrance + mouse parallax + magnetic CTAs (from journey.html) */}
<Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
<Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
<Script id="script-home-9" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer:fine)').matches;
  var g = window.gsap;

  function splitLetters(host){ if(!host) return; [].forEach.call(host.querySelectorAll('.ln > span'),function(line){ var frag=document.createDocumentFragment(); [].forEach.call(line.childNodes,function(node){ var acc=node.nodeType===1&&node.classList&&node.classList.contains('a'); var t=node.textContent; for(var k=0;k<t.length;k++){ var s=document.createElement('span'); s.className='lt'+(acc?' a':''); s.style.display='inline-block'; if(t[k]===' '){s.innerHTML='&nbsp;';}else{s.textContent=t[k];} frag.appendChild(s);} }); line.innerHTML=''; line.appendChild(frag); }); }
  function splitWords(el){ if(!el) return; var ws=el.textContent.split(/(\\s+)/); el.innerHTML=''; ws.forEach(function(w){ if(/^\\s+$/.test(w)){ el.appendChild(document.createTextNode(w)); } else { var s=document.createElement('span'); s.className='wd'; s.style.display='inline-block'; s.textContent=w; el.appendChild(s);} }); }
  if(innerWidth>720) splitLetters(document.querySelector('.hl'));  /* keep letters whole on phones so the headline can wrap */
  splitWords(document.querySelector('.lede'));
  splitWords(document.querySelector('.proof'));

  if(!g) return;

  if(!reduce){
    var tl=g.timeline({defaults:{ease:'power3.out'}});
    tl.from('.brand .a',{scale:0,opacity:0,duration:.55,ease:'back.out(3.2)'},0.05)
      .from('.hl .lt',{y:56,scale:.62,opacity:0,filter:'blur(12px)',transformOrigin:'50% 100%',duration:.95,stagger:.034,ease:'expo.out'},0.1)
      .from('.eyebrow',{y:12,opacity:0,duration:.7},0.25)
      .from('.lede .wd',{y:18,opacity:0,filter:'blur(6px)',duration:.6,stagger:.016},'-=0.25')
      .from('.proof .wd',{y:10,opacity:0,duration:.45,stagger:.03},'-=0.25')
      .from('.cta-row .ink-btn',{y:14,opacity:0,duration:.6,stagger:.1},'-=0.4');
  }

  /* mouse parallax depth — sun, clouds, meadow */
  if(!reduce && fine){
    var P=[{el:document.querySelector('.i-sunwrap'),d:0.16}];
    [].forEach.call(document.querySelectorAll('.i-pl'),function(p){ P.push({el:p,d:parseFloat(p.dataset.depth)||0.3}); });
    var mw=document.querySelector('.meadow'); if(mw) P.push({el:mw,d:parseFloat(mw.dataset.depth)||0.6});
    P=P.filter(function(o){return o.el;});
    var qs=P.map(function(o){return {x:g.quickTo(o.el,'x',{duration:.9,ease:'power3'}),y:g.quickTo(o.el,'y',{duration:.9,ease:'power3'}),d:o.d};});
    window.addEventListener('mousemove',function(e){
      var cx=(e.clientX/innerWidth-0.5), cy=(e.clientY/innerHeight-0.5);
      qs.forEach(function(q){ q.x(-cx*q.d*60); q.y(-cy*q.d*38); });
    },{passive:true});
  }

  /* ════ cinematic ascent — a continuous parallax rise into the sky as you scroll off the hero ════
     The ground lifts and dissolves, the copy floats up, the sun sinks, and cloud layers drift past
     at depth — the "6 years" banner rises straight in behind it. No pin, so there is never a held
     empty frame. Guarded by prefers-reduced-motion above. */
  if(!reduce && window.ScrollTrigger){
    g.registerPlugin(ScrollTrigger);
    var stageEl=document.querySelector('.stage');
    var mw2=document.querySelector('.meadow');
    var sunw=document.querySelector('.i-sunwrap');
    var heroEl=document.querySelector('.hero');
    var beesEl=document.querySelector('.bees');
    var plLayers=g.utils.toArray('.i-pl');

    if(stageEl && mw2){
      /* scroll-linked parallax ascent — NO pin, so there is never a held empty frame.
         The ground lifts and dissolves, the copy floats up, the sun sinks, and cloud layers drift
         past at depth (nearer layers travel farther → you feel the rise) while the "6 years"
         banner below rises straight in behind it. One continuous lift into the sky. */
      var st={trigger:stageEl,start:'top top',end:'bottom top',scrub:1};
      g.to(mw2,{yPercent:-46,scale:1.14,opacity:.22,transformOrigin:'50% 100%',ease:'none',scrollTrigger:st});
      if(heroEl) g.to(heroEl,{yPercent:-30,opacity:0,ease:'none',scrollTrigger:st});
      if(beesEl) g.to(beesEl,{yPercent:-42,opacity:.2,ease:'none',scrollTrigger:st});
      if(sunw)   g.to(sunw,{yPercent:30,opacity:.3,ease:'none',scrollTrigger:st});
      plLayers.forEach(function(p){ var d=parseFloat(p.dataset.depth)||0.3;
        g.to(p,{yPercent:-(14+d*70),scale:1+d*0.3,ease:'none',scrollTrigger:st}); });
    }
  }

  /* (magnetic CTA pull is handled by the .ink-btn script below) */
})();` }} />
{/* inked-button turbulence filter + behavior (from buttons.js) */}
<svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}><filter id="btnink"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="2" seed="7" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="10" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter></svg>
<Script id="script-home-10" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
  Array.prototype.forEach.call(document.querySelectorAll('.ink-btn'),function(b){
    if(!b.querySelector('.ink')){ var s=document.createElement('span'); s.className='ink'; s.setAttribute('aria-hidden','true'); b.appendChild(s); }
    function origin(e){ var r=b.getBoundingClientRect(); b.style.setProperty('--mx',(e.clientX-r.left)+'px'); b.style.setProperty('--my',(e.clientY-r.top)+'px'); }
    b.addEventListener('pointerenter',function(e){ origin(e); b.classList.add('is-on'); });
    b.addEventListener('pointerleave',function(e){ origin(e); b.classList.remove('is-on'); });
    if(reduce || !fine) return;
    var lbl=b.querySelector('.lbl'), tx=0,ty=0,gx=0,gy=0,sc=1,scT=1,raf=null;
    function loop(){
      tx+=(gx-tx)*0.18; ty+=(gy-ty)*0.18; sc+=(scT-sc)*0.2;
      b.style.transform='translate('+tx.toFixed(2)+'px,'+ty.toFixed(2)+'px) scale('+sc.toFixed(3)+')';
      if(lbl) lbl.style.transform='translate('+(tx*0.4).toFixed(2)+'px,'+(ty*0.4).toFixed(2)+'px)';
      if(Math.abs(gx-tx)>0.1||Math.abs(gy-ty)>0.1||Math.abs(scT-sc)>0.002) raf=requestAnimationFrame(loop); else raf=null;
    }
    function kick(){ if(!raf) raf=requestAnimationFrame(loop); }
    b.addEventListener('pointermove',function(e){ var r=b.getBoundingClientRect(); gx=(e.clientX-r.left-r.width/2)*0.3; gy=(e.clientY-r.top-r.height/2)*0.38; kick(); });
    b.addEventListener('pointerleave',function(){ gx=0; gy=0; scT=1; kick(); });
    b.addEventListener('pointerdown',function(){ scT=0.94; kick(); });
    window.addEventListener('pointerup',function(){ scT=1; kick(); });
  });
})();` }} />
{/* mobile hamburger nav */}
<Script id="script-home-11" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var t=document.getElementById('navToggle'), menu=document.getElementById('navMenu');
  if(!t||!menu) return;
  function set(open){ document.body.classList.toggle('nav-open',open); t.setAttribute('aria-expanded',open?'true':'false'); t.setAttribute('aria-label',open?'Close menu':'Open menu'); }
  t.addEventListener('click',function(e){ e.stopPropagation(); set(!document.body.classList.contains('nav-open')); });
  [].forEach.call(menu.querySelectorAll('a'),function(a){ a.addEventListener('click',function(){ set(false); }); });
  document.addEventListener('click',function(e){ if(document.body.classList.contains('nav-open') && !menu.contains(e.target) && !t.contains(e.target)) set(false); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') set(false); });
})();` }} />

{/* portfolio chat assistant — the .ask-pill opens it (its own floating launcher is hidden here) */}


<Script src="/assistant.js?v=2"  strategy="afterInteractive" />
<Script id="script-home-13" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var pill=document.querySelector('.ask-pill');
  if(!pill) return;
  pill.addEventListener('click',function(){
    var l=document.querySelector('#gachat .gachat-launch');
    if(l) l.click();
  });
})();` }} />

{/* below-fold: reveal cards on scroll */}
<Script id="script-home-14" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=document.querySelectorAll('.reveal');
  if(reduce || !('IntersectionObserver' in window)){ [].forEach.call(els,function(e){e.classList.add('in');}); return; }
  var io=new IntersectionObserver(function(es){ es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } }); },{threshold:0.15});
  [].forEach.call(els,function(e){ io.observe(e); });
})();` }} />

{/* editorial "more work" list: cursor-following image reveal (desktop only) */}
<Script id="script-home-15" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  if(!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  var list=document.getElementById('swl'); if(!list) return;
  var thumb=document.getElementById('swlThumb'), cap=document.getElementById('swlCap');
  [].forEach.call(list.querySelectorAll('.swl-row'),function(row){
    row.addEventListener('mousemove',function(e){
      var r=list.getBoundingClientRect();
      thumb.style.background=row.getAttribute('data-cc');
      thumb.style.left=(e.clientX-r.left)+'px';
      thumb.style.top=(e.clientY-r.top)+'px';
      thumb.style.opacity='1'; thumb.style.transform='translate(-50%,-50%) scale(1)';
      cap.textContent=row.getAttribute('data-cap');
    });
    row.addEventListener('mouseleave',function(){ thumb.style.opacity='0'; thumb.style.transform='translate(-50%,-50%) scale(.9)'; });
  });
})();` }} />

{/* ════ AIR-STYLE engine — splash · scroll reveals · count-up stats · time-of-day closing ════ */}
<Script id="script-home-16" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- cloud sky parallax (subtle drift up as you scroll) ----
  var cf=document.getElementById('cloudfield');
  if(cf && !reduce){
    var ticking=false;
    addEventListener('scroll',function(){
      if(ticking) return; ticking=true;
      requestAnimationFrame(function(){ cf.style.transform='translateY('+(-(window.scrollY*0.045)).toFixed(1)+'px)'; ticking=false; });
    },{passive:true});
  }

  var splash=document.getElementById('aiSplash');
  function endSplash(){ document.body.classList.add('splash-done'); }

  // ---- time-of-day closing (uses the visitor's real local hour) ----
  var close=document.getElementById('aiClose');
  if(close){
    var h=new Date().getHours(), sky, g, night=false;
    if(h>=5&&h<8){sky='linear-gradient(180deg,#f4c79b,#f7d8b4)';g='· good morning';}
    else if(h>=8&&h<17){sky='linear-gradient(180deg,#bcdcf0,#e4f0ea)';g='· good afternoon';}
    else if(h>=17&&h<20){sky='linear-gradient(180deg,#f0a96b,#f6c98f)';g='· golden hour';}
    else {sky='linear-gradient(180deg,#2b3a55,#3d4f6b)';g='· good evening';night=true;}
    close.style.background=sky;
    var greet=document.getElementById('aiGreet'); if(greet) greet.textContent=g;
    if(night) close.classList.add('is-night');
  }

  function initAnimations() {
    // ---- daybreak intro: sun rises, sky warms dawn→day, a fun note, then the screen lifts away ----
    if(splash && !reduce && !matchMedia('(max-width: 760px)').matches){
      gsap.timeline({onComplete:endSplash})
        .from('#aiSplash .sp-sun',{yPercent:150,scale:.72,opacity:0,duration:.95,ease:'power3.out'},0.1)
        .to('#aiSplash .sp-dawn',{opacity:0,duration:1.3,ease:'power1.inOut'},0.2)
        .from('#aiSplash .sp-line',{y:20,opacity:0,duration:.65,ease:'power3.out'},0.5)
        .to('#aiSplash',{yPercent:-100,duration:.9,ease:'power3.inOut'},'+=0.5');
      setTimeout(endSplash, 4200); // safety: never trap the page behind the splash
    } else {
      endSplash();
    }

    gsap.registerPlugin(ScrollTrigger);

    if(reduce){
      document.querySelectorAll('.ai-rv').forEach(function(e){e.classList.add('in');});
    } else {
      ScrollTrigger.batch('.ai-rv',{start:'top 86%', once:true, onEnter:function(els){ els.forEach(function(e){e.classList.add('in');}); }});

      gsap.utils.toArray('.ai-case-shot').forEach(function(shot){
        gsap.fromTo(shot,{autoAlpha:.4,scale:.92,y:54},{autoAlpha:1,scale:1,y:0,ease:'none',
          scrollTrigger:{trigger:shot,start:'top 94%',end:'top 50%',scrub:true}});
      });
    }

    // ground (grass): air-style time-of-day scene — switcher + auto local time + fireflies
    var ground=document.getElementById('ground'), gimg=document.getElementById('groundImg'),
        gtint=document.getElementById('groundTint'), tod=document.getElementById('tod'), gfly=document.getElementById('groundFly');
    var TOD={ dawn:'rgba(250,228,198,.10)', day:'transparent', golden:'rgba(250,206,160,.09)', night:'rgba(30,42,70,.20)' };
    function setTOD(name){
      if(gtint) gtint.style.background=TOD[name]||'transparent';
      if(ground) ground.classList.toggle('is-night', name==='night');
      if(tod) tod.querySelectorAll('.tod-b').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-tod')===name); });
    }
    if(ground){
      // synced with the page-wide time of day (hero slider + clouds broadcast via window.gvTOD)
      window.gvOnTOD=function(name){ setTOD(name); };
      setTOD(window.gvTOD || 'day');
      if(tod) tod.querySelectorAll('.tod-b').forEach(function(b){ b.addEventListener('click',function(){
        var n=b.getAttribute('data-tod');
        if(window.gvApplyName) window.gvApplyName(n); else setTOD(n);   // drives hero sky + clouds + grass together
      }); });
      if(gfly && !reduce){ for(var i=0;i<9;i++){ var f=document.createElement('i'); f.style.left=(8+Math.random()*84)+'%'; f.style.top=(32+Math.random()*52)+'%'; f.style.animationDelay=(Math.random()*3).toFixed(2)+'s'; gfly.appendChild(f); } }
    }
    if(gimg && !reduce){
      gsap.fromTo(gimg,{autoAlpha:.5,scale:1.08,y:28},{autoAlpha:1,scale:1,y:0,ease:'none',
        scrollTrigger:{trigger:ground,start:'top 96%',end:'top 58%',scrub:true}});
    }

    document.querySelectorAll('.ai-stat .n').forEach(function(el){
      var target=+el.getAttribute('data-count'); if(!target) return;
      ScrollTrigger.create({trigger:el, start:'top 90%', once:true, onEnter:function(){
        if(reduce){ el.textContent=target.toLocaleString(); return; }
        var obj={v:0};
        gsap.to(obj,{v:target,duration:1.4,ease:'power2.out',onUpdate:function(){ el.textContent=Math.round(obj.v).toLocaleString(); }});
      }});
    });

    if(document.fonts && document.fonts.ready){ document.fonts.ready.then(function(){ ScrollTrigger.refresh(); }); }
  }

  // wait for GSAP and ScrollTrigger to be available since scripts are loaded dynamically
  var checkCount=0;
  function checkGSAP() {
    if(window.gsap && window.ScrollTrigger) {
      initAnimations();
    } else if (checkCount < 80) {
      checkCount++;
      requestAnimationFrame(checkGSAP);
    } else {
      endSplash();
      document.querySelectorAll('.ai-rv').forEach(function(e){e.classList.add('in');});
      document.querySelectorAll('.ai-stat .n').forEach(function(e){var t=+e.getAttribute('data-count'); if(t) e.textContent=t.toLocaleString();});
      document.querySelectorAll('.ai-stat .ln').forEach(function(e){e.style.transform='none';});
    }
  }
  checkGSAP();
})();` }} />

{/* interactive grass footer (WebGL) — auto-inits .grass-footer */}
{/* keep the grass ground as the very last band */}
<Script id="script-home-17" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.addEventListener('load',function(){
  var g=document.getElementById('ground');
  if(g) document.body.appendChild(g);
  if(window.ScrollTrigger) ScrollTrigger.refresh();
  window.dispatchEvent(new Event('resize'));   // let the grass canvas re-measure after the move
});` }} />
{/* real cloud sky engine — procedural WebGL clouds (replaces the PNG layers).
     Reads the page's live time-of-day CSS vars (--sky1..4, --sun-mid, body.nightsky)
     so the sky always matches the hero slider; drifts with scroll + pointer parallax.
     If WebGL is unavailable it bails and the .cloudfield CSS gradient shows instead. */}
<Script id="script-home-18" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var cf=document.getElementById('cloudfield'); if(!cf) return;
  // drop any legacy PNG/CSS cloud layers
  [].slice.call(cf.querySelectorAll('.cfc, .cf')).forEach(function(n){ n.remove(); });

  var canvas=document.createElement('canvas');
  canvas.id='cf-gl'; canvas.setAttribute('aria-hidden','true');
  canvas.style.cssText='position:fixed;inset:0;width:100dvw;height:100dvh;z-index:0;pointer-events:none;';
  document.body.appendChild(canvas);

  var gl=canvas.getContext('webgl')||canvas.getContext('experimental-webgl');
  if(!gl){ canvas.remove(); return; } // CSS gradient fallback stays

  var VERT='attribute vec2 aPos; void main(){ gl_Position=vec4(aPos,0.0,1.0); }';
  var FRAG=[
   'precision highp float;',
   'uniform float uTime,uScroll,uNight;',
   'uniform vec2 uRes,uMouse;',
   'uniform vec3 uSky0,uSky1,uSky2,uSky3,uSun;',
   'float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }',
   'float noise(vec2 p){ vec2 i=floor(p),f=fract(p); vec2 u=f*f*f*(f*(f*6.0-15.0)+10.0);',
   ' return mix(mix(hash(i+vec2(0.,0.)),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y); }',
   'float fbm(vec2 p){ float f=0.,a=0.5; mat2 R=mat2(0.80,0.60,-0.60,0.80); for(int i=0;i<5;i++){ f+=a*noise(p); p=R*p*2.02; a*=0.5; } return f; }',
   'float clouds(vec2 p,float c){ return smoothstep(1.0-c,1.0,fbm(p)); }',
   'vec3 skyGrad(float pos){ vec3 c=mix(uSky0,uSky1,smoothstep(0.0,0.38,pos)); c=mix(c,uSky2,smoothstep(0.38,0.74,pos)); c=mix(c,uSky3,smoothstep(0.74,1.0,pos)); return c; }',
   'void main(){',
   ' vec2 res=uRes; vec2 uv=(gl_FragCoord.xy-0.5*res)/res.y; float sv=gl_FragCoord.y/res.y;',
   ' float t=uTime, alt=uScroll; vec3 sky=skyGrad(1.0-sv);',
   ' vec2 wind=vec2(t*0.010,0.0)+uMouse*0.06; vec2 base=uv+wind;',
   ' vec2 pn=base*2.3; pn.y+=alt*2.2 + uMouse.y*0.10; vec2 pf=base*1.25; pf.y+=alt*1.1;',
   ' vec2 warp=vec2(fbm(pn*0.6+vec2(0.0,t*0.02)),fbm(pn*0.6+vec2(5.2,1.3))); vec2 pnw=pn+warp*0.6;',
   ' vec2 sunDir=normalize(vec2(0.3,0.8));',
   ' float df=clouds(pf,0.48); vec3 farCol=mix(vec3(0.80,0.84,0.92),vec3(0.97,0.98,1.0),0.5);',
   ' float dn=clouds(pnw,0.52); float sh=clouds(pnw+sunDir*0.16,0.52);',
   ' float lit=clamp(dn-sh*0.85+0.30,0.0,1.0);',
   ' vec3 cloudLit=mix(vec3(1.00,0.99,0.97),uSun,0.18); vec3 cloudShadow=mix(vec3(0.60,0.64,0.74),uSky1,0.30);',
   ' vec3 nearCol=mix(cloudShadow,cloudLit,lit);',
   ' float nb=mix(1.0,0.55,uNight); farCol*=nb; nearCol*=nb;',
   ' vec3 col=sky; col=mix(col,farCol,df*0.28); col=mix(col,nearCol,dn*0.80);',
   ' col+=(hash(gl_FragCoord.xy)-0.5)/255.0; gl_FragColor=vec4(col,1.0);',
   '}'
  ].join('\\n');

  function sh(type,src){ var o=gl.createShader(type); gl.shaderSource(o,src); gl.compileShader(o); if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(o)); return o; }
  var prog=gl.createProgram(); gl.attachShader(prog,sh(gl.VERTEX_SHADER,VERT)); gl.attachShader(prog,sh(gl.FRAGMENT_SHADER,FRAG)); gl.linkProgram(prog); gl.useProgram(prog);
  var b=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,b); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  var aPos=gl.getAttribLocation(prog,'aPos'); gl.enableVertexAttribArray(aPos); gl.vertexAttribPointer(aPos,2,gl.FLOAT,false,0,0);

  var U={}; ['uTime','uScroll','uRes','uSky0','uSky1','uSky2','uSky3','uSun','uNight','uMouse'].forEach(function(n){ U[n]=gl.getUniformLocation(prog,n); });

  var DPR=Math.min(window.devicePixelRatio||1,1.5);
  function resize(){ var w=innerWidth,h=innerHeight; canvas.width=Math.floor(w*DPR); canvas.height=Math.floor(h*DPR); gl.viewport(0,0,canvas.width,canvas.height); gl.uniform2f(U.uRes,canvas.width,canvas.height); }
  addEventListener('resize',resize); resize();

  // ---- read the page's live time-of-day palette from CSS vars ----
  var sky=[[0.13,0.42,0.72],[0.35,0.58,0.81],[0.55,0.74,0.90],[0.73,0.86,0.96]], sun=[1.0,0.86,0.55], nightTarget=0;
  function parseCol(s){ s=(s||'').trim(); if(!s) return null;
    if(s.charAt(0)==='#'){ var n=parseInt(s.slice(1),16); return [(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]; }
    var m=s.match(/[\\d.]+/g); if(!m||m.length<3) return null; return [(+m[0])/255,(+m[1])/255,(+m[2])/255];
  }
  function readTOD(){
    var cs=getComputedStyle(document.documentElement);
    for(var i=0;i<4;i++){ var c=parseCol(cs.getPropertyValue('--sky'+(i+1))); if(c) sky[i]=c; }
    var sm=parseCol(cs.getPropertyValue('--sun-mid'))||parseCol(cs.getPropertyValue('--sun-core')); if(sm) sun=sm;
    nightTarget=document.body.classList.contains('nightsky')?1:0;
  }
  readTOD(); setInterval(readTOD,180);

  var tmx=0,tmy=0,mx=0,my=0;
  addEventListener('pointermove',function(e){ tmx=(e.clientX/innerWidth)-0.5; tmy=(e.clientY/innerHeight)-0.5; },{passive:true});

  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches || location.hash.indexOf('figmacapture')>-1;
  var cScroll=0,night=0,last=performance.now(),elapsed=0,running=true;
  function progress(){ var max=Math.max(1,document.body.scrollHeight-innerHeight); return Math.min(1,(window.scrollY||window.pageYOffset||0)/max); }

  function draw(){
    gl.uniform1f(U.uTime,elapsed); gl.uniform1f(U.uScroll,cScroll); gl.uniform1f(U.uNight,night);
    gl.uniform2f(U.uMouse,mx,my);
    gl.uniform3f(U.uSky0,sky[0][0],sky[0][1],sky[0][2]); gl.uniform3f(U.uSky1,sky[1][0],sky[1][1],sky[1][2]);
    gl.uniform3f(U.uSky2,sky[2][0],sky[2][1],sky[2][2]); gl.uniform3f(U.uSky3,sky[3][0],sky[3][1],sky[3][2]);
    gl.uniform3f(U.uSun,sun[0],sun[1],sun[2]);
    gl.drawArrays(gl.TRIANGLES,0,3);
  }
  function loop(now){
    if(!running) return;
    var dt=Math.min(0.05,(now-last)/1000); last=now; elapsed+=dt;
    cScroll+=(progress()-cScroll)*0.06;
    night+=(nightTarget-night)*0.05;
    mx+=(tmx-mx)*0.05; my+=(tmy-my)*0.05;
    draw(); requestAnimationFrame(loop);
  }
  document.addEventListener('visibilitychange',function(){ running=!document.hidden; if(running){ last=performance.now(); requestAnimationFrame(loop); } });

  if(reduce){
    cScroll=progress(); night=nightTarget; readTOD(); draw();
    addEventListener('scroll',function(){ cScroll=progress(); draw(); },{passive:true});
    setInterval(function(){ readTOD(); night=nightTarget; draw(); },300);
  } else {
    requestAnimationFrame(loop);
  }
})();` }} /><canvas id="cf-gl" aria-hidden="true" width="1440" height="900" style={{ position: "fixed", inset: "0px", width: "100dvw", height: "100dvh", zIndex: "0", pointerEvents: "none" }}></canvas>
<Script id="script-home-19" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
 var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 var st=document.getElementById('aiStat');
 var sec=document.getElementById('aiStatSec');
 if(st&&sec){
   var lines=st.querySelectorAll('.ln');
   var nums=st.querySelectorAll('.num');
   function showFinal(){ for(var i=0;i<lines.length;i++){lines[i].style.transform='none';} for(var j=0;j<nums.length;j++){nums[j].textContent=nums[j].getAttribute('data-to');} }
   if(reduce){ showFinal(); }
   else {
     var visible=false;
     function countUp(){ for(var i=0;i<nums.length;i++){ (function(n,delay){ var to=+n.getAttribute('data-to'),t0=null,dur=1000;
       function step(ts){ if(!t0)t0=ts; var p=Math.min(1,(ts-t0)/dur); n.textContent=Math.round((1-Math.pow(1-p,3))*to); if(p<1)requestAnimationFrame(step); }
       setTimeout(function(){requestAnimationFrame(step);},delay); })(nums[i],i*130); } }
     var io=new IntersectionObserver(function(es){ es.forEach(function(e){
       if(e.isIntersecting && !visible){ visible=true; st.classList.add('in'); countUp(); }
       else if(!e.isIntersecting && visible){ visible=false; st.classList.remove('in'); for(var k=0;k<nums.length;k++){nums[k].textContent='0';} }
     }); },{threshold:.28});
     io.observe(st);
   }
 }
 var cards=document.querySelectorAll('.tri-card');
 var tri=document.getElementById('aiTriad');
 if(cards.length){ if(reduce){cards.forEach(function(c){c.classList.add('in');}); if(tri)tri.classList.add('lit');} else { var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=[].indexOf.call(cards,e.target);e.target.style.animationDelay=(i*0.12)+'s';e.target.classList.add('in');if(tri)tri.classList.add('lit');io2.unobserve(e.target);}});},{threshold:.18}); cards.forEach(function(c){io2.observe(c);}); } }
 // 4 icon stops drive the page-wide time of day; stay in sync with AUTO + grass toggle
 var rail=document.getElementById('skyRail');
 if(rail){
   var tb=rail.querySelectorAll('.sr-b');
   function setTodActive(name){ tb.forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-tod')===name); }); }
   tb.forEach(function(b){ b.addEventListener('click',function(){ var n=b.getAttribute('data-tod'); if(window.gvApplyName) window.gvApplyName(n); setTodActive(n); }); });
   var prevOn=window.gvOnTOD; window.gvOnTOD=function(name){ if(prevOn) prevOn(name); setTodActive(name); };
   setTodActive(window.gvTOD||'day');
 }
})();` }} />
<Script id="script-home-20" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){var el=document.getElementById('gfClock');if(!el)return;function t(){try{el.textContent=new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit',timeZone:'Asia/Kolkata'});}catch(e){el.textContent=new Date().toLocaleTimeString([], {hour:'numeric',minute:'2-digit'});}}t();setInterval(t,15000);})();` }} />
<Script id="script-home-20b" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){document.querySelectorAll('.gf-copy').forEach(function(btn){btn.addEventListener('click',function(){var addr=btn.getAttribute('data-copy-email')||'';var done=function(){btn.classList.add('did');setTimeout(function(){btn.classList.remove('did');},1600);};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(addr).then(done,function(){window.location.href='mailto:'+addr;});}else{var t=document.createElement('textarea');t.value=addr;document.body.appendChild(t);t.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(t);}});});})();` }} />
<Script id="script-home-21" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var gal=document.getElementById('cgal'); if(!gal) return;
  var items=[].slice.call(gal.querySelectorAll('.cgal-item')); if(!items.length) return;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pos=0,target=0,down=false,lastX=0,v=0,moved=0;
  function layout(off){
    var w=gal.clientWidth,cx=w/2;
    var iw0=items[0].offsetWidth||260, gap=Math.max(18,w*0.02), iw=iw0+gap, total=items.length*iw;
    for(var i=0;i<items.length;i++){
      var c=i*iw - off + iw0/2;
      while(c < cx-total/2) c+=total;
      while(c > cx+total/2) c-=total;
      var rel=c-cx;
      var rotY=Math.max(-34,Math.min(34,-rel*0.05));
      var tz=-Math.min(280,Math.abs(rel)*0.32);
      var it=items[i];
      it.style.transform='translateX('+(c-iw0/2).toFixed(1)+'px) translateY(-50%) translateZ('+tz.toFixed(1)+'px) rotateY('+rotY.toFixed(2)+'deg)';
      it.style.zIndex=String(2000-Math.round(Math.abs(rel)));
      it.style.opacity=Math.max(.28,1-Math.abs(rel)/(w*0.78)).toFixed(2);
    }
  }
  function dn(e){down=true;moved=0;lastX=(e.touches?e.touches[0].clientX:e.clientX);v=0;gal.classList.add('drag');}
  function mv(e){ if(!down)return; var x=(e.touches?e.touches[0].clientX:e.clientX); var d=x-lastX; lastX=x; moved+=Math.abs(d); target-=d*1.3; v=-d; }
  function up(){ if(!down)return; down=false; target+=v*9; gal.classList.remove('drag'); }
  gal.addEventListener('mousedown',dn); gal.addEventListener('touchstart',dn,{passive:true});
  window.addEventListener('mousemove',mv); window.addEventListener('touchmove',mv,{passive:true});
  window.addEventListener('mouseup',up); window.addEventListener('touchend',up);
  gal.addEventListener('wheel',function(e){ target+=(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)*0.5; },{passive:true});
  gal.addEventListener('click',function(e){ if(moved>6){e.preventDefault();e.stopPropagation();} },true);
  var drift=reduce?0:0.22;
  function loop(){ if(!down) target+=drift; pos+=(target-pos)*0.07; layout(pos); requestAnimationFrame(loop); }
  layout(0); requestAnimationFrame(loop);
  addEventListener('resize',function(){layout(pos);});
})();` }} />
{/* cinematic layer: Three.js sunlit dust motes in the hero */}
<Script src="/cinematic.js?v=1" strategy="afterInteractive" />
<Script src="/smooth-scroll.js"  strategy="afterInteractive" />
<Script src="/nav.js?v=6"  strategy="afterInteractive" />


{/* ════ SKY FLIGHT — depth, drifting clouds, birds, light motes, oversized drift-type, scroll camera ════ */}

<div className="sfly" id="sfFar" aria-hidden="true"><div className="sf-cloud" style={{ width: "413.87px", height: "231.767px", opacity: "0.64", transform: "translate3d(677.3px, 286.3px, 0px) scale(1.127)" }}></div><div className="sf-cloud" style={{ width: "310.302px", height: "173.769px", opacity: "0.41", transform: "translate3d(39.3px, 152px, 0px) scale(1.15)" }}></div><div className="sf-cloud" style={{ width: "378.771px", height: "212.112px", opacity: "0.49", transform: "translate3d(1247.9px, 382px, 0px) scale(1.136)" }}></div><div className="sf-cloud" style={{ width: "400.334px", height: "224.187px", opacity: "0.46", transform: "translate3d(497.5px, 910.1px, 0px) scale(1.077)" }}></div><div className="sf-cloud" style={{ width: "204.084px", height: "114.287px", opacity: "0.7", transform: "translate3d(912.2px, 977.5px, 0px) scale(1.196)" }}></div><div className="sf-cloud" style={{ width: "207.018px", height: "115.93px", opacity: "0.51", transform: "translate3d(462.4px, 636.5px, 0px) scale(1.054)" }}></div><div className="sf-cloud" style={{ width: "382.739px", height: "214.334px", opacity: "0.61", transform: "translate3d(955.3px, 824.1px, 0px) scale(1.079)" }}></div></div>
<div className="sfly" id="sfNear" aria-hidden="true"><div className="sf-mote" style={{ left: "302.001px", top: "286.048px", animationDuration: "6.75958s", animationDelay: "-2.14502s" }}></div><div className="sf-mote" style={{ left: "1078.39px", top: "407.337px", animationDuration: "10.2218s", animationDelay: "-5.90128s" }}></div><div className="sf-mote" style={{ left: "492.657px", top: "65.8724px", animationDuration: "9.81334s", animationDelay: "-4.28892s" }}></div><div className="sf-mote" style={{ left: "443.158px", top: "170.39px", animationDuration: "12.7487s", animationDelay: "-0.873547s" }}></div><div className="sf-mote" style={{ left: "129.916px", top: "178.493px", animationDuration: "8.38966s", animationDelay: "-4.5288s" }}></div><div className="sf-mote" style={{ left: "1408.38px", top: "772.472px", animationDuration: "7.59417s", animationDelay: "-7.19878s" }}></div><div className="sf-mote" style={{ left: "977.922px", top: "214.374px", animationDuration: "12.5305s", animationDelay: "-9.04174s" }}></div><div className="sf-mote" style={{ left: "1244.49px", top: "248.013px", animationDuration: "12.0062s", animationDelay: "-6.26126s" }}></div><div className="sf-mote" style={{ left: "329.314px", top: "147.714px", animationDuration: "12.4117s", animationDelay: "-11.8004s" }}></div><div className="sf-mote" style={{ left: "1221.94px", top: "38.5753px", animationDuration: "12.6685s", animationDelay: "-11.9911s" }}></div><div className="sf-mote" style={{ left: "64.3289px", top: "492.79px", animationDuration: "6.72s", animationDelay: "-0.991608s" }}></div><div className="sf-mote" style={{ left: "516.048px", top: "18.7611px", animationDuration: "11.8736s", animationDelay: "-11.1756s" }}></div></div>

<div className="sf-word" id="sfWordA" style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0%, 75%) scale(0.72, 0.72)" }}>dream.</div>
<div className="sf-word" id="sfWordB" style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0%, 75%) scale(0.72, 0.72)" }}>build.</div><Script id="script-home-25" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(reduce) return;
  var far=document.getElementById('sfFar'), near=document.getElementById('sfNear');
  if(!far||!near) return;
  var W=innerWidth, H=innerHeight;
  addEventListener('resize',function(){ W=innerWidth; H=innerHeight; },{passive:true});
  function rnd(a,b){return a+Math.random()*(b-a);}
  function wrap(v,min,max){var r=max-min; v=(v-min)%r; if(v<0)v+=r; return v+min;}

  /* drifting cloud wisps at depth (behind content) */
  var clouds=[];
  for(var i=0;i<7;i++){
    var el=document.createElement('div'); el.className='sf-cloud';
    var size=rnd(170,420); el.style.width=size+'px'; el.style.height=(size*0.56)+'px';
    el.style.opacity=rnd(.35,.7).toFixed(2);
    far.appendChild(el);
    clouds.push({el:el,x:rnd(-200,W+200),y:rnd(-100,H+100),depth:rnd(.12,.6),drift:rnd(.1,.5)*(Math.random()<.5?-1:1),w:size});
  }
  /* light motes / pollen drifting up (foreground sparkle) */
  for(var m=0;m<12;m++){
    var mo=document.createElement('div'); mo.className='sf-mote';
    mo.style.left=rnd(0,W)+'px'; mo.style.top=rnd(0,H)+'px';
    var dur=rnd(6,13); mo.style.animationDuration=dur+'s'; mo.style.animationDelay=(-rnd(0,dur))+'s';
    near.appendChild(mo);
  }

  /* pointer parallax (desktop) */
  var tmx=0,tmy=0,mx=0,my=0;
  if(matchMedia('(hover:hover) and (pointer:fine)').matches)
    addEventListener('pointermove',function(e){ tmx=e.clientX/innerWidth-.5; tmy=e.clientY/innerHeight-.5; },{passive:true});

  /* one rAF loop: smoothed scroll drives the camera; depth makes near layers fly faster */
  var sY=window.scrollY||0, last=performance.now(), running=true;
  function loop(now){
    if(!running) return;
    var dt=Math.min(.05,(now-last)/1000); last=now;
    sY += ((window.scrollY||0)-sY)*0.12;
    mx += (tmx-mx)*0.05; my += (tmy-my)*0.05;
    for(var i=0;i<clouds.length;i++){ var c=clouds[i];
      c.x += c.drift*dt*26;
      var sx=wrap(c.x + mx*c.depth*-90, -c.w-100, W+100);
      var sy=wrap(c.y - sY*c.depth*0.55 + my*c.depth*-50, -c.w, H+c.w);
      c.el.style.transform='translate3d('+sx.toFixed(1)+'px,'+sy.toFixed(1)+'px,0) scale('+(1+c.depth*0.35).toFixed(3)+')';
    }
    requestAnimationFrame(loop);
  }
  document.addEventListener('visibilitychange',function(){ running=!document.hidden; if(running){ last=performance.now(); requestAnimationFrame(loop); } });
  requestAnimationFrame(loop);

  /* oversized drift-type — giant words you fly past, tied to two sections */
  if(window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    function flyWord(sel,trig){
      var el=document.querySelector(sel), sec=document.querySelector(trig);
      if(!el||!sec) return;
      gsap.timeline({scrollTrigger:{trigger:sec,start:'top bottom',end:'bottom top',scrub:1}})
        .fromTo(el,{yPercent:75,scale:.72,opacity:0},{yPercent:0,scale:1,opacity:1,ease:'none',duration:.5})
        .to(el,{yPercent:-75,scale:1.32,opacity:0,ease:'none',duration:.5});
    }
    flyWord('#sfWordA','.ai-skills');
    flyWord('#sfWordB','.tmn');
    ScrollTrigger.refresh();
  }
})();` }} />
<Script id="script-home-27" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* selected-work filters: view-transition morph, Apple-quiet */
(function(){
  var wrap=document.getElementById('swFilters'); if(!wrap) return;
  var btns=[].slice.call(wrap.querySelectorAll('button'));
  var thumb=document.createElement('span'); thumb.className='sw-thumb'; thumb.setAttribute('aria-hidden','true');
  wrap.insertBefore(thumb, wrap.firstChild);
  function seat(){
    var on=wrap.querySelector('button.on'); if(!on) return;
    thumb.style.width=on.offsetWidth+'px';
    thumb.style.transform='translateX('+(on.offsetLeft-5)+'px)';
  }
  window.addEventListener('resize',seat);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(seat);
  setTimeout(seat,60);
  var cards=[].slice.call(document.querySelectorAll('.sw-grid .sw-card'));
  cards.forEach(function(c,i){ c.style.viewTransitionName='swc'+i; });
  function apply(f){
    var run=function(){
      cards.forEach(function(c){
        var tags=(c.getAttribute('data-f')||'').split(' ');
        c.classList.toggle('fhide', f!=='all' && tags.indexOf(f)<0);
      });
    };
    if(document.startViewTransition){ document.startViewTransition(run); } else { run(); }
  }
  btns.forEach(function(b){
    b.addEventListener('click',function(){
      btns.forEach(function(x){ x.classList.toggle('on',x===b); });
      seat();
      apply(b.getAttribute('data-f'));
    });
  });
})();` }} />

<Script id="script-home-28" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* hero load-in: masked line rise + staggered settle */
(function(){
  var hero=document.querySelector('.hero'); if(!hero) return;
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ hero.classList.add('hin'); }); });
})();` }} />


<Script id="script-home-29" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* rotating multilingual hello - layout-proof roller.
   Words live in a fixed-height slot, absolutely positioned, so no script's font
   metrics can ever change the line box (the old version let the Korean word's fallback
   font inflate the slot and shove the whole hero down every cycle).
   Both spans animate together via WAAPI - no setTimeout/CSS-transition race. */
(function(){
  var a=document.getElementById('heyW'); if(!a) return;
  var slot=a.parentElement;
  var WORDS=['hi','hello','hola','marhaba','namaste','bonjour','ciao','ol\\u00e1','\\uc548\\ub155'];
  var i=0, widths=[];
  function measure(){
    var m=document.createElement('span');
    m.style.cssText='position:absolute;visibility:hidden;white-space:nowrap;left:0;right:auto;bottom:auto;top:-9999px;';
    m.className='hey-w';
    slot.appendChild(m);
    widths=WORDS.map(function(t){ m.textContent=t; return m.offsetWidth; });
    slot.removeChild(m);
    slot.style.width=widths[i]+'px';
  }
  measure();
  slot.classList.add('ready');                 /* words go absolute only after width is locked */
  if(document.fonts && document.fonts.ready){
    document.fonts.ready.then(measure);        /* re-measure once the real font is in */
  }
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var b=document.createElement('span');
  b.className='hey-w';
  b.style.transform='translateY(110%)'; b.style.opacity='0';
  slot.appendChild(b);
  var cur=a, D=560, EASE='cubic-bezier(.22,1,.36,1)';
  setInterval(function(){
    if(document.hidden) return;                /* never animate blind in a background tab */
    i=(i+1)%WORDS.length;
    var nxt=(cur===a)?b:a;
    nxt.textContent=WORDS[i];
    slot.style.width=widths[i]+'px';           /* width glides, comma follows softly */
    cur.animate(
      [{transform:'translateY(0)',opacity:1},{transform:'translateY(-110%)',opacity:0}],
      {duration:D,easing:EASE,fill:'forwards'});
    nxt.animate(
      [{transform:'translateY(110%)',opacity:0},{transform:'translateY(0)',opacity:1}],
      {duration:D,easing:EASE,fill:'forwards'});
    cur=nxt;
  },1300);
})();` }} />
<Script id="script-home-30" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* "book a call" — official Calendly popup, lazy-loaded on hover/click.
   If the widget fails to load, the href opens the Calendly page in a new tab. */
(function(){
  var links=[].slice.call(document.querySelectorAll('#bookCall,.cal-pop'));
  if(!links.length) return;
  var URL='https://calendly.com/dineshkatal-work/book-1-1-session?hide_gdpr_banner=1&primary_color=2f6cb8';
  var loading=false;
  function load(cb){
    if(window.Calendly){ cb&&cb(); return; }
    if(loading) return;
    loading=true;
    var l=document.createElement('link'); l.rel='stylesheet';
    l.href='https://assets.calendly.com/assets/external/widget.css'; document.head.appendChild(l);
    var s=document.createElement('script'); s.src='https://assets.calendly.com/assets/external/widget.js';
    if(cb) s.onload=cb;
    document.head.appendChild(s);
  }
  links.forEach(function(b){
    b.addEventListener('mouseenter',function(){ load(null); },{once:true});
    b.addEventListener('click',function(e){
      if(window.Calendly){ e.preventDefault(); Calendly.initPopupWidget({url:URL}); }
      else if(!navigator.onLine){ /* let href open in new tab */ }
      else { e.preventDefault(); load(function(){ Calendly.initPopupWidget({url:URL}); });
             setTimeout(function(){ if(!window.Calendly) window.open(b.href,'_blank'); },2500); }
    });
  });
})();` }} />
<Script id="script-home-31" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* "let's talk" hover heart, same spirit as the about page mail letter */
(function(){
  var btn=document.querySelector('.hero .ink-btn.primary'); if(!btn) return;
  var h=document.createElement('span'); h.className='talk-heart'; h.innerHTML='<i>&#128140;</i>';
  document.body.appendChild(h);
  btn.addEventListener('mouseenter',function(){ h.classList.add('on'); });
  btn.addEventListener('mouseleave',function(){ h.classList.remove('on'); });
  btn.addEventListener('mousemove',function(e){
    h.style.left=e.clientX+'px'; h.style.top=e.clientY+'px';
  });
})();` }} /><span className="talk-heart"><i>💌</i></span>


<Script id="script-home-32" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var btn=document.querySelector('.calfun'); if(!btn) return;
  var cup=document.createElement('span'); cup.className='cal-cup';
  cup.innerHTML='<span class="s">~</span><span class="s s2">~</span><span class="s s3">~</span><span class="c">&#9749;</span>';
  document.body.appendChild(cup);
  btn.addEventListener('mouseenter',function(){ cup.classList.add('on'); });
  btn.addEventListener('mouseleave',function(){ cup.classList.remove('on'); });
  btn.addEventListener('mousemove',function(e){
    cup.style.left=e.clientX+'px'; cup.style.top=e.clientY+'px';
  });
})();` }} /><span className="cal-cup"><span className="s">~</span><span className="s s2">~</span><span className="s s3">~</span><span className="c">☕</span></span>


<div id="gachat"><button className="gachat-launch" type="button" aria-label="Ask about Dinesh"><span className="dot"></span><b>ask about dinesh</b></button><div className="gachat-panel" role="dialog" aria-label="Chat about Dinesh" aria-modal="false"><div className="gachat-head"><div className="gachat-av"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 6l2.4 5.4L12 18l-2.4-6.6z" fill="#fff" stroke="none"></path></svg></div><div className="gc-htxt"><div className="ttl">ask about <span className="a">dinesh</span></div><div className="sub"><span className="live"></span>online · replies instantly</div></div><button className="gachat-iconbtn gc-voice" type="button" aria-pressed="false" aria-label="Voice mode — read replies aloud" title="Voice mode (read replies aloud)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"></path><path d="M19 5a9 9 0 0 1 0 14"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path></svg></button><button className="gachat-iconbtn gc-reset" type="button" aria-label="Clear conversation" title="Clear"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"></path><path d="M3 3v5h5"></path></svg></button><button className="gachat-iconbtn gc-close" type="button" aria-label="Close chat" title="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"></path></svg></button></div><div className="gachat-log" aria-live="polite"></div><form className="gachat-form"><div className="gachat-inwrap"><textarea rows={1} placeholder="ask me something…" aria-label="Your message" maxLength={600}></textarea></div><button className="gachat-mic" type="button" aria-label="Speak your question" title="Tap to speak"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="11" rx="3"></rect><path d="M5 10a7 7 0 0 0 14 0"></path><path d="M12 17v4"></path><path d="M8 21h8"></path></svg></button><button className="gachat-send" type="submit" aria-label="Send" disabled><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg></button></form><div className="gachat-foot">grounded in dinesh’s real work · portfolio assistant</div></div></div><section className="ground" id="ground">
  <div className="ground-contact">
    <div className="gf-top">
      <div className="gf-cta">
        <div className="ground-kick">contact</div>
        <h2 className="ground-ttl">let's build <em>something that matters.</em></h2>
        <a className="ground-mail" href="mailto:dineshkatal.work@gmail.com">dineshkatal.work@gmail.com <span className="arw"><i>→</i><i>→</i></span></a>
        <p className="ground-sub">care about <b>design</b>, <b>impact</b>, and products that actually ship? you know where to find me.</p>
      </div>
      <nav className="gf-cols" aria-label="footer">
        <div className="gf-col"><span className="gf-h">explore</span><a href="/work">work</a><a href="/beyond">lil about me</a><a href="/now">now</a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé ↓</a></div>
        <div className="gf-col"><span className="gf-h">connect</span><a className="cal-pop calfun" href="https://calendly.com/dineshkatal-work/book-1-1-session" target="_blank" rel="noopener">schedule a call ↗</a><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin ↗</a><a href="https://github.com/Dinesh-codeswell" target="_blank" rel="noopener">github ↗</a><a href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener">topmate ↗</a><a href="https://medium.com/@dineshkatal" target="_blank" rel="noopener">medium ↗</a><button type="button" className="gf-copy" data-copy-email="dineshkatal.work@gmail.com" title="Click to copy email">email <span className="gf-copied" aria-hidden="true">copied ✓</span></button></div>
        <div className="gf-col"><span className="gf-h">status</span><span className="gf-avail"><i></i> open to new work</span><span className="gf-line">based in Gurugram, India</span><span className="gf-line">local time · IST <b id="gfClock">—</b></span></div>
      </nav>
    </div>
    <div className="gf-bar">
      <a className="gf-mark" href="/"><svg viewBox="0 0 30 26" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"></path><line x1="15" y1="7" x2="15" y2="4.2"></line><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"></line><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"></line><line x1="2.5" y1="18" x2="27.5" y2="18"></line></svg>dinesh.</a>
      <div className="gf-meta"><span>© 2026 dinesh kumar katal</span><span>designed &amp; built by me, and a few too many coffees · switzer + react</span></div>
    </div>
  </div>
</section>
<style dangerouslySetInnerHTML={{ __html: `:root{
    --ink:#16202b; --soft:#4E5F74; --accent:#16202b;
    --font-display:"Satoshi","Switzer",system-ui,sans-serif; --font-text:"Satoshi","Switzer",system-ui,sans-serif; --font-mono:"Geist Mono",monospace; --font-accent:"Satoshi","Switzer",sans-serif;
    /* consistent vertical rhythm + type scale (air.inc-style: one section pad, a tight scale) */
    --sp-section:clamp(64px,10vh,118px);
    --ease:cubic-bezier(.22,1,.36,1); /* air.inc's signature ease-out */
    --fs-giant:clamp(46px,8.4vw,104px); --fs-h1:clamp(32px,4.4vw,60px); --fs-h2:clamp(30px,3.8vw,52px); --fs-h3:clamp(22px,2.4vw,30px); --fs-h4:clamp(19px,1.9vw,24px);
    --green:#0083E7;   /* deep pine — italic headline accent */
    --edge:max(22px,8%);
    /* sky — retinted by the time-of-day script (day palette default) */
    --sky1:#2f6cb8; --sky2:#5a93cf; --sky3:#8cbce9; --sky4:#b9dcf4;
    --sun-core:#fff3c4; --sun-mid:#ffd95b;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html{height:auto;}
  body{min-height:100dvh;font-family:var(--font-text);-webkit-font-smoothing:antialiased;overflow-x:clip;color:var(--ink);}
  a{color:inherit;text-decoration:none;}

  /* ─────────────────────────── STAGE (your original sky) ─────────────────────────── */
  .stage{position:relative;width:100%;min-height:100svh;overflow:hidden;
    background:linear-gradient(180deg,var(--sky1) 0%,var(--sky2) 40%,var(--sky3) 64%, transparent 96%);
    transition:background 1.2s ease;}
  /* the hero's bottom goes transparent so the SAME fixed cloud sky shows through and continues
     seamlessly into the sections below — no hard horizon line at any time of day */
  .stage::after{content:"";position:absolute;left:0;right:0;bottom:0;height:38%;z-index:5;pointer-events:none;
    background:linear-gradient(to bottom, rgba(201,227,241,0) 0%, rgba(201,227,241,.28) 55%, rgba(201,227,241,0) 100%);
    transition:background 1.2s ease;}
  body.nightsky .stage::after{background:linear-gradient(to bottom, rgba(43,58,85,0) 0%, rgba(43,58,85,.32) 55%, rgba(43,58,85,0) 100%);}

  .sky{position:absolute;inset:0;z-index:0;pointer-events:none;}
  .i-sunwrap{position:absolute;top:12%;right:15%;width:140px;height:140px;will-change:transform;}
  .i-sun{position:absolute;inset:0;border-radius:50%;
    background:radial-gradient(circle,var(--sun-core) 0%,var(--sun-mid) 52%,rgba(251,194,59,0) 72%);
    animation:sunFloat 4.5s ease-in-out infinite alternate;}
  @keyframes sunFloat{from{transform:translateY(6px)}to{transform:translateY(-12px)}}
  .i-glow{position:absolute;left:50%;top:50%;width:440px;height:440px;transform:translate(-50%,-50%);
    border-radius:50%;background:radial-gradient(circle,rgba(255,224,130,.5) 0%,rgba(255,224,130,0) 62%);
    animation:glowPulse 4s ease-in-out infinite alternate;}
  @keyframes glowPulse{from{opacity:.5;transform:translate(-50%,-50%) scale(1)}to{opacity:.8;transform:translate(-50%,-50%) scale(1.18)}}
  .i-rays{position:absolute;left:50%;top:50%;width:520px;height:520px;transform:translate(-50%,-50%);
    background:
      radial-gradient(42% 48% at 44% 40%, rgba(255,236,172,.30) 0%, rgba(255,236,172,0) 70%),
      radial-gradient(54% 40% at 60% 58%, rgba(255,212,138,.22) 0%, rgba(255,212,138,0) 72%),
      radial-gradient(46% 54% at 52% 58%, rgba(255,244,205,.26) 0%, rgba(255,244,205,0) 74%);
    filter:blur(22px);mix-blend-mode:soft-light;
    -webkit-mask-image:radial-gradient(circle,#000 8%,transparent 72%);mask-image:radial-gradient(circle,#000 8%,transparent 72%);
    animation:raysSpin 90s linear infinite;}
  @keyframes raysSpin{to{transform:translate(-50%,-50%) rotate(360deg)}}

  /* parallax wrappers hold the clouds; drift lives on .i-cloud so the two transforms don't clash */
  .i-pl{position:absolute;inset:0;pointer-events:none;will-change:transform;}
  .i-cloud{position:absolute;background:#fff;border-radius:50%;filter:blur(11px);opacity:.92;}
  .i-cloud::before,.i-cloud::after{content:"";position:absolute;background:#fff;border-radius:50%;}
  .i-cloud.c1{width:210px;height:62px;top:13%;left:0;animation:drift1 64s linear infinite;}
  .i-cloud.c1::before{width:120px;height:120px;left:30px;top:-46px;}
  .i-cloud.c1::after{width:80px;height:80px;left:120px;top:-22px;}
  .i-cloud.c2{width:330px;height:92px;top:26%;left:0;opacity:.85;animation:drift2 92s linear infinite;}
  .i-cloud.c2::before{width:160px;height:150px;left:60px;top:-66px;}
  .i-cloud.c2::after{width:110px;height:110px;left:190px;top:-34px;}
  .i-cloud.c3{width:150px;height:46px;top:9%;left:0;opacity:.7;animation:drift3 74s linear infinite;}
  .i-cloud.c3::before{width:84px;height:84px;left:24px;top:-32px;}
  .i-cloud.c4{width:260px;height:74px;top:40%;left:0;opacity:.55;animation:drift4 104s linear infinite;}
  .i-cloud.c4::before{width:140px;height:130px;left:50px;top:-54px;}
  .i-cloud.c4::after{width:96px;height:96px;left:165px;top:-28px;}
  @keyframes drift1{from{transform:translateX(-25vw)}to{transform:translateX(125vw)}}
  @keyframes drift2{from{transform:translateX(-45vw)}to{transform:translateX(130vw)}}
  @keyframes drift3{from{transform:translateX(-20vw)}to{transform:translateX(122vw)}}
  @keyframes drift4{from{transform:translateX(-40vw)}to{transform:translateX(128vw)}}

  /* ─── night: sun → pale cratered moon, no rays ─── */
  body.nightsky .i-rays{display:none;}
  /* night clouds are dark blue-grey, not glowing white — realistic AND keeps light hero text legible (white clouds dropped contrast to ~1:1) */
  body.nightsky .i-cloud,
  body.nightsky .i-cloud::before,
  body.nightsky .i-cloud::after{background:#5d6f92;}
  body.nightsky .i-cloud{opacity:.38;}
  body.nightsky .i-glow{background:radial-gradient(circle,rgba(200,214,255,.32) 0%,rgba(200,214,255,0) 62%);}
  body.nightsky .i-sun{
    background:
      radial-gradient(circle at 36% 34%, rgba(40,52,80,.20) 0 4.5%, transparent 5.5%),
      radial-gradient(circle at 63% 58%, rgba(40,52,80,.16) 0 6%, transparent 7%),
      radial-gradient(circle at 48% 72%, rgba(40,52,80,.13) 0 3.5%, transparent 4.5%),
      radial-gradient(circle, #f6f7ff 0%, #dfe4f4 58%, rgba(223,228,244,0) 73%);
    box-shadow:0 0 34px 6px rgba(196,210,255,.34);}

  /* ─────────── ambient sky life: bees (day) → fireflies (night) — from journey.html ─────────── */
  .bees{position:absolute;inset:0;z-index:5;pointer-events:none;overflow:hidden;}
  .bee{position:absolute;left:0;top:0;width:62px;will-change:transform;pointer-events:auto;cursor:pointer;}
  .bee-art{position:relative;display:block;width:100%;will-change:transform;}
  .bee-body{width:100%;height:auto;display:block;filter:drop-shadow(0 4px 6px rgba(20,18,16,.16));}
  .bee-wing{position:absolute;left:0;top:0;width:100%;height:auto;animation:beeFan .12s ease-in-out infinite alternate;}
  @keyframes beeFan{from{transform:scaleY(.8) rotate(-4deg)}to{transform:scaleY(1.04) rotate(4deg)}}
  .bee-fly{position:absolute;left:27px;top:27px;width:9px;height:9px;border-radius:50%;display:none;
    background:radial-gradient(circle,#fffbdc 0%,#ffe07a 38%,rgba(255,210,90,0) 72%);
    box-shadow:0 0 14px 5px rgba(255,214,110,.6);animation:fireflyPulse 2.6s ease-in-out infinite;}
  @keyframes fireflyPulse{0%,100%{opacity:.3;transform:scale(.65)}50%{opacity:1;transform:scale(1.12)}}
  .bees.night .bee-body,.bees.night .bee-wing{display:none;}
  .bees.night .bee-fly{display:block;}
  /* ── interactive case-study bees: hotspot dot + connector line + bare no-box label ── */
  .bee{color:#16202b;}                                   /* drives label + line color */
  .bee::before{content:"";position:absolute;left:50%;top:50%;width:66px;height:66px;transform:translate(-50%,-50%);}  /* bigger hover/click target */
  .bee-hint{position:absolute;left:50%;top:50%;width:28px;height:28px;transform:translate(-50%,-50%);border-radius:50%;border:1.5px solid rgba(255,255,255,.7);opacity:0;animation:beeHint 3.6s ease-in-out infinite;pointer-events:none;}
  @keyframes beeHint{0%,100%{opacity:0;transform:translate(-50%,-50%) scale(.5)}50%{opacity:.5;transform:translate(-50%,-50%) scale(1)}}
  .bee:hover .bee-hint{opacity:0;animation:none;}
  /* floating metric whisper — bare number, no box */
  .bee-tag{position:absolute;left:50%;top:-19px;transform:translateX(-50%) translateY(5px);white-space:nowrap;
    font-family:var(--font-mono);font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:inherit;
    opacity:0;transition:opacity .55s ease,transform .55s ease;pointer-events:none;}
  .bee.show-tag .bee-tag{opacity:.92;transform:translateX(-50%) translateY(0);}
  .bee:hover .bee-tag{opacity:0;}
  /* connector line grows out to the side */
  .bee-line{position:absolute;left:100%;top:50%;height:1px;width:0;background:currentColor;opacity:.65;transform:translateY(-50%);transition:width .4s cubic-bezier(.22,1,.36,1);pointer-events:none;}
  .bee.flip .bee-line{left:auto;right:100%;}
  .bee:hover .bee-line,.bee:focus-visible .bee-line,.bee.open .bee-line{width:18px;}
  /* bare label, no container */
  .bee-lbl{position:absolute;left:100%;top:50%;width:212px;text-align:left;color:inherit;
    transform:translateY(-50%) translateX(8px);opacity:0;pointer-events:none;
    transition:opacity .35s ease,transform .4s cubic-bezier(.22,1,.36,1);}
  .bee.flip .bee-lbl{left:auto;right:100%;text-align:right;transform:translateY(-50%) translateX(-8px);}
  .bee:hover .bee-lbl,.bee:focus-visible .bee-lbl,.bee.open .bee-lbl{opacity:1;transform:translateY(-50%) translateX(30px);}
  .bee.flip:hover .bee-lbl,.bee.flip:focus-visible .bee-lbl,.bee.flip.open .bee-lbl{transform:translateY(-50%) translateX(-30px);}
  .bl-k{display:block;font-family:var(--font-mono);font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.7;}
  .bl-p{display:block;font-family:var(--font-text);font-size:14px;line-height:1.3;margin-top:3px;}
  .bl-t{display:block;font-family:var(--font-display);font-style:italic;font-size:15.5px;line-height:1.2;opacity:.92;margin-top:5px;}
  .bl-r{display:inline-block;font-family:var(--font-mono);font-size:10px;letter-spacing:.04em;text-transform:lowercase;margin-top:9px;border-bottom:1px solid currentColor;padding-bottom:2px;opacity:.95;}
  /* adaptive: dark text on warm dawn/golden, light text + shadow on day & night */
  body.litcopy .bee{color:#f4f7fc;}
  body.litcopy .bee-lbl,body.litcopy .bee-tag{}
  @media(prefers-reduced-motion:reduce){.bee-wing,.bee-hint{animation:none;}}
  @media(max-width:720px){.bee-lbl,.bee-line{display:none;}}

  /* ─────────────────────────── GREEN MEADOW BAND (your image, replaces the SVG hills) ─────────────────────────── */
  .meadow{position:absolute;left:-2%;right:auto;bottom:-2%;width:115%;z-index:2;pointer-events:none;will-change:transform;}
  .meadow picture{display:block;} .meadow img{display:block;width:100%;height:auto;
    -webkit-mask-image:linear-gradient(to bottom,#000 78%,transparent 100%);mask-image:linear-gradient(to bottom,#000 78%,transparent 100%);}

  /* ─────────────────────────── NAV ─────────────────────────── */
  .nav{position:relative;z-index:96;display:flex;align-items:center;justify-content:space-between;padding:24px var(--edge) 0;gap:16px;}
  .brand{font-family:var(--font-display);font-weight:700;font-size:24px;color:#fff;}
  .brand{display:inline-flex;align-items:center;}
  .brand .a{color:inherit;}
  .brand-mark{flex:0 0 auto;width:1.02em;height:.9em;margin-right:9px;color:#fff;overflow:visible;filter:drop-shadow(0 1px 8px rgba(8,22,48,.4));}
  .brand-mark .sun{color:#FFC93C;transform-origin:15px 18px;animation:sunRise 3s ease-in-out infinite;}
  @keyframes sunRise{0%{transform:translateY(3.5px);opacity:.78}50%{transform:translateY(-3px);opacity:1}100%{transform:translateY(3.5px);opacity:.78}}
  @media(prefers-reduced-motion:reduce){.brand-mark .sun{animation:none;}}
  /* ── NAV as a full-screen cloud-sky overlay (matches the site-wide menu) ── */
  .snav{position:fixed;inset:0;left:0;right:0;top:0;bottom:0;transform:none;z-index:97;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:0 24px;
    border:0;border-radius:0;box-shadow:none;
    background:linear-gradient(180deg,#2f6cb8 0%,#4b83c6 42%,#5f97d2 74%,#79aadd 100%);
    opacity:0;visibility:hidden;pointer-events:none;overflow:hidden;
    transition:opacity .38s ease,visibility .38s ease;}
  body.nav-open .snav{opacity:1;visibility:visible;pointer-events:auto;}
  .snav::before,.snav::after{content:"";position:absolute;border-radius:50%;pointer-events:none;z-index:0;filter:blur(34px);will-change:transform;}
  .snav::before{width:56vmax;height:56vmax;left:-16vmax;top:-16vmax;background:radial-gradient(closest-side,rgba(255,255,255,.82),rgba(255,255,255,0) 70%);animation:hpCloudA 20s ease-in-out infinite;}
  .snav::after{width:48vmax;height:48vmax;right:-14vmax;bottom:-6vmax;background:radial-gradient(closest-side,rgba(255,255,255,.66),rgba(255,255,255,0) 70%);animation:hpCloudB 24s ease-in-out infinite;}
  @keyframes hpCloudA{0%,100%{transform:translate(0,0)}50%{transform:translate(5vw,3vh)}}
  @keyframes hpCloudB{0%,100%{transform:translate(0,0)}50%{transform:translate(-5vw,2vh)}}
  .snav a{position:relative;z-index:2;font-family:"Satoshi","Switzer","Geist",system-ui,sans-serif;font-weight:500;font-size:clamp(34px,6.4vw,62px);line-height:1.12;letter-spacing:-.01em;
    text-transform:lowercase;text-align:center;color:#fff;padding:4px 16px;text-shadow:0 1px 16px rgba(18,38,66,.22);
    opacity:0;transform:translateY(16px);transition:opacity .5s cubic-bezier(.16,1,.3,1),transform .5s cubic-bezier(.16,1,.3,1),color .2s;}
  .snav a::after{display:none;}
  .snav .hideSm{display:block;}
  body.nav-open .snav a{opacity:1;transform:none;}
  .snav a:hover{color:#fff;opacity:.64;}
  .snav a .exti{font-size:.4em;opacity:.6;vertical-align:.3em;}
  body.nav-open .snav a:nth-child(1){transition-delay:.05s;} body.nav-open .snav a:nth-child(2){transition-delay:.09s;}
  body.nav-open .snav a:nth-child(3){transition-delay:.13s;} body.nav-open .snav a:nth-child(4){transition-delay:.17s;}
  body.nav-open .snav a:nth-child(5){transition-delay:.21s;} body.nav-open .snav a:nth-child(6){transition-delay:.25s;}
  body.nav-open .snav a:nth-child(7){transition-delay:.29s;} body.nav-open .snav a:nth-child(8){transition-delay:.33s;}
  .snav a.cta{display:inline-flex;align-items:center;gap:9px;margin-top:26px;text-shadow:none;
    font-family:var(--font-mono);font-weight:400;font-size:13px;letter-spacing:.04em;text-transform:lowercase;line-height:1;
    background:#fff;color:#16202b;border:1px solid #fff;border-radius:9px;padding:14px 22px;}
  .snav a.cta:hover{opacity:1;background:#eef1f6;color:#16202b;border-color:#eef1f6;transform:none;}
  .snav a.cta-ghost{margin-top:10px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,.62);}
  .snav a.cta-ghost:hover{background:#fff;border-color:#fff;color:#16202b;}
  .snav a.cta .arw{display:inline-block;transition:transform .3s cubic-bezier(.22,1,.36,1);}
  .snav a.cta:hover .arw{transform:translateX(4px);}
  /* trigger: a glassy "menu" pill, fixed top-right, on every width */
  .navtoggle{display:inline-flex;flex-direction:row;align-items:center;justify-content:center;gap:10px;
    position:fixed;top:18px;right:max(16px,4vw);z-index:98;width:auto;height:auto;padding:10px 17px;cursor:pointer;
    font-family:var(--font-mono);font-size:12px;letter-spacing:.14em;text-transform:lowercase;color:#16202b;
    background:linear-gradient(180deg,rgba(255,255,255,.72),rgba(255,255,255,.5));-webkit-backdrop-filter:blur(14px) saturate(1.5);backdrop-filter:blur(14px) saturate(1.5);
    border:1px solid rgba(255,255,255,.6);border-radius:999px;box-shadow:inset 0 1px 1px rgba(255,255,255,.85),0 8px 22px -12px rgba(8,22,48,.32);-webkit-tap-highlight-color:transparent;}
  .navtoggle .tg-ico{display:inline-flex;flex-direction:column;justify-content:center;gap:4px;width:16px;height:11px;}
  .navtoggle .tg-ico span{display:block;width:16px;height:1.7px;border-radius:2px;background:#16202b;transition:transform .3s ease,opacity .3s ease;}
  body.nav-open .navtoggle .tg-ico span:first-child{transform:translateY(2.85px) rotate(45deg);}
  body.nav-open .navtoggle .tg-ico span:last-child{transform:translateY(-2.85px) rotate(-45deg);}

  /* ─────────────────────────── HERO (live type scale) ─────────────────────────── */
  .hero{position:absolute;z-index:6;left:var(--edge);top:21%;max-width:780px;}
  .eyebrow{font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:var(--soft);margin-bottom:14px;}
  .hl{font-family:var(--font-display);font-weight:500;letter-spacing:-.02em;text-transform:lowercase;font-size:var(--fs-h1);line-height:1.05;color:var(--ink);}
  .hl .a{color:inherit;}
  .hl .ln.l2{font-style:italic;color:inherit;}     /* "then ship the code." — same ink as headline, italic (air.inc-style) */
  .hl .ln{display:block;overflow:hidden;white-space:nowrap;padding-bottom:.06em;margin-bottom:-.06em;}
  .hl .ln > span{display:inline-block;will-change:transform;transform:translateY(114%);
    transition:transform 1.05s cubic-bezier(.22,1,.36,1);}
  .hl .ln.l2 > span{transition-delay:.12s;}
  .hero .eyebrow{opacity:0;transform:translateY(8px);letter-spacing:.3em;
    transition:opacity .8s ease,transform .8s cubic-bezier(.22,1,.36,1),letter-spacing 1.3s cubic-bezier(.22,1,.36,1);}
  .hero .lede,.hero .proof,.hero .cta-row{opacity:0;transform:translateY(14px);
    transition:opacity .8s ease,transform .9s cubic-bezier(.22,1,.36,1);}
  .hero .lede{transition-delay:.34s;} .hero .proof{transition-delay:.46s;} .hero .cta-row{transition-delay:.58s;}
  .cred{margin-top:20px;display:flex;flex-direction:column;gap:7px;}
  .cred-co{font-family:var(--font-mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink);font-weight:500;}
  .cred-st{font-family:var(--font-mono);font-size:11px;letter-spacing:.05em;text-transform:lowercase;color:var(--soft);}
  .cred-st b{color:var(--ink);font-weight:600;}
  body.nightsky .cred-co,body.litcopy .cred-co{color:#fff;}
  body.nightsky .cred-st,body.litcopy .cred-st{color:#d4dbe7;}
  .hey{font-family:var(--font-display);font-weight:500;text-transform:lowercase;letter-spacing:-.01em;
    font-size:clamp(18px,2vw,25px);line-height:1.4;color:#fff;margin-bottom:12px;}
  /* the slot is a fixed 1.4em-tall window; the words inside are position:absolute once JS
     adds .ready, so no word - whatever its script or fallback font metrics - can ever
     change the line box and shift the layout around it. width tweens per word. */
  .hey-slot{display:inline-block;position:relative;overflow:hidden;vertical-align:bottom;
    white-space:nowrap;text-align:right;height:1.4em;
    transition:width .55s cubic-bezier(.22,1,.36,1);}
  .hey-w{display:inline-block;color:#fff;font-weight:600;white-space:nowrap;line-height:1.4;}
  .hey-slot.ready .hey-w{position:absolute;right:0;bottom:0;will-change:transform;}
  .hero .hey{opacity:0;transform:translateY(10px);transition:opacity .7s ease,transform .8s cubic-bezier(.22,1,.36,1);}
  .hero.hin .hey{opacity:1;transform:none;}
  @media(prefers-reduced-motion:reduce){.hey-w,.hey-slot{transition:none!important;transform:none!important;opacity:1!important;animation:none!important;}}
  .hero .cred{opacity:0;transform:translateY(14px);transition:opacity .8s ease .46s,transform .9s cubic-bezier(.22,1,.36,1) .46s;}
  .hero.hin .cred{opacity:1;transform:none;}
  @media(prefers-reduced-motion:reduce){.hero .cred{opacity:1!important;transform:none!important;}}
  .hero.hin .hl .ln > span{transform:none;}
  .hero.hin .eyebrow{opacity:1;transform:none;letter-spacing:.16em;}
  .hero.hin .lede,.hero.hin .proof,.hero.hin .cta-row{opacity:1;transform:none;}
  @media(prefers-reduced-motion:reduce){
    .hl .ln > span,.hero .eyebrow,.hero .lede,.hero .proof,.hero .cta-row{opacity:1!important;transform:none!important;transition:none!important;letter-spacing:.16em;}
  }
  .lede{font-family:var(--font-text);font-weight:400;font-size:16px;line-height:1.6;color:var(--soft);margin-top:20px;max-width:520px;}
  .proof{font-family:var(--font-mono);font-weight:500;font-size:11.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--soft);margin-top:18px;}
  .cta-row{display:flex;gap:14px;margin-top:30px;flex-wrap:wrap;}
  /* ── .ink-btn: air.inc-style — flat, 8px radius, thin border, fills on hover ── */
  .ink-btn{position:relative;display:inline-flex;align-items:center;gap:9px;
    font-family:var(--font-mono);font-size:13px;letter-spacing:.04em;text-transform:lowercase;text-decoration:none;line-height:1;
    padding:14px 22px;border:1px solid currentColor;color:var(--ink);background:transparent;cursor:pointer;
    border-radius:8px;
    transition:background-color .25s ease,color .25s ease,border-color .25s ease,transform 1s cubic-bezier(.22,1,.36,1);-webkit-tap-highlight-color:transparent;}
  .ink-btn .lbl{display:inline-flex;align-items:center;gap:9px;}
  .ink-btn .arw{display:inline-block;transition:transform .3s cubic-bezier(.22,1,.36,1);}
  .ink-btn:hover .arw{transform:translateX(4px);}
  .ink-btn .ink{display:none;}
  .ink-btn:hover{background:#fff;color:#16202b;border-color:#fff;}
  .ink-btn:focus-visible{outline:2px solid #fff;outline-offset:3px;}
  /* primary = solid white fill, ink text (air primary) */
  .ink-btn.primary{background:#fff;color:#16202b;border:1px solid #fff;border-radius:8px;}
  .ink-btn.primary .lbl,.ink-btn.primary .lbl *{color:#16202b;}
  .ink-btn.primary:hover{background:#eef1f6;border-color:#eef1f6;color:#16202b;}

  /* night text legibility */
  body.nightsky .hl{color:#EDF1E6;} body.nightsky .hl .a{color:#f4f7fc;}
  body.nightsky .hl .ln.l2{color:#f4f7fc;}   /* brighter terracotta so it stays legible on the night sky */
  body.nightsky .eyebrow,body.nightsky .lede,body.nightsky .proof{color:#d4dbe7;}
  /* day(blue) + night skies: switch hero copy to light so it stays readable (warm dawn/golden keep dark copy) */
  body.litcopy .hl{color:#f4f7fc;}
  body.litcopy .hl .a,body.litcopy .hl .ln.l2{color:#f4f7fc;}
  body.litcopy .eyebrow,body.litcopy .lede,body.litcopy .proof{color:#e6edf7;}
  body.litcopy .ink-btn{color:#f4f7fc;}
  body.nightsky .brand{color:#EDF1E6;} body.nightsky .brand .a{color:#f4f7fc;}
  body.nightsky .snav a{color:var(--ink);}
  body.nightsky .snav{background:linear-gradient(180deg,rgba(255,255,255,.62),rgba(255,255,255,.44));}
  body.nightsky .ink-btn{color:#EDF1E6;}
  /* hover must win over the litcopy/nightsky light text so the white-filled button shows dark ink (air-style) */
  body.litcopy .ink-btn:hover,body.nightsky .ink-btn:hover{color:#16202b;}
  body.litcopy .ink-btn.primary,body.nightsky .ink-btn.primary{color:#16202b;}
  /* night: keep the glass pills but lift the frosting so they stay visible on the dark sky */
  /* nav cta + contact button use the solid air button across all skies */
  /* adaptive glass text: dark on bright/day & dawn, white on golden & night */

  /* ─────────────────────────── time-of-day switcher + ask pill ─────────────────────────── */
  .scene-switch{position:absolute;left:var(--edge);bottom:26px;z-index:7;display:flex;align-items:center;gap:15px;
    padding:8px 16px 8px 18px;
    background:linear-gradient(180deg,rgba(253,251,247,.74),rgba(244,241,234,.6));
    backdrop-filter:blur(18px) saturate(150%);-webkit-backdrop-filter:blur(18px) saturate(150%);
    border:1px solid rgba(255,255,255,.55);border-radius:999px;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.65),0 16px 40px -20px rgba(18,22,28,.55);}
  .ss-lbl{font-family:var(--font-mono);font-size:9.5px;text-transform:uppercase;letter-spacing:.15em;color:#5a564e;white-space:nowrap;}
  .ss-lbl b{color:#2c2a26;font-weight:600;}
  .ss-slide{display:flex;align-items:center;gap:12px;padding-left:13px;border-left:1px solid rgba(34,39,30,.12);}
  #ssRange{-webkit-appearance:none;appearance:none;width:120px;height:4px;border-radius:999px;
    background:linear-gradient(90deg,#f4c79b,#93c6e8,#f0a96b,#2b3a55);outline:none;cursor:pointer;}
  #ssRange::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid var(--accent);cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.25);}
  #ssRange::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid var(--accent);cursor:pointer;}
  .ss-auto{font-family:var(--font-mono);font-size:9.5px;text-transform:uppercase;letter-spacing:.1em;color:#5a564e;background:rgba(255,255,255,.5);border:1px solid rgba(34,39,30,.14);border-radius:999px;padding:5px 11px;cursor:pointer;transition:background .2s,color .2s;}
  .ss-auto.on{background:var(--accent);color:#fdf3ea;border-color:var(--accent);}

  .ask-pill{position:fixed;right:max(16px,4vw);bottom:15px;z-index:60;display:inline-flex;align-items:center;gap:10px;cursor:pointer;
    padding:10px 17px;border-radius:999px;border:1px solid rgba(255,255,255,.6);color:#16202b;
    background:linear-gradient(180deg,rgba(255,255,255,.62),rgba(255,255,255,.44));
    backdrop-filter:blur(16px) saturate(1.5);-webkit-backdrop-filter:blur(16px) saturate(1.5);
    box-shadow:inset 0 1px 1px rgba(255,255,255,.85),0 14px 36px -16px rgba(18,22,28,.55);transition:transform .2s,box-shadow .2s,gap .3s cubic-bezier(.22,1,.36,1);}
  .ask-pill:hover{transform:translateY(-2px);gap:8px;box-shadow:inset 0 1px 1px rgba(255,255,255,.85),0 18px 42px -18px rgba(18,22,28,.6);}
  .ask-pill .spark{display:flex;width:15px;height:15px;color:#2f6cb8;animation:askTwinkle 3s ease-in-out infinite;}
  @keyframes askTwinkle{0%,100%{opacity:.7;transform:scale(.9) rotate(0)}50%{opacity:1;transform:scale(1.08) rotate(22deg)}}
  .ask-pill .ai-label{font-family:var(--font-mono);font-size:12px;letter-spacing:.04em;white-space:nowrap;max-width:120px;opacity:1;overflow:hidden;transition:max-width .35s cubic-bezier(.22,1,.36,1),opacity .25s;}
  .ask-pill:hover .ai-label{max-width:120px;opacity:1;}
  @media(prefers-reduced-motion:reduce){.ask-pill .spark{animation:none;}}

  /* ─────────────────── below-fold sample strip ─────────────────── */
  .below{padding:clamp(48px,8vh,96px) var(--edge);background:#faf6f0;}
  .below .kick{font-family:var(--font-mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--soft);}
  .below .kick::before{content:"· ";}
  .below h2{font-family:var(--font-display);font-weight:900;letter-spacing:-.03em;text-transform:lowercase;font-size:var(--fs-h2);line-height:1;color:var(--ink);margin-top:10px;max-width:620px;}
  .below h2 .a{color:inherit;}
  .logos{display:flex;flex-wrap:wrap;gap:14px 34px;align-items:center;margin-top:34px;font-family:var(--font-display);font-style:italic;font-size:18px;color:var(--soft);}
  .logos span{opacity:.85;transition:color .2s,opacity .2s;} .logos span:hover{color:var(--ink);opacity:1;}

  @media (max-width:720px){
    html,body{max-width:100%;overflow-x:clip;}
    *,*::before,*::after{min-width:0;}
    .nav{padding-top:16px;}
    /* smaller sun + glow so it reads as a corner accent, not a blob behind the headline */
    .i-sunwrap{width:82px;height:82px;top:8%;right:7%;}
    .i-glow{width:200px;height:200px;}
    .i-rays{width:240px;height:240px;}
    /* menu overlay on phones: smaller trigger + links (same overlay, not a dropdown) */
    .navtoggle{top:14px;right:14px;padding:9px 15px;font-size:11px;letter-spacing:.12em;}
    .snav a{font-size:clamp(27px,8.4vw,36px);}
    .snav a.cta{margin-top:16px;font-size:12px;padding:14px 30px;}
    .snav a.cta-ghost{margin-top:10px;}
    /* soften the clouds on phones so they read as faint wisps behind the copy, never bright blobs */
    .i-cloud{opacity:.42;filter:blur(16px);}
    .stage{overflow:hidden;}
    .hero{top:11%;left:max(28px,7vw);right:max(20px,5vw);width:auto;max-width:none;}
    .eyebrow{font-size:9.5px;letter-spacing:.08em;}      /* was overflowing the edge */
    .hl{font-size:clamp(30px,8.2vw,46px);line-height:1.02;}
    .hl,.eyebrow,.lede,.proof{max-width:100%;overflow-wrap:anywhere;}
    .hl .ln,.hl .ln>span{overflow:visible;white-space:normal;} /* allow the headline to wrap */
    .lede{font-size:15px;max-width:none;line-height:1.55;text-shadow:0 2px 18px rgba(20,62,110,.42),0 1px 2px rgba(20,62,110,.28);}
    .proof{font-size:10px;letter-spacing:.05em;line-height:1.6;}
    /* phone meadow: couple-focused crop, full width, flush to the bottom */
    .meadow{width:100%;left:0;right:0;bottom:0;transform:none;}
    .scene-switch{left:50%;transform:translateX(-50%);bottom:16px;}
    .ss-lbl{display:none;} .ss-slide{border-left:none;padding-left:0;}
    .ask-pill{display:none;}
  }
  @media (prefers-reduced-motion:reduce){
    .i-rays,.i-glow,.i-sun,.i-cloud{animation:none!important;}
  }` }} />
<style dangerouslySetInnerHTML={{ __html: `body{background:#FCFBF9;}
  .home-sections{position:relative;z-index:8;background:#FCFBF9;}
  .hs-wrap{max-width:1180px;margin:0 auto;padding:0 var(--edge);}
  .hs-kick{font-family:var(--font-mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);}
  .hs-h2{font-family:var(--font-display);font-weight:500;letter-spacing:-.025em;text-transform:lowercase;font-size:clamp(28px,4.2vw,54px);line-height:.96;color:var(--ink);margin-top:14px;}
  .hs-h2 .a{color:inherit;}
  .reveal{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1);}
  .reveal.in{opacity:1;transform:none;}
  .case-link{display:block;color:inherit;text-decoration:none;}

  /* ── selected work ── */
  .sw{padding:clamp(56px,8vh,104px) 0 clamp(36px,6vh,64px);}
  .sw-head{margin-bottom:38px;}
  .sw-all{display:inline-block;margin-top:18px;font-family:var(--font-mono);font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:var(--soft);transition:color .2s;}
  .sw-all:hover{color:inherit;}

  /* shared chips / tags / hover affordance */
  .sw-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:16px;}
  .sw-tags span{font-family:var(--font-mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--soft);border:1px solid rgba(42,37,32,.16);border-radius:30px;padding:5px 11px;}
  .sw-chip{font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink);border:1px solid rgba(20,30,45,.3);background:rgba(20,30,45,.07);border-radius:30px;padding:7px 13px;}
  .sw-chip b{color:var(--accent);font-weight:500;}
  .sw-go i{font-style:normal;transition:transform .3s cubic-bezier(.16,1,.3,1);}
  .case-link:hover .sw-go{opacity:1;transform:translateX(0);color:var(--accent);}
  .case-link:hover .sw-go i{transform:translateX(4px);}

  /* studio-shot cover: floating, tilted UI on a per-project brand tint */
  .shot-cover{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;background:var(--cc,#1d2b3a);}
  .shot{width:72%;border-radius:10px;background:#fff;overflow:hidden;box-shadow:0 20px 38px -18px rgba(0,0,0,.55);
    transform:rotate(-3deg) translateY(8px);transition:transform .45s cubic-bezier(.16,1,.3,1);}
  .case-link:hover .shot{transform:rotate(-2deg) translateY(0) scale(1.04);}
  .shot-bar{height:22px;display:flex;align-items:center;gap:5px;padding:0 10px;background:#f3efe9;border-bottom:1px solid rgba(0,0,0,.06);}
  .shot-bar i{width:6px;height:6px;border-radius:50%;background:rgba(0,0,0,.16);}
  .shot-scr{padding:12px 13px;display:flex;flex-direction:column;gap:7px;}
  .shot-row{display:flex;justify-content:space-between;align-items:center;font-family:var(--font-mono);font-size:11px;color:#6b6155;}
  .shot-row b{color:var(--ink);font-weight:500;} .shot-row b.acc{color:inherit;}
  .shot-row.big{border-top:1px solid rgba(0,0,0,.08);padding-top:8px;}
  .shot-q{font-family:var(--font-display);font-weight:900;font-size:13px;text-transform:lowercase;color:var(--ink);}
  .shot-list{display:flex;flex-direction:column;gap:6px;font-family:var(--font-mono);font-size:11px;color:#6b6155;}
  .shot-list .ok{color:#3f8a52;} .shot-list .now{color:#b07b2e;}
  .shot-line{height:9px;border-radius:3px;background:rgba(42,37,32,.12);}
  .shot-line.short{width:52%;} .shot-line.acc{background:rgba(20,30,45,.5);width:40%;}

  /* featured studio card */
  .sw-feat{display:grid;grid-template-columns:1.06fr .94fr;gap:0;align-items:stretch;
    border:1px solid rgba(42,37,32,.1);border-radius:20px;overflow:hidden;background:#fdfbf6;margin-bottom:18px;
    transition:transform .5s cubic-bezier(.16,1,.3,1),box-shadow .5s;}
  .sw-feat:hover{transform:translateY(-5px);box-shadow:0 44px 84px -44px rgba(42,37,32,.5);}
  .sw-feat .shot-cover{min-height:248px;padding:26px;}
  .sw-feat .shot{width:88%;}
  .sw-feat-body{padding:clamp(22px,2.8vw,34px);display:flex;flex-direction:column;justify-content:center;}
  .sw-meta{font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--soft);margin-bottom:13px;}
  .sw-feat-ttl{font-family:var(--font-display);font-weight:400;letter-spacing:-.01em;font-size:clamp(26px,3vw,38px);line-height:1.04;color:var(--ink);}
  .sw-feat-ttl .a{color:var(--accent);font-style:italic;}
  .sw-feat-lede{font-family:var(--font-text);font-size:15px;line-height:1.6;color:var(--soft);margin-top:13px;max-width:430px;}
  .sw-foot{display:flex;align-items:center;gap:16px;margin-top:20px;flex-wrap:wrap;}
  .sw-foot .sw-go{opacity:1;transform:none;color:var(--ink);}
  .sw-feat:hover .sw-foot .sw-go{color:inherit;}

  /* studio grid (secondary strong cases) */
  .sw-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(262px,1fr));gap:18px;}
  .swc{border:1px solid rgba(42,37,32,.1);border-radius:16px;overflow:hidden;background:#fdfbf6;
    transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s;}
  .swc:hover{transform:translateY(-5px);box-shadow:0 30px 56px -36px rgba(42,37,32,.45);}
  .swc .shot-cover{height:150px;}
  .swc-body{padding:13px 15px 17px;}
  .swc-meta{font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--soft);}
  .swc-ttl{font-family:var(--font-display);font-weight:400;font-size:20px;line-height:1.06;color:var(--ink);margin-top:6px;}
  .swc-ttl .a{color:var(--accent);font-style:italic;}
  .swc-out{font-family:var(--font-text);font-size:12.5px;line-height:1.4;color:var(--soft);margin-top:7px;}
  .swc-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:13px;}

  /* editorial hover-list (more work) */
  .sw-more{margin-top:clamp(40px,6vh,68px);}
  .sw-more-h{font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--soft);margin-bottom:8px;}
  .swl{position:relative;border-top:1px solid rgba(42,37,32,.14);}
  .swl-row{display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:20px 4px;border-bottom:1px solid rgba(42,37,32,.14);
    position:relative;z-index:2;color:inherit;text-decoration:none;transition:padding-left .35s cubic-bezier(.16,1,.3,1);}
  .swl-row:hover{padding-left:16px;}
  .swl-ttl{font-family:var(--font-display);font-weight:400;font-size:clamp(20px,2.6vw,28px);line-height:1.04;color:var(--ink);transition:color .25s;}
  .swl-row:hover .swl-ttl{color:inherit;}
  .swl-meta{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--soft);white-space:nowrap;}
  .swl-thumb{position:absolute;width:168px;height:108px;border-radius:11px;overflow:hidden;pointer-events:none;z-index:1;
    transform:translate(-50%,-50%) scale(.9);opacity:0;transition:opacity .28s ease,transform .28s ease;
    box-shadow:0 22px 44px -20px rgba(0,0,0,.5);display:flex;align-items:flex-end;padding:9px;}
  .swl-thumb .cap{font-family:var(--font-mono);font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:#fff;opacity:.92;}

  /* ── credibility band ── */
  .cred{background:#ecdcc9;border-top:1px solid rgba(160,110,60,.22);border-bottom:1px solid rgba(160,110,60,.22);
    padding:clamp(34px,5vh,52px) 0;position:relative;z-index:8;}
  .cred-in{text-align:center;}
  .cred-kick{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--soft);}
  .cred-logos{display:flex;align-items:center;justify-content:center;gap:clamp(22px,4vw,46px);flex-wrap:wrap;margin-top:18px;}
  .cred-logos img{height:30px;width:auto;opacity:.6;filter:grayscale(1);transition:opacity .25s,filter .25s;}
  .cred-logos img[src*="podonos"]{height:22px;}
  .cred-logos img:hover{opacity:1;filter:none;}
  .cred-stats{display:flex;justify-content:center;gap:clamp(28px,5vw,60px);margin-top:30px;flex-wrap:wrap;}
  .cred-stats div{display:flex;flex-direction:column;gap:5px;}
  .cred-stats b{font-family:var(--font-display);font-weight:500;font-size:clamp(22px,2.6vw,30px);color:var(--accent);line-height:1;}
  .cred-stats span{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.62);}

  /* ── about ── */
  .abt{background:#f5f1ea;padding:clamp(48px,7vh,86px) 0;}
  .abt-in{max-width:760px;}
  .abt-quote{font-family:var(--font-display);font-weight:400;font-style:italic;font-size:clamp(22px,3vw,34px);line-height:1.22;color:var(--ink);letter-spacing:-.01em;}
  .abt-body{font-family:var(--font-text);font-size:16px;line-height:1.65;color:var(--soft);margin-top:20px;max-width:600px;}
  .abt-link{display:inline-block;margin-top:20px;font-family:var(--font-mono);font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:var(--accent);}
  .abt-link:hover{text-decoration:underline;text-underline-offset:3px;}

  /* ── beyond the work ── */
  .more{padding:clamp(56px,8vh,100px) 0 clamp(34px,5vh,60px);}
  .more-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(228px,1fr));gap:16px;margin-top:36px;}
  .more-card{display:flex;flex-direction:column;gap:9px;background:#fff;border:1px solid rgba(42,37,32,.1);border-radius:16px;padding:22px;
    color:inherit;text-decoration:none;min-height:150px;transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s,border-color .3s;}
  .more-card:hover{transform:translateY(-5px);box-shadow:0 30px 56px -36px rgba(42,37,32,.4);border-color:rgba(20,30,45,.25);}
  .more-k{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);}
  .more-t{font-family:var(--font-display);font-weight:500;letter-spacing:-.01em;text-transform:lowercase;font-size:18px;line-height:1.15;color:var(--ink);}
  .more-go{margin-top:auto;font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--soft);}
  .more-card:hover .more-go{color:inherit;}

  @media (max-width:760px){
    .sw-feat{grid-template-columns:1fr;}
    .sw-feat .shot-cover{min-height:200px;}
    .swl-row{flex-direction:column;align-items:flex-start;gap:7px;}
    .swl-meta{white-space:normal;}
    .cred-stats{gap:22px;}
  }` }} />
<style dangerouslySetInnerHTML={{ __html: `/* home hero is a blue day/night sky — keep the shared nav's brand light */
  #gnav .gnav-brand,#gnav .gnav-dot{color:#fff;text-shadow:0 1px 14px rgba(8,22,48,.32);}
  #gnav .gnav-mark{color:#fff;filter:drop-shadow(0 1px 8px rgba(8,22,48,.4));}
  body.nightsky #gnav .gnav-brand,body.nightsky #gnav .gnav-dot{color:#EDF1E6;}` }} />
<style dangerouslySetInnerHTML={{ __html: `.cloudfield{position:fixed;top:-15vh;left:0;right:0;height:145vh;z-index:0;pointer-events:none;overflow:hidden;will-change:transform;
    background:linear-gradient(180deg,#a8d2ec 0%,#c7e3f1 38%,#e6f1ec 74%,#eef4ea 100%);}
  .cf{position:absolute;background:#fff;border-radius:50%;filter:blur(12px);opacity:.92;will-change:transform;}
  .cf::before,.cf::after{content:"";position:absolute;background:#fff;border-radius:50%;}
  .cf.c1{width:230px;height:64px;top:11%;left:-12%;animation:cfDrift1 90s linear infinite;}
  .cf.c1::before{width:130px;height:130px;left:34px;top:-50px;} .cf.c1::after{width:88px;height:88px;left:130px;top:-24px;}
  .cf.c2{width:340px;height:92px;top:29%;left:-22%;opacity:.8;animation:cfDrift2 120s linear infinite;}
  .cf.c2::before{width:170px;height:160px;left:64px;top:-70px;} .cf.c2::after{width:116px;height:116px;left:200px;top:-36px;}
  .cf.c3{width:160px;height:48px;top:52%;left:-12%;opacity:.7;animation:cfDrift3 100s linear infinite;}
  .cf.c3::before{width:90px;height:90px;left:26px;top:-34px;}
  .cf.c4{width:270px;height:76px;top:67%;left:-24%;opacity:.6;animation:cfDrift4 140s linear infinite;}
  .cf.c4::before{width:150px;height:140px;left:54px;top:-58px;} .cf.c4::after{width:100px;height:100px;left:176px;top:-30px;}
  .cf.c5{width:200px;height:58px;top:83%;left:-14%;opacity:.64;animation:cfDrift2 110s linear infinite;}
  .cf.c5::before{width:112px;height:112px;left:30px;top:-44px;}
  .cf.c6{width:150px;height:44px;top:43%;left:-10%;opacity:.5;animation:cfDrift3 132s linear infinite;}
  .cf.c6::before{width:84px;height:84px;left:22px;top:-30px;}
  @keyframes cfDrift1{from{transform:translateX(0)}to{transform:translateX(128vw)}}
  @keyframes cfDrift2{from{transform:translateX(0)}to{transform:translateX(138vw)}}
  @keyframes cfDrift3{from{transform:translateX(0)}to{transform:translateX(124vw)}}
  @keyframes cfDrift4{from{transform:translateX(0)}to{transform:translateX(132vw)}}
  /* let the statement open onto the sky */
  body{background:#cfe6f3;}
  .ai-statement{background:transparent;}
  /* clouds follow the hero's night palette if the visitor sets night up top */
  body.nightsky .cloudfield{background:linear-gradient(180deg,#2b3a55 0%,#3d4f6b 58%,#566179 100%);}
  body.nightsky .cf,body.nightsky .cf::before,body.nightsky .cf::after{background:#5d6f92;}
  body.nightsky .cf{opacity:.34;}
  @media (prefers-reduced-motion:reduce){.cf{animation:none;}}` }} />
<style dangerouslySetInnerHTML={{ __html: `/* real drifting clouds (air.inc motion) — one soft cloud sprite, mirrored/scaled/feathered */
  .cloudfield .cfc{position:absolute;left:0;top:0;will-change:transform;pointer-events:none;}
  .cloudfield .cfc img{display:block;width:100%;height:auto;
    -webkit-mask-image:linear-gradient(to right,transparent 0,#000 7%,#000 93%,transparent 100%),linear-gradient(to bottom,transparent 0,#000 7%,#000 90%,transparent 100%);
    mask-image:linear-gradient(to right,transparent 0,#000 7%,#000 93%,transparent 100%),linear-gradient(to bottom,transparent 0,#000 7%,#000 90%,transparent 100%);
    -webkit-mask-composite:source-in;mask-composite:intersect;}
  body.nightsky .cloudfield .cfc img{filter:brightness(.5) saturate(.72);}` }} />
<style dangerouslySetInnerHTML={{ __html: `/* The hero (.stage) keeps its meadow, girl, grass, sun & bees exactly as designed.
     The air.inc cloud effect lives in the .cloudfield, which sits BEHIND the scroll —
     the opaque hero covers it, so these soft drifting clouds only reveal after the first fold. */
  body{background:#b9dcf4;}
  .cloudfield{background:linear-gradient(180deg,#2f6cb8 0%,#5a93cf 36%,#8cbce9 72%,#b9dcf4 100%) !important;}

  /* soft, slowly-drifting clouds (air.inc) — white, clearly readable, soft-edged */
  .cf{border-radius:0 !important;
    background:radial-gradient(62% 100% at 50% 54%, rgba(255,255,255,.98) 0%, rgba(255,255,255,.85) 34%, rgba(255,255,255,.4) 60%, rgba(255,255,255,0) 80%) !important;
    filter:blur(16px) !important;}
  .cf::before,.cf::after{display:none !important;}
  /* original six — bumped in size + opacity, staggered so they're spread across the sky at load */
  .cf.c1{width:560px;height:165px;opacity:.92;animation-delay:-12s !important;}
  .cf.c2{width:820px;height:230px;opacity:.8;animation-delay:-58s !important;}
  .cf.c3{width:420px;height:130px;opacity:.86;animation-delay:-34s !important;}
  .cf.c4{width:660px;height:188px;opacity:.74;animation-delay:-80s !important;}
  .cf.c5{width:520px;height:152px;opacity:.84;animation-delay:-46s !important;}
  .cf.c6{width:400px;height:124px;opacity:.72;animation-delay:-20s !important;}
  /* six more for fuller air.inc coverage, drifting at varied speeds + offsets */
  .cf.c7 {position:absolute;top:4%; left:-18%;width:620px;height:178px;opacity:.8; animation:cfDrift1 108s linear infinite;animation-delay:-66s;}
  .cf.c8 {position:absolute;top:19%;left:-14%;width:480px;height:148px;opacity:.74;animation:cfDrift3 120s linear infinite;animation-delay:-30s;}
  .cf.c9 {position:absolute;top:37%;left:-22%;width:740px;height:210px;opacity:.66;animation:cfDrift2 136s linear infinite;animation-delay:-95s;}
  .cf.c10{position:absolute;top:57%;left:-16%;width:540px;height:160px;opacity:.74;animation:cfDrift4 126s linear infinite;animation-delay:-50s;}
  .cf.c11{position:absolute;top:73%;left:-12%;width:440px;height:138px;opacity:.7; animation:cfDrift1 114s linear infinite;animation-delay:-88s;}
  .cf.c12{position:absolute;top:89%;left:-20%;width:600px;height:174px;opacity:.64;animation:cfDrift3 142s linear infinite;animation-delay:-16s;}
  body.nightsky .cf{
    background:radial-gradient(62% 100% at 50% 54%, rgba(156,176,216,.9) 0%, rgba(156,176,216,.55) 38%, rgba(156,176,216,0) 78%) !important;}
  body.nightsky .cf.c1,body.nightsky .cf.c2,body.nightsky .cf.c3,body.nightsky .cf.c4,body.nightsky .cf.c5,body.nightsky .cf.c6,
  body.nightsky .cf.c7,body.nightsky .cf.c8,body.nightsky .cf.c9,body.nightsky .cf.c10,body.nightsky .cf.c11,body.nightsky .cf.c12{opacity:.32;}
  @media (prefers-reduced-motion:reduce){.cf{animation:none !important;}}` }} />
<style dangerouslySetInnerHTML={{ __html: `.scene-rail{position:fixed;right:16px;top:50%;transform:translateY(-50%);z-index:95;display:flex;flex-direction:column;align-items:center;gap:6px;
      background:rgba(255,255,255,.16);-webkit-backdrop-filter:blur(14px) saturate(1.15);backdrop-filter:blur(14px) saturate(1.15);
      border:none;border-radius:22px;padding:10px 8px;box-shadow:0 12px 28px -18px rgba(20,30,40,.35);}
    .scene-rail .sr-b{width:38px;height:38px;border:none;border-radius:14px;background:transparent;cursor:pointer;display:grid;place-items:center;color:#fff;opacity:.55;transition:opacity .25s,background .25s,color .25s,transform .25s;-webkit-tap-highlight-color:transparent;}
    .scene-rail .sr-b svg{width:17px;height:17px;}
    .scene-rail .sr-b:hover{opacity:.95;transform:scale(1.1);}
    .scene-rail .sr-b.on{background:#fff;color:#1c1c1e;opacity:1;box-shadow:0 4px 12px -4px rgba(20,30,40,.35);}
    .scene-rail .sr-div{display:none;}
    .scene-rail .sr-auto{font-family:var(--font-mono);font-size:8px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.6);background:transparent;border:none;border-radius:10px;padding:4px 7px;cursor:pointer;transition:color .2s,background .2s;}
    .scene-rail .sr-auto:hover{transform:translateY(-1px);}
    .scene-rail .sr-auto.on{background:rgba(255,255,255,.22);color:#fff;}
    @media(max-width:720px){.scene-rail{right:10px;}}` }} />
<style dangerouslySetInnerHTML={{ __html: `.ai-wrap{max-width:1140px;margin:0 auto;padding:0 var(--edge);}
  .ai-sec{position:relative;z-index:8;}
  .ai-rv{opacity:0;transform:translateY(26px);transition:opacity .9s var(--ease),transform .9s var(--ease);}
  .ai-rv.in{opacity:1;transform:none;}
  .ai-kick{font-family:var(--font-mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);}
  .ai-big{font-family:var(--font-display);font-weight:400;letter-spacing:-.012em;font-size:var(--fs-h2);line-height:1.02;color:var(--ink);margin-top:16px;}
  .ai-big em{font-style:italic;color:var(--accent);}
  .ai-sub{font-family:var(--font-text);font-size:17px;line-height:1.6;color:var(--soft);margin-top:20px;max-width:520px;}

  .ai-statement{background:transparent;padding:clamp(70px,12vh,150px) 0;}

  .ai-work{background:transparent;padding:clamp(36px,6vh,72px) 0 clamp(56px,9vh,104px);}
  .ai-work-head{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:30px;}
  .ai-feat{display:grid;grid-template-columns:1fr clamp(180px,26vw,300px);gap:clamp(20px,4vw,44px);align-items:center;
    background:rgba(255,255,255,.6);-webkit-backdrop-filter:blur(12px) saturate(1.1);backdrop-filter:blur(12px) saturate(1.1);
    border:1px solid rgba(255,255,255,.6);border-radius:18px;padding:clamp(22px,3vw,34px);margin-bottom:16px;
    color:inherit;text-decoration:none;box-shadow:0 22px 50px -34px rgba(42,37,32,.42);
    transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s;}
  .ai-feat:hover{transform:translateY(-4px);box-shadow:0 34px 66px -38px rgba(42,37,32,.5);}
  .ai-feat:last-child{margin-bottom:0;}

  /* big air-style belief banner over the sky */
  .ai-banner{background:transparent;padding:var(--sp-section) 0;text-align:center;}
  .ai-banner-ttl{font-family:var(--font-display);font-weight:400;letter-spacing:-.015em;
    font-size:clamp(26px,5vw,64px);line-height:1.04;color:var(--ink);margin:0 auto;white-space:nowrap;}
  .ai-banner-ttl em{font-style:italic;color:var(--accent);}
  @media (max-width:640px){.ai-banner-ttl{white-space:normal;}}
  .ai-stat{font-family:var(--font-display);font-weight:900;text-transform:uppercase;letter-spacing:-.03em;line-height:.94;font-size:var(--fs-giant);color:#f4f7fc;text-align:center;margin:0;}
  .ai-stat .row{display:block;overflow:hidden;padding:0 .04em;}
  .ai-stat .ln{display:inline-block;white-space:nowrap;transform:translateY(116%);will-change:transform;transition:transform .95s cubic-bezier(.16,1,.3,1);}
  .ai-stat.in .ln{transform:translateY(0);}
  .ai-stat .row:nth-of-type(2) .ln{transition-delay:.13s;}
  .ai-stat .row:nth-of-type(3) .ln{transition-delay:.26s;}
  .ai-stat .row:nth-of-type(4) .ln{transition-delay:.39s;}
  .ai-stat .ln .num{font-variant-numeric:tabular-nums;font-feature-settings:"tnum";}
  .ai-stat .ln.em{color:inherit;}
  .ai-stat-pin{min-height:78vh;display:flex;align-items:center;}
  .ai-stat-pin .ai-wrap{width:100%;max-width:none;padding-left:clamp(16px,4vw,56px);padding-right:clamp(16px,4vw,56px);}
  @media(prefers-reduced-motion:reduce){.ai-stat .ln{transition:none;transform:none;}}
  body.nightsky .ai-stat{color:#EDF1E6;} body.nightsky .ai-stat .ln.em{color:#f4f7fc;}
  .ai-triad-sec{padding:var(--sp-section) 0;}
  .ai-triad-head{max-width:1160px;margin:0 auto clamp(28px,5vh,52px);padding:0 var(--edge);text-align:center;}
  .ai-triad-eb{font-family:var(--font-mono);font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.82);}
  .ai-triad-eb b{color:#fff;font-weight:600;}
  .ai-triad{position:relative;max-width:1160px;margin:0 auto;padding:18px var(--edge) 0;display:grid;grid-template-columns:repeat(3,1fr);gap:var(--tri-gap);--tri-gap:clamp(16px,2vw,26px);}
  /* thread is centered exactly on the dot centers: vertical at dot center (~12px), horizontal from center of col1 to center of col3 */
  .tri-thread{position:absolute;top:11px;left:calc(var(--edge) + (100% - 2*var(--edge) - 2*var(--tri-gap)) / 6);right:calc(var(--edge) + (100% - 2*var(--edge) - 2*var(--tri-gap)) / 6);height:2px;background:rgba(255,255,255,.24);border-radius:2px;overflow:hidden;transform:scaleX(0);transform-origin:left center;transition:transform 1.1s cubic-bezier(.16,1,.3,1);}
  .ai-triad.lit .tri-thread{transform:scaleX(1);}
  .tri-thread::after{content:"";position:absolute;top:0;left:-28%;width:28%;height:100%;background:linear-gradient(90deg,transparent,#fff,transparent);opacity:0;animation:triPulse 3.6s linear infinite;}
  .ai-triad.lit .tri-thread::after{opacity:1;}
  @keyframes triPulse{to{left:128%}}
  .tri-card{position:relative;display:flex;flex-direction:column;background:rgba(255,255,255,.14);-webkit-backdrop-filter:blur(10px) saturate(1.25);backdrop-filter:blur(10px) saturate(1.25);border:1px solid rgba(255,255,255,.32);border-radius:20px;padding:clamp(28px,3vw,40px) clamp(24px,2.8vw,34px) clamp(24px,2.8vw,32px);box-shadow:0 14px 40px rgba(8,24,52,.18);opacity:0;will-change:transform,opacity,filter;transition:transform .3s var(--ease),box-shadow .4s ease,border-color .3s ease,background .3s ease;}
  .tri-card>*{position:relative;z-index:1;}
  /* cursor-tracked spotlight + light glare across the frosted glass */
  .tri-card::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s ease;background:radial-gradient(360px circle at var(--mx,50%) var(--my,30%),rgba(255,255,255,.34),rgba(255,255,255,0) 62%);}
  .tri-card::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .45s ease;background:linear-gradient(105deg,transparent 42%,rgba(255,255,255,.20) 50%,transparent 58%);background-size:260% 100%;background-position:var(--gx,50%) 0;}
  .tri-card:hover::before,.tri-card:hover::after{opacity:1;}
  .tri-card.in{animation:triIn .85s cubic-bezier(.22,1,.36,1) forwards;}
  @keyframes triIn{from{opacity:0;transform:translateY(36px) scale(.975);filter:blur(8px);}to{opacity:1;transform:translateY(0) scale(1);filter:blur(0);}}
  .tri-card:hover{transform:translateY(-7px)!important;background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.5);box-shadow:0 36px 72px -28px rgba(8,22,48,.55);}
  .tri-dot{position:absolute;top:-27px;left:50%;transform:translateX(-50%);width:40px;height:40px;border-radius:50%;
    display:grid;place-items:center;font-family:var(--font-mono);font-size:12px;font-weight:500;letter-spacing:.02em;color:#fff;
    background:rgba(36,60,98,.55);-webkit-backdrop-filter:blur(8px) saturate(1.3);backdrop-filter:blur(8px) saturate(1.3);
    border:1.5px solid rgba(255,255,255,.85);box-shadow:0 4px 16px rgba(8,22,48,.34);
    transition:box-shadow .4s ease,background .4s ease,transform .4s ease;z-index:2;}
  .tri-card:hover .tri-dot{background:#0083E7;box-shadow:0 0 0 6px rgba(255,255,255,.16),0 8px 22px rgba(0,131,231,.5);transform:translateX(-50%) scale(1.08);}
  .tri-n{font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.7);}
  .tri-card h4{font-family:var(--font-display);font-weight:900;text-transform:uppercase;font-size:var(--fs-h3);letter-spacing:-.01em;color:#fff;margin-top:7px;}
  .tri-card p{margin-top:11px;color:rgba(255,255,255,.88);line-height:1.58;font-size:14.5px;}
  .tri-stack{display:flex;flex-wrap:wrap;gap:7px;margin-top:16px;}
  .tri-stack span{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.3);border-radius:999px;padding:3px 9px;}
  @media(max-width:760px){.ai-triad{grid-template-columns:1fr;gap:14px;padding-top:0;}.tri-thread,.tri-dot{display:none;}.tri-card{padding-top:clamp(24px,2.8vw,32px);}}
  .ai-feat-ttl{font-family:var(--font-display);font-weight:400;font-size:var(--fs-h3);line-height:1.04;color:var(--ink);letter-spacing:-.01em;}
  .ai-feat-ttl em{font-style:italic;color:var(--accent);}
  .ai-feat-meta{margin-top:13px;font-family:var(--font-mono);font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:var(--soft);display:flex;gap:9px;flex-wrap:wrap;align-items:center;}
  .ai-feat-meta b{color:var(--accent);font-weight:500;}
  .ai-feat-go{margin-top:16px;font-family:var(--font-mono);font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink);display:inline-flex;gap:8px;align-items:center;}
  .ai-feat-go i{font-style:normal;transition:transform .3s cubic-bezier(.16,1,.3,1);}
  .ai-feat:hover .ai-feat-go{color:inherit;} .ai-feat:hover .ai-feat-go i{transform:translateX(6px);}
  .ai-feat-media{height:clamp(132px,18vw,196px);border-radius:16px;position:relative;overflow:hidden;
    box-shadow:0 30px 60px -38px rgba(42,37,32,.5);transition:transform .5s cubic-bezier(.16,1,.3,1);}
  .ai-feat:hover .ai-feat-media{transform:translateY(-5px) scale(1.015);}
  .ai-feat-media .scr{position:absolute;inset:14px;border-radius:9px;background:#fff;display:flex;flex-direction:column;overflow:hidden;}
  .ai-feat-media .scr .bar{height:18px;display:flex;align-items:center;gap:4px;padding:0 8px;background:#f3efe9;border-bottom:1px solid rgba(0,0,0,.06);}
  .ai-feat-media .scr .bar i{width:5px;height:5px;border-radius:50%;background:rgba(0,0,0,.18);}
  .ai-feat-media .scr .body{flex:1;padding:10px 11px;display:flex;flex-direction:column;gap:6px;justify-content:center;}
  .ai-feat-media .scr .ln{height:8px;border-radius:3px;background:rgba(42,37,32,.12);}
  .ai-feat-media .scr .ln.acc{background:rgba(20,30,45,.5);width:50%;}
  .ai-feat-media .scr .row{display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:10px;color:#6b6155;}
  .ai-feat-media .scr .row b{color:#16202b;}

  .ai-stats{background:transparent;padding:clamp(18px,4vh,40px) 0 clamp(40px,7vh,72px);}
  .ai-stats-grid{display:flex;justify-content:space-around;gap:24px;flex-wrap:wrap;text-align:center;
    background:rgba(255,255,255,.55);-webkit-backdrop-filter:blur(12px) saturate(1.1);backdrop-filter:blur(12px) saturate(1.1);
    border:1px solid rgba(255,255,255,.6);border-radius:20px;padding:clamp(30px,5vh,46px) clamp(20px,4vw,40px);
    box-shadow:0 24px 56px -36px rgba(42,37,32,.42);}
  .ai-stat .n{font-family:var(--font-display);font-weight:400;font-size:clamp(34px,5vw,58px);color:var(--accent);line-height:1;}
  .ai-stat .l{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.62);margin-top:8px;}

  .ai-close{position:relative;z-index:8;min-height:62vh;display:flex;align-items:center;background:linear-gradient(180deg,#bcdcf0,#e4f0ea);transition:background 1s ease;}
  .ai-close .greet{font-family:var(--font-mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);}
  .ai-close-ttl{font-family:var(--font-display);font-weight:400;font-size:clamp(32px,5.4vw,64px);line-height:1.04;color:var(--ink);margin-top:14px;letter-spacing:-.01em;}
  .ai-close-ttl em{font-style:italic;color:var(--accent);}
  .ai-close .cta-row{margin-top:26px;}
  .ai-close .btn-primary{font-family:var(--font-mono);font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:#fff;background:var(--accent);padding:14px 24px;border-radius:10px;text-decoration:none;display:inline-block;transition:transform .2s,box-shadow .2s;}
  .ai-close .btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 30px -14px rgba(20,30,45,.6);}
  .ai-close.is-night .ai-close-ttl{color:#EDF1E6;} .ai-close.is-night .greet{color:#f4f7fc;}

  #aiSplash{position:fixed;inset:0;z-index:9999;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(20px,3.4vh,34px);will-change:transform;
    background:linear-gradient(180deg,#bcdcf0 0%,#d8ecf3 56%,#e6f1ea 100%);}
  #aiSplash .sp-dawn{position:absolute;inset:0;pointer-events:none;will-change:opacity;
    background:linear-gradient(180deg,#f4b079 0%,#f7cfae 32%,rgba(247,217,192,0) 66%);}
  #aiSplash .sp-sun{position:relative;width:clamp(118px,16vw,196px);aspect-ratio:1;will-change:transform;}
  #aiSplash .sp-sun .glow{position:absolute;inset:-44%;border-radius:50%;pointer-events:none;
    background:radial-gradient(circle, rgba(255,222,140,.55) 0%, rgba(255,216,128,.22) 40%, rgba(255,216,128,0) 68%);}
  #aiSplash .sp-sun .disc{position:absolute;inset:0;border-radius:50%;
    background:radial-gradient(circle at 50% 42%, #fffdf4 0%, #ffeaa0 32%, #ffd457 60%, #f7bd3e 84%, #e9a72c 100%);
    box-shadow:0 0 40px 8px rgba(255,206,90,.5),inset 0 -10px 24px rgba(190,118,20,.24),inset 0 6px 16px rgba(255,255,255,.4);}
  #aiSplash .sp-line{position:relative;font-family:"Satoshi","Switzer","Geist",system-ui,sans-serif;font-style:italic;font-weight:500;font-size:clamp(30px,5.6vw,60px);color:#fff7ec;letter-spacing:-.01em;text-transform:lowercase;text-shadow:0 2px 20px rgba(28,46,76,.42),0 1px 4px rgba(28,46,76,.28);}
  #aiSplash .sp-line .dot{color:#FFC93C;font-style:italic;}
  body.splash-done #aiSplash{display:none;}
  @media (prefers-reduced-motion:reduce){#aiSplash{display:none;}}
  @media (max-width:760px){#aiSplash{display:none!important;}}

  @media (max-width:760px){
    .ai-feat{grid-template-columns:1fr;}
    .ai-feat-media{order:2;height:160px;}
  }` }} />
<style dangerouslySetInnerHTML={{ __html: `.winbar{height:26px;display:flex;align-items:center;gap:6px;padding:0 12px;background:#f3efe9;border-bottom:1px solid rgba(0,0,0,.07);}
  .winbar i{width:8px;height:8px;border-radius:50%;background:rgba(0,0,0,.18);}
  .winbar .url{margin-left:10px;font-family:var(--font-mono);font-size:10px;color:#a3917d;letter-spacing:.02em;}
  .ai-showcase{position:relative;z-index:8;padding:clamp(16px,3vh,46px) var(--edge) clamp(40px,8vh,88px);}
  .ai-shot-frame{max-width:1040px;margin:0 auto;border-radius:16px;overflow:hidden;background:#fff;
    border:1px solid rgba(255,255,255,.7);box-shadow:0 50px 110px -50px rgba(28,40,60,.6);will-change:transform,opacity;}
  .ai-shot-frame > img{display:block;width:100%;height:auto;}
  /* real screens inside the work-card windows */
  .ai-feat-media{background:#fff !important;display:flex;flex-direction:column;}
  .ai-feat-media .winbar{height:20px;flex:0 0 20px;} .ai-feat-media .winbar i{width:5px;height:5px;}
  .ai-feat-media > img{flex:1;min-height:0;width:100%;object-fit:cover;object-position:top center;}` }} />
<style dangerouslySetInnerHTML={{ __html: `body.nightsky .ai-big,
  body.nightsky .ai-banner-ttl,
  body.nightsky .ai-case-ttl,
  body.nightsky .ai-case-go{color:#EDF1E6;}
  body.nightsky .ai-big .a,
  body.nightsky .ai-banner-ttl em,
  body.nightsky .ai-case-ttl em,
  body.nightsky .ai-case-meta b,
  body.nightsky .ai-kick,
  body.nightsky .hs-kick{color:#f4f7fc;}
  body.nightsky .ai-logos .lbl,
  body.nightsky .ai-case-meta,
  body.nightsky .ai-stage-sub{color:#bcc7b0;}
  body.nightsky .ai-stage-sub b{color:#EDF1E6;}` }} />
<style dangerouslySetInnerHTML={{ __html: `.ai-work{background:transparent;padding:clamp(30px,5vh,60px) 0 clamp(56px,9vh,104px);}
  .ai-work .ai-wrap{max-width:1120px;}
  .ai-work-head{margin-bottom:clamp(34px,6vh,64px);display:flex;align-items:flex-end;justify-content:space-between;gap:12px;flex-wrap:wrap;}
  .ai-case{margin-bottom:clamp(60px,11vh,128px);}
  .ai-case:last-child{margin-bottom:0;}
  .ai-case-link{display:block;color:inherit;text-decoration:none;}
  .ai-case-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;flex-wrap:wrap;margin-bottom:22px;}
  .ai-case-ttl{font-family:var(--font-display);font-weight:400;font-size:var(--fs-h3);line-height:1.05;color:var(--ink);letter-spacing:-.012em;max-width:none;}
  .ai-case-ttl em{font-style:italic;color:var(--accent);}
  .ai-case-meta{font-family:var(--font-mono);font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:var(--soft);text-align:right;line-height:1.7;}
  .ai-case-meta b{color:var(--accent);font-weight:500;}
  .ai-case-shot{border-radius:16px;overflow:hidden;background:#fff;border:1px solid rgba(255,255,255,.7);
    box-shadow:0 50px 110px -52px rgba(28,40,60,.62);will-change:transform,opacity;}
  .ai-case-shot > img,.ai-case-shot > video{display:block;width:100%;height:auto;}
  .ai-case-shot .capwrap{max-height:64vh;overflow:hidden;}
  .ai-case-shot .capwrap > img{display:block;width:100%;height:auto;}
  .ai-case-shot.phone{width:clamp(220px,26vw,288px);margin:0 auto;aspect-ratio:.466;overflow:hidden;border:none;background:#0b0b0c;border-radius:44px;box-shadow:0 44px 84px -42px rgba(28,40,60,.55);}
  .ai-case-shot.phone video{width:100%;height:100%;display:block;object-fit:cover;object-position:center;transform:scale(1.06);}
  .ai-case-vid{position:absolute;top:10px;right:12px;z-index:2;font-family:var(--font-mono);font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:rgba(28,40,60,.5);padding:3px 9px;border-radius:20px;}
  .ai-case-go{margin-top:18px;font-family:var(--font-mono);font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink);display:inline-flex;gap:8px;align-items:center;}
  .ai-case-go i{font-style:normal;transition:transform .3s cubic-bezier(.16,1,.3,1);}
  .ai-case-link:hover .ai-case-go{color:inherit;} .ai-case-link:hover .ai-case-go i{transform:translateX(6px);}
  .ai-case-shot .winbar{display:none;}
  .nda-lock{position:absolute;inset:0;z-index:5;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:13px;color:#fff;
    background:rgba(28,40,60,0);opacity:0;transition:opacity .35s ease,background .35s ease;pointer-events:none;}
  .ai-case-link:hover .nda-lock{opacity:1;background:rgba(28,40,60,.5);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);}
  .nda-lock svg{width:42px;height:42px;}
  .nda-lock span{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;}
  @media (max-width:760px){ .ai-case-head{flex-direction:column;align-items:flex-start;} .ai-case-meta{text-align:left;} }` }} />
<style dangerouslySetInnerHTML={{ __html: `.ai-manifesto{position:relative;z-index:8;overflow:hidden;width:100%;
    padding:clamp(96px,22vh,240px) 0;display:flex;align-items:center;}
  .mf-sky{position:absolute;inset:-12% 0;z-index:0;
    background:linear-gradient(180deg,#3a82d6 0%,#4f93e2 52%,#6aa8ea 100%);will-change:transform;}
  body.nightsky .mf-sky{background:linear-gradient(180deg,#1d2a42 0%,#314058 56%,#46566f 100%);}
  .mf-cloud{position:absolute;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.42),rgba(255,255,255,.16) 60%,rgba(255,255,255,0));
    filter:blur(7px);opacity:.5;will-change:transform;pointer-events:none;}
  body.nightsky .mf-cloud{opacity:.12;}
  .mf-c1{width:46vw;height:20vw;left:-8vw;top:6%;animation:mfDrift 46s linear infinite;}
  .mf-c2{width:34vw;height:15vw;right:-6vw;top:72%;animation:mfDrift2 60s linear infinite;}
  .mf-c3{width:40vw;height:17vw;left:14vw;bottom:2%;animation:mfDrift 54s linear infinite;opacity:.32;}
  @keyframes mfDrift{from{transform:translateX(-4%)}to{transform:translateX(8%)}}
  @keyframes mfDrift2{from{transform:translateX(5%)}to{transform:translateX(-7%)}}
  @media (prefers-reduced-motion:reduce){.mf-cloud{animation:none;}}
  .mf-wrap{position:relative;z-index:2;max-width:1240px;margin:0 auto;padding:0 var(--edge);width:100%;}
  .mf-kick{font-family:var(--font-mono);font-size:12px;letter-spacing:.18em;text-transform:uppercase;
    color:rgba(255,255,255,.9);margin:0 0 clamp(18px,3vh,30px);}
  .mf-ttl{margin:0;font-family:var(--font-display);font-weight:900;text-transform:lowercase;
    font-size:clamp(46px,9.4vw,148px);line-height:.92;letter-spacing:-.025em;color:#fff;
    }
  .mf-row{display:block;overflow:hidden;padding-bottom:.04em;}
  .mf-line{display:block;will-change:transform;}
  .mf-ttl em{font-style:normal;color:#ffd1a1;}
  .mf-sub{position:relative;font-family:var(--font-display);font-weight:400;
    font-size:clamp(18px,2.5vw,32px);line-height:1.4;color:rgba(255,255,255,.94);
    margin:clamp(26px,4.5vh,52px) 0 0;max-width:820px;letter-spacing:-.005em;}
  .mf-sub em{font-style:italic;color:#ffd1a1;}` }} />
<style dangerouslySetInnerHTML={{ __html: `.sw-sec{position:relative;z-index:8;padding:var(--sp-section) 0;}
  .sw-sec .ai-wrap{max-width:1180px;}
  .sw-seeall i,.sw-card-go i{font-style:normal;transition:transform .3s cubic-bezier(.22,1,.36,1);}
  .sw-seeall:hover i{transform:translateX(6px);}
  .sw-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:clamp(28px,4.5vh,50px);}
  .sw-head h2{font-family:var(--font-display);font-weight:400;letter-spacing:-.012em;text-transform:lowercase;font-size:var(--fs-h2);line-height:1.02;color:#fff;}
  .sw-head h2 em{font-style:italic;font-weight:400;font-family:var(--font-display);text-transform:lowercase;letter-spacing:-.01em;}
  .sw-seeall{font-family:var(--font-mono);font-size:12px;letter-spacing:.05em;text-transform:lowercase;font-weight:600;display:inline-flex;gap:8px;align-items:center;color:#fff;text-decoration:none;}
  .sw-filters{position:relative;display:inline-flex;align-items:stretch;gap:0;margin:2px 0 clamp(18px,2.4vw,28px);
    background:rgba(255,255,255,.14);-webkit-backdrop-filter:blur(12px) saturate(1.15);backdrop-filter:blur(12px) saturate(1.15);
    border-radius:16px;padding:5px;}
  .sw-filters .sw-thumb{position:absolute;top:5px;left:0;height:calc(100% - 10px);width:0;background:#fff;border-radius:12px;
    box-shadow:0 8px 18px -10px rgba(8,24,52,.45);z-index:0;
    transition:transform .45s cubic-bezier(.22,1,.36,1),width .45s cubic-bezier(.22,1,.36,1);}
  .sw-filters button{position:relative;z-index:1;appearance:none;cursor:pointer;font-family:var(--font-mono);font-size:11.5px;
    letter-spacing:.08em;text-transform:lowercase;color:rgba(255,255,255,.75);background:none;border:none;border-radius:12px;
    padding:10px 18px;white-space:nowrap;transition:color .35s;}
  .sw-filters button:hover{color:#fff;}
  .sw-filters button.on{color:#16202b;}
  @media(max-width:640px){.sw-filters{flex-wrap:wrap;} .sw-filters .sw-thumb{display:none;} .sw-filters button.on{background:#fff;}}
  .sw-card.fhide{display:none;}
  .sw-card.feat{grid-column:1/-1;}
  .sw-card.feat .sw-media{aspect-ratio:1.9/1;}
  .sw-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:clamp(18px,2vw,28px);}
  .sw-card{display:block;text-decoration:none;background:rgba(255,255,255,.12);-webkit-backdrop-filter:blur(8px) saturate(1.2);backdrop-filter:blur(8px) saturate(1.2);
    border:1px solid rgba(255,255,255,.28);border-radius:20px;overflow:hidden;padding:10px;
    box-shadow:0 14px 40px rgba(8,24,52,.18);transition:transform .7s cubic-bezier(.22,1,.36,1),box-shadow .7s cubic-bezier(.22,1,.36,1);}
  .sw-card:hover{transform:translateY(-6px);box-shadow:0 30px 60px -28px rgba(8,22,48,.5);}
  .sw-media{overflow:hidden;background:rgba(255,255,255,.08);aspect-ratio:16/10;position:relative;border-radius:13px;}
  .sw-rec{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}
  .sw-media img,.sw-media video{width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform 1.1s cubic-bezier(.22,1,.36,1);}
  .sw-card:hover .sw-media img,.sw-card:hover .sw-media video{transform:scale(1.04);}
  /* flagship mobile card — phone peeking from the bottom (portrait device on a tinted panel) */
  .sw-media.phone{background:linear-gradient(165deg,#d8e5f7 0%,#aecbef 56%,#8eb4e6 100%);display:flex;justify-content:center;align-items:flex-start;padding-top:24px;}
  .sw-media.phone video,.sw-media.phone img{width:52%;height:auto;max-width:none;object-fit:contain;align-self:flex-start;transition:transform 1.1s cubic-bezier(.22,1,.36,1);}
  .sw-media.phone video{border-radius:26px;box-shadow:0 28px 46px -20px rgba(8,24,52,.62);clip-path:inset(4.5% 0 0 0 round 30px);}
  /* GH cover video is a framed phone with its own bezel — round it to match, no top trim */
  .sw-media.phone video.gh-cover{border-radius:30px;clip-path:inset(0 0 0 0 round 30px);}
  .sw-media.phone .gh-cmp{position:relative;width:52%;aspect-ratio:430/902;border-radius:30px;overflow:hidden;--pos:50%;align-self:flex-start;touch-action:none;cursor:ew-resize;box-shadow:0 28px 46px -20px rgba(8,24,52,.62);transition:transform 1.1s cubic-bezier(.22,1,.36,1);}
  .sw-card:hover .sw-media.phone .gh-cmp{transform:translateY(-7px);}
  .sw-media.phone .gh-cmp.dragging{animation:none;cursor:grabbing;}
  .sw-media.phone .gh-cmp .gh-ph{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;object-position:top center;display:block;}
  .sw-media.phone .gh-cmp .gh-ph.before{clip-path:inset(0 calc(100% - var(--pos)) 0 0);}
  .sw-media.phone .gh-div{position:absolute;top:0;bottom:0;left:var(--pos);width:2px;margin-left:-1px;z-index:4;pointer-events:none;background:rgba(255,255,255,.96);box-shadow:0 0 0 1px rgba(8,24,52,.14);}
  .sw-media.phone .gh-handle{position:absolute;top:50%;left:var(--pos);transform:translate(-50%,-50%);width:30px;height:30px;border-radius:50%;background:#fff;box-shadow:0 3px 12px rgba(8,24,52,.34);display:flex;align-items:center;justify-content:center;font-size:14px;color:#16202b;z-index:5;pointer-events:none;}
  .sw-media.phone .gh-tag{position:absolute;top:11px;z-index:5;font-family:var(--font-mono),monospace;font-size:8.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:3px 8px;border-radius:999px;pointer-events:none;background:rgba(255,255,255,.92);color:#16202b;}
  .sw-media.phone .gh-tag.l{left:11px;} .sw-media.phone .gh-tag.r{right:11px;background:#16202b;color:#fff;}
  @keyframes gh-sweep{0%,100%{--pos:64%;}50%{--pos:36%;}}
  @media(prefers-reduced-motion:reduce){.sw-media.phone .gh-cmp{animation:none;--pos:50%;}}
  .sw-media.phone img{filter:drop-shadow(0 24px 30px rgba(8,24,52,.48));}
  .sw-card:hover .sw-media.phone video,.sw-card:hover .sw-media.phone img{transform:translateY(-7px);}
  @media(max-width:760px){.sw-media.phone video,.sw-media.phone img{width:54%;}}
  /* voice case (NDA) — soft "voice orb" on a light gradient tuned to the dawn/sky palette */
  .sw-media.nda{display:grid;place-items:center;position:relative;overflow:hidden;background:linear-gradient(142deg,#dcebf8 0%,#e7ede1 50%,#f7e9d2 100%);}
  .sw-media.nda::before,.sw-media.nda::after{content:"";position:absolute;width:58%;aspect-ratio:1;border-radius:50%;pointer-events:none;}
  /* when the NDA card has a real video cover, drop the decorative aura */
  .sw-media.nda:has(video)::before,.sw-media.nda:has(video)::after{display:none;}
  /* NDA image covers: never show the underlying product UI - the aura IS the cover */
  .sw-media.nda > img{display:none;}
  .sw-media.nda::before{background:
      radial-gradient(42% 42% at 30% 32%,#bcd4ff 0%,transparent 62%),
      radial-gradient(46% 46% at 72% 66%,#b3a4ec 0%,transparent 62%),
      radial-gradient(62% 62% at 52% 48%,#9bb8ee 0%,#c6c2ef 58%,transparent 82%);
    filter:blur(7px) saturate(1.25);opacity:.94;animation:ndaSwirl 18s ease-in-out infinite;}
  .sw-media.nda::after{background:
      radial-gradient(40% 40% at 68% 30%,#e7bce6 0%,transparent 60%),
      radial-gradient(44% 44% at 30% 70%,#f3ddc6 0%,transparent 62%),
      radial-gradient(52% 52% at 58% 60%,#cbb6ea 0%,transparent 80%);
    filter:blur(11px) saturate(1.25);opacity:.8;animation:ndaSwirl2 23s ease-in-out infinite;}
  .sw-media.nda .nda-hover{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;opacity:0;background:rgba(255,255,255,.16);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);transition:opacity .4s var(--ease);color:rgba(20,32,52,.72);}
  .sw-media.nda .nda-hover svg{width:30px;height:30px;}
  .sw-media.nda .nda-hover span{font-family:var(--font-mono);font-weight:600;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;}
  .sw-card:hover .sw-media.nda .nda-hover{opacity:1;}
  @keyframes ndaSwirl{0%{transform:rotate(0) scale(1)}50%{transform:rotate(180deg) scale(1.08)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes ndaSwirl2{0%{transform:rotate(0) scale(1.06)}50%{transform:rotate(-200deg) scale(.94)}100%{transform:rotate(-360deg) scale(1.06)}}
  @media(prefers-reduced-motion:reduce){.sw-media.nda::before,.sw-media.nda::after{animation:none;}}
  .sw-badge{position:absolute;top:13px;left:13px;font-family:var(--font-mono);font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;background:rgba(255,255,255,.92);color:#16202b;padding:5px 11px;border-radius:8px;}
  .sw-body{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:17px 12px 6px;}
  .sw-ttl{font-family:var(--font-display);font-weight:800;font-size:var(--fs-h4);line-height:1.08;letter-spacing:-.02em;color:#fff;}
  .sw-ttl em{font-style:italic;font-weight:400;font-family:var(--font-display);}
  .sw-meta{font-family:var(--font-mono);font-size:10.5px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;color:#fff;text-align:right;line-height:1.8;white-space:nowrap;}
  .sw-meta b{color:#fff;font-weight:600;}
  .sw-card-go{padding:0 12px 12px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;display:inline-flex;gap:8px;align-items:center;color:#fff;}
  body.litcopy .sw-head h2,body.litcopy .sw-ttl{}
  @media(max-width:760px){.sw-grid{grid-template-columns:1fr;} .sw-body{flex-direction:column;} .sw-meta{text-align:left;white-space:normal;}}` }} />
<style dangerouslySetInnerHTML={{ __html: `.ai-logos{position:relative;z-index:8;padding:var(--sp-section) 0;}
  .logos-wrap{margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:clamp(24px,4vh,40px);width:100%;}
  .logos-kick{font-family:var(--font-mono);font-size:15px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:rgba(255,255,255,.9);}
  .logos-rail{width:100%;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);}
  .logos-track{display:flex;align-items:center;gap:clamp(56px,8vw,112px);width:max-content;animation:logosScroll 38s linear infinite;}
  .logos-rail:hover .logos-track{animation-play-state:paused;}
  @keyframes logosScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  .logos-track img{height:34px;width:auto;flex:0 0 auto;opacity:.9;}
  /* optical normalization: each file carries different internal padding, so boxes
     are sized per-logo to give every mark the same visual height on the rail */
  .logos-track img[src*="emirates-nbd"]{height:45px;}
  .logos-track img[src*="mashreq"]{height:48px;}
  .logos-track img[src*="accenture-song"]{height:44px;}
  .logos-track img[src*="specsavers"]{height:34px;}
  .logos-track img[src*="podonos"]{height:40px;}
  .logos-track img[src*="jumeirah"]{height:26px;}
  .logos-track img[src*="flooff"]{height:32px;}
  .logos-track .logo-txt{flex:0 0 auto;font-family:var(--font-display);font-weight:400;font-size:26px;letter-spacing:.03em;color:#fff;opacity:.9;white-space:nowrap;}
  body.litcopy .logos-kick{}
  @media(prefers-reduced-motion:reduce){.logos-track{animation:none;flex-wrap:wrap;justify-content:center;width:auto;max-width:1180px;gap:34px 56px;}}

  /* ── live project demo tiles (pure CSS, no external assets) ── */
  .sw-media.app{display:grid;place-items:center;background:linear-gradient(150deg,rgba(22,32,43,.9),rgba(8,22,48,.96));}
  .proj-demo{width:100%;height:100%;position:relative;display:flex;flex-direction:column;justify-content:center;gap:10px;padding:clamp(18px,2.6vw,30px);overflow:hidden;font-family:var(--font-mono);color:#fff;}
  /* fried viper — agent terminal */
  .pd-viper{gap:7px;justify-content:flex-start;padding-top:clamp(22px,3vw,34px);}
  .pd-term{display:flex;flex-direction:column;gap:7px;width:100%;}
  .pd-bar{display:flex;align-items:center;gap:5px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.14);}
  .pd-bar i{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.25);}
  .pd-bar i:first-child{background:#ff8f8f;}.pd-bar i:nth-child(2){background:#ffd95b;}.pd-bar i:nth-child(3){background:#5fd29a;}
  .pd-bar span{margin-left:7px;font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .pd-agent{display:flex;align-items:center;gap:8px;font-size:11px;letter-spacing:.03em;color:rgba(255,255,255,.85);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:6px 10px;}
  .pd-dot{flex:0 0 auto;width:7px;height:7px;border-radius:50%;}
  .pd-dot.d1{background:#5fd29a;box-shadow:0 0 8px rgba(95,210,154,.8);animation:pdBlink 1.8s ease-in-out infinite;}
  .pd-dot.d2{background:#ffd95b;box-shadow:0 0 8px rgba(255,217,91,.7);animation:pdBlink 1.8s .6s ease-in-out infinite;}
  .pd-dot.d3{background:#7db8ff;box-shadow:0 0 8px rgba(125,184,255,.7);animation:pdBlink 1.8s 1.2s ease-in-out infinite;}
  @keyframes pdBlink{0%,100%{opacity:.45}50%{opacity:1}}
  .pd-msg{color:rgba(255,255,255,.55);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .pd-cursor{font-size:13px;color:#5fd29a;animation:pdBlink 1s steps(1) infinite;}
  /* lyrical video — waveform + synced line */
  .pd-lyric{align-items:center;text-align:center;}
  .pd-bars{display:flex;align-items:flex-end;gap:5px;height:44px;}
  .pd-bars i{width:7px;border-radius:3px;background:linear-gradient(180deg,#7db8ff,#0083E7);animation:pdEq 1.15s ease-in-out infinite alternate;}
  .pd-bars i:nth-child(odd){height:60%;}
  .pd-bars i:nth-child(even){height:92%;animation-duration:.9s;}
  @keyframes pdEq{from{transform:scaleY(.45)}to{transform:scaleY(1.12)}}
  .pd-line{font-size:12.5px;letter-spacing:.06em;color:rgba(255,255,255,.45);transition:color .3s;}
  .pd-line.on{color:#fff;text-shadow:0 0 14px rgba(125,184,255,.9);}
  .pd-1080{position:absolute;right:14px;top:12px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:3px 9px;}
  /* music profile — profile card */
  .pd-music{gap:14px;}
  .pd-profile{display:flex;align-items:center;gap:12px;}
  .pd-av{flex:0 0 auto;width:52px;height:52px;border-radius:50%;background:radial-gradient(circle at 32% 28%,#7db8ff,#0083E7 70%);box-shadow:0 8px 20px rgba(0,131,231,.4);}
  .pd-profile b{display:block;font-family:var(--font-display);font-weight:700;font-size:15px;letter-spacing:-.01em;}
  .pd-profile small{display:block;margin-top:3px;font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.55);}
  .pd-chips{display:flex;flex-wrap:wrap;gap:6px;}
  .pd-chips span{font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:4px 10px;}
  /* aniquest — poster grid + command palette */
  .pd-ani{gap:12px;}
  .pd-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%;}
  .pd-grid i{aspect-ratio:3/4;border-radius:7px;background:linear-gradient(145deg,rgba(125,184,255,.55),rgba(0,131,231,.28));border:1px solid rgba(255,255,255,.16);}
  .pd-grid i:nth-child(2){background:linear-gradient(145deg,rgba(255,217,91,.5),rgba(255,143,143,.3));}
  .pd-grid i:nth-child(3){background:linear-gradient(145deg,rgba(95,210,154,.5),rgba(0,131,231,.25));}
  .pd-grid i:nth-child(6){background:linear-gradient(145deg,rgba(255,255,255,.3),rgba(125,184,255,.2));}
  .pd-cmd{width:100%;font-size:10.5px;letter-spacing:.05em;color:rgba(255,255,255,.72);background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);border-radius:9px;padding:8px 12px;}
  .pd-cmd::before{content:"⌘ ";opacity:.6;}
  /* forex — sparkline */
  .pd-forex{gap:10px;}
  .pd-forex svg{width:100%;height:clamp(64px,8vw,96px);}
  .pd-buy{align-self:flex-start;font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:#5fd29a;border:1px solid rgba(95,210,154,.5);border-radius:999px;padding:4px 10px;background:rgba(95,210,154,.1);}
  @media(prefers-reduced-motion:reduce){.pd-bars i,.pd-dot,.pd-cursor{animation:none!important;}}` }} />
<style dangerouslySetInnerHTML={{ __html: `.ai-skills{position:relative;z-index:8;padding:var(--sp-section) 0;}
  .ai-skills .ai-wrap{max-width:1180px;}
  .toolbelt{margin-top:clamp(36px,6vh,64px);padding-top:clamp(20px,3vh,30px);border-top:1px solid rgba(255,255,255,.35);display:flex;gap:18px;align-items:baseline;flex-wrap:wrap;}
  .toolbelt-k{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.72);flex:0 0 auto;}
  .toolbelt-chips{display:flex;flex-wrap:wrap;gap:7px;}
  .toolbelt-chips span{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.04em;color:#fff;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);padding:4px 11px;border-radius:999px;white-space:nowrap;transition:background .25s ease,transform .25s ease;}
  .toolbelt-chips span:hover{background:rgba(255,255,255,.26);transform:translateY(-2px);}
  body.nightsky .toolbelt{border-top-color:rgba(255,255,255,.22);}
  .skills-grid{display:grid;grid-template-columns:minmax(170px,290px) 1fr;gap:clamp(28px,5vw,88px);align-items:start;}
  .skills-aside{position:sticky;top:clamp(96px,20vh,180px);}
  .skills-kick{font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.82);}
  .skills-aside h2{font-family:var(--font-display);font-weight:900;text-transform:lowercase;letter-spacing:-.025em;font-size:var(--fs-h2);line-height:.96;color:#fff;margin-top:14px;}
  .skills-aside p{font-family:var(--font-text);font-size:15px;line-height:1.6;color:rgba(255,255,255,.72);margin-top:14px;max-width:240px;}
  .skills-list{display:flex;flex-direction:column;}
  .skill-row{display:flex;align-items:baseline;justify-content:space-between;gap:24px;padding:clamp(15px,2.3vh,24px) 0;border-top:1px solid rgba(255,255,255,.16);}
  .skill-row:last-child{border-bottom:1px solid rgba(255,255,255,.16);}
  .skill-name{display:flex;align-items:baseline;gap:clamp(12px,1.4vw,20px);}
  .skill-idx{font-family:var(--font-mono);font-size:12px;font-weight:500;letter-spacing:.04em;color:rgba(255,255,255,.3);transition:color .55s var(--ease);}
  .skill-ttl{font-family:var(--font-display);font-weight:500;text-transform:lowercase;letter-spacing:-.02em;font-size:clamp(28px,4.2vw,48px);line-height:1.02;color:rgba(255,255,255,.34);transition:color .55s var(--ease),transform .55s var(--ease);}
  .skill-tools{font-family:var(--font-mono);font-size:12px;letter-spacing:.03em;color:rgba(255,255,255,.24);text-align:right;white-space:nowrap;transition:color .55s var(--ease),opacity .55s var(--ease);align-self:center;}
  .skill-row.in .skill-idx{color:rgba(255,255,255,.72);}
  .skill-row.in .skill-ttl{color:#fff;transform:translateX(clamp(6px,.7vw,12px));}
  .skill-row.in .skill-tools{color:rgba(255,255,255,.78);}
  @media(max-width:760px){
    .skills-grid{grid-template-columns:1fr;gap:clamp(22px,4vh,34px);}
    .skills-aside{position:static;}
    .skill-row{flex-direction:column;align-items:flex-start;gap:8px;}
    .skill-tools{text-align:left;align-self:flex-start;}
    .skill-row.in .skill-ttl{transform:none;}
  }
  @media(prefers-reduced-motion:reduce){
    .skill-idx,.skill-ttl,.skill-tools{color:#fff!important;}
    .skill-tools{color:rgba(255,255,255,.78)!important;}
  }
  
  /* Credentials & Championships — refined glass, timeline rail, medal tints */
  .ai-creds {
    position: relative;
    z-index: 8;
    padding: var(--sp-section) 0;
  }
  .ai-creds .ai-wrap {
    max-width: 1180px;
  }
  .creds-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(28px, 5vw, 72px);
    align-items: start;
  }
  .creds-col {
    display: flex;
    flex-direction: column;
  }
  .creds-col-ttl {
    margin-bottom: 18px;
  }
  .creds-col-ttl h3 {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: clamp(24px, 3.4vw, 36px);
    line-height: 1.05;
    letter-spacing: -.025em;
    color: var(--ink);
    margin-top: 12px;
  }
  .creds-col-ttl h3 em {
    font-style: italic;
    color: var(--accent);
  }
  /* vertical rail threading the cards together */
  .creds-rail {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-left: 26px;
  }
  .creds-rail::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 14px;
    bottom: 14px;
    width: 1.5px;
    background: linear-gradient(180deg, rgba(22,32,43,.28), rgba(22,32,43,.06));
    border-radius: 2px;
  }
  .creds-node {
    position: absolute;
    left: -26px;
    top: 26px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--accent);
    box-shadow: 0 0 0 3px rgba(255,255,255,.55);
  }
  .creds-card {
    position: relative;
    background: linear-gradient(165deg, rgba(255,255,255,.72), rgba(255,255,255,.44));
    -webkit-backdrop-filter: blur(14px) saturate(1.3);
    backdrop-filter: blur(14px) saturate(1.3);
    border: 1px solid rgba(255,255,255,.75);
    border-radius: 16px;
    padding: 20px 24px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.8), 0 18px 38px -26px rgba(20,42,84,.28);
    transition: transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s ease, border-color .35s ease;
  }
  .creds-card:hover {
    transform: translateY(-3px);
    border-color: rgba(255,255,255,.95);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.9), 0 26px 48px -24px rgba(20,42,84,.38);
  }
  /* medal-tinted inner edge per tier */
  .creds-card.medal-gold   { box-shadow: inset 0 1px 0 rgba(255,255,255,.8), inset 3px 0 0 rgba(198,160,74,.9), 0 18px 38px -26px rgba(20,42,84,.28); }
  .creds-card.medal-silver { box-shadow: inset 0 1px 0 rgba(255,255,255,.8), inset 3px 0 0 rgba(154,160,166,.9), 0 18px 38px -26px rgba(20,42,84,.28); }
  .creds-card.medal-bronze { box-shadow: inset 0 1px 0 rgba(255,255,255,.8), inset 3px 0 0 rgba(176,124,84,.9), 0 18px 38px -26px rgba(20,42,84,.28); }
  .creds-card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .creds-card-date {
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--muted, var(--soft));
    font-weight: 500;
  }
  /* mono pill badges — no emoji; medal tiers get their metal tint */
  .creds-card-badge,
  .creds-medal {
    font-family: var(--font-mono);
    font-size: 9.5px;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #fff;
    background: var(--accent);
    padding: 4px 10px;
    border-radius: 999px;
    font-weight: 500;
    white-space: nowrap;
  }
  .creds-card.medal-gold .creds-medal   { background: linear-gradient(180deg,#e8cf8e,#c6a04a); color:#1a1305; }
  .creds-card.medal-silver .creds-medal { background: linear-gradient(180deg,#e3e6ea,#9aa0a6); color:#14181d; }
  .creds-card.medal-bronze .creds-medal { background: linear-gradient(180deg,#d8a97f,#b07c54); color:#1d1208; }
  .creds-card-title {
    font-family: var(--font-display);
    font-size: clamp(17px, 2vw, 20px);
    font-weight: 700;
    color: var(--ink);
    line-height: 1.25;
    margin-bottom: 4px;
  }
  .creds-card-subtitle {
    font-family: var(--font-display);
    font-size: 13.5px;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 10px;
  }
  .creds-card-desc {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--soft);
  }
  @media(max-width: 820px) {
    .creds-grid {
      grid-template-columns: 1fr;
      gap: 44px;
    }
  }

  /* ─── work experience — glass timeline (matches credentials) ─── */
  .wx-sec {
    position: relative;
    z-index: 8;
    padding: var(--sp-section) 0;
  }
  .wx-sec .ai-wrap {
    max-width: 1020px;
  }
  .wx-head {
    margin-bottom: clamp(26px, 4vh, 44px);
  }
  .wx-head .ai-big { margin-top: 12px; }
  .wx-head .ai-big em { font-style: italic; color: var(--accent); }
  .wx-sub {
    font-size: 15px;
    color: var(--soft);
    max-width: 460px;
    margin-top: 8px;
  }
  .wx-rail {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-left: 30px;
  }
  .wx-rail::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 18px;
    bottom: 18px;
    width: 1.5px;
    background: linear-gradient(180deg, rgba(22,32,43,.3), rgba(22,32,43,.06));
    border-radius: 2px;
  }
  .wx-node {
    position: absolute;
    left: -30px;
    top: 30px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--accent);
    box-shadow: 0 0 0 3px rgba(255,255,255,.55);
  }
  .wx-card {
    position: relative;
    display: flex;
    gap: clamp(18px, 3vw, 30px);
    background: linear-gradient(165deg, rgba(255,255,255,.72), rgba(255,255,255,.44));
    -webkit-backdrop-filter: blur(14px) saturate(1.3);
    backdrop-filter: blur(14px) saturate(1.3);
    border: 1px solid rgba(255,255,255,.75);
    border-radius: 18px;
    padding: clamp(20px, 3vw, 28px) clamp(20px, 3vw, 30px);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.8), 0 20px 42px -28px rgba(20,42,84,.3);
    transition: transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s ease, border-color .35s ease;
  }
  .wx-card:hover {
    transform: translateY(-3px);
    border-color: rgba(255,255,255,.95);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.9), 0 30px 54px -26px rgba(20,42,84,.4);
  }
  .wx-card.is-now {
    border-color: rgba(47,108,184,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.85), inset 3px 0 0 rgba(47,108,184,.85), 0 20px 42px -28px rgba(20,42,84,.32);
  }
  .wx-side {
    flex: 0 0 118px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
  .wx-logo {
    width: 62px;
    height: 62px;
    border-radius: 16px;
    background: #fff;
    border: 1px solid rgba(255,255,255,.9);
    box-shadow: 0 8px 18px -10px rgba(20,42,84,.35), inset 0 1px 0 rgba(255,255,255,.9);
    display: grid;
    place-items: center;
    overflow: hidden;
  }
  .wx-logo img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    border-radius: 10px;
  }
  .wx-when {
    font-family: var(--font-mono);
    font-size: 9.5px;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--muted, var(--soft));
    line-height: 1.5;
  }
  .wx-now {
    font-family: var(--font-mono);
    font-size: 8.5px;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: #fff;
    background: linear-gradient(180deg,#4f92d6,#2f6cb8);
    padding: 3px 9px;
    border-radius: 999px;
    font-weight: 600;
    white-space: nowrap;
  }
  .wx-main { flex: 1; min-width: 0; }
  .wx-role {
    font-family: var(--font-display);
    font-size: clamp(18px, 2.2vw, 23px);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.01em;
    color: var(--ink);
  }
  .wx-role em { font-style: italic; color: var(--accent); }
  .wx-org {
    font-family: var(--font-display);
    font-size: 13px;
    font-weight: 600;
    color: var(--accent);
    margin-top: 3px;
  }
  .wx-mission {
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: .04em;
    color: var(--muted, var(--soft));
    margin-top: 6px;
  }
  .wx-points {
    list-style: none;
    padding: 0;
    margin: 12px 0 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .wx-points li {
    position: relative;
    padding-left: 18px;
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--soft);
  }
  .wx-points li::before {
    content: "";
    position: absolute;
    left: 2px;
    top: .58em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(180deg,#7db4e4,#2f6cb8);
  }
  .wx-points b { color: var(--ink); font-weight: 600; }
  .wx-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 14px;
  }
  .wx-tags span {
    font-family: var(--font-mono);
    font-size: 9.5px;
    letter-spacing: .05em;
    text-transform: lowercase;
    color: var(--ink);
    background: rgba(255,255,255,.66);
    border: 1px solid rgba(22,32,43,.14);
    padding: 3.5px 10px;
    border-radius: 999px;
    white-space: nowrap;
  }
  .wx-links {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 14px;
  }
  .wx-links a {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: .06em;
    color: var(--accent);
    text-decoration: none;
    border-bottom: 1px solid rgba(47,108,184,.35);
    padding-bottom: 2px;
    transition: border-color .25s ease, color .25s ease;
  }
  .wx-links a:hover { color: #1c4f92; border-color: #1c4f92; }
  @media(max-width: 720px) {
    .wx-card { flex-direction: column; }
    .wx-side {
      flex-direction: row;
      flex: 0 0 auto;
      width: 100%;
      text-align: left;
      align-items: center;
    }
    .wx-logo { width: 46px; height: 46px; border-radius: 12px; }
    .wx-node { top: 24px; }
  }
  ` }} />
<style dangerouslySetInnerHTML={{ __html: `.ai-stage{position:relative;z-index:8;padding:var(--sp-section) 0;}
  .ai-stage .ai-wrap{max-width:1180px;}
  .ai-stage-head{margin-bottom:clamp(28px,4vh,44px);}
  .ai-stage-head .ai-big{white-space:nowrap;color:#fff;}
  .ai-stage-head .ai-big em{color:#fff;}
  @media (max-width:640px){.ai-stage-head .ai-big{white-space:normal;}}
  /* ── curved draggable conference gallery ── */
  .cgal{position:relative;height:clamp(340px,52vh,540px);overflow:hidden;perspective:1300px;cursor:grab;-webkit-tap-highlight-color:transparent;touch-action:pan-y;}
  .cgal.drag{cursor:grabbing;}
  .cgal-track{position:absolute;inset:0;transform-style:preserve-3d;}
  .cgal-item{position:absolute;top:50%;left:0;width:clamp(200px,23vw,320px);height:clamp(270px,37vh,420px);transform-origin:center center;will-change:transform;border-radius:16px;overflow:hidden;box-shadow:0 30px 60px -30px rgba(8,22,48,.55);background:#0b1830;}
  .cgal-item img{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;-webkit-user-drag:none;user-select:none;}
  .cgal-cap{position:absolute;left:0;right:0;bottom:0;padding:18px 16px 14px;background:linear-gradient(0deg,rgba(8,16,30,.7),transparent);}
  .cgal-cap .t{font-family:var(--font-display);font-weight:700;font-size:18px;color:#fff;}
  .cgal-cap .m{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:3px;}
  .cgal-hint{text-align:center;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-top:20px;}
  .ai-stage-sub{font-family:var(--font-text);font-size:16px;line-height:1.6;color:rgba(255,255,255,.9);margin-top:16px;max-width:520px;}
  .stage-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(218px,1fr));gap:16px;}
  .stage-card{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:3/4;margin:0;background:#1c2630;
    box-shadow:0 30px 60px -38px rgba(28,40,60,.5);transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s;}
  .stage-card:hover{transform:translateY(-5px);box-shadow:0 40px 72px -40px rgba(28,40,60,.6);}
  .stage-card img,.stage-card video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(.16,1,.3,1);}
  .stage-card:hover img,.stage-card:hover video{transform:scale(1.05);}
  .stage-card figcaption{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:36px 16px 16px;
    background:linear-gradient(transparent,rgba(16,22,16,.82));}
  .stage-card .t{font-family:var(--font-display);font-weight:400;font-size:20px;color:#fff;line-height:1.08;}
  .stage-card .m{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.8);margin-top:7px;}` }} />
<style dangerouslySetInnerHTML={{ __html: `.abtme{position:relative;z-index:8;padding:var(--sp-section) 0;}
  .abtme .ai-wrap{max-width:1180px;}
  .abtme .ai-big,.abtme .ai-big em{color:#fff;}
  .abtme-card{position:relative;overflow:hidden;margin-top:42px;display:flex;align-items:center;gap:clamp(26px,4.5vw,64px);
    padding:clamp(26px,4.5vw,52px);border-radius:26px;
    border:1px solid rgba(255,255,255,.55);
    background:rgba(255,255,255,.16);backdrop-filter:blur(20px) saturate(1.4);-webkit-backdrop-filter:blur(20px) saturate(1.4);
    box-shadow:0 14px 38px -20px rgba(8,22,48,.3),inset 0 1px 0 rgba(255,255,255,.55);
    text-decoration:none;color:inherit;cursor:pointer;
    transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .45s var(--ease);}
  .abtme-card:hover{transform:translateY(-5px);border-color:rgba(255,255,255,.85);
    box-shadow:0 30px 60px -26px rgba(8,22,48,.45),inset 0 1px 0 rgba(255,255,255,.7);}
  .abtme-card:focus-visible{outline:2px solid #fff;outline-offset:4px;}
  body.nightsky .abtme-card{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.28);}
  /* aurora: two blurred blob layers drifting slowly in opposite directions (transform-only, GPU-cheap) */
  .abtme-aur,.abtme-aur2{position:absolute;inset:-45%;pointer-events:none;filter:blur(46px) saturate(1.15);will-change:transform;}
  .abtme-aur{opacity:.8;background:
    radial-gradient(38% 45% at 68% 30%, rgba(255,150,195,.8), transparent 66%),
    radial-gradient(42% 52% at 86% 66%, rgba(255,206,150,.75), transparent 66%),
    radial-gradient(46% 56% at 28% 78%, rgba(146,168,255,.7), transparent 66%);
    animation:abtmeAur 26s ease-in-out infinite alternate;}
  .abtme-aur2{opacity:.6;background:
    radial-gradient(34% 42% at 20% 25%, rgba(168,235,255,.7), transparent 64%),
    radial-gradient(30% 38% at 55% 85%, rgba(255,244,178,.65), transparent 64%);
    animation:abtmeAur2 34s ease-in-out infinite alternate;}
  @keyframes abtmeAur{from{transform:translate(-4%,-6%) rotate(0deg) scale(1);}to{transform:translate(6%,7%) rotate(26deg) scale(1.18);}}
  @keyframes abtmeAur2{from{transform:translate(5%,6%) rotate(0deg) scale(1.12);}to{transform:translate(-6%,-5%) rotate(-22deg) scale(1);}}
  body.nightsky .abtme-aur{opacity:.5;} body.nightsky .abtme-aur2{opacity:.35;}
  @media(prefers-reduced-motion:reduce){.abtme-aur,.abtme-aur2{animation:none;}}
  .abtme-card > *:not(.abtme-aur):not(.abtme-aur2){position:relative;z-index:1;}
  .abtme-photo{display:block;flex:0 0 clamp(150px,17vw,210px);background:#fff;padding:9px 9px 30px;border-radius:6px;
    box-shadow:0 16px 34px -14px rgba(8,22,48,.4);transform:rotate(-3.5deg);
    transition:transform .4s var(--ease),box-shadow .4s var(--ease);text-decoration:none;}
  .abtme-photo img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;border-radius:3px;}
  .abtme-cap{display:block;margin-top:9px;font-family:var(--font-mono);font-size:9.5px;letter-spacing:.14em;
    text-transform:uppercase;color:#6b7688;text-align:center;}
  .abtme-card:hover .abtme-photo{transform:rotate(-1.2deg) translateY(-5px);box-shadow:0 24px 44px -16px rgba(8,22,48,.5);}
  .abtme-copy{flex:1 1 auto;}
  .abtme-copy p{margin:0;font-family:var(--font-display);font-weight:500;font-size:clamp(19px,2.3vw,28px);
    line-height:1.5;letter-spacing:-.01em;color:#fff;text-transform:lowercase;
    text-shadow:0 1px 14px rgba(30,50,90,.18);}
  .abtme-copy .pull{font-style:italic;color:#fff;font-weight:700;text-shadow:0 1px 14px rgba(30,50,90,.22);}
  @media(max-width:760px){
    .abtme-card{flex-direction:column;text-align:center;gap:26px;}
    .abtme-photo{flex-basis:auto;width:min(62vw,220px);}
  }` }} />
<style dangerouslySetInnerHTML={{ __html: `.tmn{position:relative;z-index:8;padding:var(--sp-section) 0;}
  .tmn .ai-wrap{max-width:1180px;}
  .tmn .ai-big,.tmn .ai-big em{color:#fff;}
  .tmn{overflow:hidden;}
  /* dual-row marquee: rows glide opposite ways, pause on hover, edges fade */
  .tmn-rows{margin-top:42px;display:flex;flex-direction:column;gap:20px;
    -webkit-mask-image:linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent);
    mask-image:linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent);}
  .tmn-row{overflow:hidden;}
  .tmn-src{margin-top:22px;text-align:center;font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:var(--soft);}
  .tmn-src a{color:var(--accent);text-decoration:none;border-bottom:1px solid rgba(47,108,184,.35);padding-bottom:1px;}
  .tmn-src a:hover{border-color:var(--accent);}
  .tmn-track{display:flex;gap:20px;width:max-content;will-change:transform;}
  .tmn-row.r1 .tmn-track{animation:tmnMqL 64s linear infinite;}
  .tmn-row.r2 .tmn-track{animation:tmnMqR 76s linear infinite;}
  .tmn-row:hover .tmn-track{animation-play-state:paused;}
  @keyframes tmnMqL{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  @keyframes tmnMqR{from{transform:translateX(-50%)}to{transform:translateX(0)}}
  @media (prefers-reduced-motion:reduce){.tmn-track{animation:none!important;}
    .tmn-rows{-webkit-mask-image:none;mask-image:none;}.tmn-row{overflow-x:auto;}}
  /* clean card */
  .tmn-card{flex:0 0 clamp(288px,29vw,344px);box-sizing:border-box;padding:24px 26px 22px;border-radius:18px;
    border:1px solid rgba(255,255,255,.6);
    background:rgba(255,255,255,.5);backdrop-filter:blur(20px) saturate(1.4);-webkit-backdrop-filter:blur(20px) saturate(1.4);
    box-shadow:0 14px 38px -20px rgba(8,22,48,.3),inset 0 1px 0 rgba(255,255,255,.7);
    display:flex;flex-direction:column;justify-content:space-between;min-height:190px;
    transition:transform .3s var(--ease),box-shadow .3s var(--ease),border-color .3s var(--ease),background .3s var(--ease);}
  .tmn-card:hover{transform:translateY(-5px);border-color:rgba(255,255,255,.92);background:rgba(255,255,255,.62);
    box-shadow:0 28px 56px -24px rgba(8,22,48,.45),inset 0 1px 0 rgba(255,255,255,.85);}
  .tmn-card p{margin:0;font-size:15px;line-height:1.6;color:var(--ink);}
  .tmn-card .pull{font-style:italic;color:#2f6cb8;font-weight:500;}
  body.nightsky .tmn-card{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.3);}
  body.nightsky .tmn-card p{color:#EDF1E6;} body.nightsky .tmn-card .pull{color:#a9d2ff;}
  .tmn-who{margin-top:20px;display:flex;align-items:center;gap:11px;}
  .tmn-av{width:38px;height:38px;border-radius:50%;flex:0 0 auto;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.7);}
  .tmn-av img{width:100%;height:100%;object-fit:cover;display:block;}
  .tmn-nm{font-family:var(--font-display);font-weight:600;font-size:13.5px;color:var(--ink);line-height:1.2;}
  body.nightsky .tmn-nm{color:#fff;}
  .tmn-rl{font-family:var(--font-mono);font-size:9.5px;text-transform:uppercase;letter-spacing:.05em;color:var(--soft);margin-top:3px;line-height:1.35;}
  body.nightsky .tmn-rl{color:#bcc7b0;}` }} />
<style dangerouslySetInnerHTML={{ __html: `/* topmate mentor band — glass intro + official badge grid */
  .ai-topmate{position:relative;z-index:8;padding:var(--sp-section) 0;}
  .ai-topmate .ai-wrap{max-width:1180px;}
  .tm-grid{display:grid;grid-template-columns:minmax(280px,420px) 1fr;gap:clamp(28px,5vw,72px);align-items:center;}
  .tm-intro .eyebrow{color:rgba(255,255,255,.85);}
  .ai-topmate .ai-big,.ai-topmate .ai-big em{color:#fff;}
  .tm-sub{font-size:15px;line-height:1.6;color:rgba(255,255,255,.85);margin-top:16px;max-width:380px;}
  .tm-sub b{color:#fff;font-weight:600;}
  .tm-nums{display:flex;gap:clamp(18px,2.6vw,34px);margin-top:24px;}
  .tm-num{display:flex;flex-direction:column;gap:5px;}
  .tm-n{font-family:var(--font-display);font-weight:900;font-size:clamp(24px,3vw,34px);line-height:1;color:#fff;font-variant-numeric:tabular-nums;letter-spacing:-.02em;}
  .tm-n em{font-style:normal;font-weight:500;font-size:.48em;opacity:.7;margin-left:2px;}
  .tm-l{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.62);}
  .tm-cta{display:inline-flex;align-items:center;gap:9px;margin-top:26px;font-family:var(--font-mono);font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;
    color:#16202b;background:#fff;border-radius:999px;padding:12px 20px;text-decoration:none;box-shadow:0 12px 26px -12px rgba(8,22,48,.5);transition:transform .3s var(--ease),box-shadow .3s var(--ease);}
  .tm-cta:hover{transform:translateY(-2px);box-shadow:0 18px 34px -14px rgba(8,22,48,.55);}
  .tm-cta i{font-style:normal;transition:transform .3s var(--ease);}
  .tm-cta:hover i{transform:translate(2px,-2px);}
  .tm-badges{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
  .tm-badge{display:flex;flex-direction:column;align-items:center;text-align:center;gap:7px;text-decoration:none;
    background:rgba(255,255,255,.14);-webkit-backdrop-filter:blur(12px) saturate(1.25);backdrop-filter:blur(12px) saturate(1.25);
    border:1px solid rgba(255,255,255,.3);border-radius:16px;padding:16px 10px 13px;
    transition:transform .35s var(--ease),background .3s ease,border-color .3s ease,box-shadow .35s ease;}
  .tm-badge:hover{transform:translateY(-5px);background:rgba(255,255,255,.22);border-color:rgba(255,255,255,.55);box-shadow:0 20px 40px -20px rgba(8,22,48,.5);}
  .tm-badge img{width:64px;height:64px;border-radius:14px;box-shadow:0 10px 22px -8px rgba(8,22,48,.55);transition:transform .35s var(--ease);}
  .tm-badge:hover img{transform:scale(1.08) rotate(-2deg);}
  .tm-bt{font-family:var(--font-display);font-weight:700;font-size:12.5px;letter-spacing:-.01em;color:#fff;line-height:1.1;}
  .tm-bs{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.6);}
  body.nightsky .tm-badge{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.22);}
  @media(max-width:900px){.tm-grid{grid-template-columns:1fr;}.tm-badges{grid-template-columns:repeat(4,1fr);}}
  @media(max-width:560px){.tm-badges{grid-template-columns:repeat(2,1fr);}.tm-badge img{width:56px;height:56px;}}
  @media(prefers-reduced-motion:reduce){.tm-badge,.tm-badge img,.tm-cta{transition:none;}}` }} />
<style dangerouslySetInnerHTML={{ __html: `.cf-sec{position:relative;z-index:8;background:linear-gradient(180deg,#5d92d8 0%,#7eaee6 52%,#a7ccef 100%);padding:clamp(72px,12vh,140px) var(--edge,max(22px,8%));overflow:hidden;}
  .cf-wrap{max-width:1200px;margin:0 auto;}
  .cf-k{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.82);}
  .cf-h{font-family:var(--font-display);font-weight:500;font-size:clamp(34px,6vw,74px);letter-spacing:-.02em;line-height:1;color:#fff;margin:12px 0 0;text-transform:lowercase;}
  .cf-sub{margin-top:16px;font-family:var(--font-display);font-size:clamp(15px,1.6vw,19px);line-height:1.5;color:rgba(255,255,255,.92);max-width:48ch;}
  .cf-stage{position:relative;height:clamp(340px,50vh,500px);margin-top:clamp(22px,4vh,46px);perspective:1700px;touch-action:pan-y;}
  .cf-card{position:absolute;top:50%;left:50%;width:clamp(280px,32vw,430px);aspect-ratio:4/3;border-radius:18px;overflow:hidden;cursor:pointer;transform-style:preserve-3d;will-change:transform,opacity;background:transparent;transition:transform .6s cubic-bezier(.22,1,.36,1),opacity .6s,box-shadow .6s;box-shadow:0 26px 56px -34px rgba(13,28,58,.45);}
  .cf-card img,.cf-card video{width:100%;height:100%;object-fit:cover;object-position:center 30%;display:block;}
  .cf-card .cap{position:absolute;left:0;right:0;bottom:0;padding:46px 22px 18px;background:linear-gradient(transparent,rgba(11,22,46,.7));pointer-events:none;}
  .cf-card .cap .t{font-family:var(--font-display);font-weight:500;font-size:22px;color:#fff;text-transform:lowercase;letter-spacing:-.01em;display:block;}
  .cf-card .cap .s{display:block;margin-top:4px;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.82);}
  .cf-card .play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:62px;height:62px;border-radius:50%;background:rgba(255,255,255,.94);display:grid;place-items:center;color:#16202b;font-size:18px;box-shadow:0 12px 30px -8px rgba(0,0,0,.45);}
  .cf-nav{display:flex;gap:12px;justify-content:center;margin-top:28px;}
  .cf-nav button{width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.55);background:rgba(255,255,255,.16);-webkit-backdrop-filter:blur(9px);backdrop-filter:blur(9px);color:#fff;font-size:18px;cursor:pointer;transition:background .2s,transform .2s;}
  .cf-nav button:hover{background:rgba(255,255,255,.3);transform:translateY(-2px);}
  @media(max-width:700px){.cf-card{width:76vw;}}` }} />
<style dangerouslySetInnerHTML={{ __html: `.ground{position:relative;z-index:8;width:100%;min-height:clamp(440px,68vh,620px);overflow:hidden;
    background:transparent;}
  .ground .grass-footer{position:absolute;inset:0;width:100%;height:100%;overflow:hidden;user-select:none;isolation:isolate;background:transparent;z-index:1;}
  .ground .grass-footer canvas{position:absolute;inset:0;width:100%;height:100%;display:block;}
  .ground .grass-footer .gf-grass{z-index:1;touch-action:none;}
  .ground .grass-footer .gf-fx{z-index:2;pointer-events:none;}
  .ground-veil{display:none;}
  .ground.is-night .ground-veil{background:linear-gradient(180deg,rgba(16,24,40,.5) 0%,rgba(16,24,40,.22) 30%,rgba(16,24,40,0) 56%);}
  .ground-contact{position:relative;z-index:5;max-width:1180px;margin:0 auto;padding:var(--sp-section) var(--edge) clamp(110px,16vh,180px);}
  .ground-kick{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.72);}
  .ground-ttl{font-family:var(--font-display);font-weight:400;letter-spacing:-.02em;font-size:var(--fs-h2);line-height:1;color:#f4f7fc;margin-top:12px;}
  .ground-ttl em{font-style:italic;color:inherit;}
  .ground-mail{position:relative;overflow:hidden;isolation:isolate;display:inline-flex;align-items:center;gap:16px;text-decoration:none;margin-top:clamp(20px,3vh,32px);
    font-family:var(--font-display);font-size:clamp(19px,2.3vw,28px);color:#fff;
    background:rgba(255,255,255,.14);-webkit-backdrop-filter:blur(16px) saturate(1.6);backdrop-filter:blur(16px) saturate(1.6);
    border:1px solid rgba(255,255,255,.5);border-radius:14px;padding:15px 30px;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.7), inset 0 -10px 24px -12px rgba(255,255,255,.25), 0 16px 40px -18px rgba(20,42,84,.55);
    transition:color .35s var(--ease),border-color .35s var(--ease),transform .5s cubic-bezier(.2,.9,.25,1),box-shadow .5s var(--ease);}
  /* translucent sky-glass fill that wipes up from the bottom on hover */
  .ground-mail::after{content:"";position:absolute;inset:0;z-index:-1;border-radius:inherit;
    background:linear-gradient(135deg,rgba(47,108,184,.72),rgba(0,131,231,.66) 46%,rgba(90,147,207,.6));background-size:200% 200%;
    clip-path:inset(100% 0 0 0);transition:clip-path .55s cubic-bezier(.2,.9,.25,1);animation:gmDrift 6s ease infinite;}
  @keyframes gmDrift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
  /* specular shine that glides across on hover */
  .ground-mail::before{content:"";position:absolute;top:0;left:-65%;width:48%;height:100%;z-index:2;pointer-events:none;
    background:linear-gradient(105deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-18deg);transition:left .65s var(--ease);}
  .ground-mail:hover{color:#fff;border-color:rgba(255,255,255,.8);transform:translateY(-3px) scale(1.02);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.85), 0 24px 54px -16px rgba(0,131,231,.55);}
  .ground-mail:hover::after{clip-path:inset(0 0 0 0);}
  .ground-mail:hover::before{left:135%;}
  /* arrow swaps: flies out right, a fresh one slides in from the left */
  .ground-mail .arw{position:relative;display:inline-block;width:1em;height:1em;overflow:hidden;line-height:1;}
  .ground-mail .arw i{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-style:normal;transition:transform .45s cubic-bezier(.2,.9,.25,1);}
  .ground-mail .arw i:nth-child(2){transform:translateX(-170%);}
  .ground-mail:hover .arw i:nth-child(1){transform:translateX(170%);}
  .ground-mail:hover .arw i:nth-child(2){transform:translateX(0);}
  .ground-sub{font-family:var(--font-text);font-size:15px;line-height:1.6;color:#e6edf7;margin-top:20px;max-width:430px;}
  .ground-sub b{color:#fff;font-weight:500;}
  /* ── richer footer ── */
  .gf-top{display:grid;grid-template-columns:1.25fr 1fr;gap:clamp(36px,6vw,84px);align-items:start;}
  .gf-cols{display:flex;gap:clamp(26px,4vw,60px);flex-wrap:wrap;}
  .gf-col{display:flex;flex-direction:column;gap:11px;}
  .gf-h{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.52);margin-bottom:3px;}
  .gf-col a{font-family:var(--font-text);font-size:15px;color:#e6edf7;text-decoration:none;width:fit-content;transition:color .2s,transform .25s var(--ease);}
  .gf-col a:hover{color:#fff;transform:translateX(3px);}
  .gf-avail{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-text);font-size:15px;color:#fff;}
  .gf-avail i{width:8px;height:8px;border-radius:50%;background:#5fd29a;box-shadow:0 0 0 0 rgba(95,210,154,.6);animation:gfPulse 2.2s infinite;}
  @keyframes gfPulse{0%{box-shadow:0 0 0 0 rgba(95,210,154,.5)}70%{box-shadow:0 0 0 7px rgba(95,210,154,0)}100%{box-shadow:0 0 0 0 rgba(95,210,154,0)}}
  .gf-line{font-family:var(--font-text);font-size:15px;color:#fff;}
  .gf-line b{color:#fff;font-weight:500;font-variant-numeric:tabular-nums;}
  .gf-mark{display:inline-flex;align-items:flex-end;gap:clamp(7px,1vw,12px);font-family:var(--font-display);font-weight:900;font-size:clamp(28px,3.4vw,48px);letter-spacing:-.03em;color:#fff;text-decoration:none;line-height:.85;text-transform:lowercase;}
  .gf-mark svg{width:.66em;height:.6em;flex:0 0 auto;margin-bottom:.04em;}
  .gf-bar{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-top:clamp(54px,10vh,104px);padding-top:22px;border-top:1px solid rgba(255,255,255,.18);}
  .gf-meta{display:flex;flex-direction:column;gap:3px;text-align:right;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;text-transform:lowercase;color:rgba(255,255,255,.85);}
  body.nightsky .gf-meta{color:rgba(255,255,255,.62);}
  @media(max-width:560px){.gf-bar{align-items:flex-start;}.gf-meta{text-align:left;}}
  @media(max-width:760px){.gf-top{grid-template-columns:1fr;gap:38px;}.gf-bar{flex-direction:column;gap:6px;}}
  .ground-kick,.ground-ttl,.ground-sub{}
  .ground.is-night .ground-kick,.ground.is-night .ground-ttl,.ground.is-night .ground-sub{}
  .ground.is-night .ground-ttl{color:#EDF1E6;}
  .ground.is-night .ground-kick{color:#f4f7fc;}
  .ground.is-night .ground-sub{color:#cdd6c4;} .ground.is-night .ground-sub b{color:#fff;}
  .ground .ground-tint{display:none;}
  .ground-fly{position:absolute;inset:0;pointer-events:none;z-index:4;opacity:0;transition:opacity 1.2s ease;}
  .ground.is-night .ground-fly{opacity:1;}
  .ground-fly i{position:absolute;width:7px;height:7px;border-radius:50%;background:radial-gradient(circle,#fffbdc 0%,#ffe07a 38%,rgba(255,210,90,0) 72%);box-shadow:0 0 12px 4px rgba(255,214,110,.6);animation:gFly 3s ease-in-out infinite;}
  @keyframes gFly{0%,100%{opacity:.22;transform:translateY(0) scale(.62)}50%{opacity:1;transform:translateY(-9px) scale(1.12)}}
  .tod{position:absolute;right:clamp(14px,3vw,34px);top:50%;transform:translateY(-50%);z-index:6;display:flex;flex-direction:column;gap:7px;
    background:rgba(253,251,247,.5);-webkit-backdrop-filter:blur(10px) saturate(1.2);backdrop-filter:blur(10px) saturate(1.2);
    border:1px solid rgba(255,255,255,.55);border-radius:999px;padding:8px 7px;box-shadow:0 12px 30px -16px rgba(20,30,20,.55);}
  .tod-b{width:34px;height:34px;border-radius:50%;border:none;background:transparent;color:#3a4a3a;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,color .2s,transform .2s;-webkit-tap-highlight-color:transparent;}
  .tod-b svg{width:19px;height:19px;}
  .tod-b:hover{transform:scale(1.12);color:#1c2b22;}
  .tod-b.on{background:var(--accent);color:#fff;}
  @media (prefers-reduced-motion:reduce){.ground-fly i{animation:none;}}
  @media (max-width:600px){.tod{right:10px;gap:5px;padding:6px 5px;} .tod-b{width:30px;height:30px;} .tod-b svg{width:16px;height:16px;}}` }} />
<style dangerouslySetInnerHTML={{ __html: `#gachat .gachat-launch{display:none;}` }} />
<style dangerouslySetInnerHTML={{ __html: `/* accent / emphasis words use the cursive (air.inc Control-Cursive equivalent) */
  .hl .ln.l2,.ai-big em,.ai-banner-ttl em,.ai-feat-ttl em,.ai-close-ttl em,.ai-case-ttl em,
  .sw-ttl em,.sw-head h2 em,.sw-feature-txt h3 em,.ground-ttl em,.sw-feat-ttl .a,.swc-ttl .a,.mf-sub em{
    font-family:inherit;font-style:normal;font-weight:inherit;}` }} />
<style dangerouslySetInnerHTML={{ __html: `.sfly{position:fixed;inset:0;pointer-events:none;overflow:hidden;}
  #sfFar{z-index:1;} #sfNear{z-index:9;}
  .sf-cloud{position:absolute;left:0;top:0;border-radius:50%;
    background:radial-gradient(closest-side,rgba(255,255,255,.6),rgba(255,255,255,.18) 58%,rgba(255,255,255,0));
    filter:blur(6px);will-change:transform;}
  body.nightsky .sf-cloud{background:radial-gradient(closest-side,rgba(206,222,246,.34),rgba(150,172,210,.12) 58%,transparent);}
  .sf-mote{position:absolute;width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,.95);
    box-shadow:0 0 7px 2px rgba(255,255,255,.5);will-change:transform,opacity;animation:sfMote linear infinite;}
  @keyframes sfMote{0%{transform:translateY(8px);opacity:0}12%{opacity:.9}88%{opacity:.9}100%{transform:translateY(-130px) translateX(16px);opacity:0}}
  .sf-word{position:fixed;left:0;right:0;top:44%;z-index:1;text-align:center;
    font-family:var(--font-display);font-weight:800;text-transform:lowercase;letter-spacing:-.04em;
    font-size:clamp(110px,25vw,400px);line-height:.8;color:rgba(255,255,255,.13);
    white-space:nowrap;will-change:transform,opacity;opacity:0;pointer-events:none;}
  body.nightsky .sf-word{color:rgba(222,234,252,.10);}
  @media (max-width:720px){.sf-word{font-size:34vw;}}
  @media (prefers-reduced-motion:reduce){.sfly,.sf-word{display:none!important;}}` }} />
<style dangerouslySetInnerHTML={{ __html: `.talk-heart{position:fixed;left:0;top:0;z-index:80;pointer-events:none;transform:translate(-50%,-135%);}
  .talk-heart i{display:block;font-style:normal;font-size:36px;transform:scale(0) rotate(-14deg);
    transition:transform .38s cubic-bezier(.2,1.5,.4,1);filter:drop-shadow(0 8px 12px rgba(20,40,70,.32));}
  .talk-heart.on i{transform:scale(1) rotate(0deg);animation:th-bob 1.4s ease-in-out infinite .38s;}
  @keyframes th-bob{0%,100%{transform:scale(1) rotate(-5deg)}50%{transform:scale(1.08) rotate(6deg)}}
  @media(prefers-reduced-motion:reduce){.talk-heart{display:none;}}` }} />
<style dangerouslySetInnerHTML={{ __html: `.cal-cup{position:fixed;left:0;top:0;z-index:80;pointer-events:none;transform:translate(-50%,-140%);}
  .cal-cup .c{display:block;font-size:34px;transform:scale(0) rotate(-14deg);
    transition:transform .38s cubic-bezier(.2,1.5,.4,1);
    filter:drop-shadow(0 8px 12px rgba(20,40,70,.32));}
  .cal-cup.on .c{transform:scale(1) rotate(0deg);animation:cup-sip 1.6s ease-in-out infinite .38s;}
  @keyframes cup-sip{0%,100%{transform:scale(1) rotate(-6deg)}50%{transform:scale(1.06) rotate(10deg) translateY(-3px)}}
  .cal-cup .s{position:absolute;left:50%;top:-4px;font-size:13px;opacity:0;color:#fff;}
  .cal-cup.on .s{animation:steam 1.5s ease-out infinite;}
  .cal-cup.on .s.s2{animation-delay:.5s;margin-left:8px;}
  .cal-cup.on .s.s3{animation-delay:1s;margin-left:-8px;}
  @keyframes steam{0%{opacity:0;transform:translate(-50%,0) scale(.6)}
    30%{opacity:.85}100%{opacity:0;transform:translate(-50%,-26px) scale(1.15) rotate(14deg)}}
  @media(prefers-reduced-motion:reduce){.cal-cup{display:none;}}` }} />
    </>
  );
}
