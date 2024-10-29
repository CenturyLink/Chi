import { Host, h } from "@stencil/core";
import { ACTIVE_CLASS, DROPDOWN_CLASSES, GENERIC_SIZE_CLASSES, ICON_CLASS, TABS_CLASSES, UTILITY_CLASSES, INVERSE_CLASS, GRID_CLASSES, } from "../../constants/classes";
import { ANIMATION_DURATION, TABS_SEE_MORE_DEFAULT_MESSAGE } from "../../constants/constants";
import { TabTriggerSizes, TabTriggerDirections } from "../../constants/types";
import { TABS_SIZES } from "../../constants/size";
import { ThreeStepsAnimation } from "../../utils/ThreeStepsAnimation";
import { v4 as uuid4 } from "uuid";
import { Compare } from "../../utils/Compare";
const MARGIN_LEFT_BASE = 24;
const MARGIN_LEFT_LG = 32;
export class Tabs {
    sizeValidation(newValue) {
        const validValues = TABS_SIZES.join(', ');
        if (newValue && !TABS_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for tabs. Valid values are: ${validValues}. `);
        }
    }
    setTabs(newValue, oldValue) {
        if (!Compare.deepEqual(newValue, oldValue)) {
            this.currentTabs = newValue;
        }
    }
    activeTabChanged(newValue) {
        let tabData = this.tabs.find((tab) => tab.id === newValue);
        let element = this.el.querySelector(`#${newValue}`);
        // is not first level
        if (!tabData) {
            const parentTab = this.findParentTab(this.tabs, newValue);
            tabData = { id: newValue };
            element = this.el.querySelector(`li#${parentTab.id} a`);
        }
        this.changeTab(tabData, element);
        this.chiTabChange.emit(tabData);
    }
    constructor() {
        this.activeTabElement = null;
        this.availableSpace = 0;
        this.dropdownKey = 0;
        this.slidingBorderElement = null;
        this.lisArrayLength = 0;
        this.liSizes = {};
        this.seeMoreTriggerElementWidth = 0;
        this.uuid4 = uuid4();
        this.seeMoreTriggerId = `see-more-trigger-${this.uuid4}`;
        this.dropdownKeys = {};
        this.handlerClickSeeMore = (e) => {
            e.preventDefault();
            this.isSeeMoreActive = !this.isSeeMoreActive;
            if (!this.seeMoreDropdown) {
                const seeMoreDropdown = document.getElementById(`${this.uuid4}-see-more-dropdown`);
                this.seeMoreDropdown = seeMoreDropdown;
            }
            this.seeMoreDropdown.toggle();
        };
        this.handlerResize = () => {
            this._setSeeMoreTriggerElement();
            this.setAvailableSpace();
            this.setListOverflow();
            this.activeTabElement = this.getActiveTabTrigger();
            this.setSlidingBorderStyles();
            this.hideAllDropdowns();
        };
        this.handlerTabMouseEnter = (tabData) => {
            this.hideInactiveDropdowns(tabData);
            if (!tabData.children)
                return;
            this.dropdownKeys[tabData.id] += 1;
            const dropdownElement = this.getSubLevelDropdown(tabData.id);
            if (dropdownElement) {
                dropdownElement.show();
            }
        };
        this.handlerMouseLeave = (e, isTargetMenu) => {
            const elementTarget = isTargetMenu ? DROPDOWN_CLASSES.MENU : DROPDOWN_CLASSES.MENU_ITEM;
            const elements = Array.from(document.getElementsByClassName(elementTarget));
            const isElementTarget = elements.some((el) => el === e.relatedTarget);
            if (!isElementTarget) {
                this.hideAllDropdowns();
            }
        };
        this.tabs = undefined;
        this.activeTab = '';
        this.slidingBorder = false;
        this.border = false;
        this.solid = false;
        this.vertical = false;
        this.size = 'md';
        this.seeMoreMessage = TABS_SEE_MORE_DEFAULT_MESSAGE;
        this.inverse = false;
        this.extraClass = '';
        this.sliding = false;
        this.isSeeMoreActive = false;
        this.isSeeMoreVisible = false;
        this.isSeeMoreTriggerMeasured = false;
        this.currentTabs = [];
        this.activePanel = '';
        this.liMarginLeft = this.size === 'lg' ? MARGIN_LEFT_LG : MARGIN_LEFT_BASE;
    }
    componentWillLoad() {
        this.sizeValidation(this.size);
    }
    //#region Lifecycle hooks
    connectedCallback() {
        this.currentTabs = this.tabs;
    }
    componentDidLoad() {
        if (!this.vertical) {
            this.setAvailableSpace();
            this.setLiSizes();
            this.seeMoreTriggerElementWidth =
                this.calculateSize(this.seeMoreTriggerElement, TabTriggerSizes.Width) + (this.solid ? 0 : this.liMarginLeft);
            this.isSeeMoreTriggerMeasured = true;
            this.activeTabElement = this.getActiveTabTrigger();
            this.setSlidingBorderStyles();
            window.addEventListener('resize', this.handlerResize);
        }
        this.setActivePanelId(this.currentTabs);
        this.activatePanel(this.activePanel);
    }
    componentDidUpdate() {
        this.setAvailableSpace();
        this.setLiSizes();
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.handlerResize);
    }
    //#endregion
    activateTab(tab, element) {
        this.activeTab = tab.id;
        this.activeTabElement = element;
    }
    setActivePanelId(tabs) {
        tabs.forEach((tab) => {
            if (tab.id === (this === null || this === void 0 ? void 0 : this.activeTab)) {
                this.activePanel = tab.id;
            }
            else if (tab.children) {
                this.setActivePanelId(tab.children);
            }
        });
    }
    activatePanel(panelId) {
        var _a, _b;
        if (!panelId)
            return;
        (_a = this.el.querySelector(`.${TABS_CLASSES.PANEL}.${ACTIVE_CLASS}`)) === null || _a === void 0 ? void 0 : _a.classList.remove(ACTIVE_CLASS);
        (_b = this.el.querySelector(`.${TABS_CLASSES.PANEL}#${panelId}`)) === null || _b === void 0 ? void 0 : _b.classList.add(ACTIVE_CLASS);
    }
    calculateSize(element, size) {
        return element ? element.getBoundingClientRect()[size] : 0;
    }
    setParentTabActive(tab) {
        const id = tab.parent ? tab.parent.id : tab.id;
        const parentTabElement = document.getElementById(id);
        parentTabElement.classList.add(ACTIVE_CLASS);
        if (tab.parent) {
            this.setParentTabActive(tab.parent);
        }
    }
    findParentTab(tabs, id) {
        return tabs === null || tabs === void 0 ? void 0 : tabs.find((tab) => {
            if (tab.id === id)
                return tab;
            if (tab.children && this.findParentTab(tab.children, id)) {
                return tab;
            }
        });
    }
    removeActiveItems() {
        Object.keys(this.dropdownKeys).forEach((id) => {
            const menuItemElement = document.getElementById(id);
            if (menuItemElement && menuItemElement.classList.contains(ACTIVE_CLASS)) {
                menuItemElement.classList.remove(ACTIVE_CLASS);
            }
        });
    }
    createDropdowns(tabs, level, firstLevel) {
        const dropdowns = [];
        tabs.forEach((tab) => {
            const isFirstLevel = level === 0;
            const firstLevelId = isFirstLevel ? tab.id : firstLevel;
            if (tab.children && tab.children.length > 0) {
                this.dropdownKeys[tab.id] = 0;
                dropdowns.push(this.getDropdown(tab, isFirstLevel, firstLevelId));
                dropdowns.push(...this.createDropdowns(tab.children, level + 1, firstLevelId));
            }
        });
        return dropdowns;
    }
    getDropdown(tab, isFirstLevel, firstLevelId) {
        return (h("chi-dropdown", { id: `subLevelDropdown-${tab.id}`, position: isFirstLevel ? 'bottom-start' : 'right-start', reference: `#${tab.id}`, "visible-items": tab.visibleItems, key: `${tab.id}-${this.dropdownKey}` }, this.getDropdownMenuItems(tab, firstLevelId)));
    }
    getDropdownMenuItems(tab, firstLevelId) {
        return tab.children.map((child) => {
            child.parent = tab;
            return this.getDropdownMenuItem(child, (e) => this.onDropdownMenuItemClick(e, tab, child, firstLevelId), UTILITY_CLASSES.JUSTIFY.BETWEEN);
        });
    }
    getDropdownMenuItem(tab, onClickHandler, extraClass = '') {
        return (h("a", { class: `${DROPDOWN_CLASSES.MENU_ITEM} 
          ${extraClass} 
          ${this._isActiveTab(tab) ? ACTIVE_CLASS : ''}
        `, id: tab.id, href: this.getTabHref(tab), target: this.getTabHrefTarget(tab), onMouseEnter: () => this.handlerTabMouseEnter(tab), onMouseLeave: (e) => this.handlerMouseLeave(e), onClick: (e) => onClickHandler(e), innerHTML: tab.label, slot: "menu" }, tab.children && tab.children.length > 0 && this.dropdownIcon('right')));
    }
    onDropdownMenuItemClick(e, tab, tabChild, firstLevelId) {
        const dropdownElement = this.getSubLevelDropdown(tab.id);
        const firstLevelTriggerElement = this.el.querySelector(`li#${firstLevelId} a`);
        this.handlerClickTab(e, tabChild, firstLevelTriggerElement);
        this.isSeeMoreActive = false;
        if (dropdownElement) {
            this.setParentTabActive(tabChild);
            dropdownElement.hide();
        }
    }
    getActiveTabTrigger() {
        return this.el.querySelector(`li.${ACTIVE_CLASS}`);
    }
    /**
     * Gets the element for a dropdown sublevel with the given ID
     */
    getSubLevelDropdown(id) {
        return this.el.querySelector(`chi-dropdown#subLevelDropdown-${id}`);
    }
    /**
     * Returns the href for the given tab.
     * If the tab has an external href, normalizes the href to ensure that
     * the browser does not prepends the current domain.
     * @param tab TabTrigger
     */
    getTabHref(tab) {
        var _a;
        let href = tab.href || `#${tab.id}`;
        if ((_a = tab.href) === null || _a === void 0 ? void 0 : _a.startsWith('www.')) {
            href = '//' + href;
        }
        return href;
    }
    /**
     * If the tab contains a target, returns it.
     * If the tab contains an external href, the default behavior is to open
     * the link in a new tab.
     */
    getTabHrefTarget(tab) {
        let target = tab.target || '';
        if (!this.isTabInternalLink(tab) && !target) {
            target = '_blank';
        }
        return target;
    }
    /**
     * Checks wether the tab is an anchor link (internal link)
     */
    isTabInternalLink(tabData) {
        return !tabData.href || tabData.href.startsWith('#');
    }
    getPosition(el) {
        const cs = window.getComputedStyle(el);
        const marginTop = cs.getPropertyValue('margin-top');
        const marginLeft = cs.getPropertyValue('margin-left');
        return {
            left: el.offsetLeft - parseInt(marginLeft),
            top: el.offsetTop - parseInt(marginTop),
        };
    }
    handlerClickTab(e, tabData, slidingBorderNewPosition) {
        if (this.isTabInternalLink(tabData)) {
            e.preventDefault();
        }
        if (this.animation && !this.animation.isStopped()) {
            this.animation.stop();
        }
        const element = slidingBorderNewPosition || e.target;
        if (this.slidingBorder) {
            this.setAnimation(element);
        }
        this.changeTab(tabData, element);
    }
    changeTab(tabData, element) {
        this.removeActiveItems();
        this.activateTab(tabData, element);
        this.activatePanel(tabData.id);
    }
    setAnimation(element) {
        const position = this.getPosition(element);
        this.animation = ThreeStepsAnimation.animationFactory(() => {
            this.sliding = true;
        }, () => {
            const animationStyle = this.getSlidingBorderAnimationStyle();
            const size = this.calculateSize(element, animationStyle.dimension);
            this.slidingBorderElement.style[animationStyle.direction] = `${position[animationStyle.direction]}px`;
            this.slidingBorderElement.style[animationStyle.dimension] = `${size}px`;
        }, () => {
            this.slidingBorderElement.style.width = '';
            this.sliding = false;
        }, ANIMATION_DURATION.MEDIUM);
    }
    getSlidingBorderAnimationStyle() {
        return this.vertical
            ? { dimension: TabTriggerSizes.Height, direction: TabTriggerDirections.Top }
            : { dimension: TabTriggerSizes.Width, direction: TabTriggerDirections.Left };
    }
    getParentIds(data) {
        const parentIds = [];
        const collectParentIds = (item) => {
            if (item.parent) {
                parentIds.push(item.parent.id);
                collectParentIds(item.parent);
            }
        };
        collectParentIds(data);
        return parentIds;
    }
    hideInactiveDropdowns(tabData) {
        const parentIds = this.getParentIds(tabData);
        const idsToRemove = [...parentIds, tabData.id];
        const filteredDropdownKeys = Object.keys(this.dropdownKeys).filter((item) => !idsToRemove.includes(item));
        this.hideSelectedDropdowns(filteredDropdownKeys);
    }
    hideDropdown() {
        this.isSeeMoreActive = false;
    }
    /**
     * Checks if the tab or any of it's children is active.
     */
    _isActiveTab(tab) {
        let isActiveTab = tab.id === this.activeTab;
        if (!isActiveTab && tab.children) {
            isActiveTab = tab.children.some((tab) => this._isActiveTab(tab));
        }
        return isActiveTab;
    }
    isActiveTabOverflown(tabs) {
        return tabs.some((tab) => this._isActiveTab(tab) && !!tab.overflow);
    }
    _setSeeMoreTriggerElement() {
        if (!this.seeMoreTriggerElement) {
            const seeMoreElement = document.getElementById(this.seeMoreTriggerId);
            this.seeMoreTriggerElement = seeMoreElement;
        }
    }
    setAvailableSpace() {
        this.availableSpace = this.calculateSize(this.el, TabTriggerSizes.Width);
    }
    async setLiSizes() {
        var _a;
        const liElements = (_a = this.ulElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll(`li.${TABS_CLASSES.TRIGGER}`);
        this.lisArrayLength = this.currentTabs.length;
        await liElements.forEach((li, index) => {
            this.liSizes[li.dataset.index] =
                this.calculateSize(li, TabTriggerSizes.Width) + (index === 0 || this.solid ? 0 : this.liMarginLeft);
        });
        this.setListOverflow();
    }
    /**
     * Checks what elements fit in the available space and sets overflow
     * to the items hat do not fit.
     */
    setListOverflow() {
        if (this.vertical) {
            return;
        }
        const copyTabsData = this._stringifyTabs(this.currentTabs);
        let usedSpace = 0;
        this.isSeeMoreVisible = false;
        for (let i = 0; i < this.lisArrayLength; i++) {
            const isLastElement = i + 1 === this.lisArrayLength;
            const seeMoreTriggerElementWidth = isLastElement ? 0 : this.seeMoreTriggerElementWidth;
            const elementFits = usedSpace + this.liSizes[i] + seeMoreTriggerElementWidth <= this.availableSpace;
            if (!this.isSeeMoreVisible && elementFits) {
                usedSpace += this.liSizes[i];
                this.currentTabs[i].overflow = false;
            }
            else {
                this.currentTabs[i].overflow = true;
                this.isSeeMoreVisible = true;
            }
        }
        if (this._stringifyTabs(this.currentTabs) !== copyTabsData) {
            this.dropdownKey += 1;
        }
    }
    /**
     * Stringifies tabs by removing circular references
     */
    _stringifyTabs(tabs) {
        const removeParent = (tab) => {
            const { children, id, label, overflow, target, href } = tab;
            return {
                children: children === null || children === void 0 ? void 0 : children.map(removeParent),
                id,
                label,
                overflow,
                target,
                href,
            };
        };
        return JSON.stringify(tabs.map(removeParent));
    }
    setSlidingBorderStyles() {
        if (!this.activeTab) {
            return;
        }
        const element = this.isActiveTabOverflown(this.currentTabs) ? this.seeMoreTriggerElement : this.activeTabElement;
        const position = this.getPosition(element);
        this.slidingBorderLeft = `${position.left}px`;
    }
    hideDropdowns(dropdowns) {
        dropdowns.forEach((id) => {
            const dropdownElement = this.getSubLevelDropdown(id);
            if (dropdownElement) {
                dropdownElement.hide();
            }
        });
    }
    hideAllDropdowns() {
        this.hideDropdowns(Object.keys(this.dropdownKeys));
    }
    hideSelectedDropdowns(dropdowns) {
        this.hideDropdowns(dropdowns);
    }
    dropdownIcon(position) {
        return (h("i", { class: `${ICON_CLASS} ${UTILITY_CLASSES.MARGIN.LEFT[2]} ${UTILITY_CLASSES.MARGIN.RIGHT[0]} icon-chevron-${position} ${GENERIC_SIZE_CLASSES.XS}`, "aria-hidden": "true" }));
    }
    getTabElements() {
        var _a;
        const tabs = [];
        (_a = this.currentTabs) === null || _a === void 0 ? void 0 : _a.forEach((tab, index) => {
            if (tab.overflow)
                return;
            tabs.push(h("li", { class: `${TABS_CLASSES.TRIGGER} ${this._isActiveTab(tab) ? ACTIVE_CLASS : ''}`, "data-index": index, id: tab.id, onMouseEnter: () => {
                    this.hideAllDropdowns();
                    this.handlerTabMouseEnter(tab);
                } }, h("a", { href: this.getTabHref(tab), target: this.getTabHrefTarget(tab), class: tab.children ? '-has-child' : '', role: "tab", "aria-selected": this._isActiveTab(tab), "aria-controls": `#${tab.id}`, onClick: (e) => this.handlerClickTab(e, tab), innerHTML: tab.label })));
        });
        return tabs;
    }
    getSlidingBorder() {
        return this.slidingBorder ? (h("li", { class: TABS_CLASSES.SLIDING_BORDER, ref: (el) => (this.slidingBorderElement = el), style: {
                left: this.slidingBorderLeft,
            } })) : null;
    }
    getSeeMoreTrigger() {
        const activeTabOverflownClass = this.isActiveTabOverflown(this.currentTabs) ? ACTIVE_CLASS : '';
        return (!this.vertical &&
            (this.isSeeMoreVisible || !this.isSeeMoreTriggerMeasured) && (h("li", { class: `${TABS_CLASSES.SHOW_MORE} ${activeTabOverflownClass}`, id: this.seeMoreTriggerId, ref: (el) => (this.seeMoreTriggerElement = el) }, h("a", { href: `#seeMore`, role: "tab", onClick: (e) => this.handlerClickSeeMore(e), ref: (el) => (this.seeMoreTriggerAnchorElement = el) }, this.seeMoreMessage))));
    }
    getOverflowItems() {
        return this.currentTabs
            .filter((li) => li.overflow)
            .map((tab) => this.getDropdownMenuItem(tab, (e) => {
            this.handlerClickTab(e, tab, this.seeMoreTriggerAnchorElement);
            this.seeMoreDropdown.hide();
            this.isSeeMoreActive = false;
        }));
    }
    getDropdowns() {
        return this.vertical
            ? []
            : [
                this.isSeeMoreVisible && (h("chi-dropdown", { active: this.isSeeMoreActive, id: `${this.uuid4}-see-more-dropdown`, key: this.dropdownKey, position: "bottom", reference: `#${this.seeMoreTriggerId}`, ref: (el) => (this.seeMoreDropdown = el) }, this.getOverflowItems())),
                ...this.createDropdowns(this.currentTabs, 0),
            ];
    }
    getPanels() {
        return h("slot", { name: "panels" });
    }
    getListClasses() {
        return [
            TABS_CLASSES.TABS,
            this.slidingBorder && TABS_CLASSES.ANIMATE,
            this.border && TABS_CLASSES.BORDER,
            this.vertical && TABS_CLASSES.VERTICAL,
            this.solid && TABS_CLASSES.SOLID,
            this.sliding && TABS_CLASSES.SLIDING,
            this.size && `-${this.size}`,
            this.inverse && INVERSE_CLASS,
            this.extraClass,
        ]
            .filter(Boolean)
            .join(' ');
    }
    getTabs() {
        const tabElements = this.getTabElements();
        const slidingBorder = this.getSlidingBorder();
        const seeMoreTrigger = this.getSeeMoreTrigger();
        return (h("ul", { class: this.getListClasses(), ref: (el) => {
                this.ulElement = el;
            }, onMouseLeave: (e) => this.handlerMouseLeave(e, true), role: "tablist" }, tabElements, seeMoreTrigger, slidingBorder));
    }
    getChiGridLayout(tabs, dropdowns, panels) {
        return (h(Host, null, h("div", { class: `${GRID_CLASSES.GRID} ${GRID_CLASSES.NO_GUTTER}` }, h("div", { class: GRID_CLASSES.COL }, tabs, dropdowns), panels)));
    }
    // TODO: Improve labels with slots to support custom content once stencil V3 is deployed: https://github.com/ionic-team/stencil/issues/2257
    render() {
        const dropdowns = this.getDropdowns();
        const panels = this.getPanels();
        const tabs = this.getTabs();
        return this.vertical && this.el.querySelector('[slot="panels"] .chi-tabs-panel') ? (this.getChiGridLayout(tabs, dropdowns, panels)) : (h(Host, null, tabs, dropdowns, panels));
    }
    static get is() { return "chi-tabs"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["tabs.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tabs.css"]
        };
    }
    static get properties() {
        return {
            "tabs": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "TabTrigger[]",
                    "resolved": "TabTrigger[]",
                    "references": {
                        "TabTrigger": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::TabTrigger"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To provide the data for Tabs"
                }
            },
            "activeTab": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To provide ID of the active tab"
                },
                "attribute": "active-tab",
                "reflect": false,
                "defaultValue": "''"
            },
            "slidingBorder": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To enable animation of the border"
                },
                "attribute": "sliding-border",
                "reflect": false,
                "defaultValue": "false"
            },
            "border": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To enable border"
                },
                "attribute": "border",
                "reflect": false,
                "defaultValue": "false"
            },
            "solid": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To enable solid style of Tabs"
                },
                "attribute": "solid",
                "reflect": false,
                "defaultValue": "false"
            },
            "vertical": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To enable vertical variant of Tabs"
                },
                "attribute": "vertical",
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TabsSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "TabsSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::TabsSizes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To set tab size { xs, sm, md, lg, xl }."
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'md'"
            },
            "seeMoreMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To configure See more Dropdown trigger message"
                },
                "attribute": "see-more-message",
                "reflect": false,
                "defaultValue": "TABS_SEE_MORE_DEFAULT_MESSAGE"
            },
            "inverse": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set inverse style"
                },
                "attribute": "inverse",
                "reflect": false,
                "defaultValue": "false"
            },
            "extraClass": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To add extra classes to ul"
                },
                "attribute": "extra-class",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "sliding": {},
            "isSeeMoreActive": {},
            "isSeeMoreVisible": {},
            "isSeeMoreTriggerMeasured": {},
            "currentTabs": {},
            "activePanel": {}
        };
    }
    static get events() {
        return [{
                "method": "chiTabChange",
                "name": "chiTabChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user activates a tab"
                },
                "complexType": {
                    "original": "TabTrigger",
                    "resolved": "TabTrigger",
                    "references": {
                        "TabTrigger": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::TabTrigger"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "sizeValidation"
            }, {
                "propName": "tabs",
                "methodName": "setTabs"
            }, {
                "propName": "activeTab",
                "methodName": "activeTabChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "chiDropdownHide",
                "method": "hideDropdown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
