const mongoose = require("mongoose");

require("dotenv").config();

const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        type: String,
    },
});

// post middleware
fileSchema.post("save", function (doc) {
    try {
        console.log("File saved successfully with data--->", doc);

        // creating a transporter
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // send mail
        let info = transporter.sendMail({
            from: `Kanishk`,
            to: doc.email,
            subject: "File uploaded successfully",
            html: `<h1>File uploaded successfully <p>View Here: ${doc.imageUrl}</p> </h1>`,
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = mongoose.model("File", fileSchema);
