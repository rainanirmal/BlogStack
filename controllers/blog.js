const {} = require("../model/blog");

function renderAddBlog(request , response) {

    return response.render("addBlog" , {
        user: request.user,
    });
}

function handleAddBlog(request , response) {

    console.log(request.body);

    return response.redirect("/");
}

module.exports = {
    renderAddBlog,
    handleAddBlog,
}