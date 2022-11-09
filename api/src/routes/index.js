const { Router } = require("express");
// Import all routers;
const videoGamesRoutes = require("./middlewares/videoGamesRoutes");
const genresRoutes = require("./middlewares/genresRoutes");

const router = Router();

// Configure the routers
router.use("/videogames", videoGamesRoutes);
router.use("/genres", genresRoutes);

module.exports = router;
