'use strict';
module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        placeId: {
            type: DataTypes.INTEGER,
            onDelete: 'CASCADE',
            reference: {
                model: 'Place',
                key: 'id'
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Post.belongsTo(models.Place, {
                    foreignKey: 'placeId'
                })
            }
        }
    });
    return Post;
};