# Security, Cloudflare Turnstile, and Optimizations

The goal of this task is to integrate Cloudflare Turnstile for bot protection, apply Vite build optimizations for page load speed, and add standard security/SEO metadata. This document outlines the plan for an agent to execute.

## Required Steps

### 1. Cloudflare Turnstile Integration
- Add Cloudflare Turnstile site key `0x4AAAAAACto7VT7cTYjGWaD` to the application.
- Configure GitHub Actions workflow files to use the `PUBLIC_TURNSTILE_SITE_KEY` repository secret so it can be injected at build time (e.g., passing it to the environment as `VITE_PUBLIC_TURNSTILE_SITE_KEY: ${{ secrets.PUBLIC_TURNSTILE_SITE_KEY }}`).

### 2. Performance Optimizations (Vite)
- Optimize `vite.config.ts` by adding `build.rollupOptions.output.manualChunks` to split vendor libraries (e.g., `react`, `react-dom`, `@tailwindcss/vite`) to separate chunks. This reduces initial JS payload and improves load time.
- Consider adding Vite compression plugins or preconnect resource hints in `index.html` to further improve the Time to First Byte.
- Use `act` to verify the optimizations locally if applicable, or rely on `npm run build` and `npm run preview`.

### 3. Top-Level Security and SEO Files
- **dependabot**: Create `.github/dependabot.yml` adjusting the ecosystem for 'npm' and 'github-actions' mapped on weekly/daily intervals.
- **robots.txt**: Add `public/robots.txt` for standard web crawler logic.
- **humans.txt**: Add `public/humans.txt` as a standard developer acknowledgment file.
- **security.txt**: Add `public/.well-known/security.txt` pointing to your security contact and policies.
- **SECURITY.md**: Add a baseline security policy in the project root file for GitHub vulnerability reports.

## Verification
- Run `npm run build` locally to verify chunk size optimizations.
- Use `act` to run the GitHub Actions workflows locally, ensuring the Turnstile secret injection behaves correctly and does not break the standard build/publish flow.
