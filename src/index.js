const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const taskRoutes = require('./routes/tasks.routes');
const userRoutes = require('./routes/users.routes');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(taskRoutes);
app.use(userRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})


app.listen(port, (err) => {
    if (err) console.error(err);
    console.log("Server on port " + port);
});