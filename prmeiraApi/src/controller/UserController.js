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
    });
    res.send(200, sortedUsers)
   
  },

  getUserById(req, res){
    const { id } = req.params;
    const user = users.find((user) => user.id == Number(id))
    
    if(!user){
      return res.send(400,{ error: 'user not found'} )
    }
      res.send(200, user)
    
  },

  createUser(req, res){
    let body = ''

      req.on('data', (chunk) =>{
        body += chunk
      });

      req.on('end', () =>{
        body = JSON.parse(body)

        const lastUserId = users[users.length - 1].id
        const newUser = {
          id: lastUserId + 1,
          name: body.name,
        };
        
        console.log(newUser)
        users.push(newUser);

        res.send(200, newUser);
      });     
  },
};