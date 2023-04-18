'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[
      {id: 1 , name: "Jordi", surname:"Jerico Lopez" ,phone:"666555444",email:"jordi@jordi.com",password:bcrypt.hashSync("admin", 10),payment:"paypal",dni:"53758052Z",address:"c/falsa 123",birthdate:"1995-01-25",role_id:1,createdAt:"2023-12-12 00:00:00",updatedAt:"2023-12-12 00:00:00"},
      {id: 2 , name: "Patricia", surname:"Jerico Lopez" ,phone:"666555444",email:"patricia@patricia.com",password:bcrypt.hashSync("user", 10),payment:"cash",dni:"33213321Z",address:"c/burriana 3",birthdate:"1987-11-05",role_id:2,createdAt:"2023-12-12 00:00:00",updatedAt:"2023-12-12 00:00:00"},
      {id: 3 , name: "Carlos", surname:"Garcia Romero" ,phone:"666555444",email:"carlos@carlos.com",password:bcrypt.hashSync("user", 10),payment:"visa",dni:"53758051Z",address:"c/avenida 12",birthdate:"1997-05-22",role_id:2,createdAt:"2023-12-12 00:00:00",updatedAt:"2023-12-12 00:00:00"},
      {id: 4 , name: "Rafa", surname:"Garcia Vivo" ,phone:"666555444",email:"rafa@rafa.com",password:bcrypt.hashSync("user", 10),payment:"visa",dni:"53753213Z",address:"c/larga 1123",birthdate:"1999-11-21",role_id:2,createdAt:"2023-12-12 00:00:00",updatedAt:"2023-12-12 00:00:00"},
      {id: 5 , name: "Paqui", surname:"Lopez Calvo" ,phone:"666555444",email:"paqui@paqui.com",password:bcrypt.hashSync("user", 10),payment:"paypal",dni:"53732132Z",address:"c/alameda 12",birthdate:"1993-02-25",role_id:2,createdAt:"2023-12-12 00:00:00",updatedAt:"2023-12-12 00:00:00"},

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
