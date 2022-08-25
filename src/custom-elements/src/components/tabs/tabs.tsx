import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h,
  Listen
} from '@stencil/core';
import {
  ACTIVE_CLASS,
  DROPDOWN_CLASSES,
  TABS_CLASSES
} from '../../constants/classes';
import {
  ANIMATION_DURATION,
  TABS_SEE_MORE_DEFAULT_MESSAGE
} from '../../constants/constants';
import {
  TabTrigger,
  TabTriggerSizes,
  TabTriggerPosition,
  TabTriggerDirections
} from '../../constants/types';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import { uuid4 } from '../../utils/utils';
import _ from 'lodash';

const MARGIN_LEFT = 24;

@Component({
  tag: 'chi-tabs',
  styleUrl: 'tabs.scss',
  scoped: true
})
export class Tabs {
  @Element() el: HTMLElement;
  /**
   * To provide the data for Tabs' triggers
   */
  @Prop({ mutable: true, reflect: true }) triggers: TabTrigger[];
  /**
   *  To provide ID of the active tab
   */
  @Prop() activeTab = '';
  /**
   *  To enable animation of the border
   */
  @Prop() slidingBorder = false;
  /**
   *  To enable border
   */
  @Prop() border = false;
  /**
   *  TO enable solid style of Tabs
   */
  @Prop() solid = false;
  /**
   *  To enable vertical style of Tabs
   */
  @Prop() vertical = false;
  /**
   *  To configure See more message
   */
  @Prop() seeMoreMessage = TABS_SEE_MORE_DEFAULT_MESSAGE;

  @State() sliding = false;
  @State() isSeeMoreActive = false;
  @State() isSeeMoreVisible = false;
  @State() isSeeMoreTriggerMeasured = false;

  /**
   * Triggered when the user activates a tab
   */
  @Event({ eventName: 'chiTabChange' }) chiTabChange: EventEmitter<string>;

  private animation: ThreeStepsAnimation;
  private availableSpace = 0;
  private slidingBorderElement: HTMLElement = null;
  private ulElement: HTMLUListElement;
  private uuid4: string = uuid4();
  private lisArrayLength = 0;
  private liSizes = {};
  private seeMoreTriggerId: string = `see-more-trigger-${this.uuid4}`;
  private seeMoreTriggerElement: HTMLLIElement;
  private seeMoreTriggerElementWidth = 0;
  private dropdownKey = 0;
  seeMoreTriggerAnchorElement: HTMLAnchorElement;

  componentDidLoad() {
    if (!this.vertical) {
      this.calculateAvailableSpace();
      this.calculateLiSizes();
      this.seeMoreTriggerElementWidth =
        this.calculateSize(this.seeMoreTriggerElement, TabTriggerSizes.Width) +
        (this.solid ? 0 : MARGIN_LEFT);
      this.isSeeMoreTriggerMeasured = true;
      window.addEventListener('resize', this.handlerResize);
    }
  }

  activateTab(id: string) {
    this.activeTab = id;
    this.chiTabChange.emit(this.activeTab);
  }

  calculateAvailableSpace() {
    this.availableSpace = this.calculateSize(this.el, TabTriggerSizes.Width);
  }

  async calculateLiSizes() {
    const liElements = this.ulElement.querySelectorAll('li.chi-tabs__trigger');

    this.lisArrayLength = liElements.length;
    await liElements.forEach((li: HTMLElement, index) => {
      this.liSizes[li.dataset.index] =
        this.calculateSize(li, TabTriggerSizes.Width) +
        (index === 0 || this.solid ? 0 : MARGIN_LEFT);
    });
    this.setListOverflow();
  }

  async setListOverflow() {
    const copyTriggersData = _.cloneDeep(this.triggers);

    let usedSpace = 0;

    for (let i = 0; i < this.lisArrayLength; i++) {
      if (
        usedSpace + this.liSizes[i] + this.seeMoreTriggerElementWidth <=
        this.availableSpace
      ) {
        usedSpace += this.liSizes[i];
        this.triggers[i].overflow = false;
        this.isSeeMoreVisible = false;
      } else {
        this.triggers[i].overflow = true;
        this.isSeeMoreVisible = true;
      }
    }

    if (!_.isEqual(this.triggers, copyTriggersData)) {
      this.dropdownKey += 1;
    }
  }

  calculateSize(element: HTMLElement, size: TabTriggerSizes): number {
    const boundingClientRect = element.getBoundingClientRect();

    return boundingClientRect[size];
  }

  calculateLisWidthSum() {
    let sum = 0;

    for (let i = 0; i < this.lisArrayLength; i++) {
      sum += this.liSizes[i];
    }

    return sum;
  }

  getActiveTabTrigger(): HTMLElement {
    return this.el.querySelector(`li.${ACTIVE_CLASS}`) as HTMLElement;
  }

