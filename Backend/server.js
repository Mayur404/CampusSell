require("dotenv").config();

const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const authRoutes = require("./routes/auth");
app.use(authRoutes);


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/landing.html"));
});


app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/signup.html"));
});


app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/login.html"));
});

app.use(express.static(path.join(__dirname, "../Frontend")));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

