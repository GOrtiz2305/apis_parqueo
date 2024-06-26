'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tickets extends Model {
    static associate(models) {
    }
  };
  tickets.init({
    centro_comercial: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    numero_vehiculo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    timestamp_entrada: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    timestamp_salida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    total_pagar: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(20),
      defaultValue: 'PENDIENTE'
    },
    estado2: {
      type: DataTypes.INT,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'tickets',
    timestamps: false,
  });
  return tickets;
};