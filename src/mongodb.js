const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:9000/LoginSignUpTutorial").then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})


const logInschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection1",logInschema)


module.exports=collection