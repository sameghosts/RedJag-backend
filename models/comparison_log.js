'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comparison_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  comparison_log.init({
    user_id: DataTypes.INTEGER,
    posts_list: DataTypes.STRING,
    keyword_results: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comparison_log',
  });
  return comparison_log;
};