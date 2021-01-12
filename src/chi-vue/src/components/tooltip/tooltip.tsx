import { Component, Prop, Vue } from 'vue-property-decorator';
import { uuid4 } from '../../utils/utils';
import { ACTIVE_CLASS, LIGHT_CLASS, TOOLTIP_CLASSES, TRANSITIONING_CLASS } from '../../constants/classes';
import { TOOLTIP_EVENTS } from '../../constants/events';
import { TooltipColors, TooltipPositions } from '../../constants/types';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import { TOOLTIP_ANIMATION_DELAY as ANIMATION_DELAY, ANIMATION_DURATION } from '../../constants/constants';
import { createPopper } from '@popperjs/core';
import { Instance as PopoverInstance } from '@popperjs/core/lib/types';

@Component
export default class Tooltip extends Vue {
  @Prop() message!: string;
  @Prop({ default: '' }) color?: TooltipColors;
  @Prop({ default: 'top' }) position?: TooltipPositions;

  _tooltipElement?: JSX.Element;
  _tooltipElementNode!: HTMLElement;
  _shown: boolean;
  _uuid!: string;
  _animationTimeout?: number;
  _animation?: ThreeStepsAnimation;
  _popper!: PopoverInstance;

  constructor() {
    super();
    this._shown = false;
  }

  generateTooltipElement() {
    this._tooltipElement = (
      <div
        id={this._uuid}
        class={[TOOLTIP_CLASSES.TOOLTIP_ELEMENT, this.color === 'light' ? LIGHT_CLASS : ''].join(' ')}>
        <span>{this.message}</span>
      </div>
    );
  }

  beforeMount() {
    this._uuid = `tooltip-${uuid4()}`;
    this.generateTooltipElement();
  }

  beforeUpdate() {
    this.generateTooltipElement();
    this._popper.setOptions({ placement: this.position });
  }

  show() {
    this.$emit(TOOLTIP_EVENTS.SHOW);
    if (this._animation && !this._animation.isStopped()) {
      this._animation.stop();
    }

    if (this._tooltipElementNode && !this._shown) {
      this._shown = true;
      this._animation = ThreeStepsAnimation.animationFactory(
        () => {
          this._tooltipElementNode.classList.add(TRANSITIONING_CLASS);
        },
        () => {
          this._tooltipElementNode.classList.add(ACTIVE_CLASS);
        },
        () => {
          this._tooltipElementNode.classList.remove(TRANSITIONING_CLASS);
          this.$emit(TOOLTIP_EVENTS.SHOWN);
        },
        ANIMATION_DURATION.SHORT
      );
    }
  }

  hide() {
    this.$emit(TOOLTIP_EVENTS.HIDE);
    if (this._animationTimeout) {
      clearTimeout(this._animationTimeout);
    }
    if (this._animation && !this._animation.isStopped()) {
      this._animation.stop();
    }

    if (this._tooltipElementNode && this._shown) {
      this._shown = false;
      this._animation = ThreeStepsAnimation.animationFactory(
        () => {
          this._tooltipElementNode.classList.add(TRANSITIONING_CLASS);
        },
        () => {
          this._tooltipElementNode.classList.remove(ACTIVE_CLASS);
        },
        () => {
          this._tooltipElementNode.classList.remove(TRANSITIONING_CLASS);
          this.$emit(TOOLTIP_EVENTS.HIDDEN);
        },
        ANIMATION_DURATION.SHORT
      );
    }
  }

  mounted() {
    const slotTooltipTriggerElements = this.$slots.default;
    const tooltipElementNode = document.getElementById(this._uuid);

    if (tooltipElementNode) {
      this._tooltipElementNode = tooltipElementNode;
    }

    if (slotTooltipTriggerElements) {
      slotTooltipTriggerElements.forEach(vnode => {
        const slotElement = vnode.elm;
        const triggerShow = () => {
          this._animationTimeout = window.setTimeout(() => {
            if (!this._shown) {
              this.show();
            }
          }, ANIMATION_DELAY);
        };
        const triggerHide = () => {
          this.hide();
        };

        this._popper = createPopper(slotElement as Element, this._tooltipElementNode, {
          placement: this.position,
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ],
        });

        if (slotElement) {
          slotElement.addEventListener('mouseenter', triggerShow.bind(this));
          slotElement.addEventListener('mouseleave', triggerHide.bind(this));
          slotElement.addEventListener('focus', triggerShow.bind(this));
          slotElement.addEventListener('blur', triggerHide.bind(this));
        }
      });
    }
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
