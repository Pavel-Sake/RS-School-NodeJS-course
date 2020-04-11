const express = require('express');

const usersRouter = require('./routes/users/usersRouter.js');
const homeRouter = require('./routes/home.js');
const boardsRouter = require('./routes/board/boardsRouter.js');
const tasksRouter = require('./routes/tasks/tasksRouter');


const app = express();

const PORT = 4000;

app.use(express.urlencoded({ extended: true}));

app.use('/', (req, res, next) => {
  console.log('URL: ', req.url);
  console.log('method: ', req.method);
  console.log('body: ', req.body);

  next()
});


app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/tasks', tasksRouter);


app.use('/', (error, req, res, next) => {
  console.log('Error status: ', error.status);
  console.log('Message: ', error.message);


  // console.log('-------: ', req.url);
  // console.log('-------: ', req.method);

  res.status(error.status);
  res.send(`${error.status} ${error.message}`);
});


app.listen(PORT, () => {
  console.log('Server...')
});