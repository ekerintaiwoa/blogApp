const  mongoose = require("mongoose") ;
const Schema = mongoose.Schema ;

const blogschema = new Schema({

    name : String ,
    title : String,
    blogpost : String




}) ;

mongoose.model("BlogSchema" , blogschema);


module.exports =  mongoose.model("blogApp" , blogschema);