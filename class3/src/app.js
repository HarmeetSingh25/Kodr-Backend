import express from "express";
import morgan from "morgan";
import noteModel from "./models/node.model.js";
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.post("/notes", async (req, res) => {
  const { tittle, description } = req.body;
  await noteModel.create({
    tittle: tittle,
    description: description,
  });
  res.status(200).json({
    message: "Note created succesfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  console.log(notes);
  res.status(200).json({
    message: "All data fetch ",
  });
});

app.delete("/notes/:id", async (req, res) => {
  await noteModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "Note delete ",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body;
  await noteModel.findByIdAndUpdate(id, description);
  res.status(200).json({
    message: "update successfully",
  });
});

export default app;
