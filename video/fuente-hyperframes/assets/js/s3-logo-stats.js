/* 6 · LOGO (11.0–13.0)  →  7 · REASONS (12.9–21.7)  →  8 · CTA (21.7–23.2) */
const LOGO_TW = { x: 112, y: 559, scale: 0.32 };
// hide the hero furniture once the disc has swallowed it
tl.set("#card", { display: "none" }, 2.3);
tl.set(["#sc"], { clipPath: "inset(0px 0px 100% 0px round 56px)" }, 0);
tl.set("#logo", { clipPath: "inset(0 100% 0 0)" }, 0);

// ---- b22 (11.0): the blue field collapses onto the tooth, the tooth settles where the logo's tooth is
tl.to("#Tw", { ...LOGO_TW, duration: 0.9, ease: "power3.inOut" }, 11.0);
tl.to("#blue", { clipPath: "circle(0px at 208px 689px)", duration: 0.95, ease: "power3.inOut" }, 11.05);
tl.set("#logo", { display: "block" }, 11.6);
tl.to("#logo", { clipPath: "inset(0 0% 0 0)", duration: 0.95, ease: "expo.out" }, 11.65);
tl.fromTo("#logo img", { scale: 1.06 }, { scale: 1, duration: 0.9, ease: "expo.out", immediateRender: false }, 11.65);
tl.set("#Tw", { display: "none" }, 12.0);
// ---- b25 (12.5): the logo takes its place at the top
tl.to("#logo", { y: -433, scale: 0.62, duration: 0.7, ease: "expo.inOut" }, 12.4);

