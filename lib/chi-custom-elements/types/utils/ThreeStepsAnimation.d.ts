declare enum AnimationState {
    Initialized = 0,
    Preparing = 1,
    Prepared = 2,
    Starting = 3,
    Started = 4,
    Stopping = 5,
    Stopped = 6
}
export declare class ThreeStepsAnimation {
    private status;
    private readonly prepareFunction;
    private readonly startFunction;
    private readonly endFunction;
    private readonly animationDuration;
    private startAnimationFrame;
    private endTimeout;
    private prepareAnimationFrame;
    private forceStopped;
    constructor(prepareFunction: () => void, startFunction: () => void, endFunction: () => void, animationDuration: number);
    prepare(): void;
    private start;
    stop(): void;
    end(): void;
    getState(): AnimationState;
    isStopped(): boolean;
    wasForceStopped(): boolean;
    static animationFactory(prepareFunction: () => void, startFunction: () => void, endFunction: () => void, animationDuration: number): ThreeStepsAnimation;
}
export {};
