const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, res) => {
    try {
        // fetching file from request
        const file = req.files.file;
        console.log("File is here-->", file);

        // path to store file
        let path =
            __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
        console.log("Path-->", path);

        // moving the file to the path
        file.mv(path, (err) => {
            if (err) {
                console.log(err);
                return res
                    .status(500)
                    .send({ success: false, msg: "Error in uploading file" });
            }
        });

        res.status(200).send({
            success: true,
            msg: "File uploaded successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            msg: "Error in uploading file",
        });
    }
};

exports.imageUpload = async (req, res) => {
    try {
        // fetching file from request
        const file = req.files.file;
        console.log("File is here-->", file);

        // fetching the data from request
        const { name, email, tags } = req.body;
        console.log("Name, email, tags-->", name, email, tags);

        // validation
        const supportedTypes = ["jpeg", "jpg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("File type-->", fileType);
        if (!supportedTypes.includes(fileType)) {
            return res
                .status(400)
                .send({ success: false, msg: "File type not supported" });
        }

        // uploading the file to cloudinary
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",
            folder: "FileUpload",
        });
        console.log("Result-->", result);

        // storing the data in database
        const fileData = new File({
            name,
            email,
            tags,
            imageUrl: result.secure_url,
        });
        await fileData.save();

        res.status(200).send({
            success: true,
            msg: "File uploaded successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            msg: "Error in uploading file",
        });
    }
};

exports.videoUpload = async (req, res) => {
    try {
        // fetching file from request
        const file = req.files.file;
        console.log("File is here-->", file);

        // fetching the data from request
        const { name, email, tags } = req.body;
        console.log("Name, email, tags-->", name, email, tags);

        // validation
        const supportedTypes = ["mp4"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("File type-->", fileType);
        if (!supportedTypes.includes(fileType)) {
            return res
                .status(400)
                .send({ success: false, msg: "File type not supported" });
        }

        // uploading the file to cloudinary
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",
            folder: "FileUpload",
        });
        console.log("Result-->", result);

        // storing the data in database
        const fileData = new File({
            name,
            email,
            tags,
            imageUrl: result.secure_url,
        });
        await fileData.save();

        res.status(200).send({
            success: true,
            msg: "File uploaded successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            msg: "Error in uploading file",
        });
    }
};

exports.imageReducerUpload = async (req, res) => {
    try {
        // fetching file from request
        const file = req.files.file;
        console.log("File is here-->", file);

        // fetching the data from request
        const { name, email, tags } = req.body;
        console.log("Name, email, tags-->", name, email, tags);

        // validation
        const supportedTypes = ["jpeg", "jpg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("File type-->", fileType);

        if (!supportedTypes.includes(fileType)) {
            return res
                .status(400)
                .send({ success: false, msg: "File type not supported" });
        }

        // uploading the file to cloudinary
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",
            folder: "FileUpload",
            quality: "90",
        });
        console.log("Result-->", result);

        // storing the data in database
        const fileData = new File({
            name,
            email,
            tags,
            imageUrl: result.secure_url,
        });
        await fileData.save();

        res.status(200).send({
            success: true,
            msg: "File uploaded successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            msg: "Error in uploading file",
        });
    }
};
