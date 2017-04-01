# Ai-app [![Build Status](https://secure.travis-ci.org/kristianmandrup/ai-app.png?branch=master)](http://travis-ci.org/kristianmandrup/ai-app) [![NPM version](https://badge-me.herokuapp.com/api/npm/ai-app.png)](http://badges.enytc.com/for/npm/ai-app)

[![Greenkeeper badge](https://badges.greenkeeper.io/kristianmandrup/ai-app.svg)](https://greenkeeper.io/)

> App management for Aurelia

Will likely be integrated with [monterey](https://github.com/monterey-framework/monterey) at some point in the future.
For our vision, please see the [moneterey book](https://aurelia-ui-toolkits.gitbooks.io/monterey-overview/content/)

## Getting Started
Install the module with: `npm install ai-app`

```javascript
const app = require('ai-app');
```

## Terminology

- layout/skeleton: the folder structure of an app artifact, such as the /src folder (app) or the individualt sub-apps within.
- repo: repository
- pwa: Progressive Web App

## Commands API

```js
  create: function(srcLayout)
  install: function(name)
  uninstall: function(),
  bundle: function(name),
  unbundle: function(name),  
  skeleton: {
    create: function(name, skeleton) // create app skeleton
    install: function(name, repo),
    uninstall: function(name),
    bundle: function(name),
    unbundle: function(name)
  },
  pwa: {
    create: function(skeleton),
    install: function(repo),
    uninstall: function()
  }
```

Note: `pwa` is a Progressive Web App (manifest, service worker etc.) to make it almost function like a native app.

### CLI

- `ai-app -h` - index of commands and how to call them
- `ai-app create <app|skeleton|pwa> [name] [skeleton]` - create an app artifact
- `ai-app install <app|skeleton|pwa> [name]` - install an app artifact
- `ai-app uninstall <app|skeleton|pwa> [name]` - uninstall an app artifact
- `ai-app list <skeleton>` - list registered skeleton

### create

- `ai-app create app` - create the main src skeleton for the app
- `ai-app create app multi` - create the main src skeleton for the app using 'multi' app skeleton 
- `ai-app create app simple` - ...  using 'simple' app skeleton

- `ai-app create skeleton` - create an app skeleton
- `ai-app create skeleton user` - create an app skeleton named 'user'
- `ai-app create skeleton guest simple` - craete an app skeleton named 'guest' using 'simple' skeleton

- `ai-app create pwa` - create a pwa
- `ai-app create pwa simple` - create a pwa using 'simple' pwa skeleton

### install

- `ai-app install app kristianmandrup/my-app` - install src skeleton from repo 
- `ai-app install skeleton user kristianmandrup/my-app` - install app skeleton from repo
- `ai-app install pwa kristianmandrup/my-pwa` - install pwa from repo

### uninstall

- `ai-app uninstall app` - uninstall all sub apps
- `ai-app uninstall app user` - uninstall the sub-app user 
- `ai-app uninstall pwa` - remove the current pwa

## The players

### app

The app of an Aurelia CLI generate project lives in `/src`.
The app has a src skeleton, which typically consists of `resources`, `assets`, sub-apps etc.

The app is generated via the `app` type, either created from a registered/custom skeleton or downloaded from a repo.

### sub apps (skeleton)

For complex apps, it can make sense with a `multi` app skeleton, with at least the following sub-apps:
- guest (not logged in)
- user (logged in)
- admin (logged in with admin role)
- ...

Each of the sub-apps are generated with a specific skeleton. A sub-app can itself be a multi app skeleton 
for a truly nested application! 

Sub-apps are generated via the `skeleton` type, either created from a registered/custom skeleton or downloaded from a repo.

### app components

An app consists of sub-apps and components (generally referred to as `app components`) which can be nested. 
When installed, each app component can have an `install.json` file for installing its dependencies.
These are traversed depth first to generate the full `install.json` higher up in the hierarchy.

### Progressive web apps (pwa)

Finally, a `pwa` can be created, installed from repo or uninstalled. Just like apps, 
they can have different registered/custom layouts. 
A pwa is also an app component with an (optional) `install.json` file.

## Monterey integration

Ideally we would like a web interface where you can get an overview of registered app layouts and skeletons, 
pick and choose, then drag into your app to install it which runs the CLI commands underneath, gracefully
maintaining and updating all dependencies etc.  

## Contributing

Please submit all issues and pull requests to the [kristianmandrup/ai-app](https://github.com/kristianmandrup/ai-app) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/kristianmandrup/ai-app/issues).

## License 

The MIT License

Copyright (c) 2016, Kristian Mandrup

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

