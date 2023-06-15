const db = require("../models");

const Products = db.products

exports.create = (req, res) => {
    const name = req.body.name
    const img = req.body.img
    const description = req.body.description

    Products.create({
        name: name,
        img: img,
        description: description
    })
    .then(newProduct => {
        res.send(newProduct);
    })
    .catch(error => {
        res.status(500).send({ message: error.message });
    });
};

exports.list = (req, res) => {
    Products.findAll()
    .then( allProducts => {
        res.send(allProducts);
    })
    .catch(error => {
        res.status(500).send({ message: error.message });
    });
};