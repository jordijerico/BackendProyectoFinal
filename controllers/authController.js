const authController = {};
const { User } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
authController.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);
        if (name === undefined || email === undefined || password === undefined) {
            return res.json({
                success: false,
                message: "You must fill all the fields"
            })
        }
        const newUser = await User.create(
            {
                name: name,
                email: email,
                password: encryptedPassword,
                role_id: 2
            }
        )


        return res.json(
            {
                success: true,
                message: "User created succesfully",
                data: { newUser }
            });
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

module.exports = authController;