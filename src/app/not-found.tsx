import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 · Page not found",
  description: "This trail doesn't exist on dinesh's portfolio.",
};

export default function NotFound() {
  return (
    <>
      <style>{`
        .nf-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;position:relative;overflow:hidden;background:linear-gradient(180deg,#2f6cb8 0%,#5a93cf 42%,#8cbce9 68%,#b9dcf4 100%)}
        .nf-card{position:relative;z-index:2;max-width:560px;width:100%;background:rgba(255,255,255,.72);backdrop-filter:blur(14px) saturate(1.4);-webkit-backdrop-filter:blur(14px) saturate(1.4);border:1px solid rgba(255,255,255,.75);border-radius:20px;padding:clamp(28px,5vw,44px);text-align:center;box-shadow:0 30px 60px -30px rgba(20,42,84,.35)}
        .nf-code{font-family:var(--font-mono,ui-monospace,monospace);font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:#4a6076;font-weight:700}
        .nf-big{font-family:var(--font-display,system-ui);font-weight:600;font-size:clamp(64px,14vw,96px);line-height:1;letter-spacing:-.04em;color:var(--ink,#16202b);margin:10px 0 6px}
        .nf-big em{font-style:italic;color:#2f6cb8}
        .nf-sub{color:#3d5266;font-size:15.5px;line-height:1.55;margin:0 0 26px}
        .nf-links{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
        .nf-links a{text-decoration:none;font-size:14px;font-weight:600;padding:10px 18px;border-radius:999px;border:1px solid rgba(22,32,43,.16);color:var(--ink,#16202b);background:rgba(255,255,255,.65);transition:transform .2s ease,box-shadow .2s ease}
        .nf-links a:hover{transform:translateY(-2px);box-shadow:0 12px 24px -14px rgba(20,42,84,.4)}
        .nf-links a.pri{background:#16202b;color:#fff;border-color:#16202b}
        .nf-meadow{position:absolute;left:0;right:0;bottom:0;width:100%;height:auto;z-index:1;pointer-events:none;user-select:none;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 26%);mask-image:linear-gradient(180deg,transparent 0,#000 26%)}
        @media (max-width:640px){.nf-meadow{opacity:.85}}
      `}</style>
      <div className="nf-wrap">
        <picture>
          <source srcSet="/assets/hero/meadow-band-v5.webp" type="image/webp" />
          <img
            className="nf-meadow"
            src="/assets/hero/meadow-band-v5.png"
            alt=""
            aria-hidden="true"
          />
        </picture>
        <div className="nf-card">
          <div className="nf-code">error · 404</div>
          <h1 className="nf-big">
            lost in <em>the meadow</em>
          </h1>
          <p className="nf-sub">
            This trail doesn&apos;t exist — maybe it was moved, renamed, or
            never planted. Let&apos;s get you back on solid ground.
          </p>
          <nav className="nf-links" aria-label="recovery links">
            <a className="pri" href="/">
              back home
            </a>
            <a href="/work">view work</a>
            <a href="/quick">quick view</a>
            <a href="mailto:dineshkatal.work@gmail.com">email me</a>
          </nav>
        </div>
      </div>
    </>
  );
}
