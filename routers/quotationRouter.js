import { Router } from 'express';
import { getAllQuotation, insertQuotation } from '../controllers/quotationController.js';


const routerQuotation = Router();

routerQuotation.get('/',getAllQuotation); 
routerQuotation.post('/insert', insertQuotation);

export default routerQuotation;