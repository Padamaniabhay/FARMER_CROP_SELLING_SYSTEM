require('dotenv').config()


import express from "express" 
import cors from "cors";    //cross origin request-->it require for send and receive data or api from other server
//it means request will coming from other origin in this origin 
import helmet from "helmet";//---> for security   
import passport from "passport";


//API
import Auth from "./API/Auth";
import Image from "./API/Image";
import Order from "./API/Orders";
import Review from "./API/reviews";
import User from "./API/User";



//Database connection
import ConnectDB from "./Database/connection"


//config
import goolgeAuthConfig from "./config/google.config"; 
import routeConfig from "./config/route.config";

const crop = express();
//application middlewares
crop.use(express.json());
crop.use(express.urlencoded({extended:false}));
crop.use(helmet());
crop.use(cors());
crop.use(passport.initialize());
crop.use(passport.session());


//passport configuration
goolgeAuthConfig(passport);
routeConfig(passport);

crop.use("/auth",Auth);
crop.use("/image",Image);
crop.use("/order",Order);
crop.use("/reviews",Review);
crop.use("/user",User);


crop.get("/", (req, res) => res.json({ message: "SetUp Success Yay!!!!!!" }));

crop.listen(4000, () => ConnectDB().then(() => console.log("Server is Up and running ")).catch(() => console.log("DB connection Failed ")));

