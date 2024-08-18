const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;

        const newPost = new Post({
            title,
            body,
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("comments")
            .populate("likes")
            .exec();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
};
