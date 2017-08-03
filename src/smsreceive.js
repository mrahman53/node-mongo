/**
 * Created by mrahman on 7/21/17.
 */
var http = require('http');
var express = require('express');
var twilio = require('twilio');

var app = express();

app.post('/sms', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    twiml.message('Yes, i am at home to receive package !');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(1337, function () {
    console.log("Express server listening on port 1337");
});