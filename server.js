const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));

const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
        useNewUrlParser: true,
        useFindAndModify: false,

    })
    .catch((error) => handError(error));


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// attaching CRUD into the server.
// html display on page
app.use(require("./routes/html"));
// crud operations
app.use(require("./routes/api"));

app.listen(PORT, function () {
    console.log("listening on localhost:" +PORT);
});