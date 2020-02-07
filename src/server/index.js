const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();
const APP_DIR = process.cwd();
const HTML_FILE = path.join(APP_DIR, 'dist', 'index.html');

app.use(express.static(path.resolve(APP_DIR, './dist')));

app.get('*', (req, res) => {
  const html = fs.readFileSync(HTML_FILE, 'utf-8');
  res.send(html);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}.`);
});
