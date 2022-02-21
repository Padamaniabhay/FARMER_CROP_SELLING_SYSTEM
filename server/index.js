require('dotenv').config()

import express from "express"
import cors from "cors";    //cross origin request-->it require for send and receive data or api from other server
//it means request will coming from other origin in this origin 
import helmet from "helmet";//---> for security   
import passport from "passport";

import path from "path"
import crossOriginResourcePolicy from "cross-origin-resource-policy"


//API
import Auth from "./API/Auth";
import Image from "./API/Image";
import Order from "./API/Orders";
import Review from "./API/reviews";
import User from "./API/User";
import Crop from "./API/Crop";



//Database connection
import ConnectDB from "./Database/connection"


//config
import goolgeAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

const crop = express();
//application middlewares

crop.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Cross-Origin-Resource-Policy","cross-origin");

    next();
});
crop.use(express.json());
crop.use(express.urlencoded({ extended: false }));
// crop.use(helmet());
// crop.use(cors());
crop.use(passport.initialize());
crop.use(passport.session());
crop.use('/public/images', express.static(path.join("public", "images")));
// Sets "Cross-Origin-Resource-Policy: same-origin"
// crop.use(crossOriginResourcePolicy({ policy: "cross-origin" }));



//passport configuration
goolgeAuthConfig(passport);
routeConfig(passport);

crop.use("/auth", Auth);
crop.use("/image", Image);
crop.use("/order", Order);
crop.use("/reviews", Review);
crop.use("/user", User);
crop.use("/crop", Crop);


crop.get("/", (req, res) => res.json({ message: "SetUp Success Yay!!!!!!" }));

crop.listen(4000, () => ConnectDB().then(() => console.log("Server is Up and running ")).catch(() => console.log("DB connection Failed ")));

