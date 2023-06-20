# CHANGELOG
## 5.35.0 (June 16, 2023)
### Components
#### Added
* Added: Picker component now supports `pill` version by adding `-pill` class.
* Added: Phone input now supports Serbia, `+381`, and Montenegro, `+382`, code countries.
#### Fixed
* Fixed: Expansion panel margin-left alignment in Vue component when `state-icon` is present in `active` state.
* Fixed: Expansion panel Vue component was missing `-done-only` class to render correct font-size in `done` state.

## 5.34.0 (June 9, 2023)
### Components
#### Added
* Added: Text utility classes now support `-text--italic`.
* Added: Dropdown supports keyboard events `arrowUp` and `arrowDown` to improve accessibility.
#### Changed
* Changed: Dropdown focus state has changed for consisitency with another components.
#### Fixed
* Fixed: Data table spacing and colors in nested data tables.

## 5.33.0 (May 30, 2023)
### Components
#### Added
* Added: Phone input now supports dynamically change of country code.
* Added: Badge supports new extended color palette.
* Added: Badge supports new `text-weight` property to give developers the ability to set normal, semi-bold, and bold font-weights.
#### Changed
* Changed: Data table description popover in header has been repositioned in the DOM to improve rendering.
#### Fixed
* Fixed: Date picker in `mode="datetime"` has changed incorrect value from 24 to 00 when `time-format="24hr"` is set and `00` hours selected.
* Fixed: Data table headers styles in nested data tables.
* Fixed: Draggable Popover behavior has been improved to recalculate position dynamically.

## 5.32.0 (May 12, 2023)
### Components
#### Added
* Added: Alert `closable` is now dismissible by default when clicking on close icon.
* Added: Data table Vue component header now supports two lines in a cell when `cellWrap` config is set to true.
* Added: Add support for new icons: `icon-box-circle-arrow-left`, `icon-box-circle-check`, `icon-calendar-circle-check`, `icon-clipboard`, `icon-nodes-circle-check`, `icon-pause-arrow-rotate-right`.
#### Changed
* Changed: Toolbar `Column customization` tooltip text to `Customize columns`.
#### Fixed
* Fixed: Version check alert banner.

## 5.31.0 (April 27, 2023)
### Components
#### Added
* Added: App layout title now supports title mutation.
* Added: Text utility class `-text--capitalize-fl` to capitalize first letter.
#### Changed
* Changed: Tabs web component no longer needs `customLabel` property.
#### Fixed
* Fixed: Theme support in header and data table pagination by removing `-icon--primary` and `-primary` classes.
### Documentation
#### Fixed
* Fixed: Tabs in data table complex example.

## 5.30.0 (April 12, 2023)
### Components
#### Added
* Added: Carousel recalculates item position when resizing the viewport.
#### Fixed
* Fixed: Data table description popover in header now supports column customization.
### Documentation
#### Added
* Added: Search input with dropdown example.
#### Fixed
* Fixed: Prevent opening Accessibility accordion in sidenav when clicking on another item in Foundations section.
* Fixed: Vue documentation sidenav `-active` class was missing in a selected item.

## 5.29.0 (March 29, 2023)
### Components
#### Added
* Added: Expansion panel now supports state icons.
* Added: Data table `noResultsMessage` config for displaying no results message.
* Added: Data table `noFiltersMessage` config for displaying no filters message.
* Added: Tabs web component now supports sizes.
#### Changed
* Changed: Tabs navigation bar `See more...` item has changed to `More`.
#### Fixed
* Fixed: Data table description popover in header has removed `modal` class that was causing incorrect width.
### Documentation
#### Added
* Added: Data table radio selection example has been added in Lumen Enterprise Portal theme.
* Added: Data table complex example has been added in Lumen and Centurylink theme.
* Added: Tabs tabbed navigation example has been added in Lumen Enterprise Portal theme.
#### Changed
* Changed: Browser support page has removed ie11 from the support list.
#### Fixed
* Fixed: Data table code snippets.

## 5.28.0 (March 3, 2023)
### Components
#### Added
* Added: Date picker now supports changing the format time from 12h to 24h when `mode="datetime"` is active.
* Added: Data table `showExpandAll` config for displaying expand/collapse all functionality.
* Added: Data table `showSelectedAllDropdown` config for displaying select/deselect all functionality.
* Added: Carousel condition to chi-stat__item to display prev and next buttons.
* Added: Events for select/deselect all items in all pages.
* Added: Text input now supports `type="number"`.
#### Changed
* Changed: Label cursor and attributes on `abbr` html elements  in form field labels.
* Changed: Alert base style in Lumen Enterprise Portal theme to better support brand guidelines.
#### Fixed
* Fixed: Date picker `invalid format` error in datetime mode.
* Fixed: Data table select all and deselect all console errors when checkboxes are loaded dynamically.
### Documentation
#### Added
* Added: Save View Vue component properties.

## 5.27.0 (February 9, 2023)
### Components
#### Added
* Added: Tabs web component.
* Added: Data table now supports selecting all items in all pages.
* Added: Picker component now supports sizes.
* Added: Data table header sorting has been improved if a cell is empty.
* Added: Data table now supports expand/collapse button in header that open and close all rows.
* Added: Icons `icon-gear-password`, `icon-shield-2fa`, `icon-squares-minus-outline`, `icon-squares-plus-outline`.
* Added: Flag icon component now supports blank flag as default and the following countries: Belgium, Canada, Chile, China, Ecuador, France, Ireland, Italy, Netherlands, Peru, Spain, Venezuela.
#### Changed
* Changed: Data table chevron icon that appears on mobile row has been removed.
* Changed: Icon `icon-shield`.
* Changed: Alert `icon-circle-warning` in danger mode has changed to `icon-circle-x`.
* Changed: App layout component title styles.
### Documentation
#### Changed
* Changed: Expansion panel accordion mode example has been removed.

## 5.26.0 (January 20, 2023)
### Components
#### Added
* Added: Carrousel now supports `autoplay`, `interval` and `no-button-controllers` attributes.
* Added: App layout now supports page level alerts.
#### Changed
* Changed: Icons `icon-logo-cloudstack`, `icon-logo-dimensiondata`, `icon-logo-hp`, `icon-logo-rackspace`, `icon-logo-vcloud`, `icon-logo-vsphere`, `icon-logo-linux`, `icon-logo-openstack`, `icon-logo-slack` have been removed as they are no longer needed.
* Changed: Button group alignment and disable fluidity use cases can now be achieved with the flex utility classes.
#### Fixed
* Fixed: File input javascript file.
### Documentation
#### Added
* Added: Save View Vue component in Toolbar.
#### Changed
* Changed: App layout and footer examples have changed copyright year to 2023.
* Changed: Button group alignment and disable fluidity examples have been removed.
* Changed: Header with top toolbar example has been removed.
* Changed: License copyright year.

## 5.25.0 (December 20, 2022)
### Components
#### Added
* Added: Data table now supports expand/collapse rows functionality in mobile version.
* Added: Header navbar now provides support for links.
#### Changed
* Changed: App layout title font weight has been updated from extra-bold to black to match Portal style guide.
* Changed: Disabled cursor in search input, text input and text area components.
* Changed: Alert title font-weight has been updated from semi-bold to bold for portal theme.
#### Fixed
* Fixed: Large Header padding has been improved to allow active border sits flush with the base of the navbar.
### Documentation
#### Added
* Added: Mobile nav example to support Lumen.com and Developer center use cases.
#### Fixed
* Fixed: Expansion panel code snippets.

## 5.24.0 (November 4, 2022)
### Components
#### Added
* Added: Data table now supports two lines in a cell with `cellWrap` config is set to true.
* Added: Footer now supports unathenticated and authenticated simple mode when social media links, language selection, and international legal notice links are not needed.
#### Fixed
* Fixed: Dropdown arrow display bug in Tabs component.
### Documentation
#### Added
* Added: Category layout in Card templates page.

## 5.23.0 (October 28, 2022)
### Components
#### Added
* Added: Accordion component now supports animation on the icon chevron right to represent collapsed and expanded states.
#### Changed
* Changed: Toolbar styles in Lumen and CenturyLink themes have been updated to better support Lumen brand guidelines.
* Changed: Header nav dropdown styles have been improved to match Lumen.com. Rounded top left and top right border radius have been removed, padding has been increased, and notch arrow has been added.
#### Fixed
* Fixed: Header nav dropdown menus were disappearing when hovering from the dropdown trigger to the dropdown menu.
### Documentation
#### Added
* Added: Dropdown to download icon button in Toolbar component.
* Added: Card templates page.

## 5.22.0 (October 20, 2022)
### Components
#### Added
* Added: Carousel web component now removes the previous and next buttons on single element scenario when there is only one item.
* Added: Icons `icon-link-broken`, `icon-globe-network-outline`, `icon-lightbulb-on`, `icon-lightbulb-on-outline`, `icon-building-outline`, `icon-building`, `icon-user-remove`, `icon-gears`, `icon-user-create`, `icon-file-invoice-create`, and `icon-arrow-to-top`.
#### Changed
* Changed: Icons `icon-delete`, and `icon-globe-network`.
* Changed: Button styles in Lumen theme have been updated to better support Lumen brand guidelines.
#### Fixed
* Fixed: Picker behavior which caused checkboxes and radio buttons to shrink when picker label wrapped to multiple lines.
### Documentation
#### Added
* Added: Expansion panel footer states example now includes an optional cancel button.

