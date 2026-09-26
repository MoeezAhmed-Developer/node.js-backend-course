import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: String,
  link: String,
});
export default studentSchema;
