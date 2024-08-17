const express = require("express");
const app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/api/cars", (req, res) => {
    const { name, brand } = req.body;
    console.log(name, brand);
    res.send("Car Submitted");
});
