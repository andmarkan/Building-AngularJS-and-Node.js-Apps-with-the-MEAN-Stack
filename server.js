var express = require('express'),
    stylus  = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
    return stylus(str).set('filename', path);
}

app.configure(function(){
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(stylus.middleware(
        {
            src: __dirname + '/public',
            compile: compile
        }
    ));
    app.use(express.static(__dirname + '/public'));
});

app.get('*', function(req, res){
    res.render('index')
});

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port + '...');
