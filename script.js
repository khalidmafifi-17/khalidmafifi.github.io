:root {
  --bg-obsidian: #030305;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.085) 0%, rgba(255, 255, 255, 0.02) 55%, rgba(255, 255, 255, 0.055) 100%);
  --glass-border: rgba(255, 255, 255, 0.13);
  --glass-highlight: rgba(255, 255, 255, 0.28);
  --accent-cyan: #38bdf8;
  --accent-indigo: #818cf8;
  --radius-xl: 26px;
  --radius-lg: 20px;
  --radius-pill: 999px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-obsidian);
  color: var(--text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.mono {
  font-family: 'JetBrains Mono', monospace;
}

.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 28px;
}

/* =========================================
   AMBIENT LIQUID SCENE & NEXT.JS GRID
========================================= */
.ambient-scene {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.tech-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 65% at 50% 25%, #000 35%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 65% at 50% 25%, #000 35%, transparent 100%);
}

.liquid-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.42;
  animation: floatLiquid 18s ease-in-out infinite alternate;
}

.orb-1 {
  width: 560px;
  height: 560px;
  background: radial-gradient(circle, #38bdf8, transparent 70%);
  top: -140px;
  left: 12%;
}

.orb-2 {
  width: 620px;
  height: 620px;
  background: radial-gradient(circle, #6366f1, transparent 70%);
  top: 22%;
  right: -120px;
  animation-delay: -6s;
}

.orb-3 {
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, #0ea5e9, transparent 70%);
  bottom: -120px;
  left: 25%;
  animation-delay: -12s;
}

@keyframes floatLiquid {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -30px) scale(1.08); }
  100% { transform: translate(-30px, 35px) scale(0.95); }
}

/* =========================================
   LIQUID GLASS MATERIAL SYSTEM
========================================= */
.liquid-glass {
  background: var(--glass-bg);
  backdrop-filter: blur(28px) saturate(185%);
  -webkit-backdrop-filter: blur(28px) saturate(185%);
  border: 1px solid var(--glass-border);
  box-shadow:
    inset 0 1px 0 0 var(--glass-highlight),
    inset 0 0 24px rgba(255, 255, 255, 0.025),
    0 24px 60px -15px rgba(0, 0, 0, 0.78);
}

.spotlight-card {
  position: relative;
  overflow: hidden;
}

.spotlight-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.11),
    transparent 45%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
  z-index: 1;
}

.spotlight-card:hover::before {
  opacity: 1;
}

/* =========================================
   FLOATING LIQUID GLASS NAVBAR
========================================= */
.navbar-wrap {
  position: sticky;
  top: 18px;
  z-index: 100;
  padding: 0 24px;
}

.navbar {
  max-width: 1272px;
  margin: 0 auto;
  padding: 12px 16px 12px 26px;
  border-radius: var(--radius-pill);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.04em;
  color: var(--text-primary);
  text-decoration: none;
}

.brand-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  box-shadow: 0 0 12px #38bdf8;
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--text-primary);
}

/* Glass Buttons */
.glass-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 12px 22px;
  border-radius: var(--radius-pill);
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
}

.glass-btn:hover {
  transform: translateY(-2px);
}

.glass-btn-primary {
  background: rgba(255, 255, 255, 0.92);
  color: #030305;
  border: 1px solid #fff;
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.16);
}

.glass-btn-glow {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.28), rgba(129, 140, 248, 0.28));
  backdrop-filter: blur(20px);
  color: #fff;
  border: 1px solid rgba(125, 211, 252, 0.45);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.35),
    0 12px 32px rgba(56, 189, 248, 0.22);
}

.glass-btn-glow:hover {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.4), rgba(129, 140, 248, 0.4));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.45),
    0 16px 40px rgba(56, 189, 248, 0.34);
}

.glass-btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(18px);
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
}

.glass-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

/* =========================================
   HERO & 3D LIQUID GLASS SHOWREEL STAGE
========================================= */
.hero {
  padding: 64px 0 84px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  border-radius: var(--radius-pill);
  font-size: 0.74rem;
  color: var(--text-secondary);
  margin-bottom: 26px;
}

.pulse-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 12px #38bdf8;
}

.hero-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 5.6vw, 4.85rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.035em;
  margin-bottom: 30px;
}

.text-gradient {
  background: linear-gradient(125deg, #ffffff 15%, #bae6fd 55%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-sub-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 52px;
}

.hero-desc {
  max-width: 630px;
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.65;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* 3D Showreel Stage */
.stage-perspective {
  perspective: 1400px;
  margin-bottom: 22px;
}

.showreel-stage {
  border-radius: var(--radius-xl);
  padding: 12px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.25s ease-out;
}

.stage-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 14px 14px;
  font-size: 0.72rem;
  color: var(--text-secondary);
}

.window-dots {
  display: flex;
  gap: 7px;
}

.window-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
}

