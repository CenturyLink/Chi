# CHANGELOG
## 2.4.0 (July 9, 2020)
### Components
#### Added
* Added: Sidenav now supports opening on hover.
* Added: Sidenav now renders chevron icons on second-level menu items to illustrate when a third-level menu is available.
#### Changed
* Changed: Icon semantic color values to brighter shades.
* Changed: Icon colors are now defined using icon utility color classes (e.g. `-icon--primary`) instead of text utility color classes (e.g. `-text--primary`).
* Changed: All component semantic states have been updated to render with new brighter semantic colors.
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
* Added: Number Input html blueprint code samples now include label tags.
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
* Renamed: Number Input component container from `m-input__wrapper` to `chi-number-input`.
* Renamed: Number Input Expanded component container from `m-inputNumber` to `chi-number-input -expanded`.
* Changed: Number Input sizes (e.g. `-sm`) are now declared on the component container `chi-number-input` instead of the input.
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
* Renamed: Expansion Panel web component (beta) title property from `heading` to `title` for consistency.
#### Fixed
* Fixed: Dropdown bug which failed to toggle some dropdowns using the data-target method.
* Fixed: Date picker web component bug which caused 24px of whitespace to render below the input.
* Fixed: Sidenav behavior when menu items have no association to a Drawer.
* Fixed: Sidenav IE11 compatibility issues.
* Fixed: Accessibility warning in Drawer web component due to skipped heading level.
* Fixed: Accessibility error in Number Input web component due to missing label.
* Fixed: Expansion Panel step numbers did not hide all step number related margins on xs viewports.
* Fixed: Expansion Panel step numbers could not be turned off on all viewports without the use of margin utilities.
* Fixed: Expansion Panel -bordered panels rendered large gap of whitespace between header and content.
* Fixed: Picker Groups with icons were rendered with a 4px smaller height than those without icons.
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
* Fixed: Some Expansion Panel documentation code samples did not match examples.
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
* Updated Toggle Switch component markup to fix empty form label accessibility error.
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
* Fixed accessibility color contrast errors in Avatar, Badge, Divider, Expansion Panel, and Text Input components.
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
* Fixed bug in Expansion Panel component that prevented long text strings from wrapping.
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
* Removed margin-right from Toggle Switch component.
* Updated Number Input component widths to support more digits by default.
* Added !important to utility values to allow overriding component styles.

## 1.2.2 (June 7, 2019)

* Added text and background utility for CenturyLink's primary grey.
* Added support for -muted to Alert component.
* Removed support for -light and -dark from Alert component.
* Fixed Expansion Panel component bug which failed to apply active styles to active panel step numbers.
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
* Added Expansion Panel javascript component.
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
* Added new Number Input component.
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
