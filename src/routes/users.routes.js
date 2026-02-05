const router = require("express").Router();
const { me, updateMe } = require("../controllers/users.controller");
const { auth } = require("../middleware/auth.middleware");

router.get("/me", auth, me);
router.put("/me", auth, updateMe);

module.exports = router;
