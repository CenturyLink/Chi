let chiTabs = (function () {
  "use strict";

  //configuration
  const componentClass = 'a-tabs';
  const jsModifierClass = 'a-tabs--js';
  const chiActiveClass = '-active';
  const animation = true;

  let helpers = (function () {
    const removeClass = function (elem, className) {
      elem.className = elem.className.split(' ').filter(function (v) {
        return v !== className;
      }).join(' ');
    };

    const addClass = function (elem, className) {
      elem.className += ' ' + className;
    };

    const hasClass = function (elem, className) {
      return new RegExp('(\\s|^)' + className + '(\\s|$)').test(elem.className);
    };

    const findByClassNameAndApply = function (ancestor, className, callback) {
      if (helpers.hasClass(ancestor, className)) {
        callback(ancestor);
      } else if (ancestor.getElementsByClassName) {
        Array.prototype.forEach.call(
          ancestor.getElementsByClassName(className), function (elem) {
            callback(elem);
          }
        );
      }
    };

    return {
      addClass: addClass,
      removeClass: removeClass,
      hasClass: hasClass,
      findByClassNameAndApply: findByClassNameAndApply
    };
  })();

  let getAssociatedTabPanel = function (tab) {
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
  };

  let activateTab = function (tab) {
    helpers.addClass(tab, chiActiveClass);
  };

  let showTabPanel = function (tab) {
    let tabPanel = getAssociatedTabPanel(tab);
    if (tabPanel) {
      helpers.addClass(tabPanel, chiActiveClass);
    }
  };

  let deactivateTab = function (tab) {
    helpers.removeClass(tab, chiActiveClass);
  };

  let hideTabPanel = function (tab) {
    let tabPanel = getAssociatedTabPanel(tab);
    if (tabPanel) {
      helpers.removeClass(tabPanel, chiActiveClass);
    }
  };

  let moveSlidingBorder = function (tab, tabsComponent) {
    let offset = 0;
    let size = 0;
    let found = false;
    const vertical = helpers.hasClass(tabsComponent, '-vertical');

    for (let i = 0; !found && i < tabsComponent.childNodes.length; i++) {
      let childNode = tabsComponent.childNodes[i];
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
      helpers.findByClassNameAndApply(tabsComponent, 'a-tabs__sliding-border', function (elem) {
        if (vertical) {
          elem.setAttribute('style', 'height:' + size + 'px;top:' + offset + 'px;');
        } else {
          elem.setAttribute('style', 'width:' + size + 'px;left:' + offset + 'px;');
        }
      });
    } else {
      console.error("Not found desplazamiento: " + offset + "px");
    }
  };

  let addSlidingBorder = function (tabsComponent) {
    const slidingBorder = document.createElement('li');
    slidingBorder.setAttribute('class', 'a-tabs__sliding-border');
    tabsComponent.appendChild(slidingBorder);
    let borderActivated = false;
    for (let i = 0; i < tabsComponent.childNodes.length && !borderActivated; i++) {
      if (helpers.hasClass(tabsComponent.childNodes[i], chiActiveClass)) {
        moveSlidingBorder(tabsComponent.childNodes[i], tabsComponent);
        borderActivated = true;
      }
    }
  };

  let initComponent = function (tabsComponent) {
    if (helpers.hasClass(tabsComponent, jsModifierClass)) {
      return;
    }

    tabsComponent.addEventListener('click', function (e) {

      let tab;
      let parentTab;

      for (let cur = e.target; cur && cur !== tabsComponent; cur = cur.parentNode) {
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

      if (!tab) {
        return;
      }

      if (helpers.hasClass(tab, chiActiveClass)) {

        Array.prototype.forEach.call(tab.getElementsByClassName(chiActiveClass), function (tabElement) {
          if (tabElement.nodeName === 'LI') {
            deactivateTab(tabElement);
            hideTabPanel(tabElement);
            showTabPanel(tab);
          }
        });

        return;

      }

      Array.prototype.forEach.call(this.getElementsByTagName('LI'), function (tabElement) {
        if (helpers.hasClass(tabElement, chiActiveClass) && tabElement !== parentTab) {
          deactivateTab(tabElement);
          hideTabPanel(tabElement);
        }
      });

      activateTab(tab);
      showTabPanel(tab);

      if (parentTab) {
        hideTabPanel(parentTab);
        activateTab(parentTab);
      }
      if (animation) {
        if (parentTab) {
          moveSlidingBorder(parentTab, tabsComponent);
        } else {
          moveSlidingBorder(tab, tabsComponent);
        }
      }

    });

    if (animation) {
      addSlidingBorder(tabsComponent);
    }

    helpers.addClass(tabsComponent, jsModifierClass);

  };

  let init = function (elem) {
    initComponent(elem);
  };

  let initAll = function () {
    Array.prototype.forEach.call(
      document.getElementsByClassName(componentClass), function (elem) {
        initComponent(elem);
      }
    );
  };

  return {
    init: init,
    initAll: initAll
  };

})();
