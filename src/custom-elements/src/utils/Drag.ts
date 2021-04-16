import { MouseCursorPosition } from '../constants/constants';

export class Drag {
  private trigger: HTMLElement;
  private elementToMove: HTMLElement;
  private initialTransformStyling: string;
  private positionInitial: MouseCursorPosition = {
    x: 0,
    y: 0
  };
  private positionEnd: MouseCursorPosition = {
    x: 0,
    y: 0
  };
  private component: any;
  private dragMouseDownHandler = (e: MouseEvent) => {
    e.preventDefault();
    this.positionInitial.x = e.clientX;
    this.positionInitial.y = e.clientY;
    this.initialTransformStyling = window.getComputedStyle(this.elementToMove)['transform'];

    document.addEventListener('mouseup', this.closeDragElement);
    document.addEventListener('mousemove', this.elementDragHandler);
  };
  private dragTouchHandler = (e: TouchEvent) => {
    e.preventDefault();
    this.positionInitial.x = e.touches[0].clientX;
    this.positionInitial.y = e.touches[0].clientY;
    this.initialTransformStyling = window.getComputedStyle(this.elementToMove)['transform'];

    this.trigger.addEventListener('touchmove', this.elementDragOnTouchHandler);
  };

  private setPosition = (clientX: number, clientY: number) => {
    this.positionEnd.x = this.positionInitial.x - clientX;
    this.positionEnd.y = this.positionInitial.y - clientY;
    this.positionInitial.x = clientX;
    this.positionInitial.y = clientY;
    this.elementToMove.style.transform = this.initialTransformStyling;
    this.elementToMove.style.top = this.elementToMove.offsetTop - this.positionEnd.y + 'px';
    this.elementToMove.style.left = this.elementToMove.offsetLeft - this.positionEnd.x + 'px';
  };
  private elementDragHandler = (e: MouseEvent) => {
    e.preventDefault();
    if (this.component._popper) {
      this.component._popper.destroy();
      this.component._popper = null;
    }
    this.setPosition(e.clientX, e.clientY);
  };
  private elementDragOnTouchHandler = (e: TouchEvent) => {
    e.preventDefault();
    const touch = e.targetTouches[0];

    if (this.component._popper) {
      this.component._popper.destroy();
      this.component._popper = null;
    }
    this.setPosition(touch.clientX, touch.clientY);
  };
  private closeDragElement = () => {
    document.removeEventListener('mouseup', this.closeDragElement);
    document.removeEventListener('mousemove', this.elementDragHandler);
  };

  constructor(trigger: HTMLElement, elementToMove: HTMLElement, component: any) {
    this.trigger = trigger;
    this.elementToMove = elementToMove;
    this.component = component;
    this.trigger.addEventListener('mousedown', this.dragMouseDownHandler);
    this.trigger.addEventListener('touchstart', this.dragTouchHandler);
  }

  dispose() {
    document.removeEventListener('mouseup', this.closeDragElement);
    document.removeEventListener('mousemove', this.elementDragHandler);
    this.trigger = null;
    this.elementToMove = null;
    this.initialTransformStyling = null;
    this.positionEnd = null;
    this.positionInitial = null;
  }
}
