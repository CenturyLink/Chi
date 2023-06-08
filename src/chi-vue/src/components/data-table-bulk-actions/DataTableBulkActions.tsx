import { Emit, Prop, Watch } from 'vue-property-decorator';
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
import DataTable from '../data-table/DataTable';
import { ICON_CLASSES } from '@/constants/icons';
import { DATA_TABLE_EVENTS, GENERIC_EVENTS } from '@/constants/events';
import { Component, Vue } from '@/build/vue-wrapper';
import { Transition } from 'vue';

@Component({})
export default class DataTableBulkActions extends Vue {
  @Prop({ required: true }) selectedRows!: number;
  @Prop({ required: true }) uuid!: number | string;

  isBulkActionsVisible = this._checkBulkActionVisibility();

  @Emit(DATA_TABLE_EVENTS.BULK_ACTIONS.SHOW_SELECTED_ONLY)
  _emitSelectedRows(e: any) {
    return e.srcElement.checked;
  }

  @Emit(DATA_TABLE_EVENTS.BULK_ACTIONS.SHOW_SELECTED_ONLY)
  _emitSelectedAll(e: Event) {
    return e;
  }

  @Emit(GENERIC_EVENTS.CANCEL)
  _emitCancel() {
    // This is intentional
  }

  _cancel() {
    this.isBulkActionsVisible = false;
    this._emitCancel();
  }

  _checkBulkActionVisibility() {
    return this.selectedRows > 0;
  }

  @Watch('selectedRows')
  visibilityChange() {
    this.isBulkActionsVisible = this._checkBulkActionVisibility();
  }

  created() {
    this.visibilityChange();
  }

  mounted() {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      (dataTableComponent as DataTable)._bulkActionsComponent = this;
    }
  }

  render() {
    const defaultSlot = this.$slots['default'] ? this.$slots['default'](0) : null;

    return (
      <Transition name="slide-fade">
        {this.isBulkActionsVisible && (
          <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS}`}>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_TOP} ${UTILITY_CLASSES.Z_INDEX.Z_10}`}>
              <button
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.FLAT} ${UTILITY_CLASSES.PADDING.X[1]}`}
                onClick={(e: Event) => {
                  e.preventDefault();
                  this._emitSelectedAll(e);
                }}
              >
                Select all
              </button>
              <button
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.FLAT} ${UTILITY_CLASSES.PADDING.X[1]}`}
                onClick={() => this._cancel()}
              >
                Cancel
              </button>
            </div>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_START} ${UTILITY_CLASSES.Z_INDEX.Z_10}`}>
              <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_RESULTS}`}>
                <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_LABEL}`}>
                  Actions ({this.selectedRows} Items Selected)
                </div>
                <div class={`${FORM_CLASSES.FORM_ITEM}`}>
                  <div class={`${CHECKBOX_CLASSES.CHECKBOX}`}>
                    <input
                      id={`checkbox-ba-${this.uuid}-${this.selectedRows}`}
                      class={`${CHECKBOX_CLASSES.INPUT}`}
                      type="checkbox"
                      onClick={(e: Event) => {
                        this._emitSelectedRows(e);
                      }}
                    />
                    <label class={`${CHECKBOX_CLASSES.LABEL}`} for={`checkbox-ba-${this.uuid}-${this.selectedRows}`}>
                      Show Selected Only
                    </label>
                  </div>
                </div>
              </div>
              <div class="chi-divider -vertical"></div>
              {defaultSlot}
            </div>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_END}`}>
              <button
                aria-label="Close bulk actions"
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${CLOSE_CLASS}`}
                onClick={() => {
                  this.isBulkActionsVisible = false;
                  this._emitCancel();
                }}
              >
                <div class={`${BUTTON_CLASSES.CONTENT} ${BUTTON_CLASSES.ICON_BUTTON} ${CLOSE_CLASS}`}>
                  <i aria-hidden="true" class={`${ICON_CLASS} ${ICON_CLASSES.ICON_X}`}></i>
                </div>
              </button>
            </div>
          </div>
        )}
      </Transition>
    );
  }
}
