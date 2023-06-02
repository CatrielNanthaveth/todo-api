const express = require('express');
const pg = require('pg');
const morgan = require('morgan');

const taskRoutes = require('./routes/tasks.routes');

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));

app.use(taskRoutes);


app.listen(port, (err) => {
    if (err) console.error(err);
    console.log("Server on port " + port);
});