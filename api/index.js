require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(3000, () => {
    console.log("listening");
});

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("DB is connected")
});