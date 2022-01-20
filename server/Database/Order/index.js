import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"Users"
    },
    orderDetails:[
        { 
            crop:{type:mongoose.Types.ObjectId,ref:"Crops"},
            quantity:{type:Number,required:true},
            paymode:{type:String,required:true},
            status:{type:String,default:"Placed"},
            paymentDetails:{
                itemTotal:{type:Number,required:true},
                promocode:{type:Number,required:true},
                tax:{type:Number,required:true}
            }
        }
    ],
    orderRatings:{type:Number,required:true}
},
{
    timeStamps:true
}
);

export const OrderModel = mongoose.model("Orders",OrderSchema);