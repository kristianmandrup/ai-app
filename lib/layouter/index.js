const path = require('path');
const {Registry, utils} = require('ai-core');
const {readJson} = utils;
const generateLayout = require('./generate-layout');
const layouts = require('./layouts');

// abstract layout class
module.exports = class Layouter {
  constructor(layout) {
    layout = layouts.indexOf(layout) >= 0 ? layout : null;
    this.registry = new Registry();
    this.layout = layout || this.registry.defaultLayout;    

    let folder = path.join(__dirname, 'layouts', this.layout)
    let layoutsPath = path.join(folder, 'layouts.json');
    let srcLayoutPath = path.join(folder, 'src-layout.json');    

    this.generateLayout = generateLayout;
    this.srcLayoutSpec = readJson(srcLayoutPath);
    this.layoutSpecs = readJson(layoutsPath);    
  }

  get multi() {
    return this.registry.srcLayout === 'multi';
  }  
}