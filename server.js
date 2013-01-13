/**
 * User: joeboden
 * Date: 09.12.12
 * Time: 14:11
 */
var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});


    var arr = [
        {"name":"titel","value":"Dipl."}
//        {"name":"vorname","value":"Max"},
//        {"name":"nachname","value":"Mustermann"},
//        {"name":"geburtstag","value":"12.02.2012"},
//        {"name":"stand","value":"ledig"},
//        {"name":"straßeNummer","value":"Musterstraße 1"},
//        {"name":"plz","value":"70199"},
//        {"name":"stadt","value":"Musterhausen"},
//        {"name":"beruf","value":"Mustermann"},
//        {"name":"summe","value":"5000000"},
//        {"name":"behalt","value":"50000"}
    ];

    //for(var i = 0; i < arr.length; i++) {
    var output = arr[0].name;

    //}
    response.write(output);

    response.end();

}).listen(8888);
