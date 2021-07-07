
var path = require('path');

var abspath = __dirname;
var relpath = './index.html'

var dirn = path.join(abspath , '/index.html');
console.log(dirn);



var http = require('http');
var server = http.createServer(handlreq);
var qs = require('querystring');
const port = 9000;

function handlreq(req,res){
    var store = '';
    res.statusCode = 201;
    var dataformat = req.headers['content-type'];
    
    console.log(dataformat);

    req.on('data',(chunk)=>{
        store = store + chunk;
    });
    req.on('end',()=>{
        if(dataformat === "application/json"){
            var parsedData = JSON.parse(store);
            //res.end(store);
            res.setHeader('content-type','text/html');
            res.end('<h1>name</h1>  <h2>email</h2>')
            res.statusCode = 201;
        }        
        if(dataformat === "application/x-www-form-urlencoded"){
            var parsedData = qs.parse(store);
            res.end(JSON.stringify(parsedData));
            res.statusCode = 201;
        }
    })
    
}

server.listen(port , ()=>{
    console.log('server opened');
})