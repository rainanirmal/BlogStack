const {} = require("../model/blog");
const Blog = require("../model/blog");

function renderAddBlog(request , response) {

    return response.render("addBlog" , {
        user: request.user,
    });
}

async function handleAddBlog(request , response) {

    const { title , body } = request.body;

    await Blog.create ({
        title ,
        body ,
        coverImageURL : `/uploads/blog/${request.user._id}/${request.file.filename}`,
        createdBy : request.user._id,
    })

    return response.redirect("/");
}

module.exports = {
    renderAddBlog,
    handleAddBlog,
}