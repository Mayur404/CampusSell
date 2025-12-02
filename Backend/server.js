const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../Frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Login:", username, password);

  if (username === "admin" && password === "1234") {
    return res.send("Login successful!");
  }

  res.send("Invalid username or password");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
