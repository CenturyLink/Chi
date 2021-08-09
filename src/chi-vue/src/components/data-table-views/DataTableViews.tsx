import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableView } from '@/constants/types';
import {
  DATA_TABLE_CLASSES,
  FORM_CLASSES,
  SELECT_CLASSES,
} from '@/constants/classes';
import { DATA_TABLE_VIEWS_EVENTS } from '@/constants/events';
import { findComponent } from '@/utils/utils';
import DataTableToolbar from '../data-table-toolbar/DataTableToolbar';

@Component
export default class DataTableViews extends Vue {
  @Prop() views?: DataTableView[];
  @Prop() defaultView?: DataTableView;
  @Prop() selectedView?: DataTableView;

  mounted(): void {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');

    if (dataTableToolbarComponent) {
      (dataTableToolbarComponent as DataTableToolbar)._views = this;
    }
  }

  _emitViewsChanged(ev: Event): void {
    const value = (ev.target as HTMLFormElement).value;
    this.views?.forEach((view: DataTableView) => {
      if (view.name === value) {
        this.$emit(DATA_TABLE_VIEWS_EVENTS.VIEWS_CHANGE, view);
      }
    });
  }

  render() {
    let viewsContent: JSX.Element;
    if (!this.views || !this.views.length) {
      viewsContent = (
        <select
          aria-label={`Select a View`}
          id='data-table-views'
          selected='View'
          class={`${SELECT_CLASSES.SELECT} -lg`}
          onChange={(ev: Event) => this._emitViewsChanged(ev)}
        >
          <option>View</option>
        </select>
      );
    } else {
      const options = this.views?.map((view: DataTableView) => {
        return <option value={view.name}>{view.label || view.name}</option>;
      });

      viewsContent = (
        <select
          aria-label={`Select a View`}
          id='data-table-views'
          selected={
            this.defaultView
              ? this.defaultView.label || this.defaultView.name
              : this.views[0].label || this.views[0].name
          }
          class={`${SELECT_CLASSES.SELECT} -lg`}
          onChange={(ev: Event) => this._emitViewsChanged(ev)}
        >
          {options}
        </select>
      );
    }

    return (
      <div class={DATA_TABLE_CLASSES.VIEWS}>
        <div class={`${DATA_TABLE_CLASSES.VIEWS}-desktop`}>
          <div class={`${FORM_CLASSES.FORM_ITEM}`}>{viewsContent}</div>
        </div>
      </div>
    );
  }
}
