const express = require('express');

const usersRouter = require('./routes/users/usersRouter.js');
const homeRouter = require('./routes/home.js');
const boardsRouter = require('./routes/board/boardsRouter.js');
const tasksRouter = require('./routes/tasks/tasksRouter');

const app = express();

const PORT = 4000;

app.use(express.urlencoded({ extended: true}));


app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/tasks', tasksRouter);


app.listen(PORT, () => {
  console.log('Server...')
});