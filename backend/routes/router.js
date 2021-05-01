const router = require("express").Router();
const UserController = require("../controller/UserController");
const PostTagController = require("../controller/PostTagController");
const PostController = require("../controller/PostController");

//User rotas
router.post("/createuser", UserController.createUser);
router.get("/getallusers", UserController.getAllUsers);
router.get("/getuser/:id", UserController.getuserById);
router.put("/updateuser/:id", UserController.updateUser);
router.delete("/deleteuser/:id", UserController.deleteUser);

//Post rotas
router.post("/createpost", PostController.createPost);
router.get("/getallposts", PostController.getAllPosts);
router.get("/getpost/:id", PostController.getById);
router.put("/updatepost/:id", PostController.updatePost);
router.delete("/deletepost/:id", PostController.deletePost);

module.exports = router;
