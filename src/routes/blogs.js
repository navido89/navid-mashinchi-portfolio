const express = require ("express");
const router = express.Router();
const blogsController = require("../controllers/blogsController");

router.get("/blog", blogsController.index);

module.exports = router;