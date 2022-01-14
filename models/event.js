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
      Event.hasMany(models.Users_Events, { foreignKey: 'event_id' });
    }
  }
  Event.init(
    {
      event_code: DataTypes.INTEGER,
      likes: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events'
    }
  );
  return Event;
};
