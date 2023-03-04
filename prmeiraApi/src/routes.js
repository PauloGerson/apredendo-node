const UserController = require('./controller/UserController')


module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUser,
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById,
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser,
  },
];

