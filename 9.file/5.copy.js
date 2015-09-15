/**
 * Created by yuan on 2015/9/8.
 */
var fs = require('fs');

var BufferSize = 1024;

function copy(src,dest){
    var fdsrc,fddest;
    var readSofar=0;//读到的位置

    var buff = new Buffer(BufferSize);
    var read = 0;//本次读到的字节数

    fdsrc = fs.openSync(src,'r');
    fddest = fs.openSync(dest,'w');
    do{
        read = fs.readSync(fdsrc,buff,0,BufferSize,readSofar);
        fs.writeSync(fddest,buff,0,read);
        readSofar += read;
    }while(read == BufferSize)
}

copy('1.txt','2.txt');