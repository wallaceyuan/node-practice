/**
 * Created by yuan on 2015/9/8.
 */
var fs = require('fs');

function exec(current,pervious){
    console.log(pervious);
    if( Date.parse(previous.ctime) !=Date.parse(previous.mtime)){
        console.log('修改了');
    }else if (Date.parse(current.ctime) ==0){
        console.log('删除了');
    }else{
        console.log('新建的文件');
    }
}
fs.watchFile('2.txt',exec);