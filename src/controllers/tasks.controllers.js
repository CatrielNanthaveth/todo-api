const pool = require('../db');

const getAllTasks = async (req, res, next) => {
    try {
        const allTasks = await pool.query('SELECT * FROM tasks');
        res.json(allTasks.rows);
    } catch (error) {
        next(error);
    }
};

const getSingleTask = async (req, res, next) => {
    try {
        const task_id = req.params.id;
        const task = await pool.query(`SELECT * FROM tasks WHERE id = ${task_id}`);

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
        const result = await pool.query(`INSERT INTO tasks (title, description, user_id) VALUES (${title}, ${description}, ${user_id}) RETURNING *`);
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    };
};

const deleteTask = async (req, res, next) => {
    const task_id = req.params.id;

    try {
        const result = await pool.query(`DELETE FROM tasks WHERE id = ${task_id}`);

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

        const result = await pool.query(`UPDATE tasks SET title = ${title}, description = ${description} WHERE id = ${task_id} RETURNING *`);

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
    getSingleTask,
    createTask,
    deleteTask,
    updateTask
};