/* 9 · THE BUTTON BECOMES THE PERIOD (23.2–24.2)  →  10 · THE HERO REASSEMBLES (24.1–26.6)  →  loop: last frame ≡ first frame */
// ---- the button shrinks into a dot and flies to the period of "dolor."
tl.to("#ctaT", { y: -1200 - 200, duration: 0.3, ease: "expo.in" }, 23.25);
tl.to("#sc", { left: 902, top: 859, width: 66, height: 66, borderRadius: 33, boxShadow: "0 0 0 0 rgba(0,163,255,0)", duration: 0.75, ease: "expo.inOut" }, 23.3);
tl.to("#cur", { x: 1300, y: 2100, duration: 0.7, ease: "power2.in" }, 23.35);
tl.to("#logo", { y: -1000, duration: 0.6, ease: "power3.in" }, 23.35);
tl.to("#cap", { y: 160, opacity: 0, duration: 0.4, ease: "power3.in" }, 23.3);
// the hero parts wait off-frame (they left that way at 1.0 s)
tl.set("#per", { display: "block", scale: 1 }, 24.05);
tl.set("#sc", { display: "none" }, 24.05);
// ---- letters rise to meet the dot
tl.to("#hl3 span", { yPercent: 0, duration: 0.65, ease: "expo.out" }, 24.1);
tl.to("#hl2 span", { yPercent: 0, duration: 0.65, ease: "expo.out" }, 24.35);
tl.to("#hl1 span", { yPercent: 0, duration: 0.65, ease: "expo.out" }, 24.6);
tl.to("#eyebrow span", { yPercent: 0, duration: 0.55, ease: "expo.out" }, 24.85);
tl.fromTo("#per", { scale: 1 }, { scale: 1.0, duration: 0.01, immediateRender: false }, 24.05);
// ---- the ficha and the tooth arrive from below
tl.set("#card", { display: "block", y: 1000, scale: 1 }, 24.4);
tl.to("#card", { y: 0, duration: 0.9, ease: sp(0.6, 14, 0.9) }, 24.45);
tl.set("#Tw", { display: "block", x: HERO_TW.x, y: 2100, scale: HERO_TW.scale }, 24.4);
tl.to("#Tw", { y: HERO_TW.y, duration: 1.0, ease: sp(0.55, 13, 1.0) }, 24.6);
// ---- b52+ : one breath, back to the first frame
tl.fromTo("#Tw", { y: HERO_TW.y }, { y: HERO_TW.y - 16, duration: 0.5, ease: "sine.inOut", immediateRender: false }, 26.6)
  .to("#Tw", { y: HERO_TW.y, duration: 0.5, ease: "sine.inOut" }, 27.1);
tl.fromTo("#card", { y: 0 }, { y: 10, duration: 0.5, ease: "sine.inOut", immediateRender: false }, 26.6).to("#card", { y: 0, duration: 0.5, ease: "sine.inOut" }, 27.1);
tl.fromTo("#spark", { scale: 1, rotation: 0, svgOrigin: "150 118" }, { scale: 1.45, rotation: 45, svgOrigin: "150 118", duration: 0.5, ease: "sine.inOut", immediateRender: false }, 26.6)
  .to("#spark", { scale: 1, rotation: 90, svgOrigin: "150 118", duration: 0.5, ease: "sine.inOut" }, 27.1);
