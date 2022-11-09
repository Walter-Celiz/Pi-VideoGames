const server = require("./src/app.js");
const { db } = require("./src/db.js");
const { getAllGenres } = require("./src/controllers/genresController");

// Syncing all the models at once.
db.sync({ force: true }).then(() => {
  getAllGenres();
  console.log("Genres precharged");
  server.listen(3001, () => {
    console.log("Server listening at 3001"); // eslint-disable-line no-console
  });
});
