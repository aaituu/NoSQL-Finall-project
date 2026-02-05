const router = require("express").Router();
const { topProducts, salesByStatus } = require("../controllers/analytics.controller");
const { auth, adminOnly } = require("../middleware/auth.middleware");

router.get("/top-products", auth, adminOnly, topProducts);
router.get("/sales-by-status", auth, adminOnly, salesByStatus);

module.exports = router;
