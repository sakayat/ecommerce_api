const express = require("express");
const router = express.Router();

const {
  productsRoute,
  addProduct,
} = require("../controllers/productsController");

// get route
router.get("/products", productsRoute);

// post route

router.post("/add/product", addProduct);

module.exports = router;
