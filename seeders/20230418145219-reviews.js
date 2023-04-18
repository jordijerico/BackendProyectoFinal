'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      { id: 1, title: "Excelente compra", rating: 5, description: "Buena compra, material increible. A mi hijo le queda estupendo", user_id:2, product_id: 1, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 2, title: "Compra recomendada", rating: 3, description: "Buena compra, material increible. A mi hijo le queda estupendo", user_id:2, product_id: 2, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 3, title: "Excelente adquisicion", rating: 4, description: "Buena compra, material increible. A mi hijo le queda estupendo", user_id:3, product_id: 3, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 4, title: "Volvería a comprar aqui", rating: 4, description: "Buena compra, material increible. A mi hijo le queda estupendo", user_id:4, product_id: 4, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 5, title: "Ropa no tan buena como prometen", rating: 1, description: "Buena compra, material increible. A mi hijo le queda estupendo", user_id:5, product_id: 5, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },

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
