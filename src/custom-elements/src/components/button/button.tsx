import { Component, Element, Event, EventEmitter, Prop, State, Watch } from '@stencil/core';

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
  @Prop({ reflectToAttr: true }) type: string;

  /**
   *  to set variant of a button { outline, flat }.
   */
  @Prop({ reflectToAttr: true }) variant: string;

  /**
   *  to disable chi-button.
   */
  @Prop({ reflectToAttr: true }) disabled = false;

  /**
   *  to set button color { primary, secondary, danger, dark, light }.
   */
  @Prop({ reflectToAttr: true }) color: string;

  /**
   *  to set button size { sm, md, lg, xl }.
   */
  @Prop({ reflectToAttr: true }) size: string;

  /**
   *  to to render buttons with a more pronounced border-radius.
   */
  @Prop({ reflectToAttr: true }) pill = false;

  /**
   *  to render a button to fill the parent space.
   */
  @Prop({ reflectToAttr: true }) fluid = false;

  /**
   *  to center align the text .
   */
  @Prop({ reflectToAttr: true }) center = false;

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
  }

  componentDidLoad() {
    if (!this.el.children[0].innerHTML.includes('<chi-icon') && !this.el.children[0].innerHTML.includes('<chi-spinner')) {
      this.slotBtnContent = false;
    }
  }

  _buttonClicked() {
    this.chiClick.emit();
  }

  render() {
    if (this.type === 'close') {
      return (
        <button class={`a-btn -icon -close ${this.size ? `-${this.size}` : ''}`} onClick={() => this._buttonClicked()}>
          <div class="a-btn__content">
            <chi-icon icon={'x'} />
          </div>
        </button>
      );
    } else {
      return (
        <button
          class={`a-btn
          ${this.variant ? `-${this.variant}` : ''}
          ${this.pill ? '-pill' : ''}
          ${this.color ? `-${this.color}` : ''}
          ${this.type ? `-${this.type}` : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this.fluid ? '-fluid' : ''}
          ${this.fluid && this.center ? '-justify-content--center' : ''}
          ${this.disabled ? '-disabled' : ''}
          ${this.extraClass ? this.extraClass : ''}`}
          onClick={() => this._buttonClicked()}
          disabled={this.disabled}
        >
          {this.slotBtnContent ?
            <div class={'a-btn__content'}>
              <slot />
            </div>
            : <slot />
          }
        </button>
      );
    }
  }
}
