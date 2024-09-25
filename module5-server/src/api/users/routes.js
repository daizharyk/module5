const { Router } = require("express");
const {
  getAllUsers,
  registerUser,
  updateUser,
  getUser,
  deleteUser,
  loginUser,
} = require("./controller");
const router = Router();

router.get("/", getAllUsers);

router.post("/", registerUser);

router.get("/:id", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/login", loginUser);
module.exports = router;
