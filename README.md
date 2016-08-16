# Ai-app [![Build Status](https://secure.travis-ci.org/kristianmandrup/ai-app.png?branch=master)](http://travis-ci.org/kristianmandrup/ai-app) [![NPM version](https://badge-me.herokuapp.com/api/npm/ai-app.png)](http://badges.enytc.com/for/npm/ai-app)

> App management for Aurelia

## Getting Started
Install the module with: `npm install ai-app`

```javascript
const app = require('ai-app');
```

## Documentation

```js
  create: function(name)
  install: function(name)
  uninstall: function(name)
  layout: {
    create: function(name) // create app layout
    install: function(name)
    uninstall: function(name)
  }
  pwa: {
    create: function(name)
  }
```

Note: `pwa` is a Progressive Web App (manifest, service worker etc.) to make it almost function like a native app.

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

