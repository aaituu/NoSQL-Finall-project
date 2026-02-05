const router = require("express").Router();
const { auth } = require("../middleware/auth.middleware");
const { create, listMy, clearMy } = require("../controllers/feedback.controller");

router.get("/my", auth, listMy);
router.post("/", auth, create);
router.delete("/my", auth, clearMy);

module.exports = router;
