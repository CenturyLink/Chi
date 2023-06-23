import { Component, Element, Prop, h } from '@stencil/core';
import { ChiStates, TEXT_FIELD_STATES } from "../../constants/states";

@Component({
  tag: 'helper-message',
  styleUrl: 'helper-message.scss',
  scoped: true
})

export class Label {
  @Element() el: HTMLLabelElement;

  /**
   * To define state color of message text
   */
  @Prop({ reflect: true }) state?: ChiStates;

  render() {
    const stateIcon = this.state ? TEXT_FIELD_STATES[this.state].icon : null;
    const stateClass = this.state ? TEXT_FIELD_STATES[this.state].class : null;

    return (
      <label class={`chi-label -status ${stateClass}`}>
        {stateIcon && <chi-icon icon={stateIcon}></chi-icon>}
        <slot></slot>
      </label>
    );
  }
}
