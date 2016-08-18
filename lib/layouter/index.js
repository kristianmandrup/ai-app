const path = require('path');
const {Registry, utils} = require('ai-core');
const {readJson, log} = utils;
const generateLayout = require('./generate-layout');
const layouts = require('./layouts');

// abstract layout class
module.exports = class Layouter {
  constructor(layout) {    
    this.registry = new Registry();
    this.layout = this.registeredLayout(layout);
    if (!layout) {
      log.info(`layout ${layout} not registered. Using default layout: ${this.defaultLayout} instead`);
      this.layout = this.defaultLayout;
    }
        
    this.generateLayout = generateLayout;
    this.srcLayoutSpec = readJson(this.srcLayoutPath);
    this.layoutSpecs = readJson(this.layoutsPath);    
  }

  get folder() {
    return path.join(__dirname, 'layouts', this.layout);
  }
  
  get layoutsPath() { 
    return path.join(folder, 'layouts.json');
  }
  
  get srcLayoutPath() {
    return path.join(folder, 'src-layout.json');
  }    

  get registeredLayout(layout) {
    return layouts.indexOf(layout) >= 0 ? layout : null; 
  }
   
  get defaultLayout() {
    return this.registry.defaultLayout;
  }    

  get multi() {
    return this.registry.srcLayout === 'multi';
  }  
}