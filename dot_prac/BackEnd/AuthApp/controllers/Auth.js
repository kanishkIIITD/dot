const User = require("../models/User");
const bcrypt = require("bcrypt");

require("dotenv").config();

const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
        // get data from request body
        const { name, email, password, role } = req.body;

        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
                existingUser,
            });
        }

        // secure password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10); //10 is the number of rounds
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error hashing password",
                error,
            });
        }

        // create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error,
        });
    }
};

exports.login = async (req, res) => {
    try {
        // fetch data from request body
        const { email, password } = req.body;

        // validate email and password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password",
            });
        }

        // check if user exists
        let user = await User.findOne({ email });
        // if user does not exist return error
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // verify password and generate JWT token
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        // payload for jwt token
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        };

        let token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        // send token to client
        user = user.toObject();
        user.token = token;
        // we did this because if we send user object as a response, then we will not be able to access user's password
        // we have changed password from the user object and not the database
        user.password = undefined;

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            expires: new Date(Date.now() + 30000),
        });
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error logging in",
            error,
        });
    }
};
