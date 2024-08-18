const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likepost = async (req, res) => {
    try {
        const { post, user } = req.body;

        const newLike = new Like({
            post,
            user,
        });

        const savedLike = await newLike.save();

        const updatedPost = await Post.findByIdAndUpdate(
            post,
            {
                $push: { likes: savedLike._id },
            },
            { new: true }
        )
            .populate("likes")
            .exec();
        res.status(201).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.unlikepost = async (req, res) => {
    try {
        const { post, like } = req.body;
        const deltedLike = await Like.findOneAndDelete({
            post: post,
            _id: like,
        });

        const updatedPost = await Post.findByIdAndUpdate(
            post,
            {
                $pull: { likes: deltedLike._id },
            },
            { new: true }
        )
            .populate("likes")
            .exec();
        res.status(201).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
};
