import { Component, Prop, Vue } from 'vue-property-decorator';
import { findComponent } from '@/utils/utils';
import {
  BULK_ACTIONS_CLASSES,
  BUTTON_CLASSES,
  CHECKBOX_CLASSES,
  CLOSE_CLASS,
  DIVIDER_CLASSES,
  FORM_CLASSES,
  ICON_CLASS,
  ICON_CLASSES,
  UTILITY_CLASSES,
} from '@/constants/classes';
import DataTable from '../data-table/DataTable';

@Component({})
export default class DataTableBulkActions extends Vue {
  @Prop() bulkActionConfig!: any;

  showBulkActions?: boolean = true;

  _selectedRows(e: any) {
    this.$emit('chiShowSelectedOnly', e.srcElement.checked);
  }

  mounted() {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      (dataTableComponent as DataTable)._bulkActionsComponent = this;
    }
  }

  toggleCloseBulkActions() {
    this.$props.bulkActionConfig.selectedRow = false;
  }

  render() {
    return (
      <transition name="slide-fade">
        {this.$props.bulkActionConfig.selectedRow.length > 0 && this.$props.bulkActionConfig.selectedRow && (
          <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS}`}>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_TOP} ${UTILITY_CLASSES.Z_INDEX.Z_40}`}>
              <chi-link href="#">Select all</chi-link>
              <chi-link href="#">Clear</chi-link>
            </div>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_START}`}>
              <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_RESULTS}`}>
                <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_LABELS}`}>
                  Actions ({this.bulkActionConfig.selectedRow.length} Selected)
                </div>
                <div class={`${FORM_CLASSES.FORM_ITEM}`}>
                  <div class={`${CHECKBOX_CLASSES.checkbox}`}>
                    <input
                      id={`checkbox-ba${this.bulkActionConfig.selectedRow.length}`}
                      class={`${CHECKBOX_CLASSES.INPUT}`}
                      type="checkbox"
                      onclick={(e: Event) => {
                        this._selectedRows(e);
                      }}
                    />
                    <label
                      class={`${CHECKBOX_CLASSES.LABEL}`}
                      for={`checkbox-ba${this.bulkActionConfig.selectedRow.length}`}>
                      Show Selected Only
                    </label>
                  </div>
                </div>
              </div>
              <div class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL}`}></div>
              <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_BUTTONS}`}>
                <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_BUTTONS_MOBILE} ${UTILITY_CLASSES.Z_INDEX.Z_40}`}>
                  <button
                    class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT}`}
                    aria-label="Button action"
                    data-tooltip="Edit">
                    <div class={`${BUTTON_CLASSES.CONTENT}`}>
                      <i class={`${ICON_CLASS} ${ICON_CLASSES.ICON_EDIT}`} aria-hidden="true"></i>
                    </div>
                  </button>
                  <button
                    class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT}`}
                    aria-label="Button action"
                    data-tooltip="Compose">
                    <div class={`${BUTTON_CLASSES.CONTENT}`}>
                      <i class={`${ICON_CLASS} ${ICON_CLASSES.ICON_COMPOSE}`} aria-hidden="true"></i>
                    </div>
                  </button>
                  <button
                    class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT}`}
                    aria-label="Button action"
                    data-tooltip="Delete">
                    <div class={`${BUTTON_CLASSES.CONTENT}`}>
                      <i class={`${ICON_CLASS} ${ICON_CLASSES.ICON_DELETE}`} aria-hidden="true"></i>
                    </div>
                  </button>
                  <button
                    class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT}`}
                    aria-label="Button action"
                    data-tooltip="Print">
                    <div class={`${BUTTON_CLASSES.CONTENT}`}>
                      <i class={`${ICON_CLASS} ${ICON_CLASSES.ICON_PRINT}`} aria-hidden="true"></i>
                    </div>
                  </button>
                </div>
                <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_BUTTONS_DESKTOP}`}>
                  <button class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.SIZES.XS}`}>
                    <div class={`${BUTTON_CLASSES.CONTENT}`}>
                      <i class={`${ICON_CLASS} ${ICON_CLASSES.ICON_ARROW_BOTTOM}`} aria-hidden="true"></i>
                      <span>Download</span>
                    </div>
                  </button>
                  <button class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.SIZES.XS}`}>
                    <div class={`${BUTTON_CLASSES.CONTENT}`}>
                      <i class={`${ICON_CLASS} ${ICON_CLASSES.ICON_COMPOSE}`} aria-hidden="true"></i>
                      <span>Compose</span>
                    </div>
                  </button>
                  <button class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.SIZES.XS}`}>
                    <div class={`${BUTTON_CLASSES.CONTENT}`}>
                      <i class={`${ICON_CLASS} ${ICON_CLASSES.ICON_DELETE}`} aria-hidden="true"></i>
                      <span>Delete</span>
                    </div>
                  </button>
                  <button class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.SIZES.XS}`}>
                    <div class={`${BUTTON_CLASSES.CONTENT}`}>
                      <i class={`${ICON_CLASS} ${ICON_CLASSES.ICON_PRINT}`} aria-hidden="true"></i>
                      <span>Print</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class={`${BULK_ACTIONS_CLASSES.BULK_ACTIONS_END}`}>
              <button
                aria-label="Close"
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${CLOSE_CLASS}`}
                onClick={() => this.toggleCloseBulkActions()}>
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
