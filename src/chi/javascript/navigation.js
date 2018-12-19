import {Util} from "./util.js";
import {chi} from "./chi.js";
import {Tab} from "./tab";
import {
  Dropdown,
  CLASS_COMPONENT as DROPDOWN_CLASS_COMPONENT,
  COMPONENT_TYPE as DROPDOWN_COMPONENT_TYPE
} from "./dropdown";

const COMPONENT_TYPE = "navigation";

class NavigationTab extends Tab {

  clickEventHandler(e) {

    if (
      e.target.nodeName === 'A' &&
      Util.hasClass(e.target, DROPDOWN_CLASS_COMPONENT)
    ) {
      e.preventDefault();
    } else {
      super.clickEventHandler(e);
    }
  }
}

class NavigationDropdown extends Dropdown {

  constructor (elem, tabComponent) {
    super(
      elem,
      { popper: true }
    );
    this._tab = tabComponent;
    this._removedPopper = false;
  }

  show() {
    if (this._tab.vertical && this._popper) {
      this._removedPopper = true;
      this._popper.destroy();
    } else if (this._removedPopper) {
      this.enablePopper();
    }
    super.show();
  }

  static factory(elem, tabComponent) {
    return Util.cachedComponentFactory(
      elem,
      tabComponent,
      DROPDOWN_COMPONENT_TYPE,
      function() {
        return new NavigationDropdown(elem, tabComponent);
      }
    );
  }
}

class Navigation {

  constructor (elem, config) {
    this._config = Util.extend({}, config);
    this._elem = elem;
    this._tab = new NavigationTab(elem);
    this._dropdowns = [];
    const self = this;
    Array.prototype.forEach.call(
      this._elem.querySelectorAll('a.' + DROPDOWN_CLASS_COMPONENT),
      function (dropdownElem) {
        self._dropdowns.push(
          NavigationDropdown.factory(dropdownElem, self._tab)
        );
      }
    );
  }

  dispose () {
    this._tab.dispose();
    this._dropdowns.forEach(function(dropdown) {
      dropdown.dispose();
    });
    this._tab = null;
    this._dropdowns = null;
    this._config = null;
    this._elem = null;
  }

  static factory(elem, config) {
    return Util.cachedComponentFactory(elem, config, COMPONENT_TYPE,
      function() {
        return new Navigation(elem, config);
      }
    );
  }
}


let chiNavigation = Util.addArraySupportToFactory(Navigation.factory);

chi.navigation = chiNavigation;
export {Navigation, chiNavigation};
