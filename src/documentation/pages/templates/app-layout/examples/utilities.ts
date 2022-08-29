import { BASE_HELP_LANGUAGES, FOOTER_LINKS } from './fixtures';

const _getLanguagesList = (): string => {
    let langItemsList = '';
    BASE_HELP_LANGUAGES.forEach((langItem, index) => {
      langItemsList += `<a class="chi-dropdown__menu-item${index === 0 ? ' -active' : ''}" href="#">${langItem}</a>${index+1 === BASE_HELP_LANGUAGES.length ? '':`
              `}`
    })
    return langItemsList;
}

const _getFooterLinksList = (): string => {
    let footerLinksList = '';
    FOOTER_LINKS.forEach((footerItem, index) => {
      footerLinksList += `${index===0 ? '' : `
              `}<li>
                <a${footerItem.class ? ` class="${footerItem.class}"` : ''} href="${footerItem.link}"${footerItem.target ? ` target="${footerItem.target}"` : ''}>${footerItem.label}</a>
              </li>`;
    });
    return footerLinksList;
}

export const _getBaseWebComponentFooter = (isCenturyLinkTheme?: boolean): string => `<footer class="chi-footer" slot="footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat ${isCenturyLinkTheme ? '' : '-light '}-sm chi-dropdown__trigger" id="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${_getLanguagesList()}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${_getFooterLinksList()}
            </ul>
            <div class="chi-footer__copyright">&copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`;


export const _getBaseHtmlBlueprintFooter = (isCenturyLinkTheme?: boolean): string => `<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat ${isCenturyLinkTheme ? '' : '-light '}-sm chi-dropdown__trigger" id="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${_getLanguagesList()}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${_getFooterLinksList()}
            </ul>
            <div class="chi-footer__copyright">&copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`;

export const _getDashboardWidgetList = (isWebComponent: boolean) => {
  let widgetList = '';
    [...Array(8)].forEach((item, index) => {
      widgetList += `${index===0 ? '' : `
              `}<li class="chi-css-col -col-sm--6">
                ${isWebComponent ? `<chi-link href="#">Widget Link</chi-link>` : `<a class="chi-link" href="#">Widget Link</a>`}
              </li>`;
    });
    return widgetList;
}