import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config.js';
import userRouter from './routers/userRouter.js';
import quotationRouter from './routers/quotationRouter.js';
//import quotationDetailsRouter from './routers/quotationDetailsRouter.js';

dotenv.config();
//https://www.youtube.com/watch?v=DtUyZ_kaQqQ&list=LL&index=4&t=4s
//https://github.com/yatunyi15075/BankApplication/blob/master/backend/routers/userRouter.js

const app = express();
const PORT = config.port;
const { sequelize } = config;

app.use(express.json());
app.use(cors()); 

// Routers
app.use('/api/user', userRouter);
app.use('/api/quotation', quotationRouter);
//app.use('/api/quotationDetails', quotationDetailsRouter);

// Sync database and start the server
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error.message);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});