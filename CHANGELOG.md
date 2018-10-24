# CHANGELOG

### 0.8.3 (Unreleased)

* Added Position utilities.
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
* Added Dropdown component.

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
* Enabled spacing utility classes to be combined (i.e. .-p4 .-pb0).
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
