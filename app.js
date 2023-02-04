const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/hackDB");
mongoose.set('strictQuery', true);

const loginSchema = new mongoose.Schema({
    email: String,
    password: String
});


const Login = mongoose.model("Login", loginSchema);


const login = new Login({
    email: "123@gmail.com",
    password: "123"
});

// login.save();


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
});
