/* 3–5 · X-RAY  (2.45–10.9 s)  the cursor drives the instrument down both canals; pain 8 → 0; canals sealed; the lens closes */
const TXp = (x, y) => [XR_TW.x + XR_TW.scale * x, XR_TW.y + XR_TW.scale * y];
const camT = (tx, ty, s) => ({ x: 540 - tx * s, y: 960 - ty * s, scale: s });
const gp = (id) => document.getElementById(id);
const LEN = { rvL: gp("rvL").getTotalLength(), rvR: gp("rvR").getTotalLength(), clL: gp("clL").getTotalLength(), clR: gp("clR").getTotalLength(), slL: gp("slL").getTotalLength(), slR: gp("slR").getTotalLength() };
function fracNear(id, x, y) { const p = gp(id), L = p.getTotalLength(); let best = 0, bd = 1e9; for (let l = 0; l <= L; l += 2) { const q = p.getPointAtLength(l); const d = (q.x - x) ** 2 + (q.y - y) ** 2; if (d < bd) { bd = d; best = l / L; } } return best; }
const pInL = fracNear("rvL", 262, 292), pInR = fracNear("rvR", 338, 292);
function samplePts(id, a, b, n) { const p = gp(id), L = p.getTotalLength(), out = []; for (let i = 0; i <= n; i++) { const t = a + (b - a) * (i / n); const q = p.getPointAtLength(t * L); const [sx, sy] = TXp(q.x, q.y); out.push({ x: sx - CUR_TIP.x, y: sy - CUR_TIP.y }); } return out; }
const tipPos = (id, f) => { const q = gp(id).getPointAtLength(f * gp(id).getTotalLength()); const [sx, sy] = TXp(q.x, q.y); return [sx, sy]; };
const dash = (sel, L, f) => ({ strokeDasharray: L, strokeDashoffset: L * (1 - f) });
const MP = (id, a, b) => ({ path: "#" + id, align: "#" + id, alignOrigin: [0.5, 0.5], start: a, end: b });

// ---- initial states
tl.set(["#shL", "#rvL"], dash(0, LEN.rvL, 0), 0);
tl.set(["#shR", "#rvR"], dash(0, LEN.rvR, 0), 0);
tl.set("#clL", dash(0, LEN.clL, 0), 0); tl.set("#clR", dash(0, LEN.clR, 0), 0);
tl.set(["#slL", "#slLc"], dash(0, LEN.slL, 0), 0); tl.set(["#slR", "#slRc"], dash(0, LEN.slR, 0), 0);
tl.set("#handle", { opacity: 0, y: -90 }, 0);
tl.set(["#shL","#rvL","#fL","#shR","#rvR","#fR","#clL","#clR","#slL","#slLc","#slR","#slRc"], { opacity: 0 }, 0);
tl.set(["#shL","#rvL","#fL"], { opacity: 1 }, 3.55); tl.set("#clL", { opacity: 1 }, 4.5);
tl.set(["#shL","#rvL","#fL"], { opacity: 0 }, 6.52);
tl.set(["#shR","#rvR","#fR"], { opacity: 1 }, 6.45); tl.set("#clR", { opacity: 1 }, 7.0);
tl.set(["#shR","#rvR","#fR"], { opacity: 0 }, 8.78);
tl.set(["#slL","#slLc"], { opacity: 1 }, 8.6); tl.set(["#slR","#slRc"], { opacity: 1 }, 8.7);
tl.set(["#tip", "#tipRing"], { opacity: 0 }, 0);
tl.set(["#glowC", "#glowB", "#pulpB", "#plugX", "#apL", "#apR", "#labels"], { opacity: 0 }, 0);
tl.set("#hudStep div", { yPercent: 130 }, 0); tl.set("#hudStep div:nth-child(1)", { yPercent: 0 }, 0);
tl.set("#rollCol", { y: 0 }, 0);

