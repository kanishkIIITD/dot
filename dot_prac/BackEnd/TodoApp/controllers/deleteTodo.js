const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete({ _id: id });
        res.status(200).json({
            success: true,
            message: `Todo with id ${id} deleted successfully`,
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
