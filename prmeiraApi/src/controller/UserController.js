const users = require('../mocks/users')

module.exports = {
  listUser(req, res){
    const {order} = req.query

    const sortedUsers = users.sort( (a,b) => {
      if(order === 'desc'){
        
        return a.id < b.id ? 1: -1;
      }
      console.log('Order:' + a)
      return a.id > b.id ? 1: -1;
    })
    res.writeHead(200,   {'Content-Type': 'application/json'})
    res.end(JSON.stringify(users))
  },

  getUserById(req, res){
    const {id} = req.params;

    const user = users.find( user => user.id == Number(id))

    if(!user){
      res.writeHead(400,   {'Content-Type': 'application/json'})
      res.end(JSON.stringify({error: 'User not found'}))
    }else{

    }

    res.writeHead(200,   {'Content-Type': 'application/json'})
    res.end(JSON.stringify({user}));
  }
};