// ---- HUD pops in as the lens finishes
tl.set("#hud", { display: "block" }, 3.0);
tl.fromTo("#pain", { scale: 0.55, x: -70, transformOrigin: "0% 50%" }, { scale: 1, x: 0, duration: 0.5, ease: sp(0.62, 20, 0.5), immediateRender: false }, 3.02);
tl.fromTo("#hudStep", { scale: 0.55, x: 70, transformOrigin: "100% 50%" }, { scale: 1, x: 0, duration: 0.5, ease: sp(0.62, 20, 0.5), immediateRender: false }, 3.12);
tl.to("#labels", { opacity: 1, duration: 0.3, ease: "none" }, 3.3);
tl.to("#labels", { opacity: 0, duration: 0.25, ease: "none" }, 4.2);
tl.to("#labels", { opacity: 1, duration: 0.3, ease: "none" }, 9.6);
// the pulp hurts: glow beats on every beat until the file arrives
tl.to("#glowC", { opacity: 0.95, duration: 0.3, ease: "power2.out" }, 2.8);
for (let i = 0; i < 12; i++) {
  const t0 = 2.9 + i * 0.5;
  tl.fromTo("#glowC", { scale: 1, svgOrigin: "300 240" }, { scale: 1.18, svgOrigin: "300 240", duration: 0.22, ease: "power2.out", immediateRender: false }, t0);
  tl.to("#glowC", { scale: 1, svgOrigin: "300 240", duration: 0.28, ease: "power2.in" }, t0 + 0.22);
}
tl.fromTo("#pain", { boxShadow: "0 0 0 0 rgba(255,94,77,0)" }, { boxShadow: "0 0 0 14px rgba(255,94,77,0.0)", duration: 0.01, immediateRender: false }, 2.8);
for (let i = 0; i < 9; i++) {
  tl.fromTo("#pain", { boxShadow: "0 0 0 0px rgba(255,94,77,.45)" }, { boxShadow: "0 0 0 22px rgba(255,94,77,0)", duration: 0.5, ease: "power2.out", immediateRender: false }, 3.0 + i * 0.5);
}

// ---- helpers: pain roller + step label
const pain = (n, t) => tl.to("#rollCol", { y: -120 * (8 - n), duration: 0.22, ease: "expo.out" }, t);
const step = (from, to, t) => { tl.to(`#hudStep div:nth-child(${from})`, { yPercent: -130, duration: 0.25, ease: "expo.in" }, t); tl.fromTo(`#hudStep div:nth-child(${to})`, { yPercent: 130 }, { yPercent: 0, duration: 0.4, ease: "expo.out", immediateRender: false }, t + 0.14); };

// ---- camera: in to the crown
tl.to("#cam", { ...camT(540, 700, 1.5), duration: 0.8, ease: "power3.inOut" }, 3.0);

