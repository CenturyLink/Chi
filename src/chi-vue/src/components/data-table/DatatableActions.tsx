import { Component, Vue } from '@/build/vue-wrapper';
import { Prop } from 'vue-property-decorator';
import { DataTableAction, DataTableColumnProps } from '@/constants/types';

import DatatableMobileActions from './DatatableMobileActions';
import DatatableDesktopActions from './DatatableDesktopActions';

declare const chi: any;

@Component({})
export default class DatatableActions extends Vue {
  @Prop() actions?: DataTableAction[];
  @Prop() rowData?: DataTableColumnProps;

  render() {
    return (
      <div>
        <DatatableMobileActions actions={this.actions} rowData={this.rowData} />
        <DatatableDesktopActions actions={this.actions} rowData={this.rowData} />
      </div>
    );
  }
}
