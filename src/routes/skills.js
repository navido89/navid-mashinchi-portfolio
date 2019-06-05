const express = require ("express");
const router = express.Router();
const skillsController = require("../controllers/skillsController");

router.get("/skills", skillsController.index);

module.exports = router;