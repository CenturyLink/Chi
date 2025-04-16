import { h } from "@stencil/core";
import { calculateClasses } from "../../utils/utils";
import { MARKETING_ICON_SIZES as VALID_SIZES } from "../../constants/size";
import { spriteFilled } from "./sprites/filled";
import { spriteOutline } from "./sprites/outline";
import { MARKETING_ICON_MODES } from "../../constants/types";
import { addMutationObserver } from "../../utils/mutationObserver";
const loadedIcons = {
    filled: 0,
    outline: 0,
};
export class MarketingIcon {
    constructor() {
        /**
         * To render Marketing icon as filled or outline
         */
        this.variant = 'filled';
    }
    validateSizeAttribute(newValue) {
        const validValues = VALID_SIZES.join(', ');
        if (newValue && VALID_SIZES.indexOf(newValue) === -1) {
            throw new Error('Not valid size (' + newValue + ') for icon ' + this.icon + '. Valid values are ' + validValues + '. ');
        }
    }
    validateMode(newValue) {
        const validValues = MARKETING_ICON_MODES.join(', ');
        if (newValue && !MARKETING_ICON_MODES.includes(newValue)) {
            throw new Error(`${this.variant} is not a valid mode of Marketing Icon. If provided, valid values are: ${validValues}. `);
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    componentWillLoad() {
        if (loadedIcons[this.variant] === 0) {
            this._loadSprite(this.variant);
        }
        loadedIcons[this.variant]++;
        this.validateMode(this.variant);
        this.validateSizeAttribute(this.size);
    }
    disconnectedCallback() {
        if (loadedIcons[this.variant] === 0) {
            if (!document.getElementById(`chi-marketing-icons-${this.variant}`)) {
                this._loadSprite(this.variant);
            }
            loadedIcons[this.variant]--;
        }
    }
    getClass() {
        return calculateClasses({
            prefixed: [{ prefix: '-', value: this.size }],
        });
    }
    _loadSprite(mode) {
        const svgSprite = mode === 'outline' ? spriteOutline : spriteFilled;
        const shadowSVG = document.createElement('div');
        shadowSVG.id = `chi-marketing-icons-${this.variant}`;
        shadowSVG.setAttribute('style', 'display:none;');
        shadowSVG.setAttribute('aria-hidden', 'true');
        shadowSVG.innerHTML = svgSprite;
        document.body.appendChild(shadowSVG);
    }
    render() {
        return (h("div", { key: '26a00f131c13222084c56ec3160ac17ac7613da2', class: `chi-marketing-icon ${this.variant} ${this.getClass()} ${this.extraClass ? this.extraClass : ''}` }, h("svg", { key: '37482eeaa950d0afd6b178436384be77786ecc4c', xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" }, h("use", { key: 'cef5c369bed532694e3960700153728607afa2fa', xlinkHref: `#icon-${this.variant}-${this.icon}` }))));
    }
    static get is() { return "chi-marketing-icon"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["marketing-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["marketing-icon.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
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
                    "text": "Icon to be rendered."
                },
                "getter": false,
                "setter": false,
                "attribute": "icon",
                "reflect": true
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "MarketingIconSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "MarketingIconSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::MarketingIconSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "OPTIONAL. Size of the Icon { xs, sm, md, lg }."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "OPTIONAL classes"
                },
                "getter": false,
                "setter": false,
                "attribute": "extra-class",
                "reflect": true
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ChiMarketingIconModes",
                    "resolved": "\"filled\" | \"outline\"",
                    "references": {
                        "ChiMarketingIconModes": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::ChiMarketingIconModes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To render Marketing icon as filled or outline"
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "'filled'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "validateSizeAttribute"
            }, {
                "propName": "mode",
                "methodName": "validateMode"
            }];
    }
}
