import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';
import { DataTableColumn, DataTableFilter } from '@/constants/types';

export const STORE_KEY = '$_chi-vue';

@Module({
  namespaced: true,
  name: STORE_KEY,
})
export default class ChiVue extends VuexModule {
  filterConfig: object = {};
  filterConfigLive: object = {};
  filters: DataTableFilter[] = [];
  searchString = '';
  columns: DataTableColumn[] = [];

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

  @MutationAction
  async updateFilters(payload: DataTableFilter[]) {
    try {
      return {
        filters: payload,
      };
    } catch (error) {
      return {
        filters: [],
      };
    }
  }

  @MutationAction
  async updateSearchQuery(payload: string) {
    try {
      return {
        searchString: payload,
      };
    } catch (error) {
      return {
        searchString: '',
      };
    }
  }

  @MutationAction
  async updateColumns(payload: DataTableColumn[]) {
    try {
      return {
        columns: payload,
      };
    } catch (error) {
      return {
        columns: [],
      };
    }
  }
}
