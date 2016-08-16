module.exports = {
  create: function(name) {
    console.log('create app', name);
  },
  install: function(name) {
    console.log('install app', name);
  },
  uninstall: function(name) {
    console.log('uninstall app', name);
  },
  layout: require('./layout'),
  pwa: require('./pwa'),
}