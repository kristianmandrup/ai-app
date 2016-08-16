module.exports = {
  create: function(name) {
    console.log('create app', name);
  },
  layout: function(name) {
    console.log('create app layout', name);
  },
  install: function(name) {
    console.log('install app', name);
  },
  manifest: function(name) {
    console.log('create manifest', name);
  }
}