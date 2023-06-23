# chi-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# CHANGELOG
## 2.1.2 (June 14, 2023)
### Components
#### Fixed
* Fixed: Expansion panel margin-left alignment when `state-icon` is present in `active` state.
* Fixed: Expansion panel Vue component was missing `-done-only` class to render correct font-size in `done` state.

## 2.1.1 (May 30, 2023)
### Components
#### Changed
* Changed: Data table description popover in header has been repositioned in the DOM to improve rendering.

## 2.1.0 (May 12, 2023)
### Components
#### Added
* Added: Data table Vue component header now supports two lines in a cell when `cellWrap` config is set to true.
#### Changed
* Changed: Toolbar `Column customization` tooltip text to `Customize columns`.
#### Fixed
* Fixed: Data table description popover in header has removed `modal` class that was causing incorrect width.

## 2.0.0 (April 12, 2023)
### Components
#### Added
* Added: Expansion panel now supports state icons.
* Added: Save View supports new attributes for `saveButtonDisabled`, `readonly`,`label`, and `input` inside its config.
#### Fixed
* Fixed: Data table description popover in header now supports column customization.
