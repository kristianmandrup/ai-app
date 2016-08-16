// generates an app Layout
const {path, log} = require('ai-core').utils;
const Layouter = require('../../../layouter');

// for an app in multi page src layout
module.exports = class AppLayout extends Layouter {
  constructor(name, layout) {    
    super(layout);
    this.name = name;
  }

  get appsBasePath() {
    return this.multi ? './src/apps' : './src';
  }
  
  get appPath() {
    return path.join(this.appsBasePath, this.name);
  }

  generate() {
    log.info(`creating ${this.layout} layout for ${this.name} app`);
    this.generateLayout(this.appPath, this.srcLayoutSpec);
  }
}