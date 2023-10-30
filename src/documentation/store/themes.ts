import { DEFAULT_THEME, CHI_VERSION } from '~/constants/configs';
import { THEMES } from '../constants/constants';

export const state = () => ({
  theme: DEFAULT_THEME as keyof typeof THEMES,
  version: CHI_VERSION,
});

export const mutations = {
  set(state: any, theme: keyof typeof THEMES) {
    state.theme = theme;
  }
};

export const themeNames = [
  'centurylink',
  'lumen',
  'portal',
  'brightspeed',
  'colt'
];

export function getTheme(theme: string) {
  const entry = themeNames.find((name: string) => name === theme?.toLowerCase());

  return entry ? entry : null;
}
