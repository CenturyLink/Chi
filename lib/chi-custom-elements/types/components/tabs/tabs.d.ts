import { EventEmitter } from '../../stencil-public-runtime';
import { TabTrigger, TabTriggerSizes, TabTriggerPosition, TabTriggerDirections } from '../../constants/types';
import { TabsSizes } from '../../constants/size';
export declare class Tabs {
    el: HTMLElement;
    /**
     * To provide the data for Tabs
     */
    tabs: TabTrigger[];
    /**
     *  To provide ID of the active tab
     */
    activeTab: string;
    /**
     *  To enable animation of the border
     */
    slidingBorder: boolean;
    /**
     *  To enable border
     */
    border: boolean;
    /**
     *  To enable solid style of Tabs
     */
    solid: boolean;
    /**
     *  To enable vertical variant of Tabs
     */
    vertical: boolean;
    /**
     *  To set tab size { xs, sm, md, lg, xl }.
     */
    size?: TabsSizes;
    /**
     *  To configure See more Dropdown trigger message
     */
    seeMoreMessage: string;
    /**
     * To set inverse style
     */
    inverse: boolean;
    /**
     * To add extra classes to ul
     */
    extraClass: string;
    sliding: boolean;
    isSeeMoreActive: boolean;
    isSeeMoreVisible: boolean;
    isSeeMoreTriggerMeasured: boolean;
    currentTabs: TabTrigger[];
    activePanel: string;
    /**
     * Triggered when the user activates a tab
     */
    chiTabChange: EventEmitter<TabTrigger>;
    sizeValidation(newValue: TabsSizes): void;
    setTabs(newValue: TabTrigger[], oldValue: TabTrigger[]): void;
    activeTabChanged(newValue: string): void;
    private activeTabElement;
    private animation;
    private availableSpace;
    private dropdownKey;
    private slidingBorderElement;
    private lisArrayLength;
    private liSizes;
    private seeMoreTriggerAnchorElement;
    private seeMoreTriggerElement;
    private seeMoreTriggerElementWidth;
    private ulElement;
    private uuid4;
    private seeMoreTriggerId;
    private slidingBorderLeft;
    private dropdownKeys;
    private seeMoreDropdown;
    private liMarginLeft;
    constructor();
    componentWillLoad(): void;
    connectedCallback(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    activeTabValidation(): void;
    activateTab(tab: TabTrigger, element: HTMLElement): void;
    setActivePanelId(tabs: TabTrigger[]): void;
    activatePanel(panelId?: string): void;
    calculateSize(element: HTMLElement, size: TabTriggerSizes): number;
    setParentTabActive(tab: TabTrigger): void;
    findParentTab(tabs: TabTrigger[], id: string): TabTrigger;
    findTab(tabs: TabTrigger[], id: string): any;
    removeActiveItems(): void;
    createDropdowns(tabs: TabTrigger[], level: number, firstLevel?: string): any[];
    getDropdown(tab: TabTrigger, isFirstLevel: boolean, firstLevelId: string): any;
    getDropdownMenuItems(tab: TabTrigger, firstLevelId: string): any[];
    getDropdownMenuItem(tab: TabTrigger, onClickHandler: Function, extraClass?: string): any;
    onDropdownMenuItemClick(e: Event, tab: TabTrigger, tabChild: TabTrigger, firstLevelId: string): void;
    getActiveTabTrigger(): HTMLElement;
    /**
     * Gets the element for a dropdown sublevel with the given ID
     */
    getSubLevelDropdown(id: string): HTMLChiDropdownElement;
    /**
     * Returns the href for the given tab.
     * If the tab has an external href, normalizes the href to ensure that
     * the browser does not prepends the current domain.
     * @param tab TabTrigger
     */
    getTabHref(tab: TabTrigger): string;
    /**
     * If the tab contains a target, returns it.
     * If the tab contains an external href, the default behavior is to open
     * the link in a new tab.
     */
    getTabHrefTarget(tab: TabTrigger): string;
    /**
     * Checks wether the tab is an anchor link (internal link)
     */
    isTabInternalLink(tabData: TabTrigger): boolean;
    getPosition(el: HTMLElement): TabTriggerPosition;
    handlerClickSeeMore: (e: Event) => void;
    handlerClickTab(e: Event, tabData: TabTrigger, slidingBorderNewPosition?: HTMLElement): void;
    changeTab(tabData: TabTrigger, element: HTMLElement): void;
    setAnimation(element: HTMLElement): void;
    getSlidingBorderAnimationStyle(): {
        dimension: TabTriggerSizes;
        direction: TabTriggerDirections;
    };
    handlerResize: () => void;
    getParentIds(data: TabTrigger): string[];
    hideInactiveDropdowns(tabData: TabTrigger): void;
    handlerTabMouseEnter: (tabData: TabTrigger) => void;
    handlerMouseLeave: (e: MouseEvent, isTargetMenu?: boolean) => void;
    hideDropdown(): void;
    /**
     * Checks if the tab or any of it's children is active.
     */
    _isActiveTab(tab: TabTrigger): boolean;
    isActiveTabOverflown(tabs: TabTrigger[]): boolean;
    _setSeeMoreTriggerElement(): void;
    setAvailableSpace(): void;
    setLiSizes(): Promise<void>;
    /**
     * Checks what elements fit in the available space and sets overflow
     * to the items hat do not fit.
     */
    setListOverflow(): void;
    /**
     * Stringifies tabs by removing circular references
     */
    _stringifyTabs(tabs: TabTrigger[]): string;
    setSlidingBorderStyles(): void;
    hideDropdowns(dropdowns: string[]): void;
    hideAllDropdowns(): void;
    hideSelectedDropdowns(dropdowns: string[]): void;
    dropdownIcon(position: 'right' | 'down'): HTMLElement;
    getTabElements(): any[];
    getSlidingBorder(): any;
    getSeeMoreTrigger(): any;
    getOverflowItems(): any[];
    getDropdowns(): any[];
    getPanels(): any;
    getListClasses(): string;
    getTabs(): any;
    getChiGridLayout(tabs: any, dropdowns: any, panels: any): any;
    render(): any;
}
