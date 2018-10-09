let chi = (function() {
  "use strict";

  let help = (function(){
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

    const toggleClass = function (elem, className) {
      if (hasClass(elem, className)) {
        removeClass(elem, className);
      } else {
        addClass(elem, className);
      }
    };

    const getTarget = function (element) {

      let selector = element.dataset && element.dataset.target ? element.dataset.target.trim() : '';
      if (!selector) {
        const hrefTarget = element.getAttribute('href');
        selector = hrefTarget ? hrefTarget.trim() : '';
      }

      return selector ? document.querySelector(selector) : null;

    };

    const findAndApply = function (ancestor, className, callback) {
      if (hasClass(ancestor, className)) {
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
      removeClass: removeClass,
      addClass: addClass,
      hasClass: hasClass,
      toggleClass: toggleClass,
      getTarget: getTarget,
      findAndApply: findAndApply
    };

  })();

  return {
    h: help
  };

})();



chi.dropdown = (function () {
  "use strict";

  //configuration
  const moleculeClass = "m-dropdown";
  const componentClass = 'a-dropdown-trigger';
  const componentContentClass = 'a-dropdown';

  let locateContent = function (triggerElem) {

    let dropdownContent = chi.h.getTarget(triggerElem);
    if (dropdownContent) {
      return dropdownContent;
    }

    if (chi.h.hasClass(triggerElem.parentNode, moleculeClass)) {
      let contents = triggerElem.parentNode.getElementsByClassName(componentContentClass);
      if (contents && contents.length) {
        return contents[0];
      }
      return null;
    }

  };

  let triggerDropdown = function (triggerElem) {
    let dropdownContent = locateContent(triggerElem);
    if (dropdownContent) {
      chi.h.toggleClass(dropdownContent, "-active");
      chi.h.toggleClass(triggerElem, "-active");
    } else {
      console.err("Could not find conent for dropdown trigger. ");
    }

  };

  let initComponent = function(elem) {
    elem.addEventListener('click', function(){
      triggerDropdown(elem);
    });
    chi.h.toggleClass(document, 'chi');
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


chi.dropdown.initAll();
