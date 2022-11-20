const { Router } = require("express");
const router = Router();
const { getGenres } = require("../../controllers/genresController");

//all this routes start with "/genres"
router.get("/", getGenres);

module.exports = router;
