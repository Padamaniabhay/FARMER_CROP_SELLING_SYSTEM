import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    crop:{type:mongoose.Types.ObjectId,ref:"Crops"},
    user:{type:mongoose.Types.ObjectId,ref:"Users"},
    rating:{type:Number,required:true},
    reviewText:{type:String,required:true},
    photos:[{
        type:mongoose.Types.ObjectId,ref:"Images"
    }]
},
{
    timeStamps:true
});

export const ReviewModel= mongoose.model("Reviews",ReviewSchema);