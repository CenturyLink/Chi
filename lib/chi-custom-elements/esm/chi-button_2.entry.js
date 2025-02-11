import { r as registerInstance, c as createEvent, h, g as getElement, a as getAssetPath } from './index-422a57bb.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';
import { a as calculateClasses } from './utils-48628cb4.js';
import { I as ICON_COLORS } from './color-b6e4748b.js';
import { I as ICON_SIZES } from './size-9d0c9884.js';

const buttonCss = "chi-button.sc-chi-button-h{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}chi-button[fluid].sc-chi-button-h:not(.-float),chi-button.-fluid.sc-chi-button-h{width:100%}chi-button[fluid].sc-chi-button-h:not(.-float)[center] .-justify-content--center.sc-chi-button,chi-button.-fluid[center].sc-chi-button-h .-justify-content--center.sc-chi-button{-ms-flex-pack:center;justify-content:center}.sc-chi-button-s>:not(:last-child){margin-right:0.5rem !important}.sc-chi-button-s>chi-spinner{display:-ms-inline-flexbox !important;display:inline-flex !important}.sc-chi-button-s>chi-spinner[size=sm--2] svg,.sc-chi-button-s>chi-spinner[size=md] svg,.sc-chi-button-s>chi-spinner[size=lg] svg,.sc-chi-button-s>chi-spinner[size=xl] svg,.sc-chi-button-s>chi-spinner[size=xxl] svg{height:1rem !important;width:1rem !important}";
const ChiButtonStyle0 = buttonCss;

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiClick = createEvent(this, "chiClick", 7);
        this.chiMouseEnter = createEvent(this, "chiMouseEnter", 7);
        this.chiMouseLeave = createEvent(this, "chiMouseLeave", 7);
        this.slotBtnContent = true;
        /**
         *  to disable chi-button.
         */
        this.disabled = false;
        /**
         *  to render a button to fill the parent space.
         */
        this.fluid = false;
        /**
         *  to render a button with uppercase text.
         */
        this.uppercase = false;
        /**
         *  to center align the text.
         */
        this.center = false;
    }
    sizeValidation(newValue) {
        if (newValue && !['', 'xs', 'sm', 'md', 'lg', 'xl'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for button. Valid values are xs, sm, md, lg, xl, ''. `);
        }
    }
    colorValidation(newValue) {
        if (newValue && !['', 'primary', 'secondary', 'danger', 'dark', 'light'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid color for button. Valid values are primary, secondary, danger, dark, light or ''. `);
        }
    }
    buttonTypeValidation(newValue) {
        if (newValue && !['', 'float', 'close', 'icon'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid button type. Valid values are float, close, icon or ''. `);
        }
    }
    variantValidation(newValue) {
        if (newValue && !['', 'outline', 'flat'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid variant for button. Valid values are outline, flat or ''. `);
        }
    }
    componentWillLoad() {
        this.colorValidation(this.color);
        this.sizeValidation(this.size);
        this.buttonTypeValidation(this.type);
        this.variantValidation(this.variant);
        if (!this.el.querySelector('chi-icon') && !this.el.querySelector('chi-spinner')) {
            this.slotBtnContent = false;
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    _buttonClicked() {
        this.chiClick.emit();
    }
    _buttonMouseEnter() {
        this.chiMouseEnter.emit();
    }
    _buttonMouseLeave() {
        this.chiMouseLeave.emit();
    }
    render() {
        if (this.type === 'close') {
            return (h("button", { class: `${this.extraClass ? this.extraClass : ''} chi-button -icon -close ${this.size ? `-${this.size}` : ''}`, onClick: () => this._buttonClicked(), "aria-label": "Close" }, h("div", { class: "chi-button__content" }, h("chi-icon", { icon: 'x' }))));
        }
        else {
            return (h("button", Object.assign({ class: `chi-button
          ${this.variant ? `-${this.variant}` : ''}
          ${this.color ? `-${this.color}` : ''}
          ${this.type ? `-${this.type}` : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this.uppercase ? '-uppercase' : ''}
          ${this.fluid ? '-fluid' : ''}
          ${this.fluid && this.center ? '-justify-content--center' : ''}
          ${this.disabled ? '-disabled' : ''}
          ${this.extraClass ? this.extraClass : ''}`, onClick: () => this._buttonClicked(), onMouseEnter: () => this._buttonMouseEnter(), onMouseLeave: () => this._buttonMouseLeave(), disabled: this.disabled }, (this.alternativeText && { 'aria-label': this.alternativeText })), this.slotBtnContent ? (h("div", { class: 'chi-button__content' }, h("slot", null))) : (h("slot", null))));
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"],
        "color": ["colorValidation"],
        "type": ["buttonTypeValidation"],
        "variant": ["variantValidation"]
    }; }
};
Button.style = ChiButtonStyle0;

const iconCss = "chi-icon.sc-chi-icon-h{display:-ms-inline-flexbox;display:inline-flex}";
const ChiIconStyle0 = iconCss;

const Icon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
                const path = getAssetPath(`./icons/${this.icon}.js`);
                const iconModule = await import(path);
                const icon = iconModule.default;
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
        const validValues = ICON_COLORS.join(', ');
        if (newValue && ICON_COLORS.indexOf(newValue) === -1) {
            throw new Error('Not valid color (' + newValue + ') for icon ' + this.icon + '. Valid values are ' + validValues + '. ');
        }
    }
    validateSizeAttribute(newValue) {
        const validValues = ICON_SIZES.join(', ');
        if (newValue && ICON_SIZES.indexOf(newValue) === -1) {
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
        return (h("div", { key: '46f25b541a8d2f07f7f742253813a72d3aa675b4', class: `chi-icon ${this.getClass()} ${extraClass}` }, h("svg", { key: '26fab7a1e79d98d578042f9581729c65e9a6e5cb', xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" }, h("use", { key: '9dafd68945c29815c2699ed8e003df27f4568a09', xlinkHref: '#icon-' + this.icon }))));
    }
    static get assetsDirs() { return ["icons"]; }
    static get watchers() { return {
        "color": ["validateColorAttribute"],
        "size": ["validateSizeAttribute"]
    }; }
};
Icon.style = ChiIconStyle0;

export { Button as chi_button, Icon as chi_icon };
