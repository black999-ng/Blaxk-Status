const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Required for FFmpeg.wasm — enables SharedArrayBuffer
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html ONLY for navigation, not asset files
app.get('*', (req, res) => {
  if (path.extname(req.path)) {
    return res.status(404).send('Not found: ' + req.path);
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`StatusFix running on http://localhost:${PORT}`);
});