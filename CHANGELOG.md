# CHANGELOG

### 1.2.3 (July 10, 2019)

* Fixed Dropdown component bug which prevented the trigger icon from rendering correctly on different color buttons.
* Fixed bug which allowed scrolling the underlying body content when a Drawer or Modal was open.
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
