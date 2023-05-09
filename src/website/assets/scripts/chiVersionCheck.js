let versions;
const { hostname } = window.location;

loadVersions();

function loadVersions() {
  const shouldFetch = ['assets.ctl.io', 'lib.lumen.com'].includes(hostname);

  if (!shouldFetch) {
    return;
  }

  const time = Date.now();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://${hostname}/chi/versions.json?time=${time}`, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE || xhr.status !== 200) {
      return;
    }

    if (localStorage.getItem('chiVersions') !== xhr.responseText) {
      localStorage.setItem('chiVersions', xhr.responseText);

      versions = JSON.parse(xhr.responseText);
      checkChiCurrentVersion(versions[0]);
    }
  };

  xhr.send();
}

function createVersionLink(version) {
  const isCurrentVersion = window.chiCurrentVersion === version;

  return `
    <a
      class="chi-dropdown__menu-item ${isCurrentVersion ? '-active' : ''}"
      href="${`https://${hostname}/chi/${version}`}"
    >
      v${version}
    </a>
  `;
}

function fillDropdown() {
  const dropdown = document.getElementById('versionDropdown');

  const latestVersions = versions.slice(0, 4);
  const versionLinks = latestVersions.map(createVersionLink).join('');

  dropdown.innerHTML = versionLinks;
}

function hasNewVersion(version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');

  return v1.some((element, index) => element !== (v2[index] || '0'));
}

function createAlertBar(currentVersion) {
  const docsContainerSelector = document.getElementById('docs-container');
  const chiVersionCheckSelector = document.getElementById('version-check');

  const alertBar = `
    <div class="chi-alert -banner -center -warning -w--100" role="alert">
      <i class="chi-icon chi-alert__icon icon-warning -icon--warning" aria-hidden="true"></i>
      <div class="chi-alert__content">
        <p class="chi-alert__text">A new version of Chi is available! &nbsp;
          <a href="https://assets.ctl.io/chi/${currentVersion}">Learn more ›</a>
        </p>
      </div>
    </div>
  `;

  docsContainerSelector.classList.add('outdated-version');
  chiVersionCheckSelector.innerHTML = alertBar;
}

function checkChiCurrentVersion(currentVersion) {
  if (!hasNewVersion(window.chiCurrentVersion, currentVersion)) {
    return;
  }

  createAlertBar(currentVersion);
  fillDropdown();
}