## 5.21.0 (September 29, 2022)
### Components
#### Added
* Added: Picker layout has been improved to better support pricing patterns.
* Added: Dropdown now supports fluid option spanning full width of parent container.
* Added: Alert now supports clickable option by placing it inside a link or button component.
#### Changed
* Changed: Solid Tabs active border animation has changed from lateral sliding to animating height.

## 5.20.1 (September 1, 2022)
### Components
#### Fixed
* Fixed: Picker group text alignment has been improved for better responsive behavior.
### Documentation
#### Changed
* Changed: Documentation examples of Checkbox and Radio button components now render with increased margins.
#### Fixed
* Fixed: Documentation search functionality.

## 5.20.0 (August 31, 2022)
### Components
#### Changed
* Changed: The base font of the Lumen theme has been changed from Inter to Gotham.
* Changed: The base font of the CenturyLink theme has been changed from Inter to Maison Neue.

## 5.19.0 (August 19, 2022)
### Components
#### Added
* Added: Icons `icon-file-check-outline`, `icon-file-check`, `icon-drag-vertical`, `icon-drag-vertical-outline`, `icon-mail-outgoing`, `icon-mail-outgoing-outline`, `icon-mail-incoming`, `icon-mail-incoming-outline`, `icon-lightbulb-magic-outline`, `icon-lightbulb-magic`, `icon-filter-alt-outline`, `icon-filter-alt`, `icon-filter-alt-off`, `icon-filter-alt-off-outline`, `icon-diagram`, `icon-diagram-outline`, `icon-check-double`, `icon-sun`, `icon-sun-outline`, `icon-moon`, `icon-moon-outline`,  `icon-fact-check`,  `icon-fact-check-outline`, `icon-computer`, `icon-checklist`, and `icon-checklist-outline`.
* Added: Data Table now supports column resize on all levels of nesting.
* Added: Picker Group component now supports additional description labels for picker items.
* Added: Utility class `-flex-basis--0`.

## 5.18.0 (August 12, 2022)
### Components
#### Added
* Added: Dropdown web component.
#### Changed
* Changed: Improved size and color contrast of drag icon in Draggable Popover.
#### Fixed
* Fixed: Draggable Popover behavior has been improved to no longer move outside the available boundaries of the screen.

## 5.17.0 (August 4, 2022)
### Components
#### Added
* Added: Icons `icon-circle-pie`, `icon-cloud-outline`, `icon-cloud-products`, `icon-dashboard`, `icon-edit-reload`, and `icon-file-invoice-gear`.

## 5.16.0 (July 15, 2022)
### Components
#### Added
* Added: CSS grid component.
* Added: Carousel web component now support swipe interaction.
#### Fixed
* Fixed: App layout component dashboard example elements now render with a better arrangement of layers.

## 5.15.0 (July 4, 2022)
### Components
#### Added
* Added: App layout now supports dashboard style with header background.
* Added: Save View Vue component.
* Added: Card component now supports widget variant for portal dashboard.
* Added: Expansion Panel Vue component.
#### Fixed
* Fixed: Outline marketing icon is now visible inside active Stat component items.

## 5.14.1 (June 13, 2022)
### Components
#### Fixed
* Fixed: Sidenav component no longer throws a console error when clicking on a single-level menu item.
* Fixed: Data table vue component now excludes from selection rows with `selectionDisabled` flag on all three levels.

## 5.14.0 (May 27, 2022)
### Components
#### Added
* Added: Tabs component now supports solid variant.
#### Fixed
* Fixed: Data table vue component no longer performs redundant sorting in server-side mode.

## 5.13.1 (May 12, 2022)
### Components
#### Changed
* Changed: Data table Advanced filters Vue component footer styling is now fully aligned with Lumen Enterprise Portal style guide.
* Changed: Data table Column customization Vue component footer styling is now fully aligned with Lumen Enterprise Portal style guide.
#### Fixed
* Fixed: Popover component shown within the context of the Data table now automatically wraps text.

## 5.13.0 (April 20, 2022)
### Components
#### Added
* Added: Expansion panel component now supports mobile-first rendering.
* Added: Search input Vue component now supports asynchronous update of value.
#### Fixed
* Fixed: Time picker web component now renders the value with `AM/PM` only in mode `12hr`.

## 5.12.0 (March 30, 2022)
### Components
#### Added
* Added: Checkbox web component.
#### Changed
* Changed: Date picker web component now emits `chiDateInvalid` event instead of selecting today's date when the typed date is invalid.
#### Fixed
* Fixed: Phone input web component cursor position when editing phone number.

## 5.11.0 (March 18, 2022)
### Components
#### Added
* Added: Data table now supports print-friendly rendering.
* Added: Number input now supports optional configuration of value format.
* Added: Data table bulk actions module now supports displaying of three level data in show selected only mode.
* Added: Checkbox Vue component.
* Added: Data table now supports indeterminate state of row checkbox.
* Added: Data table now supports tree selection for automatic hierarchical selection of rows.
* Added: Data table select all checkbox now supports disabled state.
* Added: Display utility classes now support `-d-screen--only` and `-d-print--only` to target specific media type.
#### Changed
* Changed: Form item error messages now include warning icon.
#### Fixed
* Fixed: Data table `chiSelectAll` and `chiDeselectAll` events to provide an array of rows with enabled selection.
### Documentation
#### Added
* Added: Alert type toast examples have been included in Lumen Enterprise Portal theme documentation.
* Added: Data table complex example now illustrates `print` method.
* Added: Stat component documentation examples now illustrate hover behavior.
#### Changed
* Changed: Stat component documentation examples now illustrate carousel.

## 5.9.1 (February 17, 2022)
### Components
#### Changed
* Changed: Link component color has been changed for the Project Connect theme.

## 5.9.0 (February 10, 2022)
### Components
#### Added
* Added: Theme support for Project Connect.
* Added: Carousel web component now supports optional pagination.
* Added: Search Input web component now supports `readonly` state.

## 5.8.0 (January 31, 2022)
### Components
#### Added
* Added: Marketing Icon web component now supports `filled` and `outline` variants.
* Added: Data Table Vue component now supports Bulk actions module.
* Added: Data Table Vue component now supports optional info icon in header cells to provide additional information.
#### Changed
* Changed: Draggable Popover icon opacity has been changed to accommodate style guide requirements.
#### Fixed
* Fixed: Data Table Vue component select all checkbox issue of rendering with the incorrect state when all the rows of the page are selected by default.
* Fixed: Radio Button alignment when no associated label is present.
* Fixed: Carousel button event emission issue.
### Documentation
#### Added
* Added: Steps component documentation now includes order progress template.
#### Changed
* Changed: Table filtering example of popover component documentation now includes more accordions to show a scrollbar.

## 5.7.0 (December 16, 2021)
### Components
#### Added
* Added: Carousel web component for sequentially displaying and switching between slides with any type of elements.
* Added: Modal component now supports bottom position for mobile views.
* Added: Data table filters sub-module now supports rendering of custom content inside advanced filters popover.
* Added: Data table component now supports bulk actions.
* Added: Data table filters sub-module now supports expand/collapse functionality of accordions in advanced filters popover.
* Added: Data table Vue component now supports row selection with radio buttons.
#### Changed
* Changed: Lumen and Portal themed modals now render with a 4px border-radius.
* Changed: Header component styles to better align with lumen.com.
* Changed: Stat component design for the portal theme.
* Changed: Footer component code snippet links to target lumen.com URLs.
#### Fixed
* Fixed: Checkbox component issue of rendering multi-line label.
* Fixed: Drawer component close button issue caused after using the dispose method.
### Documentation
#### Added
* Added: App Layout documentation page now includes respective properties and events.

## 5.6.0 (November 11, 2021)
### Components
#### Added
* Added: International phone input web component.
* Added: Data table header cells now support conditional rendering of tooltip.

## 5.5.0 (October 28, 2021)
### Components
#### Added
* Added: App layout web component `chiBacklinkClick` event emission.
* Added: Mobile nav now supports 4th level of navigation.
* Added: Text utility classes now support `-text--2xs` which renders text with an 11px font-size.
* Added: Icons `icon-ticket-wrench-multiple`, `icon-hand-gear`, `icon-list-alt`, `icon-inbox-multiple`, `icon-unlock`, and `icon-unlock-outline`.
* Added: Sidenav now supports 4th level of navigation.
* Added: Column customization Chi Vue component now supports automatic alphabetical order of available columns.
#### Changed
* Changed: Column customization Chi Vue component reset and cancel behavior has been changed for better UI/UX consistency.
#### Fixed
* Fixed: Data table select all checkbox state issue in server-side mode.
* Fixed: Dropdown trigger button issue which rendered incorrect padding in `-lg` and `-xl` sizes.
* Fixed: Data table `chiPageChange` event emission has been improved in server-side mode.
### Documentation
#### Added
* Added: Sidenav properties page now includes respective `configs` and `methods`.
#### Changed
* Changed: Advanced Filters Popover has changed clear filters button for better UX.

