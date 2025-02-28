const MARKETING_ICON_MODES = ['filled', 'outline'];
var TabTriggerSizes;
(function (TabTriggerSizes) {
    TabTriggerSizes["Height"] = "height";
    TabTriggerSizes["Width"] = "width";
})(TabTriggerSizes || (TabTriggerSizes = {}));
var TabTriggerDirections;
(function (TabTriggerDirections) {
    TabTriggerDirections["Left"] = "left";
    TabTriggerDirections["Top"] = "top";
})(TabTriggerDirections || (TabTriggerDirections = {}));
const PICKER_INPUT_TYPES = ['radio', 'checkbox'];
const DROPDOWN_SELECT_MODES = ['single', 'multi'];
//#endregion
//#region Skeleton
const SKELETON_TYPES = ['square', 'rounded', 'circle', 'rounded-square'];
// #endregion
// #region Card
const CARD_FOOTER_ALIGN_TYPES = ['center', 'right'];
const CARD_NO_BORDER_TYPES = ['card', 'header', 'footer'];
// #endregion

export { CARD_FOOTER_ALIGN_TYPES as C, DROPDOWN_SELECT_MODES as D, MARKETING_ICON_MODES as M, PICKER_INPUT_TYPES as P, SKELETON_TYPES as S, TabTriggerSizes as T, CARD_NO_BORDER_TYPES as a, TabTriggerDirections as b };
