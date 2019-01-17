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
      Util.extend(
        { popper: !config.tabComponent.isVertical()},
        config.dropdown
      )
    );
    this._tab = config.tabComponent;
    this._removedPopper = this._tab.isVertical();
    this._navigationComponent = config.navigationComponent;
  }

  show() {
    if (this._tab.isVertical() && this._popper) {
      this._removedPopper = true;
      this._popper.destroy();
    } else if (this._removedPopper && !this._tab.isVertical()) {
      this.enablePopper();
    }
    super.show();
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
