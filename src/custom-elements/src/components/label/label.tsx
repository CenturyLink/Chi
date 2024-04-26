import { Component, Element, Prop, h, Watch } from '@stencil/core';
import { addMutationObserver } from '../../utils/mutationObserver';
import { LABEL_SIZES, type LabelSizes } from '../../constants/size';


@Component({
  tag: 'chi-label',
  styleUrl: 'label.scss',
  scoped: true,
})
export class Label {
  @Element() el: HTMLLabelElement;
  /**
   *  To indicate ID of target form control web component.
   */
  @Prop({ reflect: true }) for: string;
  /**
   * OPTIONAL. Size of the label. { xs, sm, md, lg, xl }.
   */
  @Prop({ reflect: true }) size: LabelSizes = 'md';
  /**
   * To indicate which form field is required.
   */
  @Prop({ reflect: true }) required = false;
  /**
   * To indicate which form field is optional.
   */
  @Prop({ reflect: true }) optional = false;

  @Watch('size')
  validateSizeAttribute(newValue: LabelSizes) {
    if (newValue && LABEL_SIZES.indexOf(newValue) === -1) {
      throw new Error('Not valid size (' + newValue + '). Valid values are xs, sm, md, lg or xl. ');
    }
  }

  connectedCallback() {
    addMutationObserver.call(this);
  }

  render() {
    const required = (
      <abbr class="chi-label__required" aria-label="Required field">
        *
      </abbr>
    );
    const optional = (
      <abbr class="chi-label__optional" aria-label="Optional field">
        (optional)
      </abbr>
    );
    let message = '';

    if (!(this.required && this.optional)) {
      if (this.required) {
        message = required;
      } else if (this.optional) {
        message = optional;
      }
    }

    return (
      <label
        class={`
          chi-label
          ${this.size ? `-${this.size}` : ``}
          `}
        htmlFor={`${this.for}-control`}
      >
        <slot></slot>
        {message}
      </label>
    );
  }
}
