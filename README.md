# View Engines
```js
const express = require('express')

const app = express()

// register view engine

app.set('view-engine', 'ejs')

app.get('/', (req,res) => {
  cons  blogs = [
    {title:  "belog1", snippet: 'lorem belog01 sit amet'},
    {title:  "belog2", snippet: 'lorem belog02 sit amet'},
    {title:  "belog3", snippet: 'lorem belog03 sit amet'}
  ]
    res.sendFile('./views/index.html', { root: __dirname})
})

app.get('/about', (req,res) => {
    res.sendFile('./views/about.html', { root: __dirname})
})

// Redirect
app.get('/about-us', (req,res) => {
  res.redirect('/about')
})

// 404 page
app.use((req,res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname})
})


const port = 3000
app.listen(port)
```