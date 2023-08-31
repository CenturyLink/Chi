import { DEFAULT_THEME } from "~/constants/configs";
import { THEMES } from '../constants/constants';

export const state = () => ({
  theme: DEFAULT_THEME as keyof typeof THEMES
});

export const mutations = {
  set(state: any, theme: keyof typeof THEMES) {
    state.theme = theme;
  }
};

export const mapThemeNames = new Map([
  ['centurylink', "CenturyLink"],
  ['lumen', "Lumen"],
  ['portal', "Portal"],
  ['brightspeed', "Brightspeed"],
  ['colt', "Colt"],
]);

export function getThemeByMapValue( value: string) {
  const entry = [...mapThemeNames.entries()].find(([key, val]) => val === value);
  return entry ? entry[0] : null;
}
