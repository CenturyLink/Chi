import { CHI_VERSION, DEFAULT_THEME } from './configs';

export const TEMP_DEVELOPMENT_FALLBACK_URL = `https://assets.ctl.io/chi/5.13.0`;
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
  }
};
export const defaultCss = THEMES[DEFAULT_THEME].css;
export const defaultDocsCss = THEMES[DEFAULT_THEME].docsCss;

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

export const baseUrlsForEnvs = {
  production: `/chi/${CHI_VERSION}/`, // assets.ctl.io, lib.lumen.io, staging
  development: '/', // Local
  pr: '/' // PR instances
};

export const NAVIGATION_BASE_URL =
  process.env.DOCS_ENV && process.env.DOCS_ENV === 'production'
    ? baseUrlsForEnvs.production
    : '/';

export const NAVIGATION_COMPONENTS_ITEMS = [
  {
    href: `${NAVIGATION_BASE_URL}components/accordion`,
    label: 'Accordion',
    source: 'pug'
  },
  { to: `/components/activity`, label: 'Activity', source: 'vue' },
  {
    href: `${NAVIGATION_BASE_URL}components/alert`,
    label: 'Alert',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/avatar`,
    label: 'Avatar',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/badge`,
    label: 'Badge',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/brand`,
    label: 'Brand',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/breadcrumb`,
    label: 'Breadcrumb',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/button`,
    label: 'Button',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/button-group`,
    label: 'Button group',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/card`,
    label: 'Card',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/carousel`,
    label: 'Carousel',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/forms/checkbox`,
    label: 'Checkbox',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/data-table`,
    label: 'Data table',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/date-picker`,
    label: 'Date picker',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/divider`,
    label: 'Divider',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/drawer`,
    label: 'Drawer',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/dropdown`,
    label: 'Dropdown',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/expansion-panel`,
    label: 'Expansion panel',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/forms/file-input`,
    label: 'File input',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/flag-icon`,
    label: 'Flag icon',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/footer`,
    label: 'Footer',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/header`,
    label: 'Header',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/icon`,
    label: 'Icon',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/label`,
    label: 'Label',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/marketing-icon`,
    label: 'Marketing icon',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/mobile-navigation`,
    label: 'Mobile navigation',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/modal`,
    label: 'Modal',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/forms/number-input`,
    label: 'Number input',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/pagination`,
    label: 'Pagination',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/phone-input`,
    label: 'Phone Input',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/picker`,
    label: 'Picker',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/picker-group`,
    label: 'Picker group',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/popover`,
    label: 'Popover',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/price`,
    label: 'Price',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/progress`,
    label: 'Progress',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/forms/radio-button`,
    label: 'Radio button',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/forms/range-slider`,
    label: 'Range slider',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/forms/search-input`,
    label: 'Search input',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/forms/select`,
    label: 'Select',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/sidenav`,
    label: 'Sidenav',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/skeleton`,
    label: 'Skeleton',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/spinner`,
    label: 'Spinner',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/stat`,
    label: 'Stat',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/steps`,
    label: 'Steps',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/table`,
    label: 'Table',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/tabs`,
    label: 'Tabs',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/forms/text-input`,
    label: 'Text input',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/forms/textarea`,
    label: 'Textarea',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/time-picker`,
    label: 'Time picker',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/forms/toggle-switch`,
    label: 'Toggle switch',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/toolbar`,
    label: 'Toolbar',
    source: 'pug'
  },
  {
    href: `${NAVIGATION_BASE_URL}components/tooltip`,
    label: 'Tooltip',
    source: 'pug'
  }
];

export const CHI_VISIBLE_VERSION = [
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
