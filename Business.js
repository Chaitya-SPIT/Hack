const express = require('express');
const mongoose = require('mongoose');
const mongoDB = "mongodb://127.0.0.1:27017/Hackerthon";
mongoose.set('strictQuery', true);
mongoose.connect(mongoDB)


const app = express();
const bodyParser =  require('body-parser');



app.use(bodyParser.urlencoded({
    extended: true
}));
// mongoose.connect(mongoDB);
const NewSchema = new mongoose.Schema({
    B_Name:String,
    Address:String,
    Type_B:String,
    GST_No:String,
    Contact:Number,
    Email_Id:String,
    B_website:String, 
    Password:String

})

const NewModel = new mongoose.model("Business",NewSchema);

app.post("/",function(req,res){
    var B_Name =req.body.B_Name;
    var Address =req.body.Address;
    var Type_B =req.body.Type_B;
    var GST_No =req.body.GST_No;
    var Contact =req.body.Contact;
    var Email_Id =req.body.Email_Id;
    var B_website =req.body.B_website;
    var Password =req.body.Password;
    const data = new NewModel(
        {
            B_Name:B_Name,
            Address:Address,
            Type_B:Type_B,
            GST_No:GST_No,
            Contact:Contact,
            Email_Id:Email_Id,
            B_website:B_website,
            Password:Password

        }
        );
    data.save();


})


