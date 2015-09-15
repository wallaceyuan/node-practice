/**
 * Created by yuan on 2015/9/8.
 */
var fs = require('fs');
makeP('test3/test4/test5',function(err){
    if(err) console.log('创建目录失败');
    else console.log('成功成功');
});

function makeP(path){
    var paths = path.split('/');
    for(var i = 0;i<paths.length;i++){
        //paths.slice(0,i+1)
        // [ 'test3' ] [ 'test3', 'test4' ]
        var p = paths.slice(0,i+1).join('/');
        var exists = fs.existsSync(p);
        if(exists){
            continue;
        }else{
            fs.mkdirSync(p);
        }
    }
}

/*
 fs.stat('1.txt',function(err,stat){
    console.log(stat);
 })
 fs.exists('1.txt',function(e){
    console.log(e);
 })
*/
//删除空文件夹
//fs.rmdirSync('test3/test4/test5');

//删除文件
//fs.unlinkSync('./1.txt');

//获取文件绝对路径
fs.realpath('./2.txt',function(err,path){
    console.log(path);
});

