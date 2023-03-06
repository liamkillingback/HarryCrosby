import mongoose from "mongoose";

const ImageSchema = mongoose.Schema(
  {
    imagePath: {
      type: String,
      required: true,
      max: 300,
    },
    genre: {
      type: String,
      required: false,
      max: 20,
    },
    public_id: {
      type: String,
      required: true,
      max: 300,
    },
    signature: {
      type: String,
      required: true,
      max: 300,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", ImageSchema);
export default Image;