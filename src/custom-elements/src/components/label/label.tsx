import { Component, Element, Prop, h, Watch } from '@stencil/core';

const VALID_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

@Component({
  tag: 'chi-label',
  styleUrl: 'label.scss',
  scoped: true
})

export class Label {
  @Element() el: HTMLLabelElement;
  /**
   *  To indicate ID of target form control web component.
   */
  @Prop({ reflect: true }) for: string;
  /**
   * OPTIONAL. Size of the label. {xs,sm, md, lg, xl}.
   */
  @Prop({ reflect: true }) size = 'md';
  /**
   * To indicate which form field is required.
   */
  @Prop({ reflect: true }) required = false;

  @Watch('size')
  validateSizeAttribute(newValue: string) {
    if (newValue && VALID_SIZES.indexOf(newValue) === -1) {
      throw new Error('Not valid size (' + newValue + '). Valid values are xs, sm, md, lg or xl. ');
    }
  }

  render() {
    const requiredAsterisk = <abbr class="chi-label__required" title="Required">*</abbr>;

    return (
      <label
        class={`
          chi-label
          ${this.size ? `-${this.size}` : ``}
          `}
        htmlFor={`${this.for}-control`}
      >
        {this.required ? requiredAsterisk : ''}
        <slot></slot>
      </label>
    );
  }
}
