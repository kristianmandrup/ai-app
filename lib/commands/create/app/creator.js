const questions = require('./questions');
const {utils, Registry} = require('ai-core');
const {log, ask} = utils;
const SrcLayout = require('./src-layout');

module.exports = class AppCreator {
  constructor(layout) {
    this.registry = new Registry();
    this.layout = layout;
  }

  create(done) {
    // TODO: use name by default!
    this.selectLayouts(layouts => {
      this.layouts = layouts;
      this.updateRegistry();
      this.generateSrcLayout();      
      if (done) {
        done(layouts.srcLayout);
      }
    })
  }

  generateSrcLayout() {
    new SrcLayout(this.layouts.srcLayout).generate();
  }

  selectLayouts(cb) {
    return this.layout ? cb({
        defaultLayout: this.layout,
        srcLayout: this.layout
      }) : this.askSrcLayout(cb); 
  }

  updateRegistry(config) {
    this.registry.write(config);
  }

  askSrcLayout(cb) {     
    ask(questions.srcLayout).then(answers => {
      cb({
        defaultLayout: answers.defaultLayout,
        srcLayout: answers.srcLayout
      })
    });
  }
}