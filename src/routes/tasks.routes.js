const { Router } = require('express');
const { getAllTasks, getSingleTask, getUserTasks, createTask, deleteTask, updateTask } = require('../controllers/tasks.controllers');

const router = Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getSingleTask);

router.get('/tasks/:user_id', getUserTasks);

router.post('/tasks', createTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTask);

module.exports = router;