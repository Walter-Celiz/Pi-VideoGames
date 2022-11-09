const { DataTypes } = require("sequelize");
// Export a function that defines the model
// Inject the connection to sequelize.
module.exports = (sequelize) => {
    // define Model
    sequelize.define(
        "genre",
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
            },
        },
        {
            timestamps: false,
            createdAt: false,
        }
    );
};
