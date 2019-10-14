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

  xmlhttp.open("GET", "https://assets.ctl.io/chi/versions.json", true);
  xmlhttp.send();
}

function fillDropdown() {
  var drop = document.getElementById('versionDropdown');
  
  while (drop.childNodes.length > 0) {
    drop.removeChild(drop.firstChild);
  }

  for (var version in versions) {
    var versionAnchor = document.createElement('a');
    
    versionAnchor.setAttribute("href", "https://assets.ctl.io/chi/"+versions[version]);
    versionAnchor.setAttribute("class", "m-dropdown__menu-item");
    versionAnchor.innerText = "v" + versions[version];
    drop.appendChild(versionAnchor);
  }
}

function checkChiCurrentVersion(currentVersion) {
  if (window.chiCurrentVersion !== currentVersion) {
    var docsContainerSelector = document.getElementById('docs-container');
    var chiVersionCheckSelector = document.getElementById('version-check');
    var newVersionMessage = document.createElement('div');

    fillDropdown();
    newVersionMessage.setAttribute("class", "m-alert -banner -center -info -w--100");
    newVersionMessage.setAttribute("role", "alert");
    newVersionMessage.innerHTML = `<i class="a-icon -sm--2 icon-circle-info -text--info"></i> A new version of Chi is available! &nbsp;<a href="https://assets.ctl.io/chi/">Learn more &#8250;</a>`;
    chiVersionCheckSelector.appendChild(newVersionMessage, chiVersionCheckSelector.childNodes[0]);
    docsContainerSelector.classList.add("outdated-version");
  }
}
