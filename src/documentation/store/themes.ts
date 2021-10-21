import { DEFAULT_THEME } from "~/constants/configs";

export const state = () => ({
  theme: DEFAULT_THEME
});

export const mutations = {
  set(state: any, theme: string) {
    state.theme = theme;
  }
};
