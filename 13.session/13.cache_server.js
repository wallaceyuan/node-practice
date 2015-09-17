/**
 * Created by yuan on 2015/9/15.
 */
var fs = require('fs');
var http = require('http');
var crypto = require('crypto');

function getHash(content){
    return crypto.createHash('sha1').update(content).digest('hex');
}

function expireFile(filename,req,res){
    fs.readFile(filename,function(err,content){
        var expires = new Date(new Date().getTime() + 30*1000);
        res.setHeader('Expires',expires.toUTCString());
        res.setHeader('Cache-Control','max-age=60');
        res.writeHead(200,"OK");
        res.end(content);
    });
}

/**
 * 1.第一次响应的时候，服务器返回客户端一个Last-Modified header,最后修改时间
 * 2.当客户端再次需要请求该 文件的时候，会把这个时间发给服务器，if-modified-since
 * 3.服务器判断，如果修改过返回最新数据，如果没修改过返回304
 */
function matchHandler(filename,req,res){
    var lastModified = new Date(req.headers['if-modified-since']);
    fs.stat(filename,function(err,stat){
        if(err)
            throw Error(err);
        if(Math.floor(stat.mtime.getTime()/1000) == Math.floor(lastModified.getTime()/1000)){
            res.statusCode = 304;
            res.end('');
        }else{
            res.setHeader('Last-Modified',stat.mtime.toGMTString());
            res.writeHead(200,"OK");
            fs.createReadStream(filename).pipe(res);
        }
    });
}

/**
 * 1. 只能精确到秒 不够精确
 * 2. 修改时间改了，内容不一定改
 * etag
 * 1.第一次的时候，服务器会把此文件生成etag,发给客户端 ETag
 * 2.再次请求的时候，客户端把 这tag传回来。 if-none-match
 * 3.服务器进行判断，相同则返回304，不相同返回最新文件
 *
 */
function etagHandler(filename,req,res){
    fs.readFile(filename,function(err,content){
        var hash = getHash(content);
        var match = req.headers['if-none-match'];
        if(hash == match){
            res.statusCode = 304;
            res.end('');
        }else{
            res.setHeader('Etag',hash);
            res.writeHead(200,"OK");
            fs.createReadStream(filename).pipe(res);
        }
    });
}

http.createServer(function(req,res){
    if(req.url == '/favicon.ico'){
        return res.end('404');
    }

    var filename = req.url.slice(1);
    //expireFile(filename,req,res);
    //matchHandler(filename,req,res);
    etagHandler(filename,req,res);
}).listen(8080);
