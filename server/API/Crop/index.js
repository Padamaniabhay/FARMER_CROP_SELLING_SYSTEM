import express from "express";
import passport from "passport";
import multer from 'multer'
import { CropModel } from "../../database/allModels";

// import { useParams } from "react-router-dom";


const Router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname)
    }
})


//Multer config
const upload = multer({ storage: storage })

/*
Route           /
Descrip         get all crop
Params          NONE
Access          Public
Method          GET
*/

Router.get("/", async (req, res) => {
    try {
        // const { type } = useParams();

        const Crop = await CropModel.find({ category: "fruit" });

        if (!Crop) return res.status(404).json({ error: "No Crop are there" });
        return res.json({ Crop });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



/*
Route           /addcrop
Descrip         add new crop
Params          NONE
Access          Public
Method          POST
*/

Router.post("/addcrop", upload.single('image'), passport.authenticate("jwt"), async (req, res) => {
    try {

        const { _id } = req.session.passport.user._doc;

        const image = req.file ? req.file.filename : null;

        const cropData = req.body;

        await CropModel.create({ ...cropData, image, farmer: _id });

        return res.json({ message: "Successfully Added Crop" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;