export class CallbackQueue {
    static queueProcess(queue) {
        while (queue.length > 0) {
            const cb = queue.shift();
            cb();
        }
    }
}