## 5.4.0 (September 30, 2021)
### Components
#### Added
* Added: Column customization Chi Vue component options now maintain selected state when reordering.
* Added: Chi Vue components now render conditionally based on the used version of Chi.
* Added: Icons `icon-bookmark-outline`, `icon-bookmark` and `icon-reset`.
#### Changed
* Changed: CTA link arrow placement has changed from right to left in Lumen Enterprise Portal theme.
#### Fixed
* Fixed: App layout web component title attribute issue which caused showing browser default tooltip element.
* Fixed: Column customization Chi Vue component ordering issue which caused wrong positioning of first and last items.
* Fixed: Select component now truncates long texts.
* Fixed: Data table gran-child position has been improved for better alignment with child row.
### Documentation
#### Changed
* Changed: Accordion chevrons placement in table filtering popover example have changed from left to right.
#### Fixed
* Fixed: Background-color utility classes are now visible in Lumen Enterprise Portal theme.

## 5.3.1 (September 17, 2021)
### Components
#### Changed
* Changed: Popover content container now supports scrolling overflow.
* Changed: Popover inline modal max-width has been increased to support wider content.
* Changed: Popover inline modal background color has been changed for portal theme.
* Changed: Popover drag icon has been updated.
* Changed: Data table grand-child row alignment has been improved.
* Changed: Data table column customization modal select title casing has been improved.
* Changed: Data table column customization modal footer buttons have been rearranged for consistency with other modals.
* Changed: Dropdown menu item spacing between text and icons has been reduced.
* Changed: Column Customization Vue component now supports reordering of locked columns.
#### Fixed
* Fixed: Popover bug which caused the top-left and top-right corners to render sharp instead of rounded if a header was present.
* Fixed: Data table column customization modal close icon button rendered with incorrect padding due to a missing `-icon` class.
### Documentation
#### Changed
* Changed: Dropdown menu item examples now render truncated text in tooltips.
* Changed: Code snippet copy to clipboard button size has been changed.
* Changed: Portal theme labeled icon button examples have been updated.
* Changed: Portal theme divider examples have been updated.
* Changed: Portal theme picker group examples have been updated.

## 5.3.0 (September 10, 2021)
### Components
#### Added
* Added: Floating icon button now supports sizes.
* Added: Date picker web component now supports retargeting of events.
#### Changed
* Changed: Data table Vue component sort behavior has been improved by allowing sorting only by ascending or descending.
* Changed: Data table Vue component mobile version has been improved to support click action on chevron element.
* Changed: Data table Vue component header has been improved to support text wrapping.
#### Fixed
* Fixed: Accessibility error in Data table Vue component due to missing id on pagination.
### Documentation
#### Changed
* Changed: Data table complex example has removed current badges from status column and replaced with status column illustrated in portal style guide.
* Changed: Data table complex example has included action buttons in all rows, not just parent rows.
* Changed: Icons in icon button and floating icon button have been updated to icon-edit and icon-chat respectively.
#### Fixed
* Fixed: Data table documentation examples have improved date format.

## 5.2.0 (August 27, 2021)
### Components
#### Added
* Added: Checkbox component now supports indeterminate state.
* Added: Toolbar Vue component now supports `ChiDataTableViews` submodule.
* Added: Link component now supports no underline style on hover.
* Added: Toolbar Vue component `ChiColumnCustomization` submodule now supports `chiColumnsReset` event emission.
* Added: Icons `icon-chat-outline` and `icon-copy`.
* Added: Date Picker component now supports `success`, `warning` and `danger` states.
#### Changed
* Changed: Link component CTA style has been improved to support new Lumen Enterprise Portal theme designs.
### Documentation
#### Fixed
* Fixed: Accessibility errors in Lumen Enterprise Portal theme documentation.

## 5.1.0 (August 5, 2021)
### Components
#### Added
* Added: Application layout web component and HTML blueprint templates now support optional help icon.
* Added: Data Table Vue component now supports `chiSelectAll` and `chiDeselectAll`.
#### Changed
* Changed: Stat component has been improved to support new portal theme designs.
* Changed: Drawer close icon color has been changed from black to blue for portal-themed drawers.
* Changed: Icons used for decoration or visual styling now include an aria-hidden=“true” attribute for accessibility.
* Changed: Portal-themed data table striping is now an optional style. 
#### Fixed
* Fixed: Text utility bug which caused margin on text headings to take precedence over margin utility classes.
* Fixed: Dropdown bug which caused dropdown menu item text to inherit the color and font-weight of its parent container.
* Fixed: Icon webfont was returning an ‘Unexpected missing generic font family’ bug in sonar.
### Documentation
#### Changed
* Changed: Footer component links have been updated with new URLs.

## 5.0.0 (July 28, 2021)
### Components
#### Added
* Added: Theme support for Lumen Enterprise Portal.
* Added: Data Table Vue component.
* Added: Pagination Vue component.
* Added: Drawer Vue component.
* Added: Tooltip Vue component.
* Added: Search Input Vue component.
* Added: Toolbar Vue component.
* Added: Text utility for text decorations including underline and line-through text.
* Added: Text utility for semi-bold text weight.
#### Changed
* Changed: Theming components with the class `-portal` is no longer supported. To render portal themed components, please use the new Chi theme Lumen Enterprise Portal.
* Changed: Form components (buttons, inputs, etc.) now render 8px taller. Form size values have been updated to the following:  xs:24px, sm:32px, md:40px (base), lg:48px, xl:56px.
* Changed: Sidenav hover and active styles have been improved.
* Changed: Mobile navigation styles have been improved to reflect Sidenav changes.
* Changed: Stat component structure has changed to support min and max widths.
#### Fixed
* Fixed: Sidenav Open on Hover bug which caused the drawer to close abruptly.
### Documentation
#### Added
* Added: Chi Vue instructions to installation page.
* Added: Chi Vue interactive documentation examples.
#### Changed
* Changed: Portal templates page has been removed. All templates can now be accessed on individual component pages when the active theme is set to Lumen Enterprise Portal.
#### Fixed
* Fixed: Various spelling and grammatical errors in documentation text.

## 4.4.0 (July 15, 2021)
### Components
#### Added
* Added: Application layout web component and html blueprint templates.
#### Fixed
* Fixed: Tooltip component text wrapping has been improved to support long text cases.

## 4.3.0 (June 18, 2021)
### Components
#### Added
* Added: Toolbar component provides the ability of performing actions such as searching for elements and filtering complex structures.

## 4.2.0 (June 4, 2021)
### Components
#### Added
* Added: Skeleton component provides a visual placeholder for asynchronously rendered UI elements.

## 4.1.2 (May 21, 2021)
### Components
#### Changed
* Changed: Popover component open on hover example now includes a slight delay before showing to reduce unintentional activations.
#### Fixed
* Fixed: Sidenav component event listener management has been improved for better performance.
### Documentation
#### Changed
* Changed: Accordion chevron down icon position has been changed for consistency with base example.

## 4.1.1 (May 13, 2021)
### Components
#### Fixed
* Fixed: Steps component styles have been improved for base step item.
* Fixed: Data table Portal child and grand-child rows did not display correct background color when expanded.

## 4.1.0 (April 30, 2021)
### Components
#### Added
* Added: Date and Date Picker web components now support format customization.
#### Changed
* Changed: Lumen and Portal themed form fields now render with a 4px border-radius.
* Changed: Lumen and Portal themed form field border colors have been lightened.
* Changed: Portal themed Accordion item background-color, padding, font-size, and font-weight have been updated.
* Changed: Portal themed Card header background-color has been changed to white.
* Changed: Portal themed Card content background-color and padding have been updated.
* Changed: Portal themed Cards with tabs now render with a bottom border.
* Changed: Portal themed Card title font-size and font-weight has been increased.
* Changed: Portal themed Icon buttons now render base icons 4px larger.
* Changed: Portal themed Table row colors have been lightened.
* Changed: Portal themed Table and Data table body now render with a border.
* Changed: Header navbar menu link font-size has been increased for `-lg` size headers.
* Changed: Header navbar menu Contact Us link no longer includes an icon.
* Changed: Header navbar menu link margin has been increased for `-lg` size headers.
* Changed: Header brand margin-right has been increased for `-lg` size headers.
* Changed: Header impersonation bar background-color has been lightened.
* Changed: Mobile nav background-color has been lightened.
* Changed: Mobile nav item icon size has increased.
* Changed: Sidenav item icon size has increased.
* Changed: Sidenav item min-height has increased.
* Changed: Sidenav background-color has been lightened.
### Documentation
#### Added
* Added: Portal templates for `-lg` size headers.
* Added: Portal templates for Page Titles.
* Added: Portal templates for nested and card Accordions.
* Added: Portal templates for form field states.
* Added: Portal template for page-level actions.
#### Changed
* Changed: Portal Table templates have been updated to reflect new style guidelines.
* Changed: Portal Accordion templates have been updated to reflect new style guidelines.
* Changed: Portal Tab templates have been updated to reflect new style guidelines.
* Changed: Portal Button templates have been updated to reflect new style guidelines.
* Changed: Portal Pagination templates have been updated to reflect new style guidelines.

## 4.0.0 (April 23, 2021)
### Components
#### Added
* Added: Chi now supports Themes. Themes provide the ability to customize all aspects of Chi, including Colors, Grids, Typography, and individual Component styles to better suit your product’s brand.
* Added: Theme support for the CenturyLink brand.
### Documentation
#### Added
* Added: Chi documentation now includes a Themes drop down to showcase available themes and customize the documentation experience based on the selected theme.

## 3.17.0 (April 16, 2021)
### Components
#### Added
* Added: Steps component now supports the class `-vertical` to render steps vertically and additional size class `-sm`.
* Added: Popover web component now supports the attribute `drag` for dragging functionality and `portal` for rendering portal themed Popovers.

