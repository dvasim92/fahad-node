const express = require("express");
const { registerUser , userList , updateUser,deleteUser , getUser } = require("../controller/user");
const router = express.Router();

router.post("/register", registerUser);
router.get("/userList", userList);
router.put("/updateUser/:id",updateUser);
router.delete("/deleteUser/:id",deleteUser);
router.get("/getUser/:id",getUser);

module.exports = router;