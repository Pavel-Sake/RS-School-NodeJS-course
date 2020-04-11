const { Router } = require('express');
const boardService = require('./boardService');

const asyncHandler = require('express-async-handler');
const createError = require('http-errors');

const { getAllBoards, getBoard, createBoard, updateBoard, deleteBoard } = boardService;

const router = Router();

router.get('/', async (req, res) => {
  const allBoards = await getAllBoards();

  res.send(allBoards)
});


router.get('/:id', asyncHandler(async (req, res) => {
  const board = await getBoard(req.params.id);



  if (!board) {
    throw createError(404, 'Not found board')
  }

    res.send(board)
}));


router.post('/', async (req, res) => {
  const newBoard = await createBoard();

  res.send(newBoard)
});


router.put('/:id', asyncHandler(async (req, res) => {
  const board = await updateBoard(req.params.id);

  if(!board) {
    throw createError(404, 'Not found board')
  }

  res.send(board)
}));


router.delete('/:id', (req, res) => {
  deleteBoard(req.params.id);

  res.send(`Board with id ${req.params.id} was deleted`)
});

module.exports = router;