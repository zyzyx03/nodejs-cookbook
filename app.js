const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use((req,res, next) =>{
  console.log('new request made:')
  console.log('host:', req.hostname)
  console.log('path:', req.path)
  console.log('method', req.method)
  next()
})


app.get('/', (req,res) => {
  const  blogs = [
    {title:  "belog1", snippet: 'lorem belog01 sit amet'},
    {title:  "belog2", snippet: 'lorem belog02 sit amet'},
    {title:  "belog3", snippet: 'lorem belog03 sit amet'}
  ]
  res.render('index', {title: 'Home', blogs})
})

// Just to prove a point, this handle will not show in console
app.use((req,res, next) =>{
  console.log('in the next middleware')
  next()
})

app.get('/about', (req,res) => {
  res.render('about', {title: 'About'})
})

app.get('/blogs/create', (req,res) =>{
  res.render('create', {title: 'Create'})
})

app.use((req,res) => {
  res.status(404).render('404', {title: '404'})
})

const port = 3000
app.listen(port)


