
import QuotationDetails from "../models/quotationDetails.js";

// insert quotation
export const insertQuotationDetails = async (req, res) => {
    const { quotationId,category,description,rate,width,height,depth,totalSheet,totalLaminate } = req.body;
  
    try {
      const newQuotation = await QuotationDetails.create({ quotationId,category,description,rate,width,height,depth,totalSheet,totalLaminate });
      res.status(201).json({ quotationDetails: newQuotation });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

//update quotation
export const updateQuotationDetails = async (req, res) => {
    const { userId,name,address,mobile,total,discount,extraWork,status } = req.body;

    try {
        const quot = await QuotationDetails.findByPk(req.quotationDetails.id); // Get logged-in user's ID from the JWT token
        if (!quot) {
            return res.status(404).json({ message: 'Quotation Details not found' });
        }

        // Update Quotation details
        quot.userId = userId || quot.userId;
        quot.name = name || quot.name;
        quot.address = address || quot.address;
        quot.mobile = mobile || quot.mobile;
        quot.total = total || quot.total;
        quot.discount = discount || quot.discount;
        quot.extraWork = extraWork || quot.extraWork;
        quot.status = status || quot.status;

        await quot.save();

        res.status(200).json({ message: 'Quotation updated successfully', quot });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete Quotation
export const deleteQuotation = async (req, res) => {
    try {
        const { id } = req.params;

        const quot = await Quotation.findByPk(id);
        if (!quot) return res.status(404).json({ message: 'Quotation not found' });

        await quot.destroy();
        res.json({ message: 'Quotation deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


  // Get all users
export const getAllQuotationDetails = async (req, res) => {
    try {
        const quotationDetails = await QuotationDetails.findAll();
        res.json(quotationDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


// Get the Single Quotation
export const getQuotation = async (req, res) => {
    try {
        const quot = await Quotation.findByPk(req.quotation.id);
        if (!quot) {
            return res.status(404).json({ message: 'Quotation not found' });
        }
        res.status(200).json({ quot });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
