function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(param);
}

window.chiReady = new Promise(async (resolve, reject) => {
  let version = window.version;

  if (!version) {
    try {
      const response = await fetch('/package.json');
      const packageJson = await response.json();
      
      version = packageJson.version;
    } catch (error) {
      console.error('Error loading package.json: ', error);
      reject(error);
      return;
    }
  }

  const theme = getQueryParam('theme') || 'chi';

  document.getElementById('theme-css').href = `http://localhost:8000/chi/${version}/${theme}.css`; // Load chi.js

  const chiScript = document.createElement('script');
  
  chiScript.src = `http://localhost:8000/chi/${version}/js/chi.js`;
  chiScript.onload = () => resolve();
  chiScript.onerror = (e) => reject(e);

  document.head.appendChild(chiScript);

  const uxScript = document.createElement('script');

  uxScript.src = `http://localhost:8000/chi/${version}/js/ce/ux-chi-ce/ux-chi-ce.js`;
  document.head.appendChild(uxScript);
});
