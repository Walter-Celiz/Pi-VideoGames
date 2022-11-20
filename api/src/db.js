require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Read all the files from the Models folder, require them and add them to the modelDefiners array
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Inject the connection (sequelize) to all the models
modelDefiners.forEach((model) => model(sequelize));
// Capitalize the names of the models ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// In sequelize.models are all imported models as properties
// To relate them do a destructuring
const { VideoGame, Genre, Platfor } = sequelize.models;

// Here would come the relationships
VideoGame.belongsToMany(Genre, { through: "videoGame_genre" });
Genre.belongsToMany(VideoGame, { through: "videoGame_genre" });
VideoGame.belongsToMany(Platfor, { through: "platfor_videoGame" });
Platfor.belongsToMany(VideoGame, { through: "platfor_videoGame" });

module.exports = {
  ...sequelize.models, // to be able to import the models 
  db: sequelize, // to import the connection 
  VideoGame,
  Genre,
  Platfor
};
