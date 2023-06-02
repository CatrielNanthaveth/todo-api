const pool = require('../db');

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await pool.query('SELECT * FROM tasks');
        res.json(allTasks.rows);
    } catch (error) {
        console.error(error.message);
    }
};

const getSingleTask = async (req, res) => {
    try {
        const task_id = req.params.id;
        const task = await pool.query(`SELECT * FROM tasks WHERE id = ${task_id}`);

        if (task.rows.length === 0) return res.status(404).json({
            message: 'Task not found'
        });
        res.json(task.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
};

const createTask = async (req, res) => {
    const { title, description, user_id } = req.body;

    try {
        const result = await pool.query(`INSERT INTO tasks (title, description, user_id) VALUES (${title}, ${description}, ${user_id}) RETURNING *`);
        res.json(result.rows[0]);
    } catch (error) {
        res.json({
            error: error.message
        });
    };
};

const deleteTask = async (req, res) => {
    const task_id = req.params.id;
    
    const result = await pool.query(`DELETE FROM tasks WHERE id = ${task_id}`);

    if (result.rowCount === 0) return res.status(404).json({
        message: 'Task not found'
    });

    res.sendStatus(204);
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