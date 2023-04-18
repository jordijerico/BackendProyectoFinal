'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Review.belongsTo(models.User,{
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
        
      });

      Review.belongsTo(models.Product,{
        foreignKey: 'product_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Review.init({
    title: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};