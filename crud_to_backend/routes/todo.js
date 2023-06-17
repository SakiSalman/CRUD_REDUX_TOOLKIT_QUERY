const express = require('express')
const { getTodo } = require('../controllers/todoControllers.js')


const router = express.Router()



// Get Routes
router.get('/todo', getTodo)


// export router
module.exports = router