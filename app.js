const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.get('/', (req,res) => {
  const  blogs = [
    {title:  "belog1", snippet: 'lorem belog01 sit amet'},
    {title:  "belog2", snippet: 'lorem belog02 sit amet'},
    {title:  "belog3", snippet: 'lorem belog03 sit amet'}
  ]
  res.render('index', {title: 'Home', blogs})
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


