const router = require("express").Router();
const UserController = require("../controller/UserController");

//User rotas
router.post("/createuser", UserController.createUser);
router.get("/getallusers", UserController.getAllUsers);
router.get("/getuser/:id", UserController.getuserById);
router.put("/updateuser/:id", UserController.updateUser);
router.delete("/deleteuser/:id", UserController.deleteUser);

module.exports = router;
