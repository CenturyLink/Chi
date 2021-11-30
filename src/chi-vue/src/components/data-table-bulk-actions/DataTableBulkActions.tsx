import { Component, Prop, Vue } from 'vue-property-decorator';
import { findComponent } from '@/utils/utils';
import { BULK_ACTIONS_CLASSES, CHECKBOX_CLASSES, FORM_CLASSES, UTILITY_CLASSES } from '@/constants/classes';
import DataTable from '../data-table/DataTable';

@Component({})
export default class DataTableBulkActions extends Vue {
  @Prop() selectedRowCount!: number;

  _selectedRows(e: any) {
    this.$emit('showSelectedOnly', e.srcElement.checked);
  }
  mounted() {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      (dataTableComponent as DataTable)._bulkActionsComponent = this;
    }
  }

  render() {
    return (
      <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS}`}>
        <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_TOP} ${UTILITY_CLASSES.Z_INDEX.Z_40}`}>{this.$slots.top}</div>
        <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_START}`}>
          <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_RESULTS}`}>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_LABELS}`}>
              {`${BULK_ACTIONS_CLASSES.ACTIONS}`} ({this.selectedRowCount} {`${BULK_ACTIONS_CLASSES.SELECTED}`})
            </div>
            <div class={`${FORM_CLASSES.FORM_ITEM}`}>
              <div class={`${CHECKBOX_CLASSES.checkbox}`}>
                <input
                  id={`${BULK_ACTIONS_CLASSES.CHECK_BOX}`}
                  class={`${CHECKBOX_CLASSES.INPUT}`}
                  type="checkbox"
                  onclick={(e: Event) => {
                    this._selectedRows(e);
                  }}
                />
                <label class={`${CHECKBOX_CLASSES.LABEL}`} for={`${BULK_ACTIONS_CLASSES.CHECK_BOX}`}>
                  {`${BULK_ACTIONS_CLASSES.SHOW_SELECTED}`}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_START}`}>{this.$slots.start}</div>
        <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_END}`}>{this.$slots.end}</div>
      </div>
    );
  }
}
