import express from "express";
import morgan from "morgan";
import noteModel from "./models/node.model.js";
const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  await noteModel.create({
    title: title,
    description: description,
  });
  res.status(200).json({
    message: "note created ",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  console.log(notes);
  res.status(200).json({
    message: "all notes fetched",
    notes,
  });
});

app.delete("/notes/:index", async (req, res) => {
  const id = req.params.index;
  await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "Delete note",
  });
});

app.patch("/notes/:index", async (req, res) => {
  const id = req.params.index;
  const description = req.body;
  await noteModel.findByIdAndUpdate(id, description);
  res.status(200).json({
    message:"note update "
  })
});
export default app;
