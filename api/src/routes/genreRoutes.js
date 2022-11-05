const { Router } = require("express");
const router = Router();
const {
    getAllGenres,
} = require("../../controllers/genresController");

//all this routes start with "/genres"
router.get("/", getAllGenres);

module.exports = router;
