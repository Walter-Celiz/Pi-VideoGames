const express = require("express");
const router = express.Router();
const {
    getVideogames,
    getGameID,
    postGame,
} = require("../../controllers/videoGamesController");

router.get("/", getVideogames);
router.get("/:id", getGameID);
router.post("/create", postGame);

module.exports = router;
