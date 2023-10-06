import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

export const STORE_KEY = '$_chi-vue';

@Module({
  namespaced: true,
  name: STORE_KEY,
})
export default class ChiVue extends VuexModule {
  filterConfig: Record<string, string> = {};
  filterConfigLive: Record<string, string> = {};

  @Mutation
  updateFilterConfig(payload: { id: string; value: string }) {
    this.filterConfig = { ...this.filterConfig, [payload.id]: payload.value };
  }

  @Mutation
  updateFilterConfigLive(payload: { id: string; value: string }) {
    this.filterConfigLive = { ...this.filterConfigLive, [payload.id]: payload.value };
  }
}
