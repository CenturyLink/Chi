let self: Drag;

export class Drag {
  private trigger: HTMLElement;
  private elementToMove: HTMLElement;
  private initialTransformStyling: string;
  private pos1: number;
  private pos2: number;
  private pos3: number;
  private pos4: number;
  private component: any;

  constructor(trigger: HTMLElement, elementToMove: HTMLElement, component: any) {
    self = this;
    this.trigger = trigger;
    this.elementToMove = elementToMove;
    this.component = component;
    this.trigger.addEventListener('mousedown', (e) => this.dragMouseDown(e));
    this.trigger.addEventListener('touchstart', (e) => this.dragTouch(e));
  }

  dragMouseDown(e: MouseEvent) {
    e.preventDefault();
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    this.initialTransformStyling = window.getComputedStyle(this.elementToMove)['transform'];

    document.addEventListener('mouseup', this.closeDragElement);
    document.addEventListener('mousemove', this.elementDrag);
  }

  dragTouch(e: TouchEvent) {
    e.preventDefault();
    this.pos3 = e.touches[0].clientX;
    this.pos4 = e.touches[0].clientY;
    this.initialTransformStyling = window.getComputedStyle(this.elementToMove)['transform'];

    this.trigger.addEventListener('touchmove', this.elementDragOnTouch);
  };

  setPosition(clientX: number, clientY: number) {
    this.pos1 = this.pos3 - clientX;
    this.pos2 = this.pos4 - clientY;
    this.pos3 = clientX;
    this.pos4 = clientY;
    this.elementToMove.style.transform = this.initialTransformStyling;
    this.elementToMove.style.top = this.elementToMove.offsetTop - this.pos2 + 'px';
    this.elementToMove.style.left = this.elementToMove.offsetLeft - this.pos1 + 'px';
  };

  elementDrag(e: MouseEvent) {
    e.preventDefault();
    if (self.component._popper) {
      self.component._popper.destroy();
      self.component._popper = null;
    }
    self.setPosition(e.clientX, e.clientY);
  };

  elementDragOnTouch(e: TouchEvent) {
    e.preventDefault();
    const touch = e.targetTouches[0];

    if (self.component._popper) {
      self.component._popper.destroy();
      self.component._popper = null;
    }
    self.setPosition(touch.clientX, touch.clientY);
  };

  closeDragElement() {
    document.removeEventListener('mouseup', self.closeDragElement);
    document.removeEventListener('mousemove', self.elementDrag);
  };

  dispose() {
    document.removeEventListener('mouseup', self.closeDragElement);
    document.removeEventListener('mousemove', self.elementDrag);
    this.trigger = null;
    this.elementToMove = null;
    this.initialTransformStyling = null;
    this.pos1 = null;
    this.pos2 = null;
    this.pos3 = null;
    this.pos4 = null;
  }
}
