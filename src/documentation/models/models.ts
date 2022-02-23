export const THEMES = ['centurylink', 'lumen', 'portal', 'brightspeed'] as const;
export type Themes = typeof THEMES[number];

export interface TabsInterface {
  active: boolean;
  disabled: boolean;
  id: string;
  label: string;
}
