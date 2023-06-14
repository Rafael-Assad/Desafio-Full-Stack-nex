const db = require('../models')

const User = db.user

const verifySignUp = {
    checkUsernameAndEmailDuplicity: (req, res, next) =>{
        const usernameSent = req.body.username
        const emailSent = req.body.email

        User.findOne({
            where: {
                username: usernameSent
            }
        })
        .then(user => {
            if(user){
                res.status(400).send({
                    "Fail": "Username already in use!"
                })
                return;
            }
        })
        .catch( error => {
            res.status(500).send({ "error": error.message })
        })

        User.findOne({
            where: {
                username: emailSent
            }
        })
        .then(user => {
            if(user){
                res.status(400).send({
                    "Fail": "E-mail already in use!"
                })
                return;
            }
        })
        .catch( error => {
            res.status(500).send({ "error": error.message })
        })

        next()
    }
}

module.exports = verifySignUp