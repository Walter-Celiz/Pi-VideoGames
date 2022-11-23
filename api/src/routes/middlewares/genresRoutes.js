const { Router } = require("express");
const router = Router();
const { controllerGenres } = require("../../controllers/genresController");

router.get("/", controllerGenres);

module.exports = router;
