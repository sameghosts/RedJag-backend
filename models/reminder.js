'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reminder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  reminder.init({
    tracker_id: DataTypes.INTEGER,
    days_away: DataTypes.INTEGER,
    date_created: DataTypes.DATE,
    contact_email: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_postion: DataTypes.STRING,
    contact_phone: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reminder',
  });
  return reminder;
};