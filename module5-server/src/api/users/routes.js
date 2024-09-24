const { Router } = require("express");
const { getAllUsers, creatNewUser, updateUser, getUser, deleteUser } = require("./controller");
const router = Router();

router.get("/", getAllUsers);

router.post("/", creatNewUser);

router.get("/:id", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
