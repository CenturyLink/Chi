import { CHI_VERSION, DEFAULT_THEME } from './configs';

export const TEMP_DEVELOPMENT_FALLBACK_URL = `https://assets.ctl.io/chi/5.37.0`;
export const DOCS_URL = `${TEMP_DEVELOPMENT_FALLBACK_URL}/js/ce/docs.json`;
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
  '5.37.0',
  '5.36.0',
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

export const SIZES: string[] = ['sm', 'md', 'lg', 'xl'];

export const COLORS = {
  SUCCESS: {
    name: 'success',
    value: '#007E44'
  },
  SUCCESS_LIGHT: {
    name: 'success-light',
    value: '#DBFAEE'
  },
  SUCCESS_LIGHTER: {
    name: 'success-lighter',
    value: '#F1FEF8'
  },
  INFO: {
    name: 'info',
    value: '#0075C9'
  },
  INFO_LIGHT: {
    name: 'info-light',
    value: '#F5F9FC'
  },
  INFO_LIGHTER: {
    name: 'info-lighter',
    value: '#E0F3FF'
  },
  WARNING: {
    name: 'warning',
    value: '#A15C00'
  },
  WARNING_LIGHT: {
    name: 'warning-light',
    value: '#FAECD9'
  },
  WARNING_LIGHTER: {
    name: 'warning-lighter',
    value: '#FFF8ED'
  },
  DANGER: {
    name: 'danger',
    value: '#D62015'
  },
  DANGER_LIGHT: {
    name: 'danger-light',
    value: '#FFE8E5'
  },
  DANGER_LIGHTER: {
    name: 'danger-lighter',
    value: '#FFF5F5'
  },
  MUTED: {
    name: 'muted',
    value: '#53565A'
  },
  MUTED_LIGHT: {
    name: 'muted-light',
    value: '#EDF0F2'
  },
  MUTED_LIGHTER: {
    name: 'muted-lighter',
    value: '#F8F9F9'
  },
  BG_NONE: {
    name: '-bg--none',
    value: 'none'
  },
  GREY_15: {
    name: 'grey-15',
    value: '#F4F5F6'
  },
  GREY_20: {
    name: 'grey-20',
    value: '#EDF0F2'
  },
  GREY_25: {
    name: 'grey-25',
    value: '#DADEE2'
  },
  GREY_30: {
    name: 'grey-30',
    value: '#D0D4D9'
  },
  NAVY: {
    name: 'navy',
    value: '#083176'
  },
  GREY: {
    name: 'grey',
    value: '#3F4145'
  },
  BLACK: {
    name: 'black',
    value: '#000000'
  },
  WHITE: {
    name: 'white',
    value: '#FFFFFF'
  },
  PRIMARY: {
    name: 'primary',
    value: '#0075C9'
  },
  PRIMARY_CENTURYLINK: {
    name: 'primary',
    value: '#0047BB'
  },
  SECONDARY: {
    name: 'secondary',
    value: '#38C6F4'
  },
  SECONDARY_CENTURYLINK: {
    name: 'primary',
    value: '#48D597'
  },
  CYAN_50: {
    name: 'cyan-50',
    value: '#0C9ED9'
  },
  GRAY_100: {
    name: 'gray-100',
    value: '#242526'
  },
  GRAY_90: {
    name: 'gray-90',
    value: '#313336'
  },
  GRAY_90_BRIGHTSPEED: {
    name: 'gray-90-brightspeed',
    value: '#191919'
  },
  GRAY_80: {
    name: 'gray-80',
    value: '#333333'
  },
  GRAY_70: {
    name: 'gray-70',
    value: '#4C4C4C'
  },
  GRAY_60: {
    name: 'gray-60',
    value: '#65686C'
  },
  GRAY_60_BRIGHTSPEED: {
    name: 'gray-60-brightspeed',
    value: '#666666'
  },
  GRAY_50: {
    name: 'gray-50',
    value: '#8E9399'
  },
  GRAY_50_BRIGHTSPEED: {
    name: 'gray-50-brightspeed',
    value: '#7F7F7F'
  },
  GRAY_40: {
    name: 'gray-40',
    value: '#ACB0B5'
  },
  GRAY_40_BRIGHTSPEED: {
    name: 'gray-40-brightspeed',
    value: '#999999'
  },
  GRAY_30: {
    name: 'gray-30',
    value: '#B2B2B2'
  },
  GRAY_25: {
    name: 'gray-25',
    value: '#DDDEDF'
  },
  GRAY_20: {
    name: 'gray-20',
    value: '#E6E7E8'
  },
  GRAY_15: {
    name: 'gray-15',
    value: '#F0F1F1'
  },
  GRAY_10: {
    name: 'gray-10',
    value: '#F2F2F2'
  },
  GREEN_60: {
    name: 'green-60',
    value: '#009054'
  },
  GREEN_60_CENTURYLINK: {
    name: 'green-60-centurylink',
    value: '#008000'
  },
  GREEN_35: {
    name: 'green-35',
    value: '#6FD16F'
  },
  GREEN_30: {
    name: 'green-30',
    value: '#95E9C9'
  },
  GREEN_30_CENTURYLINK: {
    name: 'green-30-centurylink',
    value: '#A7DBA7'
  },
  GREEN_20: {
    name: 'green-20',
    value: '#CEF2CE'
  },
  GREEN_50: {
    name: 'green-50',
    value: '#189E18'
  },
  BLUE_75: {
    name: 'blue-75',
    value: '#0262B9'
  },
  BLUE_60: {
    name: 'blue-60',
    value: '#0080DC'
  },
  BLUE_60_CENTURYLINK: {
    name: 'blue-60-centurylink',
    value: '#0060FA'
  },
  BLUE_50_CENTURYLINK: {
    name: 'blue-50-centurylink',
    value: '#468AF1'
  },
  BLUE_30: {
    name: 'blue-30',
    value: '#AEDEFF'
  },
  BLUE_30_CENTURYLINK: {
    name: 'blue-30-centurylink',
    value: '#C0D7FA'
  },
  BLUE_20: {
    name: 'blue-20',
    value: '#E6F0FF'
  },
  RED_70: {
    name: 'red-70',
    value: '#A01903'
  },
  RED_60_BRIGHTSPEED: {
    name: 'red-60-brightspeed',
    value: '#D52C10'
  },
  RED_60_CENTURYLINK: {
    name: 'red-60-centurylink',
    value: '#D81820'
  },
  RED_60: {
    name: 'red-60',
    value: '#EE3026'
  },
  RED_50: {
    name: 'red-50',
    value: '#FA4628'
  },
  RED_50_CENTURYLINK: {
    name: 'red-50-centurylink',
    value: '#FA5056'
  },
  RED_30: {
    name: 'red-30',
    value: '#FFC2BD'
  },
  RED_30_CENTURYLINK: {
    name: 'red-30-centurylink',
    value: '#FCC7C9'
  },
  RED_30_BRIGHTSPEED: {
    name: 'red-30-brightspeed',
    value: '#FCA293'
  },
  RED_20: {
    name: 'red-20',
    value: '#FBDFDB'
  },
  RED_20_CENTURYLINK: {
    name: 'red-20-centurylink',
    value: '#FCE8E9'
  },
  YELLOW_60: {
    name: 'yellow-60',
    value: '#B96B00'
  },
  YELLOW_60_CENTURYLINK: {
    name: 'yellow-60-centurylink',
    value: '#946300'
  },
  YELLOW_60_BRIGHTSPEED: {
    name: 'yellow-60-brightspeed',
    value: '#AD7600'
  },
  YELLOW_50: {
    name: 'yellow-50',
    value: '#D19110'
  },
  YELLOW_40: {
    name: 'yellow-40',
    value: '#FFC800'
  },
  YELLOW_35: {
    name: 'yellow-35',
    value: '#F9F162'
  },
  YELLOW_30: {
    name: 'yellow-30',
    value: '#FFCC89'
  },
  YELLOW_30_CENTURYLINK: {
    name: 'yellow-30-centurylink',
    value: '#F6ED79'
  },
  YELLOW_30_BRIGHTSPEED: {
    name: 'yellow-30-brightspeed',
    value: '#FFE37F'
  },
  YELLOW_20: {
    name: 'yellow-20',
    value: '#FFF1BF'
  },
  YELLOW_20_CENTURYLINK: {
    name: 'yellow-20-centurylink',
    value: '#F9F5BE'
  },
  TEAL_BLUE_40: {
    name: 'teal-blue-40',
    value: '#02BCB2'
  },
  ORANGE_40: {
    name: 'orange-40',
    value: '#FA783C'
  },

};
