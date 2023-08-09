import { ITableColumn, ITableContent } from '~/models/models';

export const generateBasicUtilitiesColorContent = (
  column: ITableColumn,
  content: ITableContent
): string => {
  switch (column.key) {
    case 'class':
      return `<code>-bg--${content.name}</code>`;
    case 'value':
      return `<code>background-color: ${content.value}</code>`;
    case 'result':
      return `<div class="-text -b--1" style="background-color:${content.value}; height:15px;"></div>`;
    default:
      return '';
  }
};
