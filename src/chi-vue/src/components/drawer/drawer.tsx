import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  ACTIVE_CLASS,
  ANIMATED_CLASS,
  BACKDROP_CLASSES,
  CLOSED_CLASS,
  DRAWER_CLASSES,
  PORTAL_CLASS,
  INVERSE_CLASS,
  BUTTON_CLASSES,
  iconClass,
  TRANSITIONING_CLASS
} from '../../constants/classes';
import { DRAWER_EVENTS } from '../../constants/events';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import { ANIMATION_DURATION } from '../../constants/constants';
import { contains } from '../../../../custom-elements/src/utils/utils';
import { Backdrop, DrawerPositions } from '../../constants/types';

@Component
export default class Drawer extends Vue {
  @Prop() active!: boolean;
  @Prop() backdrop!: Backdrop;
  @Prop() noHeader!: boolean;
  @Prop() nonClosable!: boolean;
  @Prop() portal!: boolean;
  @Prop() position!: DrawerPositions;
  @Prop() preventAutoHide!: boolean;
  @Prop() title!: string;

  animation!: ThreeStepsAnimation;

  _animationClasses!: string[];

  _backdropAnimationClasses!: string[];

  constructor() {
    super();
    this._animationClasses  = [];
    this._backdropAnimationClasses  = [];
  }

  show() {
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
    }

    if (this.$data._backdropAnimationClasses.length !== 0 ||
      !this.$data._animationClasses.includes(ACTIVE_CLASS)) {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this.$data._animationClasses.length = 0;
          this.$data._animationClasses.push(TRANSITIONING_CLASS);
          this.$data._backdropAnimationClasses.length = 0;
          this.$data._backdropAnimationClasses.push(TRANSITIONING_CLASS, CLOSED_CLASS);
        },
        () => {
          this.$data._animationClasses.length = 0;
          this.$data._animationClasses.push(TRANSITIONING_CLASS, ACTIVE_CLASS);
          this.$data._backdropAnimationClasses.length = 0;
          this.$data._backdropAnimationClasses.push(TRANSITIONING_CLASS);
        },
        () => {
          this.$data._animationClasses.length = 0;
          this.$data._animationClasses.push(ACTIVE_CLASS);
          this.$data._backdropAnimationClasses.length = 0;
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

    if (!this.$data._backdropAnimationClasses.includes(CLOSED_CLASS) ||
      this.$data._animationClasses.length !== 0) {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this.$data._animationClasses.length = 0;
          this.$data._animationClasses.push(TRANSITIONING_CLASS, ACTIVE_CLASS);
          this.$data._backdropAnimationClasses.length = 0;
          this.$data._backdropAnimationClasses.push(TRANSITIONING_CLASS);
        },
        () => {
          this.$data._animationClasses.length = 0;
          this.$data._animationClasses.push(TRANSITIONING_CLASS);
          this.$data._backdropAnimationClasses.length = 0;
          this.$data._backdropAnimationClasses.push(TRANSITIONING_CLASS, CLOSED_CLASS);
        },
        () => {
          this.$data._animationClasses.length = 0;
          this.$data._animationClasses.push('');
          this.$data._backdropAnimationClasses.length = 0;
          this.$data._backdropAnimationClasses.push(CLOSED_CLASS);
          this.$emit(DRAWER_EVENTS.HIDDEN);
        },
        ANIMATION_DURATION.MEDIUM
      );
    }

    this.$emit(DRAWER_EVENTS.HIDE);
  }

  _documentClickHandler = (ev: Event): void => {
    const drawerElement = this.$refs.drawerElement as HTMLElement;
    const clickTarget = ev.target as HTMLElement;

    if (!this.preventAutoHide &&
      drawerElement.classList.contains(ACTIVE_CLASS) &&
      !contains(drawerElement, clickTarget)) {
        this.hide();
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
    this.$data._animationClasses.length = 0;
    this.$data._animationClasses.push(this.active ? ACTIVE_CLASS : '');
    this.$data._backdropAnimationClasses.length = 0;
    this.$data._backdropAnimationClasses.push(this.active ? '' : CLOSED_CLASS);
  }

  beforeDestroy() {
    document.removeEventListener('click', this.$data._documentClickHandler);
  }

  mounted() {
    document.addEventListener('click', this.$data._documentClickHandler);
  }

  render() {
    const closeButton = <button class={`
      ${BUTTON_CLASSES.BUTTON}
      -icon
      -close`}
      onClick={() => this.hide()}
      aria-label="Close">
      <div class={`${BUTTON_CLASSES.CONTENT}`}>
        <i class={`${iconClass} icon-x`}></i>
      </div>
    </button>;

    const drawer = (
      <div
        class={[
          DRAWER_CLASSES.DRAWER,
          ANIMATED_CLASS,
          this.position ? `-${this.position}` : '',
          this.portal ? PORTAL_CLASS : '',
          this.$data._animationClasses.join(" ")
        ].filter(cl => cl).join(" ")}
        ref='drawerElement'
        >
        {this.noHeader
          ? !this.nonClosable
            ? [
              closeButton,
              this.$slots.default
            ]
            : this.$slots.default
          : !this.nonClosable
            ? [
              <div class={`
                ${DRAWER_CLASSES.HEADER}
              `}>
                <span class={`${DRAWER_CLASSES.TITLE}`}>{this.title}</span>
                {closeButton}
              </div>,
              <div class={`${DRAWER_CLASSES.CONTENT}`}>
                {this.$slots.default}
              </div>
            ]
            : [
              <div class={`${DRAWER_CLASSES.HEADER}`}>
                <span class={`${DRAWER_CLASSES.TITLE}`}>{this.title}</span>
              </div>,
              <div class={`${DRAWER_CLASSES.CONTENT}`}>
                {this.$slots.default}
              </div>
            ]
        }
      </div>
    );

    if (this.backdrop || this.backdrop === '') {
      return (
        <div class={`
        ${BACKDROP_CLASSES.BACKDROP}
        ${ANIMATED_CLASS}
          ${this.backdrop === 'inverse' ? `-${INVERSE_CLASS}` : ''}
          ${this.$data._backdropAnimationClasses}
        `}>
          <div class={`
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
