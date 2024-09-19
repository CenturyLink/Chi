export declare class Drag {
    private trigger;
    private elementToMove;
    private initialTransformStyling;
    private positionInitial;
    private positionEnd;
    private component;
    private screenWidth;
    private screenHeight;
    private auxClientCoord;
    private auxClientCoord2;
    private dragMouseDownHandler;
    private dragTouchHandler;
    private setPosition;
    private elementDragHandler;
    private elementDragOnTouchHandler;
    private closeDragElement;
    private setScreenWidth;
    private setScreenHeight;
    private handlerResize;
    constructor(trigger: HTMLElement, elementToMove: HTMLElement, component: any);
    dispose(): void;
}
