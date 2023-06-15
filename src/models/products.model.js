module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        img: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description:{
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    return Products
}