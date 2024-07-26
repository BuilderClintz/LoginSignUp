const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://wpcss001:iremide238@register-form.iclgq7s.mongodb.net/?retryWrites=true&w=majority&appName=Register-form").then(()=>{
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

const collection=new mongoose.model("Collection1",logInschema)


module.exports = collection