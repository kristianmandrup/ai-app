const app = require('../commands');
const program = require('commander');

module.exports = function(names) {
  switch (type) {
    case 'app':
      return app.uninstall(...names);
  }
}

program
  // `uninstall [app|typings|lib|component|plugin|addon] <names>`
  .command('uninstall <names> [mountPath]')
  .description('Uninstall apps')
  .action(uninstall)
