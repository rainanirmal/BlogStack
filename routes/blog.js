const { Router } = require("express");
const { renderAddBlog , handleAddBlog , handleBlogPage , handleBlogComment } = require("../controllers/blog");
const upload = require("../middlewares/uploads");
const { checkForAuthenticatonCookie } = require("../middlewares/authentication");

const router = Router();

router.get("/addblog" , renderAddBlog);
router.post("/"  , checkForAuthenticatonCookie("token") , upload.single("coverImage") , handleAddBlog);
router.get("/:id" , handleBlogPage);
router.post("/comment/:blogId" , handleBlogComment );

module.exports = router;