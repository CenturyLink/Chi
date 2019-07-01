import { Component, Prop, Watch } from '@stencil/core';
import { ICON_SIZES } from '../../constants/size';

const SPINNER_COLORS = ['primary', 'success', 'warning', 'danger', 'muted', 'secondary', 'light'];

@Component({
  tag: 'chi-spinner',
  styleUrl: 'spinner.scss',
  scoped: true
})
export class Spinner {
  /**
   *  to set size of a spinner { xs, sm, sm--2, sm--3, md, lg, xl, xxl }.
   */
  @Prop({ reflectToAttr: true }) size = 'sm';

  /**
   *  to set color of a spinner { primary, success, warning, danger, muted }.
   */
  @Prop({ reflectToAttr: true }) color: string;

  /**
   *  to render spinners on dark or light backgrounds.
   */
  @Prop({ reflectToAttr: true }) backdrop: string;

  @Watch('size')
  sizeValidation(newValue: string) {
    if (newValue && !ICON_SIZES.includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for spinner. If provided, valid values are: xs, sm, sm--2, sm--3, md, lg, xl or xxl. `);
    }
  }

  @Watch('color')
  colorValidation(newValue: string) {
    if (newValue && !SPINNER_COLORS.includes(newValue)) {
      throw new Error(`${newValue} is not a valid color for spinner. If provided, valid values are: primary, success, warning, danger, muted, secondary or light. `);
    }
  }

  @Watch('backdrop')
  backdropValidation(newValue: string) {
    if (newValue && !['', 'inverse', 'backdrop', 'true'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid backdrop for spinner. If provided, valid values are: inverse, backdrop or true. `);
    }
  }

  componentWillLoad(): void {
    this.colorValidation(this.color);
    this.sizeValidation(this.size);
    this.backdropValidation(this.backdrop);
  }

  render() {
    const spinner = (
      <svg class={`a-spinner
        ${this.color ? `-text--${this.color}` : ''}
        ${this.size ? `-${this.size}` : ''}`} viewBox="0 0 66 66"
      >
        <title>Loading</title>
        <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6" />
      </svg>
    );

    if (this.backdrop || this.backdrop === '') {
      return (
        <div class={`a-backdrop ${this.backdrop === 'inverse' ? '-inverse' : ''}`}>
          {spinner}
        </div>
      );
    } else {
      return spinner;
    }
  }
}