## 3.16.0 (April 8, 2021)
### Components
#### Added
* Added: Icons `icon-circle-slash` and `icon-circle-slash-outline`.
* Added: Marketing icon `business-support-ticket`.
### Documentation
#### Fixed
* Fixed: Error 500 template brand svg in code snippet.
* Fixed: Search input close icon button code snippets were missing size class `-sm`.

## 3.15.0 (March 30, 2021)
### Components
#### Added
* Added: Date and date picker web components now support `multiple` date selection.

## 3.14.0 (March 25, 2021)
### Components
#### Added
* Added: Search input component to provide users with the ability input words or phrases and locate relevant content.
* Added: Accordion now supports the class `-truncated` to truncate long accordion titles.
### Documentation
#### Changed
* Changed: Chi GitHub links have been updated to reflect our new repository URL.

## 3.13.0 (March 18, 2021)
### Components
#### Added
* Added: Subresource Integrity (SRI) support to improve the security of all Chi CDN-served assets. Chi assets now include an `integrity` attribute which contains a cryptographic hash used to validate the asset and ensure it has not been substituted with malicious code by an attacker.
### Documentation
#### Changed
* Changed: Installation page code snippets and boilerplates have been updated to include `integrity` and `crossorigin` attributes on scripts, stylesheets, and favicons for SRI support.

## 3.12.0 (March 11, 2021)
### Components
#### Added
* Added: Text input web component now supports the attribute `spinner` to let users know when information is saving or loading.
* Added: Icon `icon-bell-settings-outline`.
#### Changed
* Changed: Sidenav component now includes a slight delay before opening menus on hover to reduce unintentional activations.

## 3.11.0 (March 4, 2021)
### Components
#### Added
* Added: Marketing icon component to render Lumen full-color marketing icons.
#### Changed
* Changed: Popover component positioning has been improved to render more accurately in scenarios where the reference element is located within an overflow or narrow container.
### Documentation
#### Changed
* Changed: Copyright date in Footer component documentation has been changed from 2020 to 2021.
* Changed: Elements used to trigger tooltips in Tooltip documentation have been updated with more intuitive text.

## 3.10.0 (February 25, 2021)
### Components
#### Added
* Added: Link component to navigate between pages, locations within the same page, and more.
#### Fixed
* Fixed: Header collapsible search did not display correct styles if the text input was rendered as a web component.

## 3.9.0 (February 18, 2021)
### Components
#### Added
* Added: Icons `icon-circle-wrench`, `icon-date-alt`, `icon-spinner`, `icon-triangle-wrench`.
* Added: Header component now supports a collapsible search input.
* Added: Image utility to change the responsive behavior of image elements.
* Added: Text utility now supports coloring text orange with `-text--orange`.
* Added: Icon component now supports coloring icons orange with color value `orange`.
#### Changed
* Changed: Mobile navigation drawer target validation has been improved.
* Changed: Header component external links (Explore Lumen, Help, Contact Us) now open in a new window/tab.

## 3.8.0 (January 28, 2021)
### Components
#### Added
* Added: Focus utility to Chi.js to hide `:focus` outlines on links, buttons, and inputs if user is using a pointing device.
* Added: Popover now supports the attribute `closable` to render Popover components with a close button.
* Added: Icons `icon-edge-solutions`, `icon-edit-create`.
* Added: Overflow utility to control how content overflows an element.
* Added: Text utility now supports the class `-text--boldest` to render text with the boldest font-weight value available.
* Added: Date web component now supports the ability to change language.
* Added: Tooltip component now supports events `chiTooltipShow` and `chiTooltipHide`.
* Added: Popover Chi.js component now supports events `chiPopoverShow`, `chiPopoverHide`, `chiPopoverShown`, and `chiPopoverHidden`.
* Added: Drawer Chi.js component now supports events `chiDrawerShow`, `chiDrawerHide`, `chiDrawerShown`, and `chiDrawerHidden`.
* Added: Dropdown component now supports events `chiDropdownShow` and `chiDropdownHide`.
* Added: Data table now supports three level rows.
#### Changed
* Changed: Tab component has been updated with accessibility improvements including full keyboard navigation.
* Changed: Data table striped row behavior on child rows has been improved.
* Changed: Data table headers have been improved to better support table sorting.
* Changed: Time picker component has been updated with improved formatting and UX enhancements.
#### Fixed
* Fixed: Pagination buttons placed in a form triggered an unexpected submit due to a missing `type="button"` attribute.
* Fixed: Buttons in Card, Modal, and Expansion Panel footers did not automatically render margin between sibling web component buttons.
### Documentation
#### Added
* Added: Tooltip now includes an example for tooltips on disabled buttons.
* Added: Portal templates have been updated to include a new common table style with header cells in the top row and first column.
#### Fixed
* Fixed: Spinner button documentation examples contained an unnecessary closing div tag.

## 3.7.0 (January 14, 2021)
### Components
#### Added
* Added: Icons `icon-arrow-sort`, `icon-compose-cancel`.
#### Changed
* Changed: Icons `icon-compose`, `icon-edit`, `icon-edit-cancel`.
* Changed: Data table sort arrow icons now render slightly bolder.
### Documentation
#### Fixed
* Fixed: Accessibility documentation typos have been resolved.

