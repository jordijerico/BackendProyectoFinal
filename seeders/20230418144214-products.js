'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      { id: 1, name: "Conjunto Rojo Verano", material: "Tela y algodon", description: "Cojunto unisex para verano. Consta de 2 piezas.", quantity: 5, image: "", price: 50, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 2, name: "Conjunto Naranja Verano", material: "Tela", description: "Cojunto unisex para verano. Consta de 2 piezas.", quantity: 2, image: "", price: 15, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 3, name: "Conjunto Verde Invierno", material: "Tela", description: "Cojunto unisex para verano. Consta de 2 piezas.", quantity: 15, image: "", price: 35, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 4, name: "Peto Marinero", material: "Algodon", description: "Cojunto unisex para verano. Consta de 2 piezas.", quantity: 4, image: "", price: 35, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 5, name: "Blusa Negra Verano", material: "Poliester", description: "Cojunto unisex para verano. Consta de 2 piezas.", quantity: 16, image: "", price: 22, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
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
