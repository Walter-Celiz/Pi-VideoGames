const { Router } = require("express");
// Import all routers;
const videoGamesRoutes = require("./middlewares/videoGamesRoutes");
const genresRoutes = require("./middlewares/genresRoutes");
const platformsRoutes = require("./middlewares/platformsRoute");

const router = Router();

// Configure the routers
router.use("/videogames", videoGamesRoutes);
router.use("/genres", genresRoutes);
router.use("/platforms", platformsRoutes);

module.exports = router;
