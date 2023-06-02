const { Router } = require('express');

const router = Router();

router.get('/tasks', (req, res) => {
    res.send('retrieving a list of tasks');
});

router.get('/tasks/:id', (req, res) => {
    res.send('retrieving a single task');
});

router.post('/tasks', (req, res) => {
    res.send('creating a task');
});

router.delete('/tasks', (req, res) => {
    res.send('deleting a task');
});

router.put('/tasks', (req, res) => {
    res.send('updating a task');
});

module.exports = router;