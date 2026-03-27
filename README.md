# Anki Web

Anki Web is a lightweight browser-based language recall trainer. Paste study sentences, generate prompt cards with an AI model, and practice recalling the original sentence with AI-assisted scoring and feedback.

The project is built for Cloudflare Pages:

- Static frontend in `public/`
- Serverless API endpoints in `functions/`
- Configurable through environment variables for any OpenAI-compatible chat API

## Features

- Turn raw study material into practice cards automatically
- Generate prompts in a separate helper language
- Score free-form answers with semantic tolerance instead of exact string matching
- Retry only incorrect items after a session
- Switch the UI between Chinese, English, Japanese, French, and Spanish
- Deploy as a simple static site plus Cloudflare Pages Functions

## Demo Flow

1. Paste one target-language sentence per line
2. Choose the target language
3. Generate prompt cards
4. Recall the original sentence from the prompt
5. Submit your answer for AI feedback and scoring
6. Review your summary and retry mistakes

## Tech Stack

- Frontend: vanilla HTML, CSS, and JavaScript
- Backend: Cloudflare Pages Functions with TypeScript
- AI layer: OpenAI-compatible Chat Completions API

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Create local environment variables

```bash
npm run setup:dev
```

This creates `.dev.vars` from `.dev.vars.example`.

You can also copy it manually:

```bash
cp .dev.vars.example .dev.vars
```

### 3. Fill in `.dev.vars`

```env
AI_API_KEY=your_api_key_here
AI_BASE_URL=https://api.deepseek.com/v1
AI_MODEL=deepseek-chat
```

`AI_BASE_URL` and `AI_MODEL` are optional if you want to use the built-in defaults.

### 4. Start local development

```bash
npm run dev
```

## Deployment

Deploy to Cloudflare Pages with `public` as the build output directory.

Set these environment variables in your Pages project:

```text
AI_API_KEY
AI_BASE_URL
AI_MODEL
```

Example values:

```text
AI_BASE_URL=https://api.deepseek.com/v1
AI_MODEL=deepseek-chat
```

## Project Structure

```text
public/
  index.html      Frontend shell
  app.js          Client-side app logic
  style.css       Styling

functions/
  api/prepare.ts  Generates prompt cards from study material
  api/check.ts    Scores user answers and returns feedback
  _lib/ai.ts      Shared AI request utilities

scripts/
  setup-dev-vars.mjs  Creates .dev.vars from the example file
```

## Configuration

Environment variables used by the app:

- `AI_API_KEY`: API key for your AI provider
- `AI_BASE_URL`: Base URL for an OpenAI-compatible API
- `AI_MODEL`: Chat model name

Defaults in the backend:

- `AI_BASE_URL=https://api.deepseek.com/v1`
- `AI_MODEL=deepseek-chat`

## Security

- Never commit real API keys
- Keep `.dev.vars`, `.env`, and other local config files out of version control
- Rotate any key that has ever been stored in plaintext or shared accidentally

## Notes

- This project currently uses AI-based prompt generation and answer evaluation rather than deterministic grading
- The backend expects an OpenAI-compatible `/chat/completions` interface with JSON response support
