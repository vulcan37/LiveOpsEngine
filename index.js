const express = require("express");
const mongoose = require("mongoose");
const bodyparse = require("body-parser");
const SERVER_PORT = process.env.PORT || 8080
const app = express();
//routes
const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer");
//connection with database
mongoose.connect("mongodb://localhost:27017/user").then(() => {
    console.log("successfully connected to db");
}).catch(() => {
    console.log("failed to connect to database");
});
app.use(bodyparse.json());
//connection
app.listen(SERVER_PORT, () => {
    console.log("server started at" + " " + SERVER_PORT)
});
//middleware
app.use("/user", userRoutes);
//middleware
app.use("/offer", offerRoutes);
