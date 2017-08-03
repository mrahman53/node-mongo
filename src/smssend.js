/**
 * Created by mrahman on 7/21/17.
 */

var accountSid = 'ACa7cceff4b47f26adc6e9538858d80892';
var authToken = '36fe17953cfafde3c6f4837e8c6bfe46';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "+13475039266",
    from: "+16513141569",
    body: "This is the delivery package coming your way.",
}, function(err, message) {
    console.log(message.sid);
});