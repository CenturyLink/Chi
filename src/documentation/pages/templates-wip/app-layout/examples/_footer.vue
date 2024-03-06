<script>
import { FOOTER_LANGUAGE_DROPDOWN_ITEMS, FOOTER_LINKS } from '~/fixtures/fixtures';

const generateLumenFooter = (dropdownId) => {
  return `<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="${dropdownId}" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${FOOTER_LANGUAGE_DROPDOWN_ITEMS.map(
                ({ href, name }, index) =>
                  `<a class="chi-dropdown__menu-item${index === 0 ? ' -active' : ''}" href="${href}">${name}</a>`
              ).join('\n              ')}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${FOOTER_LINKS.map(({ href, title }) => `<li><a href="${href}">${title}</a></li>`).join(
                '\n              '
              )}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
};

const generateCenturylinkFooter = () => {
  return `<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-footer__links">
            <ul>
              ${FOOTER_LINKS.map(({ href, title }) => `<li><a href="${href}">${title}</a></li>`).join(
                '\n              '
              )}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 CenturyLink. All Rights Reserved. Third party marks are the property of their respective owners.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
};

const generateBrightspeedFooter = (dropdownId) => {
  return `<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="${dropdownId}" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${FOOTER_LANGUAGE_DROPDOWN_ITEMS.map(
                ({ href, name }, index) =>
                  `<a class="chi-dropdown__menu-item${index === 0 ? ' -active' : ''}" href="${href}">${name}</a>`
              ).join('\n              ')}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${FOOTER_LINKS.map(({ href, title }) => `<li><a href="${href}">${title}</a></li>`).join(
                '\n              '
              )}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
};

export const generateExampleFooter = (theme = 'lumen', dropdownId = 'language-dropdown-button') => {
  switch (theme) {
    case 'brightspeed':
      return generateBrightspeedFooter(dropdownId);
    case 'centurylink':
      return generateCenturylinkFooter();
    default:
      return generateLumenFooter(dropdownId);
  }
};

export const generateAllExampleFooters = (dropdownId = 'language-dropdown-button') => ({
  lumen: generateExampleFooter(dropdownId),
  centurylink: generateExampleFooter('centurylink', dropdownId),
  brightspeed: generateExampleFooter('brightspeed', dropdownId),
});
</script>
