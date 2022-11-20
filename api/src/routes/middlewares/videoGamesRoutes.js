const { Router } = require("express");
const router = Router();
const {
    getAllVideoGamesOrName,
    getVideoGameById,
    postVideoGame,
} = require("../../controllers/videoGamesController");

//all this routes start with "/videogames"
router.get("/", getAllVideoGamesOrName);
router.get("/:id", getVideoGameById);
router.post("/create", postVideoGame);

module.exports = router;
