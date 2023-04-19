'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {

          model: 'Products',
          key: 'id'

        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {

          model: 'Orders',
          key: 'id'

        },
        
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      price: {
        type: Sequelize.FLOAT
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order_products');
  }
};