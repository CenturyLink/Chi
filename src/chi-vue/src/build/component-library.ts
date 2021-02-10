declare class ComponentLibrary {
  components: Record<string, Function>;
}

const exportComponent: ComponentLibrary = {
  components: {
    ChiDataTable: () => import(/* webpackChunkName: "data-table" */ '../components/data-table/DataTable'),
    ChiDrawer: () => import(/* webpackChunkName: "drawer" */ '../components/drawer/drawer'),
    ChiPagination: () => import(/* webpackChunkName: "pagination" */ '../components/pagination/pagination'),
    ChiTooltip: () => import(/* webpackChunkName: "tooltip" */ '../components/tooltip/tooltip'),
  },
};

export const library = exportComponent;
