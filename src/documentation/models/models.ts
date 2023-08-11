export const THEMES = ['centurylink', 'lumen', 'portal'] as const;
export type Themes = typeof THEMES[number];

interface CodeSnippets {
  code: string;
  description: string;
}
export interface ITabs {
  active: boolean;
  disabled: boolean;
  id: string;
  label: string;
}

export interface IHeadTabs {
  active: boolean;
  id: string;
  label: string;
  codeSnippets: {
    webComponent: CodeSnippets;
    vue: CodeSnippets;
    htmlBlueprint: CodeSnippets;
  };
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

interface TabComponentInterface {
  label: string;
  id: string;
  children?: TabComponentInterface[];
}

export interface TabsListInterface extends HTMLElement {
  tabs: TabComponentInterface[];
}

export interface IBorderUtility {
  className: string;
  title: string;
}

export interface IZIndex {
  key: string;
  color: string;
  margin: number;
  text: string;
}

export interface INotation {
  class: string;
  value: string;
}

export interface ITableColumn {
  title: string;
  key: string;
  width: string;
  class?: string;
}

export interface IBreakpoints {
  name: string;
  value: string;
}

export interface ITableContent {
  name: string;
  value: string | string[];
}
