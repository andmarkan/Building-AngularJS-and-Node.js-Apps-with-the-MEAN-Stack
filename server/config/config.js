var path =  require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 8080
    },
    production: {
        db: 'mongodb://marley:multivision@ds043200.mongolab.com:43200/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 8080
    }
}