// ---- b7 (3.5) : the file is inserted through the access to the chamber
tl.to("#handle", { opacity: 1, y: 0, duration: 0.35, ease: sp(0.55, 22, 0.35) }, 3.25);
tl.to("#handle", { y: 62, duration: 0.5, ease: "power2.out" }, 3.55);
tl.to(["#shL", "#rvL"], { strokeDashoffset: LEN.rvL * (1 - pInL), duration: 0.5, ease: "power2.out" }, 3.55);
tl.set(["#tip", "#tipRing"], { opacity: 1 }, 3.55);
tl.to(["#tip", "#tipRing"], { motionPath: MP("rvL", 0, pInL), duration: 0.5, ease: "power2.out" }, 3.55);
tl.fromTo("#fL", { strokeDashoffset: 0 }, { strokeDashoffset: -9.6 * 36, duration: 4.4, ease: "none", immediateRender: false }, 3.55);
tl.fromTo("#fR", { strokeDashoffset: 0 }, { strokeDashoffset: -9.6 * 36, duration: 4.4, ease: "none", immediateRender: false }, 6.45);
// 4.0 → step: Conducto 1 ; cursor arrives at the tip
step(1, 2, 3.95);
{ const [tx, ty] = tipPos("rvL", pInL); curMove(tx, ty, 3.7, 0.62, "power3.out", "power3.inOut"); }
// b8 (4.0–4.4) long-press on the tip
tl.to("#curP", { scale: 0.8, duration: 0.1, ease: "power2.out" }, 4.3);
tl.to("#tip", { scale: 1.5, svgOrigin: "0 0", duration: 0.001 }, 4.3);
tl.fromTo("#tipRing", { scale: 1 }, { scale: 1.9, duration: 0.3, ease: "power2.out", immediateRender: false }, 4.3);
// drag down canal L
const ptsL = samplePts("rvL", pInL, 1, 16);
tl.to("#curP", { scale: 0.86, duration: 0.05 }, 4.46);
tl.to("#cur", { motionPath: { path: ptsL, curviness: 1.3 }, duration: 1.25, ease: "power1.inOut" }, 4.5);
tl.to(["#shL", "#rvL"], { strokeDashoffset: 0, duration: 1.25, ease: "power1.inOut" }, 4.5);
tl.to(["#tip", "#tipRing"], { motionPath: MP("rvL", pInL, 1), duration: 1.25, ease: "power1.inOut" }, 4.5);
tl.to("#clL", { strokeDashoffset: 0, duration: 1.25, ease: "power1.inOut" }, 4.5);
tl.to("#cam", { ...camT(380, 1230, 1.75), duration: 1.25, ease: "power2.inOut" }, 4.5);
pain(7, 4.8); pain(6, 5.2); pain(5, 5.6);
tl.to("#glowC", { opacity: 0.55, duration: 0.8, ease: "none" }, 4.7);
// arrive at the apex: release + pulse
tl.to("#curP", { scale: 1, duration: 0.2, ease: sp(0.5, 24, 0.2) }, 5.78);
tl.fromTo("#apL", { scale: 0.4, svgOrigin: "173 742", opacity: 1 }, { scale: 3.4, svgOrigin: "173 742", opacity: 0, duration: 0.5, ease: "power2.out", immediateRender: false }, 5.75);

// ---- b12 (6.0): retract L, hop to R
tl.to(["#shL", "#rvL"], { strokeDashoffset: LEN.rvL, duration: 0.5, ease: "power2.in" }, 6.0);
tl.to(["#tip", "#tipRing"], { motionPath: MP("rvL", 1, 0), duration: 0.5, ease: "power2.in" }, 6.0);
const ptsLb = samplePts("rvL", 1, pInL, 12);
tl.to("#cur", { motionPath: { path: ptsLb, curviness: 1.2 }, duration: 0.45, ease: "power2.in" }, 6.0);
tl.to("#cam", { ...camT(540, 880, 1.55), duration: 0.6, ease: "power2.inOut" }, 6.05);
// the cursor hops across the chamber to the right canal
{ const [tx, ty] = tipPos("rvR", pInR); curMove(tx, ty, 6.5, 0.3, "power2.inOut", "power2.inOut"); }
tl.to(["#shR", "#rvR"], { strokeDashoffset: LEN.rvR * (1 - pInR), duration: 0.34, ease: "power2.out" }, 6.45);
tl.to(["#tip", "#tipRing"], { motionPath: MP("rvR", 0, pInR), duration: 0.34, ease: "power2.out" }, 6.45);
step(2, 3, 6.45);
tl.to("#curP", { scale: 0.8, duration: 0.1, ease: "power2.out" }, 6.82);
tl.fromTo("#tipRing", { scale: 1 }, { scale: 1.9, duration: 0.3, ease: "power2.out", immediateRender: false }, 6.82);
const ptsR = samplePts("rvR", pInR, 1, 16);
tl.to("#cur", { motionPath: { path: ptsR, curviness: 1.3 }, duration: 1.1, ease: "power1.inOut" }, 7.0);
tl.to(["#shR", "#rvR"], { strokeDashoffset: 0, duration: 1.1, ease: "power1.inOut" }, 7.0);
tl.to(["#tip", "#tipRing"], { motionPath: MP("rvR", pInR, 1), duration: 1.1, ease: "power1.inOut" }, 7.0);
tl.to("#clR", { strokeDashoffset: 0, duration: 1.1, ease: "power1.inOut" }, 7.0);
tl.to("#cam", { ...camT(700, 1230, 1.75), duration: 1.1, ease: "power2.inOut" }, 7.0);
pain(4, 7.2); pain(3, 7.45); pain(2, 7.7); pain(1, 7.9);
tl.to("#glowC", { opacity: 0.2, duration: 0.9, ease: "none" }, 7.2);
// apex R: release, pain 0
tl.to("#curP", { scale: 1, duration: 0.2, ease: sp(0.5, 24, 0.2) }, 8.1);
tl.fromTo("#apR", { scale: 0.4, svgOrigin: "427 742", opacity: 1 }, { scale: 3.4, svgOrigin: "427 742", opacity: 0, duration: 0.5, ease: "power2.out", immediateRender: false }, 8.1);
pain(0, 8.1);
tl.to("#pain", { borderColor: "rgba(0,163,255,.9)", duration: 0.3, ease: "none" }, 8.1);

