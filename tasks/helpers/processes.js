const children = [];

export default class Processes {

  static addChild (process) {
    process.on('message', (msg) => {
      if (msg.action === 'STOP') {
        // Execute Graceful Termination code
        process.exit(0); // Exit Process with no Errors
      }
    });
    children.push(process);
  }

  static killAll () {
    while(children.length) {
      children.pop().kill();
    }
  }
}

process.on('SIGINT', () => {
  Processes.killAll();
});
