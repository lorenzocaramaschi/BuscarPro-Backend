const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
