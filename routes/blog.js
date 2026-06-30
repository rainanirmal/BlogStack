const { Router } = require("express");
const { renderAddBlog , handleAddBlog } = require("../controllers/blog");
const upload = require("../middlewares/uploads");
const { checkForAuthenticatonCookie } = require("../middlewares/authentication");

const router = Router();

router.get("/addblog" , renderAddBlog);
router.post("/"  , checkForAuthenticatonCookie("token") , upload.single("coverImage") , handleAddBlog);

module.exports = router;