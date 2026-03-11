<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: [REDACTED]

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Linting & Testing
- Run **ESLint**: `npm run lint`
- Run **Vitest** unit tests: `npm run test`

## Docker
Build the Docker image:
`docker build -t react-example .`

Run it:
`docker run -p 8080:8080 react-example`

## Security & Maintenance
Dependencies are regularly updated and audited using built-in `npm audit` and `npm-check-updates` (to verify zero vulnerabilities based on current npm advisories).
