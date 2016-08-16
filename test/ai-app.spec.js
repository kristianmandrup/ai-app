/*
 * ai-app
 * https://github.com/kristianmandrup/ai-app
 *
 * Copyright (c) 2016, Kristian Mandrup
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var ai-app = require('../lib/ai-app.js');

describe('ai-app module', function() {
    describe('#awesome()', function() {
        it('should return a hello', function() {
            expect(ai-app.awesome('livia')).to.equal('hello livia');
        });
    });
});
