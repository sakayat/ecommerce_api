const Product = require("../models/productSchema")

const productsRoute = (req,res) => {
    return res.json("hello")
}

const addProduct = async (req,res) => {
    const body = await req.body
    const product = await Product.create(body)
    return res.json(product)
}

module.exports = {productsRoute,addProduct}