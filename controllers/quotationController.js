import Quotation from "../models/quotationModel.js";


// insert quotation
export const insertQuotation = async (req, res) => {
    const { userId,name,address,mobile,total } = req.body;
  
    try {
      const newQuotation = await Quotation.create({ userId,name,address,mobile,total });
      res.status(201).json({ quotation: newQuotation });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

//update quotation
export const updateQuotation = async (req, res) => {
    const { userId,name,address,mobile,total,discount,extraWork,status } = req.body;

    try {
        const quot = await Quotation.findByPk(req.quotation.id); // Get logged-in user's ID from the JWT token
        if (!quot) {
            return res.status(404).json({ message: 'Quotation not found' });
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

  // Get all Quotation
export const getAllQuotation = async (req, res) => {
    try {
        const quotation = await Quotation.findAll();
        res.json(quotation);
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
