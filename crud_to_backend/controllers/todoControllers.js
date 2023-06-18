const Todo = require("../models/todoModel.js");


/**
 * 
 * @param {GET} req 
 * @param {JSON} res 
 * @param {*} next 
 * @returns TODO
 */
const getTodo = async (req, res, next) => {

    try {
            const todos = await Todo.find()
           return res.send(todos)
    } catch (error) {
        console.log(error);
    }
}
/**
 * 
 * @param {GET} req 
 * @param {JSON} res 
 * @param {*} next 
 * @returns TODO
 */
const createTodo = async (req, res, next) => {

    try {
        const data = req.body
        console.log(data);
            const todos = await Todo.create(data)
           return res.send(todos)
    } catch (error) {
        console.log(error);
    }
}
/**
 * 
 * @param {GET} req 
 * @param {JSON} res 
 * @param {*} next 
 * @returns TODO
 */
const deleteTodo = async (req, res, next) => {

    try {
        const {id} = req.params
            const todos = await Todo.findByIdAndDelete(id)
           return res.send(todos)
    } catch (error) {
        console.log(error);
    }
}
const updateTodo = async (req, res, next) => {

    try {
        const {id} = req.params
            const todos = await Todo.findByIdAndUpdate(id, {
                status : true
            })
           return res.send(todos)
    } catch (error) {
        console.log(error);
    }
}
/**
 * 
 * @param {GET} req 
 * @param {JSON} res 
 * @param {*} next 
 * @returns TODO
 */
const getSingelTODO = async (req, res, next) => {

    try {
        const {id} = req.params
            const todos = await Todo.findById(id)
           return res.send(todos)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getTodo, updateTodo, createTodo,deleteTodo, getSingelTODO}