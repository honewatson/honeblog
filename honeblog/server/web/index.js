var Handlers = require('./handlers');
exports.register = function(server, options, next) {

    server.route({
            method: 'GET',
            path: '/',
            handler: Handlers.index({
                getData: function(request) {
                    return {
                        hello: "hello charlie"
                    }
                }
            })
        });


next();
};


exports.register.attributes = {
    name: 'web'
};
