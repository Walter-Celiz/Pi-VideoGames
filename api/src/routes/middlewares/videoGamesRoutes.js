const { Router } = require("express");
const router = Router();
const {
    getAllVideoGamesOrName,
    getVideoGameById,
    createVideoGame,
} = require("../../controllers/videoGamesController");

//all this routes start with "/videogames"
router.get("/", getAllVideoGamesOrName);
router.get("/:id", getVideoGameById);
router.post("/create", createVideoGame);

module.exports = router;
