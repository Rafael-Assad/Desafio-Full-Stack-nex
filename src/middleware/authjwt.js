const jwt = require('jsonwebtoken')

const config = require('../config/auth.config')
const db = require('../models')

const authJwt = {
    verifyToken: (req, res, next) => {
        let token = req.headers["authorization"];

        if (!token) {
            return res.status(403).send({
                "error": "No token provided!"
            });
        }

        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    "error": "Unauthorized!"
                });
            }

            req.userId = decoded.id;

            next();
        });
    }
}

module.exports = authJwt