'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bd6e5613.js');
const classes = require('./classes-b81f8b66.js');
const popper = require('./popper-56272c33.js');
const v4 = require('./v4-de9aacdf.js');

const tooltipCss = ".sc-chi-tooltip-h .chi-tooltip__wrapper.sc-chi-tooltip{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.sc-chi-tooltip-h .chi-tooltip__message.sc-chi-tooltip{display:-webkit-box;line-clamp:4;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:4}";
const ChiTooltipStyle0 = tooltipCss;

const Tooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tooltipShow = index.createEvent(this, "chiTooltipShow", 7);
        this.tooltipHide = index.createEvent(this, "chiTooltipHide", 7);
        /**
         *  to set the background color of the tooltip { base, light }.
         */
        this.color = 'base';
        /**
         *  to set position of the tooltip { top, right, bottom, left }.
         */
        this.position = 'top';
        /**
         *  to set the class chi-tooltip__wrapper
         */
        this.wrapper = false;
        /**
         * shows if the Tooltip is visible
         */
        this.tooltipVisible = false;
        this._showTooltipHandler = () => this.toggle(true);
        this._hideTooltipHandler = () => this.toggle(false);
        this.toggle = (visible) => {
            var _a, _b;
            if (this.tooltipVisible === visible) {
                return;
            }
            this.tooltipVisible = visible;
            (_a = this._tooltipElementNode) === null || _a === void 0 ? void 0 : _a.classList.toggle(classes.ACTIVE_CLASS, visible);
            if (visible) {
                this.tooltipShow.emit();
                (_b = this._popper) === null || _b === void 0 ? void 0 : _b.update();
            }
            else {
                this.tooltipHide.emit();
            }
        };
    }
    messageChanged() {
        if (this._popper) {
            this._popper.update();
        }
    }
    positionChanged() {
        if (this._popper) {
            this._popper.options.placement = this.position;
            this._popper.scheduleUpdate();
        }
    }
    componentWillLoad() {
        if (!this.el.id) {
            this._id = `chi-tooltip-${v4.v4()}`;
        }
    }
    /**
     * Shows the tooltip
     */
    async show() {
        this.toggle(true);
    }
    /**
     * Hides the tooltip
     */
    async hide() {
        this.toggle(false);
    }
    initializePopper() {
        const triggerElement = this._tooltipRef;
        const tooltipElementNode = this._tooltipElementNode;
        if (triggerElement && tooltipElementNode) {
            this._popper = new popper.Popper(triggerElement, tooltipElementNode, {
                placement: this.position,
                modifiers: {
                    offset: {
                        offset: '0,8',
                    },
                },
            });
            ['mouseenter', 'focus'].forEach((event) => { var _a; return (_a = this._tooltipRef) === null || _a === void 0 ? void 0 : _a.addEventListener(event, this._showTooltipHandler); });
            ['mouseleave', 'blur'].forEach((event) => { var _a; return (_a = this._tooltipRef) === null || _a === void 0 ? void 0 : _a.addEventListener(event, this._hideTooltipHandler); });
        }
    }
    componentDidLoad() {
        this.initializePopper();
    }
    disconnectedCallback() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
        if (this._tooltipRef) {
            ['mouseenter', 'focus'].forEach((event) => { var _a; return (_a = this._tooltipRef) === null || _a === void 0 ? void 0 : _a.removeEventListener(event, this._showTooltipHandler); });
            ['mouseleave', 'blur'].forEach((event) => { var _a; return (_a = this._tooltipRef) === null || _a === void 0 ? void 0 : _a.removeEventListener(event, this._hideTooltipHandler); });
        }
    }
    render() {
        return (index.h("div", { key: '4207470204038745d6bee8865a6f2aa71f0156b1', class: this.wrapper ? classes.TOOLTIP_CLASSES.WRAPPER : '', ref: (el) => (this._tooltipRef = el), "aria-describedby": this.tooltipVisible ? this._id : null }, index.h("slot", { key: '3f77feecd983991b7fef3e4cfa2d442c5dd8e492' }), index.h("div", { key: '7e8a7f52cabc74d38e6dcdef1b0e34e6abe4907e', class: {
                [classes.TOOLTIP_CLASSES.ELEMENT]: true,
                [classes.LIGHT_CLASS]: this.color === 'light',
            }, id: this._id, role: "tooltip", ref: (el) => (this._tooltipElementNode = el), "aria-hidden": !this.tooltipVisible }, index.h("span", { key: '35f23741a20a5196a311f5f32decbfcf3b7683ee', class: classes.TOOLTIP_CLASSES.MESSAGE }, this.message))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "message": ["messageChanged"],
        "position": ["positionChanged"]
    }; }
};
Tooltip.style = ChiTooltipStyle0;

exports.chi_tooltip = Tooltip;
