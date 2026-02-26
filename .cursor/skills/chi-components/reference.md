# Chi Components Reference Data

## Component Descriptions (manual)

| Component | Description |
|-----------|-------------|
| accordion | Accordions show and hide content sections. Web Component: `<chi-accordion>` |
| alert | Alerts provide contextual feedback messages. Web Component: `<chi-alert>` |
| avatars | Avatars represent users or entities |
| backdrop | Backdrops provide overlay backgrounds for modals and drawers. Web Component: `<chi-backdrop>` |
| badge | Badges display status, notifications, or counts. Web Component: `<chi-badge>` |
| brand | Brand elements display company logos and identity. Web Component: `<chi-brand>` |
| breadcrumb | Breadcrumbs show navigation hierarchy. Web Component: `<chi-breadcrumb>` |
| buttons | Buttons trigger actions and events. Web Component: `<chi-button>` |
| card | Cards contain content and actions. Web Component: `<chi-card>` |
| carousel | Carousels display rotating content. Web Component: `<chi-carousel>` |
| checkbox | Checkboxes allow multiple selections. Web Component: `<chi-checkbox>` |
| divider | Dividers separate content |
| drawer | Drawers slide in from screen edges. Web Component: `<chi-drawer>` |
| dropdown | Dropdowns display lists of options. Web Component: `<chi-dropdown>` |
| expansion-panel | Expansion panels show expandable content sections. Web Component: `<chi-expansion-panel>` |
| grid | Flexbox grid system for layout |
| css-grid | CSS Grid layout system. For gap spacing, prefer global utilities `-g--X` instead of component modifiers `-gap--X` |
| header | Headers contain top-level navigation and branding |
| footer | Footers contain bottom page information |
| icon | Icons are graphical symbols. Web Component: `<chi-icon>` |
| input-text | Text inputs capture single-line text. Web Component: `<chi-text-input>` |
| input-number | Number inputs capture numeric values. Web Component: `<chi-number-input>` |
| input-file | File inputs allow file uploads |
| link | Links navigate to other pages or sections. Web Component: `<chi-link>` |
| modal | Modals display content in overlay windows. Web Component: `<chi-modal>` |
| navigation | Navigation components provide site navigation |
| pagination | Pagination divides content into pages. Web Component: `<chi-pagination>` |
| popover | Popovers display floating content. Web Component: `<chi-popover>` |
| progress | Progress indicators show task completion. Web Component: `<chi-progress>` |
| radio | Radio buttons allow single selection. Web Component: `<chi-radio-button>` |
| spinner | Spinners indicate loading state. Web Component: `<chi-spinner>` |
| stat | Stats display numeric data and metrics |
| steps | Steps show multi-step processes |
| tabs | Tabs organize content into panels. Web Component: `<chi-tabs>` |
| tags | Tags label and categorize items. Web Component: `<chi-tags>` |
| textarea | Textareas capture multi-line text. Web Component: `<chi-textarea>` |
| tooltip | Tooltips display helpful hints. Web Component: `<chi-tooltip>` |
| toggle-switch | Toggle switches control binary states. Web Component: `<chi-switch>` |
| data-table | Data tables display structured data |
| tables | Tables organize data in rows and columns |
| toolbar | Toolbars contain action buttons. Web Component: `<chi-toolbar>` |
| skeleton | Skeletons show loading placeholders. Web Component: `<chi-skeleton>` |
| price | Price components display pricing information. Web Component: `<chi-price>` |
| phone-input | Phone inputs capture telephone numbers. Web Component: `<chi-phone-input>` |
| time-picker | Time pickers select time values. Web Component: `<chi-time-picker>` |
| date-picker | Date pickers select date values. Web Component: `<chi-date-picker>` |
| picker | Pickers select from options. Web Component: `<chi-picker>` |
| range-slider | Range sliders select numeric ranges |
| marketing-icon | Marketing icons are large illustrative icons. Web Component: `<chi-marketing-icon>` |
| flag-icon | Flag icons represent countries |
| activity | Activity components show user activity feeds |
| sidebar | Sidebars contain secondary navigation |
| mobile-navigation | Mobile navigation for small screens |
| drag-and-drop | Drag and drop enables item reordering. Web Component: `<chi-drag>` |
| cache-loader | Cache loaders manage loading states. Web Component: `<chi-cache-loader>` |
| customize-panel | Customize panels adjust settings. Web Component: `<chi-customize-panel>` |
| html-select | HTML select dropdowns. Web Component: `<chi-dropdown-select>` |

