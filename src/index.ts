import express, { Request, Response } from"express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import myUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("Database Connected Successfully!"))
  .catch((error) => console.log("Error Connecting Database!",error));

const app = express();

app.use(express.json());
app.use(cors());

app.use("/health",async(req:Request,res:Response) => {
  res.send({message:"Health OK!"});
})

app.use("/api/my/user/",myUserRoute);

app.listen(7000,()=>{
    console.log("Server is running on localhost:7000");
});

