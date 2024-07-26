import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { test } from "./backend/controllers/user.controller.js";
import { test2 } from "./backend/controllers/admin.controller.js";

dotenv.config();

mongoose.connect(process.env.url)
.then(()=>{
    console.log("conexion exitosa")
})
.catch((error)=>{
    console.log("conexion fallida")
})

const app = express();
app.use(cors());

app.listen(4000, ()=>{
    console.log("conexion del servidor exitosa")
})


test()
test2()
    