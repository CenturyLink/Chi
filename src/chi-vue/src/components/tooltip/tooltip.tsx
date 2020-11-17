import { Component, Prop, Vue } from 'vue-property-decorator';
import { uuid4 } from '../../utils/utils';
import { ACTIVE_CLASS, LIGHT_CLASS, TOOLTIP_CLASSES, TRANSITIONING_CLASS } from '../../constants/classes';
import { TooltipPositions } from '../../constants/types';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import { TOOLTIP_ANIMATION_DELAY as ANIMATION_DELAY, ANIMATION_DURATION } from '../../constants/constants';
import { createPopper } from '@popperjs/core';

@Component
export default class Tooltip extends Vue {
  @Prop() message!: string;
  @Prop() color!: string;
  @Prop({ default: 'top' }) position!: TooltipPositions;

  _tooltipElement!: JSX.Element | null;
  _tooltipElementNode!: HTMLElement;
  _shown!: boolean;
  tooltipElementClasses!: string[];
  _uuid!: string;
  _animationTimeout!: number;
  _animation!: ThreeStepsAnimation;

  constructor() {
    super();
    this.tooltipElementClasses = [
      TOOLTIP_CLASSES.TOOLTIP_ELEMENT,
      this.color === 'light' ? LIGHT_CLASS : ''
    ];
  }

  beforeMount() {
    this._uuid = uuid4();

    this._tooltipElement = (
      <div id={this._uuid} class={this.tooltipElementClasses.join(' ')}>
        <span>{this.message}</span>
      </div>
    );
  }

  show() {
    if (this._animation && !this._animation.isStopped()) {
      this._animation.stop();
    }

    if (this._tooltipElementNode) {
      if (!this._shown) {
        this._shown = true;
        this._animation = ThreeStepsAnimation.animationFactory(
          () => {
            this._tooltipElementNode.style.opacity = '0';
            this._tooltipElementNode.classList.add(TRANSITIONING_CLASS);
          },
          () => {
            this._tooltipElementNode.style.opacity = '1';
            this._tooltipElementNode.classList.add(ACTIVE_CLASS);
          },
          () => {
            this._tooltipElementNode.classList.remove(TRANSITIONING_CLASS);
          },
          ANIMATION_DURATION.SHORT
        );
      }
    }
  }

  hide() {
    if (this._animationTimeout) {
      clearTimeout(this._animationTimeout);
    }
    if (this._animation && !this._animation.isStopped()) {
      console.log(typeof this._animation);
      this._animation.stop();
    }

    if (this._tooltipElementNode) {
      if (this._shown) {
        this._shown = false;
        this._animation = ThreeStepsAnimation.animationFactory(
          () => {
            this._tooltipElementNode.style.opacity = '1';
            this._tooltipElementNode.classList.add(TRANSITIONING_CLASS);
          },
          () => {
            this._tooltipElementNode.style.opacity = '0';
            this._tooltipElementNode.classList.remove(ACTIVE_CLASS);
          },
          () => {
            this._tooltipElementNode.classList.remove(TRANSITIONING_CLASS);
          },
          ANIMATION_DURATION.SHORT
        );
      }
    }
  }

  mounted() {
    /* eslint-disable  @typescript-eslint/no-this-alias */
    const self = this;
    const slotTooltipTriggerElements = this.$slots.default;
    const tooltipElementNode = document.getElementById(this._uuid);

    if (tooltipElementNode) {
      this._tooltipElementNode = tooltipElementNode;
    }

    if (slotTooltipTriggerElements) {
      slotTooltipTriggerElements.forEach(vnode => {
        const slotElement = vnode.elm;

        createPopper(slotElement as Element, this._tooltipElementNode, {
          placement: this.position,
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8]
              }
            },
          ]
        });

        if (slotElement) {
          slotElement.addEventListener('mouseenter', () => {
            self._animationTimeout = window.setTimeout(() => {
              if (!self._shown) {
                self.show();
              }
            }, ANIMATION_DELAY);
          });

          slotElement.addEventListener('mouseleave', () => {
            self.hide();
          });

          slotElement.addEventListener('focus', () => {
            self._animationTimeout = window.setTimeout(() => {
              if (!self._shown) {
                self.show();
              }
            }, ANIMATION_DELAY);
          });

          slotElement.addEventListener('blur', () => {
            self.hide()
          });
        }
      });
    };
  }

  render() {
    return (
      <div>
        {this.$slots.default}
        {this._tooltipElement}
      </div>
    );
  }
}
