(function () {

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

  let getAssociatedTabPane = function (tab) {
    if (!tab.hasChildNodes()) {
      return null;
    }

    let anchor = tab.childNodes[0];
    if (
      !anchor.hasAttribute('href') ||
      anchor.getAttribute('href').indexOf('#') !== 0) {
      return null;
    }
    return document.getElementById(anchor.getAttribute('href').substr(1));
  };

  let showTab = function (tab) {
    helpers.addClass(tab, chiActiveClass);
    let tabPane = getAssociatedTabPane(tab);
    if (tabPane) {
      helpers.addClass(tabPane, chiActiveClass);
    }
  };

  let hideTab = function (tab) {
    helpers.removeClass(tab, chiActiveClass);
    let tabPane = getAssociatedTabPane(tab);
    if (tabPane) {
      helpers.removeClass(tabPane, chiActiveClass);
    }
  };

  let initComponent = function (tabsComponent) {
    if (helpers.hasClass(tabsComponent, jsModifierClass)) {
      return;
    }

    tabsComponent.addEventListener('click', function (e) {

      let tab = e.target;
      if (e.target.nodeName ==='A') {
        e.preventDefault();
        tab = e.target.parentNode;
      } else if (e.target.nodeName ==='LI') {
        console.error('Tab component incorrectly built.');
      }

      if (helpers.hasClass(tab, chiActiveClass)) {
        return;
      }
      Array.prototype.forEach.call(this.childNodes, function(tabElement) {
        if (helpers.hasClass(tabElement, chiActiveClass)) {
          hideTab(tabElement);
        }
      });
      showTab(tab);

    });

    helpers.addClass(tabsComponent, jsModifierClass);

  };

  document.addEventListener("DOMContentLoaded", function () {
    helpers.findByClassNameAndApply(
      document.body, componentClass, initComponent
    );
  });

})();

