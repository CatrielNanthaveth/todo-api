const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/tasks', async(req, res) => {
    //res.send('retrieving a list of tasks');
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
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