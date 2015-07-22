/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var blog = sequelize.define('blog', {
        blog_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            defaultValue: '1'
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        title: {
            type: 'CHAR(255)',
            allowNull: false,
        },
        slug: {
            type: 'CHAR(255)',
            allowNull: false,
        },
        sub_title: {
            type: 'CHAR(255)',
            allowNull: false,
        },
        image: {
            type: 'CHAR(255)',
            allowNull: true,
        }
    }, {
        classMethods: {
            associate: function(models) {
                blog.hasOne(models.blog_detail, {
                    as: 'blog_detail'
                })
            }
        },
        timestamps: false,
        tableName: 'blog',
    });


    return blog;
};
