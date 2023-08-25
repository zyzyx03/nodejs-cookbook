const http = require('http')

const server = http.createServer((req ,res) => {
  console.log(req.url, req.method)

  // set header content type
  res.setHeader('Content-Type', 'text/html')
  
  res.write('<head><link rel="stylesheet" href="#"></head>')
  res.write('<p>Hello Ninja</p>')
  res.write('<p>Hello Again Ninja</p>')
  res.end()
})

server.listen(3000, 'localhost', () => {
  console.log('Listening for request on port 3000')
})