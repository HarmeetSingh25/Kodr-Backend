import express from "express";
import morgan from "morgan";
import {noteModel} from "./models/node.model.js";
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
export default app;
