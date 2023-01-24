require("dotenv").config();
const server = require("./src/app.js");
const { db } = require("./src/db.js");
const { PORT } = process.env;
// const { controllerGenres } = require("./src/controllers/genresController");
// const { platformControllers } = require("./src/controllers/platformController");

// Syncing all the models at once.
try {
  db.sync({ force: true }).then(() => {
    // controllerGenres();
    // platformControllers();
    server.listen(PORT, () => {
      console.log(`#Server listening at Port: ${PORT} 🟢🟢🟢🟢`); // eslint-disable-line no-console
    });
  });
} catch (error) {
  return error;
  // console.log(error + "#Server not found!!! 🔴🔴🔴🔴");
}
