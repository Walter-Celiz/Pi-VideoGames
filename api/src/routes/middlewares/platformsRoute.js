const { Router } = require("express");
const router = Router();
const { getPlatforms } = require("../../controllers/platformsController");

//all this routes start with "/platforms"
router.get("/", getPlatforms);

module.exports = router;
