import { Router } from 'express';
import { getAllUsers, 
    loginUser,
    registerUser, 
     } 
    from '../controllers/userController.js';

const routerUser = Router();

routerUser.get('/',getAllUsers); 
// Login user
routerUser.post('/login', loginUser);
// Register new user
routerUser.post('/register', registerUser);

export default routerUser;