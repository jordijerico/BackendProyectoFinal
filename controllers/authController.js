const authController = {};
const { User } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register function
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

//Log in function

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email } });
        if (!user) {

            return res.send("Wrong Credentials");
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {

            return res.send("Wrong Credentials");
        }

        //Token 
        const token = jwt.sign(
            {
                userId: user.id,
                name: user.name,
                email: user.email,
                roleId: user.role_id
            },
            'secreto'
        );
        return res.json(
            {
                success: true,
                message: "Token created",
                data: token
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

module.exports = authController;