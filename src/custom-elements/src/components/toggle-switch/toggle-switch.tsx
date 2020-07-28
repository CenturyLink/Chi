import { Component, Element, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'chi-switch',
  styleUrl: 'toggle-switch.scss',
  scoped: true
})
export class ToggleSwitch {
  /**
   *  to set a label for the toggle switch.
   */
  @Prop({ reflect: true }) label: string;

  /**
   *  used to disable the toggle labels.
   */
  @Prop({ reflect: true }) hideLabel = false;

  /**
   *  used to disable the toggle switch.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   *  used to check the toggle switch.
   */
  @Prop({ reflect: true, mutable: true }) checked = false;

  /**
   * OPTIONAL. Size of the label. {xs,sm}.
   */
  @Prop({ reflect: true }) size: string;

   // used to pass additional classes like { -focus, -hover etc .}
  @Prop() extraClass: string;

  @Element() el: HTMLElement;

  /**
   *  emitting a custom event toggle.
   */
  @Event() toggle: EventEmitter;

  _toggle() {
    this.checked = !this.checked;
    this.toggle.emit(this.checked);
  }

  @Watch('size')
  sizeValidation(newValue: string) {
    if (newValue && !['', 'sm', 'xs'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for toggle switch. Valid values are xs, sm or ''. `);
    }
  }

  componentWillLoad() {
    this.sizeValidation(this.size);
  }

  render() {
    return (
      <label htmlFor={`${this.el.id}-control`}
            class={`chi-switch
              ${this.size ? `-${this.size}` : ''}
              ${this.hideLabel ? '-label--hide' : ''}`}>
        <input type="checkbox"
               class={`chi-switch__input ${this.extraClass ? this.extraClass : ''}`}
               id={`${this.el.id}-control`}
               disabled={this.disabled}
               checked={this.checked}
               onClick={() => this._toggle()}
        />
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
        <span class="chi-switch__label">{this.label}</span>
      </label>
    );
  }
}
