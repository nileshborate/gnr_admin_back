// Login user
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register user
export const registerUser = async (req, res) => {
    const { name, password, role, isActive } = req.body;
  
    try {
      /*const existingUser = await User.findOne({ where: { name } });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }*/
  
      //const hashedPassword = await bcrypt.hash(password, 10);
      //const newUser = await User.create({ name, email, password: hashedPassword, role });
      const newUser = await User.create({ name, password, role, isActive });
  
      //const token = jwt.sign({ id: newUser.id, role: newUser.role }, 'your_jwt_secret', { expiresIn: '1h' });
      res.status(201).json({ user: newUser });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

export const loginUser = async (req, res) => {
    const { name, password } = req.body;
    console.log("Api call : name ",name," password ",password)
    try {
      const user = await User.findOne({ where: { name,password } });
      if (!user) {
       return res.status(400).json({ message: 'Invalid username or password' });
      }

      //if (!user || !(await bcrypt.compare(password, user.password))) {
      //  return res.status(400).json({ message: 'Invalid username or password' });
      // }
  
      //const token = jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
      
      // Send both the token and the user's role in the response
      //res.status(200).json({ token, role: user.role });
      res.status(200).json({ message:'Login Successfully',role: user.role});
      
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  // Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};