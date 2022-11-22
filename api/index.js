const server = require("./src/app.js");
const { db } = require("./src/db.js");
const { PORT } = process.env;
const { getGenres } = require("./src/controllers/genresController");
const { getPlatforms } = require("./src/controllers/platformsController");

// Syncing all the models at once.
try {
  db.sync({ force: true }).then(() => {
    getGenres();
    getPlatforms();
    console.log("Genres and Platforms Precharged 🟢🟢🟢🟢");
    server.listen(3001, () => {
      console.log(`Server listening at Port: ${PORT}!!! 🟢🟢🟢🟢`); // eslint-disable-line no-console
    });
  });
} catch (error) {
  console.log(error + "#Server not found!!! 🔴🔴🔴🔴");
}


