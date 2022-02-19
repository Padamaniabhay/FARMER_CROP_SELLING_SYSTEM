import mongoose from "mongoose";


const CropSchema = new mongoose.Schema({
    name: { type: String, required: true },
    descript: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    address: { type: String },
    image: { type: String },
    farmer: {
        type: mongoose.Types.ObjectId,
        ref: "Users"
    },
    price: { type: Number, default: 150, required: true },
    reviews: {
        type: mongoose.Types.ObjectId,
        ref: "Reviews",
    }
},
    {
        timeStamps: true
    });
export const CropModel = mongoose.model("Crops", CropSchema);


