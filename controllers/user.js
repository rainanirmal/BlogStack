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

    try {
        const token = await User.matchPasswordAndGenerateToken(email , password);

        return response.cookie("token" , token).redirect("/");
        
    } catch (error) {
        return response.render("signin" , {
            error : "Incorrect password or email",
        });
    }
}

module.exports = {
    renderSignUp , 
    renderSignIn , 
    handleSignUp,
    handleSignIn,
};