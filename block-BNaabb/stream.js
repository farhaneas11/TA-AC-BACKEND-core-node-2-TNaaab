var http = require('http');
var server = http.createServer(handlreq);
var port = 3000;

function handlreq(req,res){
    var store = '';
    req.on('data',(chunk)=>{
        store = store + chunk;
    });
    req.on('end',()=>{
        console.log(store);
    })
    res.write(store);
}

server.listen(3000 , ()=>{
    console.log('server opened');
})