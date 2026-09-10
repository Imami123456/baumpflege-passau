# 🌲 Bayerwald Baumpflege & Gartenservice Passau

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.x-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tests: Vitest](https://img.shields.io/badge/Tests-Vitest-success?logo=vitest&logoColor=white)](https://vitest.dev/)
[![CI: GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)](.github/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> High-converting, interactive, responsive bilingual (German / English, German default) commercial website for a tree care, arborism, and property maintenance enterprise based in Passau, Bavaria.

---

## 🌟 Key Features

- **🌐 Complete Bilingual Engine (`DE` | `EN`):**
  - Instant language switcher with localized terminology (*Seilklettertechnik SKT*, *Kronenschnitt*, *Problembaumfällung*, *ZTV-Baumpflege*).
  - Selection persists across sessions via `localStorage`.

- **🧮 Interactive 4-Step Cost & Scope Estimator ("Kostenrechner"):**
  - **Step 1:** Multi-select service chips (Tree Felling, Crown Pruning, Hedge Trimming, Stump Grinding, Green Waste Chipping).
  - **Step 2:** Tree height scale & terrain accessibility toggle (*Easy access* vs. *Steep slope / narrow river valley passage*).
  - **Step 3:** Photo upload preview with dropzone and instant thumbnail inspection.
  - **Step 4:** Dynamic preliminary estimate range, `canvas-confetti` celebration, and 1-click formatted WhatsApp / Mailto query dispatch.
  - **Direct Service Pre-selection:** Clicking "Preis anfragen" on any service card automatically preselects that service in the calculator.

- **🪓 Interactive Before & After Comparison Slider:**
  - Touch- and drag-enabled slider component showcasing work quality (hazardous overgrowth vs. manicured lawn with neatly stacked firewood).
  - Keyboard accessible with full ARIA range slider controls.

- **❓ Interactive Passau Tree Care FAQ Accordion:**
  - Accordion addressing common municipal requirements (*Baumschutzverordnung Passau*, *Fällgenehmigungen*, *Vogelschutzfristen § 39 BNatSchG*, *SKT vs. Hubsteiger*).

- **🚨 24/7 Storm Damage Emergency Banner:**
  - Flashing amber pulse beacon for emergency windbreak & fallen tree response across Passau's three rivers (Danube, Inn, Ilz).
  - Direct click-to-call integration (`tel:+491708924110`).

- **📍 Passau Regional Service Area (35 km Radius):**
  - District badges for Passau (`94032 Altstadt/Innstadt`, `94034 Grubweg/Ilzstadt`, `94036 Haidenhof/Heining`, etc.).
  - Surrounding Bavarian Forest communities (`Salzweg`, `Fürstenzell`, `Vilshofen`, `Tiefenbach`, `Hauzenberg`, `Pocking`).

- **⚖️ German Legal Compliance:**
  - **Impressum (§ 5 DDG)** with complete business disclosure, tax credentials, and €5M commercial liability coverage.
  - **Datenschutz (DSGVO)** privacy policy modal covering contact intake, WhatsApp, and data rights.
  - Non-intrusive cookie/storage informational banner.

- **📱 Floating Action Buttons (FAB):**
  - Instant WhatsApp button with pre-filled localized inquiry message.
  - Mobile direct call button and smooth back-to-top button.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (Custom Bavarian forest/timber palette) |
| **Testing** | [Vitest](https://vitest.dev/) (Unit & i18n data parity testing) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Visual Effects** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Code Quality** | Oxlint + Strict TypeScript (`tsc -b`) |

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `pnpm` / `yarn`

### Installation
```bash
# Clone the repository
git clone git@github.com:Imami123456/baumpflege-passau.git

# Navigate to project root
cd baumpflege-passau

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Automated Testing
```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch
```

### Production Build
```bash
npm run build
npm run preview
```

### Linting
```bash
npm run lint
```

---

## 📁 Project Structure

```
├── .editorconfig               # Cross-editor formatting rules
├── .github/
│   ├── workflows/ci.yml        # Automated CI test, lint & build pipeline
│   ├── ISSUE_TEMPLATE/         # Structured bug report & feature request forms
│   └── PULL_REQUEST_TEMPLATE.md# Pull request guidelines and verification checklist
├── tests/
│   ├── pricing.test.ts         # Unit tests for cost calculation engine
│   └── translations.test.ts    # Bilingual dictionary parity & postal code tests
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Sticky frosted-glass navbar & lang switcher
│   │   ├── EmergencyBanner.tsx # 24/7 storm damage pulse alert
│   │   ├── Hero.tsx            # Hero banner, trust badges & dual CTAs
│   │   ├── ServicesGrid.tsx    # 6 interactive service cards with perks
│   │   ├── CostEstimator.tsx   # 4-step interactive price calculator
│   │   ├── BeforeAfterSlider.tsx # Draggable Vorher/Nachher comparison
│   │   ├── ServiceAreaPassau.tsx # Passau district badges & radius map
│   │   ├── AboutSection.tsx    # Equipment, safety pledge & key stats
│   │   ├── Testimonials.tsx    # 5-star customer reviews from Passau
│   │   ├── FAQSection.tsx      # Expandable Passau tree care FAQ accordion
│   │   ├── ContactSection.tsx  # Direct phone, WhatsApp, email, depot
│   │   ├── LegalModals.tsx     # Impressum (§ 5 DDG) & Datenschutz (DSGVO)
│   │   ├── CookieBanner.tsx    # Privacy consent banner
│   │   ├── FloatingActions.tsx # WhatsApp & mobile phone call FABs
│   │   └── Footer.tsx          # Footer navigation & compliance links
│   ├── context/
│   │   ├── LanguageContext.tsx # Language provider with localStorage sync
│   │   ├── useLanguage.ts      # Custom i18n hook
│   │   └── languageContextDefinition.ts
│   ├── i18n/
│   │   └── translations.ts     # Complete DE / EN localized dictionary
│   ├── utils/
│   │   └── pricing.ts          # Pure tree care pricing formula engine
│   ├── App.tsx                 # Root layout assembler
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Tailwind directives & smooth scrolling
├── tailwind.config.js          # Custom forest/amber outdoor theme
├── SECURITY.md                 # Security & responsible disclosure policy
├── LICENSE                     # MIT License
└── package.json
```

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
