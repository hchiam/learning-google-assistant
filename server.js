// server.js is where your Node.js server app thing starts

// imports
const express = require('express');
const ApiAiAssistant = require('actions-on-google').ApiAiAssistant;
const request = require('request');

// will use Express.js for higher-level code
const app = express();
app.use(express.static('public')); // http://expressjs.com/en/starter/static-files.html

// handle webhook requests
app.post('/', function(req, res, next) {
  // get API.AI assistant request/response object
  const assistant = new ApiAiAssistant({request: req, response: res});
  // use assistant.tell() to send a message to API.AI (or use assistant.ask() to expect a response from API.AI)
  assistant.tell('Hey, this is a response from a minimal Node.js server for Google Assistant! ( See server.js at: https://glitch.com/edit/#!/minimal-node-server-for-google-assistant?path=server.js:72:0 )');
});

// listen for requests (need this for things to work!)
let server = app.listen(process.env.PORT);
