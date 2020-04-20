#!/bin/bash

PROJECT_SRC='path/to/project/folder'
# Please make sure that you provide correct path to your project folder.
# Wrong path might affect other folders / projects

export LC_ALL=C

ARRAY=(
    # Grid
    "a-grid:chi-grid"
    "a-col:chi-col"

    # Activity
    "m-activity:chi-activity"

    # Avatar
    "a-avatar:chi-avatar"

    # Alert
    "m-alert:chi-alert"

    # Badge
    "a-badge:chi-badge"

    # Brand
    "a-brand:chi-brand"

    # Breadcrumb
    "a-breadcrumb:chi-breadcrumb"

    # Button
    "m-btnGroup:chi-button-group"
    "a-btn:chi-button"

    # Card
    "a-card:chi-card"

    # Checkbox
    "a-checkbox:chi-checkbox"

    # Date picker
    "m-datepicker:chi-datepicker"

    # Divider
    "a-divider:chi-divider"

    # Drawer
    "m-drawer:chi-drawer"

    # Dropdown
    "m-dropdown:chi-dropdown"
    
    # Expansion panel
    "m-epanel:chi-epanel"
    "-m-epanel:-chi-epanel"

    # Footer
    "o-footer:chi-footer"

    # Header
    "o-header:chi-header"

    # Icon
    "a-icon:chi-icon"

    # Input
    "a-input:chi-input"

    # Label
    "a-label:chi-label"

    # Modal
    "a-modal:chi-modal"

    # Pagination
    "a-pagination:chi-pagination"

    # Picker
    "m-pickerGroup:chi-picker-group"
    "m-picker:chi-picker"

    "a-picker__checkbox:chi-picker__checkbox"
    "a-picker__radio:chi-picker__radio"
    "a-picker__label:chi-picker__label"
    "a-picker__description:chi-picker__description"
    "a-picker:chi-picker__input"

    # Popover
    "m-popover:chi-popover"

    # Price
    "a-price:chi-price"

    # Radio
    "a-radio:chi-radio"

    # Range slider
    "a-rangeSlider:chi-range-slider"

    # Sidenav
    "m-sidenav:chi-sidenav"

    # Spinner
    "a-spinner:chi-spinner"

    # Steps
    "a-steps:chi-steps"

    # Table
    "a-table:chi-table"

    # Tabs
    "a-tabs:chi-tabs"

    # Toggle switch
    "a-switch:chi-switch"

    # Tooltip
    "a-tooltip:chi-tooltip"

    # Typography
    "a-h1:-text--h1"
    "a-h2:-text--h2"
    "a-h3:-text--h3"
    "a-h4:-text--h4"
    "a-h5:-text--h5"
    "a-h6:-text--h6"
    "-text--smaller:-text--xs"
    "-text-sm--smaller:-text-sm--xs"
    "-text-md--smaller:-text-md--xs"
    "-text-lg--smaller:-text-lg--xs"
    "-text-xl--smaller:-text-xl--xs"
    "-text--small:-text--sm"
    "-text-sm--small:-text-sm--sm"
    "-text-md--small:-text-md--sm"
    "-text-lg--small:-text-lg--sm"
    "-text-xl--small:-text-xl--sm"
    "-text--large:-text--lg"
    "-text-sm--large:-text-sm--lg"
    "-text-md--large:-text-md--lg"
    "-text-lg--large:-text-lg--lg"
    "-text-xl--large:-text-xl--lg"
    "-text--larger:-text--xl"
    "-text-sm--larger:-text-sm--xl"
    "-text-md--larger:-text-md--xl"
    "-text-lg--larger:-text-lg--xl"
    "-text-xl--larger:-text-xl--xl"
    "a-blockquote:chi-blockquote"
    "a-abbr:chi-abbr"
    "a-code:chi-code"
    "a-blockquote:chi-blockquote"
    "a-abbr:chi-abbr"
    "a-code:chi-code"

    # Backdrop
    "a-backdrop:chi-backdrop"
    "m-backdrop:chi-backdrop"

    "a-arrow:chi-arrow"
    "-bgInverse:-bg--inverse" # Docu only
    "m-input__wrapper:chi-input__wrapper"
    "m-inputNumber:chi-number-input -expanded"
    "m-form__item:chi-form__item"
    "m-label__wrapper:chi-label__wrapper"
    "m-avatarGroup:chi-avatar-group"
    "-noGutter:-no-gutter"
    "-borderless:-no-border"
    "-noBorder:-no-border"
    "-notFluid:-no-fluid"
    "-hasLabel:-label"
    "-floatingLabel:-floating-label"
    "-horizontalLabels:-horizontal-label"
    "-nostyle:-no-style"
    "-activeAlt:-active-alt"
    "-disableScroll:-disable-scroll"
    "-hasActive:-has-active"
    "a-sliding-border:chi-sliding-border"
    "m-example:chi-example"
    "a-collection__title:chi-collection__title" # Docu only
    "a-tab__description:chi-tab__description" # Docu only
)

for className in "${ARRAY[@]}" ; do
    REGEX='\([^a-zA-Z0-9]\)'"${className%%:*}"'\([^a-zA-Z0-9]\)'
    CHANGE="s/${REGEX}/\1${className##*:}\2/g"
    REGEXNL='\([^a-zA-Z0-9]\)'"${className%%:*}"'$'
    CHANGENL="s/${REGEXNL}/\1${className##*:}/g"

    find ${PROJECT_SRC} -type f -exec sed -i '' "${CHANGE};${CHANGENL}" '{}' +
    echo $'\e[1;31m' ${className%%:*} $'\e[1;32m' ${className##*:}
done

