const express = require('express')

const userController = require('../controllers/user.controller')
const { authJwt } = require("../middleware");

const userRoutes = express.Router()

userRoutes.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, Content-Type, Accept"
    )

    next()
})

userRoutes.get("/user",
    [authJwt.verifyToken],
    userController.access
);


module.exports = userRoutes