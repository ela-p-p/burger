// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var burger = {
    selectAll: function (holder) {
        orm.selectAll("burgers", function (res) {
            holder(res);
        });
    },
    insertOne: function (cols, holder) {
        orm.insertOne("burgers", cols, function (res) {
            holder(res);
        });
    },
    updateOne: function (objColVals, condition, holder) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            holder(res);
        });
    }
};

module.exports = burger;