import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'chi-toggle-switch',
  styleUrl: 'toggle-switch.scss',
  scoped: true
})
export class ToggleSwitch {
  /**
   *  to set the toggle switch id.
   */
  @Prop({ reflectToAttr: true }) toggleId: string;

  /**
   *  to set a label for the toggle switch.
   */
  @Prop({ reflectToAttr: true }) label: string;

  /**
   *  used to disable the toggle labels.
   */
  @Prop({ reflectToAttr: true }) noText = false;

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
        <label class="a-switch">
          <span class="a-switch__label">{this.label}</span>
          <input type="checkbox"
                 class={`a-switch__input -toggle ${this.extraClass && this.extraClass}`}
                 name={this.toggleId} disabled={this.disabled} checked={this.checked}
                 value={this.toggleId}
                 aria-describedby={this.toggleId}
                 aria-label="toggle"
                 onClick={() => this._toggle()}
          />
          <span id={this.toggleId}
                class="a-switch__content"
                aria-live="assertive">
            <span class="a-switch__faux"></span>
            <span class="a-switch__on">Enabled</span>
            <span class="a-switch__off">Disabled</span>
          </span>
        </label>
      ]
    );
  }
}