## 3.6.0 (December 22, 2020)
### Components
#### Added
* Added: Time picker and Datetime picker components to allow users to enter a time through text input or choose a time from a picker.
* Added: Date Picker web component now supports `resetDate` method.
#### Changed
* Changed: Modal components with theme `-portal` now align buttons in `chi-modal__footer` to the right (Chi's default) instead of center.
* Changed: Picker group components with theme `-portal` now include a text color change on hover.
* Changed: Accordion components with theme `-portal` now render nested accordions with a border.
* Changed: Tab components with size class `-xs` no longer alter a tab items font-size, only padding. To alter font-size, please use the text size utility class `-text--xs` instead.
* Changed: Stat components with theme `-portal`, `-compact`, and info/help icons now include an alignment improvement to better support long metric titles.
### Documentation
#### Added
* Added: Accessibility documentation has been added to define how to make web content more accessible to people with disabilities.
#### Changed
* Changed: Tab components with theme `-portal` now render tab examples using the `-xs` size class instead of `-sm`.

## 3.5.0 (December 4, 2020)
### Components
#### Added
* Added: Flex utility now includes support for flex-basis to specify the initial size of flex items.
* Added: Stat components with theme `-portal` now include `-compact` support for displaying KPIs when vertical space is limited.
* Added: Flag icon component to render Lumen country/region flag icons.
* Added: Popover component now supports opening on hover.
* Added: Range slider E2E tests.
#### Changed
* Changed: Stat components with theme `-portal` now render active items with black text instead of white for color contrast compliance.
* Changed: Footer internal has been updated with improved footer link styles and a new language drop down design.
### Documentation
#### Added
* Added: Portal Templates section now includes examples for Accordion, Data Table, and Drawer.
#### Changed
* Changed: Duplicate IDs detected on the following pages have been changed: Accordion, Data Table, Card, Checkbox, Dropdown, Expansion Panel, Footer, Header, Sidenav, and Stat.
* Changed: Unnecessary IDs in Toggle switch example code have been removed.
#### Fixed
* Fixed: Table documentation examples with theme `-portal` were missing size class `-sm`.

## 3.4.0 (November 13, 2020)
### Components
#### Added
* Added: Accordion component to toggle between showing and hiding content.
* Added: Data table component to present data sets in a simple and organized way. Unlike standard HTML tables, data table is responsive and compatible with all screen sizes.
* Added: Modal JavaScript now supports chiModalShown and chiModalHidden event emission.
* Added: Picker and Picker group now support styles for disabled states.
* Added: Number input now supports styles for required states.
#### Changed
* Changed: Tooltip animation is now more subtle based on UX feedback.
* Changed: Badge component now supports text size utility classes.
* Changed: Radio button, Checkbox, and Toggle switch styles have been simplified to reduce size of chi.css.
* Changed: Label wrappers `chi-label__wrapper` can now be rendered outside of `chi-form__item` to support forms with `legend` tags.
* Changed: File input disabled state is now consistent with button disabled state.
* Changed: Number input expanded disabled state is now consistent with button disabled state.
* Changed: Number input no longer renders semantic border and focus colors when disabled.
* Changed: Text input, Textarea, Number input, and Date picker disabled text color has been updated.
* Changed: Tabs with class -vertical and -portal now render first level tab items with a min-height.
#### Fixed
* Fixed: Base Number input did not support disabled button styles in min/max scenarios.
* Fixed: Sass lint warnings have been resolved.
### Documentation
#### Added
* Added: Radio button documentation now includes examples for Base, Checked, Disabled, Required, Optional, Help, and Error.
* Added: Select documentation now includes examples for Required, Optional, Help, Message, and Error.
* Added: Picker group documentation now includes examples for Checked, Disabled, Required, Optional, Help, and Error.
* Added: Picker documentation now includes examples for Checked, Disabled, Required, Optional, Help, and Error.
* Added: Number input documentation now includes examples for Min, Max, Step, Required, Help, Message, and Error.
* Added: Tab documentation now includes examples for all horizontal and vertical sizes.
#### Changed
* Changed: Header portal documentation examples now include tooltips on icon buttons.
* Changed: Chi version check banner alert color has been changed to appear more prominent.
#### Fixed
* Fixed: Tab documentation used same ID for three different tab examples.

## 3.3.0 (October 30, 2020)
### Components
#### Added
* Added: Form inputs now support Help icon buttons to display helpful information about an input in a popover.
* Added: Checkbox now supports a danger state for providing error feedback to users when validation fails.
* Added: Text input and Textarea now support the readonly attribute to prevent users from changing their value.
* Added: Textarea now supports the placeholder attribute to provide users with an example of the type of data that can be entered into an input.
* Added: Icons `icon-compose`, `icon-reload`.
* Added: Progress component now includes web component support.
* Added: Dropdown component now includes cypress tests.
* Added: Mobile navigation now includes cypress tests.
* Added: Modal now includes cypress tests.
* Added: Popover now includes cypress tests.
* Added: Tabs now includes cypress tests.
#### Changed
* Changed: Checkbox display from block to flex to support required and help states.
* Changed: Form items with -row layout now apply a padding-right to child input labels to eliminate need for a spacing utility class.
* Changed: Form items with label wrapper now style icons using a child combinator instead of a descendant combinator to support help icon buttons.
* Changed: Icons `icon-circle-reload` and `icon-circle-reload-outline` have been updated for consistency with `icon-reload`.
* Changed: Select component class has been renamed from `chi-input` to `chi-select`.
* Changed: File input component class has been renamed from `chi-input` to `chi-file-input`.
* Changed: Range slider component class has been renamed from `chi-input` to `chi-range-slider`.
* Changed: Text input component styles have been optimized to reduce chi.css file size.
* Changed: Button group component styles have been optimized to reduce chi.css file size.
#### Fixed
* Fixed: Label required asterisk color no longer fails color contrast test.
* Fixed: Textarea web component specific styles were not loading due to an incorrect :host() pseudo-class.
* Fixed: Alert content text was not wrapping correctly in IE11.
* Fixed: Brand web component skeleton was rendering with the width and height values of CenturyLink logo instead of Lumen logo.
* Fixed: Button web component skeleton rendered with an inconsistent display property that caused skeletons to stack instead of rendering inline.
* Fixed: Button web component skeleton was not respecting icon button sizes.
* Fixed: Progress web component skeleton rendered with a margin that caused the component to jump after preloading. 
### Documentation
#### Added
* Added: Installation page now includes framework specific boilerplates for Vue, Stencil, Angular, and React.
* Added: Checkbox documentation examples for: Checked, Required, Help, Message, Error, and Grid.
* Added: Text input documentation examples for: Readonly, Placeholder, Required, Optional, Help, Message, and Error.
* Added: Textarea documentation examples for: Readonly, Placeholder, Required, Optional, Help, Message, and Error.
* Added: Textarea documentation examples for Layout Variations.
* Added: Portal templates page now includes an example for alert Modals.
#### Changed
* Changed: Checkbox documentation code samples have been improved.
* Changed: Text Input documentation code samples have been improved.
* Changed: Textarea documentation code samples have been improved.

## 3.2.0 (October 20, 2020)
### Components
#### Added
* Added: Vertical-align utility for customizing the vertical alignment of inline and table cell elements.
* Added: Opacity utility for customizing an elements opacity level.
* Added: Backstop and Cypress tests for Label component.
#### Changed
* Changed: Base button icon color has been changed from $color-text-base (Grey 100) to $color-icon-base (Grey 80).
* Changed: Toggle switch component no longer displays a margin-top when chi-label is present.
* Changed: Sidenav component Cypress tests have been improved.
#### Fixed
* Fixed: Vertical alignment of Toggle switch and Number input web component has been improved.
### Documentation
#### Added
* Added: Portal templates now include an example for portal themed icon buttons.

## 3.1.1 (October 9, 2020)
### Components
#### Changed
* Changed: Stat component portal theme now includes a min-height.
* Changed: Badge component now renders in a pill shape to visually differentiate them from buttons.
* Changed: Badge component now includes a min-width for rendering single characters consistently.
* Changed: Table striped rows from odd to even for consistency with enterprise portals.
* Changed: Flex utility overrides now include an !important for greater specificity.
* Changed: Number input width has been updated for better compatibility with Grid.
#### Fixed
* Fixed: Picker group bug which prevented child items from stretching to fill their parent containers vertical space.
* Fixed: Sidenav cypress test click inconsistency when running tests in cypress GUI.
* Fixed: Picker group active item rendered an incorrect background-color on hover.
* Fixed: Number input web component min/max adjustment when user changed value manually twice.
### Documentation
#### Added
* Added: Dropdown JS component now includes documentation for methods.
* Added: Modal JS component now includes documentation for methods.

## 3.1.0 (September 22, 2020)
### Components
#### Added
* Added: Text utility now supports responsive text heading size utility classes.
* Added: Text utility now supports the text color utility class `-text--navy`.
#### Changed
* Changed: Button disabled state styles.
#### Fixed
* Fixed: Popover web component chiPopoverShown and chiPopoverHidden event emission.
* Fixed: Picker group bug which prevented text from wrapping properly.
### Documentation
#### Added
* Added: Documentation for disabled button state to button component.

## 3.0.0 (September 13, 2020)
### Components
#### Added
* Added: Button component now supports rendering button labels with uppercase text.
* Added: Color utility now supports background-color classes for new brand colors.
#### Changed
* Changed: All colors have been updated to comply with new brand guidelines.
* Changed: Sass color variable naming convention has been updated to support rebrand.
* Changed: All text instances of CenturyLink to Lumen to support rebrand.
* Changed: Buttons now render with a border-radius.
* Changed: Button hover and active state text, border, and background colors.
* Changed: Buttons now render child icons one shade lighter than text.
* Changed: Button groups now render with a border-radius.
* Changed: Badges now render with a border-radius.
* Changed: Badges now render child icons one shade lighter than text.
* Changed: Card header and content background-color for portal themed cards.
* Changed: Drawer portal theme colors to support rebrand.
* Changed: Dropdown menu active item background-color from none to light blue.
* Changed: Header portal theme has been updated to comply with new brand guidelines.
* Changed: Header navbar has been updated to comply with new brand guidelines.
* Changed: Input focus color to support rebrand.
* Changed: Modal portal theme colors to support rebrand.
* Changed: Pickers now render with a border-radius.
* Changed: Picker groups now render with a border-radius.
* Changed: Popovers now render with a border-radius.
* Changed: Sidenav base theme colors have been updated to comply with new brand guidelines.
* Changed: Stat portal theme has been updated to comply with new brand guidelines.
* Changed: Step border and text colors to support rebrand.
* Changed: Table background-colors for portal theme, base active state, and semantic states.
* Changed: Tab inverse active color to support rebrand.
* Changed: Tooltips now render with a border-radius.
* Changed: Social media icons `icon-logo-facebook`, `icon-logo-linkedin`, `icon-logo-twitter`, `icon-logo-youtube`.
#### Breaking changes
* Removed: Avatar component no longer supports the color `mint`.
* Changed: Brand logo and sizes have changed to support rebrand.
* Removed: Card component no longer supports the alternate active color class `-active--alt`.
* Removed: Divider component no longer supports `-colorbar` due to rebrand.
* Removed: Dropdown menu no longer supports `-inverse` theme due to rebrand.
* Changed: Footer style, content, and classes have updated to support new brand guidelines.
* Removed: Sidenav component no longer supports `-inverse` theme due to rebrand.
* Removed: Table component no longer supports `-inverse` theme due to rebrand.
* Removed: Color utility no longer supports background-colors `-bg--inverse`, `-bg--blue-60`, `-bg--blue-70`, `-bg--blue-80`, `-bg--blue-90`, `-bg--teal` due to rebrand.
* Changed: Color utility background values now include !important for specificity.
#### Fixed
* Fixed: Breadcrumb separator icons are now vertically aligned more accurately.
* Fixed: Header no longer renders margin-right on Brand when it's the last child.
### Documentation
#### Added
* Added: Design tokens documentation.
#### Changed
* Changed: All text instances of CenturyLink to Lumen to support rebrand.
* Changed: Colors have been updated to support rebrand.
* Changed: Favicon has been update to comply with new brand guidelines.

## 2.7.0 (August 18, 2020)
### Components
#### Added
* Added: Icons `icon-login`, `icon-warning-outline`.
#### Changed
* Changed: Icons `icon-logout`, `icon-circle-alert-outline`, `icon-circle-alert`.

## 2.6.0 (August 14, 2020)
### Components
#### Added
* Added: Icons `icon-user-settings`.
* Added: Tabs now supports the theme `portal` for rendering portal themed Tabs.
#### Changed
* Changed: Steps styles have been updated for better consistency with Enterprise Portal use cases.

## 2.5.1 (August 13, 2020)
### Components
#### Changed
* Changed: Removed margin top from Picker and Picker group components.
#### Fixed
* Fixed: Removed disposing of Drawers associated with Sidenav.
* Fixed: Pagination chiPageChange event.

## 2.5.0 (August 4, 2020)
### Components
#### Added
* Added: Toggle switch now supports the size `xs` for rendering extra small toggle switches.
* Added: Added: Drawer now supports the theme `portal` for rendering portal themed Drawers.
* Added: Added: Stat component for rendering performance indicators in dashboard UIs.
* Added: Added: Mobile navigation component for rendering responsive multi-level navigation in mobile views.
#### Changed
* Changed: Improved Sidenav and Drawer component dispose methods.
* Changed: Updated Dayjs to version 1.8.31.
#### Fixed
* Fixed: Drawer component show/hide behavior.

## 2.4.1 (July 16, 2020)
### Components
#### Added
* Added: Icons `icon-api`, `icon-file-export`, `icon-table-column-settings`, `icon-table`.
#### Changed
* Changed: Icons `icon-phone`, `icon-shield`.
* Changed: Alert banner padding and border styles have been fine-tuned to achieve portal-styled alerts with minimal border utility classes.
### Documentation
#### Changed
* Changed: Drawer close button documentation text has been improved.

## 2.4.0 (July 10, 2020)
### Components
#### Added
* Added: Sidenav now supports opening on hover.
* Added: Sidenav now renders chevron icons on second-level menu items to illustrate when a third-level menu is available.
* Added: Icons `icon-handshake`, `icon-thumbtack-angle`, `icon-voip`.
#### Changed
* Changed: Icon semantic color values to brighter shades.
* Changed: Icon colors are now defined using icon utility color classes (e.g. `-icon--primary`) instead of text utility color classes (e.g. `-text--primary`).
* Changed: All component semantic states have been updated to render with new brighter semantic colors.
* Changed: Alert banners no longer render with a bottom border.
#### Fixed
* Fixed: Icon font face chi.eot error in Internet Explorer.
* Fixed: Icon bug which displayed the SVG for icon-check-alt in place of icon-check.
* Fixed: Steps component active step was slightly misaligned in IE11.
### Documentation
#### Added
* Added: Color utility now includes documentation for customizing the color of icons.
#### Changed
* Changed: Color foundation has been updated with new semantic colors and usage guidelines.
* Changed: Icon documentation now includes usage guidelines for brand and semantic colors.
* Changed: Spinner documentation now includes usage guidelines for brand and semantic colors.
* Changed: Text utility documentation now includes usage guidelines for brand and semantic colors.
* Changed: Color utility documentation now includes usage guidelines for brand, brand complimentary, neutral, and semantic colors.
* Changed: All icons throughout docs have been changed from using text utility color classes to icon utility color classes.
#### Fixed
* Fixed: Some Header documentation examples did not match code samples.
* Fixed: Template for authentication included an unnecessary size class that was causing alert content to misalign.

## 2.3.0 (June 19, 2020)
### Components
#### Added
* Added: Border utility now supports the color transparent to hide an elements border without altering its size.
* Added: Icons `icon-attachment`, `icon-autopay`, `icon-print`, `icon-ticket-wrench`, `icon-user-outline`
* Added: Tooltip now supports white tooltips for rendering on dark themes.
#### Changed
* Changed: Tooltip styles have been updated to appear less like dropdown menus.
* Changed: Tooltip now renders with a 0.5s delay by default.
* Changed: Modal portal theme shadow and header background-color have been updated to reflect latest designs.
* Changed: Backdrop portal theme has been removed. Portal has adopted Chi's default theme. The class `-portal` is no longer necessary on `chi-backdrop`.
* Changed: Icons `icon-address-book`, `icon-arrow-to-bottom`, `icon-user`, `icon-users`, `icon-visible-off`, `icon-visible`, `icon-x-alt`
#### Fixed
* Fixed: Popover web component did not flip arrows correctly when space was insufficient.

### Documentation
#### Added
* Added: Border utility documentation now includes usage guidelines for each example.
* Added: Card documentation now includes usage guidelines for Portal themed cards.
#### Changed
* Changed: Border utility examples have been improved.
* Changed: Tooltip documentation has been improved.
* Changed: Backdrop portal theme class has been removed from backdrop examples.
* Changed: Development workflow documentation has been improved.
#### Fixed
* Fixed: Badge documentation incorrectly referred to the default variant value as base instead of solid.

## 2.2.0 (June 9, 2020)
### Components
#### Added
* Added: Text Input web component.
* Added: Textarea web component.
* Added: Pagination now supports configuring the number of items per page, jumping to a specific page, displaying number of results, truncating, first and last page buttons, and a new compact view for data tables.
* Added: Pagination web component.
* Added: Table now supports table headers with two tiers.
#### Changed
* Changed: Popover arrow, border, and shadow for better compatibility with maps.
* Changed: Tables with Inverse theme now render active rows with an 8% mint 40 background-color.
* Changed: Tables with Portal theme now render hover row behavior by default. Applying the class `-hover` is no longer necessary.
* Changed: Drawer web component now closes when backdrop is clicked.
#### Fixed
* Fixed: Tables with Inverse theme rendered an incorrect `th` background-color when `th` was fixed positioned with `-fixed--header`.
* Fixed: Table header cells now render correctly when placed outside of thead.
* Fixed: Tables with Inverse theme rendered incorrect border-color and border-width when class `-bordered` was applied.
* Fixed: Tooltip show hide behavior.
* Fixed: Date Picker disabled state pointer events.

### Documentation
#### Added
* Added: Text Input documentation has been updated with web component examples.
* Added: Textarea documentation has been updated with web component examples.
* Added: Pagination documentation has been updated with new html blueprint and web component examples.
* Added: Number input html blueprint code samples now include label tags.
* Added: Table documentation has been updated with an example for table headers with two tiers.
* Added: Table documentation for Base state.
#### Changed
* Changed: Drawer documentation example code has been improved.
* Changed: Modal and Expansion panel examples no longer require the margin utility class `-ml--2` on footer buttons.
#### Fixed
* Fixed: Drawer properties page was missing documentation for `preventAutoHide`.
* Fixed: Hash target validation bug which caused the class `-active` to remove from tabs outside of `docs-article`.
* Fixed: Version variable typo in header.

## 2.1.0 (May 8, 2020)
### Components
#### Added
* Added: Dropdown menu now supports the class `-inverse` for dark themed menus.
* Added: Dropdown menu now supports predefined width classes: `-w--sm`, `-w--md`, `-w--lg`, `-w--xl`.
* Added: Icons to support portal header: `icon-bell-outline`, `icon-bell-off-outline`.
* Added: Icons to support portal pagination: `icon-page-first`, `icon-page-last`.
* Added: Header blueprint for impersonation.
* Added: Divider now supports applying `-inverse` to `-vertical` dividers.
* Added: Label web component.
#### Changed
* Changed: Base font from Open Sans to Inter.
* Changed: Icons to support portal header: `icon-bell`, `icon-bell-off`, `icon-circle-question`, `icon-circle-question-outline`, `icon-logout`.
#### Fixed
* Fixed: Sizing utility values did not have enough specificity to override default component sizes.
* Fixed: Sizing utility for width auto was not working.
* Fixed: Header container `chi-header__start` was not rendering dropdown menus correctly due to an overflow:hidden.
* Fixed: Modal footer buttons were not rendering with sufficient space between buttons.
* Fixed: Modal content font-size and line-height did not align with Chi's base font and line-height.

### Documentation
#### Added
* Added: Header has been updated with a new example for impersonation.
* Added: Label documentation with examples for size, required, optional, and more.
#### Changed
* Changed: Headers for portal now include functional inverse drop down menus.
* Changed: Removed Design Kit button from docs sidenav.
#### Fixed
* Fixed: Modal code samples were missing trigger and javascript example code.
* Fixed: Pagination code samples which contained icon buttons were missing the `-icon` class on `chi-button`.
* Fixed: Pagination code samples which contained icon buttons were missing the `chi-button__content` container in `chi-button`.

## 2.0.0 (April 23, 2020)

### Components
#### Breaking changes
* Renamed: All component class prefixes for consistency with Chi's web component names. (e.g. `a-icon` is now `chi-icon`).
* Renamed: All legacy camel case classes to kebab case (e.g. `-floatingLabel` is now `-floating-label`).
* Renamed: Text utility size classes for consistency (e.g. `-text--smaller` is now `-text--xs`).
* Renamed: Alert close CSS classes from `dismiss` to `close` (e.g. `m-alert__dismiss-button` is now `chi-alert__close-button`).
* Renamed: Number input component container from `m-input__wrapper` to `chi-number-input`.
* Renamed: Number input Expanded component container from `m-inputNumber` to `chi-number-input -expanded`.
* Changed: Number input sizes (e.g. `-sm`) are now declared on the component container `chi-number-input` instead of the input.
* Changed: Card content `chi-card__content` now displays as flex column by default for consistency with primary use cases. Flex column utility classes no longer need to be applied.
#### Added
* Added: Icons to support Enterprise ticketing portal use cases (`icon-filter`, `icon-flag`, `icon-paste`).
* Added: Consistent 508/WCAG compliant focus state to all Button and Form components.
* Added: Sizing utility now supports width increments of 5% for more control over Enterprise Portal table columns (e.g. `-w--45`).
* Added: Skeleton loaders to web components which provide users with an indication that content is loading.
* Added: Popover now supports footers to store actions such as links and buttons.
* Added: Breadcrumb now supports five size classes (e.g. `-xs`, `-sm`) to render the component larger or smaller.
* Added: Tabs now support the ability to mark specific tab links as disabled with class `-disabled`.
* Added: Text utility heading size classes `-text--h1` - `-text--h6` to render text with h1-h6 heading tag styles.
* Added: Card content now supports the child element `chi-card__caption` as a more consistent way of storing card captions.
* Added: Card now supports the class `-align--center` to flex center align all child elements for Enterprise Portal KPI style cards.
* Added: Card now supports the class `-hover--animate` to animate a KPI style card on hover.
* Added: Card now supports the class `-no-border` to render cards without a border.
* Added: Button now supports turning off `-flat` button hover states with the class `-no-hover`.
#### Changed
* Changed: Checkbox and Radio Button border width for better consistency with Consumer and Enterprise Portal use cases.
* Changed: Button base hover and active state color for better consistency with Consumer and Enterprise Portal use cases.
* Changed: Sidenav has adopted Enterprise Portal's design as the base design for the component. Specifying the class `-global-nav` is no longer necessary.
* Changed: Pagination styles have been updated for better consistency with Enterprise Portal use cases.
* Changed: Progress component base color from semantic green to primary blue for brand consistency.
* Changed: Date picker dates in calendar now render with a normal font-weight when unselected, and a semi-bold font-weight when selected.
* Changed: Date picker web component now renders icons using Chi's Icon web component.
* Changed: Card footers now space buttons automatically using a CSS adjacent sibling combinator.
* Changed: Alert and Popover web component (beta) mutation observer.
* Changed: Drawer web component (beta) is now closable by default (primary use case). Added support for `non-closable` property to render without a close button.
* Renamed: Alert web component (beta) close property from `dismissible` to `closable` for consistency.
* Renamed: Alert web component (beta) no border property from `borderless` to `no-border` for consistency.
* Renamed: Drawer web component (beta) no header property from `headless` to `no-header` for consistency.
* Renamed: Expansion panel web component (beta) title property from `heading` to `title` for consistency.
#### Fixed
* Fixed: Dropdown bug which failed to toggle some dropdowns using the data-target method.
* Fixed: Date picker web component bug which caused 24px of whitespace to render below the input.
* Fixed: Sidenav behavior when menu items have no association to a Drawer.
* Fixed: Sidenav IE11 compatibility issues.
* Fixed: Accessibility warning in Drawer web component due to skipped heading level.
* Fixed: Accessibility error in Number input web component due to missing label.
* Fixed: Expansion panel step numbers did not hide all step number related margins on xs viewports.
* Fixed: Expansion panel step numbers could not be turned off on all viewports without the use of margin utilities.
* Fixed: Expansion panel -bordered panels rendered large gap of whitespace between header and content.
* Fixed: Picker groups with icons were rendered with a 4px smaller height than those without icons.
* Fixed: Picker height was inconsistent with height of size class -md (base size).
* Fixed: Alert icons rendering squished on small viewports.
* Fixed: File Input button padding was not consistent with button component.

### Documentation
#### Breaking changes
* Changed: Consolidated all documentation from /javascript and /custom-elements sections into /components to improve usability.
#### Added
* Added: Designed new introduction page to better explain Chi and what it provides.
* Added: Tabs to all documentation code samples that allow toggling between blueprint code and framework code.
* Added: Property tab to each component page to store properties, events, methods, and more.
* Added: Accessibility tab to each component page to store accessibility guidelines and best practices.
* Added: CenturyLink favicon to Documentation website.
* Added: Drawer documentation example to illustrate the use of the title property.
* Added: Text Utilities have been updated with new documentation for text sizes and headings.
* Added: Card examples that illustrate new behavior: No border, Align center, Animate on hover.
#### Changed
* Changed: Removed Icon SVG sprite method (chi-icons.js) from Icon page in favor of Web Component and Web Font methods.
* Changed: Unified icons in all documentation examples with web fonts for HTML Blueprints and web component icons for Web Components.
* Changed: Popover documentation has been updated with new examples.
* Changed: Moved Development Workflow information to dedicated page within Getting Started.
* Changed: Documentation content containers from divs to more semantic tags (`main`, `nav`, `header`, `article`).
* Changed: Improved component descriptions for Date picker, Expansion panel, Icon, Popover, and Grid.
* Changed: Improved invalid form examples for Text Input, Textarea, and Select.
#### Fixed
* Fixed: Styles and logic for anchoring headings within documentation pages.
* Fixed: Bug related to -active class management when navigating to an anchor element within documentation tabs.
* Fixed: Some Expansion panel documentation code samples did not match examples.
* Fixed: Corrected several classes on the Text Utilities page which included a period.

## 1.4.2 (February 27, 2020)

* Fixed bug in Grid component which caused grid columns to render incorrectly in IE11.
* Fixed bug in Picker and Picker Group component which prevented users from navigating the components with tab and arrow keys.
* Fixed rendering bug in Badge custom element.
* Fixed bug in Footer component which caused the brand element to misalign in IE11.
* Fixed bug in Picker Group component which caused some icons to render without sufficient margin in IE11.
* Fixed bug in Spinner component which caused spinners to render slightly vertically misaligned in IE11.
* Fixed bug in Floating Label component which caused placeholder text to render slightly vertically misaligned in IE11.

## 1.4.1 (February 21, 2020)

* Added new icons for enterprise navigation (icon-chart-line, icon-circle-user, icon-file-invoice, icon-inbox, icon-wrench).
* Added background color utility for CenturyLink Dark Blue color swatch.
* Improved selection behavior at all navigation levels in Enterprise Global Nav.
* Improved Card component markup for better customization of icons.
* Fixed bug in Icon web component which was missing color support for grey and secondary colors.
* Added license comment to Chi scripts and CSS.
* Added Gulp watch to Chi's documentation website/layouts folder.
* Fixed bug in documentation to improve navigating to the latest Chi version from older Chi versions.

## 1.4.0 (February 5, 2020)

* Added Enterprise Global Navigation example to Sidenav component.
* Added Enterprise Global Header example to Header component.
* Added Portal theme to Table component.
* Added Portal theme to Modal component.
* Added Portal theme to Card component.
* Added -xs size modifier to Tab component.
* Added breakpoint spec to Grid documentation.
* Removed border-radius from all components for consistency with Brand guidelines.
* Improved Table component by enabling size classes on both the table and the tr.
* Added ability to exclude dates in Date picker component.
* Added new icon for indicating external links (icon-external-link).
* Fixed bug in Date picker component which failed to launch the picker when clicking the calendar icon.
* Fixed missing form label accessibility error in Date picker documentation example.
* Fixed module export parsing error in build process.
* Fixed non-functional tabs in Button Group size documentation example.
* Changed drop down item hover color in Dropdown component for consistency with Brand guidelines.
* Fixed SASS lint errors.
* Fixed title attribute removal bug in build process.
* Fixed bug in documentation which was caching Chi's versions.json data.
* Fixed accessibility warnings in Sidenav and Tab documentation examples.
* Fixed disable scroll behavior in Modal and Drawer component.
* Changed form focus color for consistency with Brand guidelines.
* Updated all color values in Chi's Teal color ramp for consistency with Brand guidelines.
* Updated Toggle switch component markup to fix empty form label accessibility error.
* Fixed accessibility warnings and errors in Picker and Picker Group component.
* Fixed bug in IE11 which caused the Drawer component close button to render incorrectly.

## 1.3.0 (November 21, 2019)

* Added search functionality to Chi documentation portal.
* Updated Alert component with new design to support additional use cases.
* Added inverse theme support to Tab component.
* Updated Backdrop wrapper used by Modal, Spinner, and Drawer components to improve responsive and scrolling behavior on small viewports.
* Changed Modal components default vertical placement to top and added -center class for vertical centering.
* Updated Form components with consistent method for displaying Labels in various positions.
* Updated Form components with method for displaying Icons and other content inline with Labels.
* Fixed bug in Tab component which positioned dropdown arrows incorrectly when tab size was set to -lg.
* Changed Badge component size values from small to sm and smaller to xs for consistency.
* Changed Brand web component color attribute from type to color for consistency.
* Added new icons for expanding and collapsing content (icon-square-minus-outline, icon-square-minus, icon-square-plus-outline, icon-square-plus).
* Added new icon to help indicate when edit capabilities have been disabled/canceled (icon-edit-cancel).
* Added new social media icons (icon-logo-facebook, icon-logo-linkedin, icon-logo-twitter, icon-logo-youtube).
* Added disabled support to Date picker component.
* Improved responsiveness of Chi Documentation nav.
* Improved Popover web component reference validation error message.
* Updated backstop tests.
* Fixed SASS linting.
* Fixed accessibility errors in Button component which rendered Icon buttons without a label.
* Fixed accessibility warnings in Documentation which rendered pages with skipped heading levels.
* Fixed accessibility color contrast errors in Avatar, Badge, Divider, Expansion panel, and Text Input components.
* Updated Checkbox component markup to fix multiple form label accessibility errors.
* Updated Radio Button component markup to fix multiple form label accessibility errors.
* Fixed accessibility errors in Date picker component related to duplicate IDs.
* Improved Card, Modal, and Popover component markup with more semantic html elements.
* Fixed missing form label accessibility errors in Documentation form examples.
* Fixed accessibility warnings in Documentation related to redundant navigation links.
* Fixed accessibility warnings in Documentation examples related to suspicious link titles.

## 1.2.5 (October 15, 2019)

* Added Dark version of Sidenav component for Enterprise portals.
* Added small, medium, and large size support to Sidenav component.
* Updated Card component documentation with common Dashboard KPI example.
* Removed unnecessary font-family property from Button component which conflicted with the font-family defined on root.
* Added icon support to Picker Group component.
* Updated Drawer component javascript documentation with methods.
* Updated documentation with a version check to alert users when a new version is available.
* Fixed Steps component link color inconsistency in base light version.
* Updated Header component documentation with Enterprise Portal header example.
* Updated Grid component documentation with base grid guidelines.
* Updated Dropdown component trigger margin.
* Updated Progress component bar height.

## 1.2.4 (September 12, 2019)

* Added responsive behavior to Picker Group component.
* Fixed bug in Text Input component which failed to style all available HTML5 input types.
* Fixed bug in Expansion panel component that prevented long text strings from wrapping.
* Updated Divider component Color Bar proportions.
* Added Color utility for muted backgrounds.
* Added support for centering bubble alerts with new utility class.
* Updated base Steps component disabled color.
* Added !important to shadow utility values.
* Added default color value to o-header__title in Header component.
* Fixed Steps component bug in IE which caused step numbers to misalign.
* Replaced modal back SVG icon with Chi web font icon for easier theming.
* Fixed Steps component bug which was not reseting default browser padding and margin on ul element.
* Added 720px max width to Sizing utility.
* Improved responsive behavior of Footer component.
* Fixed bug in Drawer component which caused the close icon to scroll with content.
* Fixed bug in Drawer component which caused the drawer to unexpectedly close.

## 1.2.3 (July 10, 2019)

* Fixed Icon bug which prevented several web font icons from loading.
* Added new solid and outline Icons for: Cart, Circle Info, Circle Question, Comment, Comments, Database, Home, Mail, Wifi.
* Fixed Dropdown component bug which prevented the trigger icon from rendering correctly on non-base buttons.
* Fixed bug which scrolled the underlying body content when a Drawer or Modal was open.
* Improved Header component responsive behavior.
* Fixed line-height of base Textarea.
* Added new background color utilities.
* Fixed bug which sized Spinner components incorrectly when placed inside Modals.
* Fixed incorrect documentation example code for Tooltips and Date pickers.
* Fixed Step component bug which colored non-active inverse step lines mint instead of grey.
* Added Picker Group component.
* Removed margin-right from Toggle switch component.
* Updated Number input component widths to support more digits by default.
* Added !important to utility values to allow overriding component styles.

## 1.2.2 (June 7, 2019)

* Added text and background utility for CenturyLink's primary grey.
* Added support for -muted to Alert component.
* Removed support for -light and -dark from Alert component.
* Fixed Expansion panel component bug which failed to apply active styles to active panel step numbers.
* Updated Footer component with correct legal links.
* Updated base Header and Footer components to use the black Brand logo for consistency with dot com.
* Fixed Icon Button bug which rendered incorrect padding on :active when a size class was defined.
* Fixed Tab component animation which was buggy on -lg sized horizontal tabs.
* Created chi alias to run all development environment commands.
* Fixed wrapping and margin bugs in documentation examples.
* Renamed text color utility from -text--inverse to -text--light.
* Added new reference images for BackstopJS regression tests.
* Updated development environment tasks to run in Docker.
* Fixed responsive behavior in Activity component.
* Updated Authentication templates with Floating Label Input component.
* Improved design of disabled icon buttons to look more disabled.

## 1.2.1 (May 17, 2019)

* Fixed Sidenav animation.
* Fixed Activity lint warnings.

## 1.2.0 (May 16, 2019)

* Added Javascript Modal component.
* Added ability to close Modal component via escape key.
* Fixed margin misalignment bug in Modal component.
* Added scrolling support to Modal component.
* Removed forced text-transform from Modal title.
* Added support for CenturyLink's Color Bar brand element to Divider component.
* Fixed IE11 content misalignment bug in Header component.
* Added Activity component.
* Added support for Warning styles to Badge component.
* Updated Icon component with new arrow icons.
* Renamed grey Badge style from Light to Muted.
* Added new Light Badge and Button style for use on black backgrounds.
* Fixed IE11 text overflow bug in Picker component.
* Fixed IE11 tab display bug in Sidenav component.
* Fixed bug in Button component where outline button background was set to white instead of transparent.
* Fixed bug in Button component where outline button secondary hover icon color wasn't inheriting text color.
* Added anchor link support to all sections within Documentation.
* Added State template to illustrate common user and application states.

## 1.1.1 (March 29, 2019)

* Fixed vertical nav tab active state.
* Fixed padding on header mobile.

## 1.1.0 (March 28, 2019)

* Added support for solid white and solid black logos to brand component.
* Added label examples to text input and textarea documentation.
* Added Fieldset template.
* Added sidenav component which emulates Cyclops's Main Nav component.
* Added date picker component.
* Improved truncating logic in Tooltip component to support more characters.
* Added popover component.
* Added pagination component.
* Added tooltip component.
* Updated Tab component size classes from -large and -small to the more consistent, -lg and -sm.
* Fixed browser sync issues in dev environment.
* Added subtitle support to modal component.
* Fixed line-height bug in Floating Label component.
* Fixed toggle switches from incorrectly wrapping within Card components.
* Added fluid support to Button component.
* Removed white background from outline button hover states.
* Fixed text input and select input padding inconsistency.
* Added floating label support to Select component.

## 1.0.0 (February 22, 2019)

* Updated colors to comply with new guidelines from brand team.

## 0.9.1 (January 23, 2019)

* Added progress component.
* Fixed bug in Range Slider component which prevented tooltips from rendering in IE.
* Added Footer component.
* Added dropdown and responsive support to Tab component.
* Updated Position utility with fixed-bottom and fixed-top support.
* Added concept of grouping to Checkbox and Radio button components.
* Added Picker component.
* Added horizontal label support to Steps component.
* Updated Button component color definition logic in preparation for the rebrand.
* Updated javascript components to remove redundancies and instantiate consistently.
* Updated Dropdown component to include the ability to initiate on hover.
* Added empty and active states to Card component.
* Added Range slider javascript component.
* Fixed bug in Button component which colored icons in inverse buttons incorrectly.
* Added Expansion panel javascript component.
* Added Price component.
* Fixed bug in Drawer component which prevented some drawers from animating.

## 0.9.0 (December 4, 2018)

* Updated Header component to support black backgrounds.
* Updated Brand component to support rendering on black backgrounds.
* Updated font-size of tab component to match Chi's base font-size.
* Added Tooltip javascript component.
* Updated Tab component to include hover state.
* Updated input alignment notation.
* Fixed flat button bug which prevented the ability to override the button padding with a utility class.
* Added version dropdown to documentation.
* Added Changelog page to documentation.
* Added Floating Label javascript component.
* Added Steps component.
* Added new Number input component.
* Migrated javascript Tabs component into the new Chi core javascript library.
* Added javascript Drawer component.
* Added Z-index utility.
* Added browser support page to documentation.
* Added new text color utilities for base/body text and white text.
* Updated documentation examples to reference new utility notation.
* Added copy to clipboard functionality to all documentation examples.
* Added Drawer component.
* Updated Button component to support a larger set of sizes.
* Fixed Display utility bug which targeted single breakpoints instead of specific breakpoint + larger.
* Added javascript Dropdown component.
* Updated Alert component to enable more flexibility with icons, header sizes, and alignment.

## 0.8.3 (October 26, 2018)

* Updated grid utility notation.
* Updated text utilities notation.
* Added Dropdown component.
* Added Templates section to documentation with Sign In and Error 500 layout examples.
* Added Color utility.
* Added responsive support to Border utility.
* Added responsive support to Shadow utility.
* Added Sizing utility.
* Added responsive support to Spacing utility.
* Added -pill support to Button component.
* Added Position utility.
* Added Header component.
* Removed unnecessary xs breakpoint from display and flex utilities.
* Updated Modal component to allow close buttons to render outside of a-modal__header.
* Improved color documentation.
* Added Brand component.
* Added Divider component.
* Fixed bug that prevented adding buttons to Alert components.
* Renamed a-formGroup to m-formGroup.
* Added Spinner component.
* Added Avatar component.

## 0.8.2 (October 2, 2018)

* Extended tab functionality by creating tabbable panes of content and animating active tab borders.
* Updated Badge component to include icon support.
* Added Icon component with SVG and Web font support.
* Added Getting Started section.
* Improved compatibility with Edge and IE11.
* Added flex utility classes.
* Merged ux-chi-docs into ux-chi.

## 0.8.1 (July 13, 2018)

* Updated select form arrow icon and focus color.
* Added display utility classes.
* Renamed -d (depth) utility class to -s (shadow).
* Renamed -primary button class to -brand.
* Added border utility classes.

## 0.8.0 (May 24, 2018)

* Added depth utility classes.
* Enabled spacing utility classes to be combined (i.e. .-p--4 .-pb--0).
* Added card component.
* Changed relative base size to 16px (the default on most browsers).
* Removed API and CLI support to focus strictly on CDN and packaged source as integration options.
* Added WCAG 2.0 compliant color palette.
* Updated margin and padding utility classes to include zero.
* Updated checkboxes and radios to dim both the input and label when disabled.
* Added margin to checkboxes and radios to provide sufficient space between the input and label.
* Added support for displaying checkboxes and radios as stacked or inline.
* Renamed the green themed Badge modifier class from brand to success.
* Updated the grid system with cleanups and improved responsive support.
* Added text size and style utility classes.
* Removed hosted fallback support for Open Sans fonts.
* Updated Google Fonts reference to always load via https.
* Moved the package into the `@centurylink` scope (from `@ctl`, which we don't control).
* Updated package metadata to point to the GitHub repository and the CenturyLink Assets Server (https://assets.ctl.io/chi) as the project homepage.
* Added licensing and the CenturyLink contributor notice.
* Removed unintentionally rounded corners on banner alerts.
* Added close buttons to bubble alerts.
