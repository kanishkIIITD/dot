const Todo = require("../models/Todo");

exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById({ _id: id });

        if (!todo) {
            return res.status(404).json({
                success: false,
                data: "No Data Found By Given Id",
                message: error.message,
            });
        }

        res.status(200).json({
            success: true,
            message: `Todo with id ${id} fetched successfully`,
            data: todo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message,
        });
    }
};
