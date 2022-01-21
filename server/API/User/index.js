import express from "express";
import passport from "passport";

import { UserModel } from "../../database/allModels";

const Router = express.Router();




/*
Route           /
Descrip         get an own user data
Params          NONE
Access          Public
Method          GET
*/


Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    try {
        const {email,fullname,phoneNumber,address} = req.session.passport.user._doc;
       
        return res.json({ user: {email,fullname,phoneNumber,address} });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



/*
Route           /
Descrip         get an other user data
Params          _id
Access          Public
Method          GET
*/


Router.get("/:_id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params._id)
        const {fullname} = user;
       
        return res.json({ user: {fullname} });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



/*
Route            /update
Descrip         update an user data
Params          userId
Body            user data
Access          Public
Method          PUT
*/


Router.put("/update/:userId", async (req, res) => {
    try {
        const { userId } = req.params;

        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,
            {
                $set: userData
            },
            {
                new: true
            }
        )

        return res.json({ user: updateUserData });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;