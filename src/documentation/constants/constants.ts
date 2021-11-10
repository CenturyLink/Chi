import { CHI_VERSION, DEFAULT_THEME } from './configs';

export const chiAssetsRootUrl = `https://assets.ctl.io/chi/${CHI_VERSION}/`;
export const THEMES = {
  centurylink: {
    label: 'CenturyLink',
    favicon: '',
    css: `${chiAssetsRootUrl}chi-centurylink.css`,
    docsCss: `${chiAssetsRootUrl}assets/themes/centurylink/docs.css`,
  },
  lumen: {
    label: 'Lumen',
    favicon: '',
    css: `${chiAssetsRootUrl}chi.css`,
    docsCss: `${chiAssetsRootUrl}assets/themes/lumen/docs.css`,
  },
  portal: {
    label: 'Lumen Enterprise Portal',
    favicon: '',
    css: `${chiAssetsRootUrl}chi-portal.css`,
    docsCss: `${chiAssetsRootUrl}assets/themes/portal/docs.css`,
  },
};
export const defaultCss = THEMES[DEFAULT_THEME].css;
export const defaultDocsCss = THEMES[DEFAULT_THEME].docsCss;

export const standardComponentPageTabs = [
  {
    active: true,
    id: 'examples',
    label: 'Examples',
  },
  {
    id: 'properties',
    label: 'Properties',
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
  },
];
