import { BASE_HELP_LANGUAGES, FOOTER_LINKS } from './fixtures';

export const _getLanguagesList = (): string => {
    let langItemsList = '';
    BASE_HELP_LANGUAGES.forEach((langItem, index) => {
      langItemsList += `<a class="chi-dropdown__menu-item${index === 0 ? ' -active' : ''}" href="#">${langItem}</a>${index+1 === BASE_HELP_LANGUAGES.length ? '':`
              `}`
    })
    return langItemsList;
}

export const _getFooterLinksList = (): string => {
    let footerLinksList = '';
    FOOTER_LINKS.forEach((footerItem, index) => {
      footerLinksList += `${index===0 ? '' : `
              `}<li>
                <a href="${footerItem.link}"${footerItem.target ? ` target=${footerItem.target}` : ''}${footerItem.class ? ` class=${footerItem.class}` : ''}>${footerItem.label}</a>
              </li>`;
    });
    return footerLinksList;
}