.stage-status {
  color: #7dd3fc;
}

.stage-media {
  position: relative;
  aspect-ratio: 16 / 7.8;
  border-radius: 18px;
  overflow: hidden;
  background: #000;
}

.stage-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.76) contrast(1.05);
  transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
}

.showreel-stage:hover .stage-media img {
  transform: scale(1.035);
  filter: brightness(0.92);
}

.stage-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 30%, rgba(3, 3, 5, 0.65) 100%);
}

/* Floating Liquid Chips inside Showreel */
.float-chip {
  position: absolute;
  z-index: 3;
  padding: 12px 18px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.chip-top-left {
  top: 22px;
  left: 22px;
}

.chip-bottom-right {
  bottom: 22px;
  right: 22px;
}

.chip-val {
  font-size: 1.2rem;
  font-weight: 700;
  color: #7dd3fc;
}

.chip-lbl {
  font-size: 0.76rem;
  color: var(--text-primary);
  opacity: 0.88;
}

.center-glass-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 30px;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 20px 50px rgba(0, 0, 0, 0.6);
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease;
}

.showreel-stage:hover .center-glass-play {
  transform: translate(-50%, -50%) scale(1.06);
  background: rgba(255, 255, 255, 0.22);
}

/* 4 Hero Pillars */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.pillar-card {
  padding: 22px;
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--text-primary);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.pillar-card:hover {
  transform: translateY(-4px);
  border-color: rgba(125, 211, 252, 0.45);
}

.pillar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  color: #7dd3fc;
  margin-bottom: 12px;
}

.pillar-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.12rem;
  margin-bottom: 6px;
}

.pillar-card p {
  font-size: 0.84rem;
  color: var(--text-secondary);
}

/* =========================================
   DUAL LIQUID GLASS MARQUEE
========================================= */
.marquee-band {
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(16px);
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
}

.marquee-line {
  padding: 15px 0;
  overflow: hidden;
}

.marquee-line-sub {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.marquee-track {
  display: flex;
  width: max-content;
}

.anim-left {
  animation: marqueeLeft 34s linear infinite;
}

.anim-right {
  animation: marqueeRight 36s linear infinite;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: 28px;
  padding-right: 28px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.98rem;
  letter-spacing: 0.06em;
  color: var(--text-primary);
}

.marquee-group i {
  font-style: normal;
  color: #38bdf8;
  font-size: 0.75rem;
}

.marquee-line-sub .marquee-group {
  color: var(--text-secondary);
}

@keyframes marqueeLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marqueeRight {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* =========================================
   SECTIONS & BENTO PORTFOLIO GRID
========================================= */
.section-block {
  padding: 96px 0;
}

.border-top {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 46px;
}

.section-kicker {
  display: block;
  font-size: 0.76rem;
  color: #7dd3fc;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.1;
}

/* Liquid Glass Filter Dock */
.filter-dock {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px;
  border-radius: var(--radius-pill);
}

.filter-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-secondary);
  padding: 9px 18px;
  border-radius: var(--radius-pill);
  font-family: inherit;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.22s ease;
}

.filter-btn:hover {
  color: var(--text-primary);
}

.filter-btn.active {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

/* Asymmetric Bento Editorial Grid */
.bento-work-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 26px;
}

.work-card {
  grid-column: span 6;
  border-radius: var(--radius-xl);
  padding: 14px;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease;
  animation: fadeRise 0.45s ease;
}

.work-card:nth-child(3n + 1) {
  grid-column: span 7;
}

.work-card:nth-child(3n + 2) {
  grid-column: span 5;
}

.work-card:nth-child(3n + 3) {
  grid-column: span 12;
}

.work-card:nth-child(3n + 3) .work-thumb {
  aspect-ratio: 21 / 8.4;
}

.work-card:hover {
  transform: translateY(-5px);
  border-color: rgba(125, 211, 252, 0.45);
}

.work-thumb {
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: 18px;
  overflow: hidden;
  background: #090b10;
  margin-bottom: 18px;
}

.work-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}

.work-card:hover .work-thumb img {
  transform: scale(1.05);
}

.work-kpi-pill {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  background: rgba(3, 3, 5, 0.72);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(125, 211, 252, 0.35);
  color: #7dd3fc;
  font-size: 0.72rem;
}

