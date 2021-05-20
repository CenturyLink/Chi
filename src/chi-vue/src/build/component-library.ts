declare class ComponentLibrary {
  components: Record<string, Function>;
}

const exportComponent: ComponentLibrary = {
  components: {
    ChiSearchInput: () => import(/* webpackChunkName: "search-input" */ '../components/search-input/SearchInput'),
    ChiDataTable: () => import(/* webpackChunkName: "data-table" */ '../components/data-table/DataTable'),
    ChiDataTableToolbar: () =>
      import(/* webpackChunkName: "data-table-toolbar" */ '../components/data-table-toolbar/DataTableToolbar'),
    ChiDataTableFilters: () =>
      import(/* webpackChunkName: "data-table-filters" */ '../components/data-table-filters/DataTableFilters'),
    ChiDrawer: () => import(/* webpackChunkName: "drawer" */ '../components/drawer/drawer'),
    ChiPagination: () => import(/* webpackChunkName: "pagination" */ '../components/pagination/pagination'),
    ChiSearchInput: () => import(/* webpackChunkName: "data-search-input" */ '../components/search-input/SearchInput'),
    ChiTooltip: () => import(/* webpackChunkName: "tooltip" */ '../components/tooltip/tooltip'),
  },
};

export const library = exportComponent;
