const { Router } = require("express");
const router = Router();
const {
    getAllGamesOrName,
    getGameById,
    createGame,
} = require("../../controllers/videoGamesController");

//all this routes start with "/videogames"
router.get("/", getAllGamesOrName);
router.get("/:id", getGameById);
router.post("/create", createGame);

module.exports = router;
