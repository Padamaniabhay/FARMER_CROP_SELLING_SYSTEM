//libraries
import express  from "express";
import multer from "multer";    //accept image from the user that is uploading, this store it in memory untill api is done uploading in AWS



//Database model
import { ImageModel } from "../../database/allModels";


//Utilities
// import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();


//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/

Router.get("/:_id", async (req, res) => {
    try {
      const image = await ImageModel.findById(req.params._id);
  
      return res.json({ image });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/*
Route           /
Descrip         Uploading given image to S3 bucket, and then saving the file link in mongoDB
Params          None
Access          Public
Method          POST
*/

//Router.post("/",upload.array("file",4),async(req,res)=>{    //array means we can upload multiple files and in params 4 means max 4 file we can upload at a time

    // Router.post("/",upload.single("file"),async(req,res)=>{ 
    // try{

    //     const file = req.file;

    //     //S3 bucket options
    //     const bucketOptions = {
    //         Bucket:"foodorderpersonal",
    //         Key:file.originalname,
    //         Body:file.buffer,
    //         ContentType:file.mimetype,
    //         ACL:"public-read"       //access control list
            
    //     };
     

// const uploadImage = await s3Upload(bucketOptions);

// return res.json({uploadImage:uploadImage});

//     }catch(error){
//         return res.status(500).json({error:error.message});
//     }
// });


export default Router;

  