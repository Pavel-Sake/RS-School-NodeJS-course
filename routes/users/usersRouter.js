const {Router} = require('express');
const userService = require('./userService');
const User = require('./userModel');

const asyncHandler = require('express-async-handler');
const createError = require('http-errors');

const {getAllUsers, getUser, createUser, updateUser, deleteUser} = userService;

const router = Router();

router.get('/', async (req, res) => {
  // const allUsers = await getAllUsers();

const allUsers = await User.find({});

  res.send(allUsers)
});


router.get('/:id', asyncHandler(async (req, res) => {
  const user = await User.findOne({'id': req.params.id});

  if (!user) {
    throw createError(404, 'User not found');
  }

  res.send(user)
}));


router.post('/', async (req, res) => {
  await createUser();

  const newUser = new User(
    {
      name: req.body.name,
      login: req.body.login,
      password: req.body.password}
  );


  await newUser.save();
  console.log(newUser);
  // res.send('Create new user is dane')
  res.send(newUser)
});


router.put('/:id', asyncHandler(async (req, res) => {
  const user = await updateUser(req.params.id);

  if (!user) {
    throw createError(404, `User not found, don't update`)
  }
  res.send(user);

}));


router.delete('/:id', asyncHandler(async (req, res) => {
  // await deleteUser(req.params.id);

  const user = await User.findOne({'id': req.params.id});

  if (!user) {
    throw createError(404, 'User not found')
  }

  res.send(`User with id ${req.params.id} was deleted`)
}));


module.exports = router;