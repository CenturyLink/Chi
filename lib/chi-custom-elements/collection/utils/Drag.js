export class Drag {
    trigger;
    elementToMove;
    initialTransformStyling;
    positionInitial = {
        x: 0,
        y: 0,
    };
    positionEnd = {
        x: 0,
        y: 0,
    };
    component;
    screenWidth = this.setScreenWidth();
    screenHeight = this.setScreenHeight();
    auxClientCoord = Number.MAX_SAFE_INTEGER;
    auxClientCoord2 = Number.MIN_SAFE_INTEGER;
    dragMouseDownHandler = (e) => {
        e.preventDefault();
        this.positionInitial.x = e.clientX;
        this.positionInitial.y = e.clientY;
        this.initialTransformStyling = window.getComputedStyle(this.elementToMove)['transform'];
        document.addEventListener('mouseup', this.closeDragElement);
        document.addEventListener('mousemove', this.elementDragHandler);
    };
    dragTouchHandler = (e) => {
        e.preventDefault();
        this.positionInitial.x = e.touches[0].clientX;
        this.positionInitial.y = e.touches[0].clientY;
        this.initialTransformStyling = window.getComputedStyle(this.elementToMove)['transform'];
        this.trigger.addEventListener('touchmove', this.elementDragOnTouchHandler);
    };
    setPosition = (clientX, clientY, rect) => {
        this.positionEnd.x = this.positionInitial.x - clientX;
        this.positionEnd.y = this.positionInitial.y - clientY;
        this.positionInitial.x = clientX;
        this.positionInitial.y = clientY;
        this.elementToMove.style.transform = this.initialTransformStyling;
        if (rect.top < 0 && this.auxClientCoord > clientY) {
            this.auxClientCoord = clientY;
        }
        else if (rect.left < 0 && this.auxClientCoord > clientX) {
            this.auxClientCoord = clientX;
        }
        else if (rect.right > this.screenWidth && this.auxClientCoord2 < clientX) {
            this.auxClientCoord2 = clientX;
        }
        else if (rect.bottom > this.screenHeight && this.auxClientCoord2 < clientY) {
            this.auxClientCoord2 = clientY;
        }
        else {
            this.elementToMove.style.top = this.elementToMove.offsetTop - this.positionEnd.y + 'px';
            this.elementToMove.style.left = this.elementToMove.offsetLeft - this.positionEnd.x + 'px';
            this.auxClientCoord = Number.MAX_SAFE_INTEGER;
            this.auxClientCoord2 = Number.MIN_SAFE_INTEGER;
        }
    };
    elementDragHandler = (e) => {
        e.preventDefault();
        if (this.component._popper) {
            this.component._popper.destroy();
            this.component._popper = null;
        }
        if (!this.elementToMove) {
            return;
        }
        const rect = this.elementToMove.getBoundingClientRect();
        this.setPosition(e.clientX, e.clientY, rect);
    };
    elementDragOnTouchHandler = (e) => {
        e.preventDefault();
        const touch = e.targetTouches[0];
        if (this.component._popper) {
            this.component._popper.destroy();
            this.component._popper = null;
        }
        if (!this.elementToMove) {
            return;
        }
        const rect = this.elementToMove.getBoundingClientRect();
        this.setPosition(touch.clientX, touch.clientY, rect);
    };
    closeDragElement = () => {
        document.removeEventListener('mouseup', this.closeDragElement);
        document.removeEventListener('mousemove', this.elementDragHandler);
    };
    setScreenWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    setScreenHeight() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
    handlerResize = () => {
        if (!this.elementToMove) {
            return;
        }
        const rect = this.elementToMove.getBoundingClientRect();
        this.screenWidth = this.setScreenWidth();
        this.screenHeight = this.setScreenHeight();
        if (rect.right >= this.screenWidth) {
            this.elementToMove.style.left = Math.abs(rect.width + rect.width / 2 - this.screenWidth) + 'px';
        }
        else if (rect.bottom >= this.screenHeight) {
            this.elementToMove.style.top = Math.abs(rect.height * 2 - this.screenHeight) + 'px';
        }
    };
    constructor(trigger, elementToMove, component) {
        this.trigger = trigger;
        this.elementToMove = elementToMove;
        this.component = component;
        this.trigger.addEventListener('mousedown', this.dragMouseDownHandler);
        this.trigger.addEventListener('touchstart', this.dragTouchHandler);
        window.addEventListener('resize', this.handlerResize);
    }
    dispose() {
        document.removeEventListener('mouseup', this.closeDragElement);
        document.removeEventListener('mousemove', this.elementDragHandler);
        window.removeEventListener('resize', this.handlerResize);
        this.trigger = null;
        this.elementToMove = null;
        this.initialTransformStyling = null;
        this.positionEnd = null;
        this.positionInitial = null;
    }
}
