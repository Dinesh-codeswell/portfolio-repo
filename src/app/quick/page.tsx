"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.setAttribute('data-cine', 'magnet tilt');
    document.body.classList.add('qload');

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
        document.body.classList.remove('qload');
        burger.removeEventListener('click', onBurgerClick);
        menu.removeEventListener('click', onMenuClick as any);
        document.documentElement.style.overflow = '';
      };
    } else {
      return () => {
        document.body.classList.remove('qload');
      };
    }
  }, []);

  return (
    <>
      <div id="gnav"><div className="gnav-bar"><a className="gnav-brand" href="/"><svg className="gnav-mark" viewBox="0 0 30 26" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><g className="sun"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"></path><line x1="15" y1="7" x2="15" y2="4.2"></line><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"></line><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"></line></g><line x1="2.5" y1="18" x2="27.5" y2="18"></line></svg>dinesh<span className="gnav-dot">.</span></a><button className="gnav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="gnavMenu"><span className="gb-txt">menu</span><span className="gb-ico"><span className="gb-l"></span><span className="gb-l"></span></span></button></div><nav className="gnav-dock" aria-label="primary"><a href="/work">work</a><a href="/beyond">about</a><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti">↗</span></a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti">↓</span></a><a className="cta" href="/quick">quick view <span className="arw">→</span></a><a className="cta cta-ghost" href="mailto:dineshkatal.work@gmail.com">let’s talk <span className="arw">→</span></a></nav><div className="gnav-menu" id="gnavMenu" aria-hidden="true"><nav className="gnav-menu-inner" aria-label="menu"><a href="/work">work</a><a href="/beyond">about</a><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti">↗</span></a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti">↓</span></a><a className="cta" href="/quick">quick view <span className="arw">→</span></a><a className="cta cta-ghost" href="mailto:dineshkatal.work@gmail.com">let’s talk <span className="arw">→</span></a></nav></div></div>
  <div className="bgfx" aria-hidden="true"></div>
  <canvas id="fx" aria-hidden="true" width="1440" height="900"></canvas>
  <div className="grain" aria-hidden="true"></div>

  <div className="pgx" id="pgx" aria-hidden="true">
    <div className="pgx-ink"></div>
    <div className="pgx-mark"><span className="wm">shaping the clay<span className="dot">.</span></span></div>
    <svg width="0" height="0" aria-hidden="true"><filter id="pgxink"><feTurbulence type="fractalNoise" baseFrequency="0.013 0.021" numOctaves="2" seed="6" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="10" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter></svg>
  </div>

  <nav className="wnav" style={{ display: "none" }}>
    <a className="brand" href="/">dinesh<span className="a">.</span></a>
    <nav className="snav">
      <a href="/work">work</a>
      <a href="/beyond">lil&nbsp;about&nbsp;me</a>
      
      <a className="ext" href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin <span className="exti exti-up">↗</span></a><a className="ext" href="../assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé <span className="exti exti-dn">↓</span></a><a href="/quick" className="on">quick&nbsp;view</a>
    </nav>
  </nav>

  <header className="qhero wrap">
    <div className="eyebrow"><span className="dot"></span>quick view · 60-second scan</div>
    <h1 className="qhead"><span className="ln"><span>i turn ambiguity</span></span><span className="ln"><span>into products</span></span><span className="ln"><span>teams can <em>ship</em>.</span></span></h1>
    <div className="qmeta">
      <p className="qident"><b>dinesh kumar katal</b><span className="dash">·</span>product manager &amp; data analyst</p>
      <div className="qspec">
        <div className="qcell"><span className="qk">status</span><span className="qv"><span className="live"></span>open to senior roles</span></div>
        <div className="qcell"><span className="qk">focus</span><span className="qv">AI · B2B SaaS · enterprise · agentic workflows</span></div>
        <div className="qcell"><span className="qk">based</span><span className="qv">Gurugram, India</span></div>
      </div>
      <div className="qspec qspec-mentor" aria-label="mentorship credentials">
        <div className="qcell"><span className="qk">topmate</span><span className="qv"><b>top 0.1%</b> mentor · 4.9/5 ★ · 2,000+ mentees</span></div>
        <div className="qcell"><span className="qk">unstop</span><span className="qv"><b>5.0</b> rating · 85% attendance · 800+ engagements</span></div>
        <div className="qcell"><span className="qk">badges</span><span className="qv">people's choice · curator · hustler · community care</span></div>
      </div>
    </div>
  </header>

  {/*
  <div className="marquee" aria-hidden="true">
    <div className="marquee-track">
      <span className="it">product design</span><span className="it">$71m booked</span><span className="it">fintech</span><span className="it">ai · 0→1</span><span className="it">design systems</span><span className="it">enterprise ux</span><span className="it">6 years</span><span className="it">research</span><span className="it">prototyping</span><span className="it">motion</span>
      <span className="it">product design</span><span className="it">$71m booked</span><span className="it">fintech</span><span className="it">ai · 0→1</span><span className="it">design systems</span><span className="it">enterprise ux</span><span className="it">6 years</span><span className="it">research</span><span className="it">prototyping</span><span className="it">motion</span>
    </div>
  </div>

  <div className="statband">
    <div className="wrap">
      <div className="c-stage lit">
        <div className="c-kick">career at a glance</div>
        <div className="c-hero">
          <div className="c-bignum">$<span className="cu done" data-to="71">71</span><span className="su">M</span></div>
          <div className="c-herolab"><b>booked transaction value</b><span>262M AED · 16,265 deals · FX Online</span></div>
        </div>
        <div className="c-mini">
          <div className="c-mcell lit" style={{ "--i": "0" } as React.CSSProperties}><div className="c-mnum"><span className="cu" data-to="6">6</span><span className="su">+</span></div><div className="c-mlab">years designing</div><div className="c-msrc">since 2020</div></div>
          <div className="c-mcell lit" style={{ "--i": "1" } as React.CSSProperties}><div className="c-mnum"><span className="cu" data-to="5">5</span></div><div className="c-mlab">brands shipped for</div><div className="c-msrc">accenture → enbd → podonos</div></div>
          <div className="c-mcell lit" style={{ "--i": "2" } as React.CSSProperties}><div className="c-mnum"><span className="cu" data-to="3">3</span></div><div className="c-mlab">countries</div><div className="c-msrc">india · uae · us</div></div>
          <div className="c-mcell lit" style={{ "--i": "3" } as React.CSSProperties}><div className="c-mnum"><span className="cu" data-to="10">10</span><span className="su">+</span></div><div className="c-mlab">products shipped</div><div className="c-msrc">fintech · ai · enterprise</div></div>
        </div>
      </div>
    </div>
  </div>
  */}

  <section className="worksec wrap">
    <span className="eyebrow sec-kick">selected work</span>
    <div className="work-stack">
      <a className="wcard cn-tilt" style={{ "--i": "0", translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" } as React.CSSProperties} href="https://github.com/Dinesh-codeswell/fried-viper" target="_blank" rel="noopener" data-cine-tilt="1">
        <div className="wm"><span className="wnum">9+</span><span className="wunit">agent clis coordinated</span></div>
        <div className="wbody"><span className="wtag">fried viper · agentic ai · 2026</span><h3>a hacker hostel of self-coordinating agents.</h3><p>Terminal-agent CLIs turned into an engineering team with memory and a mailbox.</p></div>
        <span className="wgo">↗</span>
      </a>
      <a className="wcard cn-tilt" style={{ "--i": "1", translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" } as React.CSSProperties} href="https://github.com/Dinesh-codeswell/lyrical-video" target="_blank" rel="noopener" data-cine-tilt="1">
        <div className="wm"><span className="wnum">1080p</span><span className="wunit">h.264 renders</span></div>
        <div className="wbody"><span className="wtag">lyrical video · creative code · 2026</span><h3>cinematic lyric videos from raw audio.</h3><p>Web studio, desktop GUI and headless CLI — with AI lyric transcription.</p></div>
        <span className="wgo">↗</span>
      </a>
      <a className="wcard cn-tilt" style={{ "--i": "2", translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" } as React.CSSProperties} href="https://github.com/Dinesh-codeswell/music-profile-scraper" target="_blank" rel="noopener" data-cine-tilt="1">
        <div className="wm"><span className="wnum">0</span><span className="wunit">api keys required</span></div>
        <div className="wbody"><span className="wtag">music profile scraper · live · 2026</span><h3>artist intelligence, zero auth.</h3><p>Spotify/Apple ingestion, EPK generation and an MCP server for music intelligence.</p></div>
        <span className="wgo">↗</span>
      </a>
      <a className="wcard cn-tilt" style={{ "--i": "3", translate: "none", rotate: "none", scale: "none", transform: "perspective(1100px)" } as React.CSSProperties} href="https://job-dashboard-dun-eight.vercel.app/" target="_blank" rel="noopener" data-cine-tilt="1">
        <div className="wm"><span className="wnum">1,000+</span><span className="wunit">daily users</span></div>
        <div className="wbody"><span className="wtag">job dashboard · live · 2026</span><h3>a job board the community actually uses.</h3><p>Live openings refreshed hourly — 1,000+ people check it every day.</p></div>
        <span className="wgo">↗</span>
      </a>
    </div>
  </section>

  {/* writing section — commented out (old Medium posts; medium handle updated to @dineshkatal for future use)
  <section className="writingsec wrap">
    <span className="eyebrow sec-kick">writing</span>
    <div className="wr-head">
      <div className="wr-headl">
        <h2>He <em>writes</em>, too.</h2>
        <p className="wr-sub">Essays and notes on design process, research, and how designers learn.</p>
      </div>
      <a className="wr-all" href="https://medium.com/@dineshkatal" target="_blank" rel="noopener">read on medium <span>↗</span></a>
    </div>
    <div className="wr-list">
      <a className="wr-post" href="https://medium.com/design-bootcamp/designing-across-borders-9b0a590459e7" target="_blank" rel="noopener">
        <span className="wr-n">01</span>
        <span className="wr-body"><span className="wr-title">Designing across borders</span><span className="wr-date">reflection · Jul 28, 2025</span></span>
        <span className="wr-arrow"><span>↗</span></span>
      </a>
      <a className="wr-post" href="https://medium.com/@dineshkatal/design-is-not-just-a-job-its-a-conversation-042dfa6d67f5" target="_blank" rel="noopener">
        <span className="wr-n">02</span>
        <span className="wr-body"><span className="wr-title">Design Is Not Just a Job, it’s a Conversation.</span><span className="wr-date">essay · Jul 26, 2025</span></span>
        <span className="wr-arrow"><span>↗</span></span>
      </a>
      <a className="wr-post" href="https://medium.com/@dineshkatal/unlocking-innovation-a-glimpse-into-the-new-innovation-hub-at-mashreq-headquarters-d43da9fcf6af" target="_blank" rel="noopener">
        <span className="wr-n">03</span>
        <span className="wr-body"><span className="wr-title">Unlocking Innovation: A Glimpse into the New Innovation Hub at Mashreq Headquarters</span><span className="wr-date">field note · Sep 26, 2023</span></span>
        <span className="wr-arrow"><span>↗</span></span>
      </a>
    </div>
  </section>
  */}

  <section className="closesec wrap">
    <div className="close rv">
      <h2>think i'd fit your team? <em>let's talk</em>.</h2>
      <p>Open to senior product design roles. The fastest way to reach me is email, or skim the résumé.</p>
      <div className="cta-row">
        <a className="ink-btn primary mag" href="mailto:dineshkatal.work@gmail.com" data-cine-mag="1"><span className="lbl">email me <span className="arw">→</span></span></a>
        <a className="ink-btn mag" href="../assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener" data-cine-mag="1"><span className="lbl">↓ résumé</span></a>
        <a className="ink-btn mag" href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener" data-cine-mag="1"><span className="lbl">in · linkedin</span></a>
        <a className="ink-btn mag" href="/beyond" data-cine-mag="1"><span className="lbl">the human side <span className="arw">→</span></span></a>
      </div>
    </div>
  </section>


  <Script src="/transition.js"  strategy="afterInteractive" />
  
  <Script src="/footer.js"  strategy="afterInteractive" />
  <Script id="script-quick-2" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)){
      document.querySelectorAll('.rv').forEach(function(el){ el.classList.add('in'); }); return;
    }
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{threshold:.15});
    document.querySelectorAll('.rv').forEach(function(el){ io.observe(el); });
  })();` }} />

  <Script id="script-quick-3" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* stat band — staggered reveal + count-up with a landing pop */
  (function(){
    var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    function fmt(n,comma){ n=Math.round(n); return comma ? n.toLocaleString('en-US') : String(n); }
    function easeOutExpo(t){ return t>=1 ? 1 : 1-Math.pow(2,-10*t); }
    function count(el, dur){
      var to=parseFloat(el.getAttribute('data-to'))||0;
      var comma=el.getAttribute('data-comma')==='1';
      if(reduce){ el.textContent=fmt(to,comma); return; }
      dur=dur||1300; var start=null;
      function step(ts){ if(start===null) start=ts; var p=Math.min((ts-start)/dur,1);
        el.textContent=fmt(to*easeOutExpo(p),comma);
        if(p<1){ requestAnimationFrame(step); } else { el.textContent=fmt(to,comma); el.classList.add('done'); } }
      requestAnimationFrame(step);
    }
    function lightUp(stage){
      if(stage.classList.contains('lit')) return;
      stage.classList.add('lit');
      stage.querySelectorAll('.c-mcell').forEach(function(c){ c.classList.add('lit'); });
      stage.querySelectorAll('.cu').forEach(function(el){
        var cell=el.closest('.c-mcell'); var i=cell ? (parseFloat(cell.style.getPropertyValue('--i'))||0) : -1;
        var delay = el.closest('.c-bignum') ? 120 : 260 + i*80;
        setTimeout(function(){ count(el); }, reduce ? 0 : delay);
      });
    }
    var stages=document.querySelectorAll('.c-stage');
    if(!stages.length) return;
    if(reduce || !('IntersectionObserver' in window)){ stages.forEach(lightUp); return; }
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ lightUp(e.target); io.unobserve(e.target); } }); },{threshold:.25});
    stages.forEach(function(s){ io.observe(s); });
    setTimeout(function(){ stages.forEach(lightUp); }, 1500);
    if(matchMedia('(hover:hover) and (pointer:fine)').matches){
      stages.forEach(function(stage){
        var big=stage.querySelector('.c-bignum'), hero=stage.querySelector('.c-hero');
        if(!big || !hero) return;
        hero.addEventListener('mousemove', function(e){ var r=big.getBoundingClientRect();
          var dx=(e.clientX-(r.left+r.width/2))/r.width, dy=(e.clientY-(r.top+r.height/2))/r.height;
          big.style.transform='translate('+(dx*16).toFixed(1)+'px,'+(dy*11).toFixed(1)+'px)'; });
        hero.addEventListener('mouseleave', function(){ big.style.transform=''; });
      });
      // re-tick on hover — the numbers come back to life
      document.querySelectorAll('.c-mcell, .c-bignum').forEach(function(host){
        var el=host.querySelector('.cu'); if(!el) return; var busy=false;
        host.addEventListener('mouseenter', function(){
          if(busy || !el.classList.contains('done')) return;
          busy=true; count(el, 600);
          setTimeout(function(){ busy=false; }, 660);
        });
      });
    }
  })();` }} />

  <Script id="script-quick-4" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* magnetic CTAs */
  (function(){
    if(!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    document.querySelectorAll('.mag').forEach(function(btn){
      var lbl=btn.querySelector('.lbl');
      btn.addEventListener('mousemove',function(e){
        var r=btn.getBoundingClientRect();
        var x=e.clientX-(r.left+r.width/2), y=e.clientY-(r.top+r.height/2);
        btn.style.transform='translate('+(x*0.28).toFixed(1)+'px,'+(y*0.4).toFixed(1)+'px)';
        if(lbl) lbl.style.transform='translate('+(x*0.14).toFixed(1)+'px,'+(y*0.2).toFixed(1)+'px)';
      });
      btn.addEventListener('mouseleave',function(){ btn.style.transform=''; if(lbl) lbl.style.transform=''; });
    });
  })();` }} />

  <Script id="script-quick-5" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* shared fluid stripe background + cursor ripple (same as the about page) */
  (function(){
    var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    var canvas=document.getElementById('fx');
    var fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
    if(!canvas || reduce || !fine){ if(canvas) canvas.style.display='none'; return; }
    var gl=canvas.getContext('webgl',{premultipliedAlpha:false,antialias:true})||canvas.getContext('experimental-webgl');
    if(!gl){ canvas.style.display='none'; return; }
    var vsrc='attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    var fsrc=[
      'precision highp float;',
      'uniform vec2 uRes; uniform vec2 uMouse; uniform float uTime; uniform float uAmp;',
      'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
      'float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.0-2.0*f);',
      '  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);}',
      'void main(){',
      '  vec2 fc=gl_FragCoord.xy; vec2 uv=fc/uRes; float t=uTime*0.33;',
      '  vec2 q=vec2(noise(uv*3.0+t), noise(uv*3.0-t+5.2));',
      '  float flow=noise(uv*2.4 + q*0.9 + t*0.6);',
      '  vec2 d=fc-uMouse; float len=length(d); float infl=exp(-len/(uRes.y*0.30));',
      '  float ripple=sin(len*0.02 - uTime*1.9); float bend=infl*ripple*(20.0+uAmp*40.0);',
      '  float sway=(flow-0.5)*40.0 + sin(uv.y*7.0+uTime*0.5)*4.0;',
      '  float x=fc.x + bend + sway; float period=uRes.x/58.0;',
      '  float s=sin(x/period*6.2831853);',
      '  float line=smoothstep(0.40,0.98,s)*0.50 + smoothstep(-0.98,-0.40,-s)*0.16;',
      '  vec3 cream=vec3(0.949,0.926,0.878); vec3 warm=vec3(0.918,0.760,0.640);',
      '  vec3 col=mix(cream,warm, smoothstep(0.30,0.75,flow));',
      '  float a=line*0.60 + (flow-0.5)*0.12;',
      '  gl_FragColor=vec4(col, clamp(a,0.0,0.8));',
      '}'
    ].join('\\n');
    function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o;}
    var prog=gl.createProgram();
    gl.attachShader(prog,sh(gl.VERTEX_SHADER,vsrc)); gl.attachShader(prog,sh(gl.FRAGMENT_SHADER,fsrc));
    gl.linkProgram(prog); gl.useProgram(prog);
    var buf=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,buf);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
    var pl=gl.getAttribLocation(prog,'p'); gl.enableVertexAttribArray(pl); gl.vertexAttribPointer(pl,2,gl.FLOAT,false,0,0);
    var uRes=gl.getUniformLocation(prog,'uRes'), uMouse=gl.getUniformLocation(prog,'uMouse'), uTime=gl.getUniformLocation(prog,'uTime'), uAmp=gl.getUniformLocation(prog,'uAmp');
    var dpr=Math.min(devicePixelRatio||1,1.75), W=0,H=0;
    function resize(){ W=innerWidth; H=innerHeight; canvas.width=W*dpr; canvas.height=H*dpr; gl.viewport(0,0,canvas.width,canvas.height); }
    resize(); addEventListener('resize',resize);
    var tmx=W*dpr*0.5, tmy=H*dpr*0.5, mx=tmx, my=tmy, amp=0, awake=false, lastX=tmx, lastY=tmy;
    addEventListener('pointermove',function(e){ tmx=e.clientX*dpr; tmy=(H-e.clientY)*dpr; if(!awake){ awake=true; canvas.classList.add('live'); } },{passive:true});
    addEventListener('pointerleave',function(){ canvas.classList.remove('live'); });
    var t0=performance.now();
    (function frame(now){
      mx+=(tmx-mx)*0.18; my+=(tmy-my)*0.18;
      var speed=Math.hypot(mx-lastX,my-lastY); lastX=mx; lastY=my;
      amp+=(Math.min(speed*0.05,1.0)-amp)*0.08;
      gl.uniform2f(uRes,canvas.width,canvas.height); gl.uniform2f(uMouse,mx,my);
      gl.uniform1f(uTime,(now-t0)/1000); gl.uniform1f(uAmp,amp);
      gl.drawArrays(gl.TRIANGLES,0,3); requestAnimationFrame(frame);
    })(t0);
  })();` }} />
  <Script src="/buttons.js"  strategy="afterInteractive" />
  <Script src="/nav.js?v=6"  strategy="afterInteractive" />
  {/* cinematic layer: magnetic CTAs + cursor tilt/sheen */}
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
  <Script src="/cinematic.js?v=1" strategy="afterInteractive" />
  <Script src="/smooth-scroll.js"  strategy="afterInteractive" />


