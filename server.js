const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const usersRouter = require('./routes/users/usersRouter.js');
const homeRouter = require('./routes/home.js');
const boardsRouter = require('./routes/board/boardsRouter.js');
const tasksRouter = require('./routes/tasks/tasksRouter');


const URL_MONGO = 'mongodb+srv://sake2110:<password>@cluster-node-t8d2x.mongodb.net/test?retryWrites=true&w=majority';
const userName = 'sake2110';
const password = '8547603';

const app = express();

const PORT = 4000;

app.use(express.urlencoded({ extended: true}));

app.use('/', (req, res, next) => {
  // console.log('URL: ', req.url);
  // console.log('method: ', req.method);
  // console.log('body: ', req.body);

  next()
});

// app.use(morgan('combined'));


app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/tasks', tasksRouter);


app.use('/', (error, req, res, next) => {
  // console.log('Error status: ', error.status);
  // console.log('Message: ', error.message);

  res.status(error.status);
  res.send(`${error.status} ${error.message}`);
});


process.on('uncaughtException', (err) => {
 // console.error(err)
});

process.on('rejectionHandled', (err) => {
  // console.error(err);
  // process.exit()
});

async function start() {
  try {
await mongoose.connect('mongodb+srv://sake2110:8547603@cluster-node-t8d2x.mongodb.net/app', {
  useNewUrlParser: true,
  useFindAndModify: false
});
    app.listen(PORT, () => {
      console.log('Server...');
    })
  }
  catch (e) {
    console.log(e)
  }
}

start()
