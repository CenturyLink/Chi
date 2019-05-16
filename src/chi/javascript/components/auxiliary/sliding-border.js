import {Util} from "../../core/util.js";

const CLASS_SLIDING_BORDER='a-sliding-border';
const CLASS_SLIDING='-sliding';
const ANIMATION_DURATION=500;

class SlidingBorder {

  constructor (parentElem, isVertical, tagName) {
    this._animation = null;
    this._isVertical = isVertical ? true : false;
    this._parentElem = parentElem;
    this._tagName = tagName;
    this._lastBorderedElement = null;
    this._shown = false;

    this._findOrCreateSlidingBorder();
  }

  calculateStaticChildStyle (childElem) {
    const style = {
      top: '',
      left: '',
      height: '',
      width: ''
    };

    if (typeof childElem === 'undefined') {
      if (this._isVertical) {
        style.height = '0px';
        style.top = '0px';
        style.left = '';
        style.width = '';
      } else {
        style.width = '0px';
        style.left = '0px';
        style.height = '';
        style.top = '';
      }
    } else {
      if (this._isVertical) {
        style.height = Util.calculateExternalHeight(childElem, false) + 'px';
        style.top = Util.calculateDistance(
          this._parentElem, childElem, 'y', true
        ) + 'px';
      } else {
        style.width = Util.calculateExternalWidth(childElem, false) + 'px';
        style.left = Util.calculateDistance(
          this._parentElem, childElem, 'x', true
        ) + 'px';
      }
    }
    return style;
  }

  moveToLastChild () {
    if (this._lastBorderedElement) {
      this.moveSlidingBorderToChild(this._lastBorderedElement);
    }
  }

  moveSlidingBorderToChild (child) {
    this._lastBorderedElement = child;
    this.stop();
    if (!this._shown) {
      this.setSlidingBorder(
        this.calculateStaticChildStyle(child)
      );
    } else {
      const self = this;
      this._animation = Util.threeStepsAnimation (
        Util.noOp,
        function() {
          self.setSlidingBorder(
            self.calculateStaticChildStyle(child)
          );
        },
        function () {
          self.hide();
          self._animation = null;
        }, ANIMATION_DURATION
      );
    }
  }

  stop () {
    if (this._animation) {
      Util.stopThreeStepsAnimation(this._animation, false);
      this._animation = null;
    }
  }

  setSlidingBorder (style) {
    if (!this._slidingBorder) {
      this._findOrCreateSlidingBorder();
    }
    for(let property in style) {
      this._slidingBorder.style[property] = style[property];
    }
  }

  _findOrCreateSlidingBorder () {
    if (this._slidingBorder) {
      return;
    }
    let found = false;
    for (let i = 0; !found && i < this._parentElem.childNodes.length; i++) {
      let childNode = this._parentElem.childNodes[i];
      if (Util.hasClass(childNode, CLASS_SLIDING_BORDER)) {
        this._slidingBorder = childNode;
        found = true;
      }
    }
    if (!found) {
      this._slidingBorder = document.createElement(this._tagName);
      this._slidingBorder.setAttribute('class', CLASS_SLIDING_BORDER);
      this._parentElem.appendChild(this._slidingBorder);
    }
  }

  show () {
    if (!this._shown) {
      Util.addClass(this._parentElem, CLASS_SLIDING);
      this._shown = true;
    }
  }

  hide () {
    if (this._shown) {
      Util.removeClass(this._parentElem, CLASS_SLIDING);
      this._shown = false;
    }
  }

  removeSlidingBorder () {
    if (this._slidingBorder) {
      this._parentElem.removeChild(this._slidingBorder);
      this._slidingBorder = null;
    }
  }

  setVertical (newValue) {
    newValue = !!newValue;
    if (newValue !== this._isVertical) {
      this._isVertical = newValue;
      this._parentElem.removeChild(this._slidingBorder);
      this._findOrCreateSlidingBorder();
    }
  }

  dispose () {
    this.stop();
    this.hide();
    this.removeSlidingBorder();
    this._isVertical = null;
    this._parentElem = null;
    this._tagName = null;
    this._lastBorderedElement = null;
  }
}

export {SlidingBorder, CLASS_SLIDING_BORDER, ANIMATION_DURATION};
