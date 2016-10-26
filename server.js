var express = require("express");
var app = express();

app.get('/', function(req, res){
    var headers = req.headers;
    var result = {'ipaddress' : headers['x-forwarded-for'], 'language' : headers['accept-language'].substring(0, headers['accept-language'].indexOf(',')), 'software' : headers['user-agent'].substring(headers['user-agent'].indexOf('(')+1,headers['user-agent'].indexOf(')') )};
    res.send(JSON.stringify(result))
});
app.listen(8080);