const { Router } = require("express");
const { protected } = require("../../middlewares/auth");
const {
  getAllUsers,
  registerUser,
  updateUser,
  getUser,
  deleteUser,
  loginUser,
  getMe,
} = require("./controller");
const router = Router();

router.get("/", getAllUsers);

router.get("/me", protected, getMe);

router.post("/", registerUser);

router.get("/:id", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/login", loginUser);


module.exports = router;
