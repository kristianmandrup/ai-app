const AppCreator = require('./app/creator')

module.exports = function create(name, layout) {
  console.log('create app', name);
  new AppCreator(layout).create(name => {
    console.log(`app src layout ${name} created`);
  })
}