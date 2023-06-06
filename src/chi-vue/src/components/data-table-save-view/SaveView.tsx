import { Prop, Watch } from 'vue-property-decorator';
import {
  BUTTON_CLASSES,
  CHECKBOX_CLASSES,
  DIVIDER_CLASSES,
  GENERIC_SIZE_CLASSES,
  ICON_CLASS,
  INPUT_CLASSES,
  LINK_CLASSES,
  SAVE_VIEW_CLASSES,
} from '@/constants/classes';
import { SAVE_VIEW_EVENTS } from '@/constants/events';
import { SaveViewConfig, SaveViewModes } from '@/constants/types';
import Tooltip from '../tooltip/tooltip';
import { uuid4 } from '@/utils/utils';
import './save-view.scss';
import { defaultConfig } from './default-config';
import { Component, Vue } from '@/build/vue-wrapper';

@Component({})
export default class SaveView extends Vue {
  @Prop() config!: SaveViewConfig;

  isRibbonShown = !!this.$props.config.active;
  isSaveViewVisible = !!this.$props.config.active;
  isDefaultChecked = !!this.$props.config.default;
  isReadOnly = !!this.$props.config.readonly;
  viewMode: SaveViewModes = this.$props.config.mode || defaultConfig.mode;
  viewTitle = this.$props.config.title || defaultConfig.title;
  uuid: string | null = this.$props.config.id || null;
  deleteLabel = this.$props.config.label?.delete || defaultConfig.label?.delete;
  mainLabel = this.$props.config.label?.main || defaultConfig.label?.main;
  inputLabel = this.$props.config.input?.label || defaultConfig.input?.label;
  resultsLabel = this.$props.config.label?.results || defaultConfig.label?.results;
  saveButtonDisabled = !!this.$props.config.saveButtonDisabled || defaultConfig.saveButtonDisabled;

  @Watch('config')
  dataConfigChange(newValue: SaveViewConfig, oldValue: SaveViewConfig) {
    if (newValue.active !== oldValue.active) {
      this.isSaveViewVisible = newValue.active;
    }
  }

  handlerClickCancel() {
    if (this.viewMode === SaveViewModes.CREATE) {
      this.viewMode = SaveViewModes.BASE;
    } else if (this.viewMode === SaveViewModes.EDIT || this.viewMode === SaveViewModes.DELETE) {
      this.viewMode = SaveViewModes.SAVED;
    }
  }

  handlerClickSave() {
    const uuid = this.uuid || uuid4();

    this.$emit(SAVE_VIEW_EVENTS.SAVE, {
      id: uuid,
      title: this.viewTitle,
      default: this.isDefaultChecked,
    });
    this.setMode(SaveViewModes.SAVED);
  }

  handlerAfterEnter() {
    this.isRibbonShown = true;
    this.$emit(SAVE_VIEW_EVENTS.SHOWN);
  }

  handlerAfterLeave() {
    this.isRibbonShown = false;
    this.$emit(SAVE_VIEW_EVENTS.HIDDEN);
  }

  setMode(mode: SaveViewModes) {
    if (Object.values(SaveViewModes).includes(mode)) {
      this.viewMode = mode;
    }
  }

  handlerClickDelete() {
    this.viewTitle = '';
    this.isDefaultChecked = false;
    this.setMode(SaveViewModes.BASE);
    this.$emit(SAVE_VIEW_EVENTS.SAVE, this.uuid);
  }

  handlerClose() {
    this.isSaveViewVisible = false;
    this.$emit(SAVE_VIEW_EVENTS.HIDE);
  }

  handlerClickSaveLink() {
    this.setMode(SaveViewModes.CREATE);
    this.$emit(SAVE_VIEW_EVENTS.SAVE_LINK);
  }

  disableSaveButton() {
    if (this.saveButtonDisabled !== undefined) {
      return this.saveButtonDisabled;
    }

    return (
      this.viewTitle.length === 0 ||
      (this.viewTitle === this.$props.config.title && this.isDefaultChecked === !!this.$props.default)
    );
  }

