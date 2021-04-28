const router = require("express").Router();
const UserController = require("../controller/UserController");

//User rotas
router.get("/user", UserController.getAllUsers);

module.exports = router;
