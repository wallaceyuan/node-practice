/**
 * Created by yuan on 2015/9/8.
 */
var fs = require('fs');


var buffer = new Buffer(6);

fs.open('./1.txt', 'sr+', 438, function(openErr, fd) {
    //console.log(fd);//3 0 strin 1stdout 2stderr

    //fd, buffer, offset, length, position, callback
    fs.write(fd,new Buffer('B'),0,1,1,function(err,bytesRead,data){
        console.log(arguments);
        fs.read(fd,buffer,0,1,1,function(err,bytesRead,data){
            console.log(data);
        });
    });
    fs.close(fd,function(){
        fs.open('./1.txt', 'sr+', 438 /*=0666*/, function(err, fd) {
            console.log(fd);
        });
    });
});

//process.stdout.write('this is stdout');

/*process.stdin.on('data',function(){
    console.log(arguments);
});*/

//console.info('i am info');

