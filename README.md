# AI Social Manager Pro

A mobile-first social media automation platform for Facebook content publishing, TikTok sourcing, AI-driven video editing, product linking, and scheduling.

## Stack

- Frontend: Next.js + TypeScript + Tailwind CSS + PWA-ready design
- Backend: Next.js API routes + app orchestration layer
- Database: PostgreSQL schema included
- Queue: Redis-ready worker flow via architecture docs
- Video pipeline: FFmpeg-ready workflow
- AI orchestration: modular agent architecture

## Included in this repository

- Mobile dashboard UI
- Facebook Fanpage management page
- TikTok importer page
- AI agent status page
- Scheduling page
- REST API endpoints for health, dashboard, fanpages, TikTok, and agents
- Database schema and security guidance

## Quick start

```bash
npm install
npm run dev
```

Then open: http://localhost:3000

## Notes

This repository includes a working UI foundation and real API routes for the app shell. Real Meta OAuth and TikTok API integrations require valid credentials and access approval. The platform intentionally shows "Not connected" and guidance states when live API access is not granted, instead of simulating success.

## Phase status

- Phase 1: UI/UX mobile first — complete
- Phase 2: Authentication + Fanpage management — scaffolded
- Phase 3: TikTok importer — implemented UI and API
- Phase 4+: architecture and orchestration routing prepared

## Database schema

See `database/schema.sql` for the foundational tables.
