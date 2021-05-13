const router = require("express").Router();
const UserController = require("../controller/UserController");
const PostTagController = require("../controller/PostTagController");
const PostController = require("../controller/PostController");
const TagController = require("../controller/TagController");



//User rotas
router.post("/createuser", UserController.createUser);
router.get("/getallusers", UserController.getAllUsers);
router.get("/getuser/:id", UserController.getuserById);
router.put("/updateuser/:id", UserController.updateUser);
router.delete("/deleteuser/:id", UserController.deleteUser);
router.get("/getlogin", UserController.findUserByLogin);
router.post("/comparepassword/:id", UserController.userLogin);

//Post rotas
router.post("/createpost", PostController.createPost);
router.get("/getallposts", PostController.getAllPosts);
router.get("/getpost/:id", PostController.getById);
router.put("/updatepost/:id", PostController.updatePost);
router.delete("/deletepost/:id", PostController.deletePost);

//Tag rotas
router.post("/createtag", TagController.createTag);
router.get("/getalltags", TagController.getAllTags);
router.get("/gettag/:id", TagController.getTagById);
router.put("/updatetag/:id", TagController.updateTag);
router.delete("/deletetag/:id", TagController.deleteTag);

module.exports = router;
