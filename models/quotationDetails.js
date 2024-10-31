
import { DataTypes } from 'sequelize';
import config from '../config.js'; 

const { sequelize } = config; 

const QuotationDetails = sequelize.define('quotationDetails', {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
    quotationId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'quotations',
      key: 'id',
    },
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  width: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
    height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
    depth: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },    
  //  isLaminate: {
  //   type: DataTypes.BOOLEAN,
  //   defaultValue: true,
  // },
  //  isHeavySheet: {
  //   type: DataTypes.BOOLEAN,
  //   defaultValue: true,
  // },
totalSheet: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
totalLaminate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default QuotationDetails;