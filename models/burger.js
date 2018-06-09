// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
    allBurgers: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertBurger: function (burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function (res) {
            cb(res);
        });
    },
    devour: function (id, cb) {
        orm.updateOne("burgers", "devoured", true, "id", id, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
