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

async function handleBlogPage(request , response) {
    const blog = await Blog.findById(request.params.id).populate("createdBy");
    return response.render("blog" , {
        user: request.user,
        blog,
    });
}

module.exports = {
    renderAddBlog,
    handleAddBlog,
    handleBlogPage,
}