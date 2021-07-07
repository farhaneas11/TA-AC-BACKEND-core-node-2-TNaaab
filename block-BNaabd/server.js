var http = require('http');
var server = http.createServer(handlreq);
var qs = require('querystring');
const port = 7000;

function handlreq(req,res){
    var store = '';
    var dataformat = req.headers['content-type'];

    req.on('data',(chunk)=>{
        store = store + chunk;
    });
    req.on('end',()=>{
        if(dataformat === "application/json"){
            var parsedData = JSON.parse(store);
            res.end(store);
        }        
        if(dataformat === "x-www-form-urlencoded"){
            var parsedData = qs.parse(store);
            res.end(JSON.stringify(parsedData));
        }
    })
    
}

server.listen(port , ()=>{
    console.log('server opened');
})