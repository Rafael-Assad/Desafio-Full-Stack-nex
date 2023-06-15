const express = require('express')

const productsController = require('../controllers/products.controller')
const { authJwt } = require("../middleware");

const productsRoutes = express.Router()

productsRoutes.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, Content-Type, Accept"
    )

    next()
})

productsRoutes.post("/product", productsController.create);

productsRoutes.get("/products", productsController.list);

module.exports = productsRoutes