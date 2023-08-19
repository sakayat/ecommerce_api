const Product = require("../models/productSchema");

const productsRoute = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.json({ message: "internal server error" });
  }
};

const addProduct = async (req, res) => {
  const body = await req.body;
  try {
    const product = await Product.create(body);
    return res.json(product);
  } catch (error) {
    return res.json({ message: "internal server error" });
  }
};

module.exports = { productsRoute, addProduct };
