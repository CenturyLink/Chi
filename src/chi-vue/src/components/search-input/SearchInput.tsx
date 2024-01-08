import { Emit, Inject, Prop, Watch } from 'vue-property-decorator';
import {
  BUTTON_CLASSES,
  CLOSE_CLASS,
  DATA_TABLE_CLASSES,
  FORM_CLASSES,
  GENERIC_SIZE_CLASSES,
  ICON_CLASS,
  INPUT_CLASSES,
  SEARCH_INPUT_CLASSES,
} from '@/constants/classes';
import { SearchInputSizes, ToolbarRef } from '@/constants/types';
import { SEARCH_INPUT_EVENTS } from '@/constants/events';
import { Component, Vue } from '@/build/vue-wrapper';
import { TOOLBAR_KEYS } from '@/constants/constants';

@Component({})
export default class SearchInput extends Vue {
  @Prop() size?: SearchInputSizes;
  @Prop() disabled?: boolean;
  @Prop() name?: string;
  @Prop() placeholder?: string;
  @Prop() value?: string;
  @Prop() dataTableSearch?: boolean;
  @Prop() portal?: boolean;
  @Prop() readOnly?: boolean;

  @Inject({ from: TOOLBAR_KEYS.SEARCH_INPUT })
  toolbarSearch?: ToolbarRef;

  cleanButtonVisible?: boolean = false;
  inputValue = '';

  @Emit(SEARCH_INPUT_EVENTS.INPUT)
  _emitInput(value: string) {
    return value;
  }

  @Emit(SEARCH_INPUT_EVENTS.CHANGE)
  _emitChange(value: string) {
    return value;
  }

  @Emit(SEARCH_INPUT_EVENTS.SEARCH)
  _emitSearch(value: string) {
    if (this.toolbarSearch?.callback) {
      this.toolbarSearch.callback();
    }

    return value;
  }

  @Emit(SEARCH_INPUT_EVENTS.FOCUS)
  _emitFocus() {
    // This is intentional
  }

  @Emit(SEARCH_INPUT_EVENTS.BLUR)
  _emitBlur() {
    // This is intentional
  }

  @Emit(SEARCH_INPUT_EVENTS.CLEAN)
  _emitClean() {
    // This is intentional
  }

  @Watch('value')
  updateValue(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.inputValue = newValue;
    }
  }

  _handleValueInput(ev: Event) {
    const newValue = (ev.target as HTMLInputElement).value;

    this.inputValue = newValue;
    this.cleanButtonVisible = newValue !== '';
    this._emitInput(newValue);
  }

  _cleanInput() {
    const input = this.$refs.input;

    this.inputValue = '';
    this.cleanButtonVisible = false;
    this._emitClean();
    (input as HTMLInputElement).focus();
  }

  _initDataFromProps(): void {
    this.cleanButtonVisible = !!(this.value && !this.disabled);
    this.inputValue = this.value || '';
  }

  beforeMount() {
    this._initDataFromProps();
  }

  render() {
    const searchInputElement = (
      <input
        ref="input"
        type="search"
        class={`
        ${INPUT_CLASSES.INPUT}
        ${SEARCH_INPUT_CLASSES.SEARCH_INPUT}
        ${this.size ? `-${this.size}` : ''}
      `}
        placeholder={this.placeholder || ''}
        value={this.inputValue}
        name={this.name || ''}
        disabled={this.disabled}
        onFocus={() => this._emitFocus()}
        onBlur={() => this._emitBlur()}
        onInput={(ev: Event) => this._handleValueInput(ev)}
        onChange={(ev: Event) => {
          this._emitChange((ev.target as HTMLInputElement).value);
        }}
        autocomplete="off"
        aria-label="search input"
        readonly={this.readOnly}
      />
    );

    const searchXIcon = this.cleanButtonVisible ? (
      <button
        class={`${BUTTON_CLASSES.BUTTON}
        ${BUTTON_CLASSES.ICON_BUTTON}
        ${CLOSE_CLASS}
        ${GENERIC_SIZE_CLASSES.XS}`}
        onClick={() => {
          if (!this.readOnly) {
            this._cleanInput();
          }
        }}
        aria-label="Clear"
      >
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-x`} aria-hidden="true"></i>
        </div>
      </button>
    ) : null;

    const searchIcon = (
      <button
        class={`
        ${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON}
        ${BUTTON_CLASSES.FLAT} ${BUTTON_CLASSES.BG_NONE}
        ${this.size ? `-${this.size}` : ''}
        `}
        onClick={() => this._emitSearch(this.inputValue)}
        aria-label="Search"
      >
        <div class={BUTTON_CLASSES.CONTENT}>
          <i
            class={`
          ${ICON_CLASS} icon-search
          `}
            aria-hidden="true"
          ></i>
        </div>
      </button>
    );

    const formItem = (
      <div class={FORM_CLASSES.FORM_ITEM}>
        <div class={`${INPUT_CLASSES.WRAPPER} ${INPUT_CLASSES.ICON.RIGHT}`}>
          {searchInputElement}
          {searchXIcon}
          {searchIcon}
        </div>
      </div>
    );
    const toolbar = <div class={DATA_TABLE_CLASSES.SEARCH}>{formItem}</div>;

    return this.dataTableSearch ? toolbar : formItem;
  }
}
