var http = require('http');

var server = http.createServer(handlreq);

var { EventEmitter } = require('events');
var myEmitter = new EventEmitter();
myEmitter.on('notice' , ()=>{
    console.log('event emitted');
})

myEmitter.on('notice' , ()=>{
    console.log('event emitted 2');
})
myEmitter.emit('notice','hello world');




function handlreq(req,res){
    console.log(req,res);
}


var port = 3000;

server.listen(port,()=>{
    console.log('opened' + port);
})