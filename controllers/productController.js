const { Product } = require("../models");
const productController = {};

productController.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        return res.json(
            {
                success: true,
                message: "Here are all the products",
                data: products
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );

    }
}

productController.getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByPk(productId)
        return res.json(
            {
                success: true,
                message: "Here is the product you requested for",
                data: product
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );

    }
}




module.exports = productController;