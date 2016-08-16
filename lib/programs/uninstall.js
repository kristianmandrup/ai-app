const app = require('../commands');
const program = require('commander');

program
  // `uninstall [app|typings|lib|component|plugin|addon] <names>`
  .command('uninstall <names> [mountPath]')
  .description('Uninstall apps')
  .action(function(names, mountPath = 'components') {
    switch (type) {
      case 'app':
        return app.uninstall(...names);
    }
  })
