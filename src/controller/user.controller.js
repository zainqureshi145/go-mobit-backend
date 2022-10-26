const User = require("../model/user.model");

exports.findAll = function (request, response) {
    User.findAll(function(error, user) {
    if (error)
    response.send(error);
    response.send(user);
    });
};

exports.create = function (request, response) {
const newUser = new User(request.body);
    if(request.body.constructor === Object && Object.keys(request.body).length === 0){
        response.status(406).send({ error: true, message: 'All fields are required!' });
    } else {
    User.create(newUser, function(error, user) {
        if (error) {
            response.send(error);
        } else {
            response.status(201).json({ error: false, message: "User added successfully!", data: user });
        }
    });
    }
};