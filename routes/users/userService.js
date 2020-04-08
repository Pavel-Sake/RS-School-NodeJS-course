const dataUsers = require('../../data/dataUsers');
const dataTasks = require('../../data/dataTasks.js');


function getAllUsers() {

  return dataUsers;
}

function getUser(idParams) {
  const id = Number(idParams);
  const user = dataUsers.find((item) => {
    return  item.id === id
  });
  
  return user
}

function createUser() {

}

function updateUser(idParams) {
  const id = Number(idParams);
  const user = dataUsers.find((item) => {
    return  item.id === id
  });
  
  return user;
}

function updateAssigneeTask(idxElement) {

  dataTasks.map((item, idx) => {

    if (item.userId === idxElement) {
      item.userId = null
    }
  });
}

function deleteUser(idParams) {
  const id = Number(idParams);
  const idxElement = dataUsers.findIndex((item) => {

    return  item.id === id
  });

  dataUsers.splice(idxElement, 1);

  updateAssigneeTask(idxElement);
}

module.exports = {getAllUsers, getUser, createUser, updateUser, deleteUser};