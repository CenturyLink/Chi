import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';

export const STORE_KEY = '$_chi-vue';

@Module({
  namespaced: true,
  name: STORE_KEY,
})
export default class ChiVue extends VuexModule {
  filterConfig: object = {};
  filterConfigLive: object = {};

  @MutationAction
  async updateFilterConfig(payload: any) {
    try {
      return {
        filterConfig: payload,
      };
    } catch (error) {
      return {
        filterConfig: {},
      };
    }
  }

  @MutationAction
  async updateFilterConfigLive(payload: any) {
    try {
      return {
        filterConfigLive: payload,
      };
    } catch (error) {
      return {
        filterConfigLive: {},
      };
    }
  }
}
