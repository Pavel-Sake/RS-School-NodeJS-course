const dataTasks = require('../../data/dataTasks.js');

function getAllTasks() {

  return dataTasks
}

function getTask(idParams) {
  const id = Number(idParams);
  const task = dataTasks.find((item) => {
    return  item.id === id
  });

  return task
}

function createTask() {


}

function updateTask(idParams) {
  const id = Number(idParams);
  const updateTask = dataTasks.find((item) => {
    return  item.id === id
  });

  return updateTask
}

function deleteTask(idParams) {
  const id = Number(idParams);
  const idx = dataTasks.findIndex((item) => {
    return  item.id === id
  });

  dataTasks.splice(idx, 1);

}

module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask};