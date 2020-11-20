declare class ComponentLibrary {
  components: Record<string, any>;
}

const exportComponent: ComponentLibrary = {
  components: {
    Drawer: () => import(/* webpackChunkName: "drawer" */ '../components/drawer/drawer'),
    Pagination: () => import(/* webpackChunkName: "pagination" */ '../components/pagination/pagination'),
  },
};

export const library = exportComponent;
