const express = require ("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const validation = require("./validation");


router.get("/contact", contactController.index);
router.post("/contact", validation.validateForm, contactController.emailSent);

module.exports = router;