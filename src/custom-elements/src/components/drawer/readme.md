# chi-drawer



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                    | Type      | Default     |
| ------------- | -------------- | -------------------------------------------------------------- | --------- | ----------- |
| `active`      | `active`       | to open or close the drawer                                    | `boolean` | `undefined` |
| `backdrop`    | `backdrop`     | to add a backdrop behind the drawer, which covers the viewport | `string`  | `undefined` |
| `collapsible` | `collapsible`  | adds a close button                                            | `boolean` | `undefined` |
| `headerTitle` | `header-title` | header title. Not compatible with headless                     | `string`  | `undefined` |
| `headless`    | `headless`     | to remove the space for the header                             | `boolean` | `undefined` |
| `position`    | `position`     | to set position of the drawer { top, right, bottom or left }   | `string`  | `undefined` |


## Events

| Event        | Description                                                                          | Type                |
| ------------ | ------------------------------------------------------------------------------------ | ------------------- |
| `chi:hidden` | Drawer has been hidden to the user. The animation has completed.                     | `CustomEvent<void>` |
| `chi:hide`   | Drawer hide method has executed, but the closing animation has not started yet       | `CustomEvent<void>` |
| `chi:show`   | Drawer show method has executed, but the showing animation has not started yet       | `CustomEvent<void>` |
| `chi:shown`  | Drawer has been shown to the user and is fully visible. The animation has completed. | `CustomEvent<void>` |


## Methods

### `hide() => void`

Hides the drawer

#### Returns

Type: `void`



### `show() => void`

Shows the drawer.

#### Returns

Type: `void`



### `toggle() => void`

Toggles active state (show/hide)

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
