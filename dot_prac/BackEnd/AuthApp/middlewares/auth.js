const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authentication = (req, res, next) => {
    try {
        // extract jwt token
        // const token = req.headers.authorization.split(" ")[1];
        const token =
            req.body.token ||
            req.cookies.token ||
            req.header("Authorization").replace("Bearer ", ""); //This is the most secure of the above methods of extracting token and should be done in the exact same way
        // This works because the token is in the format "Bearer token"

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing",
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decoded);
            req.user = decoded;
        } catch (error) {
            res.status(401).json({
                success: false,
                message: "Token in invalid",
            });
        }
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Unauthorized access",
        });
    }
};

exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role !== "Student") {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access",
            });
        }
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Unauthorized access",
        });
    }
};

exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access",
            });
        }
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Unauthorized access",
        });
    }
};
