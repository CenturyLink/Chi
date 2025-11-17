const express = require('express');
const path = require('path');
const fs = require('fs');
const rateLimit = require('express-rate-limit');
const cors = require('cors');


const app = express();
const port = 8000;
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json')));
const basePath = `/chi/${packageJson.version}`;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(cors());
app.use(basePath, express.static(path.join(__dirname, 'dist')));
app.use(limiter);

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

function redirectPreserveQuery(req, res, targetPath) {
  const search = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
  res.redirect(302, `${targetPath}${search}`);
}

app.get(/^\/chi\/?$/, (req, res) => {
  return redirectPreserveQuery(req, res, '/chi/latest/');
});

app.get(/^\/chi\/latest(?:\/.*)?$/, (req, res) => {
  const newPath = req.path.replace(/^\/chi\/latest(?=\/|$)/, `/chi/${CHI_VERSION}`);
  return redirectPreserveQuery(req, res, newPath);
});

app.get(new RegExp(`${basePath}/tests/(.*)`), (req, res) => {
  const requestedPath = req.path.replace(`${basePath}/tests`, '');
  const baseTestsPath = path.join(__dirname, 'dist', 'tests');
  const testPath = path.resolve(baseTestsPath, requestedPath);

   if (!testPath.startsWith(baseTestsPath)) {
    res.status(403).send('Forbidden');
    
    return;
  }
  
  if (fs.existsSync(testPath) && fs.lstatSync(testPath).isFile()) {
    res.sendFile(testPath);
  } else {
    res.sendFile(path.join(baseTestsPath, 'index.html'));
  }
});

app.listen(port, () => {
  console.log(`[CHI]: Started on http://localhost:${port}${basePath}`);
});
