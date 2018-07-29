// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var burger = {
    selectAll: function(holder) {
        orm.selectAll("burgers", function(res) {
            holder(res);
        });
    },
    insertOne: function(cols, holder) {
        orm.create("burgers", cols, function(res) {
            holder(res);
        });
    },
    // update: function(objColVals, bool, burg) {
    //     orm.update("burgers", objColVals, bool, function(res) {
    //         burg(res);
    //     });
    // }
};


module.exports = burger;