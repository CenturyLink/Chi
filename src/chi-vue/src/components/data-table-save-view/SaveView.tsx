import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
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
import { SaveViewModes } from '@/constants/types';
import Tooltip from '../tooltip/tooltip';
import { uuid4 } from '@/utils/utils';
import './save-view.scss';

@Component
export default class SaveView extends Vue {
  @Prop() active!: boolean;
  @Prop() results!: string;
  @Prop() default?: boolean;
  @Prop() id?: string;
  @Prop() isPopoverActive?: boolean;
  @Prop() mode?: SaveViewModes;
  @Prop() title?: string;

  isRibbonShown = !!this.$props.active;
  isSaveViewVisible = !!this.$props.active;
  isInfoPopoverActive = !!this.$props.isInfoPopoverActive;
  isDefaultChecked = !!this.$props.default;
  viewMode: SaveViewModes = this.$props.mode || SaveViewModes.BASE;
  viewTitle = this.$props.title || '';
  uuid: string | null = this.$props.id || null;

  @Watch('active')
  updateVisibility(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.isSaveViewVisible = newValue;
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

  render() {
    const infoIcon = this.$scopedSlots['info-icon'] && this.$scopedSlots['info-icon']({});
    const infoPopover = this.$scopedSlots['info-popover'] && this.$scopedSlots['info-popover']({});
    const arrowDown = <i class={`${ICON_CLASS} icon-arrow-down ${GENERIC_SIZE_CLASSES.XS}`} aria-hidden="true" />;
    const ribbonLabel = (
      <span class={SAVE_VIEW_CLASSES.LABEL}>{this.viewMode === SaveViewModes.CREATE ? 'New' : 'Edit'} View</span>
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
            <span class={SAVE_VIEW_CLASSES.LABEL}>Search Results </span>
            <span>{this.$props.results}</span>
          </div>
          <div class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL}`}></div>
          <a
            class={`${LINK_CLASSES.LINK} ${GENERIC_SIZE_CLASSES.MD}`}
            href="#"
            onClick={(e: Event) => {
              e.preventDefault();
              this.setMode(SaveViewModes.CREATE);
            }}>
            Save View
          </a>
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
            <span class={SAVE_VIEW_CLASSES.LABEL}>View</span>
          </div>
          <input v-model={this.viewTitle} class={INPUT_CLASSES.INPUT} type="text" aria-label="Save view" />
          <div class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL}`}></div>
          <div class={CHECKBOX_CLASSES.checkbox}>
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
            disabled={
              this.viewTitle.length === 0 ||
              (this.viewTitle === this.$props.title && this.isDefaultChecked === !!this.$props.default)
            }>
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
          <div class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL}`}></div>
          {this.isRibbonShown ? editTooltip : editIconButton}
          {this.isRibbonShown ? deleteTooltip : deleteIconButton}
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
              <span class={SAVE_VIEW_CLASSES.LABEL}>Are you sure you want to delete this Saved View?</span>
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
