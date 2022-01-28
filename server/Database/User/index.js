import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: { type: Number },
    city:{type:String},
    state:{type:String},
    pincode:{type:Number, required:true}
    
},
    {
        timeStamps: true     //it create two attributes  1)createdAt 2)updatedAt
    });

UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "FarmerCrop");
}

//static and models

UserSchema.statics.findEmailAndPhone = async ({ email, phoneNumber }) => {

    //check whether the email exists
    const checkUserByEmail = await UserModel.findOne({ email });

    //check whether the phone Number exists
    // const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    // if (checkUserByEmail || checkUserByPhone) {
    if (checkUserByEmail) {
        throw new Error("User already exist");
    }

    return false;
};




UserSchema.statics.findEmailAndPassword = async ({ email, password }) => {

    //check whether the email exists
    const user = await UserModel.findOne({ email });

    //user not exist
    if (!user) throw new Error("User does not exist");

    //check whether the password is correct or not
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch) {
        throw new Error("Invalid Password");
    }

    return user;
};


//before createing a data in mongodb it will run bellow method that is   pre method
UserSchema.pre("save", function (next) {
    const user = this;

    //password is not modified
    if (!user.isModified("password")) return next();

    //generating bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if (error) return next(error);

        //hashing the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            //assigning hashed password
            user.password = hash;
            return next();
        });
    });
});


export const UserModel = mongoose.model("Users", UserSchema);
