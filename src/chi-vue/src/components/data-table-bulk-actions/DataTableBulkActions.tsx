import { Component, Prop, Vue } from 'vue-property-decorator';
import { findComponent } from '@/utils/utils';
import {
  BULK_ACTIONS_CLASSES,
  BUTTON_CLASSES,
  CHECKBOX_CLASSES,
  CLOSE_CLASS,
  FORM_CLASSES,
  ICON_CLASS,
  UTILITY_CLASSES,
} from '@/constants/classes';
import { DataTableConfig } from '@/constants/types';
import DataTable from '../data-table/DataTable';
import { ICON_CLASSES } from '@/constants/icons';

@Component({})
export default class DataTableBulkActions extends Vue {
  @Prop() config!: DataTableConfig;

  showBulkActions?: boolean = true;

  _emitSelectedRows(e: any) {
    this.$emit('chiShowSelectedRowsOnly', e.srcElement.checked);
  }

  _emitSelectedAll(e: Event) {
    e.preventDefault();
    this.$emit('chiMobileSelectedAll', e);
  }

  _emitCancel(e: Event) {
    e.preventDefault();
    this.$emit('chiMobileCancel', e);
  }

  mounted() {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      (dataTableComponent as DataTable)._bulkActionsComponent = this;
    }
  }

  toggleBulkActions() {
    this.$props.config.selectedRow = 0;
  }

  render() {
    return (
      <transition name="slide-fade">
        {this.$props.config.selectedRow > 0 && (
          <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS}`}>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_TOP} ${UTILITY_CLASSES.Z_INDEX.Z_40}`}>
              <chi-link
                href="#"
                onClick={(e: Event) => {
                  this._emitSelectedAll(e);
                }}>
                Select all
              </chi-link>
              <chi-link
                href="#"
                onClick={(e: Event) => {
                  this._emitCancel(e);
                }}>
                Cancel
              </chi-link>
            </div>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_START}`}>
              <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_RESULTS}`}>
                <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_LABELS}`}>
                  Actions ({this.config.selectedRow} Selected)
                </div>
                <div class={`${FORM_CLASSES.FORM_ITEM}`}>
                  <div class={`${CHECKBOX_CLASSES.checkbox}`}>
                    <input
                      id={`checkbox-ba${this.config.tableId}`}
                      class={`${CHECKBOX_CLASSES.INPUT}`}
                      type="checkbox"
                      onClick={(e: Event) => {
                        this._emitSelectedRows(e);
                      }}
                    />
                    <label class={`${CHECKBOX_CLASSES.LABEL}`} for={`checkbox-ba${this.config.tableId}`}>
                      Show Selected Only
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_START}`}>{this.$slots.start}</div>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_END}`}>
              <button
                aria-label="Close"
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${CLOSE_CLASS}`}
                onClick={() => this.toggleBulkActions()}>
                <div class={`${BUTTON_CLASSES.CONTENT} ${BUTTON_CLASSES.ICON_BUTTON} ${CLOSE_CLASS}`}>
                  <i class={`${ICON_CLASS} ${ICON_CLASSES.ICON_X}`}></i>
                </div>
              </button>
            </div>
          </div>
        )}
      </transition>
    );
  }
}
