const connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
var orm = {
    selectAll: function (table, holder) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            holder(res);
        });
    },
    insertOne: function (table, cols, holder) {
        var queryString = "INSERT INTO " + table;

        queryString += "  (";
        queryString += cols[0].toString();
        queryString += ") VALUES ('" + cols[1].toString();
        queryString += "')"

        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            holder(res);
        });
    },
    updateOne: function (table, objColVals, condition, holder) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            holder(res);
        });
    }
}
// ORM object in `module.exports`.    
module.exports = orm;

