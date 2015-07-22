/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        user_id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: 'CHAR(100)',
            allowNull: false,
        },
        name: {
            type: 'CHAR(100)',
            allowNull: false,
        }
    }, {
        timestamps: false,

    });
};
