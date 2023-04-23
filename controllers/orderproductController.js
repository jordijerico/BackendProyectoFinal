const { Order,Order_product, Product} = require("../models");
const orderproductController = {};

orderproductController.getOrderProductByOrderId = async (req, res) => {
    try {
        
        // const orderId = req.params.id;
        const order_product = await Order.findAll({ 
            where: { user_id: req.userId } ,
            include : Product
        })
        return res.json(
            {
                success: true,
                message: "Here is the order_product you requested for",
                data: order_product
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


module.exports = orderproductController;