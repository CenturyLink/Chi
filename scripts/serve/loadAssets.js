function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  
  return urlParams.get(param);
}

async function loadVersionAndApply() {
  let version = window.version;

  if (!version) {
    try {
      const response = await fetch('/package.json');
      const packageJson = await response.json();
      version = packageJson.version;
    } catch (error) {
      console.error('Error loading package.json: ', error);
    }
  }

  const theme = getQueryParam('theme') || 'chi';

  document.getElementById('theme-css').href = `http://localhost:8000/chi/${version}/${theme}.css`;
  document.getElementById('chi-js').src = `http://localhost:8000/chi/${version}/js/chi.js`;
  document.getElementById('ux-chi-ce-js').src = `http://localhost:8000/chi/${version}/js/ce/ux-chi-ce/ux-chi-ce.js`;
}

window.onload = loadVersionAndApply;
