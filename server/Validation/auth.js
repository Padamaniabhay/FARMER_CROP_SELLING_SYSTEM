import joi from "joi";

export const ValidationSignup = (userData) =>{

const Schema = joi.object({
    fullname:joi.string().required().min(5),
    email:joi.string().email(),
    password:joi.string().min(5),
    address:joi.string,
    phoneNumber:joi.number(),
    city:joi.string(),
    state:joi.string(),
    dist:joi.string(),
    pincode:joi.number().min(6)
})

return Schema.validateAsync(userData);

};


export const ValidationSignin = (userData) =>{

const Schema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(5).required()
})

return Schema.validateAsync(userData);

};
