import express from "express"

const crop = express();

crop.get("/", (req, res) => res.json({ message: "SetUp Success Yay!!!!!!" }));

crop.listen(4000, () => console.log("Server is Up and running "));