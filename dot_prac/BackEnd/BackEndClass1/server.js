const express = require("express"); // Importing the express library
const app = express(); // Creating an instance of the express application

// Importing the body-parser library to parse JSON bodies
const bodyParser = require("body-parser"); // Importing the body-parser library
app.use(bodyParser.json()); // Configuring the body-parser middleware to parse JSON bodies

/**
 * Start the server and listen on port 3000
 * Starting the server and listening on port 3000
 */
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/**
 * Handle GET requests to the root path ("/")
 * Handling GET requests to the root path ("/")
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
app.get("/", (req, res) => {
    res.send("Hello World"); // Sending a response with the message "Hello World"
});

/**
 * Handle POST requests to the "/api/cars" path
 * Handling POST requests to the "/api/cars" path
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
app.post("/api/cars", (req, res) => {
    const { name, brand } = req.body; // Extracting the name and brand from the request body
    console.log(name, brand); // Logging the name and brand to the console
    res.send("Car Submitted"); // Sending a response with the message "Car Submitted"
});

const mongoose = require("mongoose");
mongoose
    .connect(
        "mongodb://localhost:27017/myDatabase"
        //     {
        //     useNewUrlParser: true,
        //     usseUnifiedTopology: true,
        // }
    )
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
