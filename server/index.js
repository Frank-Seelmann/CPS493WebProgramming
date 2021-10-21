const express = require('express');
const usersController = require('./controllers/users')

const app = express()
const port = 3000

app
.get('*', (req, res, next)=>{
  console.log('A request came in.');
  next();
})
.get('/', (req, res) => { //these are requests
  res.send('Hello World!') //send is a terminal request
})
.get('/newpaltz', (req,res) => {
  res.send('Hello New Paltz!!')
})
.use('/users', usersController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})