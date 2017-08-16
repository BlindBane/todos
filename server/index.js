const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) // for parsing application/json

const todos = [
]

app.get('/api/todos', function (req, res) {
  res.json(todos)
})

app.post('/api/todos', function (req, res) {
  todos.push(req.body)
  res.send('Todo added!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
