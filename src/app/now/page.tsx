import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now · Dinesh Kumar Katal",
  description:
    "What Dinesh is building, learning and shipping right now — updated as things change.",
};

export default function NowPage() {
  const items: { k: string; t: string; d: React.ReactNode }[] = [
    {
      k: "building",
      t: "product at Songdew Media",
      d: (
        <>
          revamping the <b>EPK module</b> on a music &amp; artist platform, running
          AI-driven onboarding, and cutting fake signups with a fraud-detection pipeline.
        </>
      ),
    },
    {
      k: "mentoring",
      t: "top 0.1% on topmate · 5.0 on unstop",
      d: (
        <>
          resume reviews, PM career chats and data-role guidance — book a session on{" "}
          <a href="https://topmate.io/dinesh_katal" target="_blank" rel="noopener">topmate ↗</a> or{" "}
          <a href="https://unstop.com/mentor/DineshKatal" target="_blank" rel="noopener">unstop ↗</a>.
        </>
      ),
    },
    {
      k: "shipping",
      t: "open source, off the clock",
      d: (
        <>
          <a href="https://github.com/Dinesh-codeswell/fried-viper" target="_blank" rel="noopener">fried viper</a> (multi-agent
          terminal harness), <a href="https://github.com/Dinesh-codeswell/lyrical-video" target="_blank" rel="noopener">lyrical video</a>{" "}
          (1080p render suite) and <a href="https://github.com/Dinesh-codeswell/music-profile-scraper" target="_blank" rel="noopener">music profile scraper</a> (artist intelligence + MCP).
        </>
      ),
    },
    {
      k: "learning",
      t: "agent frameworks & llm tooling",
      d: (
        <>
          langchain, rag pipelines, and evals — pushing deeper into the ai product stack
          one shipped experiment at a time.
        </>
      ),
    },
    {
      k: "reading",
      t: "product & growth",
      d: (
        <>
          working through the pm resource hub curated at beyond career — 50+ essays and 20+ books
          on product, growth and data.
        </>
      ),
    },
    {
      k: "open to",
      t: "pm & product analytics roles",
      d: (
        <>
          based in gurugram, india. if you care about products that ship and metrics that move —{" "}
          <a href="mailto:dineshkatal.work@gmail.com">say hi ↗</a>.
        </>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .now-wrap{min-height:100vh;position:relative;overflow:hidden;background:linear-gradient(180deg,#2f6cb8 0%,#5a93cf 40%,#8cbce9 66%,#b9dcf4 100%);}
        .now-in{position:relative;z-index:2;max-width:760px;margin:0 auto;padding:clamp(72px,12vh,130px) 6vw clamp(90px,14vh,150px);}
        .now-kick{font-family:var(--font-mono,ui-monospace,monospace);font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:#dceafd;font-weight:600;}
        .now-ttl{font-family:var(--font-display,system-ui);font-weight:600;font-size:clamp(38px,7vw,64px);line-height:1.02;letter-spacing:-.03em;color:#fff;margin:14px 0 10px;}
        .now-ttl em{font-style:italic;}
        .now-sub{color:#eaf3fd;font-size:15.5px;line-height:1.6;max-width:520px;}
        .now-list{margin-top:clamp(30px,5vh,48px);display:flex;flex-direction:column;gap:14px;}
        .now-item{background:rgba(255,255,255,.72);backdrop-filter:blur(14px) saturate(1.35);-webkit-backdrop-filter:blur(14px) saturate(1.35);
          border:1px solid rgba(255,255,255,.78);border-radius:16px;padding:18px 22px;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.85),0 18px 38px -28px rgba(20,42,84,.32);}
        .now-k{font-family:var(--font-mono,ui-monospace,monospace);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:#2f6cb8;font-weight:700;}
        .now-h{font-family:var(--font-display,system-ui);font-weight:700;font-size:17px;color:var(--ink,#16202b);margin:6px 0 4px;}
        .now-d{font-size:13.5px;line-height:1.6;color:#3d5266;}
        .now-d b{color:var(--ink,#16202b);font-weight:600;}
        .now-d a{color:#2f6cb8;text-decoration:none;border-bottom:1px solid rgba(47,108,184,.35);}
        .now-d a:hover{border-color:#2f6cb8;}
        .now-meadow{position:absolute;left:0;right:0;bottom:0;width:100%;z-index:1;pointer-events:none;user-select:none;
          -webkit-mask-image:linear-gradient(180deg,transparent 0,#000 30%);mask-image:linear-gradient(180deg,transparent 0,#000 30%);}
        .now-upd{margin-top:26px;font-family:var(--font-mono,ui-monospace,monospace);font-size:10.5px;letter-spacing:.1em;color:rgba(255,255,255,.85);}
      `}</style>
      <div className="now-wrap">
        <picture>
          <source srcSet="/assets/hero/meadow-band-v5.webp" type="image/webp" />
          <img className="now-meadow" src="/assets/hero/meadow-band-v5.png" alt="" aria-hidden="true" />
        </picture>
        <div className="now-in">
          <div className="now-kick">/now</div>
          <h1 className="now-ttl">
            what i'm doing <em>now.</em>
          </h1>
          <p className="now-sub">
            a live snapshot — inspired by the{" "}
            <a
              href="https://nownownow.com/"
              target="_blank"
              rel="noopener"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              now page movement
            </a>
            . updated as things change.
          </p>
          <div className="now-list">
            {items.map((it) => (
              <div className="now-item" key={it.k}>
                <span className="now-k">{it.k}</span>
                <h2 className="now-h">{it.t}</h2>
                <p className="now-d">{it.d}</p>
              </div>
            ))}
          </div>
          <div className="now-upd">last updated · sep 2026</div>
        </div>
      </div>
    </>
  );
}
