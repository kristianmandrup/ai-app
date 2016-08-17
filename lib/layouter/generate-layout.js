const path = require('path');
const fs = require('fs-extra');

// TODO: make into a class

function getLayout(layout) {
  if (typeof layout === 'string') {
    if (layout.match(/^layout:/)) {
      return layout.split(':')[1];
    } 
  } 
}

module.exports = function generateLayout(basePath, layoutSpec, parentFolder) {
  for (let folder of Object.keys(layoutSpec)) {

    let folderPath = path.join(basePath, folder);
    let layout = layoutSpec[folder];
    fs.mkdirsSync(folderPath);
    let layoutName = getLayout(layout);
    if (layoutName) {
      let layoutConfig = this.layoutSpecs[layoutName];
      generateLayout(folderPath, layoutConfig)
    } else {
      if (typeof layout === 'object') {
        generateLayout(folderPath, layout, folder);
      }
    }     
  }
}

