const AppLayoutCreator = require('../create/app-layout'); 

module.exports = {
  create: function(name, layout) {
    console.log('create app layout:', name, layout);
    new AppLayoutCreator(name, layout).generate(() => {
      console.log('created app layout', name, layout);
    })
  },
  install: function(name) {
    console.log('install app layout', name);
  },
  uninstall: function(name) {
    console.log('uninstall app layout', name);
  }
}