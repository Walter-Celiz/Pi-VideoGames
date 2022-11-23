const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define(
        "platforms",
        {
            name: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
            createdAt: false,
        }
    );
};
