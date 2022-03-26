const  express = require("express") ;

const server =  express() ;

const url  = "mongodb://127.0.0.1:27017/blogApp" ;

const ejs = require("ejs") ;

 const blogpost = require("./model/blogschema") ;




const mongoose = require("mongoose") ;



server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs") ;


mongoose.connect(url ,(err,db)=>{

    if(err){

       console.log("unnable to connect to url") ;
    } else{

    console.log("succesfully connected to database")
    }


})  ;


  server.get("/", (req,res)=>{
 
      res.render("home") ;

  }) ;

  server.post("/blogs" ,(req,res)=>{
      const blogdetails = req.body ;

    try {

        let newBlogpost = new blogpost({
            name :  req.body.name,
            title : req.body.title ,
            blogpost :req.body.blogpost
   
   
   
         }) ;
         newBlogpost.save();

         res.render("blogs" ,{blogdetails})

         console.log("saved sucessfully to database")
        
    } catch (error) {

       res.Status(500).send("error connecting to database") ;
       console.log(error);
        
    }




  })





  server.listen(3200,()=>{

     console.log("listening from port 3200") ;

  })

