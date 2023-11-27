import { CHI_VERSION, DEFAULT_THEME } from './configs';

export const TEMP_DEVELOPMENT_FALLBACK_URL = `https://assets.ctl.io/chi/5.42.0`;

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

export const DOCS_URL = `${BASE_URL}js/ce/docs.json`;

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
    to: `components/avatar`,
    label: 'Avatar',
    source: 'vue'
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
    to: `components/button-group`,
    label: 'Button group',
    source: 'vue'
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
    to: `components/flag-icon`,
    label: 'Flag icon',
    source: 'vue'
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
    to: `components/skeleton`,
    label: 'Skeleton',
    source: 'vue'
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
    to: `components/table`,
    label: 'Table',
    source: 'vue'
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
export const NAVIGATION_TEMPLATE_ITEMS = [
  {
    href: `templates/app-layout`,
    label: 'App Layout',
    source: 'pug'
  },
  { href: `templates/card`, label: 'Card', source: 'pug' },
  { to: `templates/error-404`, label: 'Error 404', source: 'vue' },
  { to: `templates/error-500`, label: 'Error 500', source: 'vue' },
  { to: `templates/state`, label: 'State', source: 'vue' }
];

export const CHI_VISIBLE_VERSION = [
  '5.42.0',
  '5.41.0',
  '5.40.0',
  '5.39.0',
  '5.38.0',
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
  SUCCESS_LIGHTER_CENTURYLINK: {
    name: 'success-lighter',
    value: '#E6FAE6'
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
  INFO_CENTURYLINK: {
    name: 'info',
    value: '#2580FF'
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
  WARNING_LIGHTER_CENTURYLINK: {
    name: 'warning-lighter',
    value: '#FDFBD8'
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
  NAVY_90: {
    name: 'navy-90',
    value: '#08379B'
  },
  NAVY_70: {
    name: 'navy-70',
    value: '#0A60F0'
  },
  NAVY_60: {
    name: 'navy-60',
    value: '#2072F8'
  },
  NAVY_50: {
    name: 'navy-50',
    value: '#6099F1'
  },
  NAVY_40: {
    name: 'navy-40',
    value: '#88B6F9'
  },
  NAVY_20: {
    name: 'navy-20',
    value: '#E6F0FF'
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
  PRIMARY_LIGHTER: {
    name: 'primary-lighter',
    value: '#F5F8FC'
  },
  PRIMARY_DARK: {
    name: 'primary-dark',
    value: '#00308A'
  },
  PRIMARY_DARKER: {
    name: 'primary-darker',
    value: '#001E60'
  },
  PRIMARY_CENTURYLINK: {
    name: 'primary',
    value: '#0047BB'
  },
  SECONDARY: {
    name: 'secondary',
    value: '#38C6F4'
  },
  SECONDARY_LIGHT: {
    name: 'secondary-light',
    value: '#EAF7FB'
  },
  SECONDARY_LIGHT_CENTURYLINK: {
    name: 'secondary-light',
    value: '#EDFAF3'
  },
  SECONDARY_CENTURYLINK: {
    name: 'primary',
    value: '#48D597'
  },
  SECONDARY_CENTURYLINK_DARK: {
    name: 'secondary-dark',
    value: '#22A066'
  },
  SECONDARY_CENTURYLINK_DARKER: {
    name: 'secondary-darker',
    value: '#007E46'
  },
  WARNING_CENTURYLINK: {
    name: 'warning',
    value: '#BB7907'
  },
  GRAY_100: {
    name: 'gray-100',
    value: '#242526'
  },
  GRAY_90: {
    name: 'gray-90',
    value: '#313336'
  },
  GRAY_60: {
    name: 'gray-60',
    value: '#65686C'
  },
  GRAY_50: {
    name: 'gray-50',
    value: '#8E9399'
  },
  GRAY_40: {
    name: 'gray-40',
    value: '#ACB0B5'
  },
  BLUE_100: {
    name: 'blue-100',
    value: '#002D54'
  },
  BLUE_90: {
    name: 'blue-90',
    value: '#004078'
  },
  BLUE_80: {
    name: 'blue-80',
    value: '#00529A'
  },
  BLUE_75: {
    name: 'blue-75',
    value: '#0262B9'
  },
  BLUE_60: {
    name: 'blue-60',
    value: '#0080DC'
  },
  BLUE_50: {
    name: 'blue-50',
    value: '#38ABFF'
  },
  BLUE_40: {
    name: 'blue-40',
    value: '#70C3FF'
  },
  BLUE_30: {
    name: 'blue-30',
    value: '#AEDEFF'
  },
  RED_100: {
    name: 'red-100',
    value: '#600D08'
  },
  RED_80: {
    name: 'red-80',
    value: '#A21810'
  },
  RED_60: {
    name: 'red-60',
    value: '#EE3026'
  },
  RED_50_LUMEN: {
    name: 'red-50',
    value: '#FF645C'
  },
  RED_40: {
    name: 'red-40',
    value: '#FF9086'
  },
  RED_30: {
    name: 'red-30',
    value: '#FFC2BD'
  },
  YELLOW_60_BRIGHTSPEED: {
    name: 'yellow-60-brightspeed',
    value: '#AD7600'
  },
  TEAL_BLUE_40: {
    name: 'teal-blue-40',
    value: '#02BCB2'
  },
  ORANGE_40: {
    name: 'orange-40',
    value: '#FA783C'
  },
  PINK_100: {
    name: 'pink-100',
    value: '#451726'
  },
  PINK_90: {
    name: 'pink-90',
    value: '#661430'
  },
  PINK_80: {
    name: 'pink-80',
    value: '#8C0E38'
  },
  PINK_0: {
    name: 'pink-0',
    value: '#'
  },
  PINK_70: {
    name: 'pink-70',
    value: '#B30C44'
  },
  PINK_60: {
    name: 'pink-60',
    value: '#DB1A5B'
  },
  PINK_50: {
    name: 'pink-50',
    value: '#F74F87'
  },
  PINK_40: {
    name: 'pink-40',
    value: '#FA8EB2'
  },
  PINK_30: {
    name: 'pink-30',
    value: '#FCC7D9'
  },
  PINK_20: {
    name: 'pink-20',
    value: '#FCE8EF'
  },
  PINK_10: {
    name: 'pink-10',
    value: '#FCF5F7'
  },
  PURPLE_100: {
    name: 'purple-100',
    value: '#371C52'
  },
  PURPLE_90: {
    name: 'purple-90',
    value: '#4D2378'
  },
  PURPLE_80: {
    name: 'purple-80',
    value: '#642B9E'
  },
  PURPLE_70: {
    name: 'purple-70',
    value: '#7E40BD'
  },
  PURPLE_60: {
    name: 'purple-60',
    value: '#9557D4'
  },
  PURPLE_50: {
    name: 'purple-50',
    value: '#B277ED'
  },
  PURPLE_40: {
    name: 'purple-40',
    value: '#CDA3F7'
  },
  PURPLE_30: {
    name: 'purple-30',
    value: '#E2CDF7'
  },
  PURPLE_20: {
    name: 'purple-20',
    value: '#F2EBFA'
  },
  PURPLE_10: {
    name: 'purple-10',
    value: '#FAF7FC'
  },
  INDIGO_100: {
    name: 'indigo-100',
    value: '#1E1E57'
  },
  INDIGO_90: {
    name: 'indigo-90',
    value: '#29298C'
  },
  INDIGO_80: {
    name: 'indigo-80',
    value: '#3434AC'
  },
  INDIGO_70: {
    name: 'indigo-70',
    value: '#4646DA'
  },
  INDIGO_60: {
    name: 'indigo-60',
    value: '#5959E0'
  },
  INDIGO_50: {
    name: 'indigo-50',
    value: '#8484FA'
  },
  INDIGO_40: {
    name: 'indigo-40',
    value: '#A8A8FF'
  },
  INDIGO_30: {
    name: 'indigo-30',
    value: '#CFCFFF'
  },
  INDIGO_20: {
    name: 'indigo-20',
    value: '#EDEDFF'
  },
  INDIGO_10: {
    name: 'indigo-10',
    value: '#F7F7FF'
  },
  CYAN_100: {
    name: 'cyan-100',
    value: '#002E4D'
  },
  CYAN_90: {
    name: 'cyan-90',
    value: '#004368'
  },
  CYAN_80: {
    name: 'cyan-80',
    value: '#00557E'
  },
  CYAN_70: {
    name: 'cyan-70',
    value: '#0073A5'
  },
  CYAN_60: {
    name: 'cyan-60',
    value: '#0986B6'
  },
  CYAN_50: {
    name: 'cyan-50',
    value: '#0C9ED9'
  },
  CYAN_40: {
    name: 'cyan-40',
    value: '#38C6F4'
  },
  CYAN_30: {
    name: 'cyan-30',
    value: '#A3E5FA'
  },
  CYAN_20: {
    name: 'cyan-20',
    value: '#DDF5FD'
  },
  CYAN_15: {
    name: 'cyan-15',
    value: '#EAF7FB'
  },
  CYAN_10: {
    name: 'cyan-10',
    value: '#F1FBFE'
  },
  TEAL_100: {
    name: 'teal-100',
    value: '#093134'
  },
  TEAL_90: {
    name: 'teal-90',
    value: '#07454B'
  },
  TEAL_80: {
    name: 'teal-80',
    value: '#08575E'
  },
  TEAL_70: {
    name: 'teal-70',
    value: '#027786'
  },
  TEAL_60: {
    name: 'teal-60',
    value: '#038B98'
  },
  TEAL_50: {
    name: 'teal-50',
    value: '#0DC7D8'
  },
  TEAL_40: {
    name: 'teal-40',
    value: '#4ED8E4'
  },
  TEAL_30: {
    name: 'teal-30',
    value: '#9DE9F0'
  },
  TEAL_20: {
    name: 'teal-20',
    value: '#DCF7FA'
  },
  TEAL_10: {
    name: 'teal-10',
    value: '#F2FCFD'
  },
  GREEN_100: {
    name: 'green-100',
    value: '#03381E'
  },
  GREEN_90: {
    name: 'green-90',
    value: '#044D28'
  },
  GREEN_80: {
    name: 'green-80',
    value: '#056234'
  },
  GREEN_70: {
    name: 'green-70',
    value: '#007E44'
  },
  GREEN_60: {
    name: 'green-60',
    value: '#009054'
  },
  GREEN_50_LUMEN: {
    name: 'green-50',
    value: '#26D98F'
  },
  GREEN_40: {
    name: 'green-40',
    value: '#76EAB8'
  },
  GREEN_30: {
    name: 'green-30',
    value: '#95E9C9'
  },
  GREEN_20_LUMEN: {
    name: 'green-20',
    value: '#DBFAEE'
  },
  GREEN_10: {
    name: 'green-10',
    value: '#F1FEF8'
  },
  YELLOW_100: {
    name: 'yellow-100',
    value: '#093134'
  },
  YELLOW_90: {
    name: 'yellow-90',
    value: '#4E2E00'
  },
  YELLOW_80: {
    name: 'yellow-80',
    value: '#864D00'
  },
  YELLOW_70: {
    name: 'yellow-70',
    value: '#A15C00'
  },
  YELLOW_50_LUMEN: {
    name: 'yellow-50',
    value: '#E58500'
  },
  YELLOW_40_LUMEN: {
    name: 'yellow-40',
    value: '#FF9E18'
  },
  YELLOW_30: {
    name: 'yellow-30',
    value: '#FFCC89'
  },
  YELLOW_20_LUMEN: {
    name: 'yellow-20',
    value: '#FAECD9'
  },
  YELLOW_10: {
    name: 'yellow-10',
    value: '#FFF8ED'
  },
  ORANGE_100: {
    name: 'orange-100',
    value: '#093134'
  },
  ORANGE_90: {
    name: 'orange-90',
    value: '#07454B'
  },
  ORANGE_80: {
    name: 'orange-80',
    value: '#08575E'
  },
  ORANGE_70: {
    name: 'orange-70',
    value: '#027786'
  },
  ORANGE_60: {
    name: 'orange-60',
    value: '#038B98'
  },
  ORANGE_50: {
    name: 'orange-50',
    value: '#0DC7D8'
  },
  ORANGE_40_LUMEN: {
    name: 'orange-40',
    value: '#4ED8E4'
  },
  ORANGE_30: {
    name: 'orange-30',
    value: '#9DE9F0'
  },
  ORANGE_20: {
    name: 'orange-20',
    value: '#DCF7FA'
  },
  ORANGE_10: {
    name: 'orange-10',
    value: '#F2FCFD'
  },
  RED_CENTURYLINK_100: {
    name: 'red-100',
    value: '#471819'
  },
  RED_CENTURYLINK_90: {
    name: 'red-90',
    value: '#691518'
  },
  RED_CENTURYLINK_80: {
    name: 'red-80',
    value: '#8F0E13'
  },
  RED_CENTURYLINK_70: {
    name: 'red-70',
    value: '#B50D12'
  },
  RED_CENTURYLINK_60: {
    name: 'red-60',
    value: '#D81820'
  },
  RED_CENTURYLINK_50: {
    name: 'red-50',
    value: '#FA5056'
  },
  RED_CENTURYLINK_40: {
    name: 'red-40',
    value: '#FC9094'
  },
  RED_CENTURYLINK_30: {
    name: 'red-30',
    value: '#FCC7C9'
  },
  RED_CENTURYLINK_20: {
    name: 'red-20',
    value: '#FCE8E9'
  },
  RED_CENTURYLINK_10: {
    name: 'red-10',
    value: '#FFF5F5'
  },
  INDIGO_CENTURYLINK_100: {
    name: 'indigo-100',
    value: '#222261'
  },
  INDIGO_CENTURYLINK_90: {
    name: 'indigo-90',
    value: '#2B2B94'
  },
  INDIGO_CENTURYLINK_80: {
    name: 'indigo-80',
    value: '#3939BD'
  },
  INDIGO_CENTURYLINK_70: {
    name: 'indigo-70',
    value: '#4F4FDB'
  },
  INDIGO_CENTURYLINK_60: {
    name: 'indigo-60',
    value: '#6666E3'
  },
  INDIGO_CENTURYLINK_50: {
    name: 'indigo-50',
    value: '#8787FA'
  },
  INDIGO_CENTURYLINK_40: {
    name: 'indigo-40',
    value: '#ADADFF'
  },
  INDIGO_CENTURYLINK_30: {
    name: 'indigo-30',
    value: '#D1D1FF'
  },
  INDIGO_CENTURYLINK_20: {
    name: 'indigo-20',
    value: '#EDEDFF'
  },
  INDIGO_CENTURYLINK_10: {
    name: 'indigo-10',
    value: '#F7F7FF'
  },
  BLUE_CENTURYLINK_100: {
    name: 'blue-100',
    value: '#001238'
  },
  BLUE_CENTURYLINK_90: {
    name: 'blue-90',
    value: '#001E60'
  },
  BLUE_CENTURYLINK_80: {
    name: 'blue-80',
    value: '#00308A'
  },
  BLUE_CENTURYLINK_70: {
    name: 'blue-70',
    value: '#0047BB'
  },
  BLUE_CENTURYLINK_60: {
    name: 'blue-60',
    value: '#0060FA'
  },
  BLUE_CENTURYLINK_50: {
    name: 'blue-50',
    value: '#468AF1'
  },
  BLUE_CENTURYLINK_40: {
    name: 'blue-40',
    value: '#8CB6F5'
  },
  BLUE_CENTURYLINK_30: {
    name: 'blue-30',
    value: '#C0D7FA'
  },
  BLUE_CENTURYLINK_20: {
    name: 'blue-20',
    value: '#E6F0FF'
  },
  BLUE_CENTURYLINK_10: {
    name: 'blue-10',
    value: '#F5F8FC'
  },
  TEAL_CENTURYLINK_100: {
    name: 'teal-100',
    value: '#082B2E'
  },
  TEAL_CENTURYLINK_90: {
    name: 'teal-90',
    value: '#063B40'
  },
  TEAL_CENTURYLINK_80: {
    name: 'teal-80',
    value: '#074C52'
  },
  TEAL_CENTURYLINK_70: {
    name: 'teal-70',
    value: '#026169'
  },
  TEAL_CENTURYLINK_60: {
    name: 'teal-60',
    value: '#03808C'
  },
  TEAL_CENTURYLINK_55: {
    name: 'teal-55',
    value: '#008996'
  },
  TEAL_CENTURYLINK_50: {
    name: 'teal-50',
    value: '#0A96A3'
  },
  TEAL_CENTURYLINK_40: {
    name: 'teal-40',
    value: '#1EB9C7'
  },
  TEAL_CENTURYLINK_30: {
    name: 'teal-30',
    value: '#ABDCE0'
  },
  TEAL_CENTURYLINK_20: {
    name: 'teal-20',
    value: '#D7F2F5'
  },
  TEAL_CENTURYLINK_10: {
    name: 'teal-10',
    value: '#EDF9FA'
  },
  CYAN_CENTURYLINK_100: {
    name: 'cyan-100',
    value: '#0C2B3B'
  },
  CYAN_CENTURYLINK_90: {
    name: 'cyan-90',
    value: '#093D57'
  },
  CYAN_CENTURYLINK_80: {
    name: 'cyan-80',
    value: '#064E73'
  },
  CYAN_CENTURYLINK_70: {
    name: 'cyan-70',
    value: '#066594'
  },
  CYAN_CENTURYLINK_60: {
    name: 'cyan-60',
    value: '#0080BB'
  },
  CYAN_CENTURYLINK_50: {
    name: 'cyan-50',
    value: '#239CD9'
  },
  CYAN_CENTURYLINK_40: {
    name: 'cyan-40',
    value: '#53BFF5'
  },
  CYAN_CENTURYLINK_30: {
    name: 'cyan-30',
    value: '#B0DEF5'
  },
  CYAN_CENTURYLINK_20: {
    name: 'cyan-20',
    value: '#E1F2FA'
  },
  CYAN_CENTURYLINK_10: {
    name: 'cyan-10',
    value: '#F2F9FC'
  },
  MINT_100: {
    name: 'mint-100',
    value: '#0A2E1E'
  },
  MINT_90: {
    name: 'mint-90',
    value: '#094028'
  },
  MINT_80: {
    name: 'mint-80',
    value: '#075433'
  },
  MINT_70: {
    name: 'mint-70',
    value: '#08683F'
  },
  MINT_60: {
    name: 'mint-60',
    value: '#007E46'
  },
  MINT_55: {
    name: 'mint-55',
    value: '#009E5C'
  },
  MINT_50: {
    name: 'mint-50',
    value: '#22A066'
  },
  MINT_40: {
    name: 'mint-40',
    value: '#48D597'
  },
  MINT_30: {
    name: 'mint-30',
    value: '#ABE0C9'
  },
  MINT_20: {
    name: 'mint-20',
    value: '#DAF5E9'
  },
  MINT_10: {
    name: 'mint-10',
    value: '#EDFAF3'
  },
  GREEN_CENTURYLINK_100: {
    name: 'green-100',
    value: '#0A2B0A'
  },
  GREEN_CENTURYLINK_90: {
    name: 'green-90',
    value: '#093D09'
  },
  GREEN_CENTURYLINK_80: {
    name: 'green-80',
    value: '#0B4F0B'
  },
  GREEN_CENTURYLINK_70: {
    name: 'green-70',
    value: '#056605'
  },
  GREEN_CENTURYLINK_60: {
    name: 'green-60',
    value: '#008000'
  },
  GREEN_CENTURYLINK_50: {
    name: 'green-50',
    value: '#189E18'
  },
  GREEN_CENTURYLINK_40: {
    name: 'green-40',
    value: '#3FC63F'
  },
  GREEN_CENTURYLINK_35: {
    name: 'green-35',
    value: '#6FD16F'
  },
  GREEN_CENTURYLINK_30: {
    name: 'green-30',
    value: '#A7DBA7'
  },
  GREEN_CENTURYLINK_20: {
    name: 'green-20',
    value: '#CEF2CE'
  },
  GREEN_CENTURYLINK_10: {
    name: 'green-10',
    value: '#E6FAE6'
  },
  YELLOW_CENTURYLINK_100: {
    name: 'yellow-100',
    value: '#3D2900'
  },
  YELLOW_CENTURYLINK_90: {
    name: 'yellow-90',
    value: '#523600'
  },
  YELLOW_CENTURYLINK_80: {
    name: 'yellow-80',
    value: '#664400'
  },
  YELLOW_CENTURYLINK_70: {
    name: 'yellow-70',
    value: '#855800'
  },
  YELLOW_CENTURYLINK_60: {
    name: 'yellow-60',
    value: '#946300'
  },
  YELLOW_CENTURYLINK_55: {
    name: 'yellow-55',
    value: '#BB7907'
  },
  YELLOW_CENTURYLINK_50: {
    name: 'yellow-50',
    value: '#D19110'
  },
  YELLOW_CENTURYLINK_40: {
    name: 'yellow-40',
    value: '#EBCE3E'
  },
  YELLOW_CENTURYLINK_35: {
    name: 'yellow-35',
    value: '#F9F162'
  },
  YELLOW_CENTURYLINK_30: {
    name: 'yellow-30',
    value: '#F6ED79'
  },
  YELLOW_CENTURYLINK_20: {
    name: 'yellow-20',
    value: '#F9F5BE'
  },
  YELLOW_CENTURYLINK_10: {
    name: 'yellow-10',
    value: '#FDFBD8'
  },
  ORANGE_CENTURYLINK_100: {
    name: 'orange-100',
    value: '#5B2600'
  },
  ORANGE_CENTURYLINK_90: {
    name: 'orange-90',
    value: '#723204'
  },
  ORANGE_CENTURYLINK_80: {
    name: 'orange-80',
    value: '#974308'
  },
  ORANGE_CENTURYLINK_70: {
    name: 'orange-70',
    value: '#B35009'
  },
  ORANGE_CENTURYLINK_60: {
    name: 'orange-60',
    value: '#C96010'
  },
  ORANGE_CENTURYLINK_50: {
    name: 'orange-50',
    value: '#E77528'
  },
  ORANGE_CENTURYLINK_40: {
    name: 'orange-40',
    value: '#F79950'
  },
  ORANGE_CENTURYLINK_30: {
    name: 'orange-30',
    value: '#FACAA8'
  },
  ORANGE_CENTURYLINK_20: {
    name: 'orange-20',
    value: '#FDE7D8'
  },
  ORANGE_CENTURYLINK_10: {
    name: 'orange-10',
    value: '#FEF6F0'
  },
  GREY_BRIGHTSPEED_100: {
    name: 'grey-100',
    value: '#000000'
  },
  GREY_BRIGHTSPEED_90: {
    name: 'grey-90',
    value: '#191919'
  },
  GREY_BRIGHTSPEED_80: {
    name: 'grey-80',
    value: '#333333'
  },
  GREY_BRIGHTSPEED_70: {
    name: 'grey-70',
    value: '#4C4C4C'
  },
  GREY_BRIGHTSPEED_60: {
    name: 'grey-60',
    value: '#666666'
  },
  GREY_BRIGHTSPEED_50: {
    name: 'grey-50',
    value: '#7F7F7F'
  },
  GREY_BRIGHTSPEED_40: {
    name: 'grey-40',
    value: '#999999'
  },
  GREY_BRIGHTSPEED_30: {
    name: 'grey-30',
    value: '#B2B2B2'
  },
  GREY_BRIGHTSPEED_25: {
    name: 'grey-25',
    value: '#DDDEDF'
  },
  GREY_BRIGHTSPEED_20: {
    name: 'grey-20',
    value: '#E6E7E8'
  },
  GREY_BRIGHTSPEED_15: {
    name: 'grey-15',
    value: '#F0F1F1'
  },
  GREY_BRIGHTSPEED_10: {
    name: 'grey-10',
    value: '#F2F2F2'
  },
  RED_BRIGHTSPEED_100: {
    name: 'red-100',
    value: '#290600'
  },
  RED_BRIGHTSPEED_90: {
    name: 'red-90',
    value: '#80130C'
  },
  RED_BRIGHTSPEED_80: {
    name: 'red-80',
    value: '#701505'
  },
  RED_BRIGHTSPEED_70: {
    name: 'red-70',
    value: '#A01903'
  },
  RED_BRIGHTSPEED_60: {
    name: 'red-60',
    value: '#D52C10'
  },
  RED_BRIGHTSPEED_50: {
    name: 'red-50',
    value: '#FA4628'
  },
  RED_BRIGHTSPEED_40: {
    name: 'red-40',
    value: '#FB755E'
  },
  RED_BRIGHTSPEED_30: {
    name: 'red-30',
    value: '#FCA293'
  },
  RED_BRIGHTSPEED_20: {
    name: 'red-20',
    value: '#FBDFDB'
  },
  RED_BRIGHTSPEED_10: {
    name: 'red-10',
    value: '#FDEFED'
  },
  YELLOW_BRIGHTSPEED_100: {
    name: 'yellow-100',
    value: '#2E1B00'
  },
  YELLOW_BRIGHTSPEED_90: {
    name: 'yellow-90',
    value: '#522F00'
  },
  YELLOW_BRIGHTSPEED_80: {
    name: 'yellow-80',
    value: '#754300'
  },
  YELLOW_BRIGHTSPEED_70: {
    name: 'yellow-70',
    value: '#A15C00'
  },
  YELLOW_BRIGHTSPEED_60: {
    name: 'yellow-60',
    value: '#B96B00'
  },
  YELLOW_BRIGHTSPEED_50: {
    name: 'yellow-50',
    value: '#E6AD00'
  },
  YELLOW_BRIGHTSPEED_40: {
    name: 'yellow-40',
    value: '#FFC800'
  },
  YELLOW_BRIGHTSPEED_30: {
    name: 'yellow-30',
    value: '#FFE37F'
  },
  YELLOW_BRIGHTSPEED_20: {
    name: 'yellow-20',
    value: '#FFF1BF'
  },
  YELLOW_BRIGHTSPEED_10: {
    name: 'yellow-10',
    value: '#FFF8E0'
  },
  ORANGE_BRIGHTSPEED_100: {
    name: 'orange-100',
    value: '#240B00'
  },
  ORANGE_BRIGHTSPEED_90: {
    name: 'orange-90',
    value: '#421500'
  },
  ORANGE_BRIGHTSPEED_80: {
    name: 'orange-80',
    value: '#974308'
  },
  ORANGE_BRIGHTSPEED_70: {
    name: 'orange-70',
    value: '#922F02'
  },
  ORANGE_BRIGHTSPEED_60: {
    name: 'orange-60',
    value: '#C24005'
  },
  ORANGE_BRIGHTSPEED_50: {
    name: 'orange-50',
    value: '#F45106'
  },
  ORANGE_BRIGHTSPEED_40: {
    name: 'orange-40',
    value: '#FA783C'
  },
  ORANGE_BRIGHTSPEED_30: {
    name: 'orange-30',
    value: '#FB9A6D'
  },
  ORANGE_BRIGHTSPEED_20: {
    name: 'orange-20',
    value: '#FEE0D2'
  },
  ORANGE_BRIGHTSPEED_10: {
    name: 'orange-10',
    value: '#FEEEE6'
  }
};
