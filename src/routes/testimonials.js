const express = require ("express");
const router = express.Router();
const testimonialsController = require("../controllers/testimonialsController");

router.get("/testimonials", testimonialsController.index);

module.exports = router;