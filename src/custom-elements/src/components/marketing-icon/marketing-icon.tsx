import { Component, Prop, Watch, h } from '@stencil/core';
import { calculateClasses } from '../../utils/utils';
import {
  MARKETING_ICON_SIZES as VALID_SIZES,
  MarketingIconSizes
} from '../../constants/size';
import { spriteFilled } from './sprites/filled';
import { spriteOutline } from './sprites/outline';
import {
  MARKETING_ICON_MODES,
  ChiMarketingIconModes
} from '../../constants/types';

let loadedIcons = {
  filled: 0,
  outline: 0
};
const defaultMode = 'filled';

@Component({
  tag: 'chi-marketing-icon',
  styleUrl: 'marketing-icon.scss',
  scoped: true
})
export class MarketingIcon {
  /**
   * Icon to be rendered.
   */
  @Prop({ reflect: true }) icon: string;

  /**
   * OPTIONAL. Size of the Icon { xs, sm, md, lg }.
   */
  @Prop({ reflect: true }) size: MarketingIconSizes;

  /**
   * OPTIONAL classes
   */

  @Prop({ reflect: true }) extraClass?: string;

  /**
   * To render Marketing icon as filled or outline
   */

  @Prop({ reflect: true }) variant?: ChiMarketingIconModes = defaultMode;

  @Watch('size')
  validateSizeAttribute(newValue: MarketingIconSizes) {
    const validValues = VALID_SIZES.join(', ');

    if (newValue && VALID_SIZES.indexOf(newValue) === -1) {
      throw new Error(
        'Not valid size (' +
          newValue +
          ') for icon ' +
          this.icon +
          '. Valid values are ' +
          validValues +
          '. '
      );
    }
  }

  @Watch('mode')
  validateMode(newValue: ChiMarketingIconModes) {
    const validValues = MARKETING_ICON_MODES.join(', ');

    if (newValue && !MARKETING_ICON_MODES.includes(newValue)) {
      throw new Error(
        `${this.variant} is not a valid mode of Marketing Icon. If provided, valid values are: ${validValues}. `
      );
    }
  }

  componentWillLoad(): void {
    if (loadedIcons[this.variant] === 0) {
      this._loadSprite(this.variant);
    }
    loadedIcons[this.variant]++;

    this.validateMode(this.variant);
    this.validateSizeAttribute(this.size);
  }

  componentDidUnload(): void {
    if (loadedIcons[this.variant] === 0) {
      if (!document.getElementById(`chi-marketing-icons-${this.variant}`)) {
        this._loadSprite(this.variant);
      }
      loadedIcons[this.variant]--;
    }
  }

  private getClass(): string {
    return calculateClasses({
      prefixed: [{ prefix: '-', value: this.size }]
    });
  }

  _loadSprite(mode: string) {
    const svgSprite = mode === 'outline' ? spriteOutline : spriteFilled;

    const shadowSVG: HTMLElement = document.createElement('div');
    shadowSVG.id = `chi-marketing-icons-${this.variant}`;
    shadowSVG.setAttribute('style', 'display:none;');
    shadowSVG.setAttribute('aria-hidden', 'true');
    shadowSVG.innerHTML = svgSprite;
    document.body.appendChild(shadowSVG);
  }

  render() {
    return (
      <div
        class={`chi-marketing-icon ${this.variant} ${this.getClass()} ${
          this.extraClass ? this.extraClass : ''
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
        >
          <use xlinkHref={`#icon-${this.variant}-${this.icon}`} />
        </svg>
      </div>
    );
  }
}
