const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add',TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/update/:id', TaskController.updateTask)
router.post('/update', TaskController.updateTaskPost)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/', TaskController.showTask)


module.exports = router