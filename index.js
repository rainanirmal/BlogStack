require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const UserRouter = require("./routes/user");
const BlogRouter = require("./routes/blog");
const cookieParser = require("cookie-parser");
const { checkForAuthenticatonCookie } = require("./middlewares/authentication");

const Blog = require("./model/blog");

const PORT = process.env.PORT;
const app = express();

mongoose.connect(process.env.MONGO_URL).then(() => {console.log("MongoDB connected !")});

app.use(express.urlencoded({ extended : false}));
app.use(cookieParser());
app.use(checkForAuthenticatonCookie("token"));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", async (request, response) => {

  const allBlogs = await Blog.find({}).sort({ createdAt: -1 });

  return response.render("home" , {
    user: request.user,
    blog : allBlogs,
  });
});

app.use("/user" , UserRouter);
app.use("/blog" , BlogRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});