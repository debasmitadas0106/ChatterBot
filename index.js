const express = require("express");
const app = express();
const dotenv = require("dotenv");
const axios = require("axios");
const { createUserController } = require("./api/Controller/userController");
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi the app is working");
});

app.get("/api-check", (req, res) => {
  console.log("Jay shree ram");
  res.send("LogDoor has started well");
});

app.post("/create-user", createUserController);

app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
