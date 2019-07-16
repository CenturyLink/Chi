import { Component, Event, EventEmitter, Prop } from '@stencil/core';

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

  @Prop() extraClass: string;

  /**
   *  emitting a custom event toggle.
   */
  @Event() toggle: EventEmitter;

  _toggle() {
    this.checked ? this.checked = false : this.checked = true;
    this.toggle.emit(this.checked);
  }

  render() {
    return (
      [
        <input type="checkbox"
               class={`a-input -toggle ${this.noText ? '-noText' : ''} ${this.extraClass ? this.extraClass : ''}`}
               id={this.toggleId} disabled={this.disabled} checked={this.checked}
               onClick={() => this._toggle()}
        ></input>,
        <label htmlFor={this.toggleId}></label>,
        (this.label ? <label class="-text" htmlFor={this.toggleId}>{this.label}</label> : null)
      ]
    );
  }
}
