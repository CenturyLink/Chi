import { Emit, Prop, Watch } from 'vue-property-decorator';
import { DataTableView } from '@/constants/types';
import { DATA_TABLE_CLASSES, FORM_CLASSES, SELECT_CLASSES } from '@/constants/classes';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import { findComponent } from '@/utils/utils';
import DataTableToolbar from '../data-table-toolbar/DataTableToolbar';
import { Component, Vue } from '@/build/vue-wrapper';
import EventBus from '@/utils/EventBus';
import { Compare } from '@/utils/Compare';

@Component({})
export default class DataTableViews extends Vue {
  @Prop({ default: () => [] }) views?: DataTableView[];
  @Prop() defaultView?: string;
  @Prop() selectedView?: string;

  newSelectedView? = this.selectedView || this.defaultView || '';

  @Emit(DATA_TABLE_EVENTS.VIEWS_CHANGE)
  _emitViewsChanged(view: DataTableView | undefined) {
    EventBus.emit(DATA_TABLE_EVENTS.VIEWS_CHANGE, view);

    return view;
  }

  @Watch('selectedView')
  selectedViewChange(newValue: string, oldValue: string) {
    if (!Compare.deepEqual(newValue, oldValue)) {
      this.newSelectedView = newValue;
    }
  }

  beforeMount(): void {
    this.newSelectedView = this.selectedView || this.defaultView || '';
  }

  mounted(): void {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');

    if (dataTableToolbarComponent) {
      (dataTableToolbarComponent as DataTableToolbar)._views = this;
    }
  }

  _handleViewsChange(ev: Event): void {
    const value = (ev.target as HTMLFormElement).value;
    const view = this.views?.find((view: DataTableView) => view.id === value);

    this.newSelectedView = view?.id;
    this._emitViewsChanged(view);
  }

  render() {
    const options = this.views?.map((view: DataTableView) => {
      return (
        <option value={view.id} selected={this.newSelectedView === view.id}>
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
              class={`${SELECT_CLASSES.SELECT}`}
              onChange={(ev: Event) => this._handleViewsChange(ev)}
            >
              {!this.views || !this.views.length ? <option>View</option> : options}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
