declare class ComponentLibrary {
  components: Record<string, Function>;
}

const exportComponent: ComponentLibrary = {
  components: {
    Drawer: () => import(/* webpackChunkName: "drawer" */ '../components/drawer/drawer'),
    Pagination: () => import(/* webpackChunkName: "pagination" */ '../components/pagination/pagination'),
    Tooltip: () => import(/* webpackChunkName: "tooltip" */ '../components/tooltip/tooltip'),
  },
};

export const library = exportComponent;
