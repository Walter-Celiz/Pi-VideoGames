const { Router } = require("express");
const router = Router();
const { platformControllers } = require("../../controllers/platformController");

router.get("/", platformControllers);

module.exports = router;
