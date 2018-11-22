import {Util} from "./util.js";
import {chi} from "./chi.js";

const CLASS_COMPONENT = 'a-tabs';
const CLASS_ACTIVE = "-active";
const COMPONENT_TYPE = "tab";
const CLASS_SLIDING_BORDER='a-tabs__sliding-border';
const CLASS_ANIMATED = "-animated";

class Tab {

  constructor (elem, config) {
    this._elem = elem;
    this._config = {
      animated: true
    };
    this._config = Util.extend(this._config, config);

    let self = this;

    this._clickEventHandler = function(e) {
      self.clickEventHandler(e);
    };
    this._elem.addEventListener('click', this._clickEventHandler);
    Util.registerComponent(COMPONENT_TYPE, this._elem, this);

    if (this._config.animated) {
      Util.addClass(this._elem, CLASS_ANIMATED);
      this.addSlidingBorder();
    }
  }

  addSlidingBorder() {
    const slidingBorder = document.createElement('li');
    slidingBorder.setAttribute('class', CLASS_SLIDING_BORDER);
    this._elem.appendChild(slidingBorder);
    let borderActivated = false;
    for (let i = 0; i < this._elem.childNodes.length && !borderActivated; i++) {
      if (Util.hasClass(this._elem.childNodes[i], CLASS_ACTIVE)) {
        this.moveSlidingBorder(this._elem.childNodes[i]);
        borderActivated = true;
      }
    }
  }

  moveSlidingBorder(tab) {
    let offset = 0;
    let size = 0;
    let found = false;
    const vertical = Util.hasClass(this._elem, '-vertical');

    for (let i = 0; !found && i < this._elem.childNodes.length; i++) {
      let childNode = this._elem.childNodes[i];
      let style = window.getComputedStyle(childNode);
      offset += parseInt(vertical ? style.marginTop : style.marginLeft, 10);
      if (childNode === tab) {
        size = vertical ? childNode.childNodes[0].scrollHeight : childNode.childNodes[0].scrollWidth;
        found = true;
      } else {
        offset += vertical ? childNode.scrollHeight : childNode.scrollWidth;
      }
    }
    if (found) {
      Util.findAndApply(this._elem, CLASS_SLIDING_BORDER, function (elem) {
        if (vertical) {
          elem.setAttribute('style', 'height:' + size + 'px;top:' + offset + 'px;');
        } else {
          elem.setAttribute('style', 'width:' + size + 'px;left:' + offset + 'px;');
        }
      });
    } else {
      console.error("Not found desplazamiento: " + offset + "px");
    }
  }

  getAssociatedTabPanel (tab) {
    if (!tab.hasChildNodes()) {
      return null;
    }

    let anchor;

    anchor = Array.prototype.filter.call(tab.childNodes, function (elem) {
      if (elem.nodeName === 'A') {
        return true;
      } else {
        return false;
      }
    })[0];

    if (
      !anchor ||
      !anchor.hasAttribute('href') ||
      anchor.getAttribute('href').indexOf('#') !== 0 ||
      anchor.getAttribute('href').length <= 1
    ) {
      return null;
    }
    return document.getElementById(anchor.getAttribute('href').substr(1));
  }

  showTabPanel (tab) {
    let tabPanel = this.getAssociatedTabPanel(tab);
    if (tabPanel) {
      Util.addClass(tabPanel, CLASS_ACTIVE);
    }
  }

  hideTabPanel (tab) {
    let tabPanel = this.getAssociatedTabPanel(tab);
    if (tabPanel) {
      Util.removeClass(tabPanel, CLASS_ACTIVE);
    }
  }

  clickEventHandler(e) {

    let tab, parentTab;
    let self = this;

    for (let cur = e.target; cur && cur !== this._elem; cur = cur.parentNode) {
      if (cur.getAttribute('target')) {
        return;
      } else if (cur.nodeName === 'A') {
        e.preventDefault();
      } else if (cur.nodeName === 'LI') {
        if (tab) {
          parentTab = cur;
        } else {
          tab = cur;
        }
      }
    }

    if (Util.hasClass(tab, CLASS_ACTIVE)) {
      Array.prototype.forEach.call(tab.getElementsByClassName(CLASS_ACTIVE), function (tabElement) {
        if (tabElement.nodeName === 'LI') {
          Util.removeClass(tabElement, CLASS_ACTIVE);
          self.hideTabPanel(tabElement);
          self.showTabPanel(tab);
        }
      });
      return;
    }

    Array.prototype.forEach.call(self._elem.getElementsByTagName('LI'), function (tabElement) {
      if (Util.hasClass(tabElement, CLASS_ACTIVE) && tabElement !== parentTab) {
        Util.removeClass(tabElement, CLASS_ACTIVE);
        self.hideTabPanel(tabElement);
      }
    });

    Util.addClass(tab, CLASS_ACTIVE);
    self.showTabPanel(tab);

    if (parentTab) {
      self.hideTabPanel(parentTab);
      Util.addClass(parentTab, CLASS_ACTIVE);
    }

    if (self._config.animated) {
      if (parentTab) {
        self.moveSlidingBorder(parentTab, self._elem);
      } else {
        self.moveSlidingBorder(tab, self._elem);
      }
    }
  }

  dispose () {
    this._config = null;

    this._elem.removeEventListener('click', this._clickEventHandler);
    this._clickEventHandler = null;

    this._elem = null;
  }

  static factory(elem, config) {
    return Util.getRegisteredComponent(COMPONENT_TYPE, elem) ||
      new Tab(elem, config);
  }

  static initAll(config) {
    Array.prototype.forEach.call(
      document.getElementsByClassName(CLASS_COMPONENT), function (elem) {
        Tab.factory(elem, config);
      }
    );
  }

}

let chiTab = Util.addArraySupportToFactory(Tab.factory);

chi.tab = chiTab;
export {Tab, chiTab};
