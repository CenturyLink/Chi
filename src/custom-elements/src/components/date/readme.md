# chi-date



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                              | Type     | Default        |
| -------- | --------- | ------------------------------------------------------------------------ | -------- | -------------- |
| `format` | `format`  | Date format used in the attributes and how it will be shown to the user. | `string` | `'MM/DD/YYYY'` |
| `locale` | `locale`  | Locale to use in date picker                                             | `string` | `'en'`         |
| `max`    | `max`     | Maximum eligible date                                                    | `string` | `'12/31/2099'` |
| `min`    | `min`     | Minimum eligible date                                                    | `string` | `'01/01/1900'` |
| `value`  | `value`   | Selected date in the date picker                                         | `string` | `undefined`    |


## Events

| Event           | Description             | Type                |
| --------------- | ----------------------- | ------------------- |
| `chiDateChange` | Date change value event | `CustomEvent<void>` |


## Methods

### `getDate() => Promise<string>`

Gets date

#### Returns

Type: `Promise<string>`



### `setDate(date: any) => void`

Sets date

#### Parameters

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| `date` | `any` |             |

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