## Component List (auto-generated from SCSS)

<!-- AUTO-GENERATED:START - section:component-list - Do not edit below. Run `npm run sync:skills` to update -->
| Component | Base Class | Modifiers | Subcomponents | Web Component |
|-----------|------------|-----------|---------------|---------------|
| accordion | chi-accordion | -disabled, -transitioning, -expanded, -truncated, -card, -sm, -link, -compact-title, ... | chi-accordion__item | `<chi-accordion>` |
| activity | chi-activity | -feed, -compact, -stories | chi-activity__day, chi-activity__item |  |
| alert | chi-alert | -center, -banner, -close, -lg, -sm, -hover, -success, -border-color, ... | chi-alert__content | `<chi-alert>` |
| avatars | chi-avatar | -transparent, -xs, -sm, -sm--2, -sm--3, -md, -lg, -xl, ... |  |  |
| backdrop | chi-backdrop | -full-page, -center, -mobile-bottom, -animated, -closed, -inverse, -transitioning | chi-backdrop__wrapper, chi-backdrop__footer | `<chi-backdrop>` |
| badge | chi-badge | -sm, -xs, -outline, -flat, -notification, -primary, -border-color, -text-color, ... | chi-badge__content | `<chi-badge>` |
| brand | chi-brand | -centurylink, -brightspeed, -colt, -xs, -lumen-width, -centurylink-height, -centurylink-width, -brightspeed-height, ... |  | `<chi-brand>` |
| breadcrumb | chi-breadcrumb | -active, -alt, -xs, -line-height, -sm, -md, -lg, -xl | chi-breadcrumb__item | `<chi-breadcrumb>` |
| bulk-actions | chi-bulk-actions | -vertical | chi-bulk-actions__start, chi-bulk-actions__end, chi-bulk-actions__top, chi-bulk-actions__results, ... |  |
| buttons | chi-button-group | -icon, -hover, -focus, -xs, -icons, -sm, -md, -lg, ... |  |  |
| buttons | chi-button | -disabled, -md, -sm, -icon, -float, -hover, -focus, -active, ... | chi-button__content | `<chi-button>` |
| cache-loader | chi-cache-loader | -pulse, -bar, -muted, -no-interaction |  | `<chi-cache-loader>` |
| card | chi-card | -widget, -align--left, -align--right, -align--center, -sm, -no-border, -notifications, -active, ... | chi-card__hero, chi-card__content, chi-card__header, chi-card__title, ... | `<chi-card>` |
| carousel | chi-carousel | -previous, -next, -float, -dots, -pagination, -active | chi-carousel__content, chi-carousel__dots, chi-carousel__pagination | `<chi-carousel>` |
| checkbox | chi-checkbox | -hover, -danger, -disabled, -focus, -indeterminate |  | `<chi-checkbox>` |
| css-grid | chi-css-grid | -grid-rows--176, -grid-template-rows--none, -grid-auto-rows--auto, -col--, -col-, -row--, -row-, -row-start--, ... |  |  |
| customize-panel | chi-customize-panel |  |  | `<chi-customize-panel>` |
| data-table | chi-data-table | -expanded, -selectable, -sorting, -active, -descending, -expandable, -striped, -selected, ... | chi-data-table__body, chi-data-table__footer, chi-data-table__head, chi-data-table__row, ... |  |
| date-picker | chi-datepicker | -disabled, -active, -today, -inactive, -hover, -week-starts-on-sun, -month-starts-on-, -week-starts-on-mon, ... | chi-datepicker__day, chi-datepicker__week-day, chi-datepicker__month, chi-datepicker__days, ... | `<chi-date-picker>` |
| divider | chi-divider | -inverse, -vertical, -label |  |  |
| drag-and-drop | chi-drag | -active, -locked, -accordion, -base |  | `<chi-drag>` |
| drawer | chi-drawer | -active, -animated, -transitioning, -top, -menu, -right, -bottom, -left | chi-drawer__header, chi-drawer__title, chi-drawer__content, chi-drawer__footer | `<chi-drawer>` |
| dropdown | chi-dropdown | -fluid, -active, -h--auto, -no-interaction, -icon--right, -has-active, -disabled, -text, ... | chi-dropdown__menu | `<chi-dropdown>` |
| expansion-panel | chi-epanel | -centered, -active, -disabled, -bordered, -no-step, -state-icon, -state, -done | chi-epanel__header, chi-epanel__collapse, chi-epanel__footer, chi-epanel__wrapper | `<chi-expansion-panel>` |
| filters | chi-filters |  | chi-filters__trigger-button |  |
| flag-icon | chi-flag-icon | -xs |  |  |
| footer | chi-footer | -icon, -flat, -row | chi-footer__content, chi-footer__internal, chi-footer__external |  |
| grid | chi-grid | -no-gutter, -align--top, -align--center, -align--bottom, -w-, -w--, -o--, -o-, ... | chi-grid__container |  |
| header | chi-header | -dark, -vertical, -collapsed, -impersonation, -navbar, -xs, -md, -inverse, ... | chi-header__content, chi-header__brand, chi-header__start, chi-header__end, ... |  |
| icons | chi-icon | -xs, -sm, -sm--2, -sm--3, -md, -lg, -xl, -xxl |  | `<chi-icon>` |
| input-file | chi-input | -hover, -active, -focus, -xs, -width, -font-size, -line-height, -sm, ... |  | `<chi-text-input>` |
| input-number | chi-number-input | -expanded, -xs, -line-height, -font-size, -padding, -btn-height, -right, -top, ... |  | `<chi-number-input>` |
| input-text | chi-search | -flat, -close, -disabled, -icon--right, -xs, -sm, -lg, -xl, ... | chi-search__input | `<chi-search-input>` |
| input-text | chi-label | -status, -danger, -success, -warning, -info, -xs, -line-height, -sm, ... |  | `<chi-label>` |
| link | chi-link | -hover, -disabled, -cta, -no-underline, -no-hover-underline, -xs, -line-height, -sm, ... |  | `<chi-link>` |
| marketing-icon | chi-marketing-icon | -xs, -sm, -md, -lg |  | `<chi-marketing-icon>` |
| mobile-navigation | chi-mobile-nav | -second-level-shown, -left, -right, -animated, -close, -vertical, -icons, -active, ... |  |  |
| modal | chi-modal | -no-border, -centered, -active, -animated, -transitioning, -header-image, -gradient, -full-page | chi-modal__header, chi-modal__content, chi-modal__footer | `<chi-modal>` |
| navigation | chi-tabs | -sm, -lg, -active, -responsive, -active-alt, -animated, -xl, -border, ... |  | `<chi-tabs>` |
| pagination | chi-pagination | -xs, -hover, -active, -focus, -sm, -md, -lg, -xl, ... | chi-pagination__content, chi-pagination__pages, chi-pagination__results, chi-pagination__button-group, ... | `<chi-pagination>` |
| phone-input | chi-phone-input |  | chi-phone-input__menu | `<chi-phone-input>` |
| picker | chi-picker-group | -sm, -lg, -xl, -disabled, -fluid, -xs, -line-height, -min-height, ... | chi-picker-group__content | `<chi-picker-group>` |
| picker | chi-picker | -disabled, -pill, -xs, -item-font-size, -item-description-line-height, -sm |  | `<chi-picker>` |
| popover | chi-popover | -animated, -active, -transitioning, -close, -vertical, -closable, -modal, -draggable, ... | chi-popover__input | `<chi-popover>` |
| price | chi-price | -sm, -line-height, -sup, -top, -md, -lg |  | `<chi-price>` |
| radio | chi-radio | -disabled, -focus, -danger, -hover |  | `<chi-radio-button>` |
| save-view | chi-save-view |  | chi-save-view__start, chi-save-view__end, chi-save-view__delete, chi-save-view__base, ... |  |
| save-views | chi-save-views |  |  |  |
| sidebar | chi-sidenav | -active, -sliding, -close, -left, -animated, -expanded, -sm, -transitioning, ... | chi-sidenav__content, chi-sidenav__list, chi-sidenav__drawer-list, chi-sidenav__header, ... |  |
| skeleton | chi-skeleton | -circle, -square, -rounded, -xs, -sm, -md, -lg, -xl |  | `<chi-skeleton>` |
| spinner | chi-spinner | -xs, -sm, -sm--2, -sm--3, -md, -lg, -xl, -xxl | chi-spinner__wrapper | `<chi-spinner>` |
| stat | chi-stat | -active, -flat, -icon, -disabled, -center, -compact | chi-stat__title, chi-stat__value |  |
| steps | chi-steps | -active, -completed, -inverse, -horizontal-label, -labels--hide, -sm, -vertical, -labels- | chi-steps__icon, chi-steps__line, chi-steps__content, chi-steps__subitem, ... |  |
| tables | chi-table | -sorted, -ascending, -descending, -row--success, -row--warning, -row--danger, -row--info, -active, ... |  |  |
| tags | chi-tags | -focus, -hover, -icon, -close |  | `<chi-tags>` |
| time-picker | chi-time-picker | -disabled, -active | chi-time-picker__content | `<chi-time-picker>` |
| toggle-switch | chi-switch | -label--hide, -focus, -disabled, -xs, -sm, -row, -list |  | `<chi-switch>` |
| toolbar | chi-toolbar | -vertical, -flat, -icon, -compact-title | chi-toolbar__header, chi-toolbar__ribbon, chi-toolbar__start, chi-toolbar__end, ... | `<chi-toolbar>` |
| tooltip | chi-tooltip | -active, -light, -dark |  | `<chi-tooltip>` |
| transfer-list | chi-transfer-list | -checkbox, -locked | chi-transfer-list__content, chi-transfer-list__column, chi-transfer-list__header, chi-transfer-list__title, ... |  |
<!-- AUTO-GENERATED:END -->

