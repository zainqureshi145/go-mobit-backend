const dbConn = require("../../db.config");

User = function (user) {
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.age = user.age;

};

    User.create = function (newUser, result) {
        console.log("Creating User...");
        dbConn.query("INSERT INTO users set ?", newUser, function (error, res) {
            if (error) {
                result(error, null);
            }
            else {
                result(null, res.insertId);
            }
        });
    };
    
    User.findAll = function (result) {
        console.log("Find All Users...");
        dbConn.query("Select * from users", function (error, res) {
            if (error) {
                result(null, error);
            }
            else {
                result(null, res);
            }
        });
    };

module.exports = User;