const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const UserModel = require("./models/Users")

const app = express();

// Environment Variables
const port = process.env.PORT || 3001;
const mongoURI = process.env.DB_HOST;

//Middlewares
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://mohammedrogers579:Rogers2006@crud.9wiir.mongodb.net/")

app.post("/createUser",(req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/", (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/getUsers/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})  

app.put("/updateUsers/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {name:req.body.name}, {email:req.body.email}, {age:req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001,
    () => {
        console.log("Server is running");
    }
)