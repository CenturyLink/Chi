# chi-popover



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                                                             | Type                                                                                                                                                                                                         | Default     |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `active`          | `active`            | to open or close the popover                                                                                                                            | `boolean`                                                                                                                                                                                                    | `undefined` |
| `arrow`           | `arrow`             | to add an arrow between the popover and the reference element                                                                                           | `boolean`                                                                                                                                                                                                    | `undefined` |
| `position`        | `position`          | to set position of the popover { top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end } | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'top'`     |
| `preventAutoHide` | `prevent-auto-hide` | Prevents closing the popover when clicking out of its bounds                                                                                            | `boolean`                                                                                                                                                                                                    | `undefined` |
| `reference`       | `reference`         | CSS Selector to the reference Element. I.e. #id > p                                                                                                     | `string`                                                                                                                                                                                                     | `undefined` |


## Events

| Event               | Description                                                                           | Type                |
| ------------------- | ------------------------------------------------------------------------------------- | ------------------- |
| `chiPopover:hidden` | Popover has been hidden to the user. The animation has completed.                     | `CustomEvent<void>` |
| `chiPopover:hide`   | Popover hide method has executed, but the closing animation has not started yet       | `CustomEvent<void>` |
| `chiPopover:show`   | Popover show method has executed, but the showing animation has not started yet       | `CustomEvent<void>` |
| `chiPopover:shown`  | Popover has been shown to the user and is fully visible. The animation has completed. | `CustomEvent<void>` |


## Methods

### `hide() => void`

Hides the popover

#### Returns

Type: `void`



### `show() => void`

Shows the popover.

#### Returns

Type: `void`



### `toggle() => void`

Toggles active state (show/hide)

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
