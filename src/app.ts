import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes";
import cors from "cors";


const app = express();  //start server app

app.use(cors());    //allow cross origin
app.use(express.json());  //request send/recive will be in json format

//mongo connection
const MONGO_URL = "mongodb://localhost:27017/";
mongoose.connect(MONGO_URL, {
    dbName: "crud_mongodb"  //name of the database where collections will be stored
}).then( ()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log(`Error: ${error}`);
})

app.get("/", (req, res) => {
    res.send(
        "Hello world"
    );
});


app.use("/", router);

//set listen port (default: 3000)
app.listen(3000, ()=>{
    console.log("Server started on port http://localhost:3000");
})