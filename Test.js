// Initialize the basis for the web app
var express = require("express");
var app = express();



app.configure(function(){
    // middleware to parse JSON request bodies
    app.use(express.bodyParser());
});

// catch the request for xyz
app.post('/insurances', function (req, res) {

                  console.log("yes");
    console.log(req.body);
    if(req.body == "") {
        console.log("empty");
    }

    for(var i = 0; i < req.body.length; i++) {
        console.log(req.body[i].name);
    }

    console.log(req.body.toString());

    var valid = true;

//    // address
//    if(!(req.body.anredeInput).match(/(Mr.|Mrs.|Ms.)?/i)) {
//        valid = false;
//    }
//
//    // title
//    if(!(req.body.anredeInput).match(/(Sir|Dipl.|Dr.|Prof. Dr.|Dr. h.c.|)?/i)) {
//        valid = false;
//    }
//
//    // surname
//    if(!(req.body.surname).match(/^[A-ZÄÖÜ][a-zäöüA-ZÄÖÜ\-' ]*[a-zäöüA-ZÄÖÜ ]$/i)) {
//        valid = false;
//    }
//    // firstname
//    if(!(req.body.firstname).match(/^([^ \x21-\x26\x28-\x2C\x2E-\x40\x5B-\x60\x7B-\xAC\xAE-\xBF\xF7\xFE]+)$/i)) {
//        valid = false;
//    }
//
//    // birthday
//    if(!(req.body.birthday).match(/^([0-9]{0,2}).([0-9]{0,2}).([0-9]{0,4})$/)) {
//        valid = false;
//    }
//
//    // address
//    if(!(req.body.maritalStatus).match(/(single|married|divorced|widowed)?/i)) {
//        valid = false;
//    }
//
//    // street and no
//    if(!(req.body.street).match(/^(([a-zA-ZäöüÄÖÜ]\D*)\s+\d+?\s*.*)$/i)) {
//        valid = false;
//    }
//
//    // zip code
//    if(!(req.body.street).match(/^\d{5}$|^[0-9]{5}(-[0-9]{4})?$|^([A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]|[A-HK-Y][0-9]([0-9]|[ABEHMNPRV-Y]))|[0-9][A-HJKS-UW])\ [0-9][ABD-HJLNP-UW-Z]{2}|(GIR\ 0AA)|(SAN\ TA1)|(BFPO\ (C\/O\ )?[0-9]{1,4})|((ASCN|BBND|[BFS]IQQ|PCRN|STHL|TDCU|TKCA)\ 1ZZ))$/)) {
//        valid = false;
//    }
//
//    // city
//    if(!(req.body.street).match(/^[A-ZAÖÜ][a-zäöüA-ZÄÖÜ\-' ]*[a-zäöüA-ZÄÖÜ ]$/i)) {
//        valid = false;
//    }
//
//    // employee group
//    if(!(req.body.surname).match(/^[A-ZAÖÜ][a-zaöüA-ZAÖÜ\-' ]*[a-zaöüA-ZAÖÜ ]$/i)) {
//        valid = false;
//    }
//
//    // amount insured
//    if(!(req.body.amountInsured).match(/^\€?([1-9]{1}[0-9]{0,2}(\.[0-9]{3})*(\,[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\,[0-9]{0,2})?|0(\,[0-9]{0,2})?|(\,[0-9]{1,2})?)$/i)) {
//        valid = false;
//    }
//
//    // cost sharing
//    if(!(req.body.ownershipStake).match(/^\€?([1-9]{1}[0-9]{0,2}(\.[0-9]{3})*(\,[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\,[0-9]{0,2})?|0(\,[0-9]{0,2})?|(\,[0-9]{1,2})?)$/)) {
//        valid = false;
//    }

    res.contentType("text/html");
    res.send(200, "Hallo Welt!");
    //res.send(200, req.body.surname)

});

// Create the http server on port 3000
app.listen(8888);