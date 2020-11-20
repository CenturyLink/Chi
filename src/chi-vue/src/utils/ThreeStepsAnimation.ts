enum AnimationState {
  Initialized,
  Preparing,
  Prepared,
  Starting,
  Started,
  Stopping,
  Stopped,
}

export class ThreeStepsAnimation {
  private status: AnimationState;
  private readonly prepareFunction: () => void;
  private readonly startFunction: () => void;
  private readonly endFunction: () => void;
  private readonly animationDuration: number;
  private startAnimationFrame!: number;
  private endTimeout!: number;
  private prepareAnimationFrame!: number;
  private forceStopped = false;

  constructor(
    prepareFunction: () => void,
    startFunction: () => void,
    endFunction: () => void,
    animationDuration: number
  ) {
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

  private start() {
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

  getState(): AnimationState {
    return this.status;
  }

  isStopped(): boolean {
    return this.status === AnimationState.Stopped;
  }

  wasForceStopped(): boolean {
    return this.forceStopped;
  }

  static animationFactory(
    prepareFunction: () => void,
    startFunction: () => void,
    endFunction: () => void,
    animationDuration: number
  ) {
    const animation = new ThreeStepsAnimation(prepareFunction, startFunction, endFunction, animationDuration);
    animation.prepare();
    return animation;
  }
}
