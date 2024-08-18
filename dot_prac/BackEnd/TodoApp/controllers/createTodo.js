const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await Todo.create({ title, description });
        res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message,
        });
    }
};
