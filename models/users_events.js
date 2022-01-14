'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users_Events.belongsTo(models.User, { foreignKey: 'user_id' });
      Users_Events.belongsTo(models.Event, { foreignKey: 'event_id' });
    }
  }
  Users_Events.init(
    {
      event_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'events',
          key: 'id'
        }
      },

      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Users_Events',
      tableName: 'users_events'
    }
  );
  return Users_Events;
};
