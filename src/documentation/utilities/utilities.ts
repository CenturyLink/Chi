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

export const generateUtilitiesTextContent = (
  column: ITableColumn,
  content: ITableContent
): string => {
  switch (column.key) {
    case 'class':
      return `<code>-text--${content.name}</code>
            <dl class="-text -text--xs -mt--2">
              <dt class="-text--bold">Font-size:</dt>
              <dt>${content.value[0]}</dt>
              <dt class="-text--bold -mt--1">Line-height:</dt>
              <dt>${content.value[1]}</dt>
            </dl>`;
    case 'value':
      return `<p class="-text--${content.name} -px--1">The quick brown fox jumps over the lazy dog.</p>`;
    default:
      return '';
  }
};

export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}