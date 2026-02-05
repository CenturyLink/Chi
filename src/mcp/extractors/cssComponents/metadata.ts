/**
 * CSS Component Metadata
 *
 * Component descriptions and category mappings.
 */

export const COMPONENT_DESCRIPTIONS: Record<string, string> = {
  accordion: 'Accordions show and hide content sections. Web Component: <chi-accordion>',
  alert: 'Alerts provide contextual feedback messages. Web Component: <chi-alert>',
  avatars: 'Avatars represent users or entities',
  backdrop: 'Backdrops provide overlay backgrounds for modals and drawers. Web Component: <chi-backdrop>',
  badge: 'Badges display status, notifications, or counts. Web Component: <chi-badge>',
  brand: 'Brand elements display company logos and identity. Web Component: <chi-brand>',
  breadcrumb: 'Breadcrumbs show navigation hierarchy. Web Component: <chi-breadcrumb>',
  buttons: 'Buttons trigger actions and events. Web Component: <chi-button>',
  card: 'Cards contain content and actions. Web Component: <chi-card>',
  carousel: 'Carousels display rotating content. Web Component: <chi-carousel>',
  checkbox: 'Checkboxes allow multiple selections. Web Component: <chi-checkbox>',
  divider: 'Dividers separate content',
  drawer: 'Drawers slide in from screen edges. Web Component: <chi-drawer>',
  dropdown: 'Dropdowns display lists of options. Web Component: <chi-dropdown>',
  'expansion-panel': 'Expansion panels show expandable content sections. Web Component: <chi-expansion-panel>',
  grid: 'Flexbox grid system for layout',
  'css-grid':
    'CSS Grid layout system. NOTE: For gap spacing, prefer global utilities -g--X instead of component modifiers -gap--X',
  header: 'Headers contain top-level navigation and branding',
  footer: 'Footers contain bottom page information',
  icon: 'Icons are graphical symbols. Web Component: <chi-icon>',
  'input-text': 'Text inputs capture single-line text. Web Component: <chi-text-input>',
  'input-number': 'Number inputs capture numeric values. Web Component: <chi-number-input>',
  'input-file': 'File inputs allow file uploads',
  link: 'Links navigate to other pages or sections. Web Component: <chi-link>',
  modal: 'Modals display content in overlay windows. Web Component: <chi-modal>',
  navigation: 'Navigation components provide site navigation',
  pagination: 'Pagination divides content into pages. Web Component: <chi-pagination>',
  popover: 'Popovers display floating content. Web Component: <chi-popover>',
  progress: 'Progress indicators show task completion. Web Component: <chi-progress>',
  radio: 'Radio buttons allow single selection. Web Component: <chi-radio-button>',
  spinner: 'Spinners indicate loading state. Web Component: <chi-spinner>',
  stat: 'Stats display numeric data and metrics',
  steps: 'Steps show multi-step processes',
  tabs: 'Tabs organize content into panels. Web Component: <chi-tabs>',
  tags: 'Tags label and categorize items. Web Component: <chi-tags>',
  textarea: 'Textareas capture multi-line text. Web Component: <chi-textarea>',
  tooltip: 'Tooltips display helpful hints. Web Component: <chi-tooltip>',
  'toggle-switch': 'Toggle switches control binary states. Web Component: <chi-switch>',
  'data-table': 'Data tables display structured data',
  tables: 'Tables organize data in rows and columns',
  toolbar: 'Toolbars contain action buttons. Web Component: <chi-toolbar>',
  skeleton: 'Skeletons show loading placeholders. Web Component: <chi-skeleton>',
  price: 'Price components display pricing information. Web Component: <chi-price>',
  'phone-input': 'Phone inputs capture telephone numbers. Web Component: <chi-phone-input>',
  'time-picker': 'Time pickers select time values. Web Component: <chi-time-picker>',
  'date-picker': 'Date pickers select date values. Web Component: <chi-date-picker>',
  picker: 'Pickers select from options. Web Component: <chi-picker>',
  'range-slider': 'Range sliders select numeric ranges',
  'marketing-icon': 'Marketing icons are large illustrative icons. Web Component: <chi-marketing-icon>',
  'flag-icon': 'Flag icons represent countries',
  activity: 'Activity components show user activity feeds',
  sidebar: 'Sidebars contain secondary navigation',
  'mobile-navigation': 'Mobile navigation for small screens',
  'save-view': 'Save view components persist user preferences',
  'save-views': 'Save views manage multiple saved views',
  'bulk-actions': 'Bulk actions operate on multiple items',
  filters: 'Filters refine displayed data',
  'transfer-list': 'Transfer lists move items between collections',
  'drag-and-drop': 'Drag and drop enables item reordering. Web Component: <chi-drag>',
  'cache-loader': 'Cache loaders manage loading states. Web Component: <chi-cache-loader>',
  'customize-panel': 'Customize panels adjust settings. Web Component: <chi-customize-panel>',
  'html-select': 'HTML select dropdowns. Web Component: <chi-dropdown-select>',
};

const CATEGORY_MAP: Record<string, string[]> = {
  Actions: ['buttons', 'link'],
  Forms: [
    'checkbox',
    'radio',
    'input-text',
    'textarea',
    'label',
    'form-wrapper',
    'phone-input',
    'number-input',
    'html-select',
    'search-input',
  ],
  'Data Display': ['data-table', 'badge', 'card', 'avatar', 'brand', 'price', 'progress', 'skeleton', 'copy-text'],
  Feedback: ['alert', 'spinner', 'tooltip', 'drawer'],
  Navigation: ['breadcrumb', 'tabs', 'pagination', 'header', 'footer', 'sidenav', 'toolbar'],
  Overlays: ['modal', 'popover', 'dropdown', 'backdrop'],
  Layout: ['grid', 'divider', 'app-layout', 'main', 'expansion-panel', 'accordion', 'carousel'],
  Media: ['icon', 'marketing-icon', 'flag-icons'],
  Pickers: ['date-picker', 'time-picker', 'picker', 'picker-group'],
  Other: ['cache-loader', 'customize-panel', 'drag-and-drop', 'bulk-actions', 'filters', 'transfer-list', 'tags'],
};

export function getCategoryForComponent(name: string): string {
  for (const [category, components] of Object.entries(CATEGORY_MAP)) {
    if (components.includes(name)) {
      return category;
    }
  }
  return 'Other';
}
