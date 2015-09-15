/**
 * Created by yuan on 2015/9/6.
 */
var Person = require('./2.person.js');

var person = new Person('wallace');

//person.setName('wallace');
console.log(person.getName());
person.__proto__.name = '侠女'
console.log(person.__proto__.name );//'侠女'
console.log(person.name );//wallace