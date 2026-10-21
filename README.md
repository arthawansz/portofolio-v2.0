# Portfolio v2.0 — Arthawan Pratama

A high-performance, dark-themed personal portfolio web application built with Next.js 16 (App Router), React 19, and Tailwind CSS v4. Designed with a high-contrast aesthetic featuring bold typography, refined micro-interactions, and modular component architecture.

---

## Overview

Portfolio v2.0 serves as the primary digital showcase for Arthawan Pratama, detailing engineering expertise, featured projects, technical credentials, and professional background. The project emphasizes clean code, responsive layouts, fast load times, and a cohesive design system centered on dark slate surfaces and deep crimson accents.

---

## Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.4 | React Framework with App Router and Turbopack |
| **Library** | React 19.3 | Component-driven UI architecture |
| **Styling** | Tailwind CSS v4 | Utility-first styling with modern CSS engine |
| **Typography** | Barlow (Next/Font) | Condensed sans-serif typeface loaded via Google Fonts |
| **Icons** | React Icons | Simple Icons and Font Awesome vector sets |
| **Linting** | ESLint 9 | Code quality and Next.js standard lint rules |

---

## Key Features & Page Architecture

### 1. Navigation (`Navbar.jsx`)
- Fixed header with scroll-reactive background backdrop blur.
- Minimal brand monogram identity (`AP.`).
- Smooth anchor routing across sections (`#home`, `#about`, `#project`, `#certificates`, `#contact`).
- Admin panel authentication trigger.

### 2. Hero Section (`Hero.jsx`)
- Radial gradient background glow with deep red lighting effects (`#FF1E27`).
- Bold typography with gradient masks and foreground portrait framing.
- Direct external links to professional social profiles (GitHub, LinkedIn, Instagram).

### 3. Profile & Technical Skills (`About.jsx`)
- High-contrast card-based layout on light slate canvas (`#F4F4F5`).
- Structured metadata summary: Full Name, Location, Specialization, and Current Status.
- Direct resume download action.
- Hierarchical skill display:
  - **Software Engineer**: Full-width primary stack (JavaScript, React, Next.js, Tailwind CSS, Node.js).
  - **Tools & Server**: Deployment, containerization, and version control (Git, GitHub, Docker, Vercel, Figma).
  - **Core Abilities**: Engineering principles and foundational software methodologies.

### 4. Archived Works (`Projects.jsx`)
- Interactive project showcase grid with custom preview surfaces.
- Dynamic technology stack tags for each repository.
- GitHub source code integration and external project preview triggers.

### 5. Licenses & Credentials (`Certificates.jsx`)
- Professional certification records including verification IDs, issuing organizations (Dicoding, Cisco Networking Academy), and completion years.

### 6. Interactive Footer (`Footer.jsx`)
- Large typography call-to-action (`LET'S CREATE SOMETHING GREAT`).
- Real-time Asia/Jakarta (WIB) live clock synchronization via `toLocaleTimeString`.
- Direct communication channels and smooth scroll-to-top interaction.

---

## Project Structure

```text
portofolio-v2.0/
├── public/                 # Static assets (images, icons, resume.pdf)
├── src/
│   ├── app/
│   │   ├── assets/         # Local images and graphic assets
│   │   ├── components/     # Modular section components
│   │   │   ├── About.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Projects.jsx
│   │   ├── globals.css     # Global style rules, Tailwind imports, scrollbar tokens
│   │   ├── layout.js       # Root layout definition and font optimization
│   │   └── page.js         # Single-page application entry point
├── eslint.config.mjs       # ESLint configuration
├── next.config.mjs         # Next.js runtime configuration
├── package.json            # Project manifest, scripts, and dependencies
├── postcss.config.mjs      # PostCSS configuration
└── README.md               # Technical documentation
```

---

## Getting Started

### Prerequisites

Ensure the following tools are installed in your local environment:
- **Node.js**: `v18.17.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arthawansz/portofolio-v2.0.git
   cd portofolio-v2.0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## Build & Deployment

### Production Build

To compile and optimize the application for production deployment:

```bash
# Build the production bundle
npm run build

# Start the production server locally
npm run start
```

### Deployment Guidelines

The project is fully compatible with modern serverless hosting platforms such as Vercel, Netlify, or self-hosted Node.js / Docker environments:

- **Vercel**: Import the GitHub repository directly; framework preset will automatically detect Next.js with zero configuration needed.
- **Environment Variables**: No external database or secret keys are required for the base presentation tier.

---

## Design System & Tokens

- **Background Dark**: `#09090B` (Zinc-950)
- **Background Light (About)**: `#F4F4F5` (Zinc-100)
- **Primary Accent**: `#FF1E27` (Crimson Red)
- **Typography**: Barlow (`font-barlow`, weights 400 through 900)
- **Border Treatments**: `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.15)`

---

## Author

**Arthawan Pratama**
- Specialization: Full-Stack Developer
- GitHub: [@arthawansz](https://github.com/arthawansz)
- Institution: Telkom University

---

## License

This project is open-source and available under the [MIT License](LICENSE).