## Component Categories

| Category | Components |
|----------|------------|
| Actions | buttons, link |
| Forms | checkbox, radio, input-text, textarea, label, form-wrapper, phone-input, number-input, html-select, search-input |
| Data Display | data-table, badge, card, avatar, brand, price, progress, skeleton, copy-text |
| Feedback | alert, spinner, tooltip, drawer |
| Navigation | breadcrumb, tabs, pagination, header, footer, sidenav, toolbar |
| Overlays | modal, popover, dropdown, backdrop |
| Layout | grid, divider, app-layout, main, expansion-panel, accordion, carousel |
| Media | icon, marketing-icon, flag-icon |
| Pickers | date-picker, time-picker, picker, picker-group |
| Other | cache-loader, customize-panel, drag-and-drop, bulk-actions, filters, transfer-list, tags |

## Component Relationships

| Component | Related Utilities | Related Components | Notes |
|-----------|-------------------|-------------------|-------|
| chi-button | -p--3, -p--4, -bg--primary, -text--white | chi-button-group, chi-icon, chi-spinner | PREFER `<chi-button>` Web Component |
| chi-alert | -p--3, -m--4, -text--danger, -bg--danger-lighter | chi-icon, chi-button | PREFER `<chi-alert>` Web Component |
| chi-modal | | chi-backdrop, chi-button, chi-icon | PREFER `<chi-modal>` Web Component. Handles focus trap and a11y |
| chi-card | -p--4, -m--3, -bg--white | chi-button, chi-divider, chi-badge | BEM: chi-card__header, chi-card__content, chi-card__footer |
| chi-tabs | | chi-tabs__panel | PREFER `<chi-tabs>` Web Component |

