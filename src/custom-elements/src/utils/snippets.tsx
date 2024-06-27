import { h } from '@stencil/core';
import { LABEL_CLASSES } from '../constants/classes';

export function getInfoIcon() {
  return this.infoIcon ? (
    <div class={LABEL_CLASSES.HELP}>
      <chi-button
        id={this.helpButtonId}
        onChiClick={() => this.toggleHelpPopover()}
        type="icon"
        size="xs"
        variant="flat"
        alternative-text="Help"
      >
        <chi-icon icon="circle-info-outline" size="xs"></chi-icon>
      </chi-button>
      <chi-popover id={this.helpPopoverId} position="top" variant="text" arrow reference={`#${this.helpButtonId}`}>
        {this.infoIconMessage}
      </chi-popover>
    </div>
  ) : (
    ''
  );
}
