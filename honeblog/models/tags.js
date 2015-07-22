/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tags', {
        tag_id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tag_name: {
            type: 'CHAR(255)',
            allowNull: false,
        },
        slug: {
            type: 'CHAR(255)',
            allowNull: false,
        }
    }, {
        timestamps: false,
   
    });
};
