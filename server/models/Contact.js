//import mongoose package
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your first name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    message: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Contact", ContactSchema);
