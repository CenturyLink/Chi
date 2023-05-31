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

interface Palette {
  code: string,
  text: string,
  class?: string,
  a11y?: string,
}
type NeutralSection = (Palette & { description: string })[][];
type SupportingSection = (Palette & { wrapperClass?: string })[];

interface Color {
  brand: {
    primary: Palette,
    secondary: Palette,
    supporting: SupportingSection,
  },
  neutral: NeutralSection,
  semantic: {
    green: Palette[],
    blue: Palette[],
    red: Palette[],
    yellow: Palette[],
  }
}

export type ThemesColor = {
  [Property in keyof IThemes]: Color | null
}
