const { Router } = require("express");
// Importar todos los routers;
const videoGamesRoutes = require("./middlewares/videoGamesRoutes");
const genresRoutes = require("./middlewares/genresRoutes");

const router = Router();

// Configurar los routers
router.use("/videogames", videoGamesRoutes);
router.use("/genres", genresRoutes);

module.exports = router;
