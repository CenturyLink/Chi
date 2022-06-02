interface stateData {
    class: string,
    label: string,
    icon: string,
    viewBox?: string
}

export const _userStateDataList: stateData[] = [
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

export const _applicationStateDataList: stateData[] = [
    {
        class: ' -success',
        icon:'chi-icon icon-circle',
        label:'Running'
    },
    {
        class: '',
        icon:'chi-spinner -sm',
        label:'Processing',
        viewBox:'0 0 66 66'
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