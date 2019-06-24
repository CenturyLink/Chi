import { Component, Element, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'chi-badge',
  styleUrl: 'badge.scss',
  scoped: true
})
export class Badge {
  @State() slotBadgeContent = true;

  @Element() el: HTMLElement;

  /**
   *  to set surface of a badge { outline, flat }.
   */
  @Prop({ reflectToAttr: true }) surface: string;

  /**
   *  to render badges with a more pronounced border-radius.
   */
  @Prop({ reflectToAttr: true }) pill: boolean;

  /**
   *  to set color of a badge.
   */
  @Prop({ reflectToAttr: true }) color: string;

  /**
   *  to transform the badge text { uppercase, lowercase, capitalize }.
   */
  @Prop({ reflectToAttr: true }) textTransform: string;

  /**
   *  to set size of a badge { small or smaller }.
   */
  @Prop({ reflectToAttr: true }) size: string;

  @Watch('size')
  sizeValidation(newValue: string) {
    if (newValue && !['', 'small', 'smaller'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for badge. Valid values are small, smaller or ''. `);
    }
  }

  @Watch('color')
  colorValidation(newValue: string) {
    if (newValue && !['', 'primary', 'success', 'warning', 'danger', 'dark', 'muted', 'secondary', 'light'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid color for badge. Valid values are primary, success, danger, warning, dark, muted, secondary, light or ''. `);
    }
  }

  @Watch('surface')
  surfaceValidation(newValue: string) {
    if (newValue && !['', 'outline', 'flat'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid surface for badge. Valid values are outline, flat or ''. `);
    }
  }

  componentDidLoad() {
    if (!this.el.children[0].innerHTML.includes('<chi-icon')) {
      this.slotBadgeContent = false;
    }
  }

  componentWillLoad() {
    this.colorValidation(this.color);
    this.sizeValidation(this.size);
    this.surfaceValidation(this.surface);
  }

  render() {
    return (
      <div class={`a-badge
	        ${this.size ? `-${this.size}` : ''}
	        ${this.color ? `-${this.color}` : ''}
	        ${this.surface ? `-${this.surface}` : ''}
	        ${this.pill ? '-pill' : ''}
	        ${this.textTransform ? `-text--${this.textTransform}` : ''}`}
      >
        {this.slotBadgeContent ?
          <div class="a-badge__content">
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
