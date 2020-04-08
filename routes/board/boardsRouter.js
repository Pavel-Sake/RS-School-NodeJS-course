const { Router } = require('express');
const boardService = require('./boardService');

const { getAllBoards, getBoard, createBoard, updateBoard, deleteBoard } = boardService;

const router = Router();

router.get('/', async (req, res) => {
  const allBoards = await getAllBoards();

  res.send(allBoards)
});


router.get('/:id', async (req, res) => {
  const board = await getBoard(req.params.id);

  if (board) {
    res.send(board)
  }
  else {
    res.status(404).send('Not found 404')
  }

});


router.post('/', async (req, res) => {
  const newBoard = await createBoard();

  res.send(newBoard)
});


router.put('/:id', async (req, res) => {
  const board = await updateBoard(req.params.id);

  res.send(board)
});


router.delete('/:id', (req, res) => {
  deleteBoard(req.params.id);

  res.send(`Board with id ${req.params.id} was deleted`)
});

module.exports = router;