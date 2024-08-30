const express = require("express")
const { Router } = require("./routes/influeRoutes")

const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', Router);

mongoose.connect("mongodb://0.0.0.0:27017/Creato-Sponso")
    .then(() => {
        console.log("Mongo DB connected..");
    })
    .catch(err => {
        console.log("Mongo DB Connection Error:", err);
    });


app.listen(5000, () => {
    console.log("Server started on port 5000..");
})