var Handlers = {

    index: function(model) {

        return function(request, reply) {

            return reply.view('index', model.getData(request));
        }
    }

}

module.exports = Handlers;
