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
            max: 20
        }
       
    },
    { timestamps: true }
);

const Image = mongoose.model("Image", ImageSchema);
export default Image;