const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb://localhost:27017/basheer1")

connect.then(()=>{
    console.log("database connect sucessfuly");
})
.catch(()=>{
   console.log("database not connect");
});

const loginschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const collection=new mongoose.model("user",loginschema);
module.exports=collection