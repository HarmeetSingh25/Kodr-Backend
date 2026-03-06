import express from "express";
const app = express();
const notes = [];
app.use(express.json())

app.post("/notes", (req, res) => {
  notes.push(req.body);
  // console.log(notes);  
  res.status(201).json({
    message: "notes created sucessfully ",
  });
});



app.listen(3000, () => {
  console.log("server is running");
});
