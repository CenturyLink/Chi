import { CHI_VERSION, DEFAULT_THEME } from './configs';

export const TEMP_DEVELOPMENT_FALLBACK_URL = `https://assets.ctl.io/chi/5.35.0`;
export const DOCS_URL = `${TEMP_DEVELOPMENT_FALLBACK_URL}/js/ce/docs.json`
export const THEMES = {
  centurylink: {
    label: 'CenturyLink',
    favicon: '',
    css: `chi-centurylink.css`,
    docsCss: `assets/themes/centurylink/docs.css`
  },
  lumen: {
    label: 'Lumen',
    favicon: '',
    css: `chi.css`,
    docsCss: `assets/themes/lumen/docs.css`
  },
  portal: {
    label: 'Lumen Enterprise Portal',
    favicon: '',
    css: `chi-portal.css`,
    docsCss: `assets/themes/portal/docs.css`
  },
  brightspeed: {
    label: 'Brightspeed',
    favicon: '',
    css: `chi-brightspeed.css`,
    docsCss: `assets/themes/brightspeed/docs.css`
  },
  colt: {
    label: 'Colt',
    favicon: '',
    css: `chi-colt.css`,
    docsCss: `assets/themes/colt/docs.css`
  }
};
export const DEFAULT_CSS = THEMES[DEFAULT_THEME].css;
export const DEFAULT_DOCS_CSS = THEMES[DEFAULT_THEME].docsCss;

export const standardComponentPageTabs = [
  {
    active: true,
    id: 'examples',
    label: 'Examples'
  },
  {
    id: 'properties',
    label: 'Properties'
  },
  {
    id: 'accessibility',
    label: 'Accessibility'
  }
];

export const COMPONENT_EXAMPLE_EVENTS = {
  CHI_HEAD_TABS_CHANGE: 'chiHeadTabsChange'
};

export const DOCS_ENV = process.env.DOCS_ENV;
export const BASE_URLS_FOR_ENVS = {
  production: `/chi/${CHI_VERSION}/`, // assets.ctl.io, lib.lumen.io, staging
  development: '/', // Local
  pr: '/' // PR instances
};

export const BASE_URL =
  DOCS_ENV &&
  (DOCS_ENV === 'production' || DOCS_ENV === 'pr' || DOCS_ENV === 'development')
    ? BASE_URLS_FOR_ENVS[DOCS_ENV]
    : '/';

