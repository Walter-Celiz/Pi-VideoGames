const { Router } = require('express');
// Importar todos los routers;
const videoGamesRoutes = require("./videoGamesRoutes");
const genresRoutes = require("./genreRoutes")

const router = Router();

// Configurar los routers
router.use("/videogames", videoGamesRoutes);
router.use("/genre", genresRoutes)

module.exports = router;
