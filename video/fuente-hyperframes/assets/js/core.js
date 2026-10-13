/* core: timeline, helpers, spring, icons, cursor */
const tl = gsap.timeline({ paused: true });
const B = (n) => n * 0.5;                       // beat -> seconds (120 BPM)
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

// closed-form step response of a damped spring, as a gsap ease (pure function of progress)
function springEase(z, w, D) {
  const wd = w * Math.sqrt(1 - z * z);
  return (p) => {
    if (p <= 0) return 0;
    if (p >= 1) return 1;
    const t = p * D, e = Math.exp(-z * w * t);
    return 1 - e * (Math.cos(wd * t) + ((z * w) / wd) * Math.sin(wd * t));
  };
}
const show = (sel, t) => tl.set(sel, { display: "block" }, t);
const hide = (sel, t) => tl.set(sel, { display: "none" }, t);

const ICONS = {
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  cross: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
  car: '<svg viewBox="0 0 24 24"><path d="M4 15l1.5-5A2 2 0 017.4 8.6h9.2a2 2 0 011.9 1.4L20 15v3h-3v-1.5H7V18H4z"/><circle cx="7.5" cy="13" r=".6"/><circle cx="16.5" cy="13" r=".6"/></svg>',
  map: '<svg viewBox="0 0 24 24"><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/></svg>',
  doc: '<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/></svg>',
  scales: '<svg viewBox="0 0 24 24"><path d="M12 4v16M7 20h10M5 8h14"/><path d="M5 8l-3 6a3 3 0 006 0zM19 8l-3 6a3 3 0 006 0z"/></svg>',
  pen: '<svg viewBox="0 0 24 24"><path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M14 7l3 3"/></svg>',
  family: '<svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="2.6"/><circle cx="16.5" cy="9.5" r="2"/><path d="M3 20v-2a4 4 0 014-4h2a4 4 0 014 4v2M15 14.5h1.5a3.5 3.5 0 013.5 3.5v2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  sliders: '<svg viewBox="0 0 24 24"><path d="M4 8h9M17 8h3M4 16h3M11 16h9"/><circle cx="15" cy="8" r="2"/><circle cx="9" cy="16" r="2"/></svg>',
  share: '<svg viewBox="0 0 24 24"><path d="M12 15V4M8 8l4-4 4 4M5 13v6h14v-6"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
};
$$("[data-i]").forEach((el) => { el.innerHTML = ICONS[el.dataset.i] || ""; });

// cursor: positions are the TIP of the arrow, in camera space (the cursor lives inside #cam, so it scales with every zoom)
const CUR_TIP = { x: 10, y: 6 };
function curMove(tx, ty, t, d, ex = "power2.inOut", ey = "power3.inOut") {
  tl.to("#cur", { x: tx - CUR_TIP.x, duration: d, ease: ex }, t);
  tl.to("#cur", { y: ty - CUR_TIP.y, duration: d, ease: ey }, t);
}
function curClick(t) {
  tl.to("#curP", { scale: 0.78, duration: 0.07, ease: "power2.out" }, t);
  tl.to("#curP", { scale: 1, duration: 0.24, ease: springEase(0.5, 26, 0.24) }, t + 0.07);
}
gsap.registerPlugin(MotionPathPlugin);
tl.set("#cur", { display: "block", x: 1200, y: 2100 }, 0);
