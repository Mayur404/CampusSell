const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    res.json({ message: "Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if data exists
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // 2. Find User
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 3. Check Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Wrong password" });
    }

<<<<<<< HEAD
    // 4. GENERATE TOKEN (The "Digital ID Card")
    // We sign it with our secret key so nobody can fake it
    const token = jwt.sign(
      { id: user._id, email: user.email }, // Data inside the token
      process.env.JWT_SECRET || "default_secret", // Secret Key (Best to put in .env)
      { expiresIn: "1h" } // Expires in 1 hour
=======
    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // Token expires in 1 day
>>>>>>> 92470eebf65152c8fe69d0584ccf0c28d59dc2ae
    );

    res.json({
      message: "Login successful",
<<<<<<< HEAD
      token, // <--- SEND THE TOKEN
=======
      token, // Send the token to the frontend
>>>>>>> 92470eebf65152c8fe69d0584ccf0c28d59dc2ae
      user: {
        id: user._id,
        firstName: user.firstName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;