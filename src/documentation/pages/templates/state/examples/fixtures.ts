import { StateData } from "./domain";

export const USER_STATE_DATA_LIST: StateData[] = [
    {
        class: ' -success',
        icon:'chi-icon icon-circle',
        label:'Online'
    },
    {
        class: ' -warning',
        icon:'chi-icon icon-circle-clock',
        label:'Away'
    },
    {
        class: ' -danger',
        icon:'chi-icon icon-circle-minus',
        label:'Do not disturb'
    },
    {
        class: ' -muted',
        icon:'chi-icon icon-circle',
        label:'Offline'
    },
    {
        class: ' -muted',
        icon:'chi-icon icon-circle-outline',
        label:'Invisible'
    }
];

export const APPLICATION_STATE_DATA_LIST: StateData[] = [
    {
        class: ' -success',
        icon:'chi-icon icon-circle',
        label:'Running'
    },
    {
        class: '',
        icon:'chi-spinner -sm',
        label:'Processing',
        svgViewBox:'0 0 66 66',
        circle: {
            cx: '33',
            cy: '33',
            radius: '30',
            fill: 'none',
            strokeWidth: '6'
        }
    },
    {
        class: ' -warning',
        icon:'chi-icon icon-warning',
        label:'Unavailable'
    },
    {
        class: ' -danger',
        icon:'chi-icon icon-circle',
        label:'Stopped'
    },
    {
        class: ' -muted',
        icon:'chi-icon icon-circle',
        label:'Terminated'
    },
    {
        class: ' -muted',
        icon:'chi-icon icon-circle-outline',
        label:'Unknown'
    }
];