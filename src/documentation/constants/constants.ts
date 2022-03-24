import { CHI_VERSION, DEFAULT_THEME } from './configs';

export const chiAssetsRootUrl = `https://assets.ctl.io/chi/${CHI_VERSION}/`;
export const THEMES = {
  brightspeed: {
    label: 'Brightspeed',
    favicon: '',
    css: `${chiAssetsRootUrl}chi-brightspeed.css`,
    docsCss: `${chiAssetsRootUrl}assets/themes/brightspeed/docs.css`,
  },
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

export const allChiVersions = [
  '2.0.0',
  '2.1.0',
  '2.2.0',
  '2.3.0',
  '2.4.0',
  '2.4.1',
  '2.5.0',
  '2.5.1',
  '2.6.0',
  '3.0.0',
  '3.1.0',
  '3.1.1',
  '3.2.0',
  '3.3.0',
  '3.4.0',
  '3.5.0',
  '3.6.0',
  '3.7.0',
  '3.8.0',
  '3.9.0',
  '3.10.0',
  '3.11.0',
  '3.12.0',
  '3.13.0',
  '3.14.0',
  '3.15.0',
  '3.16.0',
  '3.17.0',
  '4.0.0',
  '4.1.0',
  '4.1.1',
  '4.1.2',
  '4.2.0',
  '4.3.0',
  '4.4.0',
  '5.0.0',
  '5.1.0',
  '5.2.0',
  '5.3.0',
  '5.4.0',
  '5.5.0',
  '5.6.0',
  '5.7.0',
  '5.8.0',
  '5.9.0',
  '5.9.1',
  '5.9.11'
];

export const COMPONENT_EXAMPLE_EVENTS = {
  CHI_HEAD_TABS_CHANGE: 'chiHeadTabsChange'
}