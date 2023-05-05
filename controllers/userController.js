
const { User } = require("../models");
const bcrypt = require('bcrypt');

const userController = {};

userController.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        return res.json(
            {
                success: true,
                message: "Here are all the Users",
                data: users
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
        const email = req.body.email;
        const name = req.body.name;
        const surname = req.body.surname;
        const phone = req.body.phone;
        const payment = req.body.payment;
        const address = req.body.address;
        const dni = req.body.dni;
        const birthdate = req.body.birthdate;
        const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
        const password = encryptedPassword;

        const updateProfile = await User.update({ email: email, name: name, surname: surname, phone: phone, payment: payment, address: address,dni:dni, birthdate: birthdate, password: password }, { where: { id: userId } })

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