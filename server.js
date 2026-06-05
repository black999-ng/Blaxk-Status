const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Still required for FFmpeg.wasm SharedArrayBuffer
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  if (path.extname(req.path)) {
    return res.status(404).send('Not found: ' + req.path);
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`StatusFix running on http://localhost:${PORT}`);
});