  render() {
    const infoIcon = this.$scopedSlots['info-icon'] && this.$scopedSlots['info-icon']({});
    const infoPopover = this.$scopedSlots['info-popover'] && this.$scopedSlots['info-popover']({});
    const customActions = this.$scopedSlots['custom-actions'] && this.$scopedSlots['custom-actions']({});
    const arrowDown = <i class={`${ICON_CLASS} icon-arrow-down ${GENERIC_SIZE_CLASSES.XS}`} aria-hidden="true" />;
    const ribbonLabel = (
      <span class={SAVE_VIEW_CLASSES.LABEL}>
        {this.viewMode === SaveViewModes.CREATE ? 'New' : 'Edit'} {this.mainLabel}
      </span>
    );
    const closeButton = (
      <button
        class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT}`}
        aria-label="Close save view"
        onClick={this.handlerClose}>
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-x`} aria-hidden="true"></i>
        </div>
      </button>
    );
    const baseMode = (
      <div class={SAVE_VIEW_CLASSES.BASE}>
        <div class={SAVE_VIEW_CLASSES.START}>
          {arrowDown}
          <div class={SAVE_VIEW_CLASSES.RESULTS}>
            <span class={SAVE_VIEW_CLASSES.LABEL}>{this.resultsLabel} </span>
            <span>{this.$props.config.results}</span>
          </div>
          {!this.isReadOnly && (
            <template class={SAVE_VIEW_CLASSES.NO_ACTIONS}>
              <div class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL}`}></div>
              <a
                class={`${LINK_CLASSES.LINK} ${GENERIC_SIZE_CLASSES.MD}`}
                href="#"
                onClick={(e: Event) => {
                  e.preventDefault();
                  this.handlerClickSaveLink();
                }}>
                {`Save ${this.mainLabel}`}
              </a>
            </template>
          )}
        </div>
        <div class={SAVE_VIEW_CLASSES.END}>{closeButton}</div>
      </div>
    );
    const editMode = (
      <div class={SAVE_VIEW_CLASSES.EDIT}>
        <div class={SAVE_VIEW_CLASSES.START}>
          <div class={SAVE_VIEW_CLASSES.RIBBON}>
            <div class={SAVE_VIEW_CLASSES.RIBBON_CONTENT}>
              {ribbonLabel}
              {infoIcon}
            </div>
            <div class={SAVE_VIEW_CLASSES.RIBBON_ARROW}></div>
          </div>
          {arrowDown}
          <div class={SAVE_VIEW_CLASSES.RESULTS}>
            <span class={SAVE_VIEW_CLASSES.LABEL}>{this.inputLabel}</span>
          </div>
          <input
            v-model={this.viewTitle}
            class={INPUT_CLASSES.INPUT}
            placeholder={this.config.input?.placeholder}
            type="text"
            aria-label="Save view"
          />
          <div class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL}`}></div>
          <div class={CHECKBOX_CLASSES.CHECKBOX}>
            <input
              v-model={this.isDefaultChecked}
              class={CHECKBOX_CLASSES.INPUT}
              id="chi-save-view__default"
              type="checkbox"
            />
            <label class={CHECKBOX_CLASSES.LABEL} for="chi-save-view__default">
              Default
            </label>
          </div>
          {customActions}
          {infoPopover}
        </div>
        <div class={SAVE_VIEW_CLASSES.END}>
          <button
            class={`${BUTTON_CLASSES.BUTTON} ${GENERIC_SIZE_CLASSES.XS}`}
            aria-label="Button cancel"
            onClick={this.handlerClickCancel}>
            Cancel
          </button>
          <button
            class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.PRIMARY} ${GENERIC_SIZE_CLASSES.XS}`}
            aria-label="Button save"
            onClick={() => this.handlerClickSave()}
            disabled={this.disableSaveButton()}>
            Save
          </button>
        </div>
      </div>
    );
    const editIconButton = (
      <button
        aria-label="Edit"
        class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT} ${GENERIC_SIZE_CLASSES.SM}`}
        disabled={this.viewMode === SaveViewModes.DELETE}
        onClick={() => this.setMode(SaveViewModes.EDIT)}>
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-edit`} aria-hidden="true"></i>
        </div>
      </button>
    );
    const editTooltip = <Tooltip message="Edit">{editIconButton}</Tooltip>;
    const deleteIconButton = (
      <button
        aria-label="Delete"
        class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT} ${GENERIC_SIZE_CLASSES.SM}`}
        disabled={this.viewMode === SaveViewModes.DELETE}
        onClick={() => this.setMode(SaveViewModes.DELETE)}>
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-delete`} aria-hidden="true"></i>
        </div>
      </button>
    );
    const deleteTooltip = <Tooltip message="Delete">{deleteIconButton}</Tooltip>;
    const savedMode = (
      <div class={SAVE_VIEW_CLASSES.SAVED}>
        <div class={SAVE_VIEW_CLASSES.START}>
          {arrowDown}
          <div class={SAVE_VIEW_CLASSES.RESULTS}>
            <span class={SAVE_VIEW_CLASSES.LABEL}>{this.viewTitle}</span>
          </div>
          {!this.isReadOnly && (
            <template class={SAVE_VIEW_CLASSES.NO_ACTIONS}>
              <div class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL}`}></div>
              {this.isRibbonShown ? editTooltip : editIconButton}
              {this.isRibbonShown ? deleteTooltip : deleteIconButton}
            </template>
          )}
        </div>
        <div class={SAVE_VIEW_CLASSES.END}>{closeButton}</div>
      </div>
    );
    const deleteMode = (
      <div class={SAVE_VIEW_CLASSES.SAVED}>
        <div class={SAVE_VIEW_CLASSES.START}>
          {arrowDown}
          <div class={SAVE_VIEW_CLASSES.RESULTS}>
            <div class={SAVE_VIEW_CLASSES.LABEL}>{this.viewTitle}</div>
          </div>
          <div class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL}`}></div>
          {editIconButton}
          {deleteIconButton}
          <div class={SAVE_VIEW_CLASSES.DELETE}>
            <div class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL}`}></div>
            <div class={SAVE_VIEW_CLASSES.RESULTS}>
              <span class={SAVE_VIEW_CLASSES.LABEL}>{`Are you sure you want to delete this ${this.deleteLabel}?`}</span>
            </div>
            <button
              class={`${BUTTON_CLASSES.BUTTON} ${GENERIC_SIZE_CLASSES.XS}`}
              aria-label="Button cancel"
              onClick={this.handlerClickCancel}>
              Cancel
            </button>
            <button
              class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.PRIMARY} ${GENERIC_SIZE_CLASSES.XS}`}
              aria-label="Button delete"
              onClick={this.handlerClickDelete}>
              Delete
            </button>
          </div>
        </div>
        <div class={SAVE_VIEW_CLASSES.END}>{closeButton}</div>
      </div>
    );
    const modes = {
      base: baseMode,
      create: editMode,
      delete: deleteMode,
      edit: editMode,
      saved: savedMode,
    };
    const ribbon = this.isSaveViewVisible ? (
      <div class={SAVE_VIEW_CLASSES.SAVE_VIEW}>{modes[this.viewMode]}</div>
    ) : null;

    return (
      <transition onAfter-enter={this.handlerAfterEnter} onAfter-leave={this.handlerAfterLeave} name="slide-fade">
        {ribbon}
      </transition>
    );
  }
}
