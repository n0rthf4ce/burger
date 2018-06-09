var connection = require("./connection");

var orm = {
    selectAll: function (tableName, cb) {
        connection.query("SELECT * FROM ??", [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableName, key, value, cb) {
        var queryString = `INSERT INTO ${tableName} (${key.toString()}) VALUES ('${value}')`;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (tableName, updateKey, updateValue, locationKey, locationValue, cb) {
        var queryString = `UPDATE ${tableName} SET ${updateKey.toString()} = ${updateValue} WHERE ${locationKey.toString()} = ${locationValue}`
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
