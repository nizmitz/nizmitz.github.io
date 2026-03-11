<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Senior Cloud Infrastructure Portfolio

Professional portfolio of **Fattah Emir Yanuar**, a Senior Cloud Infrastructure Engineer specializing in architecting, automating, and securing high-availability hybrid and multi-cloud environments.

## 🚀 Overview

This repository contains the source code for my professional portfolio website, built with React and Vite. It is designed to be highly resilient, professional, and easy to deploy.

## 🛠 Features

- **Multi-Cloud Expertise**: Showcasing experience with AWS, GCP, and Alibaba Cloud.
- **Infrastructure as Code**: Built with a focus on automation and scalability.
- **Dockerized**: Containerized for consistent development and production environments.
- **Hardened Nginx**: Optimized for security and performance with Gzip compression and secure headers.
- **automated Deployment**: Integrated with GitHub Actions for seamless delivery to GitHub Pages.

## 💻 Local Development

### Prerequisites

- Node.js (Latest LTS recommended)
- Docker (Optional, for containerized execution)

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Configure environment:**
   Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key.
3. **Run the development server:**
   ```bash
   npm run dev
   ```

## 🧪 Quality & Testing

Ensuring code quality through automated checks:

- **Linting**: Run `npm run lint` to check for style and potential errors.
- **Testing**: Run `npm run test` for unit tests powered by Vitest.
- **CI/CD**: Pre-commit hooks via Husky ensure only quality code is committed.

## 🐳 Docker Production Build

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
