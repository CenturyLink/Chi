var versions;

if (window.location.hostname === 'assets.ctl.io') {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === XMLHttpRequest.DONE) {
      if (xmlhttp.status === 200) {
        versions = JSON.parse(xmlhttp.responseText);
        if (localStorage.getItem("chiVersions") !== JSON.stringify(versions))  {
          localStorage.setItem("chiVersions", JSON.stringify(versions));
          checkChiCurrentVersion(versions[0]);
        }
      }
    }
  };

  var time = Date.now();
  xmlhttp.open("GET", "https://assets.ctl.io/chi/versions.json?time="+time, true);
  xmlhttp.send();
}

function fillDropdown() {
  var drop = document.getElementById('versionDropdown');

  while (drop.childNodes.length > 0) {
    drop.removeChild(drop.firstChild);
  }

  for (var version in versions.slice(0, 4)) {
    var versionAnchor = document.createElement('a');

    versionAnchor.setAttribute("href", "https://assets.ctl.io/chi/"+versions[version]);
    versionAnchor.setAttribute("class", "chi-dropdown__menu-item");
    versionAnchor.innerText = "v" + versions[version];
    if (window.chiCurrentVersion === versions[version]) {
      versionAnchor.classList.add('-active');
    }
    drop.appendChild(versionAnchor);
  }
}

function versionCompare(v1, v2) {
  var v1parts = v1.split('.'),
      v2parts = v2.split('.');

  for (var i = 0; i < v1parts.length; ++i) {
      if (v2parts.length == i) {
          return false;
      }

      if (v1parts[i] == v2parts[i]) {
          continue;
      } else if (v1parts[i] > v2parts[i]) {
          return false;
      } else {
          return true;
      }
  }

  return false;
}

function checkChiCurrentVersion(currentVersion) {
  if (versionCompare(window.chiCurrentVersion, currentVersion)) {
    var docsContainerSelector = document.getElementById('docs-container');
    var chiVersionCheckSelector = document.getElementById('version-check');
    var newVersionMessage = document.createElement('div');

    fillDropdown();
    newVersionMessage.setAttribute("class", "chi-alert -banner -center -info -w--100");
    newVersionMessage.setAttribute("role", "alert");
    newVersionMessage.innerHTML = '<i class="chi-icon chi-alert__icon icon-circle-info -icon--info"></i><div class="chi-alert__content"><p class="chi-alert__text">A new version of Chi is available! &nbsp;<a href="https://assets.ctl.io/chi/'+currentVersion+'">Learn more &#8250;</a></p>';
    while (chiVersionCheckSelector.childNodes.length > 0) {
      chiVersionCheckSelector.removeChild(chiVersionCheckSelector.firstChild);
    }
    chiVersionCheckSelector.appendChild(newVersionMessage, chiVersionCheckSelector.childNodes[0]);
    docsContainerSelector.classList.add("outdated-version");
  }
}
