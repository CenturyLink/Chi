import { StateData } from "./domain";
import { USER_STATE_DATA_LIST, APPLICATION_STATE_DATA_LIST } from "./fixtures";

const _createCodeSnippet = (stateDataList: StateData[]) => {
    let _codeSnippet = ``;
    stateDataList.forEach((stateType, index) => {
      _codeSnippet += `<!-- ${stateType.label} -->
<div class="chi-badge -flat${stateType.class}">
  <div class="chi-badge__content">
    ${_getIconSnippet(stateType)}
    <span>${stateType.label}</span>
  </div>
</div>${index+1 === stateDataList.length ? '' : `
`}`
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
    return _createCodeSnippet(USER_STATE_DATA_LIST);
}

export const _createApplicationStateCodeSnippet = (): string => {
    return _createCodeSnippet(APPLICATION_STATE_DATA_LIST);
}