/**
 * Created by yuan on 2015/9/8.
 */
var fs = require('fs');

fs.writeFile('./write.txt','第一行',{encoding:'utf8',flag:'a+'},
    function(err,data){
    console.log('写入完毕');
});


fs.writeFile('./write.txt',new Buffer('第二行'),{encoding:'utf8',flag:'a+'},
    function(err,data){
    console.log('写入完毕');
});