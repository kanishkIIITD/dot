const express = require("express");
const router = express.Router();

const { authentication, isStudent, isAdmin } = require("../middlewares/auth");

const { login, signup } = require("../controllers/Auth");

router.post("/login", login);
router.post("/signup", signup);

// protected routes
router.get("/student", authentication, isStudent, (req, res) => {
    // res.send("Hello students");
    res.json({
        success: true,
        user: req.user,
        message: "Hello students",
    });
});

router.get("/admin", authentication, isAdmin, (req, res) => {
    // res.send("Hello admin");
    res.json({
        success: true,
        user: req.user,
        message: "Hello admin",
    });
});

// testing protected route
router.get("/test", authentication, (req, res) => {
    // res.send("Hello test");
    res.json({
        success: true,
        user: req.user,
        message: "Hello test",
    });
});

module.exports = router;
