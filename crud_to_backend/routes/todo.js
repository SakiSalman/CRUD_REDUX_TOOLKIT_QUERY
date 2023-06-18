const express = require('express')
const { getTodo, getSingelTODO, deleteTodo, createTodo,updateTodo } = require('../controllers/todoControllers.js')


const router = express.Router()



// Get Routes
router.patch('/todo/:id', updateTodo)
router.get('/todo', getTodo)
router.get('/todo/:id', getSingelTODO)
router.delete('/todo/:id', deleteTodo)
router.post('/todo', createTodo)


// export router
module.exports = router