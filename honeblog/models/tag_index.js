/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tag_index', {
        tag_id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            primaryKey: true,

        },
        object_id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            primaryKey: true
        }
    }, {
        timestamps: false,
        tableName: "tag_index"
    });
};
