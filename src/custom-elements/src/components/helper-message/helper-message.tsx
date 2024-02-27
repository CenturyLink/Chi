import { Component, Element, Prop, h } from '@stencil/core';
import { ChiStates, STATES } from '../../constants/states';
import { FORM_CLASSES, STATUS_CLASS } from '../../constants/classes';
import { addMutationObserver } from '../../utils/mutationObserver';

@Component({
  tag: 'chi-helper-message',
  styleUrl: 'helper-message.scss',
  scoped: true,
})
export class HelperMessage {
  @Element() el: HTMLElement;

  /**
   * To define state color of message text
   */
  @Prop({ reflect: true }) state?: ChiStates;

  connectedCallback() {
    addMutationObserver.call(this);
  }

  render() {
    const stateIcon = this.state ? STATES[this.state].icon : null;
    const stateClass = this.state ? STATES[this.state].class : null;

    return (
      <div class={`${FORM_CLASSES.LABEL} ${STATUS_CLASS} ${stateClass}`}>
        {stateIcon && <chi-icon icon={stateIcon}></chi-icon>}
        <slot></slot>
      </div>
    );
  }
}
