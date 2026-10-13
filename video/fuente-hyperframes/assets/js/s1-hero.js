/* 1 · HERO (0–1.0 s)  →  2 · THE PERIOD BECOMES THE FIELD (1.0–2.5 s)  →  3 · LENS (2.45–3.1 s)
   The first frame IS the last frame: initial CSS = hero. */
const HERO_TW = { x: 570, y: 1022, scale: 0.8 };
const XR_TW   = { x: 30,  y: 358,  scale: 1.7 };
const PER = { x: 935, y: 892 };                       // centre of the period of "dolor."
const sp = springEase;
tl.set("#cam", { x: 0, y: 0, scale: 1 }, 0);
tl.set("#Tw", { ...HERO_TW }, 0);
tl.set("#Tx", { ...XR_TW }, 0);

// ---- b0–b2 : alive, but only just
tl.fromTo("#Tw", { y: HERO_TW.y }, { y: HERO_TW.y - 16, duration: 0.5, ease: "sine.inOut", immediateRender: false }, 0)
  .to("#Tw", { y: HERO_TW.y, duration: 0.5, ease: "sine.inOut" }, 0.5);
tl.fromTo("#card", { y: 0 }, { y: 10, duration: 0.5, ease: "sine.inOut", immediateRender: false }, 0).to("#card", { y: 0, duration: 0.5, ease: "sine.inOut" }, 0.5);
tl.fromTo("#spark", { scale: 1, rotation: 0, svgOrigin: "150 118" }, { scale: 1.45, rotation: 45, svgOrigin: "150 118", duration: 0.5, ease: "sine.inOut", immediateRender: false }, 0)
  .to("#spark", { scale: 1, rotation: 90, svgOrigin: "150 118", duration: 0.5, ease: "sine.inOut" }, 0.5);
tl.fromTo("#dots", { y: 0 }, { y: 138, duration: 28, ease: "none", immediateRender: false }, 0);   // 3 × 46px: the lattice repeats, so t=0 ≡ t=28

// ---- b2 (1.0) : the headline leaves upward in masks, "dolor" drops out, only the period stays
tl.to("#eyebrow span", { yPercent: -120, duration: 0.36, ease: "expo.in" }, 1.0);
tl.to("#hl1 span", { yPercent: -120, duration: 0.38, ease: "expo.in" }, 1.04);
tl.to("#hl2 span", { yPercent: -120, duration: 0.38, ease: "expo.in" }, 1.08);
tl.to("#hl3 span", { yPercent: 120, duration: 0.4, ease: "expo.in" }, 1.12);
tl.to("#card", { y: 70, scale: 1.04, duration: 0.5, ease: "power2.in" }, 1.0);
// the period pops, then it IS the blue disc
tl.to("#per", { scale: 1.5, duration: 0.2, ease: sp(0.5, 22, 0.2) }, 1.42);
tl.set("#per", { display: "none" }, 1.58);
tl.set("#blue", { clipPath: `circle(52px at ${PER.x}px ${PER.y}px)` }, 1.58);
tl.to("#blue", { clipPath: `circle(1560px at ${PER.x}px ${PER.y}px)`, duration: 0.6, ease: "power3.inOut" }, 1.55);
tl.fromTo("#bluePat", { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none" }, 1.9);
// the tooth leaves the card and takes the whole frame
tl.to("#Tw", { x: XR_TW.x, y: XR_TW.y, scale: XR_TW.scale, duration: 1.0, ease: "power3.inOut" }, 1.45);

// ---- b5 (2.5) : the lens
tl.set(["#xray", "#xrim"], { display: "block" }, 2.46);
tl.fromTo("#xrim", { clipPath: "circle(0px at 540px 980px)" }, { clipPath: "circle(1930px at 540px 980px)", duration: 0.85, ease: "power3.inOut", immediateRender: false }, 2.5);
tl.fromTo("#xray", { clipPath: "circle(0px at 540px 980px)" }, { clipPath: "circle(1900px at 540px 980px)", duration: 0.85, ease: "power3.inOut", immediateRender: false }, 2.5);
tl.set("#xrim", { display: "none" }, 3.4);
