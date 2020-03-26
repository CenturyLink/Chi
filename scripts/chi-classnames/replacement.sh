#!/bin/bash

PROJECT_SRC='path/to/project/folder'

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
    "a-btn:chi-btn"

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

    # Popover
    "m-popover:chi-popover"

    # Price
    "a-price:chi-price"

    # Radio
    "a-radio:chi-radio"

    # Range slider
    "a-rangeSlider:chi-rangeSlider"

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
    "a-h1:chi-h1"
    "a-h2:chi-h2"
    "a-h3:chi-h3"
    "a-h4:chi-h4"
    "a-h5:chi-h5"
    "a-h6:chi-h6"
    "a-blockquote:chi-blockquote"
    "a-abbr:chi-abbr"
    "a-code:chi-code"

    # Backdrop
    "a-backdrop:chi-backdrop"
    "m-backdrop:chi-backdrop"

    "m-input__wrapper:chi-input__wrapper"
    "m-form__item:chi-form__item"
    "m-label__wrapper:chi-label__wrapper"
    "m-avatarGroup:chi-avatar__group"
    "m-btnGroup:chi-btn__group"
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