// ---- the card unrolls out of the logo
tl.set("#sc", { display: "block" }, 12.9);
tl.fromTo("#sc", { clipPath: "inset(0px 0px 100% 0px round 56px)", y: -40 }, { clipPath: "inset(0px 0px 0% 0px round 56px)", y: 0, duration: 0.65, ease: "expo.out", immediateRender: false }, 12.9);
tl.set("#sc", { clipPath: "none" }, 13.6);
// S1 : +21
tl.fromTo("#plus", { scale: 0.4, transformOrigin: "50% 60%" }, { scale: 1, duration: 0.5, ease: sp(0.55, 20, 0.5), immediateRender: false }, 13.1);
tl.to("#colTen", { y: -680, duration: 0.8, ease: "expo.out" }, 13.3);
tl.to("#colOne", { y: -340 * 11, duration: 1.1, ease: "expo.out" }, 13.35);
tl.fromTo("#sS1 .sTxt", { y: 46, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "expo.out", immediateRender: false }, 13.6);
tl.fromTo("#sS1 .M, #sS1 .ey", { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none", immediateRender: false }, 13.5);
// S1 → S2 : vertical carousel (15.2)
tl.to("#sS1", { y: -700, duration: 0.7, ease: "expo.inOut" }, 15.2);
tl.to("#sS2", { y: -700, duration: 0.7, ease: "expo.inOut" }, 15.2);
tl.fromTo("#ic2", { scale: 0.7 }, { scale: 1, duration: 0.5, ease: sp(0.55, 20, 0.5), immediateRender: false }, 15.55);
for (let k = 0; k < 4; k++) { tl.to("#scanL", { y: k % 2 ? -52 : 52, duration: 0.45, ease: "sine.inOut" }, 15.6 + k * 0.45); }
tl.to("#scanL", { y: 0, duration: 0.4, ease: "sine.inOut" }, 17.4);
// S2 → S3 (17.2)
tl.to("#sS2", { y: -1400, duration: 0.7, ease: "expo.inOut" }, 17.4);
tl.to("#sS3", { y: -700, duration: 0.7, ease: "expo.inOut" }, 17.4);
tl.fromTo("#ic3", { scale: 0.7 }, { scale: 1, duration: 0.5, ease: sp(0.55, 20, 0.5), immediateRender: false }, 17.75);
for (let k = 0; k < 4; k++) { tl.to("#heart", { scale: 1.16, duration: 0.14, ease: "power2.out" }, 18.0 + k * 0.5).to("#heart", { scale: 1, duration: 0.36, ease: sp(0.45, 18, 0.36) }, 18.14 + k * 0.5); }

// ---- b38 (19.4): the card grows into the map of Antiguo Country
tl.set(".rd", { opacity: 0 }, 0);
document.querySelectorAll(".rd").forEach((r, i) => { const L = r.getTotalLength(); tl.set(r, { strokeDasharray: L, strokeDashoffset: L }, 0); tl.set(r, { opacity: 1 }, 19.7 + i * 0.07); tl.to(r, { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }, 19.7 + i * 0.07); });
tl.to("#sS3", { y: -1400, duration: 0.75, ease: "expo.inOut" }, 19.4);
tl.to("#sMap", { y: -1000, duration: 0.75, ease: "expo.inOut" }, 19.4);
tl.to("#sc", { top: 430, height: 1000, duration: 0.75, ease: "expo.inOut" }, 19.4);
tl.set("#pin", { y: -520 }, 0); tl.set("#pinShadow", { scale: 0.2, opacity: 0 }, 0); tl.set("#pinRing", { scale: 0.4 }, 0);
tl.to("#pin", { y: 0, duration: 0.6, ease: sp(0.42, 20, 0.6) }, 20.1);
tl.to("#pinShadow", { scale: 1, opacity: 1, duration: 0.45, ease: "power2.out" }, 20.2);
for (let k = 0; k < 2; k++) { tl.fromTo("#pinRing", { scale: 0.4, opacity: 0.9 }, { scale: 3.3, opacity: 0, duration: 0.8, ease: "power2.out", immediateRender: false }, 20.5 + k * 0.5); }
tl.fromTo("#sMap .ey", { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none", immediateRender: false }, 20.2);
tl.fromTo("#sMap .sTxt", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "expo.out", stagger: 0.12, immediateRender: false }, 20.25);

// ---- b43 (21.7): the card contracts into the button
tl.to("#sMap", { y: -2000, duration: 0.45, ease: "expo.in" }, 21.7);
tl.to("#sc", { left: 70, top: 865, width: 940, height: 190, borderRadius: 95, backgroundColor: "#00A3FF", boxShadow: "0 30px 60px rgba(0,120,220,0.34)", duration: 0.7, ease: "expo.inOut" }, 21.75);
tl.to("#ctaT", { y: -1200, duration: 0.55, ease: "expo.out" }, 22.0);
for (let k = 0; k < 2; k++) tl.fromTo("#sc", { boxShadow: "0 30px 60px rgba(0,120,220,0.34), 0 0 0 0px rgba(0,163,255,.5)" }, { boxShadow: "0 30px 60px rgba(0,120,220,0.34), 0 0 0 34px rgba(0,163,255,0)", duration: 0.5, ease: "power2.out", immediateRender: false }, 22.55 + k * 0.25);
tl.set("#cap", { display: "block" }, 22.3);
tl.fromTo("#cap", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "expo.out", immediateRender: false }, 22.3);
// the cursor comes in and presses it
curMove(540, 960, 22.1, 0.85, "power3.out", "power3.inOut");
tl.to("#curP", { scale: 0.78, duration: 0.08, ease: "power2.out" }, 23.0);
tl.to("#sc", { scale: 0.965, duration: 0.08, ease: "power2.out" }, 23.0);
tl.to("#curP", { scale: 1, duration: 0.25, ease: sp(0.5, 26, 0.25) }, 23.08);
tl.to("#sc", { scale: 1, duration: 0.3, ease: sp(0.5, 24, 0.3) }, 23.08);
tl.fromTo("#ring", { scale: 0.3, opacity: 0.9 }, { scale: 3.4, opacity: 0, duration: 0.6, ease: "power2.out", immediateRender: false }, 23.0);
