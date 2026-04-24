# Sehrish Khan — Portfolio

BI Developer & Data Analyst portfolio built with React. Features a 3D rotating cube hero, animated scroll reveals, Power BI embed, and a working contact form via EmailJS.

**Live site:** https://sehrishkhan336.github.io/react-portfolio

---

## Tech Stack

- React 18 (Create React App)
- CSS custom properties — dark/light theme
- EmailJS (`@emailjs/browser`) — contact form
- React Icons
- GitHub Pages (`gh-pages`)

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | 3D CSS cube, rotating role titles, stats bar, CTA buttons |
| **About** | Profile photo, bio, skills summary |
| **Skills** | 8 animated progress bars (SQL, Power BI, DAX, Excel, Python…) |
| **Projects** | AI Autograder (OpenAI/SQL Server) + EV Registrations (Power BI embed) |
| **Experience** | Timeline — Colaberry, Bit & Bytes, Telenor |
| **Contact** | EmailJS form with validation + social links |

---

## Local Development

```bash
git clone https://github.com/sehrishkhan336/react-portfolio
cd react-portfolio
npm install
cp .env.example .env   # fill in your EmailJS credentials
npm start              # http://localhost:3000/react-portfolio
```

---

## Environment Variables

Create a `.env` file in the project root:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Get these from [EmailJS Dashboard](https://dashboard.emailjs.com).

⚠️ Never commit `.env` — it is gitignored.

---

## Deployment

```bash
npm run deploy
```

Deploys to GitHub Pages via `gh-pages` branch.
Live at: https://sehrishkhan336.github.io/react-portfolio

---

## Contact

**Sehrish Khan**
BI Developer & Data Analyst
📧 sehrishkhan.hjim@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/sehrish-khan-63056416/)
💻 [GitHub](https://github.com/sehrishkhan336)

---

*Built with React · Deployed on GitHub Pages · © 2026*
