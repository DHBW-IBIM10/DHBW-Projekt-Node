var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');

var httpsOptions = {
    key: fs.readFileSync(__dirname + '/privatekey.pem')
    , cert: fs.readFileSync(__dirname + '/certificate.pem')
};

var app = express();
var server = http.createServer(app);
var secureServer = https.createServer(httpsOptions, app);
var io = require('socket.io').listen(secureServer);

server.listen(8888);
secureServer.listen(4431);


app.use(express.static(__dirname + '/'));

app.configure(function(){
    // middleware to parse JSON request bodies
    app.use(express.bodyParser());
});

// function to collect all invalid fields in an array using the JSON notation
function addToInvalidFields(arr, fName, fValue) {
    arr.push({"name": fName, "value": fValue});
}

app.post('/pricecalculation', function (req, res) {

    var JSONdata = {price: Math.round(Math.random()*(req.body[0].SummeInput-req.body[0].BehaltInput))};
    console.log(JSON.stringify(JSONdata));

    res.contentType("application/json");
    res.send(200, JSON.stringify(JSONdata));

});

// catch the request for xyz
app.post('/insurances', function (req, res) {

    console.log("Request received.");

    // set validation variable true and set it false when one of the validations fails
    var valid = true;
    // create array for the collection of invalid fields
    var invalidFields = new Array();

    for(var i = 0; i < req.body.length; i++) {
        console.log(req.body[i].name);

        switch(req.body[i].name) {
            case 'address':
                if(!(req.body[i].value).match(/(Mr.|Mrs.|Ms.)?/i)) {
                    valid = false;
                    addToInvalidFields(invalidFields, req.body[i].name,req.body[i].value);
                }
                break;
            case 'title':
                if(!(req.body[i].value).match(/(Sir|Dipl.|Dr.|Prof. Dr.|Dr. h.c.|)?/i)) {
                    valid = false;
                }
                break;
            case 'surname':
                if(!(req.body[i].value).match(/^[A-ZÄÖÜ][a-zäöüA-ZÄÖÜ\-' ]*[a-zäöüA-ZÄÖÜ ]$/i)) {
                    valid = false;
                }
                break;
            case 'name':
                if(!(req.body[i].value).match(/^([^ \x21-\x26\x28-\x2C\x2E-\x40\x5B-\x60\x7B-\xAC\xAE-\xBF\xF7\xFE]+)$/i)) {
                    valid = false;
                }
                break;
            case 'birthday':
                if(!(req.body[i].value).match(/^([0-9]{0,2}).([0-9]{0,2}).([0-9]{0,4})$/)) {
                    valid = false;
                }
                break;
            case 'maritalStatus':
                if(!(req.body[i].value).match(/(single|married|divorced|widowed)?/i)) {
                    valid = false;
                }
                break;
            case 'streetNr':
                if(!(req.body[i].value).match(/^(([a-zA-ZäöüÄÖÜ]\D*)\s+\d+?\s*.*)$/i)) {
                    valid = false;
                }
                break;
            case 'zip':
                if(!(req.body[i].value).match(/^\d{5}$|^[0-9]{5}(-[0-9]{4})?$|^([A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]|[A-HK-Y][0-9]([0-9]|[ABEHMNPRV-Y]))|[0-9][A-HJKS-UW])\ [0-9][ABD-HJLNP-UW-Z]{2}|(GIR\ 0AA)|(SAN\ TA1)|(BFPO\ (C\/O\ )?[0-9]{1,4})|((ASCN|BBND|[BFS]IQQ|PCRN|STHL|TDCU|TKCA)\ 1ZZ))$/)) {
                    valid = false;
                }
                break;
            case 'city':
                if(!(req.body[i].value).match(/^[A-ZAÖÜ][a-zäöüA-ZÄÖÜ\-' ]*[a-zäöüA-ZÄÖÜ ]$/i)) {
                    valid = false;
                }
                break;
            case 'career':
                if(!(req.body[i].value).match(/^[A-ZAÖÜ][a-zaöüA-ZAÖÜ\-' ]*[a-zaöüA-ZAÖÜ ]$/i)) {
                    valid = false;
                }
                break;
            case 'amountInsured':
                if(!(req.body[i].value).match(/^\€?([1-9]{1}[0-9]{0,2}(\.[0-9]{3})*(\,[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\,[0-9]{0,2})?|0(\,[0-9]{0,2})?|(\,[0-9]{1,2})?)$/i)) {
                    valid = false;
                }
                break;
            case 'ownershipStake':
                if(!(req.body[i].value).match(/^\€?([1-9]{1}[0-9]{0,2}(\.[0-9]{3})*(\,[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\,[0-9]{0,2})?|0(\,[0-9]{0,2})?|(\,[0-9]{1,2})?)$/)) {
                    valid = false;
                }
                break;
        }
    }

    console.log("Validation result: " + (valid ? "all valid" : "not valid"));

    res.contentType("application/json");
    res.send(200, JSON.stringify(invalidFields));

});


io.sockets.on('connection', function (socket) {

    // create new form
    socket.on('createForm', function (data) {
        console.log('room:' + data);
        socket.room = data;
         socket.join(data);
    } ) ;

    socket.on('liveform', function (data) {
        console.log(data);
        io.sockets.in(socket.room).emit('liveform', data);
    });
});