export const NAVIGATION_COMPONENTS_ITEMS = [
  {
    href: `components/accordion`,
    label: 'Accordion',
    source: 'pug'
  },
  { to: `components/activity`, label: 'Activity', source: 'vue' },
  {
    href: `components/alert`,
    label: 'Alert',
    source: 'pug'
  },
  {
    href: `components/avatar`,
    label: 'Avatar',
    source: 'pug'
  },
  {
    to: `components/badge`,
    label: 'Badge',
    source: 'vue'
  },
  {
    href: `components/brand`,
    label: 'Brand',
    source: 'pug'
  },
  {
    to: `components/breadcrumb`,
    label: 'Breadcrumb',
    source: 'vue'
  },
  {
    href: `components/button`,
    label: 'Button',
    source: 'pug'
  },
  {
    href: `components/button-group`,
    label: 'Button group',
    source: 'pug'
  },
  {
    href: `components/card`,
    label: 'Card',
    source: 'pug'
  },
  {
    href: `components/carousel`,
    label: 'Carousel',
    source: 'pug'
  },
  {
    href: `components/forms/checkbox`,
    label: 'Checkbox',
    source: 'pug'
  },
  {
    href: `components/data-table`,
    label: 'Data table',
    source: 'pug'
  },
  {
    href: `components/date-picker`,
    label: 'Date picker',
    source: 'pug'
  },
  {
    to: `components/divider`,
    label: 'Divider',
    source: 'vue'
  },
  {
    href: `components/drawer`,
    label: 'Drawer',
    source: 'pug'
  },
  {
    href: `components/dropdown`,
    label: 'Dropdown',
    source: 'pug'
  },
  {
    href: `components/expansion-panel`,
    label: 'Expansion panel',
    source: 'pug'
  },
  {
    to: `components/forms/file-input`,
    label: 'File input',
    source: 'vue'
  },
  {
    href: `components/flag-icon`,
    label: 'Flag icon',
    source: 'pug'
  },
  {
    href: `components/footer`,
    label: 'Footer',
    source: 'pug'
  },
  {
    href: `components/header`,
    label: 'Header',
    source: 'pug'
  },
  {
    href: `components/icon`,
    label: 'Icon',
    source: 'pug'
  },
  {
    href: `components/label`,
    label: 'Label',
    source: 'pug'
  },
  {
    href: `components/marketing-icon`,
    label: 'Marketing icon',
    source: 'pug'
  },
  {
    href: `components/mobile-navigation`,
    label: 'Mobile navigation',
    source: 'pug'
  },
  {
    href: `components/modal`,
    label: 'Modal',
    source: 'pug'
  },
  {
    href: `components/forms/number-input`,
    label: 'Number input',
    source: 'pug'
  },
  {
    href: `components/pagination`,
    label: 'Pagination',
    source: 'pug'
  },
  {
    href: `components/phone-input`,
    label: 'Phone Input',
    source: 'pug'
  },
  {
    href: `components/picker`,
    label: 'Picker',
    source: 'pug'
  },
  {
    href: `components/picker-group`,
    label: 'Picker group',
    source: 'pug'
  },
  {
    href: `components/popover`,
    label: 'Popover',
    source: 'pug'
  },
  {
    to: `components/price`,
    label: 'Price',
    source: 'vue'
  },
  {
    href: `components/progress`,
    label: 'Progress',
    source: 'pug'
  },
  {
    href: `components/forms/radio-button`,
    label: 'Radio button',
    source: 'pug'
  },
  {
    href: `components/forms/range-slider`,
    label: 'Range slider',
    source: 'pug'
  },
  {
    href: `components/forms/search-input`,
    label: 'Search input',
    source: 'pug'
  },
  {
    href: `components/forms/select`,
    label: 'Select',
    source: 'pug'
  },
  {
    href: `components/sidenav`,
    label: 'Sidenav',
    source: 'pug'
  },
  {
    href: `components/skeleton`,
    label: 'Skeleton',
    source: 'pug'
  },
  {
    href: `components/spinner`,
    label: 'Spinner',
    source: 'pug'
  },
  {
    href: `components/stat`,
    label: 'Stat',
    source: 'pug'
  },
  {
    href: `components/steps`,
    label: 'Steps',
    source: 'pug'
  },
  {
    href: `components/table`,
    label: 'Table',
    source: 'pug'
  },
  {
    href: `components/tabs`,
    label: 'Tabs',
    source: 'pug'
  },
  {
    href: `components/forms/text-input`,
    label: 'Text input',
    source: 'pug'
  },
  {
    href: `components/forms/textarea`,
    label: 'Textarea',
    source: 'pug'
  },
  {
    href: `components/time-picker`,
    label: 'Time picker',
    source: 'pug'
  },
  {
    href: `components/forms/toggle-switch`,
    label: 'Toggle switch',
    source: 'pug'
  },
  {
    href: `components/toolbar`,
    label: 'Toolbar',
    source: 'pug'
  },
  {
    href: `components/tooltip`,
    label: 'Tooltip',
    source: 'pug'
  }
];

export const CHI_VISIBLE_VERSION = [
  '5.35.0',
  '5.34.0',
  '5.33.0',
  '5.32.0',
  '5.31.0',
  '5.30.0',
  '5.29.0',
  '5.28.0',
  '5.27.0',
  '5.26.0',
  '5.25.0',
  '5.24.0',
  '5.23.0',
  '5.22.0',
  '5.21.0',
  '5.20.1',
  '5.20.0',
  '5.19.0',
  '5.18.0',
  '5.17.0',
  '5.16.0',
  '5.15.0',
  '5.14.1',
  '5.14.0',
  '5.13.1',
  '5.13.0',
  '5.12.0',
  '5.11.0',
  '5.9.1',
  '5.9.0',
  '5.8.0',
  '5.7.0',
  '5.6.0',
  '5.5.0',
  '5.4.0',
  '5.3.1',
  '5.3.0',
  '5.2.0',
  '5.1.0',
  '5.0.0',
  '4.4.0',
  '4.3.0',
  '4.2.0',
  '4.1.2',
  '4.1.1',
  '4.1.0',
  '4.0.0',
  '3.17.0',
  '3.16.0',
  '3.15.0',
  '3.14.0',
  '3.13.0',
  '3.12.0',
  '3.11.0',
  '3.10.0',
  '3.9.0',
  '3.8.0',
  '3.7.0',
  '3.6.0',
  '3.5.0',
  '3.4.0',
  '3.3.0',
  '3.2.0',
  '3.1.1',
  '3.1.0',
  '3.0.0',
  '2.6.0',
  '2.5.1',
  '2.5.0',
  '2.4.1',
  '2.4.0',
  '2.3.0',
  '2.2.0',
  '2.1.0',
  '2.0.0'
];
