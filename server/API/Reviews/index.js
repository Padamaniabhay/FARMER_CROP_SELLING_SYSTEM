import express from "express";
import passport from "passport";

import { ReviewModel } from "../../database/allModels";

const Router = express.Router();




/*
Route           /
Descrip         get all reviews
Params          cropid
Body            None
Access          Public
Method          GET
*/


Router.get("/:cropid", async (req, res) => {
    try {
        const reviews = await ReviewModel.find({crop:req.params.cropid})

        return res.json({reviews});

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route           /new
Descrip         add new review
Params          None
Body            Review object
Access          Public
Method          POST
*/


Router.post("/new",passport.authenticate("jwt"),async (req, res) => {
    try {
        const {_id} = req.session.passport.user._doc;

        const { reviewData } = req.body;

        await ReviewModel.create({...reviewData,user:_id});

        return res.json({ review: "Successfully Created Review" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



/*
Route           /delete
Descrip         delete a review
Params          _id
Access          Public
Method          DELETE
*/


Router.delete("/delete/_id", async (req, res) => {
    try {
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Successfully Deleted Review" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});




export default Router;