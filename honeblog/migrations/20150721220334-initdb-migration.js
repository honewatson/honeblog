'use strict';
var fs = require('fs');
var path = require('path');
var tcall = function(queryInterface) {
    var f = function(queries, i) {
        queryInterface.sequelize.query(queries[i] + ";")
        console.log("---COMPLETE---\n" + queries[i] + ";");
        i++;
        if (i < queries.length)
        return  f(queries, i);
    }
    return f;
}
module.exports = {
    up: function(queryInterface, Sequelize) {


        fs.readFile(path.join(__dirname, '/../../blogschema.sql'), 'utf8', function(err, data) {
            if (err) {
                return console.log(err);
            }
            var queries = data.split(";");
            var _f = tcall(queryInterface);
            return _f(queries, 0);
            /*   for (var i = 0, len = queries.length; i < len; i++) {
                   try {
                       console.log(queries[i] + ";");
                       queryInterface.sequelize.query(queries[i] + ";");
                   } catch (e) {
                       console.log("error")
                   
                   }

               }
               */
        });
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
        queryInterface.dropAllTables();

    }
};
