export const THEMES = ['centurylink', 'lumen', 'portal', 'lumen-rebrand24', 'portal-rebrand24'] as const;
export type Themes = (typeof THEMES)[number];

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
  lumenRebrand24: string;
  portalRebrand24: string;
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
  className?: string;
}

export interface IBreakpoints {
  name: string;
  value: string;
}

export interface ITableContent {
  name: string;
  value: string | string[];
  contrast?: string;
}

interface Palette {
  code: string;
  text: string;
  class?: string;
  a11y?: string;
}
type NeutralSection = (Palette & { description: string })[][];
type SupportingSection = (Palette & { wrapperClass?: string })[];
type MainColor = Palette & {
  title: string;
  id: string;
  wrapperClass?: string;
};

interface Color {
  brand: {
    main: MainColor[];
    supporting: SupportingSection;
  };
  neutral: NeutralSection;
  semantic: Palette[][];
}

export type ThemesColor = {
  [Property in keyof IThemes]: Color | null;
};

export interface ITableHead {
  col1: Partial<ITableColumn>;
  col2: Partial<ITableColumn>;
  col3: Partial<ITableColumn>;
}
