import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'chi-button',
  styleUrl: 'button.scss',
  scoped: true
})
export class Button {
  @Element() el: HTMLButtonElement;
  @State() slotBtnContent = true;
  /**
   *  to set button type { float, close, icon }.
   */
  @Prop({ reflect: true }) type: string;

  /**
   *  to set variant of a button { outline, flat }.
   */
  @Prop({ reflect: true }) variant: string;

  /**
   *  to disable chi-button.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   *  to set button color { primary, secondary, danger, dark, light }.
   */
  @Prop({ reflect: true }) color: string;

  /**
   *  to set button size { sm, md, lg, xl }.
   */
  @Prop({ reflect: true }) size: string;

  /**
   *  to render a button to fill the parent space.
   */
  @Prop({ reflect: true }) fluid = false;

   /**
   *  to render a button with uppercase text.
   */
  @Prop({ reflect: true }) uppercase = false;

  /**
   *  to center align the text .
   */
  @Prop({ reflect: true }) center = false;

  /**
   *  to provide alternative text in case of icon buttons.
   */
  @Prop({ reflect: true }) alternativeText: string;

  @Prop() extraClass: string;

  /**
   *  to emit a custom event when button is clicked.
   */
  @Event() chiClick: EventEmitter<any>;

  @Watch('size')
  sizeValidation(newValue: string) {
    if (newValue && !['', 'sm', 'md', 'lg', 'xl'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for button. Valid values are sm, md, lg, xl, ''. `);
    }
  }

  @Watch('color')
  colorValidation(newValue: string) {
    if (newValue && !['', 'primary', 'secondary', 'danger', 'dark', 'light'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid color for button. Valid values are primary, secondary, danger, dark, light or ''. `);
    }
  }

  @Watch('type')
  buttonTypeValidation(newValue: string) {
    if (newValue && !['', 'float', 'close', 'icon'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid button type. Valid values are float, close, icon or ''. `);
    }
  }

  @Watch('variant')
  variantValidation(newValue: string) {
    if (newValue && !['', 'outline', 'flat'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid variant for button. Valid values are outline, flat or ''. `);
    }
  }

  componentWillLoad(): void {
    this.colorValidation(this.color);
    this.sizeValidation(this.size);
    this.buttonTypeValidation(this.type);
    this.variantValidation(this.variant);
    if (!this.el.querySelector('chi-icon') &&
      !this.el.querySelector('chi-spinner')) {
      this.slotBtnContent = false;
    }
  }

  _buttonClicked() {
    this.chiClick.emit();
  }

  render() {
    if (this.type === 'close') {
      return (
        <button class={`${this.extraClass ? this.extraClass : ''} chi-button -icon -close ${this.size ? `-${this.size}` : ''}`} onClick={() => this._buttonClicked()} aria-label="Close">
          <div class="chi-button__content">
            <chi-icon icon={'x'} />
          </div>
        </button>
      );
    } else {
      return (
        <button
          class={`chi-button
          ${this.variant ? `-${this.variant}` : ''}
          ${this.color ? `-${this.color}` : ''}
          ${this.type ? `-${this.type}` : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this.uppercase ? '-uppercase' : ''}
          ${this.fluid ? '-fluid' : ''}
          ${this.fluid && this.center ? '-justify-content--center' : ''}
          ${this.disabled ? '-disabled' : ''}
          ${this.extraClass ? this.extraClass : ''}`}
          onClick={() => this._buttonClicked()}
          disabled={this.disabled}
          {...(this.alternativeText && {'aria-label': this.alternativeText})}
        >
          {this.slotBtnContent ?
            <div class={'chi-button__content'}>
              <slot />
            </div>
            : <slot />
          }
        </button>
      );
    }
  }
}
