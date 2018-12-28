import {Util} from "../util";

const CLASS_SLIDING_BORDER='a-sliding-border';
const ANIMATION_DURATION=500;

class SlidingBorder {

  constructor (parentElem, isVertical, tagName) {
    this._parentElem = parentElem;
    this._isVertical = isVertical ? true : false;
    this._tagName = tagName;

    this._findOrCreateSlidingBorder();
  }

  calculateStaticChildStyle (childElem) {
    let offset = 0;
    let size = 0;
    let found = false;

    for (let i = 0; !found && i < this._parentElem.childNodes.length; i++) {
      let childNode = this._parentElem.childNodes[i];
      let style = window.getComputedStyle(childNode);
      offset += parseInt(
        this._isVertical ?
        style.marginTop :
        style.marginLeft,
        10
      );
      if (childNode === childElem) {
        size = this._isVertical ?
          childNode.childNodes[0].scrollHeight :
          childNode.childNodes[0].scrollWidth;
        found = true;
      } else {
        offset += this._isVertical ?
          childNode.scrollHeight :
          childNode.scrollWidth;
      }
    }

    if (found) {
      const style = {};
      if (this._isVertical) {
        style.height = size + 'px';
        style.top = offset + 'px';
        style.left = '';
        style.width = '';
      } else {
        style.width = size + 'px';
        style.left = offset + 'px';
        style.height = '';
        style.top = '';
      }
      return style;
    } else {
      throw "Not found offset: " + offset + "px";
    }
  }

  moveSlidingBorder (style) {
    if (!this._slidingBorder) {
      this._findOrCreateSlidingBorder();
    }
    for(let property in style) {
      this._slidingBorder.style[property] = style[property];
    }
  }

  _findOrCreateSlidingBorder () {
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

  setVertical (newValue) {
    newValue = newValue ? true : false;
    if (newValue !== this._isVertical) {
      this._isVertical = newValue;
      this._parentElem.removeChild(this._slidingBorder);
      this._findOrCreateSlidingBorder();
    }
  }

  dispose () {
    this._parentElem.removeChild(this._slidingBorder);
    this._parentElem = null;
    this._isVertical = null;
    this._tagName = null;
    this._slidingBorder = null;
  }
}

export {SlidingBorder, CLASS_SLIDING_BORDER, ANIMATION_DURATION};
