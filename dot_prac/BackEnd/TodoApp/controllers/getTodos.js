const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({
            success: true,
            message: "Todos fetched successfully",
            data: todos,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message,
        });
    }
};
