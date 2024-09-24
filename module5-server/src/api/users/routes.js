const { Router } = require("express");
const {
  getAllUsers,
  registerUser,
  updateUser,
  getUser,
  deleteUser,
} = require("./controller");
const router = Router();

router.get("/", getAllUsers);

router.post("/", registerUser);

router.get("/:id", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
