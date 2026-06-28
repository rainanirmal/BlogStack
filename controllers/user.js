const User = require("../model/user");

function renderSignUp(request , response) {
    return response.render("signup");
}

function renderSignIn(request , response) {
    return response.render("signin");
}

function handleSignUp(request , response) {
    const { fullName , email , password} = request.body;

    const user = User.create({
        fullName,
        email,
        password,
    });

    return user;
}

module.exports = {
    renderSignUp , 
    renderSignIn , 
    handleSignUp,
};