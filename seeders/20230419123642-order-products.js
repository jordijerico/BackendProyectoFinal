'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Order_product', [
      { id: 1, product_id: 2, order_id: 2, price: 50, quantity:2, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 2, product_id: 3, order_id: 1, price: 50, quantity:2, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 3, product_id: 1, order_id: 3, price: 50, quantity:2, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 4, product_id: 4, order_id: 3, price: 50, quantity:2, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 5, product_id: 5, order_id: 5, price: 50, quantity:2, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
    
    ],
    {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};