import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://kamalsingh23056:KamalPass@mern-app.ekxdazl.mongodb.net/?retryWrites=true&w=majority")

const app=express();

app.listen(3000,() =>{
console.log('Server is running on port 3000!!!');
}
);