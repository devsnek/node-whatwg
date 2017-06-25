var DOM = require('jsdom').JSDOM;
var Fetch = require('node-fetch');
var Streams = require('web-streams-polyfill');
var Url = require('url').Url;
var Console = require('console');

module.exports = {
  HTML: null,
  DOM: DOM,
  Fullscreen: null,
  Notifications: null,
  Encoding: null,
  Url: Url,
  Fetch: Fetch,
  MimeSniffing: null,
  XMLHttpRequest: null,
  Compatability: null,
  Console: Console,
  Storage: null,
  Streams: Streams,
  Books: null,
  Figures: null,
  QuirksMode: null,
};
