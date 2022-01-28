import { Component, Prop, Watch, h } from '@stencil/core';
import { calculateClasses } from '../../utils/utils';
import {
  MARKETING_ICON_SIZES as VALID_SIZES,
  MarketingIconSizes
} from '../../constants/size';
import { spriteFullColor } from './sprites/full-color';
import { spriteOneColor } from './sprites/one-color';
import {
  MARKETING_ICON_MODES,
  ChiMarketingIconModes
} from '../../constants/types';

let loadedIcons = {
  'full-color': 0,
  'one-color': 0
};
const defaultMode = 'full-color';

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
   * To render Marketing icon as full color or one color
   */

  @Prop({ reflect: true }) mode?: ChiMarketingIconModes = defaultMode;

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
      throw new Error(`${this.mode} is not a valid mode of Marketing Icon. If provided, valid values are: ${validValues}. `);
    }
  }

  componentWillLoad(): void {
    if (loadedIcons[this.mode] === 0) {
      this._loadSprite(this.mode);
    }
    loadedIcons[this.mode]++;

    this.validateMode(this.mode);
    this.validateSizeAttribute(this.size);
  }

  componentDidUnload(): void {
    if (loadedIcons[this.mode] === 0) {
      if (!document.getElementById(`chi-marketing-icons-${this.mode}`)) {
        this._loadSprite(this.mode);
      }
      loadedIcons[this.mode]--;
    }
  }

  private getClass(): string {
    return calculateClasses({
      prefixed: [{ prefix: '-', value: this.size }]
    });
  }

  _loadSprite(mode: string) {
    const svgSprite = mode === 'one-color' ? spriteOneColor : spriteFullColor;

    const shadowSVG: HTMLElement = document.createElement('div');
    shadowSVG.id = `chi-marketing-icons-${this.mode}`;
    shadowSVG.setAttribute('style', 'display:none;');
    shadowSVG.setAttribute('aria-hidden', 'true');
    shadowSVG.innerHTML = svgSprite;
    document.body.appendChild(shadowSVG);
  }

  render() {
    return (
      <div
        class={`chi-marketing-icon ${this.mode} ${this.getClass()} ${
          this.extraClass ? this.extraClass : ''
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
        >
          <use xlinkHref={`#icon-${this.mode}-${this.icon}`} />
        </svg>
      </div>
    );
  }
}
