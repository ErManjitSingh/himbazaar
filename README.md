# HimBazaar

India's marketplace for authentic Himalayan & Himachali products.

## Architecture

```
Website (Next.js)  ──┐
                     ├──► REST API (Node.js) ──► MongoDB
Flutter App        ──┘
```

## Monorepo

| Path | Status | Stack |
|------|--------|-------|
| `apps/web` | Active | Next.js, TypeScript, Tailwind |
| `apps/mobile` | Foundation | Flutter, Dart |
| `apps/api` | Scaffold only | Node.js (not connected yet) |
| `packages/types` | Shared contracts | TypeScript |

## Current phase

Premium frontend with mock/local data. No MongoDB, auth backend, or payments yet.

## Web

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Brand

- Deep Himalayan Green `#0B3D2E`
- Forest Green `#123F32`
- Natural Green `#657A32`
- Muted Gold `#C79A35`
- Cream `#F7F3E8`
- Ivory `#FCFBF7`
