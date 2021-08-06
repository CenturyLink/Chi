import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableView } from '@/constants/types';
import {
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
      if(view.name === value){
        this.$emit(DATA_TABLE_VIEWS_EVENTS.VIEWS_CHANGE, view);
      }
    });
  }

  render() {
    if (!this.views || !this.views.length) {
      return <select aria-label={`Select a View`}
      id='data-table-views'
      selected= 'View'
      class={`${SELECT_CLASSES.SELECT} -lg`} onChange={(ev: Event) => this._emitViewsChanged(ev)}><option>View</option></select>;
    }

    const options = this.views?.map((view: DataTableView) => {
      return <option value={view.name}>{view.label || view.name}</option>;
    });

    return <select aria-label={`Select a View`}
    id='data-table-views'
    selected={this.defaultView ? this.defaultView.label || this.defaultView.name : this.views[0].label || this.views[0].name}
    class={`${SELECT_CLASSES.SELECT} -lg`} onChange={(ev: Event) => this._emitViewsChanged(ev)}>{options}</select>;
  }
}
