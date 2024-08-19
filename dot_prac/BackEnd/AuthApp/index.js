const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

require("./config/database").dbConnect();

const userRouter = require("./routes/user");
app.use("/api/v1", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});