## Performance Hints

| Component | JS Required | Bundle Size | Rendering Cost | Lazy Loadable | Key Optimizations |
|-----------|-------------|-------------|----------------|---------------|-------------------|
| chi-modal | Yes | ~8 KB | High | Yes | Lazy load content, use will-change: transform |
| chi-drawer | Yes | ~6 KB | High | Yes | Use transform: translateX(), will-change: transform |
| chi-dropdown | Yes | ~4 KB | Medium | No | CSS opacity/transform for show/hide, virtualize large lists |
| chi-accordion | Yes | ~3 KB | Medium | Yes | Lazy load collapsed content, CSS transitions |
| chi-carousel | Yes | ~5 KB | Medium | Yes | Lazy load images, transform: translateX() |
| chi-data-table | No | CSS only | Low | Yes | Virtualize 1000+ rows, fixed table layout, paginate |
| chi-tooltip | Yes | ~2 KB | Low | No | CSS transforms, debounce show/hide |
| chi-popover | Yes | ~4 KB | Medium | Yes | Lazy load content, transform positioning |
| chi-spinner | No | CSS only | Low | No | CSS animations (GPU-accelerated) |
| chi-progress | No | CSS only | Low | No | transform: scaleX(), throttle updates |
| chi-tabs | Yes | ~3 KB | Low | Yes | Lazy load inactive tab content |
| chi-expansion-panel | Yes | ~3 KB | Medium | Yes | Lazy load panel content, CSS transitions |
| chi-date-picker | Yes | ~12 KB | High | Yes | Lazy load calendar, cache rendered calendars |
| chi-skeleton | No | CSS only | Low | No | Remove when content loads |
| chi-badge | No | CSS only | Low | No | No optimizations needed |
| chi-button | No | CSS only | Low | No | Pure CSS, no concerns |
| chi-card | No | CSS only | Low | Yes | Lazy load images, virtualize 100+ card grids |
