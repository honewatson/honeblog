/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('blog_detail', {
        blog_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,

        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        timestamps: false,
        tableName: "blog_detail",
    });
};
