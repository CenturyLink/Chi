import { h } from "@stencil/core";
import { SKELETON_SIZES } from "../../constants/size";
import { SKELETON_TYPES } from "../../constants/types";
import { SKELETON_CLASSES, CIRCLE_CLASS, SQUARE_CLASS, ROUNDED_CLASS } from "../../constants/classes";
import { joinArrayValues } from "../../utils/utils";
export class Skeleton {
    constructor() {
        /**
         * Size of the skeleton: { xs, sm, md, lg, xl }.
         */
        this.size = 'md';
    }
    sizeValidation(newValue) {
        if (newValue && !SKELETON_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for skeleton. Valid values are: xs, sm, md, lg, xl.`);
        }
    }
    typeValidation(newValue) {
        if (newValue && !SKELETON_TYPES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for skeleton. Valid values are: 'square', 'rounded', 'circle', 'rounded-square'`);
        }
    }
    componentWillLoad() {
        this.sizeValidation(this.size);
        this.typeValidation(this.type);
    }
    getSkeletonClasses() {
        return joinArrayValues([
            SKELETON_CLASSES.SKELETON,
            `-${this.size}`,
            this.type === 'rounded' && ROUNDED_CLASS,
            this.type === 'circle' && CIRCLE_CLASS,
            this.type === 'square' && SQUARE_CLASS,
            this.type === 'rounded-square' && `${ROUNDED_CLASS} ${SQUARE_CLASS}`,
        ]);
    }
    render() {
        const classes = this.getSkeletonClasses();
        return h("div", { key: 'c6497d27d66867de8db14fb3fb4f0c15fc58e648', class: classes });
    }
    static get is() { return "chi-skeleton"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SkeletonSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "SkeletonSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::SkeletonSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the skeleton: { xs, sm, md, lg, xl }."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'md'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SkeletonTypes",
                    "resolved": "\"circle\" | \"rounded\" | \"rounded-square\" | \"square\"",
                    "references": {
                        "SkeletonTypes": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::SkeletonTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Applies type classes to the skeleton."
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "sizeValidation"
            }, {
                "propName": "type",
                "methodName": "typeValidation"
            }];
    }
}
