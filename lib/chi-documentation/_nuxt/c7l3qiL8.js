import{a,F as r}from"./Cq1bO1Ih.js";import"./DtNz156Q.js";import"./CEIPSiTs.js";const s=i=>`<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="${i}" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${a.map(({href:e,name:t},o)=>`<a class="chi-dropdown__menu-item${o===0?" -active":""}" href="${e}">${t}</a>`).join(`
              `)}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${r.map(({href:e,title:t})=>`<li><a href="${e}">${t}</a></li>`).join(`
              `)}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`,c=()=>`<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-footer__links">
            <ul>
              ${r.map(({href:i,title:e})=>`<li><a href="${i}">${e}</a></li>`).join(`
              `)}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 CenturyLink. All Rights Reserved. Third party marks are the property of their respective owners.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`,l=i=>`<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="${i}" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${a.map(({href:e,name:t},o)=>`<a class="chi-dropdown__menu-item${o===0?" -active":""}" href="${e}">${t}</a>`).join(`
              `)}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${r.map(({href:e,title:t})=>`<li><a href="${e}">${t}</a></li>`).join(`
              `)}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`,n=(i="lumen",e="language-dropdown-button")=>{switch(i){case"brightspeed":return l(e);case"centurylink":return c();default:return s(e)}},u=(i="language-dropdown-button")=>({lumen:n("lumen",i),centurylink:n("centurylink",i),brightspeed:n("brightspeed",i)}),v={};export{v as default,u as generateAllExampleFooters,n as generateExampleFooter};
