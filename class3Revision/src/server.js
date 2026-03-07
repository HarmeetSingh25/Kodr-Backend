import app from "./app.js";
import mongoose from "mongoose";
 
 async function connectToBD(){
    await mongoose.connect("mongodb+srv://Server:rA7HLzddsK66niDD@cluster0.nodursb.mongodb.net/day-3")
    console.log("server is connect to db1");
 }

 connectToBD()
app.listen(3000 , () => {
  console.log("server is running ");
});


// rA7HLzddsK66niDD
// mongodb+srv://Server:rA7HLzddsK66niDD@cluster0.nodursb.mongodb.net/