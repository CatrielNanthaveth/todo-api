const { Router } = require('express');
const { getAllUsers, getSingleUser, createUser, deleteUser, updateUser } = require('../controllers/users.controllers');

const router = Router();

router.get('/Users', getAllUsers);

router.get('/Users/:id', getSingleTask);

router.post('/Users', createTask);

router.delete('/Users/:id', deleteTask);

router.put('/Users/:id', updateTask);

module.exports = router;