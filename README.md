<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Senior Cloud Infrastructure Portfolio

Professional portfolio of **Fattah Emir Yanuar**, a Senior Cloud Infrastructure Engineer specializing in architecting, automating, and securing high-availability hybrid and multi-cloud environments.

## 🚀 Overview

This repository contains the source code for my professional portfolio website, built with React and Vite. It is designed to be highly resilient, professional, and easy to deploy.

## 🛠 Features

- **Editorial Design**: A refined visual system built on Fraunces (display serif) and Instrument Sans, with a warm paper and teal color palette.
- **Multi-Format Résumé Export**: Generate International, Europass (EU), or Japan rirekisho résumés as PDF or Word — built client-side on click via lazy-loaded chunks, no server round-trip.
- **Cover Letter Generator**: A fillable form produces a matching cover letter alongside the résumé.
- **Single Content Source**: All copy — profile, experience, skills, certifications — lives in `src/data.ts` and feeds both the website and every generated document.
- **Dockerized**: Containerized for consistent development and production environments.
- **Hardened Nginx**: Optimized for security and performance with Gzip compression and secure headers.
- **Automated Deployment**: Integrated with GitHub Actions for seamless delivery to GitHub Pages.

## 💻 Local Development

### Prerequisites

- Node.js (Latest LTS recommended)
- Docker (Optional, for containerized execution)

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```

## 🧪 Quality & Testing

Ensuring code quality through automated checks:

- **Linting**: Run `npm run lint` to check for style and potential errors.
- **Testing**: Run `npm run test` for unit tests powered by Vitest.
- **CI/CD**: Pre-commit hooks via Husky ensure only quality code is committed.

## 🐳 Docker (Optional Local/Alternative Path)

Production deployment is handled via GitHub Actions to GitHub Pages (see `.github/workflows/deploy.yml`). The Docker setup below is an optional alternative for local testing or self-hosting the built static site — it is not the production deploy path.

The project uses a multi-stage Docker build for an optimized and secure production image.

**Build the image:**
```bash
docker build -t portfolio-web .
```

**Run the container:**
```bash
docker run -p 8080:8080 portfolio-web
```

## 🔐 Security & Maintenance

- **Non-Root Execution**: The production image runs as a non-privileged user.
- **SAST**: Regular dependency auditing via `npm audit` and `npm-check-updates`.
- **Bypass Jekyll**: Deployments to GitHub Pages leverage a `.nojekyll` bypass for static asset integrity.

---
© 2026 Fattah Emir Yanuar. All rights reserved.
