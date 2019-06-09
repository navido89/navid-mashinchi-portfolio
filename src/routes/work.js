const express = require ("express");
const router = express.Router();
const workController = require("../controllers/workController");

router.get("/work", workController.index);

module.exports = router;