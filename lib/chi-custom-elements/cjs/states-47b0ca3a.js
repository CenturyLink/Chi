'use strict';

const CHI_STATES = ['success', 'warning', 'danger'];
const STATES = {
    base: {
        class: '',
        icon: 'circle-info',
    },
    warning: {
        class: '-warning',
        icon: 'warning',
    },
    danger: {
        class: '-danger',
        icon: 'circle-warning',
    },
    success: {
        class: '-success',
        icon: 'circle-check',
    },
    info: {
        class: '-info',
        icon: 'circle-info',
    },
    muted: {
        class: '-muted',
        icon: 'circle-info',
    },
};

exports.CHI_STATES = CHI_STATES;
exports.STATES = STATES;
