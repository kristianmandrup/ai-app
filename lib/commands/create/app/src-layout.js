// generates an app Layout
const {log, Registry} = require('ai-core');
const Layouter = require('../../../layouter');

// for an app in multi page src layout
class SrcLayout extends Layouter {
  constructor(layout) {
    super(layout);
    this.appPath = './src';
  }

  generate() {
    log.info(`creating ${this.layout} src app layout`);
    this.generateLayout(this.appPath, this.srcLayoutSpec);
  }
}