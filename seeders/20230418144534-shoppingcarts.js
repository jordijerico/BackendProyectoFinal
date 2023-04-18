'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ShoppingCarts', [
      { id: 1, totalprice: 125, user_id:2,product_id:2,createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 2, totalprice: 125, user_id:3,product_id:3,createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 3, totalprice: 125, user_id:4,product_id:4,createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 4, totalprice: 125, user_id:5,product_id:5,createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 5, totalprice: 125, user_id:5,product_id:1,createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
    ],
      {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
