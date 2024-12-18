import { h } from "@stencil/core";
import { contains } from "../../utils/utils";
import { CHI_TIME_AUTO_SCROLL_DELAY } from "../../constants/constants";
import { TIME_CLASSES } from "../../constants/classes";
import { ESCAPE_KEYCODE } from "../../constants/constants";
import { v4 as uuid4 } from "uuid";
export class TimePicker {
    constructor() {
        this.value = undefined;
        this.disabled = false;
        this.displaySeconds = false;
        this._excludedHours = undefined;
        this._excludedMinutes = undefined;
        this._excludedSeconds = undefined;
        this.format = '12hr';
        this.active = false;
        this.minutesStep = undefined;
        this.secondsStep = undefined;
    }
    _onFocusIn(e) {
        if (e.target !== document.body && e.target !== null) {
            this.active = contains(this.el, e.target);
        }
    }
    _onClick(e) {
        if (e.target !== document.body && e.target !== null) {
            this.active = contains(this.el, e.target);
        }
    }
    _isEscapeKey(e) {
        return 'key' in e && (e.key === 'Escape' || e.key === 'Esc' || e.key === ESCAPE_KEYCODE);
    }
    _onKeyUp(e) {
        if (this._isEscapeKey(e)) {
            this.active = false;
            this._input.blur();
        }
    }
    timeChanged(newValue, oldValue) {
        if (!!newValue !== !!oldValue) {
            this.value = newValue;
        }
    }
    /**
     * Sets time
     */
    async setTime(time) {
        this.value = time;
    }
    /**
     * Gets time
     */
    getTime() {
        return Promise.resolve(this.value);
    }
    componentWillLoad() {
        this._onFocusIn = this._onFocusIn.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onKeyUp = this._onKeyUp.bind(this);
        this._uuid = this.el.id ? this.el.id : `tp-${uuid4()}`;
    }
    componentDidLoad() {
        document.body.addEventListener('focusin', this._onFocusIn);
        document.body.addEventListener('click', this._onClick);
        document.body.addEventListener('keyup', this._onKeyUp);
    }
    disconnectedCallback() {
        document.body.removeEventListener('focusin', this._onFocusIn);
        document.body.removeEventListener('click', this._onClick);
        document.body.removeEventListener('keyup', this._onKeyUp);
    }
    handlePopoverOpen(ev) {
        ev.stopPropagation();
        const hoursColumn = this.el.querySelector(`.${TIME_CLASSES.HOURS}`);
        const minutesColumn = this.el.querySelector(`.${TIME_CLASSES.MINUTES}`);
        const secondsColumn = this.el.querySelector(`.${TIME_CLASSES.SECONDS}`);
        setTimeout(() => {
            if (hoursColumn) {
                const activeHour = hoursColumn.querySelector(`.${TIME_CLASSES.HOUR}.-active`);
                if (activeHour) {
                    hoursColumn.scrollTop = activeHour.offsetTop - 4;
                }
            }
            if (minutesColumn) {
                const activeMinute = minutesColumn.querySelector(`.${TIME_CLASSES.MINUTE}.-active`);
                if (activeMinute) {
                    minutesColumn.scrollTop = activeMinute.offsetTop - 4;
                }
            }
            if (secondsColumn) {
                const activeSecond = secondsColumn.querySelector(`.${TIME_CLASSES.SECOND}.-active`);
                if (activeSecond) {
                    secondsColumn.scrollTop = activeSecond.offsetTop - 4;
                }
            }
        }, CHI_TIME_AUTO_SCROLL_DELAY);
    }
    handleTimeChange(ev) {
        const timePickerInput = document.getElementById(`${this._uuid}-control`);
        const formatTimePeriod = (period) => {
            return String(period).length > 1 ? String(period) : `0${period}`;
        };
        const hour = this.format !== '24hr' && ev.detail.hour > 12 ? ev.detail.hour - 12 : ev.detail.hour;
        const seconds = this.displaySeconds ? `:${formatTimePeriod(ev.detail.second)}` : '';
        const timePeriod = this.format === '12hr' ? formatTimePeriod(ev.detail.period) : '';
        timePickerInput.value = `${formatTimePeriod(hour)}:${formatTimePeriod(ev.detail.minute)}${seconds} ${timePeriod}`;
    }
    render() {
        const chiPopover = (h("chi-popover", { key: 'ad90040b792a10363397275e41109fcac9c2d0aa', id: `popover-${this._uuid}`, position: "bottom", reference: `#${this._uuid}-control`, "prevent-auto-hide": true, active: this.active }, h("chi-time", { key: '4965a89dd5ba485b0e68fcccf2c2bbdc27921ef0', "display-seconds": this.displaySeconds, "excluded-hours": this._excludedHours, "excluded-minutes": this._excludedMinutes, "excluded-seconds": this._excludedSeconds, format: this.format, value: this.value, "seconds-step": this.secondsStep, "minutes-step": this.minutesStep })));
        return (h("div", { key: '8166958a9bfe596bf5f1171fa020560b516555a2', class: this.disabled ? '-disabled' : '' }, h("div", { key: '835693d05ef2dcf2e41c47be0227e233883f78fa', class: "chi-input__wrapper -icon--right" }, h("input", { key: 'c7d0c2944c00f40c8c904c5a6abf1a2d00904456', id: `${this._uuid}-control`, class: `chi-input
              ${this.active ? '-focus' : ''}`, type: `text`, placeholder: this.format === '12hr' ? '--:-- --' : '--:--', ref: (el) => (this._input = el), value: this.value, disabled: this.disabled }), h("chi-icon", { key: '7beeb040c00122c61da8ba34339dc09d501bbe1d', icon: "circle-clock-outline" })), !this.disabled && chiPopover));
    }
    static get is() { return "chi-time-picker"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "value": {
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
                    "text": "Selected time of Time Picker"
                },
                "attribute": "value",
                "reflect": true
            },
            "disabled": {
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
                    "text": "To disable chi-time-picker."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "displaySeconds": {
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
                    "text": "Displaying seconds column"
                },
                "attribute": "display-seconds",
                "reflect": true,
                "defaultValue": "false"
            },
            "_excludedHours": {
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
                    "text": "To specify excluded hours."
                },
                "attribute": "_excluded-hours",
                "reflect": true
            },
            "_excludedMinutes": {
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
                    "text": "To specify excluded minutes."
                },
                "attribute": "_excluded-minutes",
                "reflect": true
            },
            "_excludedSeconds": {
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
                    "text": "To specify excluded seconds."
                },
                "attribute": "_excluded-seconds",
                "reflect": true
            },
            "format": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TimePickerFormats",
                    "resolved": "\"12hr\" | \"24hr\"",
                    "references": {
                        "TimePickerFormats": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::TimePickerFormats"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define format of Time Picker."
                },
                "attribute": "format",
                "reflect": true,
                "defaultValue": "'12hr'"
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
                    "text": "Indicates whether the time picker popover is open or closed"
                },
                "attribute": "active",
                "reflect": true,
                "defaultValue": "false"
            },
            "minutesStep": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "TimePickerTimeSteps",
                    "resolved": "1 | 10 | 15 | 20 | 30 | 5",
                    "references": {
                        "TimePickerTimeSteps": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::TimePickerTimeSteps"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Renders minutes in stepped format. Defaults to 15 min steps if no value\nis provided (see examples in docs)."
                },
                "attribute": "minutes-step",
                "reflect": true
            },
            "secondsStep": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "TimePickerTimeSteps",
                    "resolved": "1 | 10 | 15 | 20 | 30 | 5",
                    "references": {
                        "TimePickerTimeSteps": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::TimePickerTimeSteps"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Renders seconds in stepped format. Defaults to 10 seconds if\nno value is provided (see examples in docs)."
                },
                "attribute": "seconds-step",
                "reflect": true
            }
        };
    }
    static get methods() {
        return {
            "setTime": {
                "complexType": {
                    "signature": "(time: string) => Promise<void>",
                    "parameters": [{
                            "name": "time",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets time",
                    "tags": []
                }
            },
            "getTime": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "Gets time",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "timeChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "chiPopoverShow",
                "method": "handlePopoverOpen",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "chiTimeChange",
                "method": "handleTimeChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
