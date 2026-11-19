:root {
  --bg-main: #0b0d12;
  --bg-card: #141821;
  --bg-card-hover: #1b202c;
  --text-primary: #f3f4f6;
  --text-secondary: #9ca3af;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --border: rgba(255, 255, 255, 0.08);
  --radius: 14px;
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
  font-family: 'Cairo', sans-serif;
  background-color: var(--bg-main);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(11, 13, 18, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 16px 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: 0.5px;
}

.logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--text-primary);
}

/* Buttons */
.btn-primary, .btn-outline {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  border: 1px solid var(--accent);
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}

.btn-outline {
  border: 1px solid var(--border);
  color: var(--text-primary) !important;
  background: rgba(255, 255, 255, 0.03);
}

.btn-outline:hover {
  border-color: var(--accent);
  background: rgba(59, 130, 246, 0.1);
}

/* Hero & Showreel */
.hero {
  padding: 70px 0 50px;
  text-align: center;
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(59, 130, 246, 0.12);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 18px;
}

.hero h1 {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.25;
  max-width: 820px;
  margin: 0 auto 16px;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 650px;
  margin: 0 auto 40px;
}

.showreel-wrapper {
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  aspect-ratio: 16 / 9;
  cursor: pointer;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
}

.showreel-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.showreel-wrapper:hover img {
  transform: scale(1.03);
}

.showreel-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(11, 13, 18, 0.85), rgba(11, 13, 18, 0.25));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
}

.play-btn-large {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 10px rgba(59, 130, 246, 0.25);
  transition: transform 0.25s ease, background 0.25s ease;
}

.showreel-wrapper:hover .play-btn-large {
  transform: scale(1.1);
  background: var(--accent-hover);
}

.showreel-overlay span {
  font-weight: 700;
  font-size: 1.05rem;
}

/* Portfolio Section */
.portfolio-section {
  padding: 70px 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 1.9rem;
  font-weight: 800;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-btn {
  background: var(--bg-card);
  color: var(--text-secondary);
  border: 1px solid var(--border);
  padding: 8px 18px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover, .filter-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 26px;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
  animation: fadeIn 0.4s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(59, 130, 246, 0.4);
  background: var(--bg-card-hover);
}

.thumbnail-box {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #000;
}

.thumbnail-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .thumbnail-box img {
  transform: scale(1.05);
}

.play-icon-small {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(11, 13, 18, 0.8);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: background 0.2s, transform 0.2s;
}

.project-card:hover .play-icon-small {
  background: var(--accent);
  transform: translate(-50%, -50%) scale(1.1);
}

.duration-tag {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.78);
  padding: 2px 8px;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
}

.card-body {
  padding: 20px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.85rem;
  color: #60a5fa;
  font-weight: 700;
}

.client-name {
  color: var(--text-secondary);
  font-weight: 600;
}

.card-body h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.card-body p {
  color: var(--text-secondary);
  font-size: 0.92rem;
}

/* Lightbox Modal */
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
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(6px);
}

.lightbox-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 920px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8);
}

.lightbox-close {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 5;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 1px solid var(--border);
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
}

.lightbox-close:hover {
  background: #ef4444;
}

.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
}

.video-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.lightbox-info {
  padding: 20px 24px;
}

.lightbox-info h3 {
  font-size: 1.3rem;
  margin-bottom: 6px;
}

.lightbox-info p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

/* Footer */
.footer {
  border-top: 1px solid var(--border);
  padding: 60px 0 35px;
  text-align: center;
  background: #080a0e;
}

.footer h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.footer p {
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.contact-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 40px;
}

.copyright {
  font-size: 0.85rem;
  margin-bottom: 0 !important;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .nav-links a:not(.btn-outline) {
    display: none;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
