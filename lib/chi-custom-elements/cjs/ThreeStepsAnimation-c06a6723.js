'use strict';

var AnimationState;
(function (AnimationState) {
    AnimationState[AnimationState["Initialized"] = 0] = "Initialized";
    AnimationState[AnimationState["Preparing"] = 1] = "Preparing";
    AnimationState[AnimationState["Prepared"] = 2] = "Prepared";
    AnimationState[AnimationState["Starting"] = 3] = "Starting";
    AnimationState[AnimationState["Started"] = 4] = "Started";
    AnimationState[AnimationState["Stopping"] = 5] = "Stopping";
    AnimationState[AnimationState["Stopped"] = 6] = "Stopped";
})(AnimationState || (AnimationState = {}));
class ThreeStepsAnimation {
    constructor(prepareFunction, startFunction, endFunction, animationDuration) {
        this.forceStopped = false;
        this.prepareFunction = prepareFunction;
        this.startFunction = startFunction;
        this.endFunction = endFunction;
        this.animationDuration = animationDuration;
        this.status = AnimationState.Initialized;
    }
    prepare() {
        this.status = AnimationState.Preparing;
        this.prepareAnimationFrame = window.requestAnimationFrame(() => {
            if (this.status !== AnimationState.Preparing) {
                return;
            }
            this.prepareFunction();
            this.status = AnimationState.Prepared;
            this.startAnimationFrame = window.requestAnimationFrame(() => {
                this.start();
            });
        });
    }
    start() {
        if (this.status !== AnimationState.Prepared) {
            return;
        }
        this.status = AnimationState.Starting;
        this.startFunction();
        this.status = AnimationState.Started;
        this.endTimeout = window.setTimeout(() => {
            this.end();
        }, this.animationDuration);
    }
    stop() {
        if (!this.isStopped()) {
            window.cancelAnimationFrame(this.prepareAnimationFrame);
            window.cancelAnimationFrame(this.startAnimationFrame);
            window.clearTimeout(this.endTimeout);
            this.status = AnimationState.Stopped;
            this.forceStopped = true;
        }
    }
    end() {
        if (this.isStopped()) {
            return;
        }
        this.status = AnimationState.Stopping;
        this.endFunction();
        this.status = AnimationState.Stopped;
    }
    getState() {
        return this.status;
    }
    isStopped() {
        return this.status === AnimationState.Stopped;
    }
    wasForceStopped() {
        return this.forceStopped;
    }
    static animationFactory(prepareFunction, startFunction, endFunction, animationDuration) {
        const animation = new ThreeStepsAnimation(prepareFunction, startFunction, endFunction, animationDuration);
        animation.prepare();
        return animation;
    }
}

exports.ThreeStepsAnimation = ThreeStepsAnimation;
