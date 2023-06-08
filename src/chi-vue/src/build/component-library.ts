import { ChiVueLibrary } from 'index';
import Checkbox from '@/components/checkbox/Checkbox';
import ColumnCustomization from '@/components/column-customization/ColumnCustomization';
import DataTable from '@/components/data-table/DataTable';
import DataTableBulkActions from '@/components/data-table-bulk-actions/DataTableBulkActions';
import DataTableToolbar from '@/components/data-table-toolbar/DataTableToolbar';
import DataTableFilters from '@/components/data-table-filters/DataTableFilters';
import DataTableViews from '@/components/data-table-views/DataTableViews';
import Drawer from '@/components/drawer/drawer';
import ExpansionPanel from '@/components/expansion-panel/ExpansionPanel';
import Pagination from '@/components/pagination/pagination';
import SearchInput from '@/components/search-input/SearchInput';
import SaveView from '@/components/data-table-save-view/SaveView';
import Tooltip from '@/components/tooltip/tooltip';

const exportComponent: ChiVueLibrary = {
  components: {
    ChiCheckbox: Checkbox,
    ChiColumnCustomization: ColumnCustomization,
    ChiDataTable: DataTable,
    ChiDataTableBulkActions: DataTableBulkActions,
    ChiDataTableToolbar: DataTableToolbar,
    ChiDataTableFilters: DataTableFilters,
    ChiDataTableViews: DataTableViews,
    ChiDrawer: Drawer,
    ChiExpansionPanel: ExpansionPanel,
    ChiPagination: Pagination,
    ChiSearchInput: SearchInput,
    ChiSaveView: SaveView,
    ChiTooltip: Tooltip,
  },
};

export const library = exportComponent;
