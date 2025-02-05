export var AnimationState;
(function (AnimationState) {
    AnimationState[AnimationState["Initialized"] = 0] = "Initialized";
    AnimationState[AnimationState["Preparing"] = 1] = "Preparing";
    AnimationState[AnimationState["Prepared"] = 2] = "Prepared";
    AnimationState[AnimationState["Starting"] = 3] = "Starting";
    AnimationState[AnimationState["Started"] = 4] = "Started";
    AnimationState[AnimationState["Stopping"] = 5] = "Stopping";
    AnimationState[AnimationState["Stopped"] = 6] = "Stopped";
    AnimationState[AnimationState["ForceStopped"] = 7] = "ForceStopped";
})(AnimationState || (AnimationState = {}));
