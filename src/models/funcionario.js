const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Funcionario = sequelize.define('Funcionario',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
module.exports = Funcionario