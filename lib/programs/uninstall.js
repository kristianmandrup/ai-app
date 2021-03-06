const app = require('../commands');
const program = require('commander');

function uninstall(names) {
  switch (type) {
    case 'app':
      return app.uninstall(...names);
  }
}

module.exports = uninstall;

program
  // `uninstall [app|typings|lib|component|plugin|addon] <names>`
  .command('uninstall <names> [mountPath]')
  .description('Uninstall apps')
  .action(uninstall)
