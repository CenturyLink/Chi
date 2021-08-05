import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  BUTTON_CLASSES,
  CLOSE_CLASS,
  DATA_TABLE_CLASSES,
  FORM_CLASSES,
  ICON_CLASS,
  INPUT_CLASSES,
  SEARCH_INPUT_CLASSES,
} from '@/constants/classes';
import { SearchInputSizes } from '@/constants/types';
import { SEARCH_INPUT_EVENTS } from '@/constants/events';
import { findComponent } from '@/utils/utils';
import DataTableToolbar from '@/components/data-table-toolbar/DataTableToolbar';

@Component
export default class SearchInput extends Vue {
  @Prop() size?: SearchInputSizes;
  @Prop() disabled?: boolean;
  @Prop() name?: string;
  @Prop() placeholder?: string;
  @Prop() value?: string;
  @Prop() dataTableSearch?: boolean;
  @Prop() portal?: boolean;

  cleanButtonVisible = !!(this.$props.value && !this.$props.disabled);
  inputValue = this.$props.value || '';

  _handleValueInput(ev: Event) {
    const newValue = (ev.target as HTMLInputElement).value;

    this.inputValue = newValue;
    this.cleanButtonVisible = newValue !== '';
    this.$emit(SEARCH_INPUT_EVENTS.INPUT, newValue);
  }

  _cleanInput() {
    const input = this.$refs.input;

    this.inputValue = '';
    this.cleanButtonVisible = false;
    this.$emit(SEARCH_INPUT_EVENTS.CLEAN);
    (input as HTMLInputElement).focus();
  }

  mounted() {
    if (this.$props.dataTableSearch) {
      const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');

      if (dataTableToolbarComponent) {
        (dataTableToolbarComponent as DataTableToolbar)._searchComponent = this;
      }
    }
  }

  render() {
    const searchInputElement = (
      <input
        ref="input"
        type="search"
        class={`
        ${INPUT_CLASSES.INPUT}
        ${SEARCH_INPUT_CLASSES.SEARCH_INPUT}
        ${this.$props.size ? `-${this.$props.size}` : ''}
      `}
        placeholder={this.$props.placeholder || ''}
        value={this.inputValue}
        name={this.$props.name || null}
        disabled={this.$props.disabled}
        onFocus={() => this.$emit(SEARCH_INPUT_EVENTS.FOCUS)}
        onBlur={() => this.$emit(SEARCH_INPUT_EVENTS.BLUR)}
        onInput={(ev: Event) => this._handleValueInput(ev)}
        onChange={(ev: Event) => {
          this.$emit(SEARCH_INPUT_EVENTS.CHANGE, (ev.target as HTMLInputElement).value);
        }}
        autocomplete="off"
        aria-label="search input"
      />
    );

    const searchXIcon = this.cleanButtonVisible ? (
      <button
        class={`${BUTTON_CLASSES.BUTTON}
        ${BUTTON_CLASSES.ICON_BUTTON}
        ${CLOSE_CLASS} -sm`}
        onClick={() => this._cleanInput()}
        aria-label="Clear">
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
        ${this.$props.size === 'sm' ? '-sm' : ''}
        `}
        onClick={() => this.$emit(SEARCH_INPUT_EVENTS.SEARCH, this.inputValue)}
        aria-label="Search">
        <div class={BUTTON_CLASSES.CONTENT}>
          <i
            class={`
          ${ICON_CLASS} icon-search
          ${this.portal && '-icon--primary'}
          `}
            aria-hidden="true"></i>
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
    return this.$props.dataTableSearch ? toolbar : formItem;
  }
}
