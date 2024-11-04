// routes/authRoutes.js
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const accessToken = jwt.sign(
      { name: username, role: "admin" },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({ accessToken });
    console.log(accessToken);    
  } else {
    res.status(401).send("Invalid credentials");
  }
});

module.exports = router;
