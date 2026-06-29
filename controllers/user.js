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

function handleSignIn(request , response) {
    const {email , password} = request.body;

    const user = User.matchPassword(email , password);

    console.log("User : " , user);

    return response.redirect("/");
}

module.exports = {
    renderSignUp , 
    renderSignIn , 
    handleSignUp,
};