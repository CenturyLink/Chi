function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(param);
}

function isValidTheme(theme) {
  const allowedThemes = ['chi', 'chi-portal', 'chi-centurylink', 'chi-colt', 'chi-brightspeed', 'chi-test'];

  return allowedThemes.includes(theme);
}

function getBaseUrl(version) {
  const isLocalhost = window.location.hostname === 'localhost';

  return isLocalhost ? `http://localhost:8000/chi/${version}` : `/chi/${version}`;
}

async function loadChiAssets() {
  try {
    let version = window.version;

    if (!version) {
      const response = await fetch('/package.json');
      const packageJson = await response.json();

      version = packageJson.version;
    }

    const themeParam = getQueryParam('theme');
    const theme = isValidTheme(themeParam) ? themeParam : 'chi';
    const baseUrl = getBaseUrl(version);
    const themeCss = document.getElementById('theme-css');

    if (themeCss) {
      themeCss.href = `${baseUrl}/${theme}.css`;
    }

    await loadScript(`${baseUrl}/js/chi.js`);
    await loadScript(`${baseUrl}/js/ce/ux-chi-ce/ux-chi-ce.js`);
  } catch (error) {
    console.error('Error loading Chi assets:', error);
    throw error;
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

window.chiReady = loadChiAssets();
