require('dotenv').config()


import express from "express" 


//API
import Auth from "./API/Auth";
// import Image from "./API/Image";
// import Order from "./API/Orders";
// import Review from "./API/reviews";
// import User from "./API/User";




import ConnectDB from "./Database/connection"

const crop = express();

crop.get("/", (req, res) => res.json({ message: "SetUp Success Yay!!!!!!" }));

crop.listen(4000, () => ConnectDB().then(() => console.log("Server is Up and running ")).catch(() => console.log("DB connection Failed ")));

