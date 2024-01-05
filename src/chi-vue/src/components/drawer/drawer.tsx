import { Emit, Prop, Watch } from 'vue-property-decorator';
import {
  ACTIVE_CLASS,
  ANIMATED_CLASS,
  BACKDROP_CLASSES,
  CLOSED_CLASS,
  DRAWER_CLASSES,
  INVERSE_CLASS,
  BUTTON_CLASSES,
  ICON_CLASS,
} from '@/constants/classes';
import { DRAWER_EVENTS } from '@/constants/events';
import { ThreeStepsAnimation } from '@/utils/ThreeStepsAnimation';
import { contains } from '@/utils/utils';
import { Backdrop, DrawerPositions } from '@/constants/types';
import { Component, Vue } from '@/build/vue-wrapper';

@Component({})
export default class Drawer extends Vue {
  @Prop() active!: boolean;
  @Prop() backdrop!: Backdrop;
  @Prop() noHeader!: boolean;
  @Prop() nonClosable!: boolean;
  @Prop() position!: DrawerPositions;
  @Prop() title!: string;

  animation!: ThreeStepsAnimation;
  animationClasses!: string[];
  backdropAnimationClasses!: string[];

  @Emit(DRAWER_EVENTS.CLICK_OUTSIDE)
  _emitClickOutside() {
    // This is intentional
  }

  @Emit(DRAWER_EVENTS.HIDE)
  _emitHide() {
    // This is intentional
  }

  @Emit(DRAWER_EVENTS.SHOW)
  _emitShow() {
    // This is intentional
  }

  @Emit(DRAWER_EVENTS.HIDDEN)
  _emitHidden() {
    // This is intentional
  }

  @Emit(DRAWER_EVENTS.SHOWN)
  _emitShown() {
    // This is intentional
  }

  show() {
    // if (this.animation && !this.animation.isStopped()) {
    //   this.animation.stop();
    // }

    // if (this.backdropAnimationClasses.length !== 0 || !this.animationClasses.includes(ACTIVE_CLASS)) {
    //   this.animation = ThreeStepsAnimation.animationFactory(
    //     () => {
    //       this.animationClasses.length = 0;
    //       this.animationClasses.push(TRANSITIONING_CLASS);
    //       this.backdropAnimationClasses.length = 0;
    //       this.backdropAnimationClasses.push(TRANSITIONING_CLASS, CLOSED_CLASS);
    //       document.body.classList.add(DISABLED_SCROLL);
    //     },
    //     () => {
    //       this.animationClasses.length = 0;
    //       this.animationClasses.push(TRANSITIONING_CLASS, ACTIVE_CLASS);
    //       this.backdropAnimationClasses.length = 0;
    //       this.backdropAnimationClasses.push(TRANSITIONING_CLASS);
    //     },
    //     () => {
    //       this.animationClasses.length = 0;
    //       this.animationClasses.push(ACTIVE_CLASS);
    //       this.backdropAnimationClasses.length = 0;
    //       this._emitShown();
    //     },
    //     ANIMATION_DURATION.MEDIUM
    //   );
    // }

    this.animationClasses.length = 0;
    this.backdropAnimationClasses.length = 0;
    this.animationClasses.push(ACTIVE_CLASS);
    this._emitShow();
  }

