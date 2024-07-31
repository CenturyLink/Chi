import { Component, Element, Prop, Watch, EventEmitter, Event, h } from '@stencil/core';
import {
  FORM_WRAPPER_LAYOUTS,
  FORM_WRAPPER_TYPES,
  FormWrapperLayouts,
  FormWrapperTypes,
} from '../../constants/constants';
import { FormWrapperCheckbox, FormWrapperRadio } from '../../constants/types';
import { v4 as uuid4 } from 'uuid';
import { FORM_CLASSES, FORM_WRAPPER_CLASSES, UTILITY_CLASSES } from '../../constants/classes';

@Component({
  tag: 'chi-form-wrapper',
  styleUrl: 'form-wrapper.scss',
  scoped: true,
})
export class FormWrapper {
  @Element() e: HTMLElement;

  /**
   *  to set form element type { checkbox, radio }.
   */
  @Prop({ reflect: true }) type!: FormWrapperTypes;

  /**
   *  to set layout { stacked, inline }.
   */
  @Prop() layout?: FormWrapperLayouts = 'stacked';

  /**
   * to set options
   */
  @Prop({ mutable: true }) options!: FormWrapperCheckbox[] | FormWrapperRadio[];

  /**
   * to set a lagend for all fields
   */
  @Prop() label?: string;

  @Event() chiChange: EventEmitter<FormWrapperCheckbox[] | FormWrapperRadio[]>;

  id: string = uuid4();

  @Watch('layout')
  layoutValidation(newValue: string) {
    if (!FORM_WRAPPER_LAYOUTS.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid type for form wrapper layout. Valid values are: ${FORM_WRAPPER_LAYOUTS.join(', ')}.`
      );
    }
  }

  @Watch('type')
  typeValidation(newValue: string) {
    if (!FORM_WRAPPER_TYPES.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid type for form wrapper type. Valid values are: ${FORM_WRAPPER_TYPES.join(', ')}.`
      );
    }
  }

  componentWillLoad() {
    this.options = this.options.map((item) => ({ ...item, id: item.id || `${this.id}-${uuid4()}` }));
  }

  _getLabel() {
    if (this.label) {
      return <chi-label>{this.label}</chi-label>;
    }
  }

  _getItems() {
    const itemGetter = {
      checkbox: this._getCheckbox,
      radio: this._getRadioButton,
    }[this.type].bind(this);

    return this.options?.map((item, index) => this._getFormItem(itemGetter(item), index === this.options.length - 1));
  }

  _getCheckbox(item: FormWrapperCheckbox) {
    const checked = item.checked && item.checked !== 'indeterminate';
    const indeterminate = item.checked === 'indeterminate';

    return (
      <chi-checkbox
        id={item.id}
        label={item.label}
        checked={checked}
        disabled={item.disabled}
        name={item.name}
        indeterminate={indeterminate}
        onChiChange={(ev: CustomEvent) => this._onChange(ev)}
      ></chi-checkbox>
    );
  }

  _getRadioButton(item: FormWrapperRadio) {
    return (
      <chi-radio-button
        id={item.id}
        label={item.label}
        checked={item.checked}
        disabled={item.disabled}
        name={item.name}
        onChiChange={(ev: CustomEvent) => this._onChange(ev)}
      ></chi-radio-button>
    );
  }

  _getItemWrapperClasses(isLast) {
    return [
      FORM_CLASSES.FORM_ITEM,
      this.layout !== 'inline' && !isLast && UTILITY_CLASSES.MARGIN.BOTTOM[1],
      this.layout === 'inline' && FORM_WRAPPER_CLASSES.LAYOUTS.INLINE,
    ]
      .filter(Boolean)
      .join(' ');
  }

  /**
   * @returns a given element in a form item wrapper with specified layout
   */
  _getFormItem(element: HTMLElement, isLast = false) {
    const classes = this._getItemWrapperClasses(isLast);

    return <div class={classes}>{element}</div>;
  }

  /**
   * Default change event handler
   */
  _onChange(ev: CustomEvent) {
    const target = ev.target as HTMLChiRadioButtonElement | HTMLChiCheckboxElement;
    const customHandler = {
      radio: () => this._onRadioButtonChange(target),
    }[this.type];

    ev.stopPropagation();

    if (customHandler) {
      customHandler();
    } else {
      this.options.find((item) => item.id === target.id).checked = target.checked;
    }

    this.chiChange.emit(this.options);
  }

  _onRadioButtonChange(target: HTMLChiRadioButtonElement) {
    this.options.forEach((item) => {
      item.checked = item.id === target.id;
    });
  }

  render() {
    return (
      <fieldset>
        {this._getLabel()}
        {this._getItems()}
      </fieldset>
    );
  }
}
