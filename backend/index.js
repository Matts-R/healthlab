
const router = require("express").Router();
const UserController = require("../controller/UserController");
const PostTagController = require("./controller/PostTagController");

//User rotas
router.post("/createuser", UserController.createUser);
router.get("/getallusers", UserController.getAllUsers);
router.get("/getuser/:id", UserController.getuserById);
router.put("/updateuser/:id", UserController.updateUser);
router.delete("/deleteuser/:id", UserController.deleteUser);

//post_tag rotas
router.get("/getallPostTag", PostTagController.getAll);
router.get("/getPostTag/:id", PostTagController.getOne);
router.put("/updatePostTag/:id", PostTagController.update);
router.delete("/deletePostTag/:id", PostTagController.delete);

module.exports = router;
