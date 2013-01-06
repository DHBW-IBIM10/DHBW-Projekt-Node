// Initialize the basis for the web app
var express = require("express");
var app = express();


app.configure(function(){
    // middleware to parse JSON request bodies
    app.use(express.bodyParser());
});

// catch the request for xyz
app.post('/versicherung1/val_kontakt', function (req, res) {
    // surname

    // firstname

    // birthday

    // street and no

    // zip code

    // city

    // amount insured

    // cost sharing
    res.contentType("text/html");
    //res.send(200, "Hallo Welt!");
    res.send(200, req.body.surname)

});

// Create the http server on port 3000
app.listen(3000);