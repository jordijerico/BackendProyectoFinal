'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      { id: 1, name: "Chaqueta Borreguito Cuadros", material: "Waffle 100% Algodón Orgánico", description: "Tallas: 0-6m 6-12m 12-18m 18-24m", quantity: 5, image: "https://storage.googleapis.com/fotosproyectoibebe/chaqueta_borreguito_cuadros.jpeg", price: 40, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 2, name: "Chaqueta Borreguito Rosa", material: "Waffle 100% Algodón Orgánico", description: "Tallas: 6-12m 12-18m 18-24m", quantity: 2, image: "https://storage.googleapis.com/fotosproyectoibebe/chaqueta_borreguito_rosa.jpeg", price: 40, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 3, name: "Pelele Traje Anclas", material: "100% Algodón", description: "Tallas: 6-12m 12-18m 18-24m", quantity: 5, image: "https://storage.googleapis.com/fotosproyectoibebe/pelele_traje_anclas.jpeg", price: 30, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 4, name: "Conjunto Sport", material: "95% Algodón 5% Elastán", description: "Tallas: NB, 0-3, 3-6, 6-12, 12-18, 18-24", quantity: 4, image: "https://storage.googleapis.com/fotosproyectoibebe/conjunto_sport.jpeg", price: 35, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 5, name: "Conjunto Sport Vaca", material: "95% Algodón 5% Elastán", description: "Tallas: NB, 0-3, 3-6, 6-12, 12-18, 18-24", quantity: 6, image: "https://storage.googleapis.com/fotosproyectoibebe/conjunto_sport_vaca.jpeg", price: 35, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 6, name: "Ranita Reversible Dibujos Rosa", material: "100% Algodón", description: "Tallas: 0-3, 3-6, 6-12, 12-18, 18-24", quantity: 5, image: "https://storage.googleapis.com/fotosproyectoibebe/ranita_reversible_dibujos_blanco.jpeg", price: 30, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 7, name: "Ranita Reverisble Rosa", material: "100% Algodón", description: "Tallas: 0-3, 3-6, 6-12, 12-18, 18-24", quantity: 2, image: "https://storage.googleapis.com/fotosproyectoibebe/ranita_reversible_rosa.jpeg", price: 25, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 8, name: "Ranita Reversible Dibujos Blanco", material: "100% Algodón", description: "Tallas: 0-3, 3-6, 6-12, 12-18, 18-24", quantity: 15, image: "https://storage.googleapis.com/fotosproyectoibebe/ranita_reversible_dibujos_blanco.jpeg", price: 30, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 9, name: "Ranita Reversible Gris", material: "100% Algodón", description: "Tallas: 0-3, 3-6, 6-12, 12-18, 18-24", quantity: 4, image: "https://storage.googleapis.com/fotosproyectoibebe/ranita_reversible_gris.jpeg", price: 25, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 10, name: "Ranita Reversible Azul", material: "100% Algodón", description: "Tallas: 0-3, 3-6, 6-12, 12-18, 18-24", quantity: 6, image: "https://storage.googleapis.com/fotosproyectoibebe/ranita%20reversible_azul.jpeg", price: 25, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
   
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
