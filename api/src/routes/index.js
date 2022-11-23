const videoGamesRoutes = require("./middlewares/videoGamesRoutes");
const genreRoutes = require("./middlewares/genresRoutes");
const platformRoutes = require("./middlewares/platformsRoute");

const { Router } = require("express");
const router = Router();

router.use("/videogames", videoGamesRoutes);
router.use("/genres", genreRoutes);
router.use("/platforms", platformRoutes);

module.exports = router;
