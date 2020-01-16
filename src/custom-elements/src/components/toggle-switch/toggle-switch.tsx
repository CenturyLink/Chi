import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';

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

  render() {
    return (
      <label htmlFor={`${this.el.id}-control`}
            class={`a-switch ${this.hideLabel ? '-label--hide' : ''}`}>
        <input type="checkbox"
               class={`a-switch__input ${this.extraClass ? this.extraClass : ''}`}
               id={`${this.el.id}-control`}
               disabled={this.disabled}
               checked={this.checked}
               onClick={() => this._toggle()}
        />
        <span class="a-switch__content">
          <span class="a-switch__thumb"></span>
        </span>
        <span class="a-switch__label">{this.label}</span>
      </label>
    );
  }
}
