'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tracker_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tracker_log.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.STRING,
    post_url: DataTypes.STRING,
    company: DataTypes.STRING,
    postion: DataTypes.STRING,
    location: DataTypes.STRING,
    application_url: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    end_result: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'tracker_log',
  });
  return tracker_log;
};