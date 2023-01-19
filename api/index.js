require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;
// const { controllerGenres } = require("./src/controllers/genresController");
// const { platformControllers } = require("./src/controllers/platformController");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  // controllerGenres();
  // platformControllers();
  server.listen(PORT, () => {
    console.log(`%s listening at PORT: ${PORT}`); // eslint-disable-line no-console
  });
});
