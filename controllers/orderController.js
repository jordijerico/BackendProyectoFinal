const { Order } = require("../models");
const orderController = {};


orderController.getAllOrdersByUser = async (req, res) => {
    try {
        const ordersByUser = await Order.findAll({ where: { user_id: req.userId } });
        return res.json(
            {
                success: true,
                message: "Here are all the orders",
                data: ordersByUser
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


orderController.createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(
            {
                user_id: req.userId,
                status: "pending"
            }
        )

        return res.json(
            {
                success: true,
                message: "Order created",
                data: newOrder
            }
        );
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

orderController.updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const status = req.body.status;
        
        const updateOrder = await Order.update({ status: status}, { where: { id: orderId} })

        return res.json(
            {
                
                success: true,
                message: "Order status updated",
                data: updateOrder
            }
        );
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



module.exports = orderController;