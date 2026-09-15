"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.setAttribute('data-cine', 'hero parallax tilt magnet grain motes');
    document.body.setAttribute('data-motes', 'fixed');
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
        document.body.removeAttribute('data-motes');
        
        burger.removeEventListener('click', onBurgerClick);
        menu.removeEventListener('click', onMenuClick as any);
        document.documentElement.style.overflow = '';
      };
    }
  }, []);

  return (
    <>
      <div id="gnav"><div className="gnav-bar"><a className="gnav-brand" href="/"><svg className="gnav-mark" viewBox="0 0 30 26" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><g className="sun"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"></path><line x1="15" y1="7" x2="15" y2="4.2"></line><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"></line><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"></line></g><line x1="2.5" y1="18" x2="27.5" y2="18"></line></svg>dinesh<span className="gnav-dot">.</span></a><button className="gnav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="gnavMenu"><span className="gb-txt">menu</span><span className="gb-ico"><span className="gb-l"></span><span className="gb-l"></span></span></button></div><nav className="gnav-dock" aria-label="primary"><a href="/work">work</a><a href="/beyond">about</a><a href="/blog">blogs</a><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti">↗</span></a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti">↓</span></a><a className="cta" href="/quick">quick view <span className="arw">→</span></a><a className="cta cta-ghost" href="mailto:dineshkatal.work@gmail.com">let’s talk <span className="arw">→</span></a></nav><div className="gnav-menu" id="gnavMenu" aria-hidden="true"><nav className="gnav-menu-inner" aria-label="menu"><a href="/work">work</a><a href="/beyond">about</a><a href="/blog">blogs</a><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti">↗</span></a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti">↓</span></a><a className="cta" href="/quick">quick view <span className="arw">→</span></a><a className="cta cta-ghost" href="mailto:dineshkatal.work@gmail.com">let’s talk <span className="arw">→</span></a></nav></div></div>
  {/* shared page transition (ink wipe) — see transition.css/js */}
  <div className="pgx" id="pgx" aria-hidden="true">
    <div className="pgx-ink"></div>
    <div className="pgx-mark"><span className="wm">catch you there<span className="dot">.</span></span></div>
    <svg width="0" height="0" aria-hidden="true"><filter id="pgxink"><feTurbulence type="fractalNoise" baseFrequency="0.013 0.021" numOctaves="2" seed="6" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="10" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter></svg>
  </div>

  <nav className="wnav" style={{ display: "none" }}>
    <a className="brand" href="/">dinesh<span className="a">.</span></a>
    <nav className="snav">
      <a href="/work" className="on">work</a>
      <a href="/beyond">lil&nbsp;about&nbsp;me</a>
      
      <a className="ext" href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti exti-up">↗</span></a><a className="ext" href="../assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti exti-dn">↓</span></a>
      <a href="/quick">quick&nbsp;view</a>
    </nav>
  </nav>

  <header className="whead wrap" data-cine-hero="">
    <span className="kick">the work</span>
    <h1 data-cine-split="1" data-split="1">
      <span className="cn-m"><span className="cn-w">selected</span></span>{" "}
      <span className="cn-m"><span className="cn-w">product</span></span>{" "}
      <span className="cn-m"><span className="cn-w">&amp; growth</span></span>{" "}
      <span className="cn-m"><span className="cn-w"><span className="a">case studies</span></span></span>
      <span className="cn-m"><span className="cn-w">.</span></span>
    </h1>
    <p>Building platforms and algorithms that scale: from AI onboarding serving 20k+ users to NLP engines and financial trading analytics. Six selected projects.</p>
  </header>

  <main className="wrap">

    {/* 01 Beyond Career */}
    <div className="case in" data-href="/case-podonos">
      <div className="text">
        <div className="num">01</div>
        <div className="meta"><img className="co-logo" src="../assets/logos/podonos.svg" alt="Beyond Career" /><span className="dot">·</span><span>2025–Present · Gurugram</span><span className="dot">·</span><span>Product &amp; AI</span></div>
        <div className="ttl">the intelligent layer <span className="a">for edtech matchmaking.</span></div>
        <p className="lede">Architected end-to-end product platform scaling to 20,000+ users with 99.9% uptime. Built ML matchmaking algorithms facilitating 400+ team formations.</p>
        <div className="tags"><span className="tag">0→1</span><span className="tag">Product Strategy</span><span className="tag">AI &amp; Matchmaking</span></div>
        <div className="row-foot">
        </div>
      </div>
      <div className="media cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" }}><div className="cover nda"><video className="cover-vid" autoPlay muted loop playsInline preload="metadata" poster="/assets/case/podonos/onepin-flow-poster.jpg"><source src="/assets/case/podonos/onepin-flow.mp4" type="video/mp4" /></video><div className="nda-hover" aria-label="under NDA"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.2"></rect><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"></path><circle cx="12" cy="15.2" r="1.25" fill="currentColor" stroke="none"></circle></svg><span>open platform</span></div></div></div>
    </div>

    {/* 02 HubSpot CRM Campaign */}
    <div className="case in" data-href="/case-mashreq">
      <div className="text">
        <div className="num">02</div>
        <div className="meta"><img className="co-logo" src="../assets/logos/mashreq.png" alt="Edupolis / Unschool" /><span className="dot">·</span><span>2024 · Gurugram</span><span className="dot">·</span><span>Growth Analytics</span></div>
        <div className="ttl">optimizing edtech campaigns <span className="a">via growth funnel checks.</span></div>
        <p className="lede">Amplified brand reach by 120% using HubSpot CRM, reducing Customer Acquisition Cost (CAC) by 15% and boosting course conversions by 25% via analytics.</p>
        <div className="tags"><span className="tag">HubSpot CRM</span><span className="tag">Growth Analytics</span><span className="tag">Business Analysis</span></div>
        <div className="row-foot">
        </div>
      </div>
      <div className="media cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" }}><div className="cover shot"><img src="../assets/case/mashreq/mq-search.png" alt="Edupolis campaigns" loading="lazy" /></div></div>
    </div>

    {/* 03 Automated Trading Analytics */}
    <div className="case" data-href="/case-fxonline">
      <div className="text">
        <div className="num">03</div>
        <div className="meta"><img className="co-logo" src="../assets/logos/emirates-nbd.png" alt="IIT Kharagpur" /><span className="dot">·</span><span>2023 · Kharagpur</span><span className="dot">·</span><span>Data Pipeline</span></div>
        <div className="ttl">automated trading <span className="a">pipeline &amp; signal backtesting.</span></div>
        <p className="lede">Engineered automated data pipeline processing 10,000+ price points daily using Python and yfinance API, generating SMA crossover signals at 85% backtesting accuracy.</p>
        <div className="tags"><span className="tag">Python</span><span className="tag">APIs</span><span className="tag">Financial Analytics</span></div>
        <div className="row-foot">
        </div>
      </div>
      <div className="media cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" }}><div className="cover shot"><video src="../assets/case/fx/cover-loop-hd.mp4?v=4" poster="../assets/case/fx/cover-loop-hd-poster.jpg?v=4" aria-label="Trading analysis" muted loop playsInline autoPlay></video></div></div>
    </div>

    {/* 04 TIMETINT pharmaceutical label */}
    <div className="case" data-href="/case-business">
      <div className="text">
        <div className="num">04</div>
        <div className="meta"><img className="co-logo" src="../assets/logos/emirates-nbd.png" alt="IIT Kharagpur" /><span className="dot">·</span><span>2024 · Kharagpur</span><span className="dot">·</span><span>Product Design</span></div>
        <div className="ttl">TIMETINT pharmaceutical <span className="a">color-changing label.</span></div>
        <p className="lede">Ideated a smart color-changing label for pharmaceuticals to reduce expired medicine use by 60% for patient safety. Won 1st place in Inter-hall Product Design.</p>
        <div className="tags"><span className="tag">0→1</span><span className="tag">Product Design</span><span className="tag">Patent/Safety</span></div>
        <div className="row-foot">
        </div>
      </div>
      <div className="media cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" }}><div className="cover phonecover"><span className="live">▶ live demo</span><video src="../assets/case/bo/flow1.mp4" poster="../assets/case/bo/flow1-poster.png" muted loop playsInline autoPlay></video></div></div>
    </div>

    {/* 05 Healthcare Equity Data Exploration */}
    <div className="case" data-href="/case-smarttrade">
      <div className="text">
        <div className="num">05</div>
        <div className="meta"><img className="co-logo" src="../assets/logos/emirates-nbd.png" alt="IIT Kharagpur" /><span className="dot">·</span><span>2023 · Kharagpur</span><span className="dot">·</span><span>Data Science</span></div>
        <div className="ttl">healthcare equity <span className="a">exploratory data analysis.</span></div>
        <p className="lede">Analyzed 4000-row dataset extracting pay equity metrics across 2585 hospitals in 5 states using Python and SQL. Built Power BI dashboard with 15 visualizations.</p>
        <div className="tags"><span className="tag">SQL</span><span className="tag">Python</span><span className="tag">Power BI</span></div>
        <div className="row-foot">
        </div>
      </div>
      <div className="media cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" }}><div className="cover shot"><video src="../assets/case/smarttrade/cover-loop.mp4" poster="../assets/case/smarttrade/cover-loop-poster.jpg" aria-label="Healthcare dashboard" muted loop playsInline autoPlay></video></div></div>
    </div>

    {/* 06 Gender Bias Detection NLP Model */}
    <div className="case" data-href="/case-googlehealth">
      <div className="text">
        <div className="num">06</div>
        <div className="meta"><span>2022 · Kharagpur</span><span className="dot">·</span><span>Machine Learning</span><span className="dot">·</span><span>NLP model</span></div>
        <div className="ttl">gender bias detection <span className="a">using deep learning.</span></div>
        <p className="lede">Developed deep learning classifiers (BERT, ANN, RNN) to detect gender bias in 2000+ sentences with 92% accuracy, winning 2nd place in Open IIT Data Analytics.</p>
        <div className="tags"><span className="tag">NLP</span><span className="tag">BERT</span><span className="tag">Machine Learning</span></div>
        <div className="row-foot">
        </div>
      </div>
      <div className="media cn-tilt" data-cine-tilt="1" style={{ translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" }}><div className="cover phonecover"><div className="gh-cmp" data-ghcmp="" style={{ "--pos": "59.52960296587954%" } as React.CSSProperties}><img className="gh-ph after" src="../assets/case/googlehealth/gh-after.png" alt="redesign" /><img className="gh-ph before" src="../assets/case/googlehealth/gh-before.png" alt="original" /><div className="gh-div"></div><div className="gh-handle">↔</div><span className="gh-tag l">before</span><span className="gh-tag r">after</span></div></div></div>
    </div>

  </main>

  {/* portfolio chat assistant (self-contained; talks to /api/chat) */}
  
  <Script src="/assistant.js"  strategy="afterInteractive" />

<Script id="script-work-1" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
    var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cases=document.querySelectorAll('.case');
    if(reduce || !('IntersectionObserver' in window)){ cases.forEach(function(c){c.classList.add('in');}); return; }
    var io=new IntersectionObserver(function(es){
      es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    },{threshold:0.18});
    cases.forEach(function(c){ io.observe(c); });
  })();` }} />
<Script id="script-work-2" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  function stop(e){ e.stopPropagation(); }
  document.querySelectorAll('.case').forEach(function(c){
    c.addEventListener('click',function(e){
      if(e.target.closest('.demo')||e.target.closest('a')) return;
      var h=c.dataset.href; if(h) location.href=h;
    });
  });
  // before/after drag compare on the Google Health cover (grab to pause the auto-sweep)
  document.querySelectorAll('[data-ghcmp]').forEach(function(cmp){
    function setPos(x){ var r=cmp.getBoundingClientRect();
      var p=Math.max(4,Math.min(96,(x-r.left)/r.width*100)); cmp.style.setProperty('--pos',p+'%'); }
    var drag=false,pause=0,t=0;
    cmp.addEventListener('pointerdown',function(e){ drag=true; cmp.classList.add('dragging');
      try{ cmp.setPointerCapture(e.pointerId); }catch(_){}
      setPos(e.clientX); e.preventDefault(); e.stopPropagation(); });
    cmp.addEventListener('pointermove',function(e){ if(drag) setPos(e.clientX); });
    function end(){ if(drag){ drag=false; cmp.classList.remove('dragging'); pause=performance.now()+2800; } }
    cmp.addEventListener('pointerup',end);
    cmp.addEventListener('pointercancel',end);
    cmp.addEventListener('click',function(e){ e.stopPropagation(); });
    if(!matchMedia('(prefers-reduced-motion:reduce)').matches){function loop(now){if(!drag&&now>pause){t+=0.016;cmp.style.setProperty('--pos',(50+22*Math.sin(t))+'%');}requestAnimationFrame(loop);}requestAnimationFrame(loop);}
  });
  var ans=document.getElementById('helpAns');
  document.querySelectorAll('.help-item').forEach(function(b){
    b.addEventListener('click',function(e){ e.preventDefault(); stop(e);
      document.querySelectorAll('.help-item').forEach(function(x){ x.classList.remove('on'); });
      b.classList.add('on'); if(ans) ans.textContent=b.getAttribute('data-a');
    });
  });
  var fxDemo=document.querySelector('.demo-fx');
  if(fxDemo){
    fxDemo.querySelectorAll('.fx-tab').forEach(function(t){
      t.addEventListener('click',function(e){ e.preventDefault(); stop(e);
        fxDemo.querySelectorAll('.fx-tab').forEach(function(x){ x.classList.remove('on'); });
        t.classList.add('on'); var v=t.getAttribute('data-v');
        fxDemo.querySelectorAll('.fx-view').forEach(function(vw){ vw.hidden = vw.getAttribute('data-v')!==v; });
      });
    });
    var rmT=document.getElementById('rmT'), rmBar=document.getElementById('rmBar'), rmBook=document.getElementById('rmBook');
    var secs=90, timer=null, expired=false;
    function fmt(s){ return '0:'+(s<10?'0':'')+s; }
    function tick(){ secs--; if(secs<=0){ secs=0; expired=true; clearInterval(timer);
        rmT.textContent='rate expired'; rmT.classList.add('exp'); rmBar.style.width='0%'; rmBook.textContent='refresh rate'; return; }
      rmT.textContent='rate locked · '+fmt(secs); rmBar.style.width=(secs/90*100)+'%'; }
    function startTimer(){ secs=90; expired=false; if(rmT){rmT.classList.remove('exp');rmT.textContent='rate locked · 0:90';}
      if(rmBar)rmBar.style.width='100%'; if(rmBook){rmBook.textContent='book deal';rmBook.classList.remove('done');}
      clearInterval(timer); timer=setInterval(tick,1000); }
    if(rmBook){ startTimer();
      rmBook.addEventListener('click',function(e){ e.preventDefault(); stop(e);
        if(expired){ startTimer(); }
        else { clearInterval(timer); rmBook.textContent='✓ deal booked'; rmBook.classList.add('done'); if(rmT)rmT.textContent='booked at 3.9712'; }
      });
    }
    var trQuote=document.getElementById('trQuote'), q=3.9712;
    function setQ(){ if(trQuote) trQuote.textContent=q.toFixed(4); }
    var trUp=document.getElementById('trUp'), trDown=document.getElementById('trDown'), trSend=document.getElementById('trSend');
    if(trUp) trUp.addEventListener('click',function(e){ e.preventDefault(); stop(e); q+=0.0005; setQ(); });
    if(trDown) trDown.addEventListener('click',function(e){ e.preventDefault(); stop(e); q=Math.max(0,q-0.0005); setQ(); });
    if(trSend) trSend.addEventListener('click',function(e){ e.preventDefault(); stop(e); trSend.textContent='✓ quoted to RM'; trSend.classList.add('done'); });
  }
  var boGo=document.getElementById('boGo'), boDone=document.getElementById('boDone');
  if(boGo){ boGo.addEventListener('click',function(e){ e.preventDefault(); stop(e); boGo.classList.add('hide'); if(boDone) boDone.classList.add('show'); }); }
  var vp=document.getElementById('vplay');
  if(vp){ vp.addEventListener('click',function(e){ e.preventDefault(); stop(e); var v=vp.closest('.voice'); v.classList.toggle('playing');
    vp.textContent=v.classList.contains('playing')?'❚❚ playing':'▶ play sample'; }); }
})();` }} />
  <Script src="/transition.js"  strategy="afterInteractive" />
  {/* cinematic layer: GSAP scroll choreography + shader grain + Three.js motes */}
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
  <Script src="/cinematic.js?v=1" strategy="afterInteractive" /><canvas className="cn-grain" aria-hidden="true" width="1440" height="900"></canvas>
  {/* global footer */}
  
  <Script src="/footer.js"  strategy="afterInteractive" />
  <Script src="/nav.js?v=6"  strategy="afterInteractive" />
  <Script src="/smooth-scroll.js"  strategy="afterInteractive" />