.work-play-glass {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.88);
  padding: 12px 24px;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
  color: #fff;
  font-weight: 700;
  font-size: 0.84rem;
  opacity: 0;
  transition: all 0.28s ease;
}

.work-card:hover .work-play-glass {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.work-body {
  padding: 0 8px 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.work-body h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.28rem;
  margin-bottom: 6px;
}

.work-body p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  max-width: 600px;
}

.work-client-tag {
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.72rem;
  color: var(--text-primary);
  white-space: nowrap;
}

/* =========================================
   STICKY SPLIT CAPABILITIES (JAZZY LAYOUT)
========================================= */
.sticky-split {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 44px;
  align-items: start;
}

.sticky-sidebar {
  position: sticky;
  top: 105px;
}

.sidebar-panel {
  padding: 36px;
  border-radius: var(--radius-xl);
}

.sidebar-copy {
  color: var(--text-secondary);
  margin: 18px 0 30px;
  font-size: 0.98rem;
}

.kpi-matrix {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.kpi-cell {
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  padding: 18px;
}

.kpi-num {
  display: block;
  font-size: 1.85rem;
  font-weight: 700;
  color: #7dd3fc;
  line-height: 1.1;
  margin-bottom: 6px;
}

.kpi-text {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.capabilities-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cap-module {
  padding: 30px;
  border-radius: var(--radius-xl);
}

.cap-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
}

.cap-index {
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  background: rgba(56, 189, 248, 0.14);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #7dd3fc;
  font-size: 0.78rem;
}

.cap-header h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
}

.cap-module p {
  color: var(--text-secondary);
  font-size: 0.92rem;
  margin-bottom: 18px;
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip-list span {
  font-size: 0.78rem;
  padding: 5px 12px;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.11);
  color: var(--text-primary);
}

/* =========================================
   EXPERIENCE GLASS TABLE
========================================= */
.timeline-glass {
  border-radius: var(--radius-xl);
  padding: 10px 32px;
}

.t-row {
  display: grid;
  grid-template-columns: 170px 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.t-row:last-child {
  border-bottom: none;
}

.t-date {
  font-size: 0.78rem;
  color: #7dd3fc;
}

.t-info h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.14rem;
  margin-bottom: 4px;
}

.t-info p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.t-tag {
  font-size: 0.72rem;
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-secondary);
}

/* =========================================
   LIQUID GLASS CONVERSION FOOTER
========================================= */
.footer-section {
  padding: 40px 0 70px;
}

.footer-glass-box {
  border-radius: 32px;
  padding: 64px 48px;
}

.footer-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 4.8vw, 4.2rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  max-width: 820px;
  margin: 12px 0 20px;
}

.footer-lead {
  color: var(--text-secondary);
  max-width: 640px;
  font-size: 1.02rem;
  margin-bottom: 36px;
}

.footer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 56px;
}

.footer-meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.76rem;
  color: var(--text-muted);
}

/* =========================================
   LIQUID GLASS LIGHTBOX MODAL
========================================= */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.lightbox.open {
  display: flex;
}

.lightbox-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(2, 3, 6, 0.86);
  backdrop-filter: blur(14px);
}

.lightbox-dialog {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 980px;
  border-radius: var(--radius-xl);
  padding: 16px;
}

.lb-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 10px 14px;
}

.lb-meta-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.lb-client {
  font-size: 0.78rem;
  color: var(--text-primary);
}

.lb-kpi {
  font-size: 0.74rem;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: rgba(56, 189, 248, 0.16);
  border: 1px solid rgba(56, 189, 248, 0.35);
  color: #7dd3fc;
}

.lb-close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  line-height: 1;
}

.lb-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.video-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
}

.video-frame iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.lb-body {
  padding: 20px 10px 8px;
}

.lb-body h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.35rem;
  margin-bottom: 8px;
}

.lb-body p {
  color: var(--text-secondary);
  font-size: 0.94rem;
  margin-bottom: 14px;
}

@keyframes fadeRise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 960px) {
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .sticky-split {
    grid-template-columns: 1fr;
  }
  .sticky-sidebar {
    position: static;
  }
  .work-card,
  .work-card:nth-child(3n + 1),
  .work-card:nth-child(3n + 2),
  .work-card:nth-child(3n + 3) {
    grid-column: span 12;
  }
  .work-card:nth-child(3n + 3) .work-thumb {
    aspect-ratio: 16 / 10;
  }
  .t-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .t-tag {
    justify-self: start;
  }
}

@media (max-width: 640px) {
  .nav-links, .float-chip {
    display: none;
  }
  .pillars-grid {
    grid-template-columns: 1fr;
  }
  .footer-glass-box {
    padding: 36px 24px;
  }
}
