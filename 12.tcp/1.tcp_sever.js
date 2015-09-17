/**
 * Created by yuan on 2015/9/15.
 */
var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./tcp.txt');


var server = net.createServer(function(socket){
    console.log('connect');
    socket.setEncoding('utf8');
    socket.pipe(out);
    socket.on('data',function(chunk){
        socket.write('sever'+chunk);
    });
    socket.on('end',function(){
        console.log('end');
    });
    socket.on('error',function(){
        console.log('error');
        socket.destory();
    });
});

server.listen(8000);