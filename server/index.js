const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const todos = [
  {
    id: 1,
    name: 'Get a pizza',
    isComplete: false
  }
]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/api/todos', function (req, res) {
  res.json(todos)
})

app.post('/api/todos', function (req, res) {
  todos.push(req.body)
  res.json('Todo Added!')
})

app.put('/api/todos', function (req, res) {
  var copy = req.body
  todos[todos.findIndex(todo => todo.id === copy.id)] = copy

  res.json('Todo updated!')
})

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