  hide() {
    // if (this.animation && !this.animation.isStopped()) {
    //   this.animation.stop();
    // }

    // if (!this.backdropAnimationClasses.includes(CLOSED_CLASS) || this.animationClasses.length !== 0) {
    //   this.animation = ThreeStepsAnimation.animationFactory(
    //     () => {
    //       this.animationClasses.length = 0;
    //       this.animationClasses.push(TRANSITIONING_CLASS, ACTIVE_CLASS);
    //       this.backdropAnimationClasses.length = 0;
    //       this.backdropAnimationClasses.push(TRANSITIONING_CLASS);
    //     },
    //     () => {
    //       this.animationClasses.length = 0;
    //       this.animationClasses.push(TRANSITIONING_CLASS);
    //       this.backdropAnimationClasses.length = 0;
    //       this.backdropAnimationClasses.push(TRANSITIONING_CLASS, CLOSED_CLASS);
    //     },
    //     () => {
    //       this.animationClasses.length = 0;
    //       this.animationClasses.push('');
    //       this.backdropAnimationClasses.length = 0;
    //       this.backdropAnimationClasses.push(CLOSED_CLASS);
    //       document.body.classList.remove(DISABLED_SCROLL);
    //       this._emitHidden();
    //     },
    //     ANIMATION_DURATION.MEDIUM
    //   );
    // }

    this.animationClasses.length = 0;
    this.backdropAnimationClasses.length = 0;
    this.animationClasses.push('');
    this.backdropAnimationClasses.push(CLOSED_CLASS);
    this._emitHide();
  }

  @Watch('active')
  activeChange(newValue: boolean, oldValue: boolean) {
    if (!!newValue !== !!oldValue) {
      this[newValue ? 'show' : 'hide']();
    }
  }

  documentClickHandler(ev: Event) {
    const drawerElement = this.$refs?.drawerElement as HTMLElement;
    const clickTarget = ev.target as HTMLElement;

    if (drawerElement?.classList.contains(ACTIVE_CLASS) && !contains(drawerElement, clickTarget)) {
      this._emitClickOutside();
    }
  }

  async toggle() {
    if (this.active) {
      this.hide();
    } else {
      this.show();
    }
  }

  beforeMount() {
    this.animationClasses = [];
    this.animationClasses.push(this.active ? ACTIVE_CLASS : '');
    this.backdropAnimationClasses = [];
    this.backdropAnimationClasses.push(this.active ? '' : CLOSED_CLASS);
  }

  beforeUnmount() {
    document.removeEventListener('click', this.documentClickHandler);
  }

  mounted() {
    document.addEventListener('click', this.documentClickHandler);
  }

  render() {
    const defaultSlot = this.$slots.default ? this.$slots.default() : null;
    const closeButton = (
      <button
        class={`
      ${BUTTON_CLASSES.BUTTON}
      -icon
      -close`}
        onClick={() => this._emitHide()}
        aria-label="Close"
      >
        <div class={`${BUTTON_CLASSES.CONTENT}`}>
          <i class={`${ICON_CLASS} icon-x`} aria-hidden="true"></i>
        </div>
      </button>
    );

    const drawer = (
      <div
        class={[
          DRAWER_CLASSES.DRAWER,
          ANIMATED_CLASS,
          this.position ? `-${this.position}` : '',
          this.animationClasses.join(' '),
        ]
          .filter((cl) => cl)
          .join(' ')}
        ref="drawerElement"
      >
        {this.noHeader
          ? !this.nonClosable
            ? [closeButton, defaultSlot]
            : defaultSlot
          : !this.nonClosable
            ? [
                <div
                  class={`
                ${DRAWER_CLASSES.HEADER}
              `}
                >
                  <span class={`${DRAWER_CLASSES.TITLE}`}>{this.title}</span>
                  {closeButton}
                </div>,
                <div class={`${DRAWER_CLASSES.CONTENT}`}>{defaultSlot}</div>,
              ]
            : [
                <div class={`${DRAWER_CLASSES.HEADER}`}>
                  <span class={`${DRAWER_CLASSES.TITLE}`}>{this.title}</span>
                </div>,
                <div class={`${DRAWER_CLASSES.CONTENT}`}>{defaultSlot}</div>,
              ]}
      </div>
    );

    if (this.backdrop || this.backdrop === '') {
      return (
        <div
          class={`
          ${BACKDROP_CLASSES.BACKDROP}
          ${ANIMATED_CLASS}
          ${this.backdrop === 'inverse' ? `-${INVERSE_CLASS}` : ''}
          ${this.backdropAnimationClasses}
        `}
        >
          <div
            class={`
            ${BACKDROP_CLASSES.WRAPPER}
          `}
          >
            {drawer}
          </div>
        </div>
      );
    } else {
      return drawer;
    }
  }
}
