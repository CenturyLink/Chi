const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8000;
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json')));
const basePath = `/chi/${packageJson.version}`;

app.use(basePath, express.static(path.join(__dirname, 'dist')));

app.get(`${basePath}/*`, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get(`${basePath}/tests/*`, (req, res) => {
  const requestedPath = req.path.replace(`${basePath}/tests`, '');
  const testPath = path.join(__dirname, 'dist', 'tests', requestedPath);

  if (fs.existsSync(testPath) && fs.lstatSync(testPath).isFile()) {
    res.sendFile(testPath);
  } else {
    res.sendFile(path.join(__dirname, 'dist', 'tests', 'index.html'));
  }
});


app.listen(port, () => {
  console.log(`[CHI]: Started on http://localhost:${port}${basePath}`);
});
