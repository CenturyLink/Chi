export const THEMES = ['centurylink', 'lumen', 'portal'] as const;
export type Themes = typeof THEMES[number];

interface CodeSnippets {
  code: string;
  description: string;
}
export interface TabsInterface {
  active: boolean;
  disabled: boolean;
  id: string;
  label: string;
}

export interface HeadTabsInterface {
  active: boolean;
  id: string;
  label: string;
  codeSnippets: {
    webComponent: CodeSnippets;
    vue: CodeSnippets;
    htmlBlueprint: CodeSnippets;
  }
}

export interface ILanguage {
  href: string;
  name: string;
}

export interface ILink {
  href: string;
  title?: string;
  target?: string;
  class?: string;
  ariaLabel?: string;
  iconName?: string;
}

export interface IThemes {
  lumen: string;
  centurylink: string;
  portal: string;
  brightspeed: string;
  colt: string;
}

export interface IBorderUtility {
  className: string;
  title: string;
}

export interface IZIndex {
  key: string,
  color: string,
  margin: number,
  text: string,
}

export interface INotation {
  class: string,
  value: string,
}

export interface ITableColumn {
  title: string;
  key: string;
  width: string;
}

export interface ITableContent {
  name: string;
  value: string;
}
