import { h } from "@stencil/core";
import { CARDINAL_POSITIONS } from "../../constants/positions";
import { ThreeStepsAnimation } from "../../utils/ThreeStepsAnimation";
import { ANIMATION_DURATION, CLASSES } from "../../constants/constants";
import { contains } from "../../utils/utils";
import { addMutationObserver } from "../../utils/mutationObserver";
export class Drawer {
    constructor() {
        this.position = undefined;
        this.backdrop = undefined;
        this.active = undefined;
        this.nonClosable = false;
        this.noHeader = undefined;
        this.preventAutoHide = false;
        this.portal = false;
        this._animationClasses = undefined;
        this._backdropAnimationClasses = undefined;
        this.drawerTitle = undefined;
    }
    el;
    animation;
    positionValidation(newValue) {
        if (newValue && !CARDINAL_POSITIONS.includes(newValue)) {
            throw new Error(`Not valid position ${newValue} for drawer. Valid values are top, right, bottom or left. `);
        }
    }
    backdropValidation(newValue) {
        if (newValue && newValue !== 'inverse' && newValue !== 'backdrop') {
            throw new Error(`Not valid backdrop ${newValue} for drawer. Valid values are inverse, backdrop, empty or true. `);
        }
    }
    statusChanged(newValue, oldValue) {
        // This weird double negation check is because of a stencil bug: https://github.com/ionic-team/stencil/issues/1238
        if (!!newValue !== !!oldValue) {
            if (newValue) {
                this._show();
            }
            else {
                this._hide();
            }
        }
    }
    /**
     * Toggles active state (show/hide)
     */
    async toggle() {
        if (this.active) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * Shows the drawer.
     */
    async show() {
        this.active = true;
    }
    /**
     * Hides the drawer
     */
    async hide() {
        this.active = false;
    }
    /**
     * Drawer show method has executed, but the showing animation has not started yet
     */
    eventShow;
    /**
     * Drawer hide method has executed, but the closing animation has not started yet
     */
    eventHide;
    /**
     * Drawer has been shown to the user and is fully visible. The animation has completed.
     */
    eventShown;
    /**
     * Drawer has been hidden to the user. The animation has completed.
     */
    eventHidden;
    _show() {
        if (this.animation && !this.animation.isStopped()) {
            this.animation.stop();
        }
        if (this._backdropAnimationClasses !== '' || this._animationClasses !== CLASSES.ACTIVE) {
            this.animation = ThreeStepsAnimation.animationFactory(() => {
                this._animationClasses = CLASSES.TRANSITIONING;
                this._backdropAnimationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.CLOSED}`;
            }, () => {
                this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
                this._backdropAnimationClasses = CLASSES.TRANSITIONING;
            }, () => {
                this._animationClasses = CLASSES.ACTIVE;
                this._backdropAnimationClasses = '';
                this.eventShown.emit();
            }, ANIMATION_DURATION.MEDIUM);
        }
        this.eventShow.emit();
    }
    _hide() {
        if (this.animation && !this.animation.isStopped()) {
            this.animation.stop();
        }
        if (this._backdropAnimationClasses !== CLASSES.CLOSED || this._animationClasses !== '') {
            this.animation = ThreeStepsAnimation.animationFactory(() => {
                this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
                this._backdropAnimationClasses = CLASSES.TRANSITIONING;
            }, () => {
                this._animationClasses = CLASSES.TRANSITIONING;
                this._backdropAnimationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.CLOSED}`;
            }, () => {
                this._animationClasses = '';
                this._backdropAnimationClasses = CLASSES.CLOSED;
                this.eventHidden.emit();
            }, ANIMATION_DURATION.MEDIUM);
        }
        this.eventHide.emit();
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    _documentClickHandler = (ev) => {
        const drawerElement = this.el.querySelector('.chi-drawer');
        const drawerCloseButton = this.nonClosable ? null : drawerElement.querySelector('button.-close');
        const clickTarget = ev.target;
        if (!this.preventAutoHide) {
            if (drawerElement.classList.contains('-active')) {
                const clickOnCloseButton = (drawerCloseButton && clickTarget === drawerCloseButton) || contains(drawerCloseButton, clickTarget);
                this.active = contains(drawerElement, clickTarget) && !clickOnCloseButton;
            }
        }
    };
    componentWillLoad() {
        this.positionValidation(this.position);
        this._animationClasses = this.active ? CLASSES.ACTIVE : '';
        this._backdropAnimationClasses = this.active ? '' : CLASSES.CLOSED;
    }
    componentDidLoad() {
        document.addEventListener('click', this._documentClickHandler);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this._documentClickHandler);
    }
    render() {
        // TODO: change this into <chi-button/> element.
        const xIconProperties = { icon: 'x' };
        const closeButton = (h("button", { key: '571075733c759f9dede1f779fde53e8451e294d0', class: "chi-button -icon -close", onClick: () => this.hide(), "aria-label": "Close" }, h("div", { key: '426ce8be67617e350dc06bb7360c2f6972ce9b11', class: "chi-button__content" }, h("chi-icon", { key: '35afcf07f9e330f53a7f1693939876699f083a80', ...xIconProperties }))));
        const drawer = (h("div", { key: '1252c672a9af479f2c00f3564de3e1f196b3b4b9', class: `chi-drawer -animated
        ${this.position ? `-${this.position}` : ''}
        ${this._animationClasses}
        ${this.portal ? '-portal' : ''}
      ` }, this.noHeader ? (!this.nonClosable ? ([closeButton, h("slot", null)]) : (h("slot", null))) : !this.nonClosable ? ([
            h("div", { class: "chi-drawer__header" }, h("span", { class: "chi-drawer__title" }, this.drawerTitle), closeButton),
            h("div", { class: "chi-drawer__content" }, h("slot", null)),
        ]) : ([
            h("div", { class: "chi-drawer__header" }, h("span", { class: "chi-drawer__title" }, this.drawerTitle)),
            h("div", { class: "chi-drawer__content" }, h("slot", null)),
        ])));
        return this.backdrop || this.backdrop === '' ? (h("div", { class: `chi-backdrop -animated
          ${this.backdrop === 'inverse' ? '-inverse' : ''}
          ${this._backdropAnimationClasses}
        ` }, h("div", { class: "chi-backdrop__wrapper" }, drawer))) : (drawer);
    }
    static get is() { return "chi-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["drawer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["drawer.css"]
        };
    }
    static get properties() {
        return {
            "position": {
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
                    "text": "to set position of the drawer { top, right, bottom or left }"
                },
                "attribute": "position",
                "reflect": true
            },
            "backdrop": {
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
                    "text": "to add a backdrop behind the drawer, which covers the viewport"
                },
                "attribute": "backdrop",
                "reflect": true
            },
            "active": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to open or close the drawer"
                },
                "attribute": "active",
                "reflect": true
            },
            "nonClosable": {
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
                    "text": "To render Drawer without a close button"
                },
                "attribute": "non-closable",
                "reflect": true,
                "defaultValue": "false"
            },
            "noHeader": {
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
                    "text": "to remove the space for the header"
                },
                "attribute": "no-header",
                "reflect": true
            },
            "preventAutoHide": {
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
                    "text": "to prevent closing when the user clicked outside the Drawer"
                },
                "attribute": "prevent-auto-hide",
                "reflect": true,
                "defaultValue": "false"
            },
            "portal": {
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
                    "text": "to define portal style of the Drawer header"
                },
                "attribute": "portal",
                "reflect": true,
                "defaultValue": "false"
            },
            "drawerTitle": {
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
                    "text": "To define drawer title. Not compatible with noHeader"
                },
                "attribute": "title",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "_animationClasses": {},
            "_backdropAnimationClasses": {}
        };
    }
    static get events() {
        return [{
                "method": "eventShow",
                "name": "chiDrawerShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Drawer show method has executed, but the showing animation has not started yet"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventHide",
                "name": "chiDrawerHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Drawer hide method has executed, but the closing animation has not started yet"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventShown",
                "name": "chiDrawerShown",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Drawer has been shown to the user and is fully visible. The animation has completed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventHidden",
                "name": "chiDrawerHidden",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Drawer has been hidden to the user. The animation has completed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggle": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggles active state (show/hide)",
                    "tags": []
                }
            },
            "show": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Shows the drawer.",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Hides the drawer",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "position",
                "methodName": "positionValidation"
            }, {
                "propName": "backdrop",
                "methodName": "backdropValidation"
            }, {
                "propName": "active",
                "methodName": "statusChanged"
            }];
    }
}
