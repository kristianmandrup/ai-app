const app = require('../commands');
const program = require('commander');
const util = require('./util');

function install(type, names, mountPath) {
  names = util.normalize(names.split(','));
  // [app|layout|plugin|manifest]
  switch (type) {
    case 'app':
      return app.install(mountPath, ...names);
    case 'skeleton':
      return app.skeleton.install(mountPath, ...names);
    case 'pwa':
      return app.pwa.install(mountPath, ...names);
  }
}

module.exports = install;

program
  // `install [app|skeleton|pwa] <names>` 
  .command('install <type> <names> [mountPath]')
  .description('Install an app, component typings, library, plugin or addon')
  .action(install)

