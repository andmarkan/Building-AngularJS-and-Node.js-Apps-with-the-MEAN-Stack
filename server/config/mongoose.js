
var mongoose = require('mongoose'),
    encrypt  = require('../utilities/encryption');

module.exports = function(config){
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback(){
        console.log('multivision db opened');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String,
        salt: String,
        hashed_pwd: String,
        roles: [String]
    });

    userSchema.methods = {
        authenticate: function(passwordToMatch){
            return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    }

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection){
        if(collection.length === 0){
            var salt, hash;

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'joe');
            User.create({firstName:'Joe', lastName:'James', username:'joe', salt: salt, hashed_pwd: hash, roles: ['admin']});

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'john');
            User.create({firstName:'John', lastName:'Papa', username:'john', salt: salt, hashed_pwd: hash, roles: []});

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'dan');
            User.create({firstName:'Dan', lastName:'Wahlin', username:'dan', salt: salt, hashed_pwd: hash});
        }
    })
}
