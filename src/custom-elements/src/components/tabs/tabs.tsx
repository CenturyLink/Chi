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
  GENERIC_SIZE_CLASSES,
  ICON_CLASS,
  TABS_CLASSES,
  UTILITY_CLASSES
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
   * To provide the data for Tabs
   */
  @Prop({ mutable: true, reflect: true }) tabs: TabTrigger[];
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
   *  To enable solid style of Tabs
   */
  @Prop() solid = false;
  /**
   *  To enable vertical variant of Tabs
   */
  @Prop() vertical = false;
  /**
   *  To configure See more Dropdown trigger message
   */
  @Prop() seeMoreMessage = TABS_SEE_MORE_DEFAULT_MESSAGE;

  @State() sliding = false;
  @State() isSeeMoreActive = false;
  @State() isSeeMoreVisible = false;
  @State() isSeeMoreTriggerMeasured = false;

  /**
   * Triggered when the user activates a tab
   */
  @Event({ eventName: 'chiTabChange' }) chiTabChange: EventEmitter<TabTrigger>;

  private activeTabElement: HTMLElement = null;
  private animation: ThreeStepsAnimation;
  private availableSpace = 0;
  private dropdownKey = 0;
  private slidingBorderElement: HTMLElement = null;
  private lisArrayLength = 0;
  private liSizes = {};
  private seeMoreTriggerAnchorElement: HTMLAnchorElement;
  private seeMoreTriggerElement: HTMLLIElement;
  private seeMoreTriggerElementWidth = 0;
  private ulElement: HTMLUListElement;
  private uuid4: string = uuid4();
  private seeMoreTriggerId: string = `see-more-trigger-${this.uuid4}`;
  private slidingBorderLeft: string;
  private dropdowns = [];
  private dropdownKeys = {};
  private seeMoreDropdown: HTMLChiDropdownElement;

  //#region Lifecycle hooks
  componentDidLoad() {
    if (!this.vertical) {
      this.setAvailableSpace();
      this.setLiSizes();
      this.seeMoreTriggerElementWidth =
        this.calculateSize(this.seeMoreTriggerElement, TabTriggerSizes.Width) +
        (this.solid ? 0 : MARGIN_LEFT);
      this.isSeeMoreTriggerMeasured = true;
      this.activeTabElement = this.getActiveTabTrigger();
      this.setSlidingBorderStyles();
      window.addEventListener('resize', this.handlerResize);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.handlerResize);
  }
  //#endregion

  activateTab(tab: TabTrigger, element: HTMLElement) {
    this.activeTab = tab.id;
    this.activeTabElement = element;
    this.chiTabChange.emit(tab);
  }

  calculateSize(element: HTMLElement, size: TabTriggerSizes): number {
    return element ? element.getBoundingClientRect()[size] : 0;
  }

  calculateLisWidthSum() {
    let sum = 0;

    for (let i = 0; i < this.lisArrayLength; i++) {
      sum += this.liSizes[i];
    }

    return sum;
  }

  setParentTabActive(tab: TabTrigger) {
    const id = tab.parent ? tab.parent.id : tab.id;
    const parentTabElement = document.getElementById(id) as HTMLAnchorElement;

    parentTabElement.classList.add(ACTIVE_CLASS);
    if (tab.parent) {
      this.setParentTabActive(tab.parent);
    }
  }

  removeActiveItems() {
    Object.keys(this.dropdownKeys).forEach(id => {
      const menuItemElement = document.getElementById(id);

      if (menuItemElement && menuItemElement.classList.contains(ACTIVE_CLASS)) {
        menuItemElement.classList.remove(ACTIVE_CLASS);
      }
    });
  }

  createDropdowns(tabs: TabTrigger[], level: number, firstLevel?: string) {
    if (this.vertical) {
      return [];
    }

    tabs.forEach((tab: TabTrigger) => {
      const firstLevelId = level === 0 ? tab.id : firstLevel;

      if (tab.children && tab.children.length > 0) {
        this.dropdownKeys[tab.id] = 0;
        this.dropdowns.push(
          <chi-dropdown
            id={`subLevelDropdown-${tab.id}`}
            position={level === 0 ? 'bottom-start' : 'right-start'}
            reference={`#${tab.id}`}
            key={`${tab.id}-${this.dropdownKey}`}
          >
            {tab.children.map(child => {
              child.parent = tab;

              return (
                <a
                  class={`${DROPDOWN_CLASSES.MENU_ITEM} ${
                    UTILITY_CLASSES.JUSTIFY.BETWEEN
                  } ${this._isActiveTab(child) ? ACTIVE_CLASS : ''}`}
                  id={child.id}
                  onMouseEnter={() => this.handlerTabMouseEnter(child)}
                  onMouseLeave={e => this.handlerMouseLeave(e)}
                  onClick={e => {
                    const dropdownElement = this.el.querySelector(
                      `chi-dropdown#subLevelDropdown-${tab.id}`
                    ) as HTMLChiDropdownElement;
                    const firstLevelTriggerElement = this.el.querySelector(
                      `li#${firstLevelId} a`
                    ) as HTMLElement;

                    this.handlerClickTab(e, child, firstLevelTriggerElement);
                    this.isSeeMoreActive = false;
                    if (dropdownElement) {
                      this.setParentTabActive(child);
                      dropdownElement.hide();
                    }
                  }}
                  innerHTML={
                    child.customLabel ? child.customLabel : child.label
                  }
                  slot="menu"
                >
                  {child.children &&
                    child.children.length > 0 &&
                    this.dropdownIcon('right')}
                </a>
              );
            })}
          </chi-dropdown>
        );
        this.createDropdowns(tab.children, level + 1, firstLevelId);
      }
    });

    return this.dropdowns;
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

  handlerClickSeeMore = (e: Event) => {
    e.preventDefault();
    this.isSeeMoreActive = !this.isSeeMoreActive;
    if (!this.seeMoreDropdown) {
      const seeMoreDropdown = document.getElementById(
        `${this.uuid4}-see-more-dropdown`
      ) as HTMLChiDropdownElement;

      this.seeMoreDropdown = seeMoreDropdown;
    }

    this.seeMoreDropdown.toggle();
  };

  handlerClickTab(
    e: Event,
    tabData: TabTrigger,
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
          this.slidingBorderElement.style.width = '';
          this.sliding = false;
        },
        ANIMATION_DURATION.MEDIUM
      );
    }

    this.removeActiveItems();
    this.activateTab(tabData, element);
  }

  handlerResize = () => {
    this._setSeeMoreTriggerElement();
    this.setAvailableSpace();
    this.setListOverflow();
    this.isSeeMoreVisible = this.tabs.findIndex(li => li.overflow) !== -1;
    this.activeTabElement = this.getActiveTabTrigger();
    this.setSlidingBorderStyles();
    this.hideAllDropdowns();
  };

  handlerTabMouseEnter = (tabData: TabTrigger) => {
    if (!tabData.children) return;

    this.dropdownKeys[tabData.id] += 1;
    const dropdownElement = this.el.querySelector(
      `#subLevelDropdown-${tabData.id}`
    );

    if (dropdownElement) {
      (dropdownElement as HTMLChiDropdownElement).show();
    }
  };

  handlerMouseLeave = (e: MouseEvent, isTargetMenu?: boolean) => {
    const elementTarget = isTargetMenu
      ? DROPDOWN_CLASSES.MENU
      : DROPDOWN_CLASSES.MENU_ITEM;
    const elements = Array.from(document.getElementsByClassName(
      elementTarget
    ) as HTMLCollectionOf<HTMLElement>);
    const isElementTarget = elements.some(el => el === e.relatedTarget);

    if (!isElementTarget) {
      this.hideAllDropdowns();
    }
  };

  @Listen('chiDropdownHide')
  hideDropdown() {
    this.isSeeMoreActive = false;
  }

  _isActiveTab(tab: TabTrigger) {
    if (tab.children) {
      return (
        tab.id === this.activeTab ||
        tab.children.some(tab => this._isActiveTab(tab))
      );
    } else {
      return tab.id === this.activeTab;
    }
  }

  isActiveTabOverflown(tabs: TabTrigger[]): boolean {
    return tabs.some(tab => this._isActiveTab(tab) && !!tab.overflow);
  }

  _setSeeMoreTriggerElement() {
    if (!this.seeMoreTriggerElement) {
      const seeMoreElement = document.getElementById(
        this.seeMoreTriggerId
      ) as HTMLLIElement;

      this.seeMoreTriggerElement = seeMoreElement;
    }
  }

  setAvailableSpace() {
    this.availableSpace = this.calculateSize(this.el, TabTriggerSizes.Width);
  }

  async setLiSizes() {
    const liElements = this.ulElement.querySelectorAll(
      `li.${TABS_CLASSES.TRIGGER}`
    );

    this.lisArrayLength = liElements.length;
    await liElements.forEach((li: HTMLElement, index) => {
      this.liSizes[li.dataset.index] =
        this.calculateSize(li, TabTriggerSizes.Width) +
        (index === 0 || this.solid ? 0 : MARGIN_LEFT);
    });
    this.setListOverflow();
  }

  setListOverflow() {
    const copyTabsData = _.cloneDeep(this.tabs);

    let usedSpace = 0;

    for (let i = 0; i < this.lisArrayLength; i++) {
      if (
        usedSpace + this.liSizes[i] + this.seeMoreTriggerElementWidth <=
        this.availableSpace
      ) {
        usedSpace += this.liSizes[i];
        this.tabs[i].overflow = false;
        this.isSeeMoreVisible = false;
      } else {
        this.tabs[i].overflow = true;
        this.isSeeMoreVisible = true;
      }
    }

    if (!_.isEqual(this.tabs, copyTabsData)) {
      this.dropdownKey += 1;
    }
  }

  setSlidingBorderStyles() {
    const element = this.isActiveTabOverflown(this.tabs)
      ? this.seeMoreTriggerElement
      : this.activeTabElement;
    const position = this.getPosition(element);

    this.slidingBorderLeft = `${position.left}px`;
  }

  hideAllDropdowns() {
    Object.keys(this.dropdownKeys).forEach(id => {
      const dropdownElement = this.el.querySelector(`#subLevelDropdown-${id}`);

      if (dropdownElement) {
        (dropdownElement as HTMLChiDropdownElement).hide();
      }
    });
  }

  dropdownIcon(position: 'right' | 'down'): HTMLElement {
    return (
      <i
        class={`${ICON_CLASS} ${UTILITY_CLASSES.MARGIN.LEFT[2]} ${UTILITY_CLASSES.MARGIN.RIGHT[0]} icon-chevron-${position} ${GENERIC_SIZE_CLASSES.XS}`}
        aria-hidden="true"
      ></i>
    );
  }

  // TODO: Improve customLabels with slots once stencil V3 is deployed: https://github.com/ionic-team/stencil/issues/2257
  render() {
    this.dropdowns = [];
    const tabElements =
      this.tabs &&
      this.tabs
        .filter(tab => !tab.overflow)
        .map((tab: TabTrigger, index: number) => {
          return (
            <li
              class={`${TABS_CLASSES.TRIGGER} ${
                this._isActiveTab(tab) ? ACTIVE_CLASS : ''
              }`}
              data-index={index}
              id={tab.id}
              onMouseEnter={() => {
                this.hideAllDropdowns();
                this.handlerTabMouseEnter(tab);
              }}
            >
              <a
                href={`#${tab.id}`}
                class={tab.children ? '-has-child' : ''}
                role="tab"
                aria-selected={this._isActiveTab(tab)}
                aria-controls={`#${tab.id}`}
                onClick={e => this.handlerClickTab(e, tab)}
                innerHTML={tab.customLabel ? tab.customLabel : tab.label}
              ></a>
            </li>
          );
        });
    const slidingBorder = this.slidingBorder ? (
      <li
        class={TABS_CLASSES.SLIDING_BORDER}
        ref={el => (this.slidingBorderElement = el)}
        style={{
          left: this.slidingBorderLeft
        }}
      ></li>
    ) : null;
    const activeTabOverflownClass = this.isActiveTabOverflown(this.tabs) ? ACTIVE_CLASS : '';
    const seeMoreTrigger = !this.vertical &&
      (this.isSeeMoreVisible || !this.isSeeMoreTriggerMeasured) && (
        <li
          class={`chi-tabs__trigger ${activeTabOverflownClass}`}
          id={this.seeMoreTriggerId}
          ref={el => (this.seeMoreTriggerElement = el)}
        >
          <a
            class={}
            href={`#seeMore`}
            role="tab"
            onClick={(e: Event) => this.handlerClickSeeMore(e)}
            ref={el => (this.seeMoreTriggerAnchorElement = el)}
          >
            {this.seeMoreMessage}
          </a>
        </li>
      );
    const overflowItems = this.tabs
      .filter(li => li.overflow)
      .map(tab => {
        return (
          <a
            class={`${DROPDOWN_CLASSES.MENU_ITEM} ${
              this._isActiveTab(tab) ? ACTIVE_CLASS : ''
            }`}
            id={tab.id}
            href="#"
            onMouseEnter={() => this.handlerTabMouseEnter(tab)}
            onMouseLeave={e => this.handlerMouseLeave(e, true)}
            onClick={e => {
              this.handlerClickTab(e, tab, this.seeMoreTriggerAnchorElement);
              this.seeMoreDropdown.hide();
              this.isSeeMoreActive = false;
            }}
            innerHTML={tab.customLabel ? tab.customLabel : tab.label}
            slot="menu"
          >
            {tab.children && this.dropdownIcon('right')}
          </a>
        );
      });
    const dropdowns = [
      this.isSeeMoreVisible && !this.vertical && (
        <chi-dropdown
          active={this.isSeeMoreActive}
          id={`${this.uuid4}-see-more-dropdown`}
          key={this.dropdownKey}
          position="bottom"
          reference={`#${this.seeMoreTriggerId}`}
          ref={el => (this.seeMoreDropdown = el)}
        >
          {overflowItems}
        </chi-dropdown>
      ),
      this.createDropdowns(this.tabs, 0)
    ];

    return (
      <Host>
        <ul
          class={`
            ${TABS_CLASSES.TABS}
            ${this.slidingBorder && TABS_CLASSES.ANIMATE}
            ${this.border && TABS_CLASSES.BORDER}
            ${this.vertical && TABS_CLASSES.VERTICAL}
            ${this.solid && TABS_CLASSES.SOLID}
            ${this.sliding && TABS_CLASSES.SLIDING}
          `}
          ref={el => {
            this.ulElement = el;
          }}
          onMouseLeave={e => this.handlerMouseLeave(e, true)}
          role="tablist"
        >
          {tabElements}
          {seeMoreTrigger}
          {slidingBorder}
        </ul>
        {dropdowns}
      </Host>
    );
  }
}