<footer id="gfooter" className="ground"><div className="gf-sky" aria-hidden="true"><span className="gf-cloud c1"></span><span className="gf-cloud c2"></span><span className="gf-cloud c3"></span><span className="gf-cloud c4"></span></div><div className="ground-contact"><div className="gf-top"><div className="gf-cta"><div className="ground-kick">contact</div><h2 className="ground-ttl">let’s build <em>something that matters.</em></h2><a className="ground-mail" href="mailto:dineshkatal.work@gmail.com">dineshkatal.work@gmail.com <span className="arw">→</span></a><p className="ground-sub">care about <b>design</b>, <b>impact</b>, and products that actually ship? you know where to find me.</p></div><nav className="gf-cols" aria-label="footer"><div className="gf-col"><span className="gf-h">explore</span><a href="/work">work</a><a href="/beyond">lil about me</a><a href="/now">now</a><a href="assets/files/Dinesh_Resume.pdf" target="_blank" rel="noopener">résumé ↓</a></div><div className="gf-col"><span className="gf-h">connect</span><a href="https://www.linkedin.com/in/dineshkatal/" target="_blank" rel="noopener">linkedin ↗</a><button type="button" className="gf-copy" data-copy-email="dineshkatal.work@gmail.com" title="Click to copy email">email <span className="gf-copied" aria-hidden="true">copied ✓</span></button></div><div className="gf-col"><span className="gf-h">status</span><span className="gf-avail"><i></i> open to new work</span><span className="gf-line">based in Gurugram, India</span><span className="gf-line">local time · IST <b id="gfClock">—</b></span></div></nav></div><div className="gf-bar"><a className="gf-mark" href="/"><svg viewBox="0 0 30 26" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><path d="M9 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none"></path><line x1="15" y1="7" x2="15" y2="4.2"></line><line x1="7.2" y1="10.2" x2="5.4" y2="8.6"></line><line x1="22.8" y1="10.2" x2="24.6" y2="8.6"></line><line x1="2.5" y1="18" x2="27.5" y2="18"></line></svg>dinesh.</a><div className="gf-meta"><span>© 2026 dinesh kumar katal</span><span>designed &amp; built by me — and a few too many coffees · switzer + react</span></div></div></div></footer>
<style dangerouslySetInnerHTML={{ __html: `:root{
    --paper:var(--t-paper); --card:#ffffff; --ink:var(--t-ink); --soft:var(--t-ink-soft); --muted:var(--t-ink-faint);
    --accent:#2f6cb8; --pop:#0083E7; --sage:#5fd29a; --gold:var(--t-gold); --line:rgba(20,32,52,.12);
    --serif:"Satoshi","Switzer",Georgia,serif; --disp:"Satoshi","Switzer",sans-serif; --sans:"Satoshi","Switzer",system-ui,sans-serif; --mono:"Geist Mono",monospace;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  html,body{overflow-x:hidden;}
  body{background:transparent;color:var(--ink);font-family:var(--sans);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased;}
  .wrap{max-width:1120px;margin:0 auto;padding:0 6vw;}

  /* breezy sky ground — matches the homepage / about atmosphere */
  .bgfx{position:fixed;inset:-12%;z-index:-2;pointer-events:none;
    background-image:
      radial-gradient(68% 58% at 10% 6%, #E7EEFB 0%, transparent 60%),
      radial-gradient(60% 58% at 94% 18%, #EDEAFB 0%, transparent 58%),
      radial-gradient(82% 70% at 80% 102%, #E4F4F0 0%, transparent 62%),
      linear-gradient(180deg, #FAFBFE 0%, #EAF1FB 100%);
    animation:bgdrift 28s ease-in-out infinite alternate;will-change:transform;}
  .bgfx::after{content:"";position:absolute;inset:0;
    background-image:
      radial-gradient(40% 55% at 14% 18%, rgba(159,184,224,.26), transparent 70%),
      radial-gradient(38% 52% at 86% 74%, rgba(140,188,233,.30), transparent 72%),
      radial-gradient(34% 46% at 60% 30%, rgba(185,220,244,.24), transparent 70%);
    animation:blobdrift 30s ease-in-out infinite alternate;will-change:transform;}
  @keyframes bgdrift{0%{transform:translate3d(0,0,0)}50%{transform:translate3d(-1%,.7%,0)}100%{transform:translate3d(1%,-.7%,0)}}
  @keyframes blobdrift{0%{transform:translate3d(0,0,0)}50%{transform:translate3d(3%,-2.5%,0)}100%{transform:translate3d(-2.5%,3%,0)}}
  #fx{position:fixed;inset:0;width:100%;height:100%;z-index:3;pointer-events:none;mix-blend-mode:soft-light;opacity:0;transition:opacity .6s ease;display:none;}
  #fx.live{opacity:0;}
  /* grain — the tactile print layer */
  .grain{position:fixed;inset:0;z-index:4;pointer-events:none;opacity:.05;mix-blend-mode:overlay;background-size:170px;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170' height='170'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}

  .wnav{display:flex;justify-content:space-between;align-items:center;max-width:1120px;margin:0 auto;padding:22px 6vw;position:relative;z-index:6;}
  .brand{font-family:var(--serif);font-weight:600;font-size:22px;letter-spacing:-.01em;color:var(--ink);text-decoration:none;}
  .brand .a{color:var(--accent);}
  .snav{display:flex;gap:4px;font-family:var(--mono);font-size:12px;text-transform:lowercase;letter-spacing:.06em;}
  .snav a{color:var(--soft);text-decoration:none;padding:7px 13px;border-radius:20px;border:1px solid transparent;transition:.2s;}
  .snav a:hover{color:var(--ink);border-color:var(--line);}
  .snav a.on{color:var(--accent);}

  .eyebrow{font-family:var(--mono);text-transform:uppercase;letter-spacing:.16em;font-size:12px;color:var(--muted);display:inline-flex;align-items:center;gap:10px;}
  .eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--accent);}

  /* ===== hero — kinetic ===== */
  .qhero{position:relative;z-index:5;padding:42px 6vw 6px;}
  .qhead{font-family:var(--serif);font-weight:400;font-size:clamp(42px,7.4vw,104px);line-height:.96;letter-spacing:-.03em;margin:18px 0 0;max-width:14ch;
    font-variation-settings:'wght' 600,'opsz' 144;}
  .qhead em{font-style:normal;color:var(--accent);}
  .qhead .ln{display:block;overflow:hidden;}
  .qhead .ln > span{display:block;transform:translateY(102%);}
  .qload .qhead .ln > span{animation:lnup 1s cubic-bezier(.16,1,.3,1) forwards;}
  .qhead .ln:nth-child(2) > span{animation-delay:.12s;}
  .qhead .ln:nth-child(3) > span{animation-delay:.24s;}
  @keyframes lnup{to{transform:translateY(0);}}
  .qload .qhead{animation:solidify 1.3s cubic-bezier(.16,1,.3,1) .1s forwards;}
  @keyframes solidify{from{font-variation-settings:'wght' 300,'opsz' 144;}to{font-variation-settings:'wght' 600,'opsz' 144;}}
  .qmeta{margin-top:24px;opacity:0;transform:translateY(12px);}
  .qload .qmeta{animation:fadeup .8s cubic-bezier(.16,1,.3,1) .5s forwards;}
  @keyframes fadeup{to{opacity:1;transform:none;}}
  .qident{font-family:var(--mono);font-size:13.5px;letter-spacing:.03em;color:var(--soft);}
  .qspec-mentor{margin-top:10px;}
  .qspec-mentor .qk{color:var(--accent);}
  .qspec-mentor .qv b{font-weight:600;}
  .qident b{color:var(--ink);font-weight:500;} .qident .dash{color:var(--muted);margin:0 11px;}
  .qspec{margin-top:22px;display:flex;flex-wrap:wrap;gap:18px 38px;}
  .qcell{display:flex;flex-direction:column;gap:7px;}
  .qcell .qk{font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);}
  .qcell .qv{font-family:var(--mono);font-size:13px;letter-spacing:.02em;color:var(--ink);display:inline-flex;align-items:center;gap:10px;}
  .qcell .live{position:relative;width:8px;height:8px;border-radius:50%;background:var(--sage);box-shadow:0 0 0 4px rgba(143,189,108,.18);flex:0 0 auto;}
  .qcell .live::after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--sage);animation:qpulse 2.6s ease-out infinite;}
  @keyframes qpulse{0%{transform:scale(1);opacity:.55}70%{transform:scale(2.8);opacity:0}100%{transform:scale(2.8);opacity:0}}
  @media(prefers-reduced-motion:reduce){
    .qhead{font-variation-settings:'wght' 600,'opsz' 144 !important;animation:none !important;}
    .qhead .ln > span{transform:none !important;animation:none !important;}
    .qmeta{opacity:1 !important;transform:none !important;animation:none !important;}
    .qcell .live::after{animation:none !important;}
  }

  /* ===== marquee ===== */
  .marquee{position:relative;z-index:5;overflow:hidden;margin-top:44px;padding:15px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);
    -webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);}
  .marquee-track{display:inline-flex;white-space:nowrap;animation:marq 34s linear infinite;will-change:transform;}
  .marquee:hover .marquee-track{animation-play-state:paused;}
  .marquee .it{font-family:var(--disp);font-weight:600;font-size:15px;letter-spacing:.01em;text-transform:lowercase;color:var(--ink);padding:0 22px;display:inline-flex;align-items:center;gap:22px;}
  .marquee .it::before{content:"✦";color:var(--accent);font-size:11px;}
  @keyframes marq{to{transform:translateX(-50%);}}
  @media(prefers-reduced-motion:reduce){.marquee-track{animation:none;}}

  /* ===== stat band ===== */
  .statband{position:relative;z-index:5;margin-top:0;background:linear-gradient(180deg,rgba(255,255,255,.5),rgba(255,255,255,.28));-webkit-backdrop-filter:blur(8px) saturate(1.2);backdrop-filter:blur(8px) saturate(1.2);border-top:1px solid rgba(255,255,255,.6);border-bottom:1px solid var(--line);}
  .cu{display:inline-block;font-variant-numeric:tabular-nums;}
  .c-stage{padding:48px 0 44px;opacity:0;transform:translateY(20px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1);}
  .c-stage.lit{opacity:1;transform:none;}
  .c-kick{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:16px;}
  .c-hero{display:flex;align-items:flex-end;gap:26px;flex-wrap:wrap;}
  .c-bignum{font-family:var(--disp);font-weight:600;font-size:clamp(64px,11vw,140px);line-height:.82;letter-spacing:-.05em;color:var(--ink);text-shadow:0 4px 30px rgba(22,32,43,.12);
    transition:transform .5s cubic-bezier(.16,1,.3,1);will-change:transform;}
  .c-bignum .su{display:inline-block;font-size:.34em;color:var(--accent);vertical-align:.6em;font-weight:600;margin-left:2px;transition:transform .4s cubic-bezier(.34,1.56,.64,1);}
  .c-hero:hover .c-bignum .su{transform:translateY(-7px);}
  .c-herolab{padding-bottom:14px;}
  .c-herolab b{display:block;font-family:var(--disp);font-weight:700;font-size:17px;color:var(--ink);}
  .c-herolab span{display:block;margin-top:3px;font-family:var(--mono);font-size:10.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);}
  .c-mini{display:grid;grid-template-columns:repeat(4,1fr);margin-top:40px;border-top:1px solid var(--ink);}
  .c-mcell{position:relative;padding:24px 22px 0;border-right:1px solid var(--line);cursor:default;
    opacity:0;transform:translateY(16px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1);transition-delay:calc(var(--i,0)*80ms);}
  .c-mcell.lit{opacity:1;transform:none;} .c-mcell:last-child{border-right:none;}
  .c-mcell::after{content:"";position:absolute;left:0;top:-1px;width:100%;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .42s cubic-bezier(.16,1,.3,1);}
  .c-mcell:hover::after{transform:scaleX(1);}
  .c-mcell:hover{background:linear-gradient(180deg,rgba(47,108,184,.09),transparent 72%);}
  .c-mnum{font-family:var(--disp);font-weight:600;font-size:clamp(28px,3.4vw,40px);line-height:1;letter-spacing:-.025em;color:var(--ink);transition:transform .35s cubic-bezier(.16,1,.3,1),color .3s;}
  .c-mcell:hover .c-mnum{transform:translateY(-3px);color:var(--accent);}
  .c-mnum .su{font-size:.5em;color:var(--accent);font-weight:600;margin-left:1px;}
  .c-mlab{margin-top:11px;font-family:var(--sans);font-size:13.5px;color:var(--soft);}
  .c-mcell .c-msrc{margin-top:6px;font-family:var(--mono);font-size:9px;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);}
  @media(max-width:760px){.c-mini{grid-template-columns:1fr 1fr;}.c-mcell:nth-child(2){border-right:none;}.c-mcell:nth-child(-n+2){border-bottom:1px solid var(--line);padding-bottom:18px;}.c-mcell:nth-child(3),.c-mcell:nth-child(4){padding-top:18px;}}
  @media(max-width:440px){.c-mini{grid-template-columns:1fr;}.c-mcell{border-right:none;}}
  @media(prefers-reduced-motion:reduce){.c-stage,.c-mcell{opacity:1;transform:none;transition:none;}}

  /* ===== sticky-stacking work ===== */
  .worksec{position:relative;z-index:5;padding:54px 0 30px;}
  .sec-kick{display:block;margin-bottom:26px;}
  .work-stack{display:flex;flex-direction:column;gap:22px;}
  /* Cards render flat, in normal flow. They used to be position:sticky with a
     per-card \`top\` offset (the "deck"), but cinematic.js auto-tags .wcard with
     .cn-tilt and cinematic.css — which loads AFTER this block — sets
     .cn-tilt{position:relative}. That silently demoted them to relative, so the
     \`top\` offsets stopped pinning and became plain downward shifts: the last card
     was pushed 146px below .work-stack and 116px into the writing section
     (88px on mobile). The deck has not actually worked on this page since. */
  .wcard{position:relative;text-decoration:none;color:var(--ink);
    background:rgba(255,255,255,.62);-webkit-backdrop-filter:blur(16px) saturate(1.4);backdrop-filter:blur(16px) saturate(1.4);
    border:1px solid rgba(255,255,255,.7);border-left:3px solid var(--accent);border-radius:18px;
    padding:30px 34px;min-height:212px;display:grid;grid-template-columns:minmax(150px,.82fr) 2fr auto;gap:28px;align-items:center;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.7), 0 22px 50px -30px rgba(20,42,84,.34),0 2px 10px -6px rgba(20,42,84,.14);
    transition:box-shadow .3s ease,border-color .2s ease,transform .3s ease;}
  .wcard:hover{transform:translateY(-2px);box-shadow:inset 0 1px 0 rgba(255,255,255,.85), 0 34px 66px -28px rgba(20,42,84,.4),0 2px 10px -6px rgba(20,42,84,.18);}
  .wm .wnum{display:block;font-family:var(--disp);font-weight:600;font-size:clamp(38px,5vw,66px);line-height:.88;letter-spacing:-.035em;color:var(--ink);}
  .wm .wunit{display:block;margin-top:10px;font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--soft);}
  .wbody{min-width:0;}
  .wbody .co-logo{display:block;height:32px;width:auto;margin-bottom:14px;}
  .wbody .co-logo[src*="podonos"]{height:25px;}  /* tightly-cropped icon reads larger — balance it */
  .wbody .wtag{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);}
  .wbody h3{font-family:var(--serif);font-weight:500;font-size:clamp(24px,2.6vw,32px);letter-spacing:-.01em;text-transform:lowercase;margin:7px 0 8px;transition:color .2s;}
  .wcard:hover h3{color:var(--accent);}
  .wbody p{font-size:14.5px;color:var(--soft);line-height:1.5;max-width:42ch;}
  .wgo{font-family:var(--mono);font-size:20px;color:var(--muted);align-self:flex-start;transition:transform .25s ease,color .25s ease;}
  .wcard:hover .wgo{color:var(--accent);transform:translate(3px,-3px);}
  /* floating lock — pops on hover of the gated onepin card and chases the cursor (mirrors the about-page mail letter) */
  .lockfloat{position:fixed;left:0;top:0;z-index:60;font-size:clamp(52px,6vw,74px);line-height:1;pointer-events:none;
    transform:translate3d(-100px,-100px,0) translate(-50%,-50%) scale(0);will-change:transform;
    filter:drop-shadow(0 8px 14px rgba(120,60,30,.32));}
  @media(max-width:680px){
    .wcard{grid-template-columns:1fr;gap:16px;min-height:0;}
    .wgo{position:absolute;top:26px;right:28px;align-self:auto;}
  }

  /* ===== close — magnetic CTAs ===== */
  .closesec{position:relative;z-index:5;padding:46px 0 90px;}
  .close{background:rgba(255,255,255,.6);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.7);border-radius:22px;padding:46px 46px 42px;box-shadow:inset 0 1px 0 rgba(255,255,255,.8), 0 30px 64px -38px rgba(20,42,84,.4);position:relative;overflow:hidden;}
  .close::after{content:"";position:absolute;right:-60px;top:-60px;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,rgba(140,188,233,.28),transparent 70%);pointer-events:none;}
  .close h2{font-family:var(--serif);font-weight:500;font-size:clamp(30px,4.2vw,52px);letter-spacing:-.02em;line-height:1.02;max-width:18ch;position:relative;}
  .close h2 em{font-style:normal;color:var(--accent);}
  .close p{margin-top:14px;color:var(--soft);font-size:15.5px;max-width:48ch;}
  .cta-row{margin-top:28px;display:flex;gap:12px;flex-wrap:wrap;align-items:center;}
  .mag{will-change:transform;transition:transform .4s cubic-bezier(.23,1,.32,1);}
  .mag .lbl{display:inline-flex;transition:transform .4s cubic-bezier(.23,1,.32,1);}

  /* ===== writing / blog ===== */
  .writingsec{position:relative;z-index:5;padding:54px 0 34px;border-top:1px solid var(--line);}
  .wr-head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;margin:6px 0 26px;}
  .wr-head h2{font-family:var(--serif);font-weight:400;font-size:clamp(26px,3.4vw,40px);line-height:1.04;letter-spacing:-.02em;color:var(--ink);}
  .wr-head h2 em{font-style:normal;color:var(--accent);}
  .wr-sub{margin-top:11px;font-family:var(--mono);font-size:12.5px;letter-spacing:.02em;color:var(--muted);max-width:46ch;line-height:1.55;}
  .wr-all{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:12px;letter-spacing:.05em;text-transform:lowercase;color:var(--soft);text-decoration:none;white-space:nowrap;padding-bottom:4px;transition:color .2s ease;}
  .wr-all span{transition:transform .2s ease;}
  .wr-all:hover{color:var(--accent);}
  .wr-all:hover span{transform:translate(3px,-3px);}
  .wr-list{display:flex;flex-direction:column;}
  .wr-post{position:relative;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:26px;padding:26px 16px 26px 18px;border-top:1px solid var(--line);text-decoration:none;color:var(--ink);transition:padding-left .3s cubic-bezier(.2,1,.3,1),background .3s ease;}
  .wr-post:last-child{border-bottom:1px solid var(--line);}
  .wr-post::before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:0;background:var(--accent);border-radius:2px;transition:height .32s cubic-bezier(.2,1,.3,1);}
  .wr-post:hover{padding-left:30px;background:linear-gradient(90deg,rgba(47,108,184,.07),transparent 62%);}
  .wr-post:hover::before{height:58%;}
  .wr-n{font-family:var(--mono);font-size:13px;color:var(--muted);font-variant-numeric:tabular-nums;align-self:start;padding-top:5px;transition:color .3s ease;}
  .wr-post:hover .wr-n{color:var(--accent);}
  .wr-title{display:block;font-family:var(--sans);font-weight:500;font-size:clamp(19px,2vw,26px);letter-spacing:-.01em;line-height:1.16;color:var(--ink);transition:color .2s ease;}
  .wr-post:hover .wr-title{color:var(--accent);}
  .wr-date{display:block;margin-top:9px;font-family:var(--mono);font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);}
  .wr-arrow{width:42px;height:42px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--soft);flex:0 0 auto;transition:background .25s ease,color .25s ease,border-color .25s ease;}
  .wr-arrow span{font-size:17px;transition:transform .25s ease;}
  .wr-post:hover .wr-arrow{background:var(--accent);border-color:var(--accent);color:var(--paper);}
  .wr-post:hover .wr-arrow span{transform:translate(2px,-2px);}

  /* reveal */
  .rv{opacity:0;transform:translateY(22px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1);}
  .rv.in{opacity:1;transform:none;}

  @media(max-width:760px){.close{padding:32px 26px;}.cta-row{align-items:stretch;}}
  @media(max-width:480px){.cta-row{flex-direction:column;}.qident .sep{margin:0 6px;}}
  @media(prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none;}.bgfx{animation:none !important;}#fx{display:none !important;}.mag{transition:none;}}

  /* ─── print / save-as-pdf ─── */
  @media print{
    #gnav,.snav,#gnavMenu,#fx,.bgfx,.gf-cloud,.cloudfield,#aiSplash,footer,.gf,.ink-btn,.cta-row,.mag,.wr-all,.cal-pop{display:none !important;}
    html,body{background:#fff !important;color:#111 !important;overflow:visible !important;}
    body{font-size:12.5px;line-height:1.5;}
    .wrap{max-width:100%;padding:0 8mm;}
    section{padding:16px 0 !important;}
    .worksec,.closesec{break-inside:avoid-page;}
    .wcard,.close,.wr-post{box-shadow:none !important;background:#fff !important;border-color:#ddd !important;break-inside:avoid;}
    .qhead{font-size:30px !important;}
    .rv{opacity:1 !important;transform:none !important;transition:none !important;}
    a{color:#111 !important;text-decoration:none !important;}
    a[href^="http"]::after{content:" (" attr(href) ")";font-size:9px;color:#666;word-break:break-all;}
    a[href^="mailto"]::after,a[href^="/assets"]::after{content:"";}
    h2{break-after:avoid;}
  }` }} />
    </>
  );
}
