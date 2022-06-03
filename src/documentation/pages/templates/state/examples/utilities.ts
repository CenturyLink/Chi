interface CircleData {
    cx: string,
    cy: string,
    radius: string,
    fill: string,
    strokeWidth: string
}

export interface StateData {
    class: string,
    label: string,
    icon: string,
    svgViewBox?: string,
    circle?: CircleData
}

export const _userStateDataList: StateData[] = [
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

export const _applicationStateDataList: StateData[] = [
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

const _createCodeSnippet = (stateDataList: StateData[]): string => {
    let _codeSnippet = ``;
    stateDataList.forEach((stateType, index) => {
      _codeSnippet += `<!-- ${stateType.label} -->
<div class="chi-badge -flat${stateType.class}">
  <div class="chi-badge__content">
    ${_getIconSnippet(stateType)}
    <span>${stateType.label}</span>
  </div>
</div>${index++ === _applicationStateDataList.length ? `
`:''}`
    });
    return _codeSnippet;
}

const _getIconSnippet = (stateData: StateData): string => {
    return stateData.svgViewBox ? 
    `<svg class="${stateData.icon}" viewBox="${stateData.svgViewBox}">
      <title>${stateData.label}</title>
      <circle class="path" cx="${stateData.circle?.cx}" cy="${stateData.circle?.cy}" r="${stateData.circle?.radius}" fill="${stateData.circle?.fill}" stroke-width="${stateData.circle?.strokeWidth}"></circle>
    </svg>` :
    `<i class="${stateData.icon}" aria-hidden="true"></i>`
}

export const _createUserStateCodeSnippet = (): string => {
    return _createCodeSnippet(_userStateDataList);
}

export const _createApplicationStateCodeSnippet = (): string => {
    return _createCodeSnippet(_applicationStateDataList);
}