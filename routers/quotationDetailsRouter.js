import { Router } from 'express';
import {  
   getAllQuotationDetails
     } 
    from '../controllers/quotationDetailsController.js';

const router = Router();

router.get('/',getAllQuotationDetails); 

export default router;