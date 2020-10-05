import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  activeClass,
  animatedClass,
  backdropClass,
  backgropWrapperClass,
  closedClass,
  drawerClass,
  drawerContentClass,
  drawerHeaderClass,
  drawerTitleClass,
  portalClass,
  inverseClass,
  buttonClass,
  buttonContentClass,
  iconClass,
  transitioningClass
} from '../../constants/classes';
import {
  chiDrawerShowEvent,
  chiDrawerShownEvent,
  chiDrawerHideEvent,
  chiDrawerHiddenEvent
} from '../../constants/events';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import { ANIMATION_DURATION } from '../../constants/constants';
import { contains } from '../../../../custom-elements/src/utils/utils';

@Component
export default class Drawer extends Vue {
  @Prop() position!: "left" | "top" | "right" | "bottom";
  @Prop() backdrop!: string;
  @Prop() active!: boolean;
  @Prop() nonClosable!: boolean;
  @Prop() noHeader!: boolean;
  @Prop() preventAutoHide!: boolean;
  @Prop() portal!: boolean;
  @Prop() title!: string;

  animation!: ThreeStepsAnimation;

  _animationClasses!: string;

  _backdropAnimationClasses!: string;

  show() {
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
    }

    if (this._backdropAnimationClasses !== '' || this._animationClasses !== activeClass) {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this._animationClasses = transitioningClass;
          this._backdropAnimationClasses = `${transitioningClass} ${closedClass}`;
          this.$forceUpdate();
        },
        () => {
          this._animationClasses = `${transitioningClass} ${activeClass}`;
          this._backdropAnimationClasses = transitioningClass;
          this.$forceUpdate();
        },
        () => {
          this._animationClasses = activeClass;
          this._backdropAnimationClasses = '';
          this.$forceUpdate();
          this.$emit(chiDrawerShownEvent);
        },
        ANIMATION_DURATION.MEDIUM
      );
    }

    this.$emit(chiDrawerShowEvent);
  }

  hide() {
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
    }

    if (this._backdropAnimationClasses !== closedClass || this._animationClasses !== '') {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this._animationClasses = `${transitioningClass} ${activeClass}`;
          this._backdropAnimationClasses = transitioningClass;
          this.$forceUpdate();
        },
        () => {
          this._animationClasses = transitioningClass;
          this._backdropAnimationClasses = `${transitioningClass} ${closedClass}`;
          this.$forceUpdate();
        },
        () => {
          this._animationClasses = '';
          this._backdropAnimationClasses = closedClass;
          this.$forceUpdate();
          this.$emit(chiDrawerHiddenEvent);
        },
        ANIMATION_DURATION.MEDIUM
      );
    }

    this.$emit(chiDrawerHideEvent);
  }

  _documentClickHandler = (ev: Event): void => {
    const drawerElement = this.$refs.drawerElement as HTMLElement;
    const clickTarget = ev.target as HTMLElement;

    if (!this.preventAutoHide) {
      if (drawerElement.classList.contains(activeClass)) {
          if (!contains(drawerElement, clickTarget)) {
            this.hide();
          }
      }
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
    this._animationClasses = this.active ? activeClass : '';
    this._backdropAnimationClasses = this.active ? '' : closedClass;
  }

  beforeDestroy() {
    document.removeEventListener('click', this.$data._documentClickHandler);
  }

  mounted() {
    document.addEventListener('click', this.$data._documentClickHandler);
  }

  render() {
    const closeButton = <button class={`
      ${buttonClass}
      -icon
      -close`}
      onClick={() => this.hide()}
      aria-label="Close">
      <div class={`${buttonContentClass}`}>
        <i class={`${iconClass} icon-x`}></i>
      </div>
    </button>;

    const drawer = (
      <div
        class={`
        ${drawerClass}
        ${animatedClass}
        ${this.position ? `-${this.position}` : ''}
        ${this.portal ? portalClass : ''}
        ${this._animationClasses}
      `}
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
                ${drawerHeaderClass}
              `}>
                <span class={`${drawerTitleClass}`}>{this.title}</span>
                {closeButton}
              </div>,
              <div class={`${drawerContentClass}`}>
                {this.$slots.default}
              </div>
            ]
            : [
              <div class={`${drawerHeaderClass}`}>
                <span class={`${drawerTitleClass}`}>{this.title}</span>
              </div>,
              <div class={`${drawerContentClass}`}>
                {this.$slots.default}
              </div>
            ]
        }
      </div>
    );

    if (this.backdrop || this.backdrop === '') {
      return (
        <div class={`
        ${backdropClass}
        ${animatedClass}
          ${this.backdrop === 'inverse' ? `-${inverseClass}` : ''}
          ${this._backdropAnimationClasses}
        `}>
          <div class={`
            ${backgropWrapperClass}
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
