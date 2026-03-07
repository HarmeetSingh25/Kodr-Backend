import mongoose from "mongoose";

const noteSchema =  new mongoose.Schema({
    tittle:String,
    description:String
})
export const noteModel = mongoose.model("notes", noteSchema)
