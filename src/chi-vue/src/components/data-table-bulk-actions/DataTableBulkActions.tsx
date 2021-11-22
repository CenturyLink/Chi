import { Component, Prop, Vue } from 'vue-property-decorator';
import { findComponent } from '@/utils/utils';
import { BULK_ACTIONS_CLASSES, CHECKBOX_CLASSES, FORM_CLASSES } from '@/constants/classes';
import DataTable from '../data-table/DataTable';

@Component({})
export default class DataTableToolbar extends Vue {
  @Prop() selectedRowCount: any;
  _selectedRows(e: any) {
    this.$emit('showSelectedOnly', e.srcElement.checked);
  }
  mounted() {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      (dataTableComponent as DataTable)._toolbarComponent = this;
    }
  }

  render() {
    return (
      <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS}`}>
        <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_START}`}>
          <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_RESULTS}`}>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_LABELS}`}>Actions ({this.selectedRowCount} Selected)</div>
            <div class={`${FORM_CLASSES.FORM_ITEM}`}>
              <div class={`${CHECKBOX_CLASSES.checkbox}`}>
                <input
                  id="checkbox-ba1"
                  class={`${CHECKBOX_CLASSES.INPUT}`}
                  type="checkbox"
                  onclick={(e: Event) => {
                    this._selectedRows(e);
                  }}
                />
                <label class={`${CHECKBOX_CLASSES.LABEL}`} for="checkbox-ba1">
                  Show Selected Only
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
