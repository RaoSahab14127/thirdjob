import express from "express"; 
import mongoose from "mongoose";

const app = express()
try {
    await mongoose.connect('mongodb+srv://eb20103109raohammadali:14127rao@cluster0.m8dnmic.mongodb.net/?retryWrites=true&w=majority&dbname=ThirdJob');
} catch (error) {
    console.log(error);
}

app.listen(8000,()=>{
    console.log("Server is running")
} )