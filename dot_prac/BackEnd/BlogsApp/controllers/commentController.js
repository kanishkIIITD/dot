const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
    try {
        // This below method is using save() method of mongoose, we can either use this one or the create() method
        // fetch data from req.body
        const { post, user, body } = req.body;

        // create new comment object
        const newComment = new Comment({
            post,
            user,
            body,
        });

        // save the new comment in database
        const savedComment = await newComment.save();

        // fint the post by id and update the comment array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            // $push is used to push the new comment id in the comment array
            {
                $push: { comments: savedComment._id },
            },
            // new : true is used to return the updated post otherwise it will return the old post
            { new: true }
        )
            .populate("comments") // populate the comments array with comment documents, if we don't populate it will return only ids
            .exec();

        res.status(201).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
};
