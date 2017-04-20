'use strict';
module.exports = function(sequelize, DataTypes) {
    var Place = sequelize.define('Place', {
        placeName: DataTypes.STRING,
        description: DataTypes.TEXT,
        imagePath: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Place.hasMany(models.Post, {
                    foreignKey: 'placeId'
                })
            }
        }
    });
    return Place;
};