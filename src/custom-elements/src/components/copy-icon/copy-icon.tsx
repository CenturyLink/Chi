import { Component, Prop, Element, h, Event, EventEmitter } from '@stencil/core';
import { IconSizes } from '../../constants/size';
import { IconColors } from '../../constants/color';
import { COPY_MESSAGE, COPIED_MESSAGE } from '../../constants/constants';
declare const chi: any;

@Component({
  tag: 'chi-copy-icon',
  scoped: true,
})
export class CopyIcon {
  @Element() el: HTMLElement;
  /**
   * Text to be copied to clipboard
   */
  @Prop() text!: string;
  /**
   * Size of the icon
   */
  @Prop({ reflect: true }) size?: IconSizes;
  /**
   * Color of the Icon.
   */
  @Prop({ reflect: true }) color?: IconColors;
  /**
   * To disable the copy button
   */
  @Prop({ reflect: true }) disabled?: boolean;

  /**
   * Triggered when the user clicks on copy
   */
  @Event() chiCopy: EventEmitter<string>;

  private tooltip: any;

  componentDidRender() {
    this.loadTooltip();
  }

  disconnectedCallback() {
    this.removeTooltip();
  }

  loadTooltip() {
    if (this.tooltip) {
      this.removeTooltip();
    }
    this.tooltip = chi.tooltip(this.el.querySelector('[data-tooltip]'));
  }

  removeTooltip() {
    if (this.tooltip) {
      this.tooltip.dispose();
      this.tooltip = null;
    }
  }

  handlerClick() {
    navigator.clipboard?.writeText(this.text);
    this.chiCopy.emit(this.text);
    this.setTooltipMsg(COPIED_MESSAGE);
  }

  /**
   * Sets message to show in the tooltip
   */
  setTooltipMsg(message: string) {
    this.tooltip._tooltipContent.innerText = message;
  }

  render() {
    return (
      <chi-button
        type="icon"
        variant="flat"
        disabled={this.disabled}
        data-tooltip={COPY_MESSAGE}
        onChiClick={() => this.handlerClick()}
        onChiMouseLeave={() => this.setTooltipMsg(COPY_MESSAGE)}
      >
        <chi-icon icon="copy" size={this.size}></chi-icon>
      </chi-button>
    );
  }
}
