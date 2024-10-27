
import QuotationDetails from "../models/quotationDetails.js";

  // Get all users
export const getAllQuotationDetails = async (req, res) => {
    try {
        const quotationDetails = await QuotationDetails.findAll();
        res.json(quotationDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};