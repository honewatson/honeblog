/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('blog_meta', {
        blog_meta_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: 'CHAR(255)',
            allowNull: false,
        },
        sub_title: {
            type: 'CHAR(255)',
            allowNull: false,
        },
        description: {
            type: 'CHAR(255)',
            allowNull: false,
        }
    }, {
        timestamps: false,

    });
};
