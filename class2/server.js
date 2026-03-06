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

app.get("/notes", (req, res) => {
  console.log(notes);
  
  res.status(200).json({
    message: "All notes show successfully",
    notes,
  });
});



app.listen(3000, () => {
  console.log("server is running");
});
