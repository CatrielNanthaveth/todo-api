const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const taskRoutes = require('./routes/tasks.routes');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(taskRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})


app.listen(port, (err) => {
    if (err) console.error(err);
    console.log("Server on port " + port);
});