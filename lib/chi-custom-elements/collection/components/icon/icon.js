import { h, getAssetPath } from "@stencil/core";
import { calculateClasses } from "../../utils/utils";
import { ICON_COLORS as VALID_COLORS } from "../../constants/color";
import { ICON_SIZES as VALID_SIZES } from "../../constants/size";
export class Icon {
    constructor() {
        this.generatePath = (iconPath, iconFillRule) => {
            let path = '';
            if (Array.isArray(iconPath)) {
                iconPath.forEach((data, index) => {
                    const isLastPath = index === iconPath.length - 1;
                    const fillRule = isLastPath ? iconFillRule : '';
                    path += `<path d="${data}" ${fillRule}/>`;
                });
            }
            else {
                path = `<path d="${iconPath}" ${iconFillRule}/>`;
            }
            return path;
        };
        this.generateSVG = (icon) => {
            const fillRule = icon.fillRule ? `fill-rule="${icon.fillRule}"` : '';
            const path = this.generatePath(icon.path, fillRule);
            return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <symbol id="icon-${this.icon}" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        ${path}
      </symbol>
    </svg>`;
        };
        this.loadIcon = async () => {
            let shadowSVG = document.getElementById('chi-icons');
            if (!shadowSVG) {
                shadowSVG = document.createElement('div');
                shadowSVG.setAttribute('id', 'chi-icons');
                shadowSVG.setAttribute('style', 'display:none;');
                shadowSVG.setAttribute('aria-hidden', 'true');
                document.body.appendChild(shadowSVG);
            }
            try {
                const path = getAssetPath(`icons/${this.icon}.json`);
                const iconModule = await fetch(path);
                const icon = await iconModule.json();
                if (!shadowSVG.querySelector(`#icon-${this.icon}`)) {
                    shadowSVG.innerHTML += this.generateSVG(icon);
                }
            }
            catch (error) {
                console.log(`Error loading icon: ${this.icon}`, error);
            }
        };
    }
    validateColorAttribute(newValue) {
        const validValues = VALID_COLORS.join(', ');
        if (newValue && VALID_COLORS.indexOf(newValue) === -1) {
            throw new Error('Not valid color (' + newValue + ') for icon ' + this.icon + '. Valid values are ' + validValues + '. ');
        }
    }
    validateSizeAttribute(newValue) {
        const validValues = VALID_SIZES.join(', ');
        if (newValue && VALID_SIZES.indexOf(newValue) === -1) {
            throw new Error('Not valid size (' + newValue + ') for icon ' + this.icon + '. Valid values are ' + validValues + '. ');
        }
    }
    componentWillLoad() {
        this._loadSprite();
        this.validateColorAttribute(this.color);
        this.validateSizeAttribute(this.size);
    }
    getClass() {
        return calculateClasses({
            prefixed: [
                { prefix: '-icon--', value: this.color },
                { prefix: '-', value: this.size },
            ],
        });
    }
    _loadSprite() {
        this.loadIcon();
    }
    render() {
        const extraClass = this.extraClass && this.extraClass;
        return (h("div", { key: 'd59aaa9e0a2cb417453c62a8c9c4b20db5ce5885', class: `chi-icon ${this.getClass()} ${extraClass}` }, h("svg", { key: '192d2c6344fa0d8bfda2700a47cf34f41f0bdbbb', xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" }, h("use", { key: 'ad82917788180a3b2941b57120c5dd1911bf3905', xlinkHref: '#icon-' + this.icon }))));
    }
    static get is() { return "chi-icon"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["icon.css"]
        };
    }
    static get assetsDirs() { return ["icons"]; }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconColors",
                    "resolved": "\"danger\" | \"dark\" | \"grey\" | \"info\" | \"light\" | \"muted\" | \"navy\" | \"orange\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {
                        "IconColors": {
                            "location": "import",
                            "path": "../../constants/color",
                            "id": "src/constants/color.ts::IconColors"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "OPTIONAL. Color of the Icon."
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": true
            },
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
                    "original": "IconSizes",
                    "resolved": "string",
                    "references": {
                        "IconSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::IconSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "OPTIONAL. Size of the Icon."
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
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "color",
                "methodName": "validateColorAttribute"
            }, {
                "propName": "size",
                "methodName": "validateSizeAttribute"
            }];
    }
}
