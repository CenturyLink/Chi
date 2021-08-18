import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';
import { Themes } from '../models/models';

export const STORE_KEY = '$_chi-documentation';
const defaultTheme = 'lumen';

@Module({
  namespaced: true,
  name: STORE_KEY,
})
export default class ChiDocumentation extends VuexModule {
  theme: Themes = defaultTheme;

  @MutationAction
  async updateTheme(payload: Themes) {
    try {
      return {
        theme: payload,
      };
    } catch (error) {
      return {
        theme: defaultTheme,
      };
    }
  }
}
