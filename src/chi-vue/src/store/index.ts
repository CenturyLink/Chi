import { defineStore } from 'pinia';
import { FilterState } from './types';

export const useFilterStore = defineStore('ChiVueFilters', {
  state: (): FilterState => ({
    filterConfig: {},
    filterConfigLive: {},
  }),

  actions: {
    updateFilterConfig(payload: { id: string; value: string }) {
      this.filterConfig = { ...this.filterConfig, [payload.id]: payload.value };
    },

    updateFilterConfigLive(payload: { id: string; value: string }) {
      this.filterConfigLive = { ...this.filterConfigLive, [payload.id]: payload.value };
    },
  },
});
