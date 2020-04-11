const { Router } = require('express');
const taskService = require('./tasksService');

const asyncHandler = require('express-async-handler');
const createError = require('http-errors');

const { getAllTasks, getTask, createTask, updateTask, deleteTask } = taskService;

const router = Router();

router.get('/', async (req, res) => {
const allTasks = await getAllTasks();

  res.send(allTasks)
});


router.get('/:id', asyncHandler( async (req, res) => {
  const task = await getTask(req.params.id);

  if (!task) {
    throw createError(404, 'Not found task')
  }

    res.send(task)
}));

router.post('/', async (req, res) => {
  await createTask();

  res.send('Create new Board is dane')
});

router.put('/:id', asyncHandler(async (req, res) => {
  const updateTask = await updateTask(req.params.id);


  if (!updateTask) {
    throw createError(404, 'Not found task')
  }

  await res.send(updateTask)
}));

router.delete('/:id',  async (req, res) => {
  await deleteTask(req.params.id);

   res.send(`Board with id ${req.params.id} was deleted`)
});

module.exports = router;