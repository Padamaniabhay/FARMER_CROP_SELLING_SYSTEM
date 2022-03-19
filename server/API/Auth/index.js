import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";


const Router = express.Router();

//Models
import { UserModel } from "../../database/user";

//validation
import { ValidationSignup, ValidationSignin } from "../../validation/auth";

/*
Route           /signup
decrip          signup with email and password
params          NONE
access          public
method          POST
*/

Router.post("/signup", async (req, res) => {
    try {

        await ValidationSignup(req.body.credentials);

        await UserModel.findEmailAndPhone(req.body.credentials);

        //hashing and salting
        //hashing is convert password in encrypted password at 1st time
        //in hashing you can encrypt but not decrypt -->one way only
        //every time you get same encrypted result. so, you can compair both encrypted result        
        //salting is again convert 7 or 8 or ..... times


        const newUser = await UserModel.create(req.body.credentials);

        //JWT Auth Token
        const token = newUser.generateJwtToken();

        return res.status(200).json({ token });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});








/*
Route           /signin
decrip          signin with email and password
params          NONE
access          public
method          POST
*/

Router.post("/signin", async (req, res) => {
    try {

        await ValidationSignin(req.body.credentials);

        const user = await UserModel.findEmailAndPassword(req.body.credentials);

        //JWT Auth Token
        const token = user.generateJwtToken();

        return res.status(200).json({ token, status: "Success" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});





/*
Route           /google
decrip          google signin
params          NONE
access          public
method          GET
*/


Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",     //permission perpose
        "https://www.googleapis.com/auth/userinfo.email"
    ]
})
);






/*
Route           /google/callback
decrip          google signin callback
params          NONE
access          public
method          GET
*/





Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    return res.redirect(`http://localhost:3000/google/${req.session.passport.user.token}`);
    // return res.json({token:req.session.passport.user.token});
}
);




//password: Abhay
//encrypted password - fesilmfi54iesi3234546009dkflk  ->  rgsijvlwssaioj45859349fdjidksfik4

//UserModel.ourStatic()               static
//checkUserByEmail.ourMethods()       instant






export default Router;