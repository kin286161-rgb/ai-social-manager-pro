# AI Social Manager Pro

## Architecture overview

- Web app: mobile-first dashboard and page modules
- API layer: route handlers for dashboard, Fanpage, TikTok, agent and scheduler data
- Background workers: queue-driven processing for edits and publishing
- Storage: object storage for uploaded videos and exported assets
- Security: OAuth token encryption and RBAC policies

## Operational requirements

- Only post content to Facebook via officially supported Graph API endpoints.
- TikTok import requires explicit authorization or user-provided original content.
- Videos must be checked for ownership and duplicate source before processing.
- Never simulate successful publishing without provider confirmation.
