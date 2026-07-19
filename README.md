# Rouvin Rebello — Portfolio

Personal portfolio website showcasing my experience in software development, automation, and data analysis.

🔗 **Live:** https://rouvin-rebello.github.io

## Tech

- **HTML5 / CSS3 / vanilla JavaScript** — no build step, no framework, no backend
- Modern purple design system with **light/dark theme toggle** (persisted via `localStorage`)
- Fully responsive (mobile · tablet · desktop) with scroll-reveal animations and micro-interactions
- Contact form powered by [FormSubmit](https://formsubmit.co) (static, no server required)
- Google Analytics + Content Security Policy

## Structure

```
index.html      # Markup and content (hero, about, education, experience,
                # projects, professional development, skills, interests, contact)
styles.css      # Design tokens + all component styles (light + dark themes)
scripts.js      # Theme toggle, mobile nav, smooth scroll, scroll reveal, active nav
Public/         # Images and company/university logos
```

## Develop locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

This repo is a GitHub Pages user site — pushing to `main` publishes the root automatically.

```bash
git add .
git commit -m "Update portfolio"
git push
```
