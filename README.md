# StatusFix

WhatsApp Status quality optimizer — lossless image + H.264 video re-encoding.

## Overview

`StatusFix` is a simple web application that serves a frontend from `public/` and uses FFmpeg compiled to WebAssembly to optimize media for WhatsApp status uploads. A minimal Express server hosts the static files and supports SharedArrayBuffer requirements for FFmpeg.wasm.

## Features

- Optimizes images losslessly for WhatsApp status
- Re-encodes video to H.264 format
- Static frontend served from `public/`
- Small Node.js Express server

## Requirements

- Node.js 18 or newer
- npm

## Installation

```bash
cd /home/blaxk/Downloads/Downloads/scripts/statusfix
npm install
```

## Run

```bash
npm start
```

Then open your browser at:

```bash
http://localhost:3000
```

## Project Structure

- `server.js` — Express server configuration
- `package.json` — project metadata and dependencies
- `public/` — static frontend assets
  - `index.html` — application entry page
  - `ffmpeg/` — FFmpeg WebAssembly build files
- `render.yaml` — additional project or deployment configuration

## Notes

- The server sets `Cross-Origin-Opener-Policy` and `Cross-Origin-Embedder-Policy` headers, which are required for FFmpeg.wasm to access `SharedArrayBuffer` safely.
- All client-side assets are served from the `public/` directory.

## License

No license specified. Add a `LICENSE` file if you want to open source this project.
