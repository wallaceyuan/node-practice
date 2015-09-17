/**
 * Created by yuan on 2015/9/15.
 */
var fs = require('fs');

fs.stats('test5', function (err) {
    if (err){
        console.log(err);
    }else{
        console.log('successfully deleted /tmp/hello');
    }
});