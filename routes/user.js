const { renderSignUp , renderSignIn , handleSignUp } = require("../controllers/user");
const { Router } = require("express");

const router = Router();

router.get("/signup" , renderSignUp);
router.get("/signin" , renderSignIn);
router.post("/signup" , handleSignUp);

module.exports = router;