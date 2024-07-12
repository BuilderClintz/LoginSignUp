const express = require("express")
const app = express()
const path = require("path")
const hbs=require("hbs")
const collection=require("mongodb")

const templetePath=path.join(__dirname,'../templetes')

app.use(express.json())
app.set ("view engine","hbs")
app.set("views",templetePath)


app.get("/", (req,res)=>{
    res.render("login")
})

app.get("/Signup", (req,res)=>{
    res.render("signup")
})

app.post("/signup", async (req,res)=>{

const data={
    name:req.body.name,
    password:req.body.password
}

await collection.insertMany([data])

res.render("home")




})

app.listen(9000,()=>{
    console.log("port connected")
})
