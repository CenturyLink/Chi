import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'chi-label',
  styleUrl: 'label.scss',
  scoped: true
})
export class Label {
  @Element() el: HTMLLabelElement;
  /**
   *  to set for attribute.
   */
  @Prop({ reflect: true }) for: string;

  render() {
    return (
      <label
        class="chi-label"
        htmlFor={`${this.for}-control`}
      >
          <slot></slot>
      </label>
    );
  }
}
