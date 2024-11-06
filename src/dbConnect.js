import mongoose from "mongoose";
const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("mongodb is Already Connected!");
    return;
  }
  try {
    await mongoose.connect("mongodb+srv://mazhar:mazhar123@savoy.5nro6.mongodb.net/");
    console.log("Mongodb is Now Connected");
  } catch (error) {
    console.log(error, "Error From Mongodb Connection Error");
  }
};
export default dbConnect;