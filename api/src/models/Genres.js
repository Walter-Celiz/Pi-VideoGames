const { DataTypes } = require("sequelize")
module.exports = (sequelize) => {
    sequelize.define("genres", {
        name: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        createdAt: false,
    })
}