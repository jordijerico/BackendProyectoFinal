'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasMany(models.Review, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
        
      });

      User.belongsToMany(models.Product, { through: 'ShoppingCarts', foreignKey: 'user_id'});
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    payment: DataTypes.STRING,
    dni: DataTypes.STRING,
    address: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};