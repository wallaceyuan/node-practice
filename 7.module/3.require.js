/**
 * Created by yuan on 2015/9/6.
 */
exports.name = 'wallace';
var d1 = require('./node_modules/4.dog.js');
var d2 = require('./node_modules/4.dog.js');
var d3 = require('./node_modules/4.dog.js');
d1.log('tom');
d2.log('jerry');


/*console.log(require);*/
//取得模块的绝对路径
console.log(require.resolve('./4.dog'));

console.log(require('./package.json'));

console.log(Object.keys((require.cache)));

delete require.cache[require.resolve('./package.json')];

console.log(Object.keys((require.cache)));