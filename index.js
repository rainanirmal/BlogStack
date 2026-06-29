require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const UserRouter = require("./routes/user");

const PORT = process.env.PORT;
const app = express();

mongoose.connect(process.env.MONGO_URL).then(() => {console.log("MongoDB connected !")});

app.use(express.urlencoded({ extended : false}));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (request, response) => {
  response.render("home");
});

app.use("/user" , UserRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});