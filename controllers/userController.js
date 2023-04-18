
const { User } = require("../models");

const userController = {};


userController.getProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId,
            {
                attributes: { exclude: ["password", "role_id"] }
            }
        )
        return res.json(
            {
                success: true,
                message: "Here is the profile",
                data: user
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

userController.updateProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const surname = req.body.surname;
        const phone = req.body.phone;
        const payment = req.body.payment;
        const dni = req.body.dni;
        const address = req.body.address;
        const birthdate = req.body.birthdate;
        const updateProfile = await User.update({ surname: surname, phone: phone, payment: payment, dni: dni, address: address, birthdate: birthdate }, { where: { id: userId } })

        return res.json(
            {
                success: true,
                message: "Profile updated",
                data: updateProfile
            }
        );

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
                error: error.message
            }
        );

    }
}


userController.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deleteUser = await User.destroy({ where: { id: userId } })

        return res.json(
            {
                success: true,
                message: "User deleted",
                data: deleteUser
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
                error: error.message
            }
        );

    }
}



module.exports = userController;