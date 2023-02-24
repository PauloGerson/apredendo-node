const http = require('http')
const routes = require('./routes')

const server = http.createServer( (req, res) => {
  const route = routes.find( (routeObj) => {
    console.log(req.url, req.method)
   return routeObj.endpoint === req.url && routeObj.method == req.method   

  })
console.log(route)

  if(route){
    route.handler(req,res)
   
  }else{
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.end(`Cannot ${req.method} ${req.url}`)
  }
});

server.listen( 3000, () => console.log("Rodando"))