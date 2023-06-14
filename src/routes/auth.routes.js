const express = require('express')

const { verifySignUp } = require('../middleware')
const authController = require('../controllers/auth.controller')

const authRoutes = express.Router()

authRoutes.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    )

    next()
})

authRoutes.post( "/auth/signup",
[verifySignUp.checkUsernameAndEmailDuplicity],
authController.signup
)

authRoutes.post("/auth/signin", authController.signin)

module.exports = authRoutes