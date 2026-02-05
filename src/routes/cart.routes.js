const router = require("express").Router();
const { getCart, addItem, patchItem, removeItem, clear } = require("../controllers/cart.controller");
const { auth } = require("../middleware/auth.middleware");

router.get("/", auth, getCart);
router.post("/items", auth, addItem);
router.patch("/items/:id", auth, patchItem);
router.delete("/items/:id", auth, removeItem);
router.delete("/clear", auth, clear);

module.exports = router;
