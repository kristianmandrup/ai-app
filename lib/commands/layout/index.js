module.exports = {
  create: function(name) {
    console.log('create app layout', name);
  },
  install: function(name) {
    console.log('install app layout', name);
  },
  uninstall: function(name) {
    console.log('uninstall app layout', name);
  }
}