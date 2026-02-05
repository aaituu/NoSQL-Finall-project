const router = require("express").Router();
const { sendContact } = require("../controllers/contact.controller");

router.post("/send", sendContact);

module.exports = router;
