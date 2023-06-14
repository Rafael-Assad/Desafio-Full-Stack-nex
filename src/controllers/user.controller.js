const db = require('../models')

const User = db.user;

exports.access = (req, res) => {
    res.status(200).send("Public Content.");
};
