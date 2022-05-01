const {Router} = require("express");
const router = Router();
const userController = require("../controllers/user");


router.get("/:id", userController.userGet)


router.put("/", userController.userPut)


router.delete("/", userController.userDelete)

router.post("/", userController.userPost);


module.exports = router;