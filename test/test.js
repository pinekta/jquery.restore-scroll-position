'use strinct';

var jsdom = require('node-jsdom')
var html = '<html><body><h1>h1_text</h1></body></html>';
var window = jsdom.jsdom(html).parentWindow;
var $ = require('jquery')(window)
var $cookie = require('jquery.cookie');
var assert = require('assert');

$(function () {
    console.log('test');
});
