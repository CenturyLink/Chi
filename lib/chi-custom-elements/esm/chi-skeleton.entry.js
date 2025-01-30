import { r as registerInstance, h } from './index-cde0ed0d.js';
import { S as SKELETON_SIZES } from './size-9d0c9884.js';
import { S as SKELETON_TYPES } from './types-e557e3e4.js';
import { s as SKELETON_CLASSES, t as ROUNDED_CLASS, u as CIRCLE_CLASS, v as SQUARE_CLASS } from './classes-fca9c660.js';
import { j as joinArrayValues } from './utils-416d6cef.js';

const Skeleton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'md';
        this.type = undefined;
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
        return h("div", { key: '6a055b71a8eaf5f4cbc9eaae4705cb5e76e91870', class: classes });
    }
    static get watchers() { return {
        "size": ["sizeValidation"],
        "type": ["typeValidation"]
    }; }
};

export { Skeleton as chi_skeleton };
