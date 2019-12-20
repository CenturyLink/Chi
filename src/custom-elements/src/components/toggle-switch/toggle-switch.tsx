import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'chi-switch',
  styleUrl: 'toggle-switch.scss',
  scoped: true
})
export class ToggleSwitch {
  /**
   *  to set the toggle switch id.
   */
  @Prop({ reflectToAttr: true }) switchId: string;

  /**
   *  to set a label for the toggle switch.
   */
  @Prop({ reflectToAttr: true }) label: string;

  /**
   *  used to disable the toggle labels.
   */
  @Prop({ reflectToAttr: true }) hideLabel = false;

  /**
   *  used to disable the toggle switch.
   */
  @Prop({ reflectToAttr: true }) disabled = false;

  /**
   *  used to check the toggle switch.
   */
  @Prop({ reflectToAttr: true, mutable: true }) checked = false;

   // used to pass additional classes like { -focus, -hover etc .}
  @Prop() extraClass: string;

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
      [
        <label htmlFor={this.switchId}
              class="a-switch">
          <input type="checkbox"
                 class={`a-switch__input ${this.extraClass && this.extraClass}`}
                 id={this.switchId}
                 disabled={this.disabled} checked={this.checked}
                 onClick={() => this._toggle()}
          />
          <span class="a-switch__content">
            <span class="a-switch__thumb"></span>
          </span>
          <span class="a-switch__label">{this.label}</span>
        </label>
      ]
    );
  }
}
