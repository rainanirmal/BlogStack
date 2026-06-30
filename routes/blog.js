const { Router } = require("express");
const { renderAddBlog , handleAddBlog } = require("../controllers/blog");

const router = Router();

router.get("/addblog" , renderAddBlog);
router.post("/" , handleAddBlog);

module.exports = router;