<div id="gachat"><button className="gachat-launch" type="button" aria-label="Ask about Dinesh"><span className="dot"></span><b>ask about dinesh</b></button><div className="gachat-panel" role="dialog" aria-label="Chat about Dinesh" aria-modal="false"><div className="gachat-head"><div className="gachat-av"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 6l2.4 5.4L12 18l-2.4-6.6z" fill="#fff" stroke="none"></path></svg></div><div className="gc-htxt"><div className="ttl">ask about <span className="a">dinesh</span></div><div className="sub"><span className="live"></span>online · replies instantly</div></div><button className="gachat-iconbtn gc-voice" type="button" aria-pressed="false" aria-label="Voice mode — read replies aloud" title="Voice mode (read replies aloud)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"></path><path d="M19 5a9 9 0 0 1 0 14"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path></svg></button><button className="gachat-iconbtn gc-reset" type="button" aria-label="Clear conversation" title="Clear"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"></path><path d="M3 3v5h5"></path></svg></button><button className="gachat-iconbtn gc-close" type="button" aria-label="Close chat" title="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"></path></svg></button></div><div className="gachat-log" aria-live="polite"></div><form className="gachat-form"><div className="gachat-inwrap"><textarea rows={1} placeholder="ask me something…" aria-label="Your message" maxLength={600}></textarea></div><button className="gachat-mic" type="button" aria-label="Speak your question" title="Tap to speak"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="11" rx="3"></rect><path d="M5 10a7 7 0 0 0 14 0"></path><path d="M12 17v4"></path><path d="M8 21h8"></path></svg></button><button className="gachat-send" type="submit" aria-label="Send" disabled><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg></button></form><div className="gachat-foot">grounded in dinesh’s real work · portfolio assistant</div></div></div><footer id="gfooter" className="ground"><div className="gf-sky" aria-hidden="true"><span className="gf-cloud c1"></span><span className="gf-cloud c2"></span><span className="gf-cloud c3"></span><span className="gf-cloud c4"></span></div><div className="ground-contact"><div className="gf-top"><div className="gf-cta"><div className="ground-kick">contact</div><h2 className="ground-ttl">let’s build <em>something that matters.</em></h2><a className="ground-mail" href="mailto:dineshkatal.work@gmail.com">dineshkatal.work@gmail.com <span className="arw">→</span></a><p className="ground-sub">care about <b>design</b>, <b>impact</b>, and products that actually ship? you know where to find me.</p></div><nav className="gf-cols" aria-label="footer"><div className="gf-col"><span className="gf-h">explore</span><a href="/work">work</a><a href="/beyond">lil about me</a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé ↓</a></div><div className="gf-col"><span className="gf-h">connect</span><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin ↗</a><a href="mailto:dineshkatal.work@gmail.com">email ↗</a></div><div className="gf-col"><span className="gf-h">status</span><span className="gf-avail"><i></i> open to new work</span><span className="gf-line">based in Gurugram, India</span><span className="gf-line">local time <b id="gfClock">2:31 AM</b></span></div></nav></div><div className="gf-bar"><a className="gf-mark" href="/"><svg viewBox="0 0 30 26" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"></path><line x1="15" y1="7" x2="15" y2="4.2"></line><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"></line><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"></line><line x1="2.5" y1="18" x2="27.5" y2="18"></line></svg>dinesh.</a><div className="gf-meta"><span>© 2026 dinesh kumar katal</span><span>designed &amp; built by me — and a few too many coffees · switzer + react</span></div></div></div></footer><canvas className="cn-motes cn-motes-fixed" aria-hidden="true" data-engine="three.js r160" width="1440" height="900" style={{ opacity: "1", visibility: "inherit" }}></canvas>
<style dangerouslySetInnerHTML={{ __html: `:root{
    --paper:var(--t-paper); --panel:#f5f5f5; --ink:var(--t-ink); --soft:var(--t-ink-soft); --muted:var(--t-ink-faint);
    --accent:var(--t-accent); --sun:var(--t-gold); --sage:var(--t-sage);
    --line:var(--t-line);
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{background-color:#ffffff;color:var(--ink);font-family:"Satoshi","Switzer",system-ui,sans-serif;-webkit-font-smoothing:antialiased;}

  .wrap{max-width:var(--t-maxw);margin:0 auto;padding:0 28px;}

  /* nav */
  .wnav{display:flex;justify-content:space-between;align-items:center;max-width:var(--t-maxw);margin:0 auto;padding:22px 18px;}
  .brand{font-family:"Satoshi","Switzer";font-weight:400;font-size:23px;letter-spacing:-.02em;color:var(--ink);text-decoration:none;}
  .brand .a{color:var(--accent);}
  .back{font-family:"Geist Mono";font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:var(--soft);text-decoration:none;transition:color .2s;}
  .back:hover{color:var(--accent);}
  /* global site nav (work · about · lab) */
  .snav{display:flex;gap:4px;font-family:"Geist Mono";font-size:12px;text-transform:lowercase;letter-spacing:.06em;}
  .snav a{color:var(--soft);text-decoration:none;padding:7px 13px;border-radius:20px;border:1px solid transparent;transition:color .2s,border-color .2s;}
  .snav a:hover{color:var(--ink);border-color:var(--line);}
  .snav a.on{color:var(--accent);}

  /* header */
  .whead{padding-block:60px 30px;}
  .kick{font-family:"Geist Mono";font-size:12px;text-transform:uppercase;letter-spacing:.16em;color:var(--accent);}
  .whead h1{font-family:"Satoshi","Switzer";font-weight:500;letter-spacing:-.025em;text-transform:lowercase;
    font-size:clamp(32px,5vw,54px);line-height:.94;margin:18px 0 0;max-width:100%;overflow-wrap:break-word;}
  .whead h1 .a{color:var(--accent);}
  .whead p{font-family:"Satoshi","Switzer";font-size:18px;line-height:1.6;color:var(--soft);max-width:560px;margin-top:26px;}
  .whead .count{margin-top:30px;font-family:"Geist Mono";font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);
    border-top:1px solid var(--line);padding-top:18px;}

  /* index rows */
  main{padding:30px 0 40px;}
  .case{display:grid;grid-template-columns:1fr 1.12fr;gap:clamp(32px,5vw,72px);align-items:center;
    padding:56px 0;border-top:1px solid var(--line);position:relative;color:inherit;text-decoration:none;cursor:pointer;
    opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1);}
  .case.in{opacity:1;transform:none;}
  .case:nth-child(even) .text{order:2;}
  .case:nth-child(even) .media{order:1;}

  .num{font-family:"Satoshi","Switzer",serif;font-style:normal;font-weight:400;font-size:clamp(24px,3.2vw,36px);
    color:var(--accent);opacity:.85;line-height:1;margin-bottom:14px;}
  .meta{font-family:"Geist Mono";font-size:11px;text-transform:uppercase;letter-spacing:.13em;color:var(--muted);
    display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:16px;}
  .meta .co{color:var(--soft);font-weight:500;}
  .meta .co-logo{height:26px;width:auto;display:block;}
  .meta .co-logo[src*="podonos"]{height:20px;}  /* tightly-cropped icon reads larger — balance it */
  .meta .dot{opacity:.5;}
  .ttl{font-family:"Satoshi","Switzer";font-weight:500;letter-spacing:-.02em;text-transform:lowercase;
    font-size:clamp(24px,3.2vw,38px);line-height:1.0;}
  .ttl .a{color:var(--accent);}
  .lede{font-family:"Satoshi","Switzer";font-size:16px;line-height:1.62;color:var(--soft);margin-top:18px;max-width:440px;}
  .row-foot{margin-top:24px;display:flex;align-items:center;gap:18px;flex-wrap:wrap;}
  .chip{font-family:"Geist Mono";font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink);
    border:1px solid rgba(20,32,52,.18);border-radius:30px;padding:7px 14px;background:rgba(20,32,52,.03);}
  .chip b{color:var(--accent);}
  .tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:18px;}
  .tag{font-family:"Geist Mono";font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--soft);
    border:1px solid var(--line);border-radius:30px;padding:5px 11px;transition:color .2s ease,border-color .2s ease;}
  .case:hover .tag{border-color:rgba(22,32,43,.32);color:var(--ink);}
  .go{font-family:"Geist Mono";font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink);
    display:inline-flex;align-items:center;gap:8px;text-decoration:none;}
  .go:hover{color:var(--accent);}
  .go i{font-style:normal;transition:transform .3s cubic-bezier(.16,1,.3,1);}
  .case:hover .go i{transform:translateX(6px);}
  .nda{font-family:"Geist Mono";font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);
    display:inline-flex;align-items:center;gap:6px;}

  /* media frame */
  .media{position:relative;}
  .cover{position:relative;min-height:320px;border-radius:18px;overflow:hidden;display:grid;place-items:center;
    padding:clamp(22px,3vw,40px);border:1px solid rgba(20,32,52,.08);--ca:#16202b;
    box-shadow:0 26px 54px -30px rgba(20,32,52,.22);transition:transform .6s cubic-bezier(.16,1,.3,1),box-shadow .6s;}
  .case:hover .cover{transform:translateY(-6px);box-shadow:0 40px 76px -32px rgba(20,32,52,.3);}
  .cover.c1,.cover.c2,.cover.c3,.cover.voice{background:radial-gradient(130% 110% at 60% 0%,#f5f5f5 0%,#f5f5f5 100%);}
  /* real screenshot / video covers — exact same media treatment as homepage .sw-media */
  .cover.shot{padding:0;min-height:0;aspect-ratio:16/10;background:rgba(20,32,52,.06);}
  .cover.shot img,.cover.shot video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform 1.1s cubic-bezier(.22,1,.36,1);}
  .case:hover .cover.shot img,.case:hover .cover.shot video{transform:scale(1.04);}
  .cover.phonecover{padding:0;min-height:0;aspect-ratio:16/10;display:flex;justify-content:center;align-items:flex-start;padding-top:24px;
    background:linear-gradient(165deg,#d8e5f7 0%,#aecbef 56%,#8eb4e6 100%);}
  .cover.phonecover video,.cover.phonecover img{width:52%;height:auto;max-width:none;object-fit:contain;align-self:flex-start;position:static;inset:auto;transition:transform 1.1s cubic-bezier(.22,1,.36,1);}
  .cover.phonecover video{border-radius:26px;box-shadow:0 28px 46px -20px rgba(8,24,52,.62);clip-path:inset(4.5% 0 0 0 round 30px);}
  /* GH cover video is a framed phone with its own bezel — round it to match, no top trim */
  .cover.phonecover video.gh-cover{border-radius:26px;clip-path:inset(6% 4% 0 4% round 30px);}
  .cover.phonecover img{filter:drop-shadow(0 24px 30px rgba(8,24,52,.48));}
  .case:hover .cover.phonecover video,.case:hover .cover.phonecover img{transform:translateY(-7px);}
  /* before/after drag compare inside the phone cover */
  .cover.phonecover .gh-cmp{position:relative;width:52%;aspect-ratio:430/902;border-radius:26px;overflow:hidden;--pos:50%;
    align-self:flex-start;touch-action:none;cursor:ew-resize;filter:drop-shadow(0 24px 30px rgba(8,24,52,.48));
    transition:transform 1.1s cubic-bezier(.22,1,.36,1);}
  .case:hover .cover.phonecover .gh-cmp{transform:translateY(-7px);}
  .cover.phonecover .gh-cmp.dragging{animation:none;cursor:grabbing;}
  .cover.phonecover .gh-cmp .gh-ph{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;
    object-position:top center;filter:none;transition:none;align-self:auto;}
  .case:hover .cover.phonecover .gh-cmp .gh-ph{transform:none;}
  .cover.phonecover .gh-cmp .gh-ph.before{clip-path:inset(0 calc(100% - var(--pos)) 0 0);}
  .cover.phonecover .gh-div{position:absolute;top:0;bottom:0;left:var(--pos);width:2px;margin-left:-1px;z-index:4;pointer-events:none;
    background:rgba(255,255,255,.96);box-shadow:0 0 0 1px rgba(8,24,52,.14);}
  .cover.phonecover .gh-handle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:30px;height:30px;border-radius:50%;
    background:#fff;box-shadow:0 3px 12px rgba(8,24,52,.34);display:flex;align-items:center;justify-content:center;font-size:12px;color:#16202b;letter-spacing:-1px;}
  .cover.phonecover .gh-tag{position:absolute;top:11px;z-index:5;font-family:"Geist Mono";font-size:8.5px;font-weight:600;letter-spacing:.1em;
    text-transform:uppercase;padding:3px 8px;border-radius:999px;pointer-events:none;background:rgba(255,255,255,.92);color:#16202b;}
  .cover.phonecover .gh-tag.l{left:11px;}
  .cover.phonecover .gh-tag.r{right:11px;background:#16202b;color:#fff;}
  @keyframes gh-sweep{0%,100%{--pos:64%;}50%{--pos:36%;}}
  @media(prefers-reduced-motion:reduce){.cover.phonecover .gh-cmp{animation:none;--pos:50%;}}
  .cover .live{position:absolute;top:13px;left:13px;z-index:3;font-family:"Geist Mono";font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#16202b;background:rgba(255,255,255,.92);border-radius:8px;padding:5px 11px;}
  /* NDA cover — exact same as homepage .sw-media.nda */
  .cover.nda{padding:0;min-height:0;aspect-ratio:16/10;display:grid;place-items:center;position:relative;overflow:hidden;background:linear-gradient(142deg,#dcebf8 0%,#e7ede1 50%,#f7e9d2 100%);}
  .cover .cover-vid{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:1;transition:transform 1.1s cubic-bezier(.22,1,.36,1);}
  .case:hover .cover .cover-vid{transform:scale(1.04);}
  .cover.nda::before,.cover.nda::after{content:"";position:absolute;width:58%;aspect-ratio:1;border-radius:50%;pointer-events:none;}
  /* when the NDA card has a real video cover, drop the decorative aura */
  .cover.nda:has(video)::before,.cover.nda:has(video)::after{display:none;}
  .cover.nda::before{background:
      radial-gradient(42% 42% at 30% 32%,#bcd4ff 0%,transparent 62%),
      radial-gradient(46% 46% at 72% 66%,#b3a4ec 0%,transparent 62%),
      radial-gradient(62% 62% at 52% 48%,#9bb8ee 0%,#c6c2ef 58%,transparent 82%);
    filter:blur(7px) saturate(1.25);opacity:.94;animation:ndaSwirl 18s ease-in-out infinite;}
  .cover.nda::after{background:
      radial-gradient(40% 40% at 68% 30%,#e7bce6 0%,transparent 60%),
      radial-gradient(44% 44% at 30% 70%,#f3ddc6 0%,transparent 62%),
      radial-gradient(52% 52% at 58% 60%,#cbb6ea 0%,transparent 80%);
    filter:blur(11px) saturate(1.25);opacity:.8;animation:ndaSwirl2 23s ease-in-out infinite;}
  .cover.nda .nda-hover{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;opacity:0;background:rgba(255,255,255,.16);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);transition:opacity .4s cubic-bezier(.22,1,.36,1);color:rgba(20,32,52,.72);}
  .cover.nda .nda-hover svg{width:30px;height:30px;}
  .cover.nda .nda-hover span{font-family:"Geist Mono";font-weight:600;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;}
  .case:hover .cover.nda .nda-hover{opacity:1;}
  @keyframes ndaSwirl{0%{transform:rotate(0) scale(1)}50%{transform:rotate(180deg) scale(1.08)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes ndaSwirl2{0%{transform:rotate(0) scale(1.06)}50%{transform:rotate(-200deg) scale(.94)}100%{transform:rotate(-360deg) scale(1.06)}}
  @media(prefers-reduced-motion:reduce){.cover.nda::before,.cover.nda::after{animation:none;}}
  .screen{width:100%;max-width:430px;aspect-ratio:16/10;border-radius:11px;overflow:hidden;display:flex;flex-direction:column;
    background:#f5f5f5;border:1px solid rgba(20,32,52,.1);box-shadow:0 18px 40px -22px rgba(20,32,52,.26);}
  .screen .bardots{height:26px;flex:0 0 26px;background:#f5f5f5;display:flex;align-items:center;gap:5px;padding-left:12px;border-bottom:1px solid rgba(0,0,0,.07);}
  .screen .bardots i{width:7px;height:7px;border-radius:50%;background:rgba(0,0,0,.16);}
  .screen img{flex:1 1 auto;width:100%;min-height:0;object-fit:cover;object-position:top center;
    filter:grayscale(1) contrast(1.07) brightness(1.04);transition:transform 1s cubic-bezier(.16,1,.3,1);}
  .case:hover .screen img{transform:scale(1.04);}

  /* NDA voice cover */
  .voice .wave{display:flex;align-items:center;gap:5px;height:96px;}
  .voice .wave i{width:5px;border-radius:3px;background:linear-gradient(var(--accent),#0083E7);opacity:.9;
    animation:vbar 1.4s ease-in-out infinite;}
  @keyframes vbar{0%,100%{transform:scaleY(.5)}50%{transform:scaleY(1)}}
  .voice .lockline{position:absolute;bottom:18px;left:0;right:0;text-align:center;
    font-family:"Geist Mono";font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:rgba(20,32,52,.5);}

  /* footer */
  .wfoot{padding:60px 0 90px;border-top:1px solid var(--line);margin-top:20px;}
  .wfoot a{font-family:"Geist Mono";font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:var(--soft);text-decoration:none;}
  .wfoot a:hover{color:var(--accent);}

  /* interactive case demos (always on a light card, no blue) */
  .demo{width:100%;max-width:430px;background:#f5f5f5;border-radius:14px;border:1px solid rgba(0,0,0,.08);
    box-shadow:0 18px 40px -22px rgba(20,32,52,.24);padding:18px 18px 20px;text-align:left;color:#16202b;}
  .demo .dh{font-family:"Geist Mono";font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#a3917d;margin-bottom:12px;}
  .demo .q{font-family:"Satoshi","Switzer";font-weight:400;font-size:19px;letter-spacing:-.01em;text-transform:lowercase;margin-bottom:14px;}
  .help-search{border:1px solid rgba(0,0,0,.12);border-radius:10px;padding:10px 12px;color:#a39a8d;font-size:13px;margin-bottom:12px;}
  .help-item{display:block;width:100%;text-align:left;font-family:"Satoshi","Switzer";font-size:13.5px;color:#16202b;background:#f5f5f5;
    border:1px solid rgba(0,0,0,.1);border-radius:10px;padding:11px 13px;margin-bottom:8px;cursor:pointer;transition:border-color .2s,background .2s;}
  .help-item:hover{border-color:var(--ca,#16202b);}
  .help-item.on{border-color:var(--ca,#16202b);background:#e7ecf3;}
  .help-ans{font-size:13px;line-height:1.5;color:#6b6051;padding:4px 4px 0;min-height:18px;}
  .fx-row{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#6b6256;margin-bottom:10px;}
  .fx-row.big{font-size:14px;color:#16202b;border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:2px;}
  .fx-row.big b{font-family:"Satoshi","Switzer";font-weight:400;font-size:21px;}
  .fx-amt{display:flex;align-items:center;gap:8px;}
  .fx-amt b{font-family:"Geist Mono";font-size:12px;background:#F1ECE4;border-radius:7px;padding:5px 9px;}
  .fx-amt input{width:118px;font-family:"Geist Mono";font-size:14px;border:1px solid rgba(0,0,0,.14);border-radius:8px;padding:8px 10px;text-align:right;color:#16202b;background:#f5f5f5;}
  .fx-amt input:focus{outline:none;border-color:var(--ca,#16202b);}
  .fx-rate{font-family:"Geist Mono";font-size:11px;color:#a3917d;margin-bottom:14px;}
  .fx-go,.bo-go{width:100%;font-family:"Geist Mono";text-transform:uppercase;letter-spacing:.06em;font-size:12px;color:#fff;
    background:var(--ca,#16202b);border:none;border-radius:10px;padding:12px;cursor:pointer;transition:filter .2s,transform .12s;}
  .fx-go:hover,.bo-go:hover{filter:brightness(.92);} .fx-go:active,.bo-go:active{transform:scale(.99);}
  .fx-go.done{background:#7FA85C;filter:none;}
  .fx-tabs{display:flex;gap:6px;background:#F1ECE4;border-radius:10px;padding:4px;margin-bottom:14px;}
  .fx-tab{flex:1;font-family:"Geist Mono";font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#7a7165;
    background:transparent;border:none;border-radius:7px;padding:8px;cursor:pointer;transition:background .2s,color .2s;}
  .fx-tab.on{background:#f5f5f5;color:#16202b;box-shadow:0 1px 3px rgba(0,0,0,.1);}
  .fx-view[hidden]{display:none;}
  .fx-client{font-size:12px;color:#6b6256;background:#f5f5f5;border:1px solid rgba(0,0,0,.08);border-radius:9px;padding:9px 11px;margin-bottom:11px;}
  .fx-client b{color:var(--ca,#16202b);}
  .fx-line{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#6b6256;margin-bottom:9px;}
  .fx-line i{font-style:normal;color:#a3917d;font-size:11px;}
  .fx-line b{font-family:"Geist Mono";color:#16202b;}
  .fx-line.big{border-top:1px solid rgba(0,0,0,.08);padding-top:11px;font-size:14px;color:#16202b;}
  .fx-line.big b{font-family:"Satoshi","Switzer";font-weight:400;font-size:18px;}
  .fx-step{display:flex;align-items:center;gap:8px;}
  .fx-step button{width:26px;height:26px;border-radius:7px;border:1px solid rgba(0,0,0,.14);background:#f5f5f5;cursor:pointer;font-size:15px;color:#16202b;line-height:1;}
  .fx-step b{font-family:"Geist Mono";min-width:62px;text-align:center;}
  .fx-timer{margin:4px 0 14px;}
  .fx-timer span{font-family:"Geist Mono";font-size:11px;color:#a3917d;}
  .fx-timer span.exp{color:var(--t-accent-deep);}
  .fx-bar{height:4px;background:#EFE9DF;border-radius:3px;overflow:hidden;margin-top:6px;}
  .fx-bar i{display:block;height:100%;width:100%;background:var(--ca,#16202b);}
  .bo-pay{background:#f5f5f5;border:1px solid rgba(0,0,0,.1);border-radius:11px;padding:13px;margin-bottom:12px;}
  .bo-top{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#6b6256;}
  .bo-amt{font-family:"Satoshi","Switzer";font-weight:400;font-size:18px;color:#16202b;}
  .bo-to{font-size:12px;color:#a39a8d;margin-top:6px;}
  .bo-go.hide{display:none;}
  .bo-done{display:none;font-family:"Geist Mono";font-size:12px;letter-spacing:.04em;color:#5f7f43;margin-top:12px;text-align:center;}
  .bo-done.show{display:block;}
  .vplay{position:absolute;bottom:14px;right:16px;font-family:"Geist Mono";font-size:10px;letter-spacing:.1em;text-transform:uppercase;
    color:rgba(20,32,52,.7);background:rgba(20,32,52,.05);border:1px solid rgba(20,32,52,.18);border-radius:20px;padding:5px 12px;cursor:pointer;}
  .vplay:hover{color:var(--accent);border-color:var(--accent);}
  .voice.playing .wave i{animation-duration:.7s;}

  .badge{position:fixed;left:14px;bottom:14px;z-index:50;font-family:"Geist Mono";font-size:10px;letter-spacing:.12em;
    text-transform:uppercase;color:var(--muted);background:rgba(244,242,234,.8);border:1px solid var(--line);border-radius:8px;padding:6px 10px;backdrop-filter:blur(6px);}

  @media(max-width:760px){
    .case{grid-template-columns:1fr;gap:24px;padding:44px 0;}
    .case:nth-child(even) .text{order:1;}
    .case:nth-child(even) .media{order:2;}
    .lede{max-width:none;}
    .cover{min-height:auto;}
  }
  @media (prefers-reduced-motion: reduce){
    .case{opacity:1;transform:none;transition:none;}
    .voice .wave i{animation:none;}
    html{scroll-behavior:auto;}
  }` }} />
    </>
  );
}
