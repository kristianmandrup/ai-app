const app = require('../commands');
const program = require('commander');
const util = require('./util');

program
  // `install [app|layout|pwa] <names>` 
  .command('install <type> <names> [mountPath]')
  .description('Install an app, component typings, library, plugin or addon')
  .action((type, names, mountPath) => {
    names = util.normalize(names.split(','));
    // [app|layout|plugin|manifest]
    switch (type) {
      case 'app':
        return app.install(mountPath, ...names);
      case 'layout':
        return app.layout.install(mountPath, ...names);
      case 'pwa':
        return app.pwa.install(mountPath, ...names);
    }
  })

