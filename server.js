const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Use apiRoutes
app.use("/api", apiRoutes);

// Send every request to the React app
// app.use((req, res) =>
//     res.sendFile(path.join(__dirname, "./client/build/index.html"))
// );

// Listening on PORT
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