  getPosition(el: HTMLElement): TabTriggerPosition {
    const cs = window.getComputedStyle(el);
    const marginTop = cs.getPropertyValue('margin-top');
    const marginLeft = cs.getPropertyValue('margin-left');

    return {
      left: el.offsetLeft - parseInt(marginLeft),
      top: el.offsetTop - parseInt(marginTop)
    };
  }

  handlerClickSeeMore = async (e: Event) => {
    e.preventDefault();
    this.isSeeMoreActive = !this.isSeeMoreActive;
  };

  handlerClickTab(
    e: Event,
    triggerData: TabTrigger,
    slidingBorderNewPosition?: HTMLElement
  ) {
    e.preventDefault();
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
    }

    const element = slidingBorderNewPosition || (e.target as HTMLElement);
    const position = this.getPosition(element);

    if (this.slidingBorder) {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this.sliding = true;
          if (this.slidingBorderElement) {
            this.slidingBorderElement.style.width = `${this.calculateSize(
              this.getActiveTabTrigger(),
              TabTriggerSizes.Width
            )}px`;
          }
        },
        () => {
          const dimension = this.vertical
            ? TabTriggerSizes.Height
            : TabTriggerSizes.Width;
          const direction = this.vertical
            ? TabTriggerDirections.Top
            : TabTriggerDirections.Left;
          const size = this.calculateSize(
            element,
            this.vertical ? TabTriggerSizes.Height : TabTriggerSizes.Width
          );

          this.slidingBorderElement.style[
            direction
          ] = `${position[direction]}px`;
          this.slidingBorderElement.style[dimension] = `${size}px`;
        },
        () => {
          this.sliding = false;
        },
        ANIMATION_DURATION.MEDIUM
      );
    }

    this.activateTab(triggerData.id);
  }

  handlerResize = () => {
    this.calculateAvailableSpace();
    this.setListOverflow();
    this.isSeeMoreVisible = this.triggers.findIndex(li => li.overflow) !== -1;
  };


  @Listen('chiDropdownHide')
  hideDropdown() {
    this.isSeeMoreActive = false;
  }

  render() {
    const triggers =
      this.triggers &&
      this.triggers
        .filter(trigger => !trigger.overflow)
        .map((trigger: TabTrigger, index: number) => {
          return (
            <li
              class={`chi-tabs__trigger ${
                this.activeTab === trigger.id ? ACTIVE_CLASS : ''
              }`}
              data-index={index}
            >
              <a
                href={`#${trigger.id}`}
                role="tab"
                aria-selected={this.activeTab === trigger.id}
                aria-controls={`#${trigger.id}`}
                onClick={e => this.handlerClickTab(e, trigger)}
              >
                {trigger.label}
              </a>
            </li>
          );
        });
    const slidingBorder = this.slidingBorder ? (
      <li
        class={TABS_CLASSES.SLIDING_BORDER}
        ref={el => (this.slidingBorderElement = el)}
        style={{ left: '0px' }}
      ></li>
    ) : null;
    const seeMoreTrigger = !this.vertical &&
      (this.isSeeMoreVisible || !this.isSeeMoreTriggerMeasured) && (
        <li
          id={this.seeMoreTriggerId}
          ref={el => (this.seeMoreTriggerElement = el)}
        >
          <a
            href={`#seeMore`}
            role="tab"
            onClick={(e: Event) => this.handlerClickSeeMore(e)}
            ref={el => (this.seeMoreTriggerAnchorElement = el)}
          >
            {this.seeMoreMessage}
          </a>
        </li>
      );
    const overflowItems = this.triggers
      .filter(li => li.overflow)
      .map(trigger => {
        return (
          <a
            class={`${DROPDOWN_CLASSES.MENU_ITEM} ${
              this.activeTab === trigger.id ? ACTIVE_CLASS : ''
            }`}
            href="#"
            onClick={e =>
              this.handlerClickTab(e, trigger, this.seeMoreTriggerAnchorElement)
            }
            slot="menu"
          >
            {trigger.label}
          </a>
        );
      });
    const seeMoreDropdown = this.isSeeMoreVisible && !this.vertical && (
      <chi-dropdown
        active={this.isSeeMoreActive}
        key={this.dropdownKey}
        position="bottom"
        reference={`#${this.seeMoreTriggerId}`}
      >
        {overflowItems}
      </chi-dropdown>
    );

    return (
      <Host>
        <ul
          class={`
          ${TABS_CLASSES.TABS}
          ${this.slidingBorder ? TABS_CLASSES.ANIMATE : ''}
          ${this.border ? TABS_CLASSES.BORDER : ''}
          ${this.vertical ? TABS_CLASSES.VERTICAL : ''}
          ${this.solid ? TABS_CLASSES.SOLID : ''}
          ${this.sliding ? TABS_CLASSES.SLIDING : ''}
          `}
          ref={el => {
            this.ulElement = el;
          }}
          role="tablist"
        >
          {triggers}
          {seeMoreTrigger}
          {slidingBorder}
        </ul>
        {seeMoreDropdown}
      </Host>
    );
  }
}
