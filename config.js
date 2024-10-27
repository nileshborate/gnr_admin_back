import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize( 
   'gnradmin',
   'root',
   '1234',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the MySQL database.');
  })
  .catch((error) => {
    console.error('Error connecting to the MySQL database:', error.message);
  });

const jwtSecret = process.env.JWT_SECRET;

const config = {
  sequelize,
  jwtSecret,
  port: process.env.PORT || 5000,
};

export default config;