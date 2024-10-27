import { DataTypes } from 'sequelize';
import config from '../config.js'; 

const { sequelize } = config; 

const Quotation = sequelize.define('quotation', {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
    userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
    discount: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    allowNull: false,
  },
    extraWork: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    allowNull: false,
  },

    status: {
    type: DataTypes.ENUM('pending','accept','reject','progress'),
    defaultValue: 'pending',
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Quotation;