import app from "./app.js";
import mongoose from "mongoose";
async function connectToBD() {
  await mongoose.connect(
    "mongodb+srv://server:EGIcUC84HKlEm7gi@cluster0.5uhod51.mongodb.net/day-3",
  );
  console.log("server is connect to db");
  
}
connectToBD()
app.listen(3000, () => {
  console.log("server is running");
});
