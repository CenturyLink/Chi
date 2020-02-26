# CHANGELOG

### 1.4.2 (February 27, 2020)

* Fixed bug in Grid component which caused grid columns to render incorrectly in IE11.
* Fixed bug in Picker and Picker Group component which prevented users from navigating the components with tab and arrow keys.
* Fixed rendering bug in Badge custom element.

### 1.4.1 (February 21, 2020)

* Added new icons for enterprise navigation (icon-chart-line, icon-circle-user, icon-file-invoice, icon-inbox, icon-wrench).
* Added background color utility for CenturyLink Dark Blue color swatch.
* Improved selection behavior at all navigation levels in Enterprise Global Nav.
* Improved Card component markup for better customization of icons.
* Fixed bug in Icon web component which was missing color support for grey and secondary colors.
* Added license comment to Chi scripts and CSS.
* Added Gulp watch to Chi's documentation website/layouts folder.
* Fixed bug in documentation to improve navigating to the latest Chi version from older Chi versions.

### 1.4.0 (February 5, 2020)

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

### 1.3.0 (November 21, 2019)

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

### 1.2.5 (October 15, 2019)

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

### 1.2.4 (September 12, 2019)

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

### 1.2.3 (July 10, 2019)

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

### 1.2.2 (June 7, 2019)

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

### 1.2.1 (May 17, 2019)

* Fixed Sidenav animation.
* Fixed Activity lint warnings.

### 1.2.0 (May 16, 2019)

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

### 1.1.1 (March 29, 2019)

* Fixed vertical nav tab active state.
* Fixed padding on header mobile.

### 1.1.0 (March 28, 2019)

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

### 1.0.0 (February 22, 2019)

* Updated colors to comply with new guidelines from brand team.

### 0.9.1 (January 23, 2019)

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

### 0.9.0 (December 4, 2018)

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

### 0.8.3 (October 26, 2018)

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

### 0.8.2 (October 2, 2018)

* Extended tab functionality by creating tabbable panes of content and animating active tab borders.
* Updated Badge component to include icon support.
* Added Icon component with SVG and Web font support.
* Added Getting Started section.
* Improved compatibility with Edge and IE11.
* Added flex utility classes.
* Merged ux-chi-docs into ux-chi.

### 0.8.1 (July 13, 2018)

* Updated select form arrow icon and focus color.
* Added display utility classes.
* Renamed -d (depth) utility class to -s (shadow).
* Renamed -primary button class to -brand.
* Added border utility classes.

### 0.8.0 (May 24, 2018)

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
