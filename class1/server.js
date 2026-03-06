const express = require("express");
const app = express();
const notes =[]
app.use(express.json())
app.post("/note",(req,res)=>{
    console.log(req.body)
})

app.listen(3000, (req, res) => {
  console.log("server is running");
});
