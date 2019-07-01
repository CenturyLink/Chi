
export class CallbackQueue {

  static queueProcess(queue): void {
    while (queue.length > 0) {
      const cb = queue.shift();

      cb();
    }
  }
}
