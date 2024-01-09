import { Emit, Prop, Ref } from 'vue-property-decorator';
import { uuid4 } from '../../utils/utils';
import { ACTIVE_CLASS, LIGHT_CLASS, TOOLTIP_CLASSES, UTILITY_CLASSES } from '../../constants/classes';
import { TOOLTIP_EVENTS } from '../../constants/events';
import { TooltipColors, TooltipPositions } from '../../constants/types';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import { createPopper } from '@popperjs/core';
import { Instance as PopoverInstance } from '@popperjs/core/lib/types';
import { Component, Vue } from '@/build/vue-wrapper';
import { JSX } from 'vue/jsx-runtime';

@Component({})
export default class Tooltip extends Vue {
  @Prop() message!: string;
  @Prop({ default: 'base' }) color?: TooltipColors;
  @Prop({ default: 'top' }) position?: TooltipPositions;

  @Ref() readonly _tooltipRef!: HTMLElement;

  _tooltipElement?: JSX.Element;
  _tooltipElementNode!: HTMLElement;
  tooltipShown = false;
  _uuid!: string;
  _popper!: PopoverInstance;

  @Emit(TOOLTIP_EVENTS.SHOW)
  _emitShow() {
    // This is intentional
  }

  @Emit(TOOLTIP_EVENTS.SHOWN)
  _emitShown() {
    // This is intentional
  }

  @Emit(TOOLTIP_EVENTS.HIDE)
  _emitHide() {
    // This is intentional
  }

  @Emit(TOOLTIP_EVENTS.HIDDEN)
  _emitHidden() {
    // This is intentional
  }

  generateTooltipElement() {
    this._tooltipElement = (
      <div
        id={this._uuid}
        class={[TOOLTIP_CLASSES.TOOLTIP_ELEMENT, this.color === 'light' ? LIGHT_CLASS : ''].join(' ')}
      >
        <span>{this.message}</span>
      </div>
    );
  }

  created() {
    this._uuid = `tooltip-${uuid4()}`;
    this.generateTooltipElement();
  }

  beforeUpdate() {
    this.generateTooltipElement();
    this._popper?.setOptions({ placement: this.position });
  }

  show() {
    // if (this._animation && !this._animation.isStopped()) {
    //   this._animation.stop();
    // }

    // if (this._tooltipElementNode && !this.tooltipShown) {
    //   this.tooltipShown = true;
    //   this._animation = ThreeStepsAnimation.animationFactory(
    //     () => {
    //       this._tooltipElementNode.classList.add(TRANSITIONING_CLASS);
    //     },
    //     () => {
    //       this._tooltipElementNode.classList.add(ACTIVE_CLASS);
    //     },
    //     () => {
    //       this._tooltipElementNode.classList.remove(TRANSITIONING_CLASS);
    //       this._emitShown();
    //     },
    //     ANIMATION_DURATION.SHORT
    //   );
    // }

    this._tooltipElementNode.classList.add(ACTIVE_CLASS);
    this.tooltipShown = true;
    this._emitShow();
  }

  hide() {
    // if (this._animationTimeout) {
    //   clearTimeout(this._animationTimeout);
    // }
    // if (this._animation && !this._animation.isStopped()) {
    //   this._animation.stop();
    // }

    // if (this._tooltipElementNode && this.tooltipShown) {
    //   this.tooltipShown = false;
    //   this._animation = ThreeStepsAnimation.animationFactory(
    //     () => {
    //       this._tooltipElementNode.classList.add(TRANSITIONING_CLASS);
    //     },
    //     () => {
    //       this._tooltipElementNode.classList.remove(ACTIVE_CLASS);
    //     },
    //     () => {
    //       this._tooltipElementNode.classList.remove(TRANSITIONING_CLASS);
    //       this._emitHidden();
    //     },
    //     ANIMATION_DURATION.SHORT
    //   );
    // }

    this.tooltipShown = false;
    this._tooltipElementNode.classList.remove(ACTIVE_CLASS);
    this._emitHide();
  }

  mounted() {
    const slotTooltipTriggerElement = this._tooltipRef;
    const tooltipElementNode = document.getElementById(this._uuid);

    if (tooltipElementNode) {
      this._tooltipElementNode = tooltipElementNode;
    }

    if (slotTooltipTriggerElement) {
      const triggerShow = () => this.show();
      const triggerHide = () => this.hide();

      this._popper = createPopper(slotTooltipTriggerElement as Element, this._tooltipElementNode, {
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

      slotTooltipTriggerElement.addEventListener('mouseenter', triggerShow.bind(this));
      slotTooltipTriggerElement.addEventListener('mouseleave', triggerHide.bind(this));
      slotTooltipTriggerElement.addEventListener('focus', triggerShow.bind(this));
      slotTooltipTriggerElement.addEventListener('blur', triggerHide.bind(this));
    }
  }

  render() {
    return (
      <div ref="_tooltipRef">
        {this.$slots.default && this.$slots.default()}
        {this._tooltipElement}
      </div>
    );
  }
}
