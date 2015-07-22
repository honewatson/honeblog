'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.addIndex(
            'blog', ['slug'], {
                indexName: 'blog_slug',
                indicesType: 'UNIQUE'
            }
        );
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeIndex('blog', 'blog_slug');
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};
