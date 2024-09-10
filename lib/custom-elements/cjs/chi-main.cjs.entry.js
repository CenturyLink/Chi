'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-76a8e987.js');
const constants = require('./constants-2de19a99.js');

const appLayoutCss = "chi-app-layout.sc-chi-main-h{display:block}chi-app-layout.sc-chi-main-h *.sc-chi-main,chi-app-layout.sc-chi-main-h .sc-chi-main::after,chi-app-layout.sc-chi-main-h .sc-chi-main::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-box-sizing:border-box;box-sizing:border-box}";
const ChiMainStyle0 = appLayoutCss;

const AppLayout = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.eventBacklinkClick = index.createEvent(this, "chiBacklinkClick", 7);
        this.format = 'base';
        this.backlink = undefined;
        this.backlinkHref = undefined;
        this.subtitle = undefined;
        this.headerBackground = undefined;
        this.appLayoutTitle = undefined;
        this.appLayoutHeaderActions = undefined;
        this.appLayoutHelpIcon = undefined;
        this.appLayoutPageLevelActions = undefined;
        this.appLayoutFooter = undefined;
        this.appLayoutPageLevelAlert = undefined;
    }
    typeValidation(newValue) {
        if (newValue && !constants.APP_LAYOUT_FORMATS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for app layout. Valid values are base, no-margin, or fixed-width.`);
        }
    }
    connectedCallback() {
        constants.addMutationObserver.call(this, () => {
            if (this.el.title) {
                this.appLayoutTitle = this.el.title;
                this.el.removeAttribute('title');
            }
        }, { attributes: true, attributeOldValue: true, attributeFilter: ['title'], childList: true });
    }
    componentWillLoad() {
        this.typeValidation(this.format);
        if (this.el.querySelector('[slot=help-icon]')) {
            this.appLayoutHelpIcon = true;
        }
        if (this.el.querySelector('[slot=header-actions]')) {
            this.appLayoutHeaderActions = true;
        }
        if (this.el.querySelector('[slot=page-level__actions]')) {
            this.appLayoutPageLevelActions = true;
        }
        if (this.el.querySelector('[slot=footer]')) {
            this.appLayoutFooter = true;
        }
        if (this.el.querySelector('[slot=page-alert]')) {
            this.appLayoutPageLevelAlert = true;
        }
    }
    _handlerBacklinkClick() {
        this.eventBacklinkClick.emit();
    }
    render() {
        const appLayoutBackLink = this.backlink && (index.h("a", { key: 'e451120370a0ea77910d153a5e5821681e29071a', class: "chi-link", onClick: () => this._handlerBacklinkClick(), href: this.backlinkHref }, index.h("div", { key: 'c40006cf39b011650961c824d0bbe484526bea8b', class: "chi-link__content" }, index.h("i", { key: '747b27b56eac1f48155ddbbb59a9e3f76c0a95c4', class: "chi-icon icon-chevron-left -xs" }), index.h("span", { key: 'bb9ad619ca8b23cdd20687f2f407ef346f89136f', class: "-text--md" }, this.backlink))));
        const appLayoutHelpIcon = this.appLayoutHelpIcon && index.h("slot", { key: 'c7d93cf4b4902d2f8123e4f672dfb5b76456ef80', name: "help-icon" });
        const appLayoutTitle = this.appLayoutTitle && (index.h("div", { key: 'a913c8efa4bf5d6eedd6bb4cbf0114a6234914d4', class: "chi-main__title-heading" }, this.appLayoutTitle, appLayoutHelpIcon));
        const appLayoutSubTitle = this.subtitle && index.h("div", { key: '46bb70181653e7751a0e0534df7bd94afea075b6', class: "chi-main__title-subheading" }, this.subtitle);
        const appLayoutHeaderActions = this.appLayoutHeaderActions && (index.h("div", { key: 'a644ad400fe1a01eebdb198013dbe078d263dba5', class: "chi-main__header-end" }, index.h("slot", { key: '24ea3616a76592582a04040e90a08e39b0a54835', name: "header-actions" })));
        const appLayoutPageLevelActions = this.appLayoutPageLevelActions && (index.h("div", { key: '57c5eba9f746c1080c62a9ce0f9b1d82805c2b23', class: "-d--flex -align-items--center -justify-content--end -py--3 -my--2 -bt--1" }, index.h("slot", { key: '6711f9791e734b4a3b8c4a8ce9585b867fde252b', name: "page-level__actions" })));
        const appLayoutBackground = this.headerBackground && (index.h("div", { key: 'beea3b91642ef41fe65b8dcce2a1d1d53fda5114', class: "chi-main__background" }, index.h("div", { key: '2ac008cccbea9ec8bf34cfc9c8fea8793fcb5180', class: "chi-main__background-image" })));
        const appLayoutFooter = this.appLayoutFooter && index.h("slot", { key: '9a407802cb684774fc2a5870f087d96bb3d4d263', name: "footer" });
        const appLayoutPageLevelAlert = this.appLayoutPageLevelAlert && (index.h("div", { key: 'aa8f9a5d2d371efd32c63a2295f42e7361c3ebb7', class: "chi-main__alert" }, index.h("slot", { key: '316090151f2cfa2fd140158bf657057280260da0', name: "page-alert" })));
        return (index.h("div", { key: 'f1d98ba8dea8dbef299480436d7a3a957fbd7da0', class: `chi-main
        ${this.format ? `-${this.format}` : ''}
        ${this.headerBackground ? '-header-background' : ''}` }, appLayoutBackground, appLayoutPageLevelAlert, index.h("div", { key: '66b37a5a2dd2bab45a852f3af891adf052887675', class: "chi-main__header" }, index.h("div", { key: '68afa6724997cdd6135043bbdd44bd410cafade1', class: "chi-main__header-start" }, appLayoutBackLink, index.h("div", { key: 'd12d9f3111e2badc905501b9a7e755cf089a2c68', class: "chi-main__title" }, appLayoutTitle, appLayoutSubTitle)), appLayoutHeaderActions), index.h("div", { key: '088f2bf35860c402e22c69c6f6df42137a0c3adc', class: "chi-main__content" }, index.h("slot", { key: '57f98d57a2d4315c383489f1b306dbd4f11369d9' }), appLayoutPageLevelActions), appLayoutFooter));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "format": ["typeValidation"]
    }; }
};
AppLayout.style = ChiMainStyle0;

exports.chi_main = AppLayout;