// ---- b17 (8.5): file leaves, the canals are sealed from the apex up, the pulp turns blue
tl.to(["#shR", "#rvR"], { strokeDashoffset: LEN.rvR, duration: 0.45, ease: "power2.in" }, 8.3);
tl.to(["#tip", "#tipRing"], { motionPath: MP("rvR", 1, 0), duration: 0.45, ease: "power2.in" }, 8.3);
tl.to("#handle", { y: -90, opacity: 0, duration: 0.4, ease: "power2.in" }, 8.5);
tl.set(["#tip", "#tipRing"], { opacity: 0 }, 8.8);
step(3, 4, 8.5);
tl.to("#cur", { x: 1200, y: 2100, duration: 0.8, ease: "power2.in" }, 8.6);
tl.to(["#slL", "#slLc"], { strokeDashoffset: 0, duration: 0.55, ease: "power2.inOut" }, 8.6);
tl.to(["#slR", "#slRc"], { strokeDashoffset: 0, duration: 0.55, ease: "power2.inOut" }, 8.7);
tl.to("#pulpB", { opacity: 1, duration: 0.1, ease: "none" }, 9.15);
tl.to("#glowC", { opacity: 0, duration: 0.12, ease: "none" }, 9.15);
tl.to("#glowB", { opacity: 0.8, duration: 0.4, ease: "none" }, 9.15);
tl.to("#cam", { x: 0, y: 0, scale: 1, duration: 0.8, ease: "expo.inOut" }, 9.0);
// the access is closed
tl.set("#plugX", { opacity: 1 }, 9.5);
tl.fromTo("#plugX", { y: -140 }, { y: 0, duration: 0.4, ease: sp(0.55, 22, 0.4), immediateRender: false }, 9.5);
step(4, 5, 9.55);
tl.to("#pain", { scale: 1.06, duration: 0.18, ease: "power2.out" }, 9.6).to("#pain", { scale: 1, duration: 0.3, ease: sp(0.5, 22, 0.3) }, 9.78);

// ---- b20 (10.0): HUD leaves, lens closes onto the healthy tooth
tl.to("#pain", { x: -620, duration: 0.45, ease: "expo.in" }, 10.05);
tl.to("#hudStep", { x: 620, duration: 0.45, ease: "expo.in" }, 10.05);
tl.set("#hud", { display: "none" }, 10.55);
tl.to("#labels", { opacity: 0, duration: 0.25, ease: "none" }, 10.1);
tl.set("#xrim", { display: "block" }, 10.3);
tl.fromTo("#xrim", { clipPath: "circle(1930px at 540px 980px)" }, { clipPath: "circle(0px at 540px 980px)", duration: 0.85, ease: "power3.inOut", immediateRender: false }, 10.3);
tl.fromTo("#xray", { clipPath: "circle(1900px at 540px 980px)" }, { clipPath: "circle(0px at 540px 980px)", duration: 0.85, ease: "power3.inOut", immediateRender: false }, 10.3);
tl.set(["#xray", "#xrim"], { display: "none" }, 11.2);
