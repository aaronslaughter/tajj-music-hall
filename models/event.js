'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.hasMany(models.Comment, { foreignKey: 'event_id' });
      Event.belongsToMany(models.User, {
        through: models.Users_Events,
        as: 'user_list',
        foreignKey: 'event_id'
      });
    }
  }
  Event.init(
    {
      event_code: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      artist: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events'
    }
  );
  return Event;
};
