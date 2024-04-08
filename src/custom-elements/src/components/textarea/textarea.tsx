import { Component, Element, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';
import { CHI_STATES, ChiStates } from '../../constants/states';
import { ICON_COLORS, IconColors } from '../../constants/color';
import { TEXT_INPUT_SIZES, TextInputSizes } from '../../constants/size';
import { addMutationObserver } from '../../utils/mutationObserver';
import { UTILITY_CLASSES } from '../../constants/classes';

@Component({
  tag: 'chi-textarea',
  styleUrl: 'textarea.scss',
  scoped: true,
})
export class Textarea {
  @Element() el: HTMLChiTextareaElement;
  /**
   * To define state color of Textarea
   */
  @Prop({ reflect: true }) state: ChiStates;
  /**
   * To add a left positioned icon
   */
  @Prop({ reflect: true }) iconLeft: string;
  /**
   * To add a right positioned icon
   */
  @Prop({ reflect: true }) iconRight: string;
  /**
   * To define color of left icon
   */
  @Prop({ reflect: true }) iconLeftColor: IconColors;
  /**
   * To define color of right icon
   */
  @Prop({ reflect: true }) iconRightColor: IconColors;
  /**
   * To define size of Textarea
   */
  @Prop({ reflect: true }) size?: TextInputSizes = 'md';
  /**
   * To define placeholder of Textarea
   */
  @Prop({ reflect: true }) placeholder: string;
  /**
   * To display an additional helper text message below the Textarea
   */
  @Prop({ reflect: true }) helperMessage: string;
  /**
   * To read value of Textarea
   */
  @Prop({ attribute: null, mutable: true }) value = '';
  /**
   * To define name of Textarea
   */
  @Prop({ reflect: true }) name: string;
  /**
   * To disable Textarea
   */
  @Prop({ reflect: true }) disabled = false;
  /**
   * To prevent Textarea value from being changed
   */
  @Prop({ reflect: true }) readonly = false;
  /**
   * To show copy text icon
   */
  @Prop({ reflect: true }) copyText = false;
  /**
   * To define -hover, -focus statuses
   */
  @Prop() _status: '-hover' | '-focus';
  /**
   * Triggered when an alteration to the element's value is committed by the user
   */
  @Event({ eventName: 'chiChange' }) eventChange: EventEmitter<string>;
  /**
   * Triggered when the user changed the element's value but did not commit the change yet
   */
  @Event({ eventName: 'chiInput' }) eventInput: EventEmitter<string>;
  /**
   * Triggered when the user sets focus on the element.
   */
  @Event({ eventName: 'chiFocus' }) eventFocus: EventEmitter;
  /**
   * Triggered when the element has lost focus.
   */
  @Event({ eventName: 'chiBlur' }) eventBlur: EventEmitter;

  @Watch('state')
  stateValidation(newValue: ChiStates) {
    const validValues = CHI_STATES.join(', ');

    if (newValue && !CHI_STATES.includes(newValue)) {
      throw new Error(`${newValue} is not a valid state for textarea. If provided, valid values are: ${validValues}. `);
    }
  }

  @Watch('size')
  sizeValidation(newValue: TextInputSizes) {
    const validValues = TEXT_INPUT_SIZES.join(', ');

    if (newValue && !TEXT_INPUT_SIZES.includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for textarea. If provided, valid values are: ${validValues}. `);
    }
  }

  colorValidation(newValue: IconColors) {
    const validValues = ICON_COLORS.join(', ');

    if (newValue && !ICON_COLORS.includes(newValue)) {
      throw new Error(`${newValue} is not a valid color for icon. If provided, valid values are: ${validValues}. `);
    }
  }

  @Watch('iconLeftColor')
  iconLeftColorValidation(newValue: IconColors) {
    this.colorValidation(newValue);
  }

  @Watch('iconRightColor')
  iconRightColorValidation(newValue: IconColors) {
    this.colorValidation(newValue);
  }

  _handleValueInput(valueChange: Event) {
    this.value = (valueChange.target as HTMLInputElement).value;
    this.eventInput.emit(this.value);
  }

  _handleValueChange() {
    this.eventChange.emit(this.value);
  }

  componentWillLoad() {
    this.value = this.el.textContent;
    this.stateValidation(this.state);
    this.iconLeftColorValidation(this.iconLeftColor);
    this.iconRightColorValidation(this.iconRightColor);
    this.sizeValidation(this.size);
  }

  connectedCallback() {
    addMutationObserver.call(this);
  }

  _getTextAreaElement(): HTMLTextAreaElement {
    const classes = [
      'chi-input',
      this.state && `-${this.state}`,
      this.size && `-${this.size}`,
      this._status && `-${this._status}`,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <textarea
        class={classes}
        placeholder={this.placeholder || ''}
        name={this.name || ''}
        disabled={this.disabled}
        readonly={this.readonly}
        id={this.el.id ? `${this.el.id}-control` : null}
        onFocus={() => this.eventFocus.emit()}
        onBlur={() => this.eventBlur.emit()}
        onInput={(ev) => this._handleValueInput(ev)}
        onChange={() => this._handleValueChange()}
      >
        <slot></slot>
      </textarea>
    );
  }

  _getHelperMessage() {
    return this.helperMessage && <chi-helper-message state={this.state}>{this.helperMessage}</chi-helper-message>;
  }

  _getIconsData() {
    const data = { classes: '', iconRight: null, iconLeft: null };
    const classes = [];

    if (this.iconRight) {
      data.iconRight = <chi-icon color={this.iconRightColor || null} icon={this.iconRight} />;
      classes.push('-icon--right');
    }

    if (this.iconLeft) {
      data.iconLeft = <chi-icon color={this.iconLeftColor || null} icon={this.iconLeft} />;
      classes.push('-icon--left');
    }

    data.classes = classes.join(' ');

    return data;
  }

  _shouldWrapTextarea() {
    return Boolean(this.iconLeft || this.iconRight || this.helperMessage || this.copyText);
  }

  _getWrappedTextarea(textareaElement: HTMLTextAreaElement) {
    const iconsData = this._getIconsData();
    const helperMessage = this._getHelperMessage();

    textareaElement = (
      <div class={`chi-input__wrapper ${iconsData.classes}${this.copyText ? ' -flex--grow1' : ''}`}>
        {textareaElement}
        {iconsData.iconLeft}
        {iconsData.iconRight}
        {helperMessage}
      </div>
    );

    if (this.copyText) {
      textareaElement = this._addCopyText(textareaElement);
    }

    return textareaElement;
  }

  _addCopyText(textareaElement: HTMLElement) {
    const copySizeMapping = {
      xs: 'xs',
      sm: 'xs',
      md: 'sm',
      lg: 'sm--2',
      xl: 'sm--3',
    };

    return (
      <div class={`${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.ALIGN_ITEMS.START}`}>
        {textareaElement}
        <chi-copy-text text={this.value} disabled={this.disabled} size={copySizeMapping[this.size]}></chi-copy-text>
      </div>
    );
  }

  render() {
    let textareaElement = this._getTextAreaElement();

    if (this._shouldWrapTextarea()) {
      textareaElement = this._getWrappedTextarea(textareaElement);
    }

    return textareaElement;
  }
}
