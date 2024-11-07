const express=require('express');
const path=require("path");
const collection=require("./config");

const app=express();

app.set("view engine","ejs");
app.use( express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    res.render("login");
});
app.get ("/home",(req,res)=>{
    res.render("home");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
});

app.post("/signup",async (req,res)=>{
     const data={
        name:req.body.username,
        password:req.body.password
    }
    const existing=await collection.findOne({name: data.name});
    if(existing){
        res.send("user already exist.please choose a different username")
    }
    else{
        const userdata=await collection.insertMany(data);
        console.log(userdata);
    }
    res.redirect('/')
    

});

app.post("/login", async(req,res)=>{
    console.log(req.body);
    try {
        const check=await collection.findOne({name:req.body.username});
        if(!check){
           return res.send ("user cannot found")
        }
        const ispassword=req.body.password===check.password;
        if(ispassword){
            return res.render("resume")
        }else{
            return res.send("wrong password");
        }
    } catch {
        return res.send("wrong details")
        
    }
    

})

const port=5008
app.listen(port,()=>{
    console.log(`sever running on port:${port}`)
})