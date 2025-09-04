# BUCC IFC Viewer

Lightweight IFC viewer built with Three.js and web-ifc, using ThatOpen UI components.

Quick start
- Prerequisites: Node.js 20.x, npm 10.x
- From project root:
  - npm install
  - npm run dev         # start dev server (open http://localhost:5173)
  - npm run build       # compile TypeScript and build for production
  - npm run preview     # serve production build locally

What it is
- Frontend app (Vite + TypeScript) that loads IFC files and renders them with three.js and web-ifc.
- UI built with @thatopen libraries; entry is `index.html` -> `/src/main.ts`.

Notes
- Recommended Node/npm versions are defined in package.json under "engines".
- To update ThatOpen / three / web-ifc versions, edit package.json then run `npm install`.
