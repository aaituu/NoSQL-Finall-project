const router = require("express").Router();
const {
  createOrder,
  listMyOrders,
  getMyOrder,
  adminList,
  adminUpdateStatus
} = require("../controllers/orders.controller");
const { auth, adminOnly } = require("../middleware/auth.middleware");

// user
router.post("/", auth, createOrder);
router.get("/", auth, listMyOrders);

// admin
router.get("/admin/all", auth, adminOnly, adminList);
router.patch("/admin/:id/status", auth, adminOnly, adminUpdateStatus);

router.get("/:id", auth, getMyOrder);

module.exports = router;
