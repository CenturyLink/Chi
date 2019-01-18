import {
  CLASS_COMPONENT as DROPDOWN_CLASS_COMPONENT,
  CLASS_DROPDOWN_ITEM,
  Dropdown
} from "../dropdown";
import {Util} from "../..";

class NavigationDropdown extends Dropdown {
  constructor (elem, config) {
    super(
      elem,
      config.dropdown
    );
    this._navigationComponent = config.navigationComponent;
  }

  _dropdownClickedEventManager (e) {
    super._dropdownClickedEventManager(e);
    if (
      Util.hasClass(e.target, CLASS_DROPDOWN_ITEM) &&
      !Util.hasClass(e.target, DROPDOWN_CLASS_COMPONENT)
    ) {
      this._navigationComponent.activateMenuItem(e.target);
      this._navigationComponent.manageClickOnCommonLinks(e);
    }
  }
}

export {NavigationDropdown};
