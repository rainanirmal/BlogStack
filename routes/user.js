const { renderSignUp , renderSignIn , handleSignUp } = require("../controllers/user");
const { Router } = require("express");

const router = express.Router();

router.get("/signup" , renderSignIn);
router.get("/signin" , renderSignIn);
router.post("/signup" , handleSignUp);

module.exports = router;