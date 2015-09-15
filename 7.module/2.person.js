/**
 * Created by yuan on 2015/9/6.
 */
//var exports = module.exports ={};
//require 是加载模块的方法
//exports 导出对象
//__filename 当前模块绝对路径
//__dirname当前模块目录绝对路径
//module 当前模块对象

function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.setName = function(name){
    this.name = name;
}
Person.prototype.name = 'wallace';

module.exports = Person;
