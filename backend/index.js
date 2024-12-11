const express = require("express");
const dotenv = require('dotenv').config();
const connection = require("./config/db");
// const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// var morgan = require("morgan");
const helmet = require("helmet");
const userRouter = require("./routes/user.route");


const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors({
    credential: true,
    origin : process.env.FRONTEND_URL
}));

app.use(express.json());
app.use(cookieParser());
// app.use(morgan());
app.use(helmet({
    crossOriginResourcePolicy: false
}))


app.get("/", (req,res) => {
    res.send('hello world!');
}); 

app.use('/api/user', userRouter);

app.listen(PORT,async()=>{
    try{
        await connection
        console.log(`Server is running on port ${PORT} and DB is also Connected`);
    }
    catch(error){
        console.log("Occured error during connecting", error)
    }
}); 