const getAllTasks = async (req, res) => {
    res.send('retrieving a list of tasks');
};

const getSingleTask = (req, res) => {
    res.send('retrieving a single task');
};

const createTask = (req, res) => {
    res.send('creating a task');
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