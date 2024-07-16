const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require ("./Routes/AuthRoutes");
const app = express();
const cookieParser = require("cookie-parser");

app.listen(4000, () => {
    console.log("sever stsrted on port 4000");
});

mongoose.connect("mongodb://localhost:27017/jwt",{
    usNewUrlParser:true,useUnifiedtopology:true
}).then(() => {
    console.log("DB connection Successfull")
}).catch((err) => {
    console.log(err.message);
});

app.use(
    cors({
        origin : ["http://localhost:3000"],
        method : ["GET" , "POST"],
        credentials: true,
    })
);


app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);