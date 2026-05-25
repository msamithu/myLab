:root {
  --ink: #17212b;
  --muted: #596474;
  --paper: #f7f4ec;
  --surface: #ffffff;
  --teal: #0f766e;
  --teal-dark: #0b4f4a;
  --gold: #b87917;
  --plum: #6f2d46;
  --line: rgba(23, 33, 43, 0.14);
  --shadow: 0 18px 40px rgba(23, 33, 43, 0.12);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration-color: rgba(15, 118, 110, 0.35);
  text-underline-offset: 0.25em;
}

a:hover {
  color: var(--teal-dark);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}

.site-header {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  padding: 14px clamp(18px, 5vw, 64px);
  color: #fff;
  transition: background 180ms ease, box-shadow 180ms ease, color 180ms ease;
}

.site-header.is-scrolled,
.site-header.is-open {
  color: var(--ink);
  background: rgba(247, 244, 236, 0.96);
  box-shadow: 0 1px 0 var(--line);
  backdrop-filter: blur(16px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid currentColor;
  border-radius: 8px;
  font-weight: 800;
  letter-spacing: 0;
}

.brand strong,
.brand small {
  display: block;
}

.brand small {
  color: currentColor;
  opacity: 0.78;
  font-size: 0.78rem;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: clamp(16px, 2vw, 28px);
  font-size: 0.95rem;
  font-weight: 700;
}

.site-nav a {
  text-decoration: none;
}

.nav-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid currentColor;
  border-radius: 8px;
  color: inherit;
  background: transparent;
}

.nav-toggle span:not(.sr-only) {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  background: currentColor;
}

.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #fff;
}

.hero-media,
.hero-overlay {
  position: absolute;
  inset: 0;
}

.hero-media {
  background-image: url("../images/lab-hero.png");
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
}

.hero-overlay {
  background:
    linear-gradient(90deg, rgba(15, 22, 30, 0.86) 0%, rgba(15, 22, 30, 0.56) 44%, rgba(15, 22, 30, 0.18) 100%),
    linear-gradient(0deg, rgba(15, 22, 30, 0.32), rgba(15, 22, 30, 0.1));
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(1120px, calc(100% - 36px));
  margin: 0 auto;
  padding: 120px 0 64px;
}

.eyebrow,
.section-kicker,
.pub-meta {
  margin: 0 0 12px;
  color: var(--gold);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 760px;
  margin: 0;
  font-size: clamp(3.1rem, 8vw, 6.8rem);
  line-height: 0.94;
  letter-spacing: 0;
}

.hero-copy {
  max-width: 650px;
  margin: 28px 0 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.08rem, 2vw, 1.35rem);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 800;
  text-decoration: none;
}

.button-primary {
  color: #fff;
  background: var(--teal);
}

.button-primary:hover {
  color: #fff;
  background: var(--teal-dark);
}

.button-secondary {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.08);
}

.button-secondary:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.16);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 650px;
  gap: 14px;
  margin: 58px 0 0;
}

.hero-stats div {
  padding: 18px;
  border-top: 2px solid rgba(255, 255, 255, 0.42);
  background: rgba(0, 0, 0, 0.18);
}

.hero-stats dt {
  font-size: clamp(1.9rem, 4vw, 3rem);
  font-weight: 850;
  line-height: 1;
}

.hero-stats dd {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.8);
}

.section {
  width: min(1120px, calc(100% - 36px));
  margin: 0 auto;
  padding: 88px 0;
}

.band {
  width: 100%;
  max-width: none;
  padding-left: max(18px, calc((100vw - 1120px) / 2));
  padding-right: max(18px, calc((100vw - 1120px) / 2));
  background: #eef4f1;
}

.intro-grid,
.section-heading,
.split,
.callout {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(28px, 6vw, 72px);
  align-items: start;
}

h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.05;
  letter-spacing: 0;
}

h3 {
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.25;
}

.intro-copy p,
.section-heading p,
.split p,
.callout p {
  margin-top: 0;
  color: var(--muted);
  font-size: 1.05rem;
}

