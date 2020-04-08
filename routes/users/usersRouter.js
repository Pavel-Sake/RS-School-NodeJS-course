const {Router} = require('express');
const userService = require('./userService');

const {getAllUsers, getUser, createUser, updateUser, deleteUser} = userService;

const router = Router();

router.get('/', async (req, res) => {
  const allUsers = await getAllUsers();

  res.send(allUsers)
});


router.get('/:id', async (req, res) => {
  const user = await getUser(req.params.id);

  res.send(user)
});


router.post('/', async (req, res) => {
  await createUser();

  res.send('Create new user is dane')
});


router.put('/:id', async (req, res) => {
  const updateUser = await updateUser(req.params.id);

  res.send(updateUser)
});


router.delete('/:id',async (req, res) => {
  await deleteUser(req.params.id);

  res.send(`User with id ${req.params.id} was deleted`)
});


module.exports = router;