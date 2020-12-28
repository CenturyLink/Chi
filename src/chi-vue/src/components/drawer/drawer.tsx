import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import {
  ACTIVE_CLASS,
  ANIMATED_CLASS,
  BACKDROP_CLASSES,
  CLOSED_CLASS,
  DRAWER_CLASSES,
  PORTAL_CLASS,
  INVERSE_CLASS,
  BUTTON_CLASSES,
  ICON_CLASS,
  TRANSITIONING_CLASS,
} from '@/constants/classes';
import { DRAWER_EVENTS } from '@/constants/events';
import { ThreeStepsAnimation } from '@/utils/ThreeStepsAnimation';
import { ANIMATION_DURATION } from '@/constants/constants';
import { contains } from '@/utils/utils';
import { Backdrop, DrawerPositions } from '@/constants/types';

@Component
export default class Drawer extends Vue {
  @Prop() active!: boolean;
  @Prop() backdrop!: Backdrop;
  @Prop() noHeader!: boolean;
  @Prop() nonClosable!: boolean;
  @Prop() portal!: boolean;
  @Prop() position!: DrawerPositions;
  @Prop() title!: string;

  animation!: ThreeStepsAnimation;

  animationClasses!: string[];

  backdropAnimationClasses!: string[];

  constructor() {
    super();
    this.animationClasses = [];
    this.backdropAnimationClasses = [];
  }

  show() {
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
    }

    if (this.backdropAnimationClasses.length !== 0 || !this.animationClasses.includes(ACTIVE_CLASS)) {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this.animationClasses.length = 0;
          this.animationClasses.push(TRANSITIONING_CLASS);
          this.backdropAnimationClasses.length = 0;
          this.backdropAnimationClasses.push(TRANSITIONING_CLASS, CLOSED_CLASS);
        },
        () => {
          this.animationClasses.length = 0;
          this.animationClasses.push(TRANSITIONING_CLASS, ACTIVE_CLASS);
          this.backdropAnimationClasses.length = 0;
          this.backdropAnimationClasses.push(TRANSITIONING_CLASS);
        },
        () => {
          this.animationClasses.length = 0;
          this.animationClasses.push(ACTIVE_CLASS);
          this.backdropAnimationClasses.length = 0;
          this.$emit(DRAWER_EVENTS.SHOWN);
        },
        ANIMATION_DURATION.MEDIUM
      );
    }

    this.$emit(DRAWER_EVENTS.SHOW);
  }

  hide() {
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
    }

    if (!this.backdropAnimationClasses.includes(CLOSED_CLASS) || this.animationClasses.length !== 0) {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this.animationClasses.length = 0;
          this.animationClasses.push(TRANSITIONING_CLASS, ACTIVE_CLASS);
          this.backdropAnimationClasses.length = 0;
          this.backdropAnimationClasses.push(TRANSITIONING_CLASS);
        },
        () => {
          this.animationClasses.length = 0;
          this.animationClasses.push(TRANSITIONING_CLASS);
          this.backdropAnimationClasses.length = 0;
          this.backdropAnimationClasses.push(TRANSITIONING_CLASS, CLOSED_CLASS);
        },
        () => {
          this.animationClasses.length = 0;
          this.animationClasses.push('');
          this.backdropAnimationClasses.length = 0;
          this.backdropAnimationClasses.push(CLOSED_CLASS);
          this.$emit(DRAWER_EVENTS.HIDDEN);
        },
        ANIMATION_DURATION.MEDIUM
      );
    }

    this.$emit(DRAWER_EVENTS.HIDE);
  }

  @Watch('active')
  activeChange(newValue: boolean, oldValue: boolean) {
    if (!!newValue !== !!oldValue) {
      this[newValue ? 'show' : 'hide']();
    }
  }

  documentClickHandler = (ev: Event): void => {
    const drawerElement = this.$refs.drawerElement as HTMLElement;
    const clickTarget = ev.target as HTMLElement;

    if (drawerElement.classList.contains(ACTIVE_CLASS) && !contains(drawerElement, clickTarget)) {
      this.$emit(DRAWER_EVENTS.CLICK_OUTSIDE);
    }
  };

  async toggle() {
    if (this.active) {
      this.hide();
    } else {
      this.show();
    }
  }

  beforeMount() {
    this.animationClasses.length = 0;
    this.animationClasses.push(this.active ? ACTIVE_CLASS : '');
    this.backdropAnimationClasses.length = 0;
    this.backdropAnimationClasses.push(this.active ? '' : CLOSED_CLASS);
  }

  beforeDestroy() {
    document.removeEventListener('click', this.documentClickHandler);
  }

  mounted() {
    document.addEventListener('click', this.documentClickHandler);
  }

  render() {
    const closeButton = (
      <button
        class={`
      ${BUTTON_CLASSES.BUTTON}
      -icon
      -close`}
        onClick={() => this.$emit(DRAWER_EVENTS.HIDE)}
        aria-label="Close">
        <div class={`${BUTTON_CLASSES.CONTENT}`}>
          <i class={`${ICON_CLASS} icon-x`}></i>
        </div>
      </button>
    );

    const drawer = (
      <div
        class={[
          DRAWER_CLASSES.DRAWER,
          ANIMATED_CLASS,
          this.position ? `-${this.position}` : '',
          this.portal ? PORTAL_CLASS : '',
          this.animationClasses.join(' '),
        ]
          .filter(cl => cl)
          .join(' ')}
        ref="drawerElement">
        {this.noHeader
          ? !this.nonClosable
            ? [closeButton, this.$slots.default]
            : this.$slots.default
          : !this.nonClosable
          ? [
              <div
                class={`
                ${DRAWER_CLASSES.HEADER}
              `}>
                <span class={`${DRAWER_CLASSES.TITLE}`}>{this.title}</span>
                {closeButton}
              </div>,
              <div class={`${DRAWER_CLASSES.CONTENT}`}>{this.$slots.default}</div>,
            ]
          : [
              <div class={`${DRAWER_CLASSES.HEADER}`}>
                <span class={`${DRAWER_CLASSES.TITLE}`}>{this.title}</span>
              </div>,
              <div class={`${DRAWER_CLASSES.CONTENT}`}>{this.$slots.default}</div>,
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
        `}>
          <div
            class={`
            ${BACKDROP_CLASSES.WRAPPER}
          `}>
            {drawer}
          </div>
        </div>
      );
    } else {
      return drawer;
    }
  }
}
