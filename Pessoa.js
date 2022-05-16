const { DataTypes } = require('sequelize'); //sequelize
const sequelize = require('../banco/bd'); //banco

const Pessoa = sequelize.define('Pessoa', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
  }, {
    // Other model options go here
  });
  
  module.exports = Pessoa;