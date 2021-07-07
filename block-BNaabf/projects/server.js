var http = require('http');
var server = http.createServer(handlreq);
var fs = require('fs');
const port = 5678 ; 

function handlreq(req,res){
    var store = '';
    req.on('data',(chunk)=>{
        store+=chunk;
    });
    req.on('end',()=>{
        if(req.method === 'GET' && req.url === '/form'){
            res.setHeader('content-type','application/json');
            fs.createReadStream('./form.html');
        }
        if(req.method === 'POST' &&  req.url === '/form'){
            var parsedData = JSON.parse(store);            
            res.setHeader('content-type','text/html');
            res.end(parsedData);
        }
    })
}
server.listen(port,()=>{
    console.log('server openend');
})