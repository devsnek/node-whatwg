var DOM = require('jsdom').JSDOM;
var Encoding = require('whatwg-encoding');
var Fetch = require('node-fetch');
var Streams = require('web-streams-polyfill');
var Url = require('whatwg-url');
var Console = require('console');

module.exports = {
  HTML: null,
  DOM: DOM,
  Fullscreen: null,
  Notifications: null,
  Encoding: Encoding,
  Url: Url,
  Fetch: Fetch,
  MimeSniffing: null,
  XMLHttpRequest: null,
  Compatibility: null,
  Console: Console,
  Storage: null,
  Streams: Streams,
  Books: null,
  Figures: null,
  QuirksMode: null,
};
