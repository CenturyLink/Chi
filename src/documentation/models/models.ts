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
};

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

export interface TableData {
  head: string[];
  body: TableRow[];
  config: {
    cells: CellConfig[];
  }
}

export interface TableRow {
  data: Record<string, any>;
}

interface CellConfig {
  hasCode: boolean;
  width: string;
}

export interface ZIndex {
  index: number;
  color: string;
  margin: string;
}

export interface TextModel {
  size?: string;
  head?: string;
  font: string;
  line: string;
}
