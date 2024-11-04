// middlewares/auth.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  console.log(req.user);
  console.log(req.headers["authorization"]);


  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json("No token provided"); // Unauthorized
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json("Token verification failed"); // Forbidden
    }
    req.user = user;
    next();
  });
};

const authorizeAdmin = (req, res, next) => {
  // Asegúrate de que req.user esté definido
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json("User is not authorized"); // Forbidden
  }
  next();
};

module.exports = { authenticateToken, authorizeAdmin };
