'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const size = require('./size-19ce557b.js');
const types = require('./types-59ba296a.js');
const classes = require('./classes-301d799e.js');
const utils = require('./utils-7f208c7f.js');

const Skeleton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Size of the skeleton: { xs, sm, md, lg, xl }.
         */
        this.size = 'md';
    }
    sizeValidation(newValue) {
        if (newValue && !size.SKELETON_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for skeleton. Valid values are: xs, sm, md, lg, xl.`);
        }
    }
    typeValidation(newValue) {
        if (newValue && !types.SKELETON_TYPES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for skeleton. Valid values are: 'square', 'rounded', 'circle', 'rounded-square'`);
        }
    }
    componentWillLoad() {
        this.sizeValidation(this.size);
        this.typeValidation(this.type);
    }
    getSkeletonClasses() {
        return utils.joinArrayValues([
            classes.SKELETON_CLASSES.SKELETON,
            `-${this.size}`,
            this.type === 'rounded' && classes.ROUNDED_CLASS,
            this.type === 'circle' && classes.CIRCLE_CLASS,
            this.type === 'square' && classes.SQUARE_CLASS,
            this.type === 'rounded-square' && `${classes.ROUNDED_CLASS} ${classes.SQUARE_CLASS}`,
        ]);
    }
    render() {
        const classes = this.getSkeletonClasses();
        return index.h("div", { key: '6a055b71a8eaf5f4cbc9eaae4705cb5e76e91870', class: classes });
    }
    static get watchers() { return {
        "size": ["sizeValidation"],
        "type": ["typeValidation"]
    }; }
};

exports.chi_skeleton = Skeleton;
