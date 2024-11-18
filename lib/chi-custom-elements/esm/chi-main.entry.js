import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8517e33f.js';
import { m as APP_LAYOUT_FORMATS, a as addMutationObserver } from './constants-004eaf97.js';

const appLayoutCss = "chi-app-layout.sc-chi-main-h{display:block}";
const ChiMainStyle0 = appLayoutCss;

const AppLayout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.eventBacklinkClick = createEvent(this, "chiBacklinkClick", 7);
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
        if (newValue && !APP_LAYOUT_FORMATS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for app layout. Valid values are base, no-margin, or fixed-width.`);
        }
    }
    connectedCallback() {
        addMutationObserver.call(this, () => {
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
        const appLayoutBackLink = this.backlink && (h("a", { key: '809e17d3aa34528db53489bed28b8039fa5a5c91', class: "chi-link", onClick: () => this._handlerBacklinkClick(), href: this.backlinkHref }, h("div", { key: 'bd751472bbc061f2675fea5433cf3b8bb04c7663', class: "chi-link__content" }, h("i", { key: '3ab252ef7ec0999c094478654de30f064f9ce841', class: "chi-icon icon-chevron-left -xs" }), h("span", { key: '76d59388ab239273ae1f2cddf0ef08634adcc97c', class: "-text--md" }, this.backlink))));
        const appLayoutHelpIcon = this.appLayoutHelpIcon && h("slot", { key: 'a3e6fad050b6566eafc4a378ece1503285cc38fb', name: "help-icon" });
        const appLayoutTitle = this.appLayoutTitle && (h("div", { key: '5948dc274c91f267219b49347ef71faebceba5dc', class: "chi-main__title-heading" }, this.appLayoutTitle, appLayoutHelpIcon));
        const appLayoutSubTitle = this.subtitle && h("div", { key: 'bb5d4cc7b90ef3e3b2a85b89121dacbb542379e8', class: "chi-main__title-subheading" }, this.subtitle);
        const appLayoutHeaderActions = this.appLayoutHeaderActions && (h("div", { key: 'ceecd4c5de5905f1295852ade0c26bc54d3b8c42', class: "chi-main__header-end" }, h("slot", { key: '9d908089a1a18e7a206093565e5d05b0c5fefa55', name: "header-actions" })));
        const appLayoutPageLevelActions = this.appLayoutPageLevelActions && (h("div", { key: '8e08e45e83db11af7ec74d12bbb02e119998c079', class: "-d--flex -align-items--center -justify-content--end -py--3 -my--2 -bt--1" }, h("slot", { key: 'cc55aff357432768fc170d1a170f6581b5eed020', name: "page-level__actions" })));
        const appLayoutBackground = this.headerBackground && (h("div", { key: '38505686901adb8e73f31d91c0c45bd2a04e3b2b', class: "chi-main__background" }, h("div", { key: '96708eac6c55282bb7f874839da100270b8908c4', class: "chi-main__background-image" })));
        const appLayoutFooter = this.appLayoutFooter && h("slot", { key: 'b417e09c598ae376e8dd64f06f919505b410dbde', name: "footer" });
        const appLayoutPageLevelAlert = this.appLayoutPageLevelAlert && (h("div", { key: '318c1200b6c629311c7264804da7862d0cc66b35', class: "chi-main__alert" }, h("slot", { key: '308ce92b497e0484fabee7ba1a37effbccbc24c4', name: "page-alert" })));
        return (h("div", { key: 'ea4b12df37b33bce7007d1ca093aaf365cda66f4', class: `chi-main
        ${this.format ? `-${this.format}` : ''}
        ${this.headerBackground ? '-header-background' : ''}` }, appLayoutBackground, appLayoutPageLevelAlert, h("div", { key: '9a69806808b1decdcd5c5a9d0c31a7f5bed89dd2', class: "chi-main__header" }, h("div", { key: 'fb2076e2b51d325048062ca5cde65d6623e8a5e2', class: "chi-main__header-start" }, appLayoutBackLink, h("div", { key: '3b19599bcb019cb23048164f9ea529dc94689ca0', class: "chi-main__title" }, appLayoutTitle, appLayoutSubTitle)), appLayoutHeaderActions), h("div", { key: '749b0865173fcbc74031bfa5d52a559b8ff1a938', class: "chi-main__content" }, h("slot", { key: '987daf1964ae37ab8d488bf5db54b5a6c4124c0a' }), appLayoutPageLevelActions), appLayoutFooter));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "format": ["typeValidation"]
    }; }
};
AppLayout.style = ChiMainStyle0;

export { AppLayout as chi_main };
