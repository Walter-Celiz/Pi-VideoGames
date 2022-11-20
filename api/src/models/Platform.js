const { DataTypes } = require("sequelize");
// Export a function that defines the model
// Inject the connection to sequelize.
module.exports = (sequelize) => {
    // define Model
    sequelize.define(
        "platfor",
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
