const User = require("../model/user");

function renderSignUp(request , response) {
    return response.render("signup");
}

function renderSignIn(request , response) {
    return response.render("signin");
}

async function handleSignUp (request , response) {
    const { fullName , email , password} = request.body;

    await User.create({
        fullName,
        email,
        password,
    });

    return response.redirect("/");
}

async function handleSignIn(request , response) {
    const {email , password} = request.body;

    const token = await User.matchPasswordAndGenerateToken(email , password);

    // console.log("Token : " , token);

    return response.cookie("token" , token).redirect("/");
}

module.exports = {
    renderSignUp , 
    renderSignIn , 
    handleSignUp,
    handleSignIn,
};