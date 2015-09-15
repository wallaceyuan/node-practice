/**
 * Created by yuan on 2015/9/8.
 */
var path = require('path');
var fs = require('fs');


/**
 * 把非标准的路径转化为标准路径
 * 1. 解析 . ..
 * 2.多个杠转成一个杠
 * 3 window下/转成\
 * 4.如果以杠结尾 ，则保留
 */

//console.log(path.normalize('.//a////b//d//..//c//e//..//'));
/**
 * join 多个参数值转成一个路径字符串
 **/
//console.log(path.join(__dirname,'a','b','..','c'));

//读取当前文件夹下面的子文件
fs.readdir(__dirname,function(err,file){
    for(var i = 0;i<file.length;i++){
        var name = path.join(__dirname,file[i]);
        fs.stat(name,function(err,stat){
            if(!stat.isDirectory()){
                fs.readFile(name,function(err,data){
                    //console.log(data.toString());
                });
            }
        });
    }
});
/**
 * basename 获取 一个路径中的文件名
 *
 **/
console.log(path.basename('./path.js','.js'));

/**
 * basename 获取 一个路径中的扩展
 *
 **/
console.log(path.extname('./path.js'));

console.log(path.sep);//文件路径 符 \a\b\c  /a/b/c