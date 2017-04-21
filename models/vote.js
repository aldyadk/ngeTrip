'use strict';
module.exports = function(sequelize, DataTypes) {
    var Vote = sequelize.define('Vote', {
        count: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        placeId: {
            type: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
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
                Vote.belongsTo(models.Place, {
                    foreignKey: 'placeId'
                })
            }
        }
    });
    return Vote;
};