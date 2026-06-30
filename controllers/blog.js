const {} = require("../model/blog");
const Blog = require("../model/blog");
const Comment = require("../model/comment");

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

async function handleBlogComment(request , response) {
    await Comment.create({
        cotent : request.body.cotent,
        blogId : request.params.blogId,
        createdBy : request.user._id,
    });

    return response.redirect(`/blog/${request.params.blogId}`);
}

module.exports = {
    renderAddBlog,
    handleAddBlog,
    handleBlogPage,
    handleBlogComment,
}