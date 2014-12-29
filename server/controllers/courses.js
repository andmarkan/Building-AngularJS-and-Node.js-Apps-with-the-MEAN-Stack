var Courses = require('mongoose').model('Course');

exports.getCourses = function(req, res){
    Courses.find({}).exec(function(err, collection){
        res.send(collection);
    })
};
