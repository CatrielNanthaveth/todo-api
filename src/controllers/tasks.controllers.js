const pool = require('../db');

const getAllTasks = async (req, res) => {
    res.send('retrieving a list of tasks');
};

const getSingleTask = (req, res) => {
    res.send('retrieving a single task');
};

const createTask = async (req, res) => {
    const { title, description, user_id} = req.body;

    try {
        const result = await pool.query(`INSERT INTO tasks (title, description, user_id) VALUES (${title}, ${description}, ${user_id}) RETURNING *`);
        res.json(result.rows[0]);
    } catch(err) {
        res.json({
            error: err.message
        });
    };
};

const deleteTask = (req, res) => {
    res.send('deleting a task');
};

const updateTask = (req, res) => {
    res.send('updating a task');
};

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    deleteTask,
    updateTask
};