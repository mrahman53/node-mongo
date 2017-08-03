"use strict";
import {DataServices} from './mongodata.js';
var express = require('express');
var request = require('request');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
var messageRouter = express.Router();

messageRouter.route('/message')
    .get(function (req, res) {
        var responseJson = {hello: "this is api !"};
        res.json(responseJson);
    });
app.use('/api', messageRouter);

// app.get('/', function (req, res) {
//     res.send('welcome to API');
// });

let dataServices = new DataServices();
var api = request.get('http://localhost:8080/STS-S1/webapi/getClientProfileResources/13475039266', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        dataServices.insertIntoMongoDB(api);
        console.log(body);
    }
});

app.listen(port, function () {
    console.log('Running on PORT:' + port);
});
