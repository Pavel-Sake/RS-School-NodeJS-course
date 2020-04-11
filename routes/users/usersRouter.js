const {Router} = require('express');
const userService = require('./userService');

const asyncHandler = require('express-async-handler');
const createError = require('http-errors');

const {getAllUsers, getUser, createUser, updateUser, deleteUser} = userService;

const router = Router();

router.get('/', async (req, res) => {
  const allUsers = await getAllUsers();

   res.send(allUsers)
});


router.get('/:id', asyncHandler(async (req, res, next) => {
  const user = await getUser(req.params.id);


  if (!user) {
    throw createError(404, 'User not found')
  }

  res.send(user)
}));


router.post('/', async (req, res) => {
  await createUser();

  res.send('Create new user is dane')
});


router.put('/:id', asyncHandler(async (req, res) => {
  const user = await updateUser(req.params.id);

  if (!user) {
    throw createError(404, `User not found, don't update`)
  }
  res.send(user);

}));


router.delete('/:id', asyncHandler(async (req, res) => {
  await deleteUser(req.params.id);

  // if (!updateUser) {
  //   throw createError(404, 'User not found')
  // }

  res.send(`User with id ${req.params.id} was deleted`)
}));


module.exports = router;