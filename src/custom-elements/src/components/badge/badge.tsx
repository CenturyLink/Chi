import { Component, Element, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'chi-badge',
  styleUrl: 'badge.scss',
  scoped: true
})
export class Badge {
  @State() slotBadgeContent = true;

  @Element() el: HTMLElement;

  /**
   *  to set variant of a badge { outline, flat }.
   */
  @Prop({ reflect: true }) variant: string;

  /**
   *  to set color of a badge { primary, success, warning, danger, dark, muted, secondary, light }.
   */
  @Prop({ reflect: true }) color: string;

  /**
   *  to transform the badge text { uppercase, lowercase, capitalize }.
   */
  @Prop({ reflect: true }) textTransform: string;

  /**
   *  to set size of a badge { xs or sm }.
   */
  @Prop({ reflect: true }) size: string;

  @Watch('size')
  sizeValidation(newValue: string) {
    if (newValue && !['', 'sm', 'xs'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for badge. Valid values are xs, sm or ''. `);
    }
  }

  @Watch('color')
  colorValidation(newValue: string) {
    if (newValue && !['', 'primary', 'success', 'warning', 'danger', 'dark', 'muted', 'secondary', 'light'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid color for badge. Valid values are primary, success, danger, warning, dark, muted, secondary, light or ''. `);
    }
  }

  @Watch('variant')
  variantValidation(newValue: string) {
    if (newValue && !['', 'outline', 'flat'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid variant value for badge. Valid values are outline, flat or ''. `);
    }
  }

  componentWillLoad() {
    this.colorValidation(this.color);
    this.sizeValidation(this.size);
    this.variantValidation(this.variant);
    if (!this.el.querySelector('chi-icon')) {
      this.slotBadgeContent = false;
    }
  }

  render() {
    return (
      <div class={`chi-badge
	        ${this.size ? `-${this.size}` : ''}
	        ${this.color ? `-${this.color}` : ''}
	        ${this.variant ? `-${this.variant}` : ''}
	        ${this.textTransform ? `-text--${this.textTransform}` : ''}`}
      >
        {this.slotBadgeContent ?
          <div class="chi-badge__content">
            <slot></slot>
          </div> :
          <span>
           <slot></slot>
          </span>
        }
      </div>
    );
  }
}
