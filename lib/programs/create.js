const app = require('../commands');
const program = require('commander');

module.exports = function create(type, name, layout) {
  // [app|layout|pwa]
  switch (type) {
    case 'app':
      return app.create(name);
    case 'pwa':
      return app.pwa.create();
    case 'layout':
      return app.layout.create(name, layout);
  }
}

program
  // `create [app|layout|plugin|manifest] <name>`
  .command('create <type> [name] [layout]')
  .description('Create app pwa or layout')
  .action(create);