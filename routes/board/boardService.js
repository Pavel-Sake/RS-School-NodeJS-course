const dataBoards = require('../../data/dataBoards');
const dataTasks = require('../../data/dataTasks.js');

 function getAllBoards() {

   return dataBoards
}


function getBoard(idParams) {

  const id = Number(idParams);
  const board = dataBoards.find((item) => {
    return  item.id === id
  });

  return board
}


function createBoard() {

  return 'Create new Board is dane'
}

function updateBoard(idParams) {

  const id = Number(idParams);
  const board = dataBoards.find((item) => {
    return  item.id === id
  });

  return board
}

function deleteTasksOnBoard(id) {

  dataTasks.map((item, idx) => {

    if (item.boardId === id) {
      dataTasks.splice(idx, 1)
    }
  })
 };


function deleteBoard(idParams) {

  const id = Number(idParams);
  const idxElement = dataBoards.findIndex((item) => {
    return  item.id === id
  });

  dataBoards.splice(idxElement, 1);

  deleteTasksOnBoard(id);
}

module.exports = {getAllBoards, getBoard, createBoard, updateBoard, deleteBoard};

