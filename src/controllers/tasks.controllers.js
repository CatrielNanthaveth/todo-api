const pool = require('../db');

const getAllTasks = async (req, res, next) => {
    try {
        const allTasks = await pool.query('SELECT * FROM tasks;');
        res.json(allTasks.rows);
    } catch (error) {
        next(error);
    }
};

const getUserTasks = async (req, res, next) => {
    try {
        const user_id = req.params.user_id;
        const query = 'SELECT * FROM tasks WHERE user_id = $1;';
        const values = [user_id];
        const userTasks = await pool.query(query, values);
        res.json(userTasks.rows);
    } catch (error) {
        next(error);
    }
};

const getSingleTask = async (req, res, next) => {
    try {
        const task_id = req.params.id;
        const query = 'SELECT * FROM tasks WHERE id = $1;';
        const values = [task_id];
        const task = await pool.query(query, values);

        if (task.rows.length === 0) return res.status(404).json({
            message: 'Task not found'
        });
        res.json(task.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createTask = async (req, res, next) => {
    const { title, description, user_id } = req.body;

    try {
        const query = 'INSERT INTO tasks (title, description, user_id) VALUES ($1, $2, $3) RETURNING *;';
        const values = [title, description, user_id];
        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    };
};

const deleteTask = async (req, res, next) => {
    const task_id = req.params.id;

    try {
        const query = 'DELETE FROM tasks WHERE id = $1;';
        const values = [task_id];
        const result = await pool.query(query, values);

        if (result.rowCount === 0) return res.status(404).json({
            message: 'Task not found'
        });

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const task_id = req.params.id;
        const { title, description } = req.body;

        const query = 'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *;';
        const values = [title, description, task_id];
        const result = await pool.query(query, values);

        if (result.rowCount === 0) return res.status(404).json({
            message: 'Task not found'
        });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllTasks,
    getUserTasks,
    getSingleTask,
    createTask,
    deleteTask,
    updateTask
};