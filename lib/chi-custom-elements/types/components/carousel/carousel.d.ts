import { EventEmitter } from '../../stencil-public-runtime';
import { CAROUSEL_DIRECTION } from '../../constants/constants';
export declare class Carousel {
    el: HTMLElement;
    /**
     * To render Carousel with dot controllers
     */
    dots: boolean;
    /**
     * To set the autoplay for the carousel
     */
    autoplay: boolean;
    /**
     * To set the interval for the autoplay
     */
    interval: number;
    /**
     * To render Carousel with pagination indicators
     */
    pagination: boolean;
    /**
     * To render Carousel without Button Controllers
     */
    noButtonControllers: boolean;
    /**
     * To render Carousel with a single item per view
     */
    single: boolean;
    /**
     *  View
     */
    view: number;
    /**
     *  Number of views
     */
    numberOfViews: number;
    /**
     *  Max number of items shown in a view
     */
    maxItemsShown: number;
    customPrevButton: boolean;
    customNextButton: boolean;
    autoplayInterval: number;
    transformX: number;
    /**
     * Triggered when the user navigates to another view
     */
    chiViewChange: EventEmitter<number>;
    private wrapper?;
    private scrollBreakpoints;
    private fullScrollLength;
    private animation;
    private _animationClasses;
    private moveEndPosition;
    private moveStartPosition;
    private isDragging;
    private currentStep;
    private remainingSpace;
    private isLastView;
    private isLastStep;
    private restItemsShown;
    private resizeHandler;
    _calculateCarouselWidth(): void;
    connectedCallback(): void;
    componentDidLoad(): void;
    componentWillOnload(): void;
    _autoPlay(isPaused: boolean): void;
    _calculateView(direction: CAROUSEL_DIRECTION, customNextStep?: number): void;
    _moveView(customNextStep: number, itemWidth: number, nextStep: number, direction: CAROUSEL_DIRECTION, currentLastView: boolean): void;
    _moveLastView(customNextStep: number, remainingItems: number, itemWidth: number): void;
    _bounceView(direction: CAROUSEL_DIRECTION): void;
    prevView(): void;
    nextView(): void;
    touchEnd: () => void;
    touchMove: (e: TouchEvent) => void;
    isMoveToNext(): boolean;
    getMoveDelta(): number;
    getWrapperTransform(): string;
    touchStart: (e: TouchEvent) => void;
    getPositionX: (event: TouchEvent) => number;
    _applySizeToItems(): void;
    _goToView(view: number): void;
    _getCarouselItems(): NodeListOf<HTMLElement>;
    _areThereMultipleItems(): boolean;
    _getItemVisibility(index: any): boolean;
    setVisibleClass(): void;
    _getStatComponent(): HTMLElement;
    _getGap(): number;
    render(): any;
}
