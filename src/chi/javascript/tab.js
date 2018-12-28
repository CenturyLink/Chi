import {Util} from "./util.js";
import {chi} from "./chi.js";
import {SlidingBorder, ANIMATION_DURATION as BORDER_ANIMATION_DURATION} from "./AuxiliaryComponents/SlidingBorder";


const CLASS_ACTIVE = "-active";
const CLASS_ANIMATED = "-animated";
const CLASS_COMPONENT = 'a-tabs';
const CLASS_VERTICAL = "-vertical";
const COMPONENT_TYPE = "tab";

class Tab {

  constructor (elem, config) {
    this._elem = elem;
    this._config = {
      animated: true,
      waitForAnimations: true
    };
    this._config = Util.extend(this._config, config);
    let self = this;

    this._clickEventHandler = function(e) {
      self.clickEventHandler(e);
    };
    this._elem.addEventListener('click', this._clickEventHandler);

    if (this._config.animated) {
      Util.addClass(this._elem, CLASS_ANIMATED);

      this._slidingBorder = new SlidingBorder(
        this._elem,
        this.isVertical(),
        'li');

      const activeTab = this.getActiveTab();
      const style = this._slidingBorder.calculateStaticChildStyle(activeTab);
      this._slidingBorder.moveSlidingBorder(style);
    }
  }

  getActiveTab () {
    for (let i = 0; i < this._elem.childNodes.length; i++) {
      if (Util.hasClass(this._elem.childNodes[i], CLASS_ACTIVE)) {
        return this._elem.childNodes[i];
      }
    }
    return null;
  }

  getAssociatedTabPanel (tab) {
    if (!tab.hasChildNodes()) {
      return null;
    }
    for (let i = 0 ; i < tab.childNodes.length ; i++) {
      const target = Util.getTarget(tab.childNodes[i]);
      if (target) {
        return target;
      }
    }
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

  isVertical () {
    if (this._slidingBorder) {
      const newValue = Util.hasClass(this._elem, CLASS_VERTICAL);
      if (newValue !== this.previousVerticalValue) {
        this.previousVerticalValue = newValue;
        this._slidingBorder.setVertical(newValue);
      }
      return newValue;
    } else {
      return Util.hasClass(this._elem, CLASS_VERTICAL);
    }
  }

  showTab (tab, parentTab) {

    const self = this;

    if (Util.hasClass(tab, CLASS_ACTIVE)) {
      Array.prototype.forEach.call(
        tab.getElementsByClassName(CLASS_ACTIVE),
        function (tabElement) {
          if (tabElement.nodeName === 'LI') {
            Util.removeClass(tabElement, CLASS_ACTIVE);
            self.hideTabPanel(tabElement);
            self.showTabPanel(tab);
          }
        }
      );
      return;
    }

    Array.prototype.forEach.call(
      this._elem.getElementsByTagName('LI'),
      function (tabElement) {
        if (
          Util.hasClass(tabElement, CLASS_ACTIVE) &&
          tabElement !== parentTab
        ) {
          Util.removeClass(tabElement, CLASS_ACTIVE);
          self.hideTabPanel(tabElement);
        }
      }
    );

    Util.addClass(tab, CLASS_ACTIVE);
    this.showTabPanel(tab);

    if (parentTab) {
      this.hideTabPanel(parentTab);
      Util.addClass(parentTab, CLASS_ACTIVE);
    }

    if (this._config.animated) {
      if (parentTab) {
        this.moveSlidingBorderToTab(parentTab);
      } else {
        this.moveSlidingBorderToTab(tab);
      }
    }
  }

  _isLinkATabActivator (anchorElem) {
    return Util.getTarget(anchorElem) ? true : false;
  }

  _clickedOnAnchor (anchorElem, event) {
    if (this._isLinkATabActivator(anchorElem)) {
      event.preventDefault();
    } else {
      if (this._config.animated && this._config.waitForAnimations) {
        window.setTimeout(
          function(){
            window.location.href = anchorElem.getAttribute('href');
          },
          BORDER_ANIMATION_DURATION
        );
      }
    }
  }

  clickEventHandler (e) {
    let tab, parentTab;

    for (let cur = e.target; cur && cur !== this._elem; cur = cur.parentNode) {
      if (cur.nodeName === 'A') {
        this._clickedOnAnchor(cur, e);
      } else if (cur.nodeName === 'LI') {
        if (tab) {
          parentTab = cur;
        } else {
          tab = cur;
        }
      }
    }
    if (tab) {
      this.showTab(tab, parentTab);
    }
  }

  moveSlidingBorderToTab(tab) {
    window.requestAnimationFrame(function () {
      const style = this._slidingBorder.calculateStaticChildStyle(tab);
      this.moveSlidingBorder(style);
    }.bind(this));
  }

  moveSlidingBorder (style) {
    this._slidingBorder.moveSlidingBorder(style);
  }

  dispose () {
    this._config = null;
    this._elem.removeEventListener('click', this._clickEventHandler);
    this._clickEventHandler = null;
    this._elem = null;
    if (this._slidingBorder) {
      this._slidingBorder.dispose();
      this.previousVerticalValue = null;
    }
  }

  static factory(elem, config) {
    return Util.cachedComponentFactory(elem, config, COMPONENT_TYPE, function() {
      return new Tab(elem, config);
    });
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
export {Tab, chiTab, COMPONENT_TYPE};
