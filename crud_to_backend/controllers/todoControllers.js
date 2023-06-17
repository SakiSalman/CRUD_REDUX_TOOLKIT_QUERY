const Todo = require("../models/todoModel.js");



const getTodo = async (req, res, next) => {

    try {
            const todos = await Todo.find()

            res.send(todos)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getTodo}