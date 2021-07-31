const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/ResumeDB");
const Schema=mongoose.Schema;

const ContactSchema=new Schema({
    fname:String,
    lname:String,
    email: String,
    comment:String
    
})
var Contactdata=mongoose.model("contactdata",ContactSchema);

module.exports=Contactdata;