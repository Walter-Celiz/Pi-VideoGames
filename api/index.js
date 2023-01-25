require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;
const { getVideogames } = require("./src/controllers/videoGamesController");
// const { controllerGenres } = require("./src/controllers/genresController");
// const { platformControllers } = require("./src/controllers/platformController");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  getVideogames();
  // controllerGenres();
  // platformControllers();
  server.listen(PORT, () => {
    console.log(`#Server listening at Port: ${PORT}!!! 🟢🟢🟢🟢`); // eslint-disable-line no-console
  });
});
