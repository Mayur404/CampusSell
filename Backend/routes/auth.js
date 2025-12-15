const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Login attempt:", username, password);

  if (username === "admin" && password === "1234") {
    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

module.exports = router;
