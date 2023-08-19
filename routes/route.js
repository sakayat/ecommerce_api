const { productsRoute } = require("../controllers/productsController");
const express = require("express");
const router = express.Router();

// get route
router.get("/products", productsRoute);

module.exports = router;
