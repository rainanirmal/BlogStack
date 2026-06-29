const { renderSignUp , renderSignIn , handleSignUp , handleSignIn } = require("../controllers/user");
const { Router } = require("express");

const router = Router();

router.get("/signup" , renderSignUp);
router.get("/signin" , renderSignIn);
router.post("/signup" , handleSignUp);
router.post("/signin" , handleSignIn);

module.exports = router;