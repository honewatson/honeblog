'use strict';

var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';

var m = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename);
    })
    .forEach(function(file) {
        if (file.slice(-3) !== '.js') return;
        var model = require(path.join("./", file));
        m[model.name] = model;
    });

/*Object.keys(db).forEach(function(modelName) {
});*/

module.exports = m;
