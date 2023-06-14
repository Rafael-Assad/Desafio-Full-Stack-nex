const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = require("../models");
const config = require("../config/auth.config");

const User = db.user;

const Op = db.Sequelize.Op;

const omitPassword = (user) => {
    const { password, ...userWithoutPassword } = user.dataValues;
    return userWithoutPassword;
}

exports.signup = (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = bcrypt.hashSync(req.body.password, 8)

    User.create({
        username: username,
        email: email,
        password: password
    })
    .then(user => {
        const secureUser = omitPassword(user)
        res.send(secureUser);
    })
    .catch(error => {
        res.status(500).send({ message: error.message });
    });
};

exports.signin = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne({
        where: {
            username: username
        }
    })
    .then(user => {
        if (!user) {
            return res.status(404).send({ error: "User Not found." });
        }

        const passwordIsValid = bcrypt.compareSync(
            password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign(
            { id: user.id }, 
            config.secret, 
            {expiresIn: 86400 } // 24 hours
            );


        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
        });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};

