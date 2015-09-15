var repl = require('repl');
var server = repl.start({});
//就是当前程序运行上下文环境
var context = server.context;
context.name = 'zfpx';
context.age = 6;
context.grow = function(){
    console.log(context.name +' grow '+context.age);
    //console.log(this);
}
