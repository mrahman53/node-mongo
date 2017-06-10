var express = require('express');
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

app.get('/', function (req, res) {
    res.send('welcome to API');
});

app.listen(port, function () {
    console.log('Running on PORT:' + port);
});
