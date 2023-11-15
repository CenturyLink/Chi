import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h,
  Listen,
  Watch
} from '@stencil/core';
import {
  ACTIVE_CLASS,
  DROPDOWN_CLASSES,
  GENERIC_SIZE_CLASSES,
  ICON_CLASS,
  TABS_CLASSES,
  UTILITY_CLASSES,
  INVERSE_CLASS
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
import { TABS_SIZES, TabsSizes } from '../../constants/size';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import { uuid4 } from '../../utils/utils';
import _ from 'lodash';

const MARGIN_LEFT_BASE = 24;
const MARGIN_LEFT_LG = 32;

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
   *  To set tab size { xs, sm, md, lg, xl }.
   */
  @Prop({ reflect: true }) size?: TabsSizes = 'md';
  /**
   *  To configure See more Dropdown trigger message
   */
  @Prop() seeMoreMessage = TABS_SEE_MORE_DEFAULT_MESSAGE;
  /**
   * To set inverse style
   */
  @Prop() inverse = false;

  @State() sliding = false;
  @State() isSeeMoreActive = false;
  @State() isSeeMoreVisible = false;
  @State() isSeeMoreTriggerMeasured = false;

  /**
   * Triggered when the user activates a tab
   */
  @Event({ eventName: 'chiTabChange' }) chiTabChange: EventEmitter<TabTrigger>;

  @Watch('size')
  sizeValidation(newValue: TabsSizes) {
    const validValues = TABS_SIZES.join(', ');

    if (newValue && !TABS_SIZES.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid size for tabs. Valid values are: ${validValues}. `
      );
    }
  }

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
  private dropdownKeys = {};
  private seeMoreDropdown: HTMLChiDropdownElement;
  private liMarginLeft: number =
    this.size === 'lg' ? MARGIN_LEFT_LG : MARGIN_LEFT_BASE;

  componentWillLoad(): void {
    this.sizeValidation(this.size);
  }

  //#region Lifecycle hooks
  componentDidLoad() {
    if (!this.vertical) {
      this.setAvailableSpace();
      this.setLiSizes();
      this.seeMoreTriggerElementWidth =
        this.calculateSize(this.seeMoreTriggerElement, TabTriggerSizes.Width) +
        (this.solid ? 0 : this.liMarginLeft);
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
    const dropdowns = [];

    tabs.forEach((tab: TabTrigger) => {
      const isFirstLevel = level === 0;
      const firstLevelId = isFirstLevel ? tab.id : firstLevel;

      if (tab.children && tab.children.length > 0) {
        this.dropdownKeys[tab.id] = 0;
        dropdowns.push(
          this.getDropdown(tab, isFirstLevel, firstLevelId)
        );
        dropdowns.push(
          ...this.createDropdowns(tab.children, level + 1, firstLevelId)
        );
      }
    });

    return dropdowns;
  }

  getDropdown(tab: TabTrigger, isFirstLevel: boolean, firstLevelId: string) {
    return <chi-dropdown
      id={`subLevelDropdown-${tab.id}`}
      position={isFirstLevel ? 'bottom-start' : 'right-start'}
      reference={`#${tab.id}`}
      key={`${tab.id}-${this.dropdownKey}`}
    >
      {this.getDropdownMenuItems(tab, firstLevelId)}
    </chi-dropdown>
  }

  getDropdownMenuItems(tab: TabTrigger, firstLevelId: string) {
    return tab.children.map(child => {
      child.parent = tab;
      return this.getDropdownMenuItem(
        child,
        e => this.onDropdownMenuItemClick(e, tab, child, firstLevelId),
        UTILITY_CLASSES.JUSTIFY.BETWEEN,
      )
    })
  }

  getDropdownMenuItem(
    tab: TabTrigger, 
    onClickHandler: Function,
    extraClass = ''
  ) {
    return (
      <a
        class={`${DROPDOWN_CLASSES.MENU_ITEM} 
          ${ extraClass } 
          ${ this._isActiveTab(tab) ? ACTIVE_CLASS : ''}
        `}
        id={tab.id}
        href={this.getTabHref(tab)}
        target={this.getTabHrefTarget(tab)}
        onMouseEnter={() => this.handlerTabMouseEnter(tab)}
        onMouseLeave={e => this.handlerMouseLeave(e)}
        onClick={e => onClickHandler(e)}
        innerHTML={tab.label}
        slot="menu"
      >
        {tab.children &&
          tab.children.length > 0 &&
          this.dropdownIcon('right')}
      </a>
    );
  }

  onDropdownMenuItemClick(e: Event, tab: TabTrigger, tabChild: TabTrigger, firstLevelId: string) {
    const dropdownElement = this.getSubLevelDropdown(tab.id)
    const firstLevelTriggerElement = this.el.querySelector(
      `li#${firstLevelId} a`
    ) as HTMLElement;

    this.handlerClickTab(e, tabChild, firstLevelTriggerElement);
    this.isSeeMoreActive = false;
    if (dropdownElement) {
      this.setParentTabActive(tabChild);
      dropdownElement.hide();
    }
  }

  getActiveTabTrigger(): HTMLElement {
    return this.el.querySelector(`li.${ACTIVE_CLASS}`) as HTMLElement;
  }

  /**
   * Gets the element for a dropdown sublevel with the given ID
   */
  getSubLevelDropdown(id: string): HTMLChiDropdownElement {
    return this.el.querySelector(
      `chi-dropdown#subLevelDropdown-${id}`
    ) as HTMLChiDropdownElement;
  }

  /**
   * Returns the href for the given tab. 
   * If the tab has an external href, normalizes the href to ensure that
   * the browser does not prepends the current domain.
   * @param tab TabTrigger
   */
  getTabHref(tab: TabTrigger): string {
    let href = tab.href || `#${tab.id}`;

    if (tab.href?.startsWith('www.')) {
      href = '//' + href       
    }

    return href
  }

  /**
   * If the tab contains a target, returns it.
   * If the tab contains an external href, the default behavior is to open
   * the link in a new tab.
   */
  getTabHrefTarget(tab: TabTrigger): string {
    let target = tab.target || ''

    if (!this.isTabAnchorLink(tab) && !target) {
      target = '_blank'
    }

    return target
  }

  /**
   * Checks wether the tab is an anchor link (internal link) 
   */
  isTabAnchorLink(tabData :TabTrigger): boolean {
    return !tabData.href || tabData.href.startsWith('#')
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
    if (this.isTabAnchorLink(tabData)) {
      e.preventDefault();
    }
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
    }

    const element = slidingBorderNewPosition || (e.target as HTMLElement);

    if (this.slidingBorder) {
      this.setAnimation(element)
    }

    this.removeActiveItems();
    this.activateTab(tabData, element);
  }

  setAnimation(element: HTMLElement) {
    const position = this.getPosition(element);
    this.animation = ThreeStepsAnimation.animationFactory(
      () => {
        this.sliding = true;
      },
      () => {
        const animationStyle = this.getSlidingBorderAnimationStyle();
      
        const size = this.calculateSize(
          element,
          animationStyle.dimension
        );

        this.slidingBorderElement.style[
          animationStyle.direction
        ] = `${position[animationStyle.direction]}px`;

        this.slidingBorderElement.style[animationStyle.dimension] = `${size}px`;
      },
      () => {
        this.slidingBorderElement.style.width = '';
        this.sliding = false;
      },
      ANIMATION_DURATION.MEDIUM
    );
  }

  getSlidingBorderAnimationStyle() {
    return this.vertical
      ? {dimension: TabTriggerSizes.Height, direction: TabTriggerDirections.Top}
      : {dimension: TabTriggerSizes.Width, direction: TabTriggerDirections.Left};
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

  getParentIds(data: TabTrigger): string[] {
    const parentIds = [];

    const collectParentIds = (item: TabTrigger) => {
      if (item.parent) {
        parentIds.push(item.parent.id);
        collectParentIds(item.parent);
      }
    };

    collectParentIds(data);
    return parentIds;
  }

  hideInactiveDropdowns(tabData: TabTrigger) {
    const parentIds = this.getParentIds(tabData);
    const idsToRemove = [...parentIds, tabData.id];
    const filteredDropdownKeys = Object.keys(this.dropdownKeys).filter(
      item => !idsToRemove.includes(item)
    );

    this.hideSelectedDropdowns(filteredDropdownKeys);
  }

  handlerTabMouseEnter = (tabData: TabTrigger) => {
    this.hideInactiveDropdowns(tabData);

    if (!tabData.children) return;

    this.dropdownKeys[tabData.id] += 1;
    const dropdownElement = this.getSubLevelDropdown(tabData.id)

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

  /**
   * Checks if the tab or any of it's children is active.
   */
  _isActiveTab(tab: TabTrigger) {
    let isActiveTab = tab.id === this.activeTab;

    if (!isActiveTab && tab.children) {
      isActiveTab = tab.children.some(tab => this._isActiveTab(tab))
    }

    return isActiveTab
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
        (index === 0 || this.solid ? 0 : this.liMarginLeft);
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

  hideDropdowns(dropdowns: string[]) {
    dropdowns.forEach(id => {
      const dropdownElement = this.getSubLevelDropdown(id);

      if (dropdownElement) {
        dropdownElement.hide();
      }
    });
  }

  hideAllDropdowns() {
    this.hideDropdowns(Object.keys(this.dropdownKeys));
  }

  hideSelectedDropdowns(dropdowns: string[]) {
    this.hideDropdowns(dropdowns);
  }

  dropdownIcon(position: 'right' | 'down'): HTMLElement {
    return (
      <i
        class={`${ICON_CLASS} ${UTILITY_CLASSES.MARGIN.LEFT[2]} ${UTILITY_CLASSES.MARGIN.RIGHT[0]} icon-chevron-${position} ${GENERIC_SIZE_CLASSES.XS}`}
        aria-hidden="true"
      ></i>
    );
  }

  getTabElements() {
    const tabs = []

    this.tabs?.forEach((tab: TabTrigger, index: number) => {
      if (tab.overflow) return

      tabs.push(
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
            innerHTML={tab.label}
          ></a>
        </li>
      );
    });

    return tabs;
  }

  getSlidingBorder() {
    return this.slidingBorder ? (
      <li
        class={TABS_CLASSES.SLIDING_BORDER}
        ref={el => (this.slidingBorderElement = el)}
        style={{
          left: this.slidingBorderLeft
        }}
      ></li>
    ) : null;
  }

  getSeeMoreTrigger() {
    const activeTabOverflownClass = this.isActiveTabOverflown(this.tabs)
    ? ACTIVE_CLASS
    : '';

    return !this.vertical &&
      (this.isSeeMoreVisible || !this.isSeeMoreTriggerMeasured) && (
        <li
          class={`${TABS_CLASSES.SHOW_MORE} ${activeTabOverflownClass}`}
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
  }

  getOverflowItems() {
    return this.tabs.filter(li => li.overflow).map(tab => this.getDropdownMenuItem(
      tab,
      e => {
        this.handlerClickTab(e, tab, this.seeMoreTriggerAnchorElement);
        this.seeMoreDropdown.hide();
        this.isSeeMoreActive = false;
      }
    ))
  }

  getDropdowns() {
    return this.vertical
      ? []
      : [
        this.isSeeMoreVisible && (
          <chi-dropdown
            active={this.isSeeMoreActive}
            id={`${this.uuid4}-see-more-dropdown`}
            key={this.dropdownKey}
            position="bottom"
            reference={`#${this.seeMoreTriggerId}`}
            ref={el => (this.seeMoreDropdown = el)}
          >
            {this.getOverflowItems()}
          </chi-dropdown>
        ),
        ...this.createDropdowns(this.tabs, 0)
    ];
  }

  // TODO: Improve labels with slots to support custom content once stencil V3 is deployed: https://github.com/ionic-team/stencil/issues/2257
  render() {
    const tabElements = this.getTabElements();
    const slidingBorder = this.getSlidingBorder();
    const seeMoreTrigger = this.getSeeMoreTrigger();

    const dropdowns = this.getDropdowns();

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
            ${this.size ? `-${this.size}` : ''}
            ${this.inverse && INVERSE_CLASS}
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
