import { Component, Prop, Element, h } from '@stencil/core';
import { IconSizes } from '../../constants/size';
import { IconColors } from '../../constants/color';

declare const chi: any;

@Component({
  tag: 'chi-copy-icon',
  scoped: true
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

  beforeCopyMsg = "Copy to clipboard";
  afterCopyMsg = "Copied to clipboard";

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

  onClick() {
    navigator.clipboard?.writeText(this.text);
    this.setTooltipMsg(this.afterCopyMsg);
  }

  /**
   * Sets message to show in the tooltip
   */
  setTooltipMsg(message: string) {
    this.tooltip._tooltipContent.innerText = message;
  }


  render() {
    return <chi-button
      type="icon"
      variant="flat"
      disabled={this.disabled}
      data-tooltip={this.beforeCopyMsg} 
      onChiClick={() => this.onClick()} 
      onChiMouseLeave={() => this.setTooltipMsg(this.beforeCopyMsg)}
    >
      <chi-icon 
        icon="copy" 
        size={this.size}
        ></chi-icon>
    </chi-button>
  }
}
