'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable("Funcionarios",{
      id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },

    cargo:{
        type: Sequelize.STRING,
        allowNull:false
    },

    createdAt:{
        type: Sequelize.DATE,
        allowNull:false
    },

    updatedAt:{
        type: Sequelize.DATE,
        allowNull:false
    }
    })
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable("Funcionarios");
  }
};
