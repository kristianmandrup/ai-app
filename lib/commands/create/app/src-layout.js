// generates an app Layout
const log = require('../log');
const c = log.c;
const generateLayout = require('./utils');
const Layouter = require('./layouter');

const inquirer = require('inquirer');
const questions = require('./questions');
const Registry = require('../registry');


module.exports = class AppManager {
  constructor() {
    this.registry = new Registry();
  }

  execute(done) {
    this.askSrcLayout(srcLayout => {
      this.registry.write({
        defaultLayout: defaultLayout,
        srcLayout: srcLayout
      })

      new SrcLayout(layout).generate();
      if (done) {
        return done(srcLayout);
      }
    })
  }

  askSrcLayout(app, done) {
    inquirer.prompt(questions.srcLayout).then(answers => {
      done(answers.layout);
    });
  }
}

// for an app in multi page src layout
class SrcLayout extends Layouter {
  constructor(layout) {
    super(layout);
  }

  generate() {
    log.info(`creating ${this.layout} src app layout`);

    generateLayout('./src', this.srcLayoutSpec);
  }
}