.research-grid,
.people-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 38px;
}

.feature-card,
.person-card,
.publication-item {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--shadow);
}

.feature-card {
  min-height: 260px;
  padding: 28px;
}

.card-index {
  display: inline-block;
  margin-bottom: 60px;
  color: var(--plum);
  font-weight: 850;
}

.feature-card p,
.person-card p,
.publication-item p {
  color: var(--muted);
}

.people-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.person-card {
  padding: 22px;
}

.avatar {
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  margin-bottom: 22px;
  border-radius: 8px;
  color: #fff;
  background: linear-gradient(135deg, var(--teal-dark), var(--plum));
  font-weight: 850;
}

.person-card a,
.event-item a,
.publication-item a,
.course-list a,
.footer-links a {
  font-weight: 800;
}

.events-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 18px;
  margin-top: 38px;
}

.events-layout > div {
  min-width: 0;
}

.events-layout h3 {
  margin-bottom: 14px;
}

.event-list {
  display: grid;
  gap: 14px;
}

.event-item {
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--shadow);
}

.event-meta {
  margin: 0 0 8px;
  color: var(--plum);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.event-item h4 {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.28;
}

.event-item p:last-child,
.empty-state {
  margin-bottom: 0;
  color: var(--muted);
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-self: end;
  justify-self: end;
}

.filter-button {
  min-height: 38px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--ink);
  background: transparent;
  font-weight: 800;
  cursor: pointer;
}

.filter-button.is-active {
  color: #fff;
  border-color: var(--teal);
  background: var(--teal);
}

.publication-list {
  display: grid;
  gap: 14px;
  margin-top: 36px;
}

.publication-item {
  display: grid;
  grid-template-columns: 0.5fr 1fr auto;
  gap: 22px;
  align-items: center;
  padding: 22px;
}

.publication-item.is-hidden {
  display: none;
}

.publication-item h3 {
  max-width: 620px;
}

.course-list {
  display: grid;
  gap: 12px;
}

.course-list a {
  display: block;
  padding: 18px;
  border-left: 4px solid var(--gold);
  background: #fff;
  text-decoration: none;
}

.callout {
  align-items: center;
  padding: 38px;
  border-radius: 8px;
  color: #fff;
  background: var(--ink);
}

.callout .section-kicker,
.callout p {
  color: rgba(255, 255, 255, 0.78);
}

.callout h2 {
  color: #fff;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 28px;
  padding: 38px clamp(18px, 5vw, 64px);
  color: #fff;
  background: #101820;
}

.site-footer p {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.72);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

@media (max-width: 860px) {
  .site-header {
    align-items: flex-start;
  }

  .nav-toggle {
    display: block;
    flex: 0 0 auto;
  }

  .site-nav {
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 10px 18px 18px;
    color: var(--ink);
    background: rgba(247, 244, 236, 0.98);
    box-shadow: 0 16px 30px rgba(23, 33, 43, 0.12);
  }

  .site-header.is-open .site-nav {
    display: flex;
  }

  .site-nav a {
    padding: 12px 0;
    border-top: 1px solid var(--line);
  }

  .hero {
    min-height: 94vh;
  }

  .hero-content {
    padding-top: 112px;
  }

  .hero-overlay {
    background:
      linear-gradient(90deg, rgba(15, 22, 30, 0.88), rgba(15, 22, 30, 0.62)),
      linear-gradient(0deg, rgba(15, 22, 30, 0.38), rgba(15, 22, 30, 0.12));
  }

  .hero-stats,
  .intro-grid,
  .section-heading,
  .events-layout,
  .split,
  .callout,
  .publication-item {
    grid-template-columns: 1fr;
  }

  .filter-group {
    justify-self: start;
  }

  .research-grid,
  .people-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .brand small {
    display: none;
  }

  .hero-stats,
  .research-grid,
  .people-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 64px 0;
  }

  .band {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .callout {
    padding: 28px 20px;
  }

  .site-footer {
    display: block;
  }

  .footer-links {
    margin-top: 18px;
  }
}
