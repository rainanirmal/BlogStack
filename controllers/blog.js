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
        coverImageURL : request.file.path,
        createdBy : request.user._id,
    })

    return response.redirect("/");
}

async function handleBlogPage(request , response) {
    const blog = await Blog.findById(request.params.id).populate("createdBy");
    const comments = await Comment.find({ blogId : request.params.id }).populate("createdBy");
    return response.render("blog" , {
        user: request.user,
        blog,
        comments,
    });
}

async function handleBlogComment(request , response) {
    await Comment.create({
        content : request.body.content,
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