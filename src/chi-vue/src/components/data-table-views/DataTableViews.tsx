import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableView } from '@/constants/types';
import {
  DATA_TABLE_CLASSES,
  FORM_CLASSES,
  GENERIC_SIZE_CLASSES,
  PORTAL_CLASS,
  SELECT_CLASSES,
} from '@/constants/classes';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import { findComponent } from '@/utils/utils';
import DataTableToolbar from '../data-table-toolbar/DataTableToolbar';
import { detectMajorChiVersion } from '@/utils/utils';
import { getModule } from 'vuex-module-decorators';
import store from '@/store';

@Component
export default class DataTableViews extends Vue {
  @Prop({ default: () => [] }) views?: DataTableView[];
  @Prop() defaultView?: string;

  _selectedView?: string;
  _chiMajorVersion = 5;
  storeModule?: any;

  get currentSelectedView() {
    return this.storeModule.currentViewId;
  }

  get viewData() {
    return this.storeModule.viewsData;
  }

  created() {
    if (!this.storeModule && this.$store) {
      this.storeModule = getModule(store, this.$store);
    }
  }

  mounted(): void {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');

    if (dataTableToolbarComponent) {
      (dataTableToolbarComponent as DataTableToolbar)._views = this;
    }
  }

  _emitViewsChanged(ev: Event): void {
    const value = (ev.target as HTMLFormElement).value;
    const view = this.views?.find((view: DataTableView) => view.id === value);
    this._selectedView = view?.id;
    this.$emit(DATA_TABLE_EVENTS.VIEWS_CHANGE, view);
  }

  beforeMount() {
    this._chiMajorVersion = detectMajorChiVersion();
  }

  render() {
    const options = this.views?.map((view: DataTableView) => {
      return (
        <option value={view.id} selected={this.defaultView === view.id}>
          {view.label || view.id}
        </option>
      );
    });

    return (
      <div class={DATA_TABLE_CLASSES.VIEWS}>
        <div class={`${DATA_TABLE_CLASSES.VIEWS}-desktop`}>
          <div class={`${FORM_CLASSES.FORM_ITEM}`}>
            <select
              aria-label={`Select a View`}
              class={`${SELECT_CLASSES.SELECT} ${
                this._chiMajorVersion === 4 ? `${GENERIC_SIZE_CLASSES.LG} ${PORTAL_CLASS}` : ''
              }`}
              onChange={(ev: Event) => this._emitViewsChanged(ev)}>
              {!this.views || !this.views.length ? <option>View</option> : options}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
