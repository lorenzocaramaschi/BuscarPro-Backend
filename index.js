const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
const path = require("path");
const adminRoutes = require("./routes/adminRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const cors = require('cors');


require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/products", productRoute);
app.use("/auth",authRoutes)
app.use("/", adminRoutes);

app.get("/login",(req,res)=>{
  res.sendFile(path.join(__dirname, "public", "login.html"));
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

mongoose
  .connect(
    "mongodb+srv://loluzaecommerce:1qazxsw2@ecommerce.was0zsh.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce"
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Not connected to the database!");
  });
