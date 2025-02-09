const http = require('http')

const processRequest = (req, res) => {
  res.setHeader('Conten-Type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('<h1> Bienvenido </h1>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.end('<h1> Mi contacto </h1>')
  } else {
    res.statusCode = 404 // Error 404
    res.end('<h1> Error 404 </h1>')
  }
}

const server = http.createServer(processRequest)

const desiredPort = 3000
server.listen(desiredPort, () => {
  console.log(`Server running on port -> http://localhost:${desiredPort